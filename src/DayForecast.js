import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DayForecast.css";

export default function DayForecast(props) {
  return (
    <div className="DayForecast">
      <div className="col-2 hourly-forecast">
        <h4>
          {" "}
          {new Date(props.data.dt * 1000)
            .getHours()
            .toString()
            .padStart(2, "0")}
          :00
        </h4>
        <WeatherIcon code={props.data.weather[0].icon} />
        <p>
          {" "}
          {Math.round(props.data.main.temp_max)}/
          {Math.round(props.data.main.temp_min)}°C
        </p>
      </div>
    </div>
  );
}
