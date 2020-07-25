import React from "react";

export default function DateComponent (props){
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = days [props.date.getDay()];
    let date = props.date.getDate();
    let hours = props.date.getHours();
    let minutes = props.date.getMinutes();
    if (minutes <10) {
        minutes =`0${minutes}`
    }
    if (hours <10) {
        hours =`0${hours}`
    }


    return (<p> <small> {day} {date}, {hours}:{minutes} </small></p>)
}