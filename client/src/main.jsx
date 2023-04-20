import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./homepage/Home.jsx";
import "./main.scss";
import Navbar from "./navbar/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="container">
    <Navbar />
    <Home />
  </ div>
);
