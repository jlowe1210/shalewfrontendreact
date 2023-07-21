import React from "react";
import Container from "../Container/Container";
import Photo from "../Photo/Photo";
import styles from "./PhotoGalleryContainer.module.css";

function PhotoGalleryContainer({ photos }) {
  return (
    <Container>
      <div className={styles.photos_container}>
        {photos.map((photo) => {
          return <Photo key={photo.url} photo={photo} />;
        })}
      </div>
    </Container>
  );
}

export default PhotoGalleryContainer;
