export function handleUnitToggleClick(event) {
  if (isDisplayEmpty()) {
    return;
  }
  changeClassForToggleButton();
  changeClassForTemperatures();
}

function changeClassForToggleButton() {
  const buttonBackground = document.querySelector(".unit-toggle__background");
  const button = document.querySelector(".unit-toggle__button");
  buttonBackground.classList.toggle("unit-toggle__background--C");
  button.classList.toggle("unit-toggle__button--C");
}

function changeClassForTemperatures() {
  const tempsInC = [...document.querySelectorAll(".temperature__c")];
  const tempsInF = [...document.querySelectorAll(".temperature__f")];
  const allTemps = tempsInC.concat(tempsInF);
  allTemps.forEach((temp) => temp.classList.toggle("temperature--hidden"));
}

function isDisplayEmpty() {
  return document.querySelector(".display-container").textContent === "";
}
