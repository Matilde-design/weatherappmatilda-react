import React, {useState} from "react";

export default function UnitsComponent(props){
    const [metrics, setMetrics]= useState("celsius");
    function convertoFahrenheit (event){
        event.preventDefault ();
        setMetrics("fahrenheit")
    }

    function convertoCelsius(event){
        event.preventDefault();
        setMetrics("celsius")
    }

    if (metrics === "celsius"){
        return ( 
            <div className="units">
            <span className="temperature"> {props.celsius}  </span> 
            <span className="units">
            ºC| <a href="/" onClick={convertoFahrenheit}> ºF </a>
            </span>
            
            </div>
            );

    } else {
        let fahrenheit = Math.round((props.celsius * 9/5)+32 );
        return(
            <div className="units">
            <span className="temperature"> {fahrenheit}  </span> 
            <span className="units">
            <a href="/" onClick={convertoCelsius}> ºC </a> | ºF
            </span>
            </div>
        );
    }


}
