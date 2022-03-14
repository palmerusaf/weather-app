const API_KEY = "9bcb1c619a1d4e52b5f105818221403";

async function get7DayForecastFromWeatherServer(queryLocation) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${queryLocation}&days=7&aqi=no&alerts=no`
    );
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    if (error.message.includes("NetworkError")) {
      throw "Unable to connect to server.";
    } else {
      throw error;
    }
  }
}

export { get7DayForecastFromWeatherServer };
