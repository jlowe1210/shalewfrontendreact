import React from "react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import styles from "./VideoBackGround.module.css";

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue((value) => value + 1); // update state to force render
  // A function that increment 👆🏻 the previous state like here
  // is better than directly setting `setValue(value + 1)`
}

function VideoBackGround() {
  const videoRef = useRef();
  const forceUpdate = useForceUpdate();

  const style = {
    width: "100%",
    objectFit: "cover",
    height: "70vh",
    overflow: "hidden",
  };

  useEffect(() => {
    videoRef.current.play();
    forceUpdate();
  }, []);

  return (
    <>
      <div className={styles.section}>
        <div className={styles.section_overlay}></div>
        <div className={styles.section_tagline_container}>
          <div>
            <h4
              style={{
                fontWeight: "bold",
                fontSize: "40px",
                marginBottom: "20px",
              }}
            >
              Welcome to...
            </h4>
            <h1 className={`${styles.section_tagline_header} ${styles.anim}`}>
              <span style={{ color: "#F1A3CB" }}>S</span>ha
              <span style={{ color: "#F1A3CB" }}>l</span>ew{" "}
              <span style={{ color: "#F1A3CB" }}>E</span>vents
            </h1>
            <h2
              style={{ animationDelay: "0.7s" }}
              className={`${styles.section_tagline_sub_header} ${styles.anim}`}
            >
              <span style={{ color: "#F1A3CB" }}>E</span>legance{" "}
              <span style={{ color: "#F1A3CB" }}>E</span>levates{" "}
              <span style={{ color: "#F1A3CB" }}>E</span>very{" "}
              <span style={{ color: "#F1A3CB" }}>E</span>vent
            </h2>
          </div>
        </div>
        <video ref={videoRef} playsInline muted loop style={style}>
          <source type="video/mp4" src="/vi.mp4" />
        </video>
      </div>
    </>
  );
}

export default VideoBackGround;
