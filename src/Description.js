import React, {useState}from "react";
import "./description.css";
import axios from "axios";

export default function Description(props) {

    let apiKey = "6da49f4c9efbefcf042ac4b59c666478";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${
      props.city
    }&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayTemperature);

    let [temperature, setTemperature] = useState(null);
    let [description, setDescription] = useState(null);


    function displayTemperature(response){
setTemperature (Math.round(response.data.main.temp))
setDescription (response.data.weather[0].description)
console.log (response.data);
    }

    if (temperature) {return (
    <div className="daily-weather-info">
      <ul>
        <li>Right now in,</li>
        <li className="city" id="city">
     <i>{props.city}</i>
        </li>
        <li id="description">It's {description}</li>
      </ul>
      <strong id="temperature"> {temperature} </strong>
      <span className="units" />
        <span  id="celsius" className="active">
          ºC{" "}
        </span>
        |{" "}
        <span id="fahrenheit">
          ºF
      </span>
      <ul>
        <li>
          <small id="date"> Sunday 21</small>
        </li>
        <li>
          <small id="time"> 11:20 am</small>
        </li>
      </ul>
      </div>
    
  );}
  else {return <h2>LOADING...</h2>}
}
