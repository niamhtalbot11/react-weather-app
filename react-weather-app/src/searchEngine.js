import React  from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';



export default function SearchEngine() {
  function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    document.querySelector(
      ".temperature"
    ).innerHTML = `The temperature is : ${temperature}°C in ${response.data.name}`;
    let description = response.data.weather[0].description;
    document.querySelector(
      ".description"
    ).innerHTML = ` Description : ${description}`;
    let humidity = response.data.main.humidity;
    document.querySelector(".humidity").innerHTML = ` Humidity : ${humidity}%`;
    let windSpeed = Math.round(response.data.wind.speed);
    document.querySelector(
      ".windSpeed"
    ).innerHTML = `Wind Speed : ${windSpeed} km/h`;
    let iconElement = document.querySelector("#icon");
    iconElement.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function Search(event) {
    event.preventDefault();
    let cityInput = document.querySelector("#searchEngine").value;
    searchFunction(cityInput);
  }

  function searchFunction(city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ca7dd4e61360b90fb66918853670e48&units=metric`;
    axios.get(url).then(showTemperature);
  }
  searchFunction("Chiang Mai");

  return (
    <form onSubmit={Search}>
      <div className="mb-3">
      <input type="text"  placeholder="Enter a city" id="searchEngine"/>
      <input type="submit" value="search" />
      </div> 
    </form>
  );

}

