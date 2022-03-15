import { getFormValue } from "../modules/handle-input";
import { filterWeatherData } from "../modules/filter-data";
import { getCurrentForecastFromWeatherServer } from "../modules/api-fetch";

let location = "";
document.querySelector(`form`).addEventListener("submit",handleSubmit);

async function handleSubmit(event) {
  const value = getFormValue(event);
  const rawData = await getCurrentForecastFromWeatherServer(value);
  const weatherData=filterWeatherData(rawData)
  console.log(weatherData);
}
