import React from "react";
import "./Search.css";

export default function Search() {
  return (
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
  );
}
