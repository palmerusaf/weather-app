import { get7DayForecastFromWeatherServer } from "../modules/api-fetch";

get7DayForecastFromWeatherServer("montgomery, al").then(console.log);
get7DayForecastFromWeatherServer('lsdmflds').then(console.log);
