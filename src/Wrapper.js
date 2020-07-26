import React, { useState } from "react";
import "./wrapper.css";
import Form from "./Form";
import Description from "./Description";
import Forecast from "./Forecast";

import axios from "axios";

export default function Wrapper(props) {
  const apiKey = "e947cb2640f1db92e6a19005bc43b435";
  const [city, setCity] = useState("porto");
  const [data, setData] = useState({ loaded: false });
  const [unit, setUnit] = useState("celsius");

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  function handleSubmit(event) {
    event.preventDefault();
    axios.get(apiUrl).then(displayTemperature);
  }

  function displayTemperature(response) {
    setData({
      loaded: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
    });
  }
  if (data.loaded) {
    return (
      <div className="weather-app-wrapper">
        <Form setCity={setCity} handleSubmit={handleSubmit} />
        <div className="row">
          <Description info={data} unit={unit} setUnit={setUnit} />
        </div>
        <div className="space" />
        <div className="row next-days-weather" id="weatherForecast">
          <div className="space" />

          <Forecast city={data.city} unit={unit} />
        </div>
      </div>
    );
  } else {
    axios.get(apiUrl).then(displayTemperature);
    return <h1>Loading...</h1>;
  }
}