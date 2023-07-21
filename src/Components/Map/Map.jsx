import React from "react";

function Map() {
  return (
    <iframe
      src="https://maps.google.com/maps?q=peekskill&hl=en-US&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      height="450"
      style={{ border: "1px solid black", width: "100%", margin: "30px 0" }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

export default Map;
