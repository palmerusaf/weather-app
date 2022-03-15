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
async function filterWeatherData(weatherData) {
  weatherData = await weatherData;
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
  if (location.country === "United States of America") {
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

/***/ "./src/tests/filter-data-tests.js":
/*!****************************************!*\
  !*** ./src/tests/filter-data-tests.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/api-fetch */ "./src/modules/api-fetch.js");
/* harmony import */ var _modules_filter_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/filter-data */ "./src/modules/filter-data.js");



const fn = _modules_api_fetch__WEBPACK_IMPORTED_MODULE_0__.getCurrentForecastFromWeatherServer;

async function asyncFn() {
  try {
    const legitData = await (0,_modules_filter_data__WEBPACK_IMPORTED_MODULE_1__.filterWeatherData)(await fn("montgomery,al"));
    console.log(legitData);
    const intDat = await (0,_modules_filter_data__WEBPACK_IMPORTED_MODULE_1__.filterWeatherData)(await fn("london"));
    console.log(intDat);
    const errorData = await (0,_modules_filter_data__WEBPACK_IMPORTED_MODULE_1__.filterWeatherData)(await fn());
    console.log(errorData);
  } catch (error) {
    console.error(error);
  }
}
asyncFn();


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
/* harmony import */ var _tests_filter_data_tests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tests/filter-data-tests */ "./src/tests/filter-data-tests.js");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxRQUFRLEtBQUssY0FBYztBQUNsRjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNkM7Ozs7Ozs7Ozs7Ozs7OztBQ2hCdEM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixJQUFJO0FBQ0o7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7Ozs7Ozs7Ozs7Ozs7QUNqRDJFO0FBQ2hCOztBQUUzRCxXQUFXLG1GQUFtQzs7QUFFOUM7QUFDQTtBQUNBLDRCQUE0Qix1RUFBaUI7QUFDN0M7QUFDQSx5QkFBeUIsdUVBQWlCO0FBQzFDO0FBQ0EsNEJBQTRCLHVFQUFpQjtBQUM3QztBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm1DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9hcGktZmV0Y2guanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9maWx0ZXItZGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy90ZXN0cy9maWx0ZXItZGF0YS10ZXN0cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFQSV9LRVkgPSBcIjliY2IxYzYxOWExZDRlNTJiNWYxMDU4MTgyMjE0MDNcIjtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudEZvcmVjYXN0RnJvbVdlYXRoZXJTZXJ2ZXIocXVlcnlMb2NhdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PSR7QVBJX0tFWX0mcT0ke3F1ZXJ5TG9jYXRpb259JmRheXM9NyZhcWk9bm9gXG4gICAgKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoXCJOZXR3b3JrRXJyb3JcIikpIHtcbiAgICAgIHRocm93IFwiVW5hYmxlIHRvIGNvbm5lY3QgdG8gc2VydmVyLlwiO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQge2dldEN1cnJlbnRGb3JlY2FzdEZyb21XZWF0aGVyU2VydmVyfTtcbiIsImV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaWx0ZXJXZWF0aGVyRGF0YSh3ZWF0aGVyRGF0YSkge1xuICB3ZWF0aGVyRGF0YSA9IGF3YWl0IHdlYXRoZXJEYXRhO1xuICBpZiAod2VhdGhlckRhdGEuZXJyb3IpIHtcbiAgICB0aHJvdyB3ZWF0aGVyRGF0YS5lcnJvci5tZXNzYWdlO1xuICB9XG4gIGNvbnN0IGxvY2F0aW9uID0gZmlsdGVyTG9jYXRpb24od2VhdGhlckRhdGEubG9jYXRpb24pO1xuICBjb25zdCBjdXJyZW50ID0gZmlsdGVyQ3VycmVudCh3ZWF0aGVyRGF0YS5jdXJyZW50KTtcblxuICByZXR1cm4ge1xuICAgIGxvY2F0aW9uLFxuICAgIGN1cnJlbnQsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbHRlckxvY2F0aW9uKGxvY2F0aW9uKSB7XG4gIGNvbnN0IGNpdHkgPSBsb2NhdGlvbi5uYW1lO1xuICBpZiAobG9jYXRpb24uY291bnRyeSA9PT0gXCJVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2FcIikge1xuICAgIGNvbnN0IHN0YXRlT3JDb3VudHJ5ID0gbG9jYXRpb24ucmVnaW9uO1xuICAgIHJldHVybiB7IGNpdHksIHN0YXRlT3JDb3VudHJ5IH07XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc3RhdGVPckNvdW50cnkgPSBsb2NhdGlvbi5jb3VudHJ5O1xuICAgIHJldHVybiB7IGNpdHksIHN0YXRlT3JDb3VudHJ5IH07XG4gIH1cbn1cblxuZnVuY3Rpb24gZmlsdGVyQ3VycmVudChjdXJyZW50KSB7XG4gIGNvbnN0IGNvbmRpdGlvbiA9IGZpbHRlckNvbmRpdGlvbihjdXJyZW50LmNvbmRpdGlvbik7XG4gIGNvbnN0IHRlbXBfYyA9IGN1cnJlbnQudGVtcF9jO1xuICBjb25zdCB0ZW1wX2YgPSBjdXJyZW50LnRlbXBfZjtcbiAgY29uc3QgaXNfZGF5ID0gY3VycmVudC5pc19kYXk7XG4gIGNvbnN0IGh1bWlkaXR5ID0gY3VycmVudC5odW1pZGl0eTtcbiAgY29uc3QgZmVlbHNsaWtlX2MgPSBjdXJyZW50LmZlZWxzbGlrZV9jO1xuICBjb25zdCBmZWVsc2xpa2VfZiA9IGN1cnJlbnQuZmVlbHNsaWtlX2Y7XG5cbiAgcmV0dXJuIHtcbiAgICBjb25kaXRpb24sXG4gICAgdGVtcF9jLFxuICAgIHRlbXBfZixcbiAgICBpc19kYXksXG4gICAgaHVtaWRpdHksXG4gICAgZmVlbHNsaWtlX2MsXG4gICAgZmVlbHNsaWtlX2YsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbHRlckNvbmRpdGlvbihjb25kaXRpb24pIHtcbiAgY29uc3QgdGV4dCA9IGNvbmRpdGlvbi50ZXh0O1xuICBjb25zdCBpY29uID0gXCJodHRwczpcIiArIGNvbmRpdGlvbi5pY29uO1xuICByZXR1cm4geyB0ZXh0LCBpY29uIH07XG59XG4iLCJpbXBvcnQgeyBnZXRDdXJyZW50Rm9yZWNhc3RGcm9tV2VhdGhlclNlcnZlciB9IGZyb20gXCIuLi9tb2R1bGVzL2FwaS1mZXRjaFwiO1xuaW1wb3J0IHsgZmlsdGVyV2VhdGhlckRhdGEgfSBmcm9tIFwiLi4vbW9kdWxlcy9maWx0ZXItZGF0YVwiO1xuXG5jb25zdCBmbiA9IGdldEN1cnJlbnRGb3JlY2FzdEZyb21XZWF0aGVyU2VydmVyO1xuXG5hc3luYyBmdW5jdGlvbiBhc3luY0ZuKCkge1xuICB0cnkge1xuICAgIGNvbnN0IGxlZ2l0RGF0YSA9IGF3YWl0IGZpbHRlcldlYXRoZXJEYXRhKGF3YWl0IGZuKFwibW9udGdvbWVyeSxhbFwiKSk7XG4gICAgY29uc29sZS5sb2cobGVnaXREYXRhKTtcbiAgICBjb25zdCBpbnREYXQgPSBhd2FpdCBmaWx0ZXJXZWF0aGVyRGF0YShhd2FpdCBmbihcImxvbmRvblwiKSk7XG4gICAgY29uc29sZS5sb2coaW50RGF0KTtcbiAgICBjb25zdCBlcnJvckRhdGEgPSBhd2FpdCBmaWx0ZXJXZWF0aGVyRGF0YShhd2FpdCBmbigpKTtcbiAgICBjb25zb2xlLmxvZyhlcnJvckRhdGEpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICB9XG59XG5hc3luY0ZuKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vdGVzdHMvZmlsdGVyLWRhdGEtdGVzdHNcIjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==