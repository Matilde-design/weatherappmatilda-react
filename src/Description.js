import React from "react";
import "./description.css";
import DateComponent from "./DateComponent";
import IconComponent from "./IconComponent"

export default function Description(props) {

return (
    <div className="daily-weather-info">
       <div className="row">
          <h2>{props.info.city} </h2>
       </div>
       <div className="row">
          <p className="text-capitalize">{props.info.description}</p>
       </div>
       <div className="row hours">  <DateComponent date={props.info.date} />  
       </div>
       <div className="row">
<div className="col-6">
  <IconComponent code={props.info.icon} alt={props.info.description} /> 
   </div>
   <div className="col-6 temperatureinfo">
          <p> <span className="temperature"> {props.info.temperature}  </span> 
        <span  id="celsius" className="active">
          ºC{" "}
        </span>
        |{" "}
        <span id="fahrenheit">
          ºF
        </span>
      </p>
      <ul>
        <li>
          Wind: {Math.round(props.info.wind)} km/h
        </li>
        <li>Humidity: {props.info.humidity}%</li>
      </ul>
        </div>
      </div>
    
     </div>
  );}