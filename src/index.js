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
  const value = getFormValue(event);
  const rawData = await getCurrentForecastFromWeatherServer(value);
  const weatherData = filterWeatherData(rawData);
  renderPageBasedOnData(weatherData);
  form.reset();
}
