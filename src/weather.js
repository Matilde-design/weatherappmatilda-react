import React from "react";
import axios from "axios";

export default function Weather (){

function showResponse(response){
    alert (`The weather in Porto is ${Math.round(response.data.main.temp)}º`)
}
 let apiKey = "6da49f4c9efbefcf042ac4b59c666478";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Porto&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showResponse)
return (
    <p>Hello Summer!</p>
)
}