import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[day];
  }
  return (
    <div>
      <div className="ForecastDay">{day()}</div>{" "}
      <WeatherIcon code={props.data.weather[0].icon} size={32} />{" "}
      <div className="ForecastTemperatures">
        <span className="ForecastMax">{maxTemperature()}°</span>{" "}
        <span className="ForecastMin">{minTemperature()}°</span>
      </div>
    </div>
  );
}
