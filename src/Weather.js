import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="container current-day Weather">
      <div className="row">
        <div className="col-6 current-day-icon-div">
          <img
            src="http://www.gstatic.com/images/icons/material/apps/weather/2x/sunny_light_color_96dp.png"
            className="current-day-icon"
            alt=""
          ></img>
        </div>
        <div className="col-6 current-day-div">
          <h1>
            <span id="current-temp">0</span>
            <span className="units">
              <strong className="metric-units">°C</strong> |{" "}
              <span className="imperial-units">°F</span>
            </span>
          </h1>
          <ul>
            <li className="weather-description">Sunny</li>
            <li>
              Humidity: <span className="humidity">0</span>%
            </li>
            <li>
              Wind: <span className="wind">0</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
