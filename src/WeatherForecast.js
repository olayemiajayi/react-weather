import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  let temperatureMax = Math.round(forecast[0].temp.max);
  let temperatureMin = Math.round(forecast[0].temp.min);

  function handleForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="weatherForecast-day">Mon</div>
            <WeatherIcon code={forecast[0].weather[0].icon} size={30} />
            <div className="WeatherTemperature">
              <span className="WeatherForecast-Max">{temperatureMax}</span>
              <span className="WeatherForecast-Min">{temperatureMin}</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "8d9838178b5b401f1b4e7cb5af18e210";
    let longitude = props.coordinates.lat;
    let latitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecast);

    return null;
  }
}
