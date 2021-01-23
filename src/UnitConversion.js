import React, { useState } from "react";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState("celsius");
  let celsiusTemp = props.celsius;
  let fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;

  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "celsius") {
    return (
      <h1>
        <span id="current-temp">{celsiusTemp}</span>
        <span className="units">
          <strong className="metric-units">°C</strong> |
          <span className="imperial-units">
            <a href="/" onClick={displayFahrenheit}>
              °F
            </a>
          </span>
        </span>
      </h1>
    );
  } else {
    return (
      <h1>
        <span id="current-temp">{Math.round(fahrenheitTemp)}</span>
        <span className="units">
          <strong className="metric-units">
            <a href="/" onClick={displayCelsius}>
              °C
            </a>
          </strong>{" "}
          |<span className="imperial-units">°F</span>
        </span>
      </h1>
    );
  }
}
