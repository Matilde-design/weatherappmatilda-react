import React, {useState} from "react";
import axios from "axios";
import "./forecast.css";
import IconComponent from "./IconComponent";

export default function Forecast(props) {
const [over, setOver] = useState (false);
const [forecast, setForecast] = useState ("");


function showForecast(response){
  setForecast (response.data);
  setOver(true);
}

¢
  return (
  <div className="forecastInfo row">
    <div className="col">
    {new Date(forecast.list[0].dt * 1000).getHours()}:00
    <IconComponent code={forecast.list[0].weather[0].icon} /> 
    {Math.round(forecast.list[0].main.temp_max)}º | <small> {Math.round(forecast.list[0].main.temp_min)}º </small>
    </div>
    </div>
    );

} else {

let apiKey = "e947cb2640f1db92e6a19005bc43b435"
let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`

  axios.get(apiUrl).then(showForecast);

  return (
    <h3>Please wait...</h3>
  );
}

}
