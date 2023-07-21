import React from "react";
import { useQuery } from "@tanstack/react-query";
import { photoQuery } from "../main";
import Banner from "../Components/Banner/Banner";
import PhotoGalleryContainer from "../Components/PhotoGalleryContainer/PhotoGalleryContainer";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const validPaths = [
  "weddings",
  "birthdays",
  "sweet16",
  "kidevents",
  "babyshowers",
];

function PhotoGalleryPage() {
  const { gallery } = useParams();
  const navigate = useNavigate();
  const { data } = useQuery(photoQuery(gallery));

  useEffect(() => {
    if (validPaths.indexOf(gallery) === -1) {
      navigate("/404");
    }
  }, [gallery]);

  return (
    <>
      <Banner page={gallery} />
      <PhotoGalleryContainer photos={data} />
    </>
  );
}

export default PhotoGalleryPage;
