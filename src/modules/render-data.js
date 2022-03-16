export function renderPageBasedOnData(data) {
  const displayContainer = document.querySelector(".display-container");
  clearDisplay(displayContainer);
  const { location, current } = data;
  console.log(data);
  const locationDisplay = renderLocationName(location);
  const currentWeatherDisplay = renderCurrentWeather(current);
  displayContainer.appendChild(locationDisplay);
  displayContainer.appendChild(currentWeatherDisplay);
}

function renderLocationName(location) {
  const { city, stateOrCountry } = location;
  const span = document.createElement("div");
  span.classList.add("display-container__location");
  span.textContent = `${city}, ${stateOrCountry}`;
  return span;
}

function clearDisplay(display) {
  display.textContent = "";
}

function renderCurrentWeather(current) {
  const currentWeatherDisplay = document.createDocumentFragment();
  const conditionDisplay = renderCondition(current.condition);
  currentWeatherDisplay.appendChild(conditionDisplay);

  return currentWeatherDisplay;

  function renderCondition(condition) {
    const conditionFragment = document.createElement("div");
    conditionFragment.classList.add("display-container__condition");
    const icon = document.createElement("img");
    icon.src = condition.icon;
    icon.alt = `${condition.text} icon`;
    const conditionText = document.createElement("div");
    conditionText.textContent = condition.text;
    conditionFragment.appendChild(icon);
    conditionFragment.appendChild(conditionText);
    return conditionFragment;
  }
}
