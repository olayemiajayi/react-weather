import React from "react";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiurl = `https://api.openweathermap.org/data/2.5/oncall?lat={51.5}&lon={-0.12}&appid=97bed167ec49bff56e6c1b63daef9c86&units=metric`;
  axios.get(apiurl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-3">
          <div className="weatherDay">Mon</div>
          <div className="Images">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
              alt="cloudy"
            />
          </div>
          <div className="weatherTemperature">
            <span className="tempMax">20°</span>
            <span className="tempMin">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
