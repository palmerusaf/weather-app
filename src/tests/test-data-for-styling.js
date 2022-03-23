import { renderPageBasedOnData } from "../modules/render-data";
const testDataDayTime = {
  location: {
    city: "London",
    stateOrCountry: "United Kingdom",
  },
  current: {
    condition: {
      text: "Sunny",
      icon: "https://cdn.weatherapi.com/weather/64x64/day/113.png",
    },
    temp_c: 12,
    temp_f: 53.6,
    is_day: 1,
    humidity: 54,
    feelslike_c: 10.8,
    feelslike_f: 51.4,
  },
};
const testDataNightTime = testDataDayTime;
testDataNightTime.current.is_day = 0;
testDataNightTime.current.condition.icon =
  "https://cdn.weatherapi.com/weather/64x64/night/113.png";

renderPageBasedOnData(testDataDayTime);
// renderPageBasedOnData(testDataNightTime);
