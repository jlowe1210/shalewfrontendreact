import React from "react";
import styles from "./Banner.module.css";

function Banner({ page }) {
  return (
    <div className={styles.banner_container}>
      <h1>{page}</h1>
    </div>
  );
}

export default Banner;
