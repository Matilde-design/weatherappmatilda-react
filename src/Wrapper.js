import React from "react";
import "./styles.css";
import Form from "./Form";
import Mainweather from "./MainWeather";
import Description from "./Description";
import Forecast from "./Forecast";

export default function Wrapper() {
  return (
    <div className="weather-app-wrapper">
      <div className="container">
        <Form />
        <div className="space" />
        <div className="row">
          <div className="col-6">
            <Mainweather />
          </div>
          <div className="col-6">
            <Description city="Madrid"/>
          </div>
        </div>
        <div className="space" />
        <div className="row next-days-weather" id="weatherForecast">
          <div className="space" />
          <div className="col-2">
            <Forecast />
          </div>
          <div className="col-2">
            <Forecast />
          </div>
          <div className="col-2">
            <Forecast />
          </div>
          <div className="col-2">
            <Forecast />
          </div>
          <div className="col-2">
            <Forecast />
          </div>
          <div className="col-2">
            <Forecast />
          </div>
        </div>
      </div>
    </div>
  );
}