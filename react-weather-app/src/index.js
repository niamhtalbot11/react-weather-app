import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FormatDate from "./date.js";
import TemperatureUnits from "./TemperatureUnits.js";
import "./style.css";
import App from "./App";
import SearchEngine from "./searchEngine";
import 'bootstrap/dist/css/bootstrap.min.css';




const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>

    <div className="App">
      <br/>
      
      <SearchEngine />
      
      <div className="city"></div>
      <FormatDate />
    <div className="description weatherDetail"></div>
    <div className="windSpeed weatherDetail"></div>
    <div className="humidity weatherDetail"></div>
    <TemperatureUnits />
    <img src="" alt="" id="icon" />

    <App />
    </div>
    
    </StrictMode>,
  
 );
 
