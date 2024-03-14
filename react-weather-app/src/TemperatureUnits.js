import React, { useState } from 'react';

export default function TemperatureUnits(){
        const [celsiusTemperature, setCelsiusTemperature] = useState(null);
        const [celsiusActive, setCelsiusActive] = useState(true);
        const [fahrenheitActive, setFahrenheitActive] = useState(false);
        let celsiusLink = document.querySelector("#celsius-link");
        let fahrenheitLink = document.querySelector("#fahrenheit-link");

        const convertToFahrenheit = (event) => {
            event.preventDefault();
            let temperatureElement = document.querySelector("#temperature");
            celsiusLink.classList.remove("active");
            fahrenheitLink.classList.add("active");
          
          let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
          temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
        };

        const convertToCelsius = (event) => {
            event.preventDefault();
            let temperatureElement = document.querySelector("#temperature");
            
            celsiusLink.classList.add("active");
            fahrenheitLink.classList.remove("active");
            
            temperatureElement.innerHTML = Math.round(celsiusTemperature);
          }
        

    return (
    <div className="temp">
    <span id="temperature">{celsiusTemperature}</span>
    <a href="#" id ="celsius-link" onClick={convertToCelsius}> ºC</a>
    
    <span id="divider"> | </span>
    <a href="#" id ="fahrenheit-link" onClick={convertToFahrenheit}>ºF</a>
    </div>
    ); 

    }
