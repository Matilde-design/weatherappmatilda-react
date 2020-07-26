import React, {useState} from "react";
import axios from "axios";
import "./forecast.css";

import ForecastComponent from "./ForecastComponent";


export default function Forecast(props) {
const [over, setOver] = useState (false);
const [forecast, setForecast] = useState ("");

let apiKey = "e947cb2640f1db92e6a19005bc43b435"
let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`


function showForecast(response){
  setForecast (response.data);
  setOver(true);
}

if (over && props.city ===forecast.city.name){
  return (
  <div className="forecastInfo row">
   <ForecastComponent data={forecast.list[0]} unit={props.unit} />
   <ForecastComponent data={forecast.list[1]} unit={props.unit} />
   <ForecastComponent data={forecast.list[2]} unit={props.unit} />
   <ForecastComponent data={forecast.list[3]} unit={props.unit} />
   <ForecastComponent data={forecast.list[4]} unit={props.unit} />
   <ForecastComponent data={forecast.list[5]} unit={props.unit} />
    </div>
    );

} else {
  axios.get(apiUrl).then(showForecast);

  return (
    <h3>Please wait...</h3>
  );
}

}
