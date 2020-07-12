import React from "react";
import "./styles.css";

export default function Forecast() {
  return (
    <p>
      {" "}
      12:00 <br /> <span className="icon"> ☀︎ </span> <br />{" "}
      <span className="forecast-max-temp">25º</span> |
      <small className="align-middle">18º</small>
    </p>
  );
}
