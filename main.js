/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/PermanentMarker-Regular.ttf */ "./src/fonts/PermanentMarker-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Ubuntu-Regular.ttf */ "./src/fonts/Ubuntu-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/day.jpg */ "./src/img/day.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/night.jpg */ "./src/img/night.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"titleFont\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: \"dataFont\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #feb101;\n  min-width: 100vw;\n  min-height: 100vh;\n}\n\n.flex-col {\n  display: flex;\n  flex-direction: column;\n}\n\n.flex {\n  display: flex;\n}\n\n.title {\n  font-family: \"titleFont\";\n  text-align: center;\n}\n.title__word {\n  margin-left: -0.6em;\n  font-size: 0.5em;\n}\n\n.form {\n  justify-content: center;\n  margin: 0 0.77em;\n}\n.form__input-box {\n  width: 12.5em;\n  border-radius: 5px;\n  text-align: center;\n}\n.form__submit {\n  background-color: #feb101;\n  border-radius: 6px;\n  margin-top: 0.4em;\n  padding: 0 0.3em;\n  align-self: flex-start;\n}\n.form__submit:hover {\n  background-color: #feb101;\n}\n\n.search-bar {\n  background-color: whitesmoke;\n  padding: 0.3em;\n  width: 20em;\n  border: solid 1px black;\n  border-radius: 50px;\n}\n.search-bar__submit-button {\n  border: none;\n  background: none;\n}\n.search-bar__submit-button:focus, .search-bar__submit-button:hover {\n  outline: none;\n  transition: 300ms;\n  transform: scale(1.2);\n}\n.search-bar__input-box {\n  border: none;\n  background: none;\n}\n.search-bar__input-box:focus, .search-bar__input-box:hover {\n  outline: none;\n}\n\n.status-message {\n  transform: scale(0.75);\n  transition: 300ms;\n  height: 1em;\n  margin-top: 0.4em;\n  white-space: nowrap;\n  font-family: \"titleFont\";\n  text-align: center;\n}\n.status-message--error {\n  color: red;\n}\n.status-message--visible {\n  transform: scale(1);\n  transition: 300ms;\n}\n\n.unit-toggle {\n  display: flex;\n  align-items: center;\n  font-family: \"titleFont\";\n  font-size: 1.5em;\n  margin-left: 0.6em;\n  background: none;\n  border: none;\n  transition: 300ms;\n}\n.unit-toggle--active {\n  transform: scale(1.2);\n  font-weight: 600;\n  transition: 300ms;\n  color: red;\n}\n.unit-toggle:focus, .unit-toggle:hover {\n  transition: 300ms;\n  transform: scale(1.2);\n  outline: none;\n}\n\n@keyframes popIn {\n  from {\n    transform: scale(0.75);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.display-container {\n  padding: 1em;\n  width: 18em;\n  min-height: 14.5em;\n  border-radius: 1em;\n  margin-top: 1em;\n  align-self: center;\n  color: white;\n  font-family: \"dataFont\";\n}\n.display-container__location {\n  font-weight: 600;\n  text-align: center;\n}\n.display-container__condition {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 1em;\n}\n.display-container * {\n  animation-name: popIn;\n  animation-duration: 800ms;\n}\n\n.temperature__label {\n  margin-top: 0.2em;\n  font-weight: 600;\n  position: relative;\n}\n.temperature__data {\n  position: absolute;\n  margin-left: 0.5em;\n  font-weight: normal;\n  transition: 300ms;\n  -webkit-text-stroke: none;\n}\n.temperature--hidden {\n  transition: 300ms;\n  opacity: 0;\n  transform: scale(0);\n}\n\n.day {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-position: center;\n  background-size: cover;\n}\n\n.night {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-position: center;\n  background-size: cover;\n}\n\n.footer {\n  display: none;\n}\n\n@media screen and (min-height: 420px) {\n  .display-container {\n    margin: 2.5em 0;\n  }\n\n  .footer {\n    display: flex;\n    margin-top: auto;\n    margin-bottom: 0.3em;\n    justify-content: center;\n    width: 100%;\n  }\n  .footer__link {\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    color: black;\n    font-family: \"dataFont\";\n  }\n  .footer__icon {\n    width: 1.5em;\n    margin-left: 0.2em;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;EACE,wBAAA;EACA,4CAAA;AACF;AAEA;EACE,uBAAA;EACA,4CAAA;AAAF;AAYA;EACE,UAAA;EACA,SAAA;EACA,sBAAA;AAVF;;AAaA;EACE,yBAVmB;EAWnB,gBAAA;EACA,iBAAA;AAVF;;AAaA;EACE,aAAA;EACA,sBAAA;AAVF;;AAaA;EACE,aAAA;AAVF;;AAaA;EACE,wBAAA;EACA,kBAAA;AAVF;AAWE;EACE,mBAAA;EACA,gBAAA;AATJ;;AAaA;EACE,uBAAA;EACA,gBAAA;AAVF;AAWE;EACE,aAAA;EACA,kBAAA;EACA,kBAAA;AATJ;AAWE;EACE,yBA3CW;EA4CX,kBAAA;EACA,iBAAA;EACA,gBAAA;EACA,sBAAA;AATJ;AAUI;EACE,yBAhDe;AAwCrB;;AAaA;EACE,4BAAA;EACA,cAAA;EACA,WAAA;EACA,uBAAA;EACA,mBAAA;AAVF;AAWE;EACE,YAAA;EACA,gBAAA;AATJ;AAUI;EAEE,aAAA;EACA,iBAAA;EACA,qBAAA;AATN;AAYE;EACE,YAAA;EACA,gBAAA;AAVJ;AAWI;EAEE,aAAA;AAVN;;AAeA;EACE,sBAAA;EACA,iBAhFuB;EAiFvB,WAAA;EACA,iBAAA;EACA,mBAAA;EACA,wBAAA;EACA,kBAAA;AAZF;AAaE;EACE,UAAA;AAXJ;AAaE;EACE,mBAAA;EACA,iBA3FqB;AAgFzB;;AAeA;EACE,aAAA;EACA,mBAAA;EACA,wBAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,iBAAA;AAZF;AAaE;EACE,qBAAA;EACA,gBAAA;EACA,iBAAA;EACA,UAAA;AAXJ;AAaE;EAEE,iBAAA;EACA,qBAAA;EACA,aAAA;AAZJ;;AAgBA;EACE;IACE,sBAAA;IACA,UAAA;EAbF;EAeA;IACE,mBAAA;IACA,UAAA;EAbF;AACF;AAgBA;EACE,YAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,uBAAA;AAdF;AAeE;EACE,gBAAA;EACA,kBAAA;AAbJ;AAeE;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;AAbJ;AAeE;EACE,qBAAA;EACA,yBAAA;AAbJ;;AAkBE;EACE,iBAAA;EACA,gBAAA;EACA,kBAAA;AAfJ;AAiBE;EACE,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,iBApKqB;EAqKrB,yBAAA;AAfJ;AAiBE;EACE,iBAxKqB;EAyKrB,UAAA;EACA,mBAAA;AAfJ;;AAmBA;EACE,mDAAA;EACA,2BAAA;EACA,sBAAA;AAhBF;;AAmBA;EACE,mDAAA;EACA,2BAAA;EACA,sBAAA;AAhBF;;AAmBA;EACE,aAAA;AAhBF;;AAmBA;EACE;IACE,eAAA;EAhBF;;EAmBA;IACE,aAAA;IACA,gBAAA;IACA,oBAAA;IACA,uBAAA;IACA,WAAA;EAhBF;EAiBE;IACE,aAAA;IACA,mBAAA;IACA,qBAAA;IACA,YAAA;IACA,uBAAA;EAfJ;EAiBE;IACE,YAAA;IACA,kBAAA;EAfJ;AACF","sourcesContent":["@font-face {\n  font-family: \"titleFont\";\n  src: url(\"./fonts/PermanentMarker-Regular.ttf\");\n}\n\n@font-face {\n  font-family: \"dataFont\";\n  src: url(\"./fonts/Ubuntu-Regular.ttf\");\n}\n\n$color-C: #0073db;\n$color-F: #fff100;\n$toggle-outline: rgb(26, 26, 26);\n$title-color: #feb101;\n$form-area-color: #feb101;\n$button-color: #feb101;\n$button-color-hover: #feb101;\n$display-msg-transition: 300ms;\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: $button-color-hover;\n  min-width: 100vw;\n  min-height: 100vh;\n}\n\n.flex-col {\n  display: flex;\n  flex-direction: column;\n}\n\n.flex {\n  display: flex;\n}\n\n.title {\n  font-family: \"titleFont\";\n  text-align: center;\n  &__word {\n    margin-left: -0.6em;\n    font-size: 0.5em;\n  }\n}\n\n.form {\n  justify-content: center;\n  margin: 0 0.77em;\n  &__input-box {\n    width: 12.5em;\n    border-radius: 5px;\n    text-align: center;\n  }\n  &__submit {\n    background-color: $button-color;\n    border-radius: 6px;\n    margin-top: 0.4em;\n    padding: 0 0.3em;\n    align-self: flex-start;\n    &:hover {\n      background-color: $button-color-hover;\n    }\n  }\n}\n\n.search-bar {\n  background-color: whitesmoke;\n  padding: 0.3em;\n  width: 20em;\n  border: solid 1px black;\n  border-radius: 50px;\n  &__submit-button {\n    border: none;\n    background: none;\n    &:focus,\n    &:hover {\n      outline: none;\n      transition: 300ms;\n      transform: scale(1.2);\n    }\n  }\n  &__input-box {\n    border: none;\n    background: none;\n    &:focus,\n    &:hover {\n      outline: none;\n    }\n  }\n}\n\n.status-message {\n  transform: scale(0.75);\n  transition: $display-msg-transition;\n  height: 1em;\n  margin-top: 0.4em;\n  white-space: nowrap;\n  font-family: \"titleFont\";\n  text-align: center;\n  &--error {\n    color: red;\n  }\n  &--visible {\n    transform: scale(1);\n    transition: $display-msg-transition;\n  }\n}\n\n.unit-toggle {\n  display: flex;\n  align-items: center;\n  font-family: \"titleFont\";\n  font-size: 1.5em;\n  margin-left: 0.6em;\n  background: none;\n  border: none;\n  transition: 300ms;\n  &--active {\n    transform: scale(1.2);\n    font-weight: 600;\n    transition: 300ms;\n    color: red;\n  }\n  &:focus,\n  &:hover {\n    transition: 300ms;\n    transform: scale(1.2);\n    outline: none;\n  }\n}\n\n@keyframes popIn {\n  from {\n    transform: scale(0.75);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n.display-container {\n  padding: 1em;\n  width: 18em;\n  min-height: 14.5em;\n  border-radius: 1em;\n  margin-top: 1em;\n  align-self: center;\n  color: white;\n  font-family: \"dataFont\";\n  &__location {\n    font-weight: 600;\n    text-align: center;\n  }\n  &__condition {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 1em;\n  }\n  & * {\n    animation-name: popIn;\n    animation-duration: 800ms;\n  }\n}\n\n.temperature {\n  &__label {\n    margin-top: 0.2em;\n    font-weight: 600;\n    position: relative;\n  }\n  &__data {\n    position: absolute;\n    margin-left: 0.5em;\n    font-weight: normal;\n    transition: $display-msg-transition;\n    -webkit-text-stroke: none;\n  }\n  &--hidden {\n    transition: $display-msg-transition;\n    opacity: 0;\n    transform: scale(0);\n  }\n}\n\n.day {\n  background: url(\"./img/day.jpg\");\n  background-position: center;\n  background-size: cover;\n}\n\n.night {\n  background: url(\"./img/night.jpg\");\n  background-position: center;\n  background-size: cover;\n}\n\n.footer {\n  display: none;\n}\n\n@media screen and (min-height: 420px) {\n  .display-container {\n    margin: 2.5em 0;\n  }\n\n  .footer {\n    display: flex;\n    margin-top: auto;\n    margin-bottom: .3em;\n    justify-content: center;\n    width: 100%;\n    &__link {\n      display: flex;\n      align-items: center;\n      text-decoration: none;\n      color: black;\n      font-family: \"dataFont\";\n    }\n    &__icon {\n      width: 1.5em;\n      margin-left: 0.2em;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

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
  const locationDisplay = renderLocationName(location);
  const currentWeatherDisplay = renderCurrentWeather(current);

  displayContainer.appendChild(locationDisplay);
  displayContainer.appendChild(currentWeatherDisplay);

  changeStyleToDayOrNight(current, displayContainer);
  setTempUnitDefaultBasedOnArea(data);
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

function changeStyleToDayOrNight(current) {
  const displayContainer = document.querySelector(".display-container");
  const isDay = current.is_day;
  if (isDay) {
    displayContainer.classList.add("day");
    displayContainer.classList.remove("night");
  } else {
    displayContainer.classList.add("night");
    displayContainer.classList.remove("day");
  }
}

function setTempUnitDefaultBasedOnArea(data) {
  if (data.areaUsesFahrenheit) {
    hideCelsiusTemps();
    setToggleToF();
  } else {
    hideFahrenheitTemps();
    setToggleToC();
  }

  function hideCelsiusTemps() {
    hideTemps("c");
  }

  function hideFahrenheitTemps() {
    hideTemps("f");
  }

  function hideTemps(unit) {
    const temps = [...document.querySelectorAll(`.temperature__${unit}`)];
    temps.forEach((temp) => temp.classList.add("temperature--hidden"));
  }

  function setToggleToC() {
    const cUnit=document.querySelector('.unit-toggle__C')
    cUnit.classList.add('unit-toggle--active')
    const fUnit=document.querySelector('.unit-toggle__F')
    fUnit.classList.remove('unit-toggle--active')
  }

  function setToggleToF() {
    const cUnit=document.querySelector('.unit-toggle__C')
    cUnit.classList.remove('unit-toggle--active')
    const fUnit=document.querySelector('.unit-toggle__F')
    fUnit.classList.add('unit-toggle--active')
  }
}


/***/ }),

/***/ "./src/modules/status-messages.js":
/*!****************************************!*\
  !*** ./src/modules/status-messages.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearMessages": () => (/* binding */ clearMessages),
/* harmony export */   "displayError": () => (/* binding */ displayError),
/* harmony export */   "displayStatus": () => (/* binding */ displayStatus)
/* harmony export */ });
const statusMessage = document.querySelector(".status-message");

function displayStatus(message) {
  statusMessage.classList.remove("status-message--error");
  statusMessage.classList.add("status-message--visible");
  statusMessage.textContent = message;
}

function displayError(error) {
  statusMessage.classList.add("status-message--error");
  statusMessage.classList.add("status-message--visible");
  statusMessage.textContent = error;
}

function clearMessages() {
  statusMessage.classList.remove("status-message--error");
  statusMessage.classList.remove("status-message--visible");
  statusMessage.textContent = "";
}




/***/ }),

/***/ "./src/modules/unit-toggle.js":
/*!************************************!*\
  !*** ./src/modules/unit-toggle.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleUnitToggleClick": () => (/* binding */ handleUnitToggleClick)
/* harmony export */ });
function handleUnitToggleClick(event) {
  if (isDisplayEmpty()) {
    return;
  }
  changeClassForToggleButton();
  changeClassForTemperatures();
}

function changeClassForToggleButton() {
    const cUnit=document.querySelector('.unit-toggle__C')
    cUnit.classList.toggle('unit-toggle--active')
    const fUnit=document.querySelector('.unit-toggle__F')
    fUnit.classList.toggle('unit-toggle--active')
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


/***/ }),

/***/ "./src/fonts/PermanentMarker-Regular.ttf":
/*!***********************************************!*\
  !*** ./src/fonts/PermanentMarker-Regular.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "109a10dca0508e41aa12.ttf";

/***/ }),

/***/ "./src/fonts/Ubuntu-Regular.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Ubuntu-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1cbb1b79a23478cc89ad.ttf";

/***/ }),

/***/ "./src/img/day.jpg":
/*!*************************!*\
  !*** ./src/img/day.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f090ed85e957cbd8b24.jpg";

/***/ }),

/***/ "./src/img/night.jpg":
/*!***************************!*\
  !*** ./src/img/night.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "88b8423dc37c1237af0d.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _modules_status_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/status-messages */ "./src/modules/status-messages.js");
/* harmony import */ var _modules_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/api-fetch */ "./src/modules/api-fetch.js");
/* harmony import */ var _modules_filter_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/filter-data */ "./src/modules/filter-data.js");
/* harmony import */ var _modules_handle_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/handle-input */ "./src/modules/handle-input.js");
/* harmony import */ var _modules_render_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/render-data */ "./src/modules/render-data.js");
/* harmony import */ var _modules_unit_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/unit-toggle */ "./src/modules/unit-toggle.js");
// TO-DO remove test
// import "./tests/test-data-for-styling";
// TO-DO remove test









//init button that toggles between fahrenheit and celsius
const unitToggle = document.querySelector(".unit-toggle");
unitToggle.addEventListener("click", _modules_unit_toggle__WEBPACK_IMPORTED_MODULE_6__.handleUnitToggleClick);

//init search form functionality
const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  try {
    const value = (0,_modules_handle_input__WEBPACK_IMPORTED_MODULE_4__.getFormValue)(event);
    (0,_modules_status_messages__WEBPACK_IMPORTED_MODULE_1__.displayStatus)("Gathering Weather Info");
    const rawData = await (0,_modules_api_fetch__WEBPACK_IMPORTED_MODULE_2__.getCurrentForecastFromWeatherServer)(value);
    (0,_modules_status_messages__WEBPACK_IMPORTED_MODULE_1__.displayStatus)("Displaying Weather Info");
    const weatherData = (0,_modules_filter_data__WEBPACK_IMPORTED_MODULE_3__.filterWeatherData)(rawData);
    (0,_modules_render_data__WEBPACK_IMPORTED_MODULE_5__.renderPageBasedOnData)(weatherData);
    (0,_modules_status_messages__WEBPACK_IMPORTED_MODULE_1__.clearMessages)();
  } catch (error) {
    console.log(error);
    (0,_modules_status_messages__WEBPACK_IMPORTED_MODULE_1__.displayError)(error);
  }
  form.reset();
  form['location'].blur();
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0Msb0JBQW9CO0FBQ3BEOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0Msb0JBQW9CO0FBQ3BEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLGFBQWE7QUFDNUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlFQUFpRSxLQUFLO0FBQ3RFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFKQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFc0Q7Ozs7Ozs7Ozs7Ozs7OztBQ3BCL0M7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBOztBQUVzQjtBQUthO0FBQ3VDO0FBQ2hCO0FBQ0o7QUFDUTtBQUNBOztBQUU5RDtBQUNBO0FBQ0EscUNBQXFDLHVFQUFxQjs7QUFFMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsbUVBQVk7QUFDOUIsSUFBSSx1RUFBYTtBQUNqQiwwQkFBMEIsdUZBQW1DO0FBQzdELElBQUksdUVBQWE7QUFDakIsd0JBQXdCLHVFQUFpQjtBQUN6QyxJQUFJLDJFQUFxQjtBQUN6QixJQUFJLHVFQUFhO0FBQ2pCLElBQUk7QUFDSjtBQUNBLElBQUksc0VBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2FwaS1mZXRjaC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2ZpbHRlci1kYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvaGFuZGxlLWlucHV0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvcmVuZGVyLWRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9zdGF0dXMtbWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy91bml0LXRvZ2dsZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvUGVybWFuZW50TWFya2VyLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9VYnVudHUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltZy9kYXkuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWcvbmlnaHQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcInRpdGxlRm9udFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJkYXRhRm9udFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlYjEwMTtcXG4gIG1pbi13aWR0aDogMTAwdnc7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmZsZXgtY29sIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJ0aXRsZUZvbnRcXFwiO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udGl0bGVfX3dvcmQge1xcbiAgbWFyZ2luLWxlZnQ6IC0wLjZlbTtcXG4gIGZvbnQtc2l6ZTogMC41ZW07XFxufVxcblxcbi5mb3JtIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDAuNzdlbTtcXG59XFxuLmZvcm1fX2lucHV0LWJveCB7XFxuICB3aWR0aDogMTIuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZm9ybV9fc3VibWl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWIxMDE7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBtYXJnaW4tdG9wOiAwLjRlbTtcXG4gIHBhZGRpbmc6IDAgMC4zZW07XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG4uZm9ybV9fc3VibWl0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWIxMDE7XFxufVxcblxcbi5zZWFyY2gtYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICBwYWRkaW5nOiAwLjNlbTtcXG4gIHdpZHRoOiAyMGVtO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbn1cXG4uc2VhcmNoLWJhcl9fc3VibWl0LWJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG4uc2VhcmNoLWJhcl9fc3VibWl0LWJ1dHRvbjpmb2N1cywgLnNlYXJjaC1iYXJfX3N1Ym1pdC1idXR0b246aG92ZXIge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHRyYW5zaXRpb246IDMwMG1zO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG4uc2VhcmNoLWJhcl9faW5wdXQtYm94IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcbi5zZWFyY2gtYmFyX19pbnB1dC1ib3g6Zm9jdXMsIC5zZWFyY2gtYmFyX19pbnB1dC1ib3g6aG92ZXIge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnN0YXR1cy1tZXNzYWdlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC43NSk7XFxuICB0cmFuc2l0aW9uOiAzMDBtcztcXG4gIGhlaWdodDogMWVtO1xcbiAgbWFyZ2luLXRvcDogMC40ZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJ0aXRsZUZvbnRcXFwiO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uc3RhdHVzLW1lc3NhZ2UtLWVycm9yIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcbi5zdGF0dXMtbWVzc2FnZS0tdmlzaWJsZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgdHJhbnNpdGlvbjogMzAwbXM7XFxufVxcblxcbi51bml0LXRvZ2dsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwidGl0bGVGb250XFxcIjtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBtYXJnaW4tbGVmdDogMC42ZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdHJhbnNpdGlvbjogMzAwbXM7XFxufVxcbi51bml0LXRvZ2dsZS0tYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB0cmFuc2l0aW9uOiAzMDBtcztcXG4gIGNvbG9yOiByZWQ7XFxufVxcbi51bml0LXRvZ2dsZTpmb2N1cywgLnVuaXQtdG9nZ2xlOmhvdmVyIHtcXG4gIHRyYW5zaXRpb246IDMwMG1zO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuQGtleWZyYW1lcyBwb3BJbiB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuLmRpc3BsYXktY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIHdpZHRoOiAxOGVtO1xcbiAgbWluLWhlaWdodDogMTQuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJkYXRhRm9udFxcXCI7XFxufVxcbi5kaXNwbGF5LWNvbnRhaW5lcl9fbG9jYXRpb24ge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmRpc3BsYXktY29udGFpbmVyX19jb25kaXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG4uZGlzcGxheS1jb250YWluZXIgKiB7XFxuICBhbmltYXRpb24tbmFtZTogcG9wSW47XFxuICBhbmltYXRpb24tZHVyYXRpb246IDgwMG1zO1xcbn1cXG5cXG4udGVtcGVyYXR1cmVfX2xhYmVsIHtcXG4gIG1hcmdpbi10b3A6IDAuMmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRlbXBlcmF0dXJlX19kYXRhIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICB0cmFuc2l0aW9uOiAzMDBtcztcXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IG5vbmU7XFxufVxcbi50ZW1wZXJhdHVyZS0taGlkZGVuIHtcXG4gIHRyYW5zaXRpb246IDMwMG1zO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcblxcbi5kYXkge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5uaWdodCB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogNDIwcHgpIHtcXG4gIC5kaXNwbGF5LWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMi41ZW0gMDtcXG4gIH1cXG5cXG4gIC5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjNlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLmZvb3Rlcl9fbGluayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LWZhbWlseTogXFxcImRhdGFGb250XFxcIjtcXG4gIH1cXG4gIC5mb290ZXJfX2ljb24ge1xcbiAgICB3aWR0aDogMS41ZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjJlbTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBQTtFQUNBLDRDQUFBO0FBQ0Y7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsNENBQUE7QUFBRjtBQVlBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQVZGOztBQWFBO0VBQ0UseUJBVm1CO0VBV25CLGdCQUFBO0VBQ0EsaUJBQUE7QUFWRjs7QUFhQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQVZGOztBQWFBO0VBQ0UsYUFBQTtBQVZGOztBQWFBO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtBQVZGO0FBV0U7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBVEo7O0FBYUE7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0FBVkY7QUFXRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBVEo7QUFXRTtFQUNFLHlCQTNDVztFQTRDWCxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQVRKO0FBVUk7RUFDRSx5QkFoRGU7QUF3Q3JCOztBQWFBO0VBQ0UsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFWRjtBQVdFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBVEo7QUFVSTtFQUVFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBVE47QUFZRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQVZKO0FBV0k7RUFFRSxhQUFBO0FBVk47O0FBZUE7RUFDRSxzQkFBQTtFQUNBLGlCQWhGdUI7RUFpRnZCLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtBQVpGO0FBYUU7RUFDRSxVQUFBO0FBWEo7QUFhRTtFQUNFLG1CQUFBO0VBQ0EsaUJBM0ZxQjtBQWdGekI7O0FBZUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQVpGO0FBYUU7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FBWEo7QUFhRTtFQUVFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FBWko7O0FBZ0JBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLFVBQUE7RUFiRjtFQWVBO0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0VBYkY7QUFDRjtBQWdCQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQWRGO0FBZUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBYko7QUFlRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFiSjtBQWVFO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtBQWJKOztBQWtCRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQWZKO0FBaUJFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBcEtxQjtFQXFLckIseUJBQUE7QUFmSjtBQWlCRTtFQUNFLGlCQXhLcUI7RUF5S3JCLFVBQUE7RUFDQSxtQkFBQTtBQWZKOztBQW1CQTtFQUNFLG1EQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQWhCRjs7QUFtQkE7RUFDRSxtREFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7QUFoQkY7O0FBbUJBO0VBQ0UsYUFBQTtBQWhCRjs7QUFtQkE7RUFDRTtJQUNFLGVBQUE7RUFoQkY7O0VBbUJBO0lBQ0UsYUFBQTtJQUNBLGdCQUFBO0lBQ0Esb0JBQUE7SUFDQSx1QkFBQTtJQUNBLFdBQUE7RUFoQkY7RUFpQkU7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxxQkFBQTtJQUNBLFlBQUE7SUFDQSx1QkFBQTtFQWZKO0VBaUJFO0lBQ0UsWUFBQTtJQUNBLGtCQUFBO0VBZko7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwidGl0bGVGb250XFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL1Blcm1hbmVudE1hcmtlci1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiZGF0YUZvbnRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvVWJ1bnR1LVJlZ3VsYXIudHRmXFxcIik7XFxufVxcblxcbiRjb2xvci1DOiAjMDA3M2RiO1xcbiRjb2xvci1GOiAjZmZmMTAwO1xcbiR0b2dnbGUtb3V0bGluZTogcmdiKDI2LCAyNiwgMjYpO1xcbiR0aXRsZS1jb2xvcjogI2ZlYjEwMTtcXG4kZm9ybS1hcmVhLWNvbG9yOiAjZmViMTAxO1xcbiRidXR0b24tY29sb3I6ICNmZWIxMDE7XFxuJGJ1dHRvbi1jb2xvci1ob3ZlcjogI2ZlYjEwMTtcXG4kZGlzcGxheS1tc2ctdHJhbnNpdGlvbjogMzAwbXM7XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnV0dG9uLWNvbG9yLWhvdmVyO1xcbiAgbWluLXdpZHRoOiAxMDB2dztcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uZmxleC1jb2wge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50aXRsZSB7XFxuICBmb250LWZhbWlseTogXFxcInRpdGxlRm9udFxcXCI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAmX193b3JkIHtcXG4gICAgbWFyZ2luLWxlZnQ6IC0wLjZlbTtcXG4gICAgZm9udC1zaXplOiAwLjVlbTtcXG4gIH1cXG59XFxuXFxuLmZvcm0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDAgMC43N2VtO1xcbiAgJl9faW5wdXQtYm94IHtcXG4gICAgd2lkdGg6IDEyLjVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICAmX19zdWJtaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnV0dG9uLWNvbG9yO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIG1hcmdpbi10b3A6IDAuNGVtO1xcbiAgICBwYWRkaW5nOiAwIDAuM2VtO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnV0dG9uLWNvbG9yLWhvdmVyO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5zZWFyY2gtYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICBwYWRkaW5nOiAwLjNlbTtcXG4gIHdpZHRoOiAyMGVtO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgJl9fc3VibWl0LWJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgJjpmb2N1cyxcXG4gICAgJjpob3ZlciB7XFxuICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICB0cmFuc2l0aW9uOiAzMDBtcztcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIH1cXG4gIH1cXG4gICZfX2lucHV0LWJveCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgJjpmb2N1cyxcXG4gICAgJjpob3ZlciB7XFxuICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uc3RhdHVzLW1lc3NhZ2Uge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcXG4gIHRyYW5zaXRpb246ICRkaXNwbGF5LW1zZy10cmFuc2l0aW9uO1xcbiAgaGVpZ2h0OiAxZW07XFxuICBtYXJnaW4tdG9wOiAwLjRlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBmb250LWZhbWlseTogXFxcInRpdGxlRm9udFxcXCI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAmLS1lcnJvciB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICB9XFxuICAmLS12aXNpYmxlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNpdGlvbjogJGRpc3BsYXktbXNnLXRyYW5zaXRpb247XFxuICB9XFxufVxcblxcbi51bml0LXRvZ2dsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwidGl0bGVGb250XFxcIjtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBtYXJnaW4tbGVmdDogMC42ZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdHJhbnNpdGlvbjogMzAwbXM7XFxuICAmLS1hY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRyYW5zaXRpb246IDMwMG1zO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgfVxcbiAgJjpmb2N1cyxcXG4gICY6aG92ZXIge1xcbiAgICB0cmFuc2l0aW9uOiAzMDBtcztcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHBvcEluIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4uZGlzcGxheS1jb250YWluZXIge1xcbiAgcGFkZGluZzogMWVtO1xcbiAgd2lkdGg6IDE4ZW07XFxuICBtaW4taGVpZ2h0OiAxNC41ZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBtYXJnaW4tdG9wOiAxZW07XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogXFxcImRhdGFGb250XFxcIjtcXG4gICZfX2xvY2F0aW9uIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbiAgJl9fY29uZGl0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgfVxcbiAgJiAqIHtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHBvcEluO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDgwMG1zO1xcbiAgfVxcbn1cXG5cXG4udGVtcGVyYXR1cmUge1xcbiAgJl9fbGFiZWwge1xcbiAgICBtYXJnaW4tdG9wOiAwLjJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcbiAgJl9fZGF0YSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICB0cmFuc2l0aW9uOiAkZGlzcGxheS1tc2ctdHJhbnNpdGlvbjtcXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogbm9uZTtcXG4gIH1cXG4gICYtLWhpZGRlbiB7XFxuICAgIHRyYW5zaXRpb246ICRkaXNwbGF5LW1zZy10cmFuc2l0aW9uO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgfVxcbn1cXG5cXG4uZGF5IHtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi9pbWcvZGF5LmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLm5pZ2h0IHtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi9pbWcvbmlnaHQuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA0MjBweCkge1xcbiAgLmRpc3BsYXktY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAyLjVlbSAwO1xcbiAgfVxcblxcbiAgLmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IC4zZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgJl9fbGluayB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJkYXRhRm9udFxcXCI7XFxuICAgIH1cXG4gICAgJl9faWNvbiB7XFxuICAgICAgd2lkdGg6IDEuNWVtO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjJlbTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IEFQSV9LRVkgPSBcIjliY2IxYzYxOWExZDRlNTJiNWYxMDU4MTgyMjE0MDNcIjtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudEZvcmVjYXN0RnJvbVdlYXRoZXJTZXJ2ZXIocXVlcnlMb2NhdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PSR7QVBJX0tFWX0mcT0ke3F1ZXJ5TG9jYXRpb259JmRheXM9NyZhcWk9bm9gXG4gICAgKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoXCJOZXR3b3JrRXJyb3JcIikpIHtcbiAgICAgIHRocm93IFwiVW5hYmxlIHRvIGNvbm5lY3QgdG8gc2VydmVyLlwiO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQge2dldEN1cnJlbnRGb3JlY2FzdEZyb21XZWF0aGVyU2VydmVyfTsiLCJleHBvcnQgZnVuY3Rpb24gZmlsdGVyV2VhdGhlckRhdGEod2VhdGhlckRhdGEpIHtcbiAgaWYgKHdlYXRoZXJEYXRhLmVycm9yKSB7XG4gICAgdGhyb3cgd2VhdGhlckRhdGEuZXJyb3IubWVzc2FnZTtcbiAgfVxuICBjb25zdCBsb2NhdGlvbiA9IGZpbHRlckxvY2F0aW9uKHdlYXRoZXJEYXRhLmxvY2F0aW9uKTtcbiAgY29uc3QgY3VycmVudCA9IGZpbHRlckN1cnJlbnQod2VhdGhlckRhdGEuY3VycmVudCk7XG4gIGNvbnN0IGFyZWFVc2VzRmFocmVuaGVpdCA9IGRvZXNBcmVhVXNlRmFocmVuaGVpdChcbiAgICB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5jb3VudHJ5XG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBsb2NhdGlvbixcbiAgICBjdXJyZW50LFxuICAgIGFyZWFVc2VzRmFocmVuaGVpdCxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyTG9jYXRpb24obG9jYXRpb24pIHtcbiAgY29uc3QgY2l0eSA9IGxvY2F0aW9uLm5hbWU7XG4gIGlmIChsb2NhdGlvbi5jb3VudHJ5LmluY2x1ZGVzKFwiVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhXCIpKSB7XG4gICAgY29uc3Qgc3RhdGVPckNvdW50cnkgPSBsb2NhdGlvbi5yZWdpb247XG4gICAgcmV0dXJuIHsgY2l0eSwgc3RhdGVPckNvdW50cnkgfTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzdGF0ZU9yQ291bnRyeSA9IGxvY2F0aW9uLmNvdW50cnk7XG4gICAgcmV0dXJuIHsgY2l0eSwgc3RhdGVPckNvdW50cnkgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaWx0ZXJDdXJyZW50KGN1cnJlbnQpIHtcbiAgY29uc3QgY29uZGl0aW9uID0gZmlsdGVyQ29uZGl0aW9uKGN1cnJlbnQuY29uZGl0aW9uKTtcbiAgY29uc3QgdGVtcF9jID0gY3VycmVudC50ZW1wX2M7XG4gIGNvbnN0IHRlbXBfZiA9IGN1cnJlbnQudGVtcF9mO1xuICBjb25zdCBpc19kYXkgPSBjdXJyZW50LmlzX2RheTtcbiAgY29uc3QgaHVtaWRpdHkgPSBjdXJyZW50Lmh1bWlkaXR5O1xuICBjb25zdCBmZWVsc2xpa2VfYyA9IGN1cnJlbnQuZmVlbHNsaWtlX2M7XG4gIGNvbnN0IGZlZWxzbGlrZV9mID0gY3VycmVudC5mZWVsc2xpa2VfZjtcblxuICByZXR1cm4ge1xuICAgIGNvbmRpdGlvbixcbiAgICB0ZW1wX2MsXG4gICAgdGVtcF9mLFxuICAgIGlzX2RheSxcbiAgICBodW1pZGl0eSxcbiAgICBmZWVsc2xpa2VfYyxcbiAgICBmZWVsc2xpa2VfZixcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyQ29uZGl0aW9uKGNvbmRpdGlvbikge1xuICBjb25zdCB0ZXh0ID0gY29uZGl0aW9uLnRleHQ7XG4gIGNvbnN0IGljb24gPSBcImh0dHBzOlwiICsgY29uZGl0aW9uLmljb247XG4gIHJldHVybiB7IHRleHQsIGljb24gfTtcbn1cblxuZnVuY3Rpb24gZG9lc0FyZWFVc2VGYWhyZW5oZWl0KGFyZWEpIHtcbiAgY29uc3QgYXJlYXNUaGF0VXNlRmFocmVuaGVpdCA9IFtcbiAgICBcIlBhbGF1XCIsXG4gICAgXCJCZXJtdWRhXCIsXG4gICAgXCJCZWxpemVcIixcbiAgICBcIlR1cmtzIGFuZCBDYWljb3MgSXNsYW5kc1wiLFxuICAgIFwiTGliZXJpYVwiLFxuICAgIFwiQmFoYW1hc1wiLFxuICAgIFwiU2FpbnQgS2l0dHMgYW5kIE5ldmlzXCIsXG4gICAgXCJNb250c2VycmF0XCIsXG4gICAgXCJDYXltYW4gSXNsYW5kc1wiLFxuICAgIFwiQW50aWd1YSBhbmQgQmFyYnVkYVwiLFxuICAgIFwiVmlyZ2luIElzbGFuZHNcIixcbiAgICBcIk1pY3JvbmVzaWFcIixcbiAgICBcIlVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYVwiLFxuICAgIFwiTWFyc2hhbGwgSXNsYW5kc1wiLFxuICBdO1xuXG4gIHJldHVybiBhcmVhc1RoYXRVc2VGYWhyZW5oZWl0LmluY2x1ZGVzKGFyZWEpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldEZvcm1WYWx1ZShldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldFtcImxvY2F0aW9uXCJdLnZhbHVlO1xuICBpZiAodmFsdWUgPT09IFwiXCIpIHtcbiAgICB0aHJvdyBcIlBsZWFzZSBlbnRlciB5b3VyIGNpdHkgYW5kIHN0YXRlL2NvdW50cnkuXCI7XG4gIH1cblxuICByZXR1cm4gdmFsdWUudHJpbSgpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclBhZ2VCYXNlZE9uRGF0YShkYXRhKSB7XG4gIGNvbnN0IGRpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXktY29udGFpbmVyXCIpO1xuICBjbGVhckRpc3BsYXkoZGlzcGxheUNvbnRhaW5lcik7XG5cbiAgY29uc3QgeyBsb2NhdGlvbiwgY3VycmVudCB9ID0gZGF0YTtcbiAgY29uc3QgbG9jYXRpb25EaXNwbGF5ID0gcmVuZGVyTG9jYXRpb25OYW1lKGxvY2F0aW9uKTtcbiAgY29uc3QgY3VycmVudFdlYXRoZXJEaXNwbGF5ID0gcmVuZGVyQ3VycmVudFdlYXRoZXIoY3VycmVudCk7XG5cbiAgZGlzcGxheUNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbkRpc3BsYXkpO1xuICBkaXNwbGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRXZWF0aGVyRGlzcGxheSk7XG5cbiAgY2hhbmdlU3R5bGVUb0RheU9yTmlnaHQoY3VycmVudCwgZGlzcGxheUNvbnRhaW5lcik7XG4gIHNldFRlbXBVbml0RGVmYXVsdEJhc2VkT25BcmVhKGRhdGEpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJMb2NhdGlvbk5hbWUobG9jYXRpb24pIHtcbiAgY29uc3QgeyBjaXR5LCBzdGF0ZU9yQ291bnRyeSB9ID0gbG9jYXRpb247XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LWNvbnRhaW5lcl9fbG9jYXRpb25cIik7XG4gIHNwYW4udGV4dENvbnRlbnQgPSBgJHtjaXR5fSwgJHtzdGF0ZU9yQ291bnRyeX1gO1xuICByZXR1cm4gc3Bhbjtcbn1cblxuZnVuY3Rpb24gY2xlYXJEaXNwbGF5KGRpc3BsYXkpIHtcbiAgZGlzcGxheS50ZXh0Q29udGVudCA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckN1cnJlbnRXZWF0aGVyKGN1cnJlbnQpIHtcbiAgY29uc3QgY3VycmVudFdlYXRoZXJEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICBjb25zdCBjb25kaXRpb25EaXNwbGF5ID0gcmVuZGVyQ29uZGl0aW9uKGN1cnJlbnQuY29uZGl0aW9uKTtcbiAgY29uc3QgdGVtcGVyYXR1cmVEaXNwbGF5ID0gcmVuZGVyVGVtcGVyYXR1cmVzKGN1cnJlbnQpO1xuICBjb25zdCBodW1pZGl0eURpc3BsYXkgPSByZW5kZXJIdW1pZGl0eShjdXJyZW50Lmh1bWlkaXR5KTtcblxuICBjdXJyZW50V2VhdGhlckRpc3BsYXkuYXBwZW5kQ2hpbGQoY29uZGl0aW9uRGlzcGxheSk7XG4gIGN1cnJlbnRXZWF0aGVyRGlzcGxheS5hcHBlbmRDaGlsZCh0ZW1wZXJhdHVyZURpc3BsYXkpO1xuICBjdXJyZW50V2VhdGhlckRpc3BsYXkuYXBwZW5kQ2hpbGQoaHVtaWRpdHlEaXNwbGF5KTtcblxuICByZXR1cm4gY3VycmVudFdlYXRoZXJEaXNwbGF5O1xuXG4gIGZ1bmN0aW9uIHJlbmRlckNvbmRpdGlvbihjb25kaXRpb24pIHtcbiAgICBjb25zdCBjb25kaXRpb25GcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uZGl0aW9uRnJhZ21lbnQuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktY29udGFpbmVyX19jb25kaXRpb25cIik7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaWNvbi5zcmMgPSBjb25kaXRpb24uaWNvbjtcbiAgICBpY29uLmFsdCA9IGAke2NvbmRpdGlvbi50ZXh0fSBpY29uYDtcbiAgICBjb25zdCBjb25kaXRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25kaXRpb25UZXh0LnRleHRDb250ZW50ID0gY29uZGl0aW9uLnRleHQ7XG4gICAgY29uZGl0aW9uRnJhZ21lbnQuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgY29uZGl0aW9uRnJhZ21lbnQuYXBwZW5kQ2hpbGQoY29uZGl0aW9uVGV4dCk7XG4gICAgcmV0dXJuIGNvbmRpdGlvbkZyYWdtZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyVGVtcGVyYXR1cmVzKGN1cnJlbnQpIHtcbiAgICBjb25zdCB0ZW1wZXJhdHVyZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRlbXBlcmF0dXJlU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwidGVtcGVyYXR1cmVcIik7XG5cbiAgICBjb25zdCBjdXJyZW50VGVtcCA9IHJlbmRlclRlbXBlcmF0dXJlRWxlbWVudChcbiAgICAgIFwiQ3VycmVudDpcIixcbiAgICAgIGN1cnJlbnQudGVtcF9jLFxuICAgICAgY3VycmVudC50ZW1wX2ZcbiAgICApO1xuICAgIHRlbXBlcmF0dXJlU2VjdGlvbi5hcHBlbmRDaGlsZChjdXJyZW50VGVtcCk7XG5cbiAgICBjb25zdCBmZWVsc0xpa2VUZW1wID0gcmVuZGVyVGVtcGVyYXR1cmVFbGVtZW50KFxuICAgICAgXCJGZWVscyBMaWtlOlwiLFxuICAgICAgY3VycmVudC5mZWVsc2xpa2VfYyxcbiAgICAgIGN1cnJlbnQuZmVlbHNsaWtlX2ZcbiAgICApO1xuICAgIHRlbXBlcmF0dXJlU2VjdGlvbi5hcHBlbmRDaGlsZChmZWVsc0xpa2VUZW1wKTtcbiAgICByZXR1cm4gdGVtcGVyYXR1cmVTZWN0aW9uO1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyVGVtcGVyYXR1cmVFbGVtZW50KFxuICAgICAgdGVtcGVyYXR1cmVMYWJlbFRleHQsXG4gICAgICAuLi50ZW1wZXJhdHVyZURhdGFcbiAgICApIHtcbiAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wZXJhdHVyZV9fbGFiZWxcIik7XG4gICAgICBsYWJlbC50ZXh0Q29udGVudCA9IHRlbXBlcmF0dXJlTGFiZWxUZXh0O1xuXG4gICAgICBjb25zdCB0ZW1wSW5DID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICB0ZW1wSW5DLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wZXJhdHVyZV9fY1wiLCBcInRlbXBlcmF0dXJlX19kYXRhXCIpO1xuICAgICAgdGVtcEluQy50ZXh0Q29udGVudCA9IGAgJHt0ZW1wZXJhdHVyZURhdGFbMF19IENgO1xuICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQodGVtcEluQyk7XG5cbiAgICAgIGNvbnN0IHRlbXBJbkYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHRlbXBJbkYuY2xhc3NMaXN0LmFkZChcInRlbXBlcmF0dXJlX19mXCIsIFwidGVtcGVyYXR1cmVfX2RhdGFcIik7XG4gICAgICB0ZW1wSW5GLnRleHRDb250ZW50ID0gYCAke3RlbXBlcmF0dXJlRGF0YVsxXX0gRmA7XG4gICAgICBsYWJlbC5hcHBlbmRDaGlsZCh0ZW1wSW5GKTtcblxuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckh1bWlkaXR5KGh1bWlkaXR5RGF0YSkge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwidGVtcGVyYXR1cmVfX2xhYmVsXCIpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJIdW1pZGl0eTpcIjtcblxuICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgaHVtaWRpdHkuY2xhc3NMaXN0LmFkZChcInRlbXBlcmF0dXJlX19kYXRhXCIpO1xuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCAke2h1bWlkaXR5RGF0YX0lYDtcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChodW1pZGl0eSk7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlU3R5bGVUb0RheU9yTmlnaHQoY3VycmVudCkge1xuICBjb25zdCBkaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5LWNvbnRhaW5lclwiKTtcbiAgY29uc3QgaXNEYXkgPSBjdXJyZW50LmlzX2RheTtcbiAgaWYgKGlzRGF5KSB7XG4gICAgZGlzcGxheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGF5XCIpO1xuICAgIGRpc3BsYXlDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcIm5pZ2h0XCIpO1xuICB9IGVsc2Uge1xuICAgIGRpc3BsYXlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5pZ2h0XCIpO1xuICAgIGRpc3BsYXlDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImRheVwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRUZW1wVW5pdERlZmF1bHRCYXNlZE9uQXJlYShkYXRhKSB7XG4gIGlmIChkYXRhLmFyZWFVc2VzRmFocmVuaGVpdCkge1xuICAgIGhpZGVDZWxzaXVzVGVtcHMoKTtcbiAgICBzZXRUb2dnbGVUb0YoKTtcbiAgfSBlbHNlIHtcbiAgICBoaWRlRmFocmVuaGVpdFRlbXBzKCk7XG4gICAgc2V0VG9nZ2xlVG9DKCk7XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlQ2Vsc2l1c1RlbXBzKCkge1xuICAgIGhpZGVUZW1wcyhcImNcIik7XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlRmFocmVuaGVpdFRlbXBzKCkge1xuICAgIGhpZGVUZW1wcyhcImZcIik7XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlVGVtcHModW5pdCkge1xuICAgIGNvbnN0IHRlbXBzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC50ZW1wZXJhdHVyZV9fJHt1bml0fWApXTtcbiAgICB0ZW1wcy5mb3JFYWNoKCh0ZW1wKSA9PiB0ZW1wLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wZXJhdHVyZS0taGlkZGVuXCIpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFRvZ2dsZVRvQygpIHtcbiAgICBjb25zdCBjVW5pdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5pdC10b2dnbGVfX0MnKVxuICAgIGNVbml0LmNsYXNzTGlzdC5hZGQoJ3VuaXQtdG9nZ2xlLS1hY3RpdmUnKVxuICAgIGNvbnN0IGZVbml0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bml0LXRvZ2dsZV9fRicpXG4gICAgZlVuaXQuY2xhc3NMaXN0LnJlbW92ZSgndW5pdC10b2dnbGUtLWFjdGl2ZScpXG4gIH1cblxuICBmdW5jdGlvbiBzZXRUb2dnbGVUb0YoKSB7XG4gICAgY29uc3QgY1VuaXQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuaXQtdG9nZ2xlX19DJylcbiAgICBjVW5pdC5jbGFzc0xpc3QucmVtb3ZlKCd1bml0LXRvZ2dsZS0tYWN0aXZlJylcbiAgICBjb25zdCBmVW5pdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5pdC10b2dnbGVfX0YnKVxuICAgIGZVbml0LmNsYXNzTGlzdC5hZGQoJ3VuaXQtdG9nZ2xlLS1hY3RpdmUnKVxuICB9XG59XG4iLCJjb25zdCBzdGF0dXNNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGF0dXMtbWVzc2FnZVwiKTtcblxuZnVuY3Rpb24gZGlzcGxheVN0YXR1cyhtZXNzYWdlKSB7XG4gIHN0YXR1c01lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZShcInN0YXR1cy1tZXNzYWdlLS1lcnJvclwiKTtcbiAgc3RhdHVzTWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwic3RhdHVzLW1lc3NhZ2UtLXZpc2libGVcIik7XG4gIHN0YXR1c01lc3NhZ2UudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5RXJyb3IoZXJyb3IpIHtcbiAgc3RhdHVzTWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwic3RhdHVzLW1lc3NhZ2UtLWVycm9yXCIpO1xuICBzdGF0dXNNZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJzdGF0dXMtbWVzc2FnZS0tdmlzaWJsZVwiKTtcbiAgc3RhdHVzTWVzc2FnZS50ZXh0Q29udGVudCA9IGVycm9yO1xufVxuXG5mdW5jdGlvbiBjbGVhck1lc3NhZ2VzKCkge1xuICBzdGF0dXNNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGF0dXMtbWVzc2FnZS0tZXJyb3JcIik7XG4gIHN0YXR1c01lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZShcInN0YXR1cy1tZXNzYWdlLS12aXNpYmxlXCIpO1xuICBzdGF0dXNNZXNzYWdlLnRleHRDb250ZW50ID0gXCJcIjtcbn1cblxuZXhwb3J0IHsgZGlzcGxheVN0YXR1cywgZGlzcGxheUVycm9yLCBjbGVhck1lc3NhZ2VzIH07XG4iLCJleHBvcnQgZnVuY3Rpb24gaGFuZGxlVW5pdFRvZ2dsZUNsaWNrKGV2ZW50KSB7XG4gIGlmIChpc0Rpc3BsYXlFbXB0eSgpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNoYW5nZUNsYXNzRm9yVG9nZ2xlQnV0dG9uKCk7XG4gIGNoYW5nZUNsYXNzRm9yVGVtcGVyYXR1cmVzKCk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUNsYXNzRm9yVG9nZ2xlQnV0dG9uKCkge1xuICAgIGNvbnN0IGNVbml0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bml0LXRvZ2dsZV9fQycpXG4gICAgY1VuaXQuY2xhc3NMaXN0LnRvZ2dsZSgndW5pdC10b2dnbGUtLWFjdGl2ZScpXG4gICAgY29uc3QgZlVuaXQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuaXQtdG9nZ2xlX19GJylcbiAgICBmVW5pdC5jbGFzc0xpc3QudG9nZ2xlKCd1bml0LXRvZ2dsZS0tYWN0aXZlJylcbn1cblxuZnVuY3Rpb24gY2hhbmdlQ2xhc3NGb3JUZW1wZXJhdHVyZXMoKSB7XG4gIGNvbnN0IHRlbXBzSW5DID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGVtcGVyYXR1cmVfX2NcIildO1xuICBjb25zdCB0ZW1wc0luRiA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRlbXBlcmF0dXJlX19mXCIpXTtcbiAgY29uc3QgYWxsVGVtcHMgPSB0ZW1wc0luQy5jb25jYXQodGVtcHNJbkYpO1xuICBhbGxUZW1wcy5mb3JFYWNoKCh0ZW1wKSA9PiB0ZW1wLmNsYXNzTGlzdC50b2dnbGUoXCJ0ZW1wZXJhdHVyZS0taGlkZGVuXCIpKTtcbn1cblxuZnVuY3Rpb24gaXNEaXNwbGF5RW1wdHkoKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXktY29udGFpbmVyXCIpLnRleHRDb250ZW50ID09PSBcIlwiO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCIvLyBUTy1ETyByZW1vdmUgdGVzdFxuLy8gaW1wb3J0IFwiLi90ZXN0cy90ZXN0LWRhdGEtZm9yLXN0eWxpbmdcIjtcbi8vIFRPLURPIHJlbW92ZSB0ZXN0XG5cbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IHtcbiAgY2xlYXJNZXNzYWdlcyxcbiAgZGlzcGxheUVycm9yLFxuICBkaXNwbGF5U3RhdHVzLFxufSBmcm9tIFwiLi9tb2R1bGVzL3N0YXR1cy1tZXNzYWdlc1wiO1xuaW1wb3J0IHsgZ2V0Q3VycmVudEZvcmVjYXN0RnJvbVdlYXRoZXJTZXJ2ZXIgfSBmcm9tIFwiLi9tb2R1bGVzL2FwaS1mZXRjaFwiO1xuaW1wb3J0IHsgZmlsdGVyV2VhdGhlckRhdGEgfSBmcm9tIFwiLi9tb2R1bGVzL2ZpbHRlci1kYXRhXCI7XG5pbXBvcnQgeyBnZXRGb3JtVmFsdWUgfSBmcm9tIFwiLi9tb2R1bGVzL2hhbmRsZS1pbnB1dFwiO1xuaW1wb3J0IHsgcmVuZGVyUGFnZUJhc2VkT25EYXRhIH0gZnJvbSBcIi4vbW9kdWxlcy9yZW5kZXItZGF0YVwiO1xuaW1wb3J0IHsgaGFuZGxlVW5pdFRvZ2dsZUNsaWNrIH0gZnJvbSBcIi4vbW9kdWxlcy91bml0LXRvZ2dsZVwiO1xuXG4vL2luaXQgYnV0dG9uIHRoYXQgdG9nZ2xlcyBiZXR3ZWVuIGZhaHJlbmhlaXQgYW5kIGNlbHNpdXNcbmNvbnN0IHVuaXRUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVuaXQtdG9nZ2xlXCIpO1xudW5pdFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlVW5pdFRvZ2dsZUNsaWNrKTtcblxuLy9pbml0IHNlYXJjaCBmb3JtIGZ1bmN0aW9uYWxpdHlcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVTdWJtaXQpO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB2YWx1ZSA9IGdldEZvcm1WYWx1ZShldmVudCk7XG4gICAgZGlzcGxheVN0YXR1cyhcIkdhdGhlcmluZyBXZWF0aGVyIEluZm9cIik7XG4gICAgY29uc3QgcmF3RGF0YSA9IGF3YWl0IGdldEN1cnJlbnRGb3JlY2FzdEZyb21XZWF0aGVyU2VydmVyKHZhbHVlKTtcbiAgICBkaXNwbGF5U3RhdHVzKFwiRGlzcGxheWluZyBXZWF0aGVyIEluZm9cIik7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBmaWx0ZXJXZWF0aGVyRGF0YShyYXdEYXRhKTtcbiAgICByZW5kZXJQYWdlQmFzZWRPbkRhdGEod2VhdGhlckRhdGEpO1xuICAgIGNsZWFyTWVzc2FnZXMoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgZGlzcGxheUVycm9yKGVycm9yKTtcbiAgfVxuICBmb3JtLnJlc2V0KCk7XG4gIGZvcm1bJ2xvY2F0aW9uJ10uYmx1cigpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9