export async function filterWeatherData(weatherData) {
  if (weatherData.error) {
    throw weatherData.error;
  }
}
