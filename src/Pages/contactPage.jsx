import React from "react";
import Banner from "../Components/Banner/Banner";
import ContactInfo from "../Components/ConntactInfo/ContactInfo";
import ContactForm from "../Components/ContactForm/ContactForm";
import Container from "../Components/Container/Container";
import Map from "../Components/Map/Map";

const style = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  marginTop: "30px",
};

function ContactPage() {
  return (
    <>
      <Banner page={"Contact"} />
      <Container>
        <h1 style={{ marginTop: "30px", textAlign: "center" }}>
          Shalew Events is located in Northern Westchester, New York, and we
          proudly serve all of New York, New Jersey, Connecticut and we are also
          willing to travel!. We provide our clients with full service event
          planning, styling, and seamless execution to ensure your event is
          memorable for you and your guests.
        </h1>
        <div style={style}>
          <ContactInfo />
          <ContactForm />
        </div>
        <Map />
      </Container>
    </>
  );
}

export default ContactPage;
