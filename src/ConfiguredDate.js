import React from "react";

export default function ConfiguredDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let today = props.date.getDate();
  let months = [
    "Janurary",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[props.date.getMonth()];

  let hours = props.date.getHours().toString().padStart(2, "0");

  let minutes = props.date.getMinutes().toString().padStart(2, "0");

  return (
    <h3>
      Last updated:{" "}
      <span className="date-time">
        {day}, {today} {month} | {hours}:{minutes}
      </span>
    </h3>
  );
}
