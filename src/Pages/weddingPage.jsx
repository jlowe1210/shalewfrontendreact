import React from "react";
import { useQuery } from "@tanstack/react-query";
import { photoQuery } from "../main";
import Banner from "../Components/Banner/Banner";

function WeddingPage() {
  const { data } = useQuery(photoQuery("weddings"));

  return (
    <>
      <Banner page={"Weddings"} />

      {data.map(({ url }) => {
        return <img key={url} loading="lazy" src={url} />;
      })}
    </>
  );
}

export default WeddingPage;
