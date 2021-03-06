import React from "react";
import './unitsComponent.css';

export default function UnitsComponent(props){

    function convertoFahrenheit (event){
        event.preventDefault ();
        props.setUnit("fahrenheit")
    }

    function convertoCelsius(event){
        event.preventDefault();
        props.setUnit("celsius")
    }

    if (props.unit === "celsius"){
        return ( 
            <div >
            <span className="temperature"> {props.celsius}  </span> 
            <span className="units">
          ºC |{" "}
          <a href="/" onClick={convertoFahrenheit}>
            {" "}
            ºF{" "}
          </a>
          </span>
            </div>
            );

    } else {
        let fahrenheit = Math.round((props.celsius * 9)/5+32 );
        return(
            <div>
        <span className="temperature"> {fahrenheit} </span>
        <span className="units">
          <a href="/" onClick={convertoCelsius}>
            {" "}
            ºC{" "}
          </a>{" "}
          | ºF
        </span>
      </div>
        );
    }

}
