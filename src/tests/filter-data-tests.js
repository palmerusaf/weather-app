import { getCurrentForecastFromWeatherServer } from "../modules/api-fetch";
import { filterWeatherData } from "../modules/filter-data";

const fn = getCurrentForecastFromWeatherServer;

async function asyncFn() {
  try {
    const legitData = await filterWeatherData(await fn("montgomery,al"));
    console.log(legitData);
    const intDat = await filterWeatherData(await fn("london"));
    console.log(intDat);
    const errorData = await filterWeatherData(await fn());
    console.log(errorData);
  } catch (error) {
    console.error(error);
  }
}
asyncFn();
