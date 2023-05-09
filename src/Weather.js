import React, { useState } from "react";
import FormattedDate from "./FormattedDate.js";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  let [country, setCountry] = useState(false);
  let [weatherData, setWeatherData] = useState({});
  function showTemperature(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.temperature.current,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      Description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      iconUrl: `"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png"`,
      date: new Date(response.data.time * 1000),
    });

    setCountry(true);
  }
  if (country) {
    return (
      <div className="weather">
        <div className="country">
          <form>
            <div className="form">
              <input type="search" placeholder="Type city" autoFocus="on" />
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-5 m-2"
              />
            </div>
          </form>

          <h1 className="city">{weatherData.city}</h1>
          <div className="row">
            <div className="col-7">
              <ul>
                <li className="day">
                  <FormattedDate date={weatherData.date} />
                </li>
                <li className="days">{weatherData.Description}</li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-5">
              <div className="images">
                <img src={weatherData.icon} alt={weatherData.Description} />
                <span className="temp">
                  {Math.round(weatherData.temperature)}°C
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="wind">
                <strong>
                  <ul>
                    <li>Humidity:{weatherData.humidity}%</li>
                    <li>Wind:{Math.round(weatherData.wind)}Km/h</li>
                  </ul>
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=308ee4b586fftbc5ce47ob29fd3f7a87&units=metric`;
    axios.get(apiUrl).then(showTemperature);
    return "loading..";
  }
}
