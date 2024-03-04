import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";
import SearchEngine from "./searchEngine";

const rootElement = document.getElementById("root");


ReactDOM.render(
  <React.StrictMode>

    <div className="App">
      <h1>Weather App</h1>
      <SearchEngine />
      <br />

    <div class="temperature"></div>
    <div class="description"></div>
    <div class="humidity"></div>
    <div class="windSpeed"></div>
    <img src="" alt="" id="icon" />
    </div>
    
    <App />
    </React.StrictMode>,
    rootElement
 );
 
