import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import Navbar from "./components/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="container">
    <Navbar />
    <App />
  </ div>
);
