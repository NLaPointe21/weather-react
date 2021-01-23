import React, { useState } from "react";
import Forecast from "./Forecast";
import axios from "axios";

export default function WeeklyForecast(props) {
  const [load, setLoad] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data);
    setLoad(true);
  }

  if (load && props.city === forecast.city.name) {
    return (
      <div class="WeeklyForecast row">
        <Forecast data={forecast.list[0]} />
        <Forecast data={forecast.list[1]} />
        <Forecast data={forecast.list[2]} />
        <Forecast data={forecast.list[3]} />
        <Forecast data={forecast.list[4]} />
      </div>
    );
  } else {
    let apiKey = "bcab18012202c8b1538d81911758744a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return `Loading Week Forecast...`;
  }
}
