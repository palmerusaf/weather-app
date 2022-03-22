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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"titleFont\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: \"dataFont\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #feb101;\n  width: 100vw;\n  height: 100vh;\n}\n\n.flex-col {\n  display: flex;\n  flex-direction: column;\n}\n\n.flex {\n  display: flex;\n}\n\n.title {\n  font-family: \"titleFont\";\n  text-align: center;\n}\n.title__word {\n  margin-left: -0.6em;\n  font-size: 0.5em;\n}\n\n.form {\n  justify-content: center;\n  margin: 0 0.77em;\n}\n.form__input-box {\n  width: 12.5em;\n  border-radius: 5px;\n  text-align: center;\n}\n.form__submit {\n  background-color: #feb101;\n  border-radius: 6px;\n  margin-top: 0.4em;\n  padding: 0 0.3em;\n  align-self: flex-start;\n}\n.form__submit:hover {\n  background-color: #feb101;\n}\n\n.search-bar {\n  background-color: whitesmoke;\n  padding: 0.3em;\n  width: 20em;\n  border: solid 1px black;\n  border-radius: 50px;\n}\n.search-bar__submit-button {\n  border: none;\n  background: none;\n}\n.search-bar__submit-button:focus, .search-bar__submit-button:hover {\n  outline: none;\n  transition: 300ms;\n  transform: scale(1.2);\n}\n.search-bar__input-box {\n  border: none;\n  background: none;\n}\n.search-bar__input-box:focus, .search-bar__input-box:hover {\n  outline: none;\n}\n\n.status-message {\n  transform: scale(0.75);\n  transition: 300ms;\n  height: 1em;\n  margin-top: 0.4em;\n  white-space: nowrap;\n  font-family: \"titleFont\";\n  text-align: center;\n}\n.status-message--error {\n  color: red;\n}\n.status-message--visible {\n  transform: scale(1);\n  transition: 300ms;\n}\n\n.unit-toggle {\n  display: flex;\n  align-items: center;\n  font-family: \"titleFont\";\n  font-size: 1.5em;\n  margin-left: 0.6em;\n  background: none;\n  border: none;\n  transition: 300ms;\n}\n.unit-toggle--active {\n  transform: scale(1.2);\n  font-weight: 600;\n  transition: 300ms;\n  color: red;\n}\n.unit-toggle:focus, .unit-toggle:hover {\n  transition: 300ms;\n  transform: scale(1.2);\n  outline: none;\n}\n\n@keyframes popIn {\n  from {\n    transform: scale(0.75);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.display-container {\n  padding: 1em;\n  width: 18em;\n  min-height: 14.5em;\n  border-radius: 1em;\n  margin-top: 1em;\n  align-self: center;\n  color: white;\n  font-family: \"dataFont\";\n}\n.display-container__location {\n  font-weight: 600;\n  text-align: center;\n}\n.display-container__condition {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 1em;\n}\n.display-container * {\n  animation-name: popIn;\n  animation-duration: 800ms;\n}\n\n.temperature__label {\n  margin-top: 0.2em;\n  font-weight: 600;\n  position: relative;\n}\n.temperature__data {\n  position: absolute;\n  margin-left: 0.5em;\n  font-weight: normal;\n  transition: 300ms;\n  -webkit-text-stroke: none;\n}\n.temperature--hidden {\n  transition: 300ms;\n  opacity: 0;\n  transform: scale(0);\n}\n\n.day {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-position: center;\n  background-size: cover;\n}\n\n.night {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-position: center;\n  background-size: cover;\n}\n\n@media screen and (min-height: 420px) {\n  .display-container {\n    margin: 2.5em 0;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;EACE,wBAAA;EACA,4CAAA;AACF;AAEA;EACE,uBAAA;EACA,4CAAA;AAAF;AAYA;EACE,UAAA;EACA,SAAA;EACA,sBAAA;AAVF;;AAaA;EACE,yBAVmB;EAWnB,YAAA;EACA,aAAA;AAVF;;AAaA;EACE,aAAA;EACA,sBAAA;AAVF;;AAaA;EACE,aAAA;AAVF;;AAaA;EACE,wBAAA;EACA,kBAAA;AAVF;AAWE;EACE,mBAAA;EACA,gBAAA;AATJ;;AAaA;EACE,uBAAA;EACA,gBAAA;AAVF;AAWE;EACE,aAAA;EACA,kBAAA;EACA,kBAAA;AATJ;AAWE;EACE,yBA3CW;EA4CX,kBAAA;EACA,iBAAA;EACA,gBAAA;EACA,sBAAA;AATJ;AAUI;EACE,yBAhDe;AAwCrB;;AAaA;EACE,4BAAA;EACA,cAAA;EACA,WAAA;EACA,uBAAA;EACA,mBAAA;AAVF;AAWE;EACE,YAAA;EACA,gBAAA;AATJ;AAUI;EAEE,aAAA;EACA,iBAAA;EACA,qBAAA;AATN;AAYE;EACE,YAAA;EACA,gBAAA;AAVJ;AAWI;EAEE,aAAA;AAVN;;AAeA;EACE,sBAAA;EACA,iBAhFuB;EAiFvB,WAAA;EACA,iBAAA;EACA,mBAAA;EACA,wBAAA;EACA,kBAAA;AAZF;AAaE;EACE,UAAA;AAXJ;AAaE;EACE,mBAAA;EACA,iBA3FqB;AAgFzB;;AAeA;EACE,aAAA;EACA,mBAAA;EACA,wBAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,iBAAA;AAZF;AAaE;EACE,qBAAA;EACA,gBAAA;EACA,iBAAA;EACA,UAAA;AAXJ;AAaE;EAEE,iBAAA;EACA,qBAAA;EACA,aAAA;AAZJ;;AAgBA;EACE;IACE,sBAAA;IACA,UAAA;EAbF;EAeA;IACE,mBAAA;IACA,UAAA;EAbF;AACF;AAgBA;EACE,YAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,uBAAA;AAdF;AAeE;EACE,gBAAA;EACA,kBAAA;AAbJ;AAeE;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;AAbJ;AAeE;EACE,qBAAA;EACA,yBAAA;AAbJ;;AAkBE;EACE,iBAAA;EACA,gBAAA;EACA,kBAAA;AAfJ;AAiBE;EACE,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,iBApKqB;EAqKrB,yBAAA;AAfJ;AAiBE;EACE,iBAxKqB;EAyKrB,UAAA;EACA,mBAAA;AAfJ;;AAmBA;EACE,mDAAA;EACA,2BAAA;EACA,sBAAA;AAhBF;;AAmBA;EACE,mDAAA;EACA,2BAAA;EACA,sBAAA;AAhBF;;AAmBA;EACE;IACE,eAAA;EAhBF;AACF","sourcesContent":["@font-face {\n  font-family: \"titleFont\";\n  src: url(\"./fonts/PermanentMarker-Regular.ttf\");\n}\n\n@font-face {\n  font-family: \"dataFont\";\n  src: url(\"./fonts/Ubuntu-Regular.ttf\");\n}\n\n$color-C: #0073db;\n$color-F: #fff100;\n$toggle-outline: rgb(26, 26, 26);\n$title-color: #feb101;\n$form-area-color: #feb101;\n$button-color: #feb101;\n$button-color-hover: #feb101;\n$display-msg-transition: 300ms;\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: $button-color-hover;\n  width: 100vw;\n  height: 100vh;\n}\n\n.flex-col {\n  display: flex;\n  flex-direction: column;\n}\n\n.flex {\n  display: flex;\n}\n\n.title {\n  font-family: \"titleFont\";\n  text-align: center;\n  &__word {\n    margin-left: -0.6em;\n    font-size: 0.5em;\n  }\n}\n\n.form {\n  justify-content: center;\n  margin: 0 .77em;\n  &__input-box {\n    width: 12.5em;\n    border-radius: 5px;\n    text-align: center;\n  }\n  &__submit {\n    background-color: $button-color;\n    border-radius: 6px;\n    margin-top: 0.4em;\n    padding: 0 0.3em;\n    align-self: flex-start;\n    &:hover {\n      background-color: $button-color-hover;\n    }\n  }\n}\n\n.search-bar {\n  background-color: whitesmoke;\n  padding: 0.3em;\n  width: 20em;\n  border: solid 1px black;\n  border-radius: 50px;\n  &__submit-button {\n    border: none;\n    background: none;\n    &:focus,\n    &:hover {\n      outline: none;\n      transition: 300ms;\n      transform: scale(1.2);\n    }\n  }\n  &__input-box {\n    border: none;\n    background: none;\n    &:focus,\n    &:hover {\n      outline: none;\n    }\n  }\n}\n\n.status-message {\n  transform: scale(0.75);\n  transition: $display-msg-transition;\n  height: 1em;\n  margin-top: 0.4em;\n  white-space: nowrap;\n  font-family: \"titleFont\";\n  text-align: center;\n  &--error {\n    color: red;\n  }\n  &--visible {\n    transform: scale(1);\n    transition: $display-msg-transition;\n  }\n}\n\n.unit-toggle {\n  display: flex;\n  align-items: center;\n  font-family: \"titleFont\";\n  font-size: 1.5em;\n  margin-left: 0.6em;\n  background: none;\n  border: none;\n  transition: 300ms;\n  &--active {\n    transform: scale(1.2);\n    font-weight: 600;\n    transition: 300ms;\n    color: red;\n  }\n  &:focus,\n  &:hover {\n    transition: 300ms;\n    transform: scale(1.2);\n    outline: none;\n  }\n}\n\n@keyframes popIn {\n  from {\n    transform: scale(0.75);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n.display-container {\n  padding: 1em;\n  width: 18em;\n  min-height: 14.5em;\n  border-radius: 1em;\n  margin-top: 1.0em;\n  align-self: center;\n  color: white;\n  font-family: \"dataFont\";\n  &__location {\n    font-weight: 600;\n    text-align: center;\n  }\n  &__condition {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 1em;\n  }\n  & * {\n    animation-name: popIn;\n    animation-duration: 800ms;\n  }\n}\n\n.temperature {\n  &__label {\n    margin-top: 0.2em;\n    font-weight: 600;\n    position: relative;\n  }\n  &__data {\n    position: absolute;\n    margin-left: 0.5em;\n    font-weight: normal;\n    transition: $display-msg-transition;\n    -webkit-text-stroke: none;\n  }\n  &--hidden {\n    transition: $display-msg-transition;\n    opacity: 0;\n    transform: scale(0);\n  }\n}\n\n.day {\n  background: url(\"./img/day.jpg\");\n  background-position: center;\n  background-size: cover;\n}\n\n.night {\n  background: url(\"./img/night.jpg\");\n  background-position: center;\n  background-size: cover;\n}\n\n@media screen and (min-height: 420px) {\n  .display-container {\n    margin: 2.5em 0;\n  }\n}\n"],"sourceRoot":""}]);
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
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1KQUFzRDtBQUNsRyw0Q0FBNEMsaUlBQTZDO0FBQ3pGLDRDQUE0Qyx1R0FBZ0M7QUFDNUUsNENBQTRDLDJHQUFrQztBQUM5RSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxzREFBc0QsK0JBQStCLHlEQUF5RCxHQUFHLGNBQWMsOEJBQThCLHlEQUF5RCxHQUFHLEtBQUssZUFBZSxjQUFjLDJCQUEyQixHQUFHLFVBQVUsOEJBQThCLGlCQUFpQixrQkFBa0IsR0FBRyxlQUFlLGtCQUFrQiwyQkFBMkIsR0FBRyxXQUFXLGtCQUFrQixHQUFHLFlBQVksK0JBQStCLHVCQUF1QixHQUFHLGdCQUFnQix3QkFBd0IscUJBQXFCLEdBQUcsV0FBVyw0QkFBNEIscUJBQXFCLEdBQUcsb0JBQW9CLGtCQUFrQix1QkFBdUIsdUJBQXVCLEdBQUcsaUJBQWlCLDhCQUE4Qix1QkFBdUIsc0JBQXNCLHFCQUFxQiwyQkFBMkIsR0FBRyx1QkFBdUIsOEJBQThCLEdBQUcsaUJBQWlCLGlDQUFpQyxtQkFBbUIsZ0JBQWdCLDRCQUE0Qix3QkFBd0IsR0FBRyw4QkFBOEIsaUJBQWlCLHFCQUFxQixHQUFHLHNFQUFzRSxrQkFBa0Isc0JBQXNCLDBCQUEwQixHQUFHLDBCQUEwQixpQkFBaUIscUJBQXFCLEdBQUcsOERBQThELGtCQUFrQixHQUFHLHFCQUFxQiwyQkFBMkIsc0JBQXNCLGdCQUFnQixzQkFBc0Isd0JBQXdCLCtCQUErQix1QkFBdUIsR0FBRywwQkFBMEIsZUFBZSxHQUFHLDRCQUE0Qix3QkFBd0Isc0JBQXNCLEdBQUcsa0JBQWtCLGtCQUFrQix3QkFBd0IsK0JBQStCLHFCQUFxQix1QkFBdUIscUJBQXFCLGlCQUFpQixzQkFBc0IsR0FBRyx3QkFBd0IsMEJBQTBCLHFCQUFxQixzQkFBc0IsZUFBZSxHQUFHLDBDQUEwQyxzQkFBc0IsMEJBQTBCLGtCQUFrQixHQUFHLHNCQUFzQixVQUFVLDZCQUE2QixpQkFBaUIsS0FBSyxRQUFRLDBCQUEwQixpQkFBaUIsS0FBSyxHQUFHLHNCQUFzQixpQkFBaUIsZ0JBQWdCLHVCQUF1Qix1QkFBdUIsb0JBQW9CLHVCQUF1QixpQkFBaUIsOEJBQThCLEdBQUcsZ0NBQWdDLHFCQUFxQix1QkFBdUIsR0FBRyxpQ0FBaUMsa0JBQWtCLDJCQUEyQix3QkFBd0IsdUJBQXVCLEdBQUcsd0JBQXdCLDBCQUEwQiw4QkFBOEIsR0FBRyx5QkFBeUIsc0JBQXNCLHFCQUFxQix1QkFBdUIsR0FBRyxzQkFBc0IsdUJBQXVCLHVCQUF1Qix3QkFBd0Isc0JBQXNCLDhCQUE4QixHQUFHLHdCQUF3QixzQkFBc0IsZUFBZSx3QkFBd0IsR0FBRyxVQUFVLGdFQUFnRSxnQ0FBZ0MsMkJBQTJCLEdBQUcsWUFBWSxnRUFBZ0UsZ0NBQWdDLDJCQUEyQixHQUFHLDJDQUEyQyx3QkFBd0Isc0JBQXNCLEtBQUssR0FBRyxPQUFPLGlGQUFpRixXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxZQUFZLFlBQVksV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFlBQVksUUFBUSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLGFBQWEsWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLGFBQWEsUUFBUSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLGFBQWEsYUFBYSxLQUFLLE1BQU0sYUFBYSxZQUFZLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0scUNBQXFDLCtCQUErQixzREFBc0QsR0FBRyxnQkFBZ0IsOEJBQThCLDZDQUE2QyxHQUFHLHNCQUFzQixvQkFBb0IsbUNBQW1DLHdCQUF3Qiw0QkFBNEIseUJBQXlCLCtCQUErQixpQ0FBaUMsT0FBTyxlQUFlLGNBQWMsMkJBQTJCLEdBQUcsVUFBVSwwQ0FBMEMsaUJBQWlCLGtCQUFrQixHQUFHLGVBQWUsa0JBQWtCLDJCQUEyQixHQUFHLFdBQVcsa0JBQWtCLEdBQUcsWUFBWSwrQkFBK0IsdUJBQXVCLGFBQWEsMEJBQTBCLHVCQUF1QixLQUFLLEdBQUcsV0FBVyw0QkFBNEIsb0JBQW9CLGtCQUFrQixvQkFBb0IseUJBQXlCLHlCQUF5QixLQUFLLGVBQWUsc0NBQXNDLHlCQUF5Qix3QkFBd0IsdUJBQXVCLDZCQUE2QixlQUFlLDhDQUE4QyxPQUFPLEtBQUssR0FBRyxpQkFBaUIsaUNBQWlDLG1CQUFtQixnQkFBZ0IsNEJBQTRCLHdCQUF3QixzQkFBc0IsbUJBQW1CLHVCQUF1Qiw2QkFBNkIsc0JBQXNCLDBCQUEwQiw4QkFBOEIsT0FBTyxLQUFLLGtCQUFrQixtQkFBbUIsdUJBQXVCLDZCQUE2QixzQkFBc0IsT0FBTyxLQUFLLEdBQUcscUJBQXFCLDJCQUEyQix3Q0FBd0MsZ0JBQWdCLHNCQUFzQix3QkFBd0IsK0JBQStCLHVCQUF1QixjQUFjLGlCQUFpQixLQUFLLGdCQUFnQiwwQkFBMEIsMENBQTBDLEtBQUssR0FBRyxrQkFBa0Isa0JBQWtCLHdCQUF3QiwrQkFBK0IscUJBQXFCLHVCQUF1QixxQkFBcUIsaUJBQWlCLHNCQUFzQixlQUFlLDRCQUE0Qix1QkFBdUIsd0JBQXdCLGlCQUFpQixLQUFLLHlCQUF5Qix3QkFBd0IsNEJBQTRCLG9CQUFvQixLQUFLLEdBQUcsc0JBQXNCLFVBQVUsNkJBQTZCLGlCQUFpQixLQUFLLFFBQVEsMEJBQTBCLGlCQUFpQixLQUFLLEdBQUcsd0JBQXdCLGlCQUFpQixnQkFBZ0IsdUJBQXVCLHVCQUF1QixzQkFBc0IsdUJBQXVCLGlCQUFpQiw4QkFBOEIsaUJBQWlCLHVCQUF1Qix5QkFBeUIsS0FBSyxrQkFBa0Isb0JBQW9CLDZCQUE2QiwwQkFBMEIseUJBQXlCLEtBQUssU0FBUyw0QkFBNEIsZ0NBQWdDLEtBQUssR0FBRyxrQkFBa0IsY0FBYyx3QkFBd0IsdUJBQXVCLHlCQUF5QixLQUFLLGFBQWEseUJBQXlCLHlCQUF5QiwwQkFBMEIsMENBQTBDLGdDQUFnQyxLQUFLLGVBQWUsMENBQTBDLGlCQUFpQiwwQkFBMEIsS0FBSyxHQUFHLFVBQVUsdUNBQXVDLGdDQUFnQywyQkFBMkIsR0FBRyxZQUFZLHlDQUF5QyxnQ0FBZ0MsMkJBQTJCLEdBQUcsMkNBQTJDLHdCQUF3QixzQkFBc0IsS0FBSyxHQUFHLHFCQUFxQjtBQUNucVI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNoQjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzVCYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQTRJO0FBQzVJO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsNEhBQU87Ozs7QUFJc0Y7QUFDOUcsT0FBTyxpRUFBZSw0SEFBTyxJQUFJLG1JQUFjLEdBQUcsbUlBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxRQUFRLEtBQUssY0FBYztBQUNsRjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNkM7Ozs7Ozs7Ozs7Ozs7OztBQ2hCdEM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixJQUFJO0FBQ0o7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDUk87QUFDUDtBQUNBOztBQUVBLFVBQVUsb0JBQW9CO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLHVCQUF1QjtBQUNqQztBQUNBO0FBQ0Esd0JBQXdCLEtBQUssSUFBSSxlQUFlO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0Msb0JBQW9CO0FBQ3BEOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0Msb0JBQW9CO0FBQ3BEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLGFBQWE7QUFDNUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlFQUFpRSxLQUFLO0FBQ3RFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFKQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFc0Q7Ozs7Ozs7Ozs7Ozs7OztBQ3BCL0M7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBOztBQUVzQjtBQUthO0FBQ3VDO0FBQ2hCO0FBQ0o7QUFDUTtBQUNBOztBQUU5RDtBQUNBO0FBQ0EscUNBQXFDLHVFQUFxQjs7QUFFMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsbUVBQVk7QUFDOUIsSUFBSSx1RUFBYTtBQUNqQiwwQkFBMEIsdUZBQW1DO0FBQzdELElBQUksdUVBQWE7QUFDakIsd0JBQXdCLHVFQUFpQjtBQUN6QyxJQUFJLDJFQUFxQjtBQUN6QixJQUFJLHVFQUFhO0FBQ2pCLElBQUk7QUFDSjtBQUNBLElBQUksc0VBQVk7QUFDaEI7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9hcGktZmV0Y2guanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9maWx0ZXItZGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2hhbmRsZS1pbnB1dC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3JlbmRlci1kYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvc3RhdHVzLW1lc3NhZ2VzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvdW5pdC10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1Blcm1hbmVudE1hcmtlci1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvVWJ1bnR1LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWcvZGF5LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vaW1nL25pZ2h0LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJ0aXRsZUZvbnRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiZGF0YUZvbnRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWIxMDE7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uZmxleC1jb2wge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50aXRsZSB7XFxuICBmb250LWZhbWlseTogXFxcInRpdGxlRm9udFxcXCI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi50aXRsZV9fd29yZCB7XFxuICBtYXJnaW4tbGVmdDogLTAuNmVtO1xcbiAgZm9udC1zaXplOiAwLjVlbTtcXG59XFxuXFxuLmZvcm0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDAgMC43N2VtO1xcbn1cXG4uZm9ybV9faW5wdXQtYm94IHtcXG4gIHdpZHRoOiAxMi41ZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5mb3JtX19zdWJtaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlYjEwMTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIG1hcmdpbi10b3A6IDAuNGVtO1xcbiAgcGFkZGluZzogMCAwLjNlbTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcbi5mb3JtX19zdWJtaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlYjEwMTtcXG59XFxuXFxuLnNlYXJjaC1iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gIHBhZGRpbmc6IDAuM2VtO1xcbiAgd2lkdGg6IDIwZW07XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxufVxcbi5zZWFyY2gtYmFyX19zdWJtaXQtYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcbi5zZWFyY2gtYmFyX19zdWJtaXQtYnV0dG9uOmZvY3VzLCAuc2VhcmNoLWJhcl9fc3VibWl0LWJ1dHRvbjpob3ZlciB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgdHJhbnNpdGlvbjogMzAwbXM7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcbi5zZWFyY2gtYmFyX19pbnB1dC1ib3gge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuLnNlYXJjaC1iYXJfX2lucHV0LWJveDpmb2N1cywgLnNlYXJjaC1iYXJfX2lucHV0LWJveDpob3ZlciB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uc3RhdHVzLW1lc3NhZ2Uge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcXG4gIHRyYW5zaXRpb246IDMwMG1zO1xcbiAgaGVpZ2h0OiAxZW07XFxuICBtYXJnaW4tdG9wOiAwLjRlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBmb250LWZhbWlseTogXFxcInRpdGxlRm9udFxcXCI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5zdGF0dXMtbWVzc2FnZS0tZXJyb3Ige1xcbiAgY29sb3I6IHJlZDtcXG59XFxuLnN0YXR1cy1tZXNzYWdlLS12aXNpYmxlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB0cmFuc2l0aW9uOiAzMDBtcztcXG59XFxuXFxuLnVuaXQtdG9nZ2xlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJ0aXRsZUZvbnRcXFwiO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIG1hcmdpbi1sZWZ0OiAwLjZlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiAzMDBtcztcXG59XFxuLnVuaXQtdG9nZ2xlLS1hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHRyYW5zaXRpb246IDMwMG1zO1xcbiAgY29sb3I6IHJlZDtcXG59XFxuLnVuaXQtdG9nZ2xlOmZvY3VzLCAudW5pdC10b2dnbGU6aG92ZXIge1xcbiAgdHJhbnNpdGlvbjogMzAwbXM7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHBvcEluIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG4uZGlzcGxheS1jb250YWluZXIge1xcbiAgcGFkZGluZzogMWVtO1xcbiAgd2lkdGg6IDE4ZW07XFxuICBtaW4taGVpZ2h0OiAxNC41ZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBtYXJnaW4tdG9wOiAxZW07XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogXFxcImRhdGFGb250XFxcIjtcXG59XFxuLmRpc3BsYXktY29udGFpbmVyX19sb2NhdGlvbiB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZGlzcGxheS1jb250YWluZXJfX2NvbmRpdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcbi5kaXNwbGF5LWNvbnRhaW5lciAqIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBwb3BJbjtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogODAwbXM7XFxufVxcblxcbi50ZW1wZXJhdHVyZV9fbGFiZWwge1xcbiAgbWFyZ2luLXRvcDogMC4yZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGVtcGVyYXR1cmVfX2RhdGEge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHRyYW5zaXRpb246IDMwMG1zO1xcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogbm9uZTtcXG59XFxuLnRlbXBlcmF0dXJlLS1oaWRkZW4ge1xcbiAgdHJhbnNpdGlvbjogMzAwbXM7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxuXFxuLmRheSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLm5pZ2h0IHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogNDIwcHgpIHtcXG4gIC5kaXNwbGF5LWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMi41ZW0gMDtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBQTtFQUNBLDRDQUFBO0FBQ0Y7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsNENBQUE7QUFBRjtBQVlBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQVZGOztBQWFBO0VBQ0UseUJBVm1CO0VBV25CLFlBQUE7RUFDQSxhQUFBO0FBVkY7O0FBYUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFWRjs7QUFhQTtFQUNFLGFBQUE7QUFWRjs7QUFhQTtFQUNFLHdCQUFBO0VBQ0Esa0JBQUE7QUFWRjtBQVdFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQVRKOztBQWFBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtBQVZGO0FBV0U7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVRKO0FBV0U7RUFDRSx5QkEzQ1c7RUE0Q1gsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFUSjtBQVVJO0VBQ0UseUJBaERlO0FBd0NyQjs7QUFhQTtFQUNFLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBVkY7QUFXRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQVRKO0FBVUk7RUFFRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQVROO0FBWUU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFWSjtBQVdJO0VBRUUsYUFBQTtBQVZOOztBQWVBO0VBQ0Usc0JBQUE7RUFDQSxpQkFoRnVCO0VBaUZ2QixXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUFaRjtBQWFFO0VBQ0UsVUFBQTtBQVhKO0FBYUU7RUFDRSxtQkFBQTtFQUNBLGlCQTNGcUI7QUFnRnpCOztBQWVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFaRjtBQWFFO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQVhKO0FBYUU7RUFFRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQVpKOztBQWdCQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSxVQUFBO0VBYkY7RUFlQTtJQUNFLG1CQUFBO0lBQ0EsVUFBQTtFQWJGO0FBQ0Y7QUFnQkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFkRjtBQWVFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQWJKO0FBZUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBYko7QUFlRTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7QUFiSjs7QUFrQkU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFmSjtBQWlCRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQXBLcUI7RUFxS3JCLHlCQUFBO0FBZko7QUFpQkU7RUFDRSxpQkF4S3FCO0VBeUtyQixVQUFBO0VBQ0EsbUJBQUE7QUFmSjs7QUFtQkE7RUFDRSxtREFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7QUFoQkY7O0FBbUJBO0VBQ0UsbURBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FBaEJGOztBQW1CQTtFQUNFO0lBQ0UsZUFBQTtFQWhCRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJ0aXRsZUZvbnRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvUGVybWFuZW50TWFya2VyLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJkYXRhRm9udFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9mb250cy9VYnVudHUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuXFxuJGNvbG9yLUM6ICMwMDczZGI7XFxuJGNvbG9yLUY6ICNmZmYxMDA7XFxuJHRvZ2dsZS1vdXRsaW5lOiByZ2IoMjYsIDI2LCAyNik7XFxuJHRpdGxlLWNvbG9yOiAjZmViMTAxO1xcbiRmb3JtLWFyZWEtY29sb3I6ICNmZWIxMDE7XFxuJGJ1dHRvbi1jb2xvcjogI2ZlYjEwMTtcXG4kYnV0dG9uLWNvbG9yLWhvdmVyOiAjZmViMTAxO1xcbiRkaXNwbGF5LW1zZy10cmFuc2l0aW9uOiAzMDBtcztcXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRidXR0b24tY29sb3ItaG92ZXI7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uZmxleC1jb2wge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50aXRsZSB7XFxuICBmb250LWZhbWlseTogXFxcInRpdGxlRm9udFxcXCI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAmX193b3JkIHtcXG4gICAgbWFyZ2luLWxlZnQ6IC0wLjZlbTtcXG4gICAgZm9udC1zaXplOiAwLjVlbTtcXG4gIH1cXG59XFxuXFxuLmZvcm0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDAgLjc3ZW07XFxuICAmX19pbnB1dC1ib3gge1xcbiAgICB3aWR0aDogMTIuNWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG4gICZfX3N1Ym1pdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRidXR0b24tY29sb3I7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgbWFyZ2luLXRvcDogMC40ZW07XFxuICAgIHBhZGRpbmc6IDAgMC4zZW07XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgICY6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRidXR0b24tY29sb3ItaG92ZXI7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnNlYXJjaC1iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gIHBhZGRpbmc6IDAuM2VtO1xcbiAgd2lkdGg6IDIwZW07XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAmX19zdWJtaXQtYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICAmOmZvY3VzLFxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgIHRyYW5zaXRpb246IDMwMG1zO1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgfVxcbiAgfVxcbiAgJl9faW5wdXQtYm94IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICAmOmZvY3VzLFxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5zdGF0dXMtbWVzc2FnZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUpO1xcbiAgdHJhbnNpdGlvbjogJGRpc3BsYXktbXNnLXRyYW5zaXRpb247XFxuICBoZWlnaHQ6IDFlbTtcXG4gIG1hcmdpbi10b3A6IDAuNGVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwidGl0bGVGb250XFxcIjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICYtLWVycm9yIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gIH1cXG4gICYtLXZpc2libGUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2l0aW9uOiAkZGlzcGxheS1tc2ctdHJhbnNpdGlvbjtcXG4gIH1cXG59XFxuXFxuLnVuaXQtdG9nZ2xlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJ0aXRsZUZvbnRcXFwiO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIG1hcmdpbi1sZWZ0OiAwLjZlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiAzMDBtcztcXG4gICYtLWFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdHJhbnNpdGlvbjogMzAwbXM7XFxuICAgIGNvbG9yOiByZWQ7XFxuICB9XFxuICAmOmZvY3VzLFxcbiAgJjpob3ZlciB7XFxuICAgIHRyYW5zaXRpb246IDMwMG1zO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgcG9wSW4ge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43NSk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbi5kaXNwbGF5LWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAxZW07XFxuICB3aWR0aDogMThlbTtcXG4gIG1pbi1oZWlnaHQ6IDE0LjVlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIG1hcmdpbi10b3A6IDEuMGVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJkYXRhRm9udFxcXCI7XFxuICAmX19sb2NhdGlvbiB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG4gICZfX2NvbmRpdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gIH1cXG4gICYgKiB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBwb3BJbjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4MDBtcztcXG4gIH1cXG59XFxuXFxuLnRlbXBlcmF0dXJlIHtcXG4gICZfX2xhYmVsIHtcXG4gICAgbWFyZ2luLXRvcDogMC4yZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG4gICZfX2RhdGEge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgdHJhbnNpdGlvbjogJGRpc3BsYXktbXNnLXRyYW5zaXRpb247XFxuICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IG5vbmU7XFxuICB9XFxuICAmLS1oaWRkZW4ge1xcbiAgICB0cmFuc2l0aW9uOiAkZGlzcGxheS1tc2ctdHJhbnNpdGlvbjtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIH1cXG59XFxuXFxuLmRheSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vaW1nL2RheS5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5uaWdodCB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vaW1nL25pZ2h0LmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDQyMHB4KSB7XFxuICAuZGlzcGxheS1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDIuNWVtIDA7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgQVBJX0tFWSA9IFwiOWJjYjFjNjE5YTFkNGU1MmI1ZjEwNTgxODIyMTQwM1wiO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50Rm9yZWNhc3RGcm9tV2VhdGhlclNlcnZlcihxdWVyeUxvY2F0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9JHtBUElfS0VZfSZxPSR7cXVlcnlMb2NhdGlvbn0mZGF5cz03JmFxaT1ub2BcbiAgICApO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IubWVzc2FnZS5pbmNsdWRlcyhcIk5ldHdvcmtFcnJvclwiKSkge1xuICAgICAgdGhyb3cgXCJVbmFibGUgdG8gY29ubmVjdCB0byBzZXJ2ZXIuXCI7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7Z2V0Q3VycmVudEZvcmVjYXN0RnJvbVdlYXRoZXJTZXJ2ZXJ9O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcldlYXRoZXJEYXRhKHdlYXRoZXJEYXRhKSB7XG4gIGlmICh3ZWF0aGVyRGF0YS5lcnJvcikge1xuICAgIHRocm93IHdlYXRoZXJEYXRhLmVycm9yLm1lc3NhZ2U7XG4gIH1cbiAgY29uc3QgbG9jYXRpb24gPSBmaWx0ZXJMb2NhdGlvbih3ZWF0aGVyRGF0YS5sb2NhdGlvbik7XG4gIGNvbnN0IGN1cnJlbnQgPSBmaWx0ZXJDdXJyZW50KHdlYXRoZXJEYXRhLmN1cnJlbnQpO1xuICBjb25zdCBhcmVhVXNlc0ZhaHJlbmhlaXQgPSBkb2VzQXJlYVVzZUZhaHJlbmhlaXQoXG4gICAgd2VhdGhlckRhdGEubG9jYXRpb24uY291bnRyeVxuICApO1xuXG4gIHJldHVybiB7XG4gICAgbG9jYXRpb24sXG4gICAgY3VycmVudCxcbiAgICBhcmVhVXNlc0ZhaHJlbmhlaXQsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbHRlckxvY2F0aW9uKGxvY2F0aW9uKSB7XG4gIGNvbnN0IGNpdHkgPSBsb2NhdGlvbi5uYW1lO1xuICBpZiAobG9jYXRpb24uY291bnRyeS5pbmNsdWRlcyhcIlVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYVwiKSkge1xuICAgIGNvbnN0IHN0YXRlT3JDb3VudHJ5ID0gbG9jYXRpb24ucmVnaW9uO1xuICAgIHJldHVybiB7IGNpdHksIHN0YXRlT3JDb3VudHJ5IH07XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc3RhdGVPckNvdW50cnkgPSBsb2NhdGlvbi5jb3VudHJ5O1xuICAgIHJldHVybiB7IGNpdHksIHN0YXRlT3JDb3VudHJ5IH07XG4gIH1cbn1cblxuZnVuY3Rpb24gZmlsdGVyQ3VycmVudChjdXJyZW50KSB7XG4gIGNvbnN0IGNvbmRpdGlvbiA9IGZpbHRlckNvbmRpdGlvbihjdXJyZW50LmNvbmRpdGlvbik7XG4gIGNvbnN0IHRlbXBfYyA9IGN1cnJlbnQudGVtcF9jO1xuICBjb25zdCB0ZW1wX2YgPSBjdXJyZW50LnRlbXBfZjtcbiAgY29uc3QgaXNfZGF5ID0gY3VycmVudC5pc19kYXk7XG4gIGNvbnN0IGh1bWlkaXR5ID0gY3VycmVudC5odW1pZGl0eTtcbiAgY29uc3QgZmVlbHNsaWtlX2MgPSBjdXJyZW50LmZlZWxzbGlrZV9jO1xuICBjb25zdCBmZWVsc2xpa2VfZiA9IGN1cnJlbnQuZmVlbHNsaWtlX2Y7XG5cbiAgcmV0dXJuIHtcbiAgICBjb25kaXRpb24sXG4gICAgdGVtcF9jLFxuICAgIHRlbXBfZixcbiAgICBpc19kYXksXG4gICAgaHVtaWRpdHksXG4gICAgZmVlbHNsaWtlX2MsXG4gICAgZmVlbHNsaWtlX2YsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbHRlckNvbmRpdGlvbihjb25kaXRpb24pIHtcbiAgY29uc3QgdGV4dCA9IGNvbmRpdGlvbi50ZXh0O1xuICBjb25zdCBpY29uID0gXCJodHRwczpcIiArIGNvbmRpdGlvbi5pY29uO1xuICByZXR1cm4geyB0ZXh0LCBpY29uIH07XG59XG5cbmZ1bmN0aW9uIGRvZXNBcmVhVXNlRmFocmVuaGVpdChhcmVhKSB7XG4gIGNvbnN0IGFyZWFzVGhhdFVzZUZhaHJlbmhlaXQgPSBbXG4gICAgXCJQYWxhdVwiLFxuICAgIFwiQmVybXVkYVwiLFxuICAgIFwiQmVsaXplXCIsXG4gICAgXCJUdXJrcyBhbmQgQ2FpY29zIElzbGFuZHNcIixcbiAgICBcIkxpYmVyaWFcIixcbiAgICBcIkJhaGFtYXNcIixcbiAgICBcIlNhaW50IEtpdHRzIGFuZCBOZXZpc1wiLFxuICAgIFwiTW9udHNlcnJhdFwiLFxuICAgIFwiQ2F5bWFuIElzbGFuZHNcIixcbiAgICBcIkFudGlndWEgYW5kIEJhcmJ1ZGFcIixcbiAgICBcIlZpcmdpbiBJc2xhbmRzXCIsXG4gICAgXCJNaWNyb25lc2lhXCIsXG4gICAgXCJVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2FcIixcbiAgICBcIk1hcnNoYWxsIElzbGFuZHNcIixcbiAgXTtcblxuICByZXR1cm4gYXJlYXNUaGF0VXNlRmFocmVuaGVpdC5pbmNsdWRlcyhhcmVhKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRGb3JtVmFsdWUoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXRbXCJsb2NhdGlvblwiXS52YWx1ZTtcbiAgaWYgKHZhbHVlID09PSBcIlwiKSB7XG4gICAgdGhyb3cgXCJQbGVhc2UgZW50ZXIgeW91ciBjaXR5IGFuZCBzdGF0ZS9jb3VudHJ5LlwiO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlLnRyaW0oKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiByZW5kZXJQYWdlQmFzZWRPbkRhdGEoZGF0YSkge1xuICBjb25zdCBkaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5LWNvbnRhaW5lclwiKTtcbiAgY2xlYXJEaXNwbGF5KGRpc3BsYXlDb250YWluZXIpO1xuXG4gIGNvbnN0IHsgbG9jYXRpb24sIGN1cnJlbnQgfSA9IGRhdGE7XG4gIGNvbnN0IGxvY2F0aW9uRGlzcGxheSA9IHJlbmRlckxvY2F0aW9uTmFtZShsb2NhdGlvbik7XG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyRGlzcGxheSA9IHJlbmRlckN1cnJlbnRXZWF0aGVyKGN1cnJlbnQpO1xuXG4gIGRpc3BsYXlDb250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25EaXNwbGF5KTtcbiAgZGlzcGxheUNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlckRpc3BsYXkpO1xuXG4gIGNoYW5nZVN0eWxlVG9EYXlPck5pZ2h0KGN1cnJlbnQsIGRpc3BsYXlDb250YWluZXIpO1xuICBzZXRUZW1wVW5pdERlZmF1bHRCYXNlZE9uQXJlYShkYXRhKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTG9jYXRpb25OYW1lKGxvY2F0aW9uKSB7XG4gIGNvbnN0IHsgY2l0eSwgc3RhdGVPckNvdW50cnkgfSA9IGxvY2F0aW9uO1xuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheS1jb250YWluZXJfX2xvY2F0aW9uXCIpO1xuICBzcGFuLnRleHRDb250ZW50ID0gYCR7Y2l0eX0sICR7c3RhdGVPckNvdW50cnl9YDtcbiAgcmV0dXJuIHNwYW47XG59XG5cbmZ1bmN0aW9uIGNsZWFyRGlzcGxheShkaXNwbGF5KSB7XG4gIGRpc3BsYXkudGV4dENvbnRlbnQgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiByZW5kZXJDdXJyZW50V2VhdGhlcihjdXJyZW50KSB7XG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgY29uc3QgY29uZGl0aW9uRGlzcGxheSA9IHJlbmRlckNvbmRpdGlvbihjdXJyZW50LmNvbmRpdGlvbik7XG4gIGNvbnN0IHRlbXBlcmF0dXJlRGlzcGxheSA9IHJlbmRlclRlbXBlcmF0dXJlcyhjdXJyZW50KTtcbiAgY29uc3QgaHVtaWRpdHlEaXNwbGF5ID0gcmVuZGVySHVtaWRpdHkoY3VycmVudC5odW1pZGl0eSk7XG5cbiAgY3VycmVudFdlYXRoZXJEaXNwbGF5LmFwcGVuZENoaWxkKGNvbmRpdGlvbkRpc3BsYXkpO1xuICBjdXJyZW50V2VhdGhlckRpc3BsYXkuYXBwZW5kQ2hpbGQodGVtcGVyYXR1cmVEaXNwbGF5KTtcbiAgY3VycmVudFdlYXRoZXJEaXNwbGF5LmFwcGVuZENoaWxkKGh1bWlkaXR5RGlzcGxheSk7XG5cbiAgcmV0dXJuIGN1cnJlbnRXZWF0aGVyRGlzcGxheTtcblxuICBmdW5jdGlvbiByZW5kZXJDb25kaXRpb24oY29uZGl0aW9uKSB7XG4gICAgY29uc3QgY29uZGl0aW9uRnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbmRpdGlvbkZyYWdtZW50LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LWNvbnRhaW5lcl9fY29uZGl0aW9uXCIpO1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGljb24uc3JjID0gY29uZGl0aW9uLmljb247XG4gICAgaWNvbi5hbHQgPSBgJHtjb25kaXRpb24udGV4dH0gaWNvbmA7XG4gICAgY29uc3QgY29uZGl0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uZGl0aW9uVGV4dC50ZXh0Q29udGVudCA9IGNvbmRpdGlvbi50ZXh0O1xuICAgIGNvbmRpdGlvbkZyYWdtZW50LmFwcGVuZENoaWxkKGljb24pO1xuICAgIGNvbmRpdGlvbkZyYWdtZW50LmFwcGVuZENoaWxkKGNvbmRpdGlvblRleHQpO1xuICAgIHJldHVybiBjb25kaXRpb25GcmFnbWVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlclRlbXBlcmF0dXJlcyhjdXJyZW50KSB7XG4gICAgY29uc3QgdGVtcGVyYXR1cmVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0ZW1wZXJhdHVyZVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInRlbXBlcmF0dXJlXCIpO1xuXG4gICAgY29uc3QgY3VycmVudFRlbXAgPSByZW5kZXJUZW1wZXJhdHVyZUVsZW1lbnQoXG4gICAgICBcIkN1cnJlbnQ6XCIsXG4gICAgICBjdXJyZW50LnRlbXBfYyxcbiAgICAgIGN1cnJlbnQudGVtcF9mXG4gICAgKTtcbiAgICB0ZW1wZXJhdHVyZVNlY3Rpb24uYXBwZW5kQ2hpbGQoY3VycmVudFRlbXApO1xuXG4gICAgY29uc3QgZmVlbHNMaWtlVGVtcCA9IHJlbmRlclRlbXBlcmF0dXJlRWxlbWVudChcbiAgICAgIFwiRmVlbHMgTGlrZTpcIixcbiAgICAgIGN1cnJlbnQuZmVlbHNsaWtlX2MsXG4gICAgICBjdXJyZW50LmZlZWxzbGlrZV9mXG4gICAgKTtcbiAgICB0ZW1wZXJhdHVyZVNlY3Rpb24uYXBwZW5kQ2hpbGQoZmVlbHNMaWtlVGVtcCk7XG4gICAgcmV0dXJuIHRlbXBlcmF0dXJlU2VjdGlvbjtcblxuICAgIGZ1bmN0aW9uIHJlbmRlclRlbXBlcmF0dXJlRWxlbWVudChcbiAgICAgIHRlbXBlcmF0dXJlTGFiZWxUZXh0LFxuICAgICAgLi4udGVtcGVyYXR1cmVEYXRhXG4gICAgKSB7XG4gICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwidGVtcGVyYXR1cmVfX2xhYmVsXCIpO1xuICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSB0ZW1wZXJhdHVyZUxhYmVsVGV4dDtcblxuICAgICAgY29uc3QgdGVtcEluQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgdGVtcEluQy5jbGFzc0xpc3QuYWRkKFwidGVtcGVyYXR1cmVfX2NcIiwgXCJ0ZW1wZXJhdHVyZV9fZGF0YVwiKTtcbiAgICAgIHRlbXBJbkMudGV4dENvbnRlbnQgPSBgICR7dGVtcGVyYXR1cmVEYXRhWzBdfSBDYDtcbiAgICAgIGxhYmVsLmFwcGVuZENoaWxkKHRlbXBJbkMpO1xuXG4gICAgICBjb25zdCB0ZW1wSW5GID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICB0ZW1wSW5GLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wZXJhdHVyZV9fZlwiLCBcInRlbXBlcmF0dXJlX19kYXRhXCIpO1xuICAgICAgdGVtcEluRi50ZXh0Q29udGVudCA9IGAgJHt0ZW1wZXJhdHVyZURhdGFbMV19IEZgO1xuICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQodGVtcEluRik7XG5cbiAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJIdW1pZGl0eShodW1pZGl0eURhdGEpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcInRlbXBlcmF0dXJlX19sYWJlbFwiKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IFwiSHVtaWRpdHk6XCI7XG5cbiAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGh1bWlkaXR5LmNsYXNzTGlzdC5hZGQoXCJ0ZW1wZXJhdHVyZV9fZGF0YVwiKTtcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGAgJHtodW1pZGl0eURhdGF9JWA7XG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaHVtaWRpdHkpO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVN0eWxlVG9EYXlPck5pZ2h0KGN1cnJlbnQpIHtcbiAgY29uc3QgZGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheS1jb250YWluZXJcIik7XG4gIGNvbnN0IGlzRGF5ID0gY3VycmVudC5pc19kYXk7XG4gIGlmIChpc0RheSkge1xuICAgIGRpc3BsYXlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRheVwiKTtcbiAgICBkaXNwbGF5Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJuaWdodFwiKTtcbiAgfSBlbHNlIHtcbiAgICBkaXNwbGF5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuaWdodFwiKTtcbiAgICBkaXNwbGF5Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJkYXlcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0VGVtcFVuaXREZWZhdWx0QmFzZWRPbkFyZWEoZGF0YSkge1xuICBpZiAoZGF0YS5hcmVhVXNlc0ZhaHJlbmhlaXQpIHtcbiAgICBoaWRlQ2Vsc2l1c1RlbXBzKCk7XG4gICAgc2V0VG9nZ2xlVG9GKCk7XG4gIH0gZWxzZSB7XG4gICAgaGlkZUZhaHJlbmhlaXRUZW1wcygpO1xuICAgIHNldFRvZ2dsZVRvQygpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZUNlbHNpdXNUZW1wcygpIHtcbiAgICBoaWRlVGVtcHMoXCJjXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZUZhaHJlbmhlaXRUZW1wcygpIHtcbiAgICBoaWRlVGVtcHMoXCJmXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZVRlbXBzKHVuaXQpIHtcbiAgICBjb25zdCB0ZW1wcyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAudGVtcGVyYXR1cmVfXyR7dW5pdH1gKV07XG4gICAgdGVtcHMuZm9yRWFjaCgodGVtcCkgPT4gdGVtcC5jbGFzc0xpc3QuYWRkKFwidGVtcGVyYXR1cmUtLWhpZGRlblwiKSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRUb2dnbGVUb0MoKSB7XG4gICAgY29uc3QgY1VuaXQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuaXQtdG9nZ2xlX19DJylcbiAgICBjVW5pdC5jbGFzc0xpc3QuYWRkKCd1bml0LXRvZ2dsZS0tYWN0aXZlJylcbiAgICBjb25zdCBmVW5pdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5pdC10b2dnbGVfX0YnKVxuICAgIGZVbml0LmNsYXNzTGlzdC5yZW1vdmUoJ3VuaXQtdG9nZ2xlLS1hY3RpdmUnKVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0VG9nZ2xlVG9GKCkge1xuICAgIGNvbnN0IGNVbml0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bml0LXRvZ2dsZV9fQycpXG4gICAgY1VuaXQuY2xhc3NMaXN0LnJlbW92ZSgndW5pdC10b2dnbGUtLWFjdGl2ZScpXG4gICAgY29uc3QgZlVuaXQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuaXQtdG9nZ2xlX19GJylcbiAgICBmVW5pdC5jbGFzc0xpc3QuYWRkKCd1bml0LXRvZ2dsZS0tYWN0aXZlJylcbiAgfVxufVxuIiwiY29uc3Qgc3RhdHVzTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhdHVzLW1lc3NhZ2VcIik7XG5cbmZ1bmN0aW9uIGRpc3BsYXlTdGF0dXMobWVzc2FnZSkge1xuICBzdGF0dXNNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGF0dXMtbWVzc2FnZS0tZXJyb3JcIik7XG4gIHN0YXR1c01lc3NhZ2UuY2xhc3NMaXN0LmFkZChcInN0YXR1cy1tZXNzYWdlLS12aXNpYmxlXCIpO1xuICBzdGF0dXNNZXNzYWdlLnRleHRDb250ZW50ID0gbWVzc2FnZTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUVycm9yKGVycm9yKSB7XG4gIHN0YXR1c01lc3NhZ2UuY2xhc3NMaXN0LmFkZChcInN0YXR1cy1tZXNzYWdlLS1lcnJvclwiKTtcbiAgc3RhdHVzTWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwic3RhdHVzLW1lc3NhZ2UtLXZpc2libGVcIik7XG4gIHN0YXR1c01lc3NhZ2UudGV4dENvbnRlbnQgPSBlcnJvcjtcbn1cblxuZnVuY3Rpb24gY2xlYXJNZXNzYWdlcygpIHtcbiAgc3RhdHVzTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKFwic3RhdHVzLW1lc3NhZ2UtLWVycm9yXCIpO1xuICBzdGF0dXNNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGF0dXMtbWVzc2FnZS0tdmlzaWJsZVwiKTtcbiAgc3RhdHVzTWVzc2FnZS50ZXh0Q29udGVudCA9IFwiXCI7XG59XG5cbmV4cG9ydCB7IGRpc3BsYXlTdGF0dXMsIGRpc3BsYXlFcnJvciwgY2xlYXJNZXNzYWdlcyB9O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVVuaXRUb2dnbGVDbGljayhldmVudCkge1xuICBpZiAoaXNEaXNwbGF5RW1wdHkoKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjaGFuZ2VDbGFzc0ZvclRvZ2dsZUJ1dHRvbigpO1xuICBjaGFuZ2VDbGFzc0ZvclRlbXBlcmF0dXJlcygpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VDbGFzc0ZvclRvZ2dsZUJ1dHRvbigpIHtcbiAgICBjb25zdCBjVW5pdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5pdC10b2dnbGVfX0MnKVxuICAgIGNVbml0LmNsYXNzTGlzdC50b2dnbGUoJ3VuaXQtdG9nZ2xlLS1hY3RpdmUnKVxuICAgIGNvbnN0IGZVbml0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bml0LXRvZ2dsZV9fRicpXG4gICAgZlVuaXQuY2xhc3NMaXN0LnRvZ2dsZSgndW5pdC10b2dnbGUtLWFjdGl2ZScpXG59XG5cbmZ1bmN0aW9uIGNoYW5nZUNsYXNzRm9yVGVtcGVyYXR1cmVzKCkge1xuICBjb25zdCB0ZW1wc0luQyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRlbXBlcmF0dXJlX19jXCIpXTtcbiAgY29uc3QgdGVtcHNJbkYgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50ZW1wZXJhdHVyZV9fZlwiKV07XG4gIGNvbnN0IGFsbFRlbXBzID0gdGVtcHNJbkMuY29uY2F0KHRlbXBzSW5GKTtcbiAgYWxsVGVtcHMuZm9yRWFjaCgodGVtcCkgPT4gdGVtcC5jbGFzc0xpc3QudG9nZ2xlKFwidGVtcGVyYXR1cmUtLWhpZGRlblwiKSk7XG59XG5cbmZ1bmN0aW9uIGlzRGlzcGxheUVtcHR5KCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5LWNvbnRhaW5lclwiKS50ZXh0Q29udGVudCA9PT0gXCJcIjtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiLy8gVE8tRE8gcmVtb3ZlIHRlc3Rcbi8vIGltcG9ydCBcIi4vdGVzdHMvdGVzdC1kYXRhLWZvci1zdHlsaW5nXCI7XG4vLyBUTy1ETyByZW1vdmUgdGVzdFxuXG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcbmltcG9ydCB7XG4gIGNsZWFyTWVzc2FnZXMsXG4gIGRpc3BsYXlFcnJvcixcbiAgZGlzcGxheVN0YXR1cyxcbn0gZnJvbSBcIi4vbW9kdWxlcy9zdGF0dXMtbWVzc2FnZXNcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRGb3JlY2FzdEZyb21XZWF0aGVyU2VydmVyIH0gZnJvbSBcIi4vbW9kdWxlcy9hcGktZmV0Y2hcIjtcbmltcG9ydCB7IGZpbHRlcldlYXRoZXJEYXRhIH0gZnJvbSBcIi4vbW9kdWxlcy9maWx0ZXItZGF0YVwiO1xuaW1wb3J0IHsgZ2V0Rm9ybVZhbHVlIH0gZnJvbSBcIi4vbW9kdWxlcy9oYW5kbGUtaW5wdXRcIjtcbmltcG9ydCB7IHJlbmRlclBhZ2VCYXNlZE9uRGF0YSB9IGZyb20gXCIuL21vZHVsZXMvcmVuZGVyLWRhdGFcIjtcbmltcG9ydCB7IGhhbmRsZVVuaXRUb2dnbGVDbGljayB9IGZyb20gXCIuL21vZHVsZXMvdW5pdC10b2dnbGVcIjtcblxuLy9pbml0IGJ1dHRvbiB0aGF0IHRvZ2dsZXMgYmV0d2VlbiBmYWhyZW5oZWl0IGFuZCBjZWxzaXVzXG5jb25zdCB1bml0VG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51bml0LXRvZ2dsZVwiKTtcbnVuaXRUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVVuaXRUb2dnbGVDbGljayk7XG5cbi8vaW5pdCBzZWFyY2ggZm9ybSBmdW5jdGlvbmFsaXR5XG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlU3VibWl0KTtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdmFsdWUgPSBnZXRGb3JtVmFsdWUoZXZlbnQpO1xuICAgIGRpc3BsYXlTdGF0dXMoXCJHYXRoZXJpbmcgV2VhdGhlciBJbmZvXCIpO1xuICAgIGNvbnN0IHJhd0RhdGEgPSBhd2FpdCBnZXRDdXJyZW50Rm9yZWNhc3RGcm9tV2VhdGhlclNlcnZlcih2YWx1ZSk7XG4gICAgZGlzcGxheVN0YXR1cyhcIkRpc3BsYXlpbmcgV2VhdGhlciBJbmZvXCIpO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gZmlsdGVyV2VhdGhlckRhdGEocmF3RGF0YSk7XG4gICAgcmVuZGVyUGFnZUJhc2VkT25EYXRhKHdlYXRoZXJEYXRhKTtcbiAgICBjbGVhck1lc3NhZ2VzKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIGRpc3BsYXlFcnJvcihlcnJvcik7XG4gIH1cbiAgZm9ybS5yZXNldCgpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9