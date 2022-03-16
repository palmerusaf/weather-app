import { renderPageBasedOnData } from "../modules/render-data";
import { filterWeatherData } from "../modules/filter-data";
import { getCurrentForecastFromWeatherServer } from "../modules/api-fetch";

async function dataRenderTest(data) {
  const rawData = await getCurrentForecastFromWeatherServer(data);
  const weatherData = filterWeatherData(rawData);
  //   console.log(weatherData);
  renderPageBasedOnData(weatherData);
}

dataRenderTest("london")
  .then(() => dataRenderTest("montgomery, al"))
  .then(() => dataRenderTest("tulsa"));
// dataRenderTest();
