import { getCurrentForecastFromWeatherServer } from "../modules/api-fetch";

getCurrentForecastFromWeatherServer("montgomery, al").then(console.log).catch(console.log)
