import React from "react";
import "./wrapper.css";
import Form from "./Form";
import Mainweather from "./MainWeather";
import Description from "./Description";
import Forecast from "./Forecast";

export default function Wrapper() {
  return (
    <div className="weather-app-wrapper">
        <Form />
        <div className="space" />
        <div className="row">
          <div className="col-6">
            <Mainweather />
          </div>
          <div className="col-6">
            <Description city="Porto"/>
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
  );
}