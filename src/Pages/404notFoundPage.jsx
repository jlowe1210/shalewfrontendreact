import React from "react";
import Footer from "../Components/Footer/Footer";

function PageNotFound() {
  const style = {
    display: "flex",
    height: "calc(100vh - 170px)",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <>
      <div style={style}>
        <h1 style={{ fontSize: "50px" }}>404 page not found</h1>
      </div>
    </>
  );
}

export default PageNotFound;
