export function filterWeatherData(weatherData) {
  if (weatherData.error) {
    throw weatherData.error.message;
  }
  const location = filterLocation(weatherData.location);
  const current = filterCurrent(weatherData.current);
  const areaUsesFahrenheit = doesAreaUseFahrenheit(
    weatherData.location.country
  );

  return {
    location,
    current,
    areaUsesFahrenheit,
  };
}

function filterLocation(location) {
  const city = location.name;
  if (location.country.includes("United States of America")) {
    const stateOrCountry = location.region;
    return { city, stateOrCountry };
  } else {
    const stateOrCountry = location.country;
    return { city, stateOrCountry };
  }
}

function filterCurrent(current) {
  const condition = filterCondition(current.condition);
  const temp_c = current.temp_c;
  const temp_f = current.temp_f;
  const is_day = current.is_day;
  const humidity = current.humidity;
  const feelslike_c = current.feelslike_c;
  const feelslike_f = current.feelslike_f;

  return {
    condition,
    temp_c,
    temp_f,
    is_day,
    humidity,
    feelslike_c,
    feelslike_f,
  };
}

function filterCondition(condition) {
  const text = condition.text;
  const icon = "https:" + condition.icon;
  return { text, icon };
}

function doesAreaUseFahrenheit(area) {
  const areasThatUseFahrenheit = [
    "Palau",
    "Bermuda",
    "Belize",
    "Turks and Caicos Islands",
    "Liberia",
    "Bahamas",
    "Saint Kitts and Nevis",
    "Montserrat",
    "Cayman Islands",
    "Antigua and Barbuda",
    "Virgin Islands",
    "Micronesia",
    "United States of America",
    "Marshall Islands",
  ];

  return areasThatUseFahrenheit.includes(area);
}
