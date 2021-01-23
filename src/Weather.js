import React, { useState } from "react";
import WeatherData from "./WeatherData";
import WeeklyForecast from "./WeeklyForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.city);

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

  function search() {
    let apiKey = "bcab18012202c8b1538d81911758744a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function searchSubmit(event) {
    event.preventDefault();
    search();
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  function searchCity(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "bcab18012202c8b1538d81911758744a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function searchCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchCity);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <div className="Search">
          <form onSubmit={searchSubmit}>
            <input
              type="search"
              placeholder="Change city"
              className="city-search"
              id="city-search"
              onChange={changeCity}
            />
            <input type="submit" value="Search" className="search-button" />
            <input
              type="button"
              value="Current location"
              className="current-location"
              onClick={searchCurrentLocation}
            />
          </form>
        </div>
        <WeatherData data={weather} />
        {/* <WeeklyForecast city={weather.city} /> */}
      </div>
    );
  } else {
    search();
    return `Loading City Weather...`;
  }
}
