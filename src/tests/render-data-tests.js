import { renderPageBasedOnData } from "../modules/render-data";
import { filterWeatherData } from "../modules/filter-data";
import { getCurrentForecastFromWeatherServer } from "../modules/api-fetch";

async function dataRenderTest(data) {
  const rawData = await getCurrentForecastFromWeatherServer(data);
  const weatherData = filterWeatherData(rawData);
  renderPageBasedOnData(weatherData);
}

dataRenderTest("london");
dataRenderTest("montgomery, al");
// dataRenderTest();
