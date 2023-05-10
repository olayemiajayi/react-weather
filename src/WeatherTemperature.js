import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [units, setUnits] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnits("Fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnits("celsius");
  }

  if (units === "celsius") {
    return (
      <div className="weatherTemp">
        <span className="temp">{Math.round(props.celsius)}</span>
        <div className="degree">°C|</div>
        <span className="unit">
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let Fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="weatherTemp">
        <span className="temp">{Math.round(Fahrenheit)}</span>
        <div className="degree">°C| </div>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °F
          </a>
        </span>
      </div>
    );
  }
}
