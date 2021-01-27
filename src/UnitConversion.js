import React, { useState } from "react";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState("celsius");
  let celsiusTemp = props.celsius;
  let fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;

  function toggleTemp(event) {
    event.preventDefault();
    if (unit === "celsius") {
      setUnit("fahrenheit");
    } else {
      setUnit("celsius");
    }
  }

  if (unit === "celsius") {
    return (
      <h1>
        <span id="current-temp">{celsiusTemp}</span>
        <span className="units">
          <strong className="metric-units">°C</strong> |
          <span className="imperial-units">
            <a href="/" onClick={toggleTemp}>
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
            <a href="/" onClick={toggleTemp}>
              °C
            </a>
          </strong>{" "}
          |<span className="imperial-units">°F</span>
        </span>
      </h1>
    );
  }
}
