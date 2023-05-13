import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
export default function WeatherData(props) {
  return (
    <div className="weatherInfo">
      <h1 className="city">{props.data.city}</h1>
      <div className="row">
        <div className="col-7">
          <ul>
            <li className="day">
              <FormattedDate date={props.data.date} />
            </li>
            <li className="days">{props.data.Description}</li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-5">
          <div className="images">
            <WeatherIcon code={props.data.icon} size={52} />
            <div className="weatherTemp">
              <span className="temp">{Math.round(props.data.temperature)}</span>
              <div className="degree">°C </div>
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="wind">
            <strong>
              <ul>
                <li>Humidity:{props.data.humidity}%</li>
                <li>Wind:{Math.round(props.data.wind)}Km/h</li>
              </ul>
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}
