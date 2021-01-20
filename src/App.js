import React from "react";
import "./App.css";

import Search from "./Search";
import Header from "./Header";
import Weather from "./Weather";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="body">
        <Search />
        <Header />
        <Weather />
      </div>
      <Footer />
    </div>
  );
}
