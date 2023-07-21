import React from "react";
import styles from "./Photo.module.css";

function Photo({ photo }) {
  return (
    <div className={styles.photo_container}>
      <img loading="lazy" className={styles.photo} src={photo.url} />
    </div>
  );
}

export default Photo;
