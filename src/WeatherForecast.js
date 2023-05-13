import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="weatherForecast-day">Mon</div>
          <WeatherIcon code="01d" size={30} />
          <div className="WeatherTemperature">
            <span className="WeatherForecast-Max">20°</span>
            <span className="WeatherForecast-Min">19°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
