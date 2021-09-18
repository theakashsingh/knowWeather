import React, { useEffect, useState } from "react";

const WeatherCard = ({ weatherInfo }) => {
  const [weatherState, setWeatherState] = useState("");

  const {
    temp,
    humidity,
    pressure,
    weatherMood,
    name,
    speed,
    country,
    sunset,
  } = weatherInfo;

  useEffect(() => {
    if (weatherMood) {
      switch (weatherMood) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");

          break;

        case "Haze":
          setWeatherState("wi-fog");

          break;

        case "Mist":
          setWeatherState("wi-dust");

          break;

        case "Clear":
          setWeatherState("wi-day-sunny");

          break;

        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weatherMood]);

  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <div className="weather-card">
        {/* weather icon */}
        <div className="weather-icon">
          <i className={`wi ${weatherState}`}></i>
        </div>

        {/* weather info */}
        <div className="weather-info">
          {/* weather temp */}
          <div className="temp">
            <h1>{temp}&deg;</h1>
          </div>
          {/* weather description */}
          <div className="weather-description">
            <h1>{weatherMood}</h1>
            <p>
              {name},{country}
            </p>
          </div>
          {/* date and time */}
          <div className="time-date"><h1>{new Date().toLocaleString()}</h1></div>
        </div>

        {/* more info */}

        <div className="more-info">
          {/* sunset info */}
          <div className="other-info">
            <p>
              <i className="wi wi-sunset"></i>
            </p>
            <p className="extra-info">
              {timeStr}PM <br /> sunset
            </p>
          </div>

          {/* humidity info */}
          <div className="other-info">
            <p>
              <i className="wi wi-humidity"></i>
            </p>
            <p className="extra-info">
              {humidity} <br /> Humidity
            </p>
          </div>

          {/* pressure info */}
          <div className="other-info">
            <p>
              <i className="wi wi-rain"></i>
            </p>
            <p className="extra-info">
              {pressure} <br /> Pressure
            </p>
          </div>

          {/* wind info */}
          <div className="other-info">
            <p>
              <i className="wi wi-strong-wind"></i>
            </p>
            <p className="extra-info">
              {speed} <br /> Speed
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
