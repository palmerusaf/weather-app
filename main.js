/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/api-fetch.js":
/*!**********************************!*\
  !*** ./src/modules/api-fetch.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCurrentForecastFromWeatherServer": () => (/* binding */ getCurrentForecastFromWeatherServer)
/* harmony export */ });
const API_KEY = "9bcb1c619a1d4e52b5f105818221403";

async function getCurrentForecastFromWeatherServer(queryLocation) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${queryLocation}&days=7&aqi=no`
    );
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    if (error.message.includes("NetworkError")) {
      throw "Unable to connect to server.";
    }
  }
}




/***/ }),

/***/ "./src/modules/filter-data.js":
/*!************************************!*\
  !*** ./src/modules/filter-data.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterWeatherData": () => (/* binding */ filterWeatherData)
/* harmony export */ });
function filterWeatherData(weatherData) {
  if (weatherData.error) {
    throw weatherData.error.message;
  }
  const location = filterLocation(weatherData.location);
  const current = filterCurrent(weatherData.current);

  return {
    location,
    current,
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


/***/ }),

/***/ "./src/modules/render-data.js":
/*!************************************!*\
  !*** ./src/modules/render-data.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderPageBasedOnData": () => (/* binding */ renderPageBasedOnData)
/* harmony export */ });
function renderPageBasedOnData(data) {
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
  const temperatureDisplay = renderTemperatures(current);
  const humidityDisplay = renderHumidity(current.humidity);

  currentWeatherDisplay.appendChild(conditionDisplay);
  currentWeatherDisplay.appendChild(temperatureDisplay);
  currentWeatherDisplay.appendChild(humidityDisplay);

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

  function renderTemperatures(current) {
    const temperatureSection = document.createElement("div");
    temperatureSection.classList.add("temperature");

    const currentTemp = renderTemperatureElement(
      "Current:",
      current.temp_c,
      current.temp_f
    );
    temperatureSection.appendChild(currentTemp);

    const feelsLikeTemp = renderTemperatureElement(
      "Feels Like:",
      current.feelslike_c,
      current.feelslike_f
    );
    temperatureSection.appendChild(feelsLikeTemp);
    return temperatureSection;

    function renderTemperatureElement(
      temperatureLabelText,
      ...temperatureData
    ) {
      const label = document.createElement("div");
      label.classList.add("temperature__label");
      label.textContent = temperatureLabelText;

      const tempInC = document.createElement("span");
      tempInC.classList.add("temperature__c", "temperature__data");
      tempInC.textContent = ` ${temperatureData[0]} C`;
      label.appendChild(tempInC);

      const tempInF = document.createElement("span");
      tempInF.classList.add("temperature__f", "temperature__data");
      tempInF.textContent = ` ${temperatureData[1]} F`;
      label.appendChild(tempInF);

      return label;
    }
  }

  function renderHumidity(humidityData) {
    const label = document.createElement("div");
    label.classList.add("temperature__label");
    label.textContent = "Humidity:";

    const humidity = document.createElement("span");
    humidity.classList.add("temperature__data");
    humidity.textContent = ` ${humidityData}%`;
    label.appendChild(humidity);

    return label;
  }
}


/***/ }),

/***/ "./src/tests/render-data-tests.js":
/*!****************************************!*\
  !*** ./src/tests/render-data-tests.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_render_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/render-data */ "./src/modules/render-data.js");
/* harmony import */ var _modules_filter_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/filter-data */ "./src/modules/filter-data.js");
/* harmony import */ var _modules_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/api-fetch */ "./src/modules/api-fetch.js");




async function dataRenderTest(data) {
  const rawData = await (0,_modules_api_fetch__WEBPACK_IMPORTED_MODULE_2__.getCurrentForecastFromWeatherServer)(data);
  const weatherData = (0,_modules_filter_data__WEBPACK_IMPORTED_MODULE_1__.filterWeatherData)(rawData);
  (0,_modules_render_data__WEBPACK_IMPORTED_MODULE_0__.renderPageBasedOnData)(weatherData);
}

dataRenderTest("london");
dataRenderTest("montgomery, al");
// dataRenderTest();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tests_render_data_tests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tests/render-data-tests */ "./src/tests/render-data-tests.js");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxRQUFRLEtBQUssY0FBYztBQUNsRjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNkM7Ozs7Ozs7Ozs7Ozs7OztBQ2hCckM7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsSUFBSTtBQUNKO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7Ozs7Ozs7Ozs7Ozs7OztBQ2hETztBQUNQO0FBQ0E7QUFDQSxVQUFVLG9CQUFvQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLHVCQUF1QjtBQUNqQztBQUNBO0FBQ0Esd0JBQXdCLEtBQUssSUFBSSxlQUFlO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0Msb0JBQW9CO0FBQ3BEOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0Msb0JBQW9CO0FBQ3BEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLGFBQWE7QUFDNUM7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyRytEO0FBQ0o7QUFDZ0I7O0FBRTNFO0FBQ0Esd0JBQXdCLHVGQUFtQztBQUMzRCxzQkFBc0IsdUVBQWlCO0FBQ3ZDLEVBQUUsMkVBQXFCO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztVQ1pBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNObUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2FwaS1mZXRjaC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2ZpbHRlci1kYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvcmVuZGVyLWRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdGVzdHMvcmVuZGVyLWRhdGEtdGVzdHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBUElfS0VZID0gXCI5YmNiMWM2MTlhMWQ0ZTUyYjVmMTA1ODE4MjIxNDAzXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnRGb3JlY2FzdEZyb21XZWF0aGVyU2VydmVyKHF1ZXJ5TG9jYXRpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke0FQSV9LRVl9JnE9JHtxdWVyeUxvY2F0aW9ufSZkYXlzPTcmYXFpPW5vYFxuICAgICk7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvci5tZXNzYWdlLmluY2x1ZGVzKFwiTmV0d29ya0Vycm9yXCIpKSB7XG4gICAgICB0aHJvdyBcIlVuYWJsZSB0byBjb25uZWN0IHRvIHNlcnZlci5cIjtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHtnZXRDdXJyZW50Rm9yZWNhc3RGcm9tV2VhdGhlclNlcnZlcn07XG4iLCJleHBvcnQgIGZ1bmN0aW9uIGZpbHRlcldlYXRoZXJEYXRhKHdlYXRoZXJEYXRhKSB7XG4gIGlmICh3ZWF0aGVyRGF0YS5lcnJvcikge1xuICAgIHRocm93IHdlYXRoZXJEYXRhLmVycm9yLm1lc3NhZ2U7XG4gIH1cbiAgY29uc3QgbG9jYXRpb24gPSBmaWx0ZXJMb2NhdGlvbih3ZWF0aGVyRGF0YS5sb2NhdGlvbik7XG4gIGNvbnN0IGN1cnJlbnQgPSBmaWx0ZXJDdXJyZW50KHdlYXRoZXJEYXRhLmN1cnJlbnQpO1xuXG4gIHJldHVybiB7XG4gICAgbG9jYXRpb24sXG4gICAgY3VycmVudCxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyTG9jYXRpb24obG9jYXRpb24pIHtcbiAgY29uc3QgY2l0eSA9IGxvY2F0aW9uLm5hbWU7XG4gIGlmIChsb2NhdGlvbi5jb3VudHJ5LmluY2x1ZGVzKFwiVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhXCIpKSB7XG4gICAgY29uc3Qgc3RhdGVPckNvdW50cnkgPSBsb2NhdGlvbi5yZWdpb247XG4gICAgcmV0dXJuIHsgY2l0eSwgc3RhdGVPckNvdW50cnkgfTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzdGF0ZU9yQ291bnRyeSA9IGxvY2F0aW9uLmNvdW50cnk7XG4gICAgcmV0dXJuIHsgY2l0eSwgc3RhdGVPckNvdW50cnkgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaWx0ZXJDdXJyZW50KGN1cnJlbnQpIHtcbiAgY29uc3QgY29uZGl0aW9uID0gZmlsdGVyQ29uZGl0aW9uKGN1cnJlbnQuY29uZGl0aW9uKTtcbiAgY29uc3QgdGVtcF9jID0gY3VycmVudC50ZW1wX2M7XG4gIGNvbnN0IHRlbXBfZiA9IGN1cnJlbnQudGVtcF9mO1xuICBjb25zdCBpc19kYXkgPSBjdXJyZW50LmlzX2RheTtcbiAgY29uc3QgaHVtaWRpdHkgPSBjdXJyZW50Lmh1bWlkaXR5O1xuICBjb25zdCBmZWVsc2xpa2VfYyA9IGN1cnJlbnQuZmVlbHNsaWtlX2M7XG4gIGNvbnN0IGZlZWxzbGlrZV9mID0gY3VycmVudC5mZWVsc2xpa2VfZjtcblxuICByZXR1cm4ge1xuICAgIGNvbmRpdGlvbixcbiAgICB0ZW1wX2MsXG4gICAgdGVtcF9mLFxuICAgIGlzX2RheSxcbiAgICBodW1pZGl0eSxcbiAgICBmZWVsc2xpa2VfYyxcbiAgICBmZWVsc2xpa2VfZixcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyQ29uZGl0aW9uKGNvbmRpdGlvbikge1xuICBjb25zdCB0ZXh0ID0gY29uZGl0aW9uLnRleHQ7XG4gIGNvbnN0IGljb24gPSBcImh0dHBzOlwiICsgY29uZGl0aW9uLmljb247XG4gIHJldHVybiB7IHRleHQsIGljb24gfTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiByZW5kZXJQYWdlQmFzZWRPbkRhdGEoZGF0YSkge1xuICBjb25zdCBkaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5LWNvbnRhaW5lclwiKTtcbiAgY2xlYXJEaXNwbGF5KGRpc3BsYXlDb250YWluZXIpO1xuICBjb25zdCB7IGxvY2F0aW9uLCBjdXJyZW50IH0gPSBkYXRhO1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgY29uc3QgbG9jYXRpb25EaXNwbGF5ID0gcmVuZGVyTG9jYXRpb25OYW1lKGxvY2F0aW9uKTtcbiAgY29uc3QgY3VycmVudFdlYXRoZXJEaXNwbGF5ID0gcmVuZGVyQ3VycmVudFdlYXRoZXIoY3VycmVudCk7XG4gIGRpc3BsYXlDb250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25EaXNwbGF5KTtcbiAgZGlzcGxheUNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlckRpc3BsYXkpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJMb2NhdGlvbk5hbWUobG9jYXRpb24pIHtcbiAgY29uc3QgeyBjaXR5LCBzdGF0ZU9yQ291bnRyeSB9ID0gbG9jYXRpb247XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LWNvbnRhaW5lcl9fbG9jYXRpb25cIik7XG4gIHNwYW4udGV4dENvbnRlbnQgPSBgJHtjaXR5fSwgJHtzdGF0ZU9yQ291bnRyeX1gO1xuICByZXR1cm4gc3Bhbjtcbn1cblxuZnVuY3Rpb24gY2xlYXJEaXNwbGF5KGRpc3BsYXkpIHtcbiAgZGlzcGxheS50ZXh0Q29udGVudCA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckN1cnJlbnRXZWF0aGVyKGN1cnJlbnQpIHtcbiAgY29uc3QgY3VycmVudFdlYXRoZXJEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICBjb25zdCBjb25kaXRpb25EaXNwbGF5ID0gcmVuZGVyQ29uZGl0aW9uKGN1cnJlbnQuY29uZGl0aW9uKTtcbiAgY29uc3QgdGVtcGVyYXR1cmVEaXNwbGF5ID0gcmVuZGVyVGVtcGVyYXR1cmVzKGN1cnJlbnQpO1xuICBjb25zdCBodW1pZGl0eURpc3BsYXkgPSByZW5kZXJIdW1pZGl0eShjdXJyZW50Lmh1bWlkaXR5KTtcblxuICBjdXJyZW50V2VhdGhlckRpc3BsYXkuYXBwZW5kQ2hpbGQoY29uZGl0aW9uRGlzcGxheSk7XG4gIGN1cnJlbnRXZWF0aGVyRGlzcGxheS5hcHBlbmRDaGlsZCh0ZW1wZXJhdHVyZURpc3BsYXkpO1xuICBjdXJyZW50V2VhdGhlckRpc3BsYXkuYXBwZW5kQ2hpbGQoaHVtaWRpdHlEaXNwbGF5KTtcblxuICByZXR1cm4gY3VycmVudFdlYXRoZXJEaXNwbGF5O1xuXG4gIGZ1bmN0aW9uIHJlbmRlckNvbmRpdGlvbihjb25kaXRpb24pIHtcbiAgICBjb25zdCBjb25kaXRpb25GcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uZGl0aW9uRnJhZ21lbnQuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktY29udGFpbmVyX19jb25kaXRpb25cIik7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaWNvbi5zcmMgPSBjb25kaXRpb24uaWNvbjtcbiAgICBpY29uLmFsdCA9IGAke2NvbmRpdGlvbi50ZXh0fSBpY29uYDtcbiAgICBjb25zdCBjb25kaXRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25kaXRpb25UZXh0LnRleHRDb250ZW50ID0gY29uZGl0aW9uLnRleHQ7XG4gICAgY29uZGl0aW9uRnJhZ21lbnQuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgY29uZGl0aW9uRnJhZ21lbnQuYXBwZW5kQ2hpbGQoY29uZGl0aW9uVGV4dCk7XG4gICAgcmV0dXJuIGNvbmRpdGlvbkZyYWdtZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyVGVtcGVyYXR1cmVzKGN1cnJlbnQpIHtcbiAgICBjb25zdCB0ZW1wZXJhdHVyZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRlbXBlcmF0dXJlU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwidGVtcGVyYXR1cmVcIik7XG5cbiAgICBjb25zdCBjdXJyZW50VGVtcCA9IHJlbmRlclRlbXBlcmF0dXJlRWxlbWVudChcbiAgICAgIFwiQ3VycmVudDpcIixcbiAgICAgIGN1cnJlbnQudGVtcF9jLFxuICAgICAgY3VycmVudC50ZW1wX2ZcbiAgICApO1xuICAgIHRlbXBlcmF0dXJlU2VjdGlvbi5hcHBlbmRDaGlsZChjdXJyZW50VGVtcCk7XG5cbiAgICBjb25zdCBmZWVsc0xpa2VUZW1wID0gcmVuZGVyVGVtcGVyYXR1cmVFbGVtZW50KFxuICAgICAgXCJGZWVscyBMaWtlOlwiLFxuICAgICAgY3VycmVudC5mZWVsc2xpa2VfYyxcbiAgICAgIGN1cnJlbnQuZmVlbHNsaWtlX2ZcbiAgICApO1xuICAgIHRlbXBlcmF0dXJlU2VjdGlvbi5hcHBlbmRDaGlsZChmZWVsc0xpa2VUZW1wKTtcbiAgICByZXR1cm4gdGVtcGVyYXR1cmVTZWN0aW9uO1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyVGVtcGVyYXR1cmVFbGVtZW50KFxuICAgICAgdGVtcGVyYXR1cmVMYWJlbFRleHQsXG4gICAgICAuLi50ZW1wZXJhdHVyZURhdGFcbiAgICApIHtcbiAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wZXJhdHVyZV9fbGFiZWxcIik7XG4gICAgICBsYWJlbC50ZXh0Q29udGVudCA9IHRlbXBlcmF0dXJlTGFiZWxUZXh0O1xuXG4gICAgICBjb25zdCB0ZW1wSW5DID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICB0ZW1wSW5DLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wZXJhdHVyZV9fY1wiLCBcInRlbXBlcmF0dXJlX19kYXRhXCIpO1xuICAgICAgdGVtcEluQy50ZXh0Q29udGVudCA9IGAgJHt0ZW1wZXJhdHVyZURhdGFbMF19IENgO1xuICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQodGVtcEluQyk7XG5cbiAgICAgIGNvbnN0IHRlbXBJbkYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHRlbXBJbkYuY2xhc3NMaXN0LmFkZChcInRlbXBlcmF0dXJlX19mXCIsIFwidGVtcGVyYXR1cmVfX2RhdGFcIik7XG4gICAgICB0ZW1wSW5GLnRleHRDb250ZW50ID0gYCAke3RlbXBlcmF0dXJlRGF0YVsxXX0gRmA7XG4gICAgICBsYWJlbC5hcHBlbmRDaGlsZCh0ZW1wSW5GKTtcblxuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckh1bWlkaXR5KGh1bWlkaXR5RGF0YSkge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwidGVtcGVyYXR1cmVfX2xhYmVsXCIpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJIdW1pZGl0eTpcIjtcblxuICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgaHVtaWRpdHkuY2xhc3NMaXN0LmFkZChcInRlbXBlcmF0dXJlX19kYXRhXCIpO1xuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCAke2h1bWlkaXR5RGF0YX0lYDtcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChodW1pZGl0eSk7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cbn1cbiIsImltcG9ydCB7IHJlbmRlclBhZ2VCYXNlZE9uRGF0YSB9IGZyb20gXCIuLi9tb2R1bGVzL3JlbmRlci1kYXRhXCI7XG5pbXBvcnQgeyBmaWx0ZXJXZWF0aGVyRGF0YSB9IGZyb20gXCIuLi9tb2R1bGVzL2ZpbHRlci1kYXRhXCI7XG5pbXBvcnQgeyBnZXRDdXJyZW50Rm9yZWNhc3RGcm9tV2VhdGhlclNlcnZlciB9IGZyb20gXCIuLi9tb2R1bGVzL2FwaS1mZXRjaFwiO1xuXG5hc3luYyBmdW5jdGlvbiBkYXRhUmVuZGVyVGVzdChkYXRhKSB7XG4gIGNvbnN0IHJhd0RhdGEgPSBhd2FpdCBnZXRDdXJyZW50Rm9yZWNhc3RGcm9tV2VhdGhlclNlcnZlcihkYXRhKTtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBmaWx0ZXJXZWF0aGVyRGF0YShyYXdEYXRhKTtcbiAgcmVuZGVyUGFnZUJhc2VkT25EYXRhKHdlYXRoZXJEYXRhKTtcbn1cblxuZGF0YVJlbmRlclRlc3QoXCJsb25kb25cIik7XG5kYXRhUmVuZGVyVGVzdChcIm1vbnRnb21lcnksIGFsXCIpO1xuLy8gZGF0YVJlbmRlclRlc3QoKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi90ZXN0cy9yZW5kZXItZGF0YS10ZXN0c1wiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9