import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import styles from "./OurServicesSection.module.css";

function OurServicesSection() {
  return (
    <div className={styles.services_section}>
      <h1>Event Services</h1>
      <Container>
        <div className={styles.services_section_container}>
          <div className={styles.services_section_container_item}>
            <h1>Weddings</h1>
            <div className={styles.image_container}>
              <img
                loading="lazy"
                alt="wedding photo"
                src="https://static.wixstatic.com/media/6c0ded_e83ef7cd41f444d789a7cae09a099f2b~mv2.jpg/v1/fill/w_620,h_564,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_3918.jpg"
              />
            </div>
            <Link to={"/weddings"}>View</Link>
          </div>
          <div className={styles.services_section_container_item}>
            <h1>Birthdays</h1>
            <div className={styles.image_container}>
              <img
                loading="lazy"
                alt="birthday photo"
                src="https://static.wixstatic.com/media/6c0ded_1a558cdaa0bd4171a6ab58c5184dc7fa~mv2.jpg/v1/fill/w_620,h_564,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_3917.jpg"
              />
            </div>
            <Link to={"/birthdays"}>View</Link>
          </div>
          <div className={styles.services_section_container_item}>
            <h1>Kids events</h1>
            <div className={styles.image_container}>
              <img
                loading="lazy"
                alt="photo of a kid"
                src="https://static.wixstatic.com/media/6c0ded_89ea4d862d7c4f0b8754490d0f9da686~mv2.jpg/v1/crop/x_0,y_313,w_1074,h_977/fill/w_620,h_564,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_4095_JPG.jpg"
              />
            </div>
            <Link to={"/kidevents"}>View</Link>
          </div>
          <div className={styles.services_section_container_item}>
            <h1>Baby showers</h1>
            <div className={styles.image_container}>
              <img
                loading="lazy"
                alt="photo of baby shower"
                src="https://static.wixstatic.com/media/6c0ded_7db76a35fa5242d6bcd9f51d6558f9a7~mv2.jpg/v1/fill/w_620,h_564,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_3920.jpg"
              />
            </div>
            <Link to={"/babyshowers"}>View</Link>
          </div>
          <div className={styles.services_section_container_item}>
            <h1>Sweet 16</h1>
            <div className={styles.image_container}>
              <img
                loading="lazy"
                alt="photo of sweet sixteen"
                src="https://i.ibb.co/DbfRfr3/301036989-1674668249599938-225344964449317354-n.jpg"
              />
            </div>
            <Link to={"/sweet16"}>View</Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default OurServicesSection;
