import React from "react";
import ReactDOM from 'react-dom';
import FormatDate from "./date.js";
import App from "./App";
import SearchEngine from "./searchEngine";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';


const rootElement = document.getElementById("root");


ReactDOM.render(
  <React.StrictMode>

    <div className="App">
      <br/>
      <h1>Weather App</h1>
      <SearchEngine />
      
      <div className="city"></div>
      <br/>
      <FormatDate />
    <div className="description weatherDetail"></div>
    <div className="temperature weatherDetail"></div>
    <div className="humidity weatherDetail"></div>
    <div className="windSpeed weatherDetail"></div>
    <img src="" alt="" id="icon" />

    <App />
    </div>
    
    </React.StrictMode>,
    rootElement
 );
 
