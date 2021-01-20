import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <h2>Amsterdam</h2>
      <h3>
        Last updated:{" "}
        <span className="date-time">Monday, 1 Janurary 00:00</span>
      </h3>
    </div>
  );
}
