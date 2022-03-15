export async function filterWeatherData(weatherData) {
  weatherData = await weatherData;
  if (weatherData.error) {
    throw weatherData.error.message;
  }
  return weatherData;
}
