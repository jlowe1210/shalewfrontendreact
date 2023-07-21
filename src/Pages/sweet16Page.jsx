import React from "react";
import { useQuery } from "@tanstack/react-query";
import { photoQuery } from "../main";
import Banner from "../Components/Banner/Banner";
import PhotoGalleryContainer from "../Components/PhotoGalleryContainer/PhotoGalleryContainer";

function sweet16Page() {
  const { data } = useQuery(photoQuery("sweet16"));

  return (
    <>
      <Banner page={"Sweet 16"} />
      <PhotoGalleryContainer photos={data}>
        {data.map(({ url }) => {
          return <img key={url} loading="lazy" src={url} />;
        })}
      </PhotoGalleryContainer>
    </>
  );
}

export default sweet16Page;
