import React from "react";
import "./App.css";

import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="body">
        <Weather city="London" />
      </div>
      <div className="footer">
        <p className="source-code">
          <a
            href="https://github.com/NLaPointe21/weather-react"
            rel="noreferrer"
            target="_blank"
          >
            Open-source code
          </a>{" "}
          by NhakiraLaPointe
        </p>
      </div>
    </div>
  );
}
