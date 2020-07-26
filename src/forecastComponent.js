import React from "react";
import "./forecast.css";
import IconComponent from "./IconComponent";

export default function ForecastComponent (props){
    return(
    
    <div className="col">
    {new Date(props.data.dt * 1000).getHours()}:00
    <IconComponent code={props.data.weather[0].icon} /> 
    {Math.round(props.data.main.temp_max)}º | <small> {Math.round(props.data.main.temp_min)}º </small> 
   </div> 
   );
}
