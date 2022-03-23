// TO-DO remove test
import "./tests/test-data-for-styling";
// TO-DO remove test

import "./style.scss";
import {
  clearMessages,
  displayError,
  displayStatus,
} from "./modules/status-messages";
import { getCurrentForecastFromWeatherServer } from "./modules/api-fetch";
import { filterWeatherData } from "./modules/filter-data";
import { getFormValue } from "./modules/handle-input";
import { renderPageBasedOnData } from "./modules/render-data";
import { handleUnitToggleClick } from "./modules/unit-toggle";

//init button that toggles between fahrenheit and celsius
const unitToggle = document.querySelector(".unit-toggle");
unitToggle.addEventListener("click", handleUnitToggleClick);

//init search form functionality
const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  try {
    const value = getFormValue(event);
    displayStatus("Gathering Weather Info");
    const rawData = await getCurrentForecastFromWeatherServer(value);
    displayStatus("Displaying Weather Info");
    const weatherData = filterWeatherData(rawData);
    renderPageBasedOnData(weatherData);
    clearMessages();
  } catch (error) {
    console.log(error);
    displayError(error);
  }
  form.reset();
  form['location'].blur();
}
