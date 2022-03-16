import "./render-data-tests";
import { handleUnitToggleClick } from "../modules/unit-toggle";

const unitToggle = document.querySelector(".unit-toggle");
const display = document.querySelector(".display-container");
display.textContent = "";
unitToggle.addEventListener("click", handleUnitToggleClick);
