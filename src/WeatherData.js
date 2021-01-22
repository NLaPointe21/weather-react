import React from "react";
import ConfiguredDate from "./ConfiguredDate";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div className="Header">
        <h2>{props.data.city}</h2>
        <ConfiguredDate date={props.data.date} />
      </div>
      <div className="container current-day">
        <div className="row">
          <div className="col-6 current-day-icon-div">
            <img
              src={props.data.icon}
              className="current-day-icon"
              alt={props.data.description}
            ></img>
          </div>
          <div className="col-6 current-day-div">
            <h1>
              <span id="current-temp">{props.data.temp}</span>
              <span className="units">
                <strong className="metric-units">°C</strong> |
                <span className="imperial-units">°F</span>
              </span>
            </h1>
            <ul>
              <li className="weather-description">{props.data.description}</li>
              <li>
                Humidity:{" "}
                <span className="humidity">{props.data.humidity}</span>%
              </li>
              <li>
                Wind: <span className="wind">{props.data.wind}</span> km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
