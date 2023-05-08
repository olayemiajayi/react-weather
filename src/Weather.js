import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <div className="country">
        <form>
          <input type="search" placeholder="Type city" autofocus="on" />
          <input
            type="submit"
            value="search"
            className="btn btn-primary w-5 m-2"
          />
        </form>

        <h1 className="city">London</h1>
        <div className="row">
          <div className="col-7">
            <ul>
              <li className="day"> Thurday 5:00</li>
              <li className="days">cloudy</li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-5">
            <div className="images">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Cloudy"
              />
              <strong>4°C</strong>
            </div>
          </div>

          <div className="col-5">
            <div className="wind">
              <strong>
                <ul>
                  <li>Percipitation:13%</li>
                  <li>Humidity:12%</li>
                  <li>Wind: 10Km/h</li>
                </ul>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
