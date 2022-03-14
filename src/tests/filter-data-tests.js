import { get7DayForecastFromWeatherServer } from "../modules/api-fetch";

const fn = get7DayForecastFromWeatherServer;

fn('montgomery,al').then(console.log)
fn().then(console.log)
