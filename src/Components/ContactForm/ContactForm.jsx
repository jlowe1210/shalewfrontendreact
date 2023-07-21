import React from "react";
import styles from "./ContactForm.module.css";
import { useForm, Controller } from "react-hook-form";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    trigger,
    setValue,
    getValues,
    reset,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
    defaultValues: {
      phone: "",
      date_time: "",
      name: "",
      contact_method: "",
    },
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (message) => {
      return axios.post("/api/message", message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["messages"] });
    },
    onError: (error) => {
      const parsedErrorObj = JSON.parse(error.response.data);

      for (let key in parsedErrorObj) {
        console.log(key, parsedErrorObj[key]);
        setError(key, { message: parsedErrorObj[key].message });
      }
    },
  });

  const onSubmit = (data) => {
    reset();
    mutation.mutate(data);
  };

  let isCallOrTextSelected = watch("contact_method");

  isCallOrTextSelected =
    isCallOrTextSelected === "Call" || isCallOrTextSelected === "Text";

  const handlePhoneNumberChange = (e, value) => {
    if (isNaN(Number(e.target.value)) && !isNaN(Number(value))) {
      return value;
    }

    let phoneNumber = e.target.value;

    if (phoneNumber.length > 10)
      // Remove all non-digit characters from the phone number
      phoneNumber = phoneNumber.replace(/\D/g, "");

    // Check if the cleaned phone number is a valid US phone number
    const isValid = /^1?\d{10}$/.test(phoneNumber);

    if (isValid) {
      // If the phone number is valid, format it to US standard format
      const formatted = phoneNumber.replace(
        /(\d{3})(\d{3})(\d{4})/,
        "($1) $2-$3"
      );

      return formatted;
    } else {
      // If the phone number is not valid, splice the remaining digits if it exceeds 10
      if (phoneNumber.length > 10) {
        phoneNumber = phoneNumber.slice(0, 10);
        const formatted = phoneNumber.replace(
          /(\d{3})(\d{3})(\d{4})/,
          "($1) $2-$3"
        );

        return formatted;
      }
    }
    return phoneNumber;
  };

  function validatePhoneNumber(phoneNumber) {
    // Remove all non-digit characters from the phone number
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");

    // Check if the cleaned phone number is a valid US phone number
    const isValid = /^1?\d{10}$/.test(cleanedPhoneNumber);

    return isValid;
  }

  useEffect(() => {
    const formWatchSub = watch(() => {
      mutation.reset();
    });

    return () => {
      formWatchSub.unsubscribe();
    };
  }, [watch]);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {mutation.isSuccess ? (
        <div
          style={{ textAlign: "center", fontSize: "35px", color: "lightgreen" }}
        >
          Message sent!
        </div>
      ) : null}
      {mutation.isError ? (
        <div style={{ textAlign: "center", fontSize: "35px", color: "red" }}>
          Unable to send messsage
        </div>
      ) : null}
      <label className={styles.label}>Name *</label>
      {errors.name && <span className={styles.error}>Name is required</span>}

      <Controller
        control={control}
        name="name"
        rules={{
          required: true,
          validate: (value) => {
            return !!value.trim();
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <input
              className={`${styles.input} ${
                errors.name ? styles.error_input : ""
              }`}
              placeholder="Enter your name*"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              name="name"
            />
          );
        }}
      />

      <label>Address </label>
      <input placeholder="Enter your address" {...register("address")} />

      <div className={styles.contact_group}>
        <div className={styles.contact_group_input_container}>
          <label>Email*</label>
          {errors.email && (
            <span className={styles.error}>
              Please enter a valid email address
            </span>
          )}
          <input
            name="email"
            className={`${errors.email ? styles.error_input : ""}`}
            placeholder="Enter your email*"
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              onChange: (e) => {
                e.target.value = e.target.value.trim();
              },
            })}
          />
        </div>

        <Controller
          control={control}
          name="phone"
          rules={{
            validate: {
              isValidPhoneNumber: (value) => {
                if (
                  !validatePhoneNumber(value) &&
                  (getValues("contact_method") === "Call" ||
                    getValues("contact_method") === "Text")
                ) {
                  return "Please a valid phone number";
                }
                return true;
              },
            },
          }}
          render={({ field: { onChange, onBlur, value, ref } }) => {
            return (
              <div className={styles.contact_group_input_container}>
                <label>Phone number</label>
                {errors?.phone && isCallOrTextSelected && (
                  <span className={styles.error}>{errors?.phone.message}</span>
                )}
                <input
                  className={`${
                    errors.phone && isCallOrTextSelected
                      ? styles.error_input
                      : ""
                  }`}
                  placeholder={`Enter a phone number${
                    isCallOrTextSelected ? "*" : ""
                  }`}
                  type={"tel"}
                  value={value}
                  onChange={(e) => onChange(handlePhoneNumberChange(e, value))}
                  onBlur={onBlur}
                />
              </div>
            );
          }}
        />
      </div>

      <select
        {...register("contact_method", {
          onChange: (e) => {
            setValue("contact_method", e.target.value);
            trigger(["date_time", "phone"]);
          },
        })}
      >
        <option value={""}>Preferred of contacting</option>
        <option value={"Call"}>Call</option>
        <option value={"Text"}>Text</option>
        <option value={"Email"}>Email</option>
      </select>

      {isCallOrTextSelected ? (
        <>
          <Controller
            control={control}
            name="date_time"
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur } }) => {
              return (
                <div className={styles.contact_group_date_time}>
                  <label>Time to call or text*</label>
                  {(errors.date_time || getValues("date_time") === "") && (
                    <span className={styles.error}>
                      Date and time is required
                    </span>
                  )}

                  <input
                    className={`${styles.input} ${
                      errors.date_time || getValues("date_time") === ""
                        ? styles.error_input
                        : ""
                    }`}
                    type={"datetime-local"}
                    value={watch("date_time")}
                    onChange={(e) => onChange(e)}
                    onBlur={onBlur}
                    min={new Date().toISOString().substring(0, 16)}
                  />
                </div>
              );
            }}
          />
        </>
      ) : null}

      <label>Subject</label>
      <input placeholder="Enter the subject" {...register("subject")} />
      <label>Message</label>
      <textarea
        className={styles.form_textbox}
        placeholder="Enter your message"
        {...register("message")}
      />
      <button
        disabled={!isValid}
        style={{ backgroundColor: !isValid ? "gray" : "", fontSize: "20px" }}
        type="submit"
      >
        {mutation.isLoading ? "Sending message" : "Submit"}
      </button>
    </form>
  );
}

export default ContactForm;
