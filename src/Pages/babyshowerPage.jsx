import React from "react";
import { useQuery } from "@tanstack/react-query";
import { photoQuery } from "../main";
import Banner from "../Components/Banner/Banner";

function BabyShowerPage() {
  const { data } = useQuery(photoQuery("babyshowers"));

  return (
    <>
      <Banner page={"Baby Showers"} />
      {data.map(({ url }) => {
        return <img key={url} loading="lazy" src={url} />;
      })}
    </>
  );
}

export default BabyShowerPage;
