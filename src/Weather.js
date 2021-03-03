import React from "react";
import axios from 'axios';
import Loader from "react-loader-spinner";

export default function Weather(props) {
    function displayTemperature(response) {
   alert(`The temperature in ${props.city} is ${Math.round(response.data.main.temp)}°C`);
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=2fb16a57cb4b18c7686f92b2ebb6446f&units=metric`;
  axios.get(url).then(displayTemperature);

    return (
        <Loader type="Hearts" color="pink" height={80} width={80} />
        );
}
