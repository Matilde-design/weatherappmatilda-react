import React, {useState}from "react";
import "./description.css";
import axios from "axios";
import DateComponent from "./DateComponent";

export default function Description(props) {
    const apiKey = "e947cb2640f1db92e6a19005bc43b435";
    
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${
      props.city
    }&appid=${apiKey}&units=metric`;

    const [data, setData] = useState({loaded: false});

    function displayTemperature(response){

console.log (response.data);
setData({
  loaded: true,
  date: new Date (response.data.dt * 1000),
  temperature: Math.round(response.data.main.temp),
  description: response.data.weather[0].description,
  wind: response.data.wind.speed,
  humidity: response.data.main.humidity,

})
    }

    if (data.loaded) {return (
    <div className="daily-weather-info">
       <div className="row">
          <h1>{props.city} </h1>
       </div>
       <div className="row">
          <p className="text-capitalize">{data.description}</p>
       </div>
       <div className="row hours">  <DateComponent date={data.date} />  
       </div>
       <div className="row">
         <div className="col-6"> <span className="weather-image">☀︎</span> </div>
         <div className="col-6 temperatureinfo">
          <p> <span className="temperature"> {data.temperature}  </span> 
        <span className="units">
        <span  id="celsius" className="active">
          ºC{" "}
        </span>
        |{" "}
        <span id="fahrenheit">
          ºF
        </span>
        </span>
      </p>
      <ul>
        <li>
          Wind: {Math.round(data.wind)} km/h
        </li>
        <li>Humidity: {data.humidity}%</li>
      </ul>
        </div>
      </div>
    
     </div>
  );}
  else {
    axios.get(apiUrl).then(displayTemperature);
    return <h1>Loading...</h1>}
}
