import React from "react";

export default function Forecast(props) {
  function timestamp() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours().toString().padStart(2, "0");
    return { hours };
  }

  function temp() {
    let temp = Math.round(props.data.main.temp);
    return { temp };
  }

  return (
    <div className="WeekForecast">
      {timestamp()}

      {temp()}
    </div>
  );
}
