import { get7DayForecastFromWeatherServer } from "../modules/api-fetch";
import { filterWeatherData } from "../modules/filter-data";

const fn = get7DayForecastFromWeatherServer;

async function asyncFn() {
  try {
    const legitData = await filterWeatherData(fn("montgomery,al"));
    console.log(legitData);
    const errorData = await filterWeatherData(fn());
    console.log(errorData);
  } catch (error) {
    console.error(error);
  }
}
asyncFn();
