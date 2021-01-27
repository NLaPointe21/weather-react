import React, { useState } from "react";
import DayForecast from "./DayForecast";
import axios from "axios";
import "./WeeklyForecast.css";

export default function WeeklyForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeeklyForecast row">
        <DayForecast data={forecast.list[0]} />
        <DayForecast data={forecast.list[1]} />
        <DayForecast data={forecast.list[2]} />
        <DayForecast data={forecast.list[3]} />
      </div>
    );
  } else {
    let apiKey = "07c0058f22eafa48286032eb134abbce";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);

    return `Loading week forecast...`;
  }
}
