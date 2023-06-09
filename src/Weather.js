import React, { useState } from "react";
import WeatherData from "./WeatherData.js";
import WeatherForecast from "./WeatherForecast.js";
import Loader from "react-js-loader";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  let [country, setCountry] = useState(false);
  let [weatherData, setWeatherData] = useState({});
  let [city, setCity] = useState(props.defaultCity);
  function showTemperature(response) {
    console.log(response.data);

    setWeatherData({
      temperature: response.data.main.temp,
      city: response.data.name,
      coord: response.data.coord,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      Description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      icon_url: " https://openweathermap.org/img/wn/10d@2x.png",
      date: new Date(response.data.dt * 1000),
    });

    setCountry(true);
  }
  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6a48a550fc04f170639e60d52b8a6bc5&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  if (country) {
    return (
      <div className="weather">
        <div className="country">
          <form onSubmit={handleSubmit}>
            <div className="form">
              <input
                type="search"
                placeholder="Type city"
                autoFocus="on"
                onChange={updateCity}
              />
              <input
                type="submit"
                value="search"
                className="btn btn-info w-5 m-2"
              />
            </div>
          </form>
          <WeatherData data={weatherData} />
          <WeatherForecast coord={weatherData.coord} />
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div className="loader">
        <Loader type="bubble-loop" bgColor={"#155263"} size={150} />
      </div>
    );
  }
}
