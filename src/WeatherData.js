import React from "react";
import ConfiguredDate from "./ConfiguredDate";
import UnitConversion from "./UnitConversion";
import WeatherIcon from "./WeatherIcon";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div className="Header">
        <h2>
          {props.data.city}, {props.data.country}
        </h2>
        <ConfiguredDate date={props.data.date} />
      </div>
      <div className="container current-day">
        <div className="row">
          <div className="col-6 current-day-icon-div current-day-icon">
            <WeatherIcon code={props.data.icon} />
          </div>
          <div className="col-6 current-day-div">
            <UnitConversion celsius={props.data.temp} />
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
