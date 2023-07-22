import React from "react";
import Container from "../Container/Container";
import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "50px" }}>
        Clients Testimonials
      </h1>
      <div className={styles.testimonial_section}>
        <Container>
          <div className={styles.testimonial_container}>
            <div className={styles.testimonial}>
              <p>
                <span style={{ fontWeight: "bold", fontSize: "50px" }}>"</span>
                Shalew events was beyond amazing. Her professionalism,
                consideration, and work ethic, is unmatched. She works with your
                budget but still makes you feel like your vision isn’t too far
                out of reach. Everything was perfect. Thank you so much again
                for all your hard work and dedication. Will definitely recommend
                and be using again for the next event.
              </p>
            </div>
            <div className={styles.testimonial}>
              <p>
                <span style={{ fontWeight: "bold", fontSize: "50px" }}>"</span>
                Sha Lew events planned my party from start to finish. I was so
                surprised by all the wonderful details she added to my event.
                Her staff was punctual and stay with me until everything was set
                up. I use her at all my events and is nvr disapointed. She has
                great style and can bring any vision to life!!
              </p>
            </div>
            <div className={styles.testimonial}>
              <p>
                <span style={{ fontWeight: "bold", fontSize: "50px" }}>"</span>
                "Wow, I must say, working with Shalew events was an absolute
                game-changer! Their extraordinary talent for creating
                unforgettable events is unparalleled. From start to finish, they
                meticulously crafted an experience that left us all in awe. The
                attention to detail was simply astounding, and every aspect of
                the event was flawlessly executed.
              </p>
              <p style={{ textAlign: "right", fontWeight: "bold" }}>- India</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Testimonials;
