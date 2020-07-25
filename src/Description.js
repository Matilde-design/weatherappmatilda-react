import React, {useState}from "react";
import "./description.css";
import axios from "axios";

export default function Description(props) {

    let apiKey = "6da49f4c9efbefcf042ac4b59c666478";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${
      props.city
    }&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayTemperature);

    const [temperature, setTemperature] = useState(null);
    const [description, setDescription] = useState(null);


    function displayTemperature(response){
setTemperature (Math.round(response.data.main.temp))
setDescription (response.data.weather[0].description)
console.log (response.data);
    }

    if (temperature) {return (
    <div className="daily-weather-info">
       <div className="row">
          <h1>{props.city} </h1>
       </div>
       <div className="row">
          <p className="text-capitalize">{description}</p>
       </div>
       <div className="row hours"> <p> <small> Sunday 21, 11:00 </small></p> 
       
       </div>
       <div className="row">
         <div className="col-6"> <span className="weather-image">☀︎</span> </div>
         <div className="col-6 temperatureinfo">
          <p> <span className="temperature"> {temperature}  </span> 
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
        </div>
      </div>
    
     </div>
  );}
  else {return <h2>LOADING...</h2>}
}
