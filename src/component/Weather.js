import React, { useEffect, useState } from "react";
import "./Weather.css";
import WeatherCard from "./WeatherCard";
require('dotenv').config()


const Weather = () => {

    const [searchValue, setSearchValue] = useState('jaunpur')

    const [weatherInfo, setWeatherInfo] = useState({})

    // const getWeatherInfo = async () => {
    //     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=42f72b8ab373255446c5c7ac1ad9f25c`)
    //     .then(response =>{
    //       return response.json()
    //     } )
    //     .catch(error => alert(error))
    //     const {temp} = response.main
    // }

    const getWeatherInfo = async () =>{
      try {
        const api_key = process.env.REACT_APP_API_KEY;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${api_key}`;

        let res = await fetch(url);
        let data = await res.json();

        const {temp, humidity, pressure,} = data.main;
        const { main: weatherMood} = data.weather[0];
        const { name } = data;
        const { speed } = data.wind;
        const { country, sunset } = data.sys;
        
        const myWeatherInfo = {
          temp,
          humidity,
          pressure,
          weatherMood,
          name,
          speed,
          country,
          sunset,
        }

        setWeatherInfo(myWeatherInfo)
      }catch (error) {
        alert(error);
      }
    };

    useEffect(() => {
       getWeatherInfo()
    }, [])
  return (
    <>
      <div className="main-container">
        <div className="city-search">
          <input
            type="search"
            name=""
            id="search"
            placeholder="City Name"
            className="search"
            value={searchValue}
            onChange={ (e) => setSearchValue(e.target.value)}
          />
          <button className="search-btn" onClick={getWeatherInfo} >Search</button>
        </div>

        {/* our temp card */}

       <WeatherCard weatherInfo = {weatherInfo}/>
      </div>
    </>
  );
};

export default Weather;
