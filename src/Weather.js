import React, { useState } from "react";
import axios from "axios";
import ConfiguredDate from "./ConfiguredDate";
import "./Weather.css";

export default function Weather() {
  let [weather, setWeather] = useState({ ready: false });

  function handleResponse(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temp: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
    });
  }
  if (weather.ready) {
    return (
      <div className="Weather">
        <div className="Search">
          <form>
            <input
              type="search"
              placeholder="Change city"
              className="city-search"
              id="city-search"
            />
            <input type="submit" value="Search" className="search-button" />
            <input
              type="button"
              value="Current location"
              className="current-location"
            />
          </form>
        </div>
        <div className="Header">
          <h2>{weather.city}</h2>
          <ConfiguredDate date={weather.date} />
        </div>
        <div className="container current-day">
          <div className="row">
            <div className="col-6 current-day-icon-div">
              <img
                src={weather.icon}
                className="current-day-icon"
                alt={weather.description}
              ></img>
            </div>
            <div className="col-6 current-day-div">
              <h1>
                <span id="current-temp">{weather.temp}</span>
                <span className="units">
                  <strong className="metric-units">°C</strong> |
                  <span className="imperial-units">°F</span>
                </span>
              </h1>
              <ul>
                <li className="weather-description">{weather.description}</li>
                <li>
                  Humidity: <span className="humidity">{weather.humidity}</span>
                  %
                </li>
                <li>
                  Wind: <span className="wind">{weather.wind}</span> km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "bcab18012202c8b1538d81911758744a";
    let city = "Lisbon";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return `Loading City Weather...`;
  }
}
