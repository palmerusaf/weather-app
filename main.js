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

/***/ "./src/modules/handle-input.js":
/*!*************************************!*\
  !*** ./src/modules/handle-input.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFormValue": () => (/* binding */ getFormValue)
/* harmony export */ });
function getFormValue(event) {
  event.preventDefault();
  const value = event.target["location"].value;
  if (value === "") {
    throw "Please enter your city and state/country.";
  }

  return value.trim();
}


/***/ }),

/***/ "./src/tests/handle-input-tests.js":
/*!*****************************************!*\
  !*** ./src/tests/handle-input-tests.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_handle_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/handle-input */ "./src/modules/handle-input.js");
/* harmony import */ var _modules_filter_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/filter-data */ "./src/modules/filter-data.js");
/* harmony import */ var _modules_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/api-fetch */ "./src/modules/api-fetch.js");




let location = "";
document.querySelector(`form`).addEventListener("submit",handleSubmit);

async function handleSubmit(event) {
  const value = (0,_modules_handle_input__WEBPACK_IMPORTED_MODULE_0__.getFormValue)(event);
  const rawData = await (0,_modules_api_fetch__WEBPACK_IMPORTED_MODULE_2__.getCurrentForecastFromWeatherServer)(value);
  const weatherData=(0,_modules_filter_data__WEBPACK_IMPORTED_MODULE_1__.filterWeatherData)(rawData)
  console.log(weatherData);
}


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
/* harmony import */ var _tests_handle_input_tests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tests/handle-input-tests */ "./src/tests/handle-input-tests.js");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxRQUFRLEtBQUssY0FBYztBQUNsRjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNkM7Ozs7Ozs7Ozs7Ozs7OztBQ2hCckM7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsSUFBSTtBQUNKO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7Ozs7Ozs7Ozs7Ozs7OztBQ2hETztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDUnVEO0FBQ0k7QUFDZ0I7O0FBRTNFO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsbUVBQVk7QUFDNUIsd0JBQXdCLHVGQUFtQztBQUMzRCxvQkFBb0IsdUVBQWlCO0FBQ3JDO0FBQ0E7Ozs7Ozs7VUNaQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9hcGktZmV0Y2guanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9maWx0ZXItZGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2hhbmRsZS1pbnB1dC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy90ZXN0cy9oYW5kbGUtaW5wdXQtdGVzdHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBUElfS0VZID0gXCI5YmNiMWM2MTlhMWQ0ZTUyYjVmMTA1ODE4MjIxNDAzXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnRGb3JlY2FzdEZyb21XZWF0aGVyU2VydmVyKHF1ZXJ5TG9jYXRpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke0FQSV9LRVl9JnE9JHtxdWVyeUxvY2F0aW9ufSZkYXlzPTcmYXFpPW5vYFxuICAgICk7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvci5tZXNzYWdlLmluY2x1ZGVzKFwiTmV0d29ya0Vycm9yXCIpKSB7XG4gICAgICB0aHJvdyBcIlVuYWJsZSB0byBjb25uZWN0IHRvIHNlcnZlci5cIjtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHtnZXRDdXJyZW50Rm9yZWNhc3RGcm9tV2VhdGhlclNlcnZlcn07XG4iLCJleHBvcnQgIGZ1bmN0aW9uIGZpbHRlcldlYXRoZXJEYXRhKHdlYXRoZXJEYXRhKSB7XG4gIGlmICh3ZWF0aGVyRGF0YS5lcnJvcikge1xuICAgIHRocm93IHdlYXRoZXJEYXRhLmVycm9yLm1lc3NhZ2U7XG4gIH1cbiAgY29uc3QgbG9jYXRpb24gPSBmaWx0ZXJMb2NhdGlvbih3ZWF0aGVyRGF0YS5sb2NhdGlvbik7XG4gIGNvbnN0IGN1cnJlbnQgPSBmaWx0ZXJDdXJyZW50KHdlYXRoZXJEYXRhLmN1cnJlbnQpO1xuXG4gIHJldHVybiB7XG4gICAgbG9jYXRpb24sXG4gICAgY3VycmVudCxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyTG9jYXRpb24obG9jYXRpb24pIHtcbiAgY29uc3QgY2l0eSA9IGxvY2F0aW9uLm5hbWU7XG4gIGlmIChsb2NhdGlvbi5jb3VudHJ5LmluY2x1ZGVzKFwiVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhXCIpKSB7XG4gICAgY29uc3Qgc3RhdGVPckNvdW50cnkgPSBsb2NhdGlvbi5yZWdpb247XG4gICAgcmV0dXJuIHsgY2l0eSwgc3RhdGVPckNvdW50cnkgfTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzdGF0ZU9yQ291bnRyeSA9IGxvY2F0aW9uLmNvdW50cnk7XG4gICAgcmV0dXJuIHsgY2l0eSwgc3RhdGVPckNvdW50cnkgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaWx0ZXJDdXJyZW50KGN1cnJlbnQpIHtcbiAgY29uc3QgY29uZGl0aW9uID0gZmlsdGVyQ29uZGl0aW9uKGN1cnJlbnQuY29uZGl0aW9uKTtcbiAgY29uc3QgdGVtcF9jID0gY3VycmVudC50ZW1wX2M7XG4gIGNvbnN0IHRlbXBfZiA9IGN1cnJlbnQudGVtcF9mO1xuICBjb25zdCBpc19kYXkgPSBjdXJyZW50LmlzX2RheTtcbiAgY29uc3QgaHVtaWRpdHkgPSBjdXJyZW50Lmh1bWlkaXR5O1xuICBjb25zdCBmZWVsc2xpa2VfYyA9IGN1cnJlbnQuZmVlbHNsaWtlX2M7XG4gIGNvbnN0IGZlZWxzbGlrZV9mID0gY3VycmVudC5mZWVsc2xpa2VfZjtcblxuICByZXR1cm4ge1xuICAgIGNvbmRpdGlvbixcbiAgICB0ZW1wX2MsXG4gICAgdGVtcF9mLFxuICAgIGlzX2RheSxcbiAgICBodW1pZGl0eSxcbiAgICBmZWVsc2xpa2VfYyxcbiAgICBmZWVsc2xpa2VfZixcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyQ29uZGl0aW9uKGNvbmRpdGlvbikge1xuICBjb25zdCB0ZXh0ID0gY29uZGl0aW9uLnRleHQ7XG4gIGNvbnN0IGljb24gPSBcImh0dHBzOlwiICsgY29uZGl0aW9uLmljb247XG4gIHJldHVybiB7IHRleHQsIGljb24gfTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRGb3JtVmFsdWUoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXRbXCJsb2NhdGlvblwiXS52YWx1ZTtcbiAgaWYgKHZhbHVlID09PSBcIlwiKSB7XG4gICAgdGhyb3cgXCJQbGVhc2UgZW50ZXIgeW91ciBjaXR5IGFuZCBzdGF0ZS9jb3VudHJ5LlwiO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlLnRyaW0oKTtcbn1cbiIsImltcG9ydCB7IGdldEZvcm1WYWx1ZSB9IGZyb20gXCIuLi9tb2R1bGVzL2hhbmRsZS1pbnB1dFwiO1xuaW1wb3J0IHsgZmlsdGVyV2VhdGhlckRhdGEgfSBmcm9tIFwiLi4vbW9kdWxlcy9maWx0ZXItZGF0YVwiO1xuaW1wb3J0IHsgZ2V0Q3VycmVudEZvcmVjYXN0RnJvbVdlYXRoZXJTZXJ2ZXIgfSBmcm9tIFwiLi4vbW9kdWxlcy9hcGktZmV0Y2hcIjtcblxubGV0IGxvY2F0aW9uID0gXCJcIjtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGZvcm1gKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsaGFuZGxlU3VibWl0KTtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gIGNvbnN0IHZhbHVlID0gZ2V0Rm9ybVZhbHVlKGV2ZW50KTtcbiAgY29uc3QgcmF3RGF0YSA9IGF3YWl0IGdldEN1cnJlbnRGb3JlY2FzdEZyb21XZWF0aGVyU2VydmVyKHZhbHVlKTtcbiAgY29uc3Qgd2VhdGhlckRhdGE9ZmlsdGVyV2VhdGhlckRhdGEocmF3RGF0YSlcbiAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3Rlc3RzL2hhbmRsZS1pbnB1dC10ZXN0c1wiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9