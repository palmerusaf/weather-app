import { get7DayForecastFromWeatherServer } from "../modules/api-fetch";

get7DayForecastFromWeatherServer("montgomery, al").then(console.log).catch(console.log)
