import React from "react";
import styles from "./AboutMe.module.css";

function AboutMe() {
  return (
    <div className={styles.about_section}>
      <div className={styles.about_section_image}>
        <img src="me.png" alt="picture of shalew CEO" />
      </div>
      <div className={styles.about_section_story}>
        <h1>Shalews story</h1>
        <p>
          In August of 2014, Shaunte Rivera founded Shalew Events, this is our
          story!. Shalew Events is a play on Shaunte's school nickname growing
          up. In 2003, Shaunte graduated with a degree in Fashion Marketing and
          Management. However, she discovered her love for events in 2008 when
          she put on her first event for White House Black Market a retail store
          she managed at the time. Through this process, she found her love for
          assisting clients in styling their event, which eventually led her to
          branch into the world of event planning full time. Shaunte's passion
          for creating beautiful simplicity and elegance through her event
          design and bringing her client's event dreams to life is what really
          drove Sha Lew Events. Shaunte now leads the event design and styling
          teams, while her brother and nephew oversee many aspects such as
          management and marketing.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
