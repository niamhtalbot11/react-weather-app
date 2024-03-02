
import App from "./App";
import SearchEngine from "./searchEngine";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";




const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
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
  </StrictMode>
);
