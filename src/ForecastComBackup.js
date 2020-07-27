import React from "react";
import "./forecast.css";
import IconComponent from "./IconComponent";

export default function ForecastComponent (props){
    console.log(props.units)
    if (props.unit === "celsius")
   { return(
    <div className="col">
    {new Date(props.data.dt * 1000).getHours()}:00
    <IconComponent code={props.data.weather[0].icon} /> 
    {Math.round(props.data.main.temp_max)}º | <small> {Math.round(props.data.main.temp_min)}º </small> 
   </div> 
   );
}else {
    let fahrenheitMax= Math.round ((props.data.main.temp_max * 9)/5 +32);
    let fahrenheitMin= Math.round ((props.data.main.temp_min * 9)/5 +32);
    return (
        <div className="col">
            {new Date (props.data.dt*1000).getHours()}:00
            <IconComponent code={props.data.weather[0].icon} />
        {Math.round(fahrenheitMax)}º |{" "}
        <small> {Math.round(fahrenheitMin)}º </small>
        </div>
    )
}
}
