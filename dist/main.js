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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"titleFont\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: \"dataFont\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #feb101;\n  min-width: 100vw;\n  min-height: 100vh;\n}\n\n.flex-col {\n  display: flex;\n  flex-direction: column;\n}\n\n.flex {\n  display: flex;\n}\n\n.title {\n  font-family: \"titleFont\";\n  text-align: center;\n}\n.title__word {\n  margin-left: -0.6em;\n  font-size: 0.5em;\n}\n\n.form {\n  justify-content: center;\n  margin: 0 0.77em;\n}\n.form__input-box {\n  width: 12.5em;\n  border-radius: 5px;\n  text-align: center;\n}\n.form__submit {\n  border-radius: 6px;\n  margin-top: 0.4em;\n  padding: 0 0.3em;\n  align-self: flex-start;\n}\n\n.search-bar {\n  background-color: whitesmoke;\n  padding: 0.3em;\n  width: 20em;\n  border: solid 1px black;\n  border-radius: 50px;\n}\n.search-bar__submit-button {\n  border: none;\n  background: none;\n}\n.search-bar__submit-button:focus, .search-bar__submit-button:hover {\n  outline: none;\n  transition: 300ms;\n  transform: scale(1.2);\n}\n.search-bar__input-box {\n  border: none;\n  background: none;\n  width: 100%;\n}\n.search-bar__input-box:focus, .search-bar__input-box:hover {\n  outline: none;\n}\n\n.status-message {\n  transform: scale(0.75);\n  transition: 300ms;\n  height: 1em;\n  margin-top: 0.4em;\n  white-space: nowrap;\n  font-family: \"titleFont\";\n  text-align: center;\n}\n.status-message--error {\n  color: red;\n}\n.status-message--visible {\n  transform: scale(1);\n  transition: 300ms;\n}\n\n.unit-toggle {\n  display: flex;\n  align-items: center;\n  font-family: \"titleFont\";\n  font-size: 1.5em;\n  margin-left: 0.6em;\n  background: none;\n  border: none;\n  transition: 300ms;\n}\n.unit-toggle--active {\n  transform: scale(1.2);\n  font-weight: 600;\n  transition: 300ms;\n  color: red;\n}\n.unit-toggle:focus, .unit-toggle:hover {\n  transition: 300ms;\n  transform: scale(1.2);\n  outline: none;\n}\n\n@keyframes popIn {\n  from {\n    transform: scale(0.75);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.display-container {\n  padding: 1em;\n  width: 18em;\n  min-height: 14.5em;\n  border-radius: 1em;\n  margin-top: 1em;\n  align-self: center;\n  color: white;\n  font-family: \"dataFont\";\n}\n.display-container__location {\n  font-weight: 600;\n  text-align: center;\n}\n.display-container__condition {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 1em;\n}\n.display-container * {\n  animation-name: popIn;\n  animation-duration: 800ms;\n}\n\n.temperature__label {\n  margin-top: 0.2em;\n  font-weight: 600;\n  position: relative;\n}\n.temperature__data {\n  position: absolute;\n  margin-left: 0.5em;\n  font-weight: normal;\n  transition: 300ms;\n  -webkit-text-stroke: none;\n}\n.temperature--hidden {\n  transition: 300ms;\n  opacity: 0;\n  transform: scale(0);\n}\n\n.day {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-position: center;\n  background-size: cover;\n}\n\n.night {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-position: center;\n  background-size: cover;\n}\n\n.footer {\n  display: none;\n}\n\n@media screen and (min-height: 420px) {\n  .display-container {\n    margin: 2.5em 0;\n  }\n\n  .footer {\n    display: flex;\n    margin-top: auto;\n    margin-bottom: 0.3em;\n    justify-content: center;\n    width: 100%;\n  }\n  .footer__link {\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    color: black;\n    font-family: \"dataFont\";\n  }\n  .footer__icon {\n    width: 1.5em;\n    margin-left: 0.2em;\n  }\n}\n@media screen and (min-height: 420px) and (min-width: 1000px) {\n  .title {\n    font-size: 3em;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;EACE,wBAAA;EACA,4CAAA;AACF;AAEA;EACE,uBAAA;EACA,4CAAA;AAAF;AAKA;EACE,UAAA;EACA,SAAA;EACA,sBAAA;AAHF;;AAMA;EACE,yBAAA;EACA,gBAAA;EACA,iBAAA;AAHF;;AAMA;EACE,aAAA;EACA,sBAAA;AAHF;;AAMA;EACE,aAAA;AAHF;;AAMA;EACE,wBAAA;EACA,kBAAA;AAHF;AAIE;EACE,mBAAA;EACA,gBAAA;AAFJ;;AAMA;EACE,uBAAA;EACA,gBAAA;AAHF;AAIE;EACE,aAAA;EACA,kBAAA;EACA,kBAAA;AAFJ;AAIE;EACE,kBAAA;EACA,iBAAA;EACA,gBAAA;EACA,sBAAA;AAFJ;;AAMA;EACE,4BAAA;EACA,cAAA;EACA,WAAA;EACA,uBAAA;EACA,mBAAA;AAHF;AAIE;EACE,YAAA;EACA,gBAAA;AAFJ;AAGI;EAEE,aAAA;EACA,iBA5Da;EA6Db,qBAAA;AAFN;AAKE;EACE,YAAA;EACA,gBAAA;EACA,WAAA;AAHJ;AAII;EAEE,aAAA;AAHN;;AAQA;EACE,sBAAA;EACA,iBA7EiB;EA8EjB,WAAA;EACA,iBAAA;EACA,mBAAA;EACA,wBAAA;EACA,kBAAA;AALF;AAME;EACE,UAAA;AAJJ;AAME;EACE,mBAAA;EACA,iBAxFe;AAoFnB;;AAQA;EACE,aAAA;EACA,mBAAA;EACA,wBAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,iBApGiB;AA+FnB;AAME;EACE,qBAAA;EACA,gBAAA;EACA,iBAxGe;EAyGf,UAAA;AAJJ;AAME;EAEE,iBA7Ge;EA8Gf,qBAAA;EACA,aAAA;AALJ;;AASA;EACE;IACE,sBAAA;IACA,UAAA;EANF;EAQA;IACE,mBAAA;IACA,UAAA;EANF;AACF;AASA;EACE,YAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,uBAAA;AAPF;AAQE;EACE,gBAAA;EACA,kBAAA;AANJ;AAQE;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;AANJ;AAQE;EACE,qBAAA;EACA,yBAAA;AANJ;;AAWE;EACE,iBAAA;EACA,gBAAA;EACA,kBAAA;AARJ;AAUE;EACE,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,iBAjKe;EAkKf,yBAAA;AARJ;AAUE;EACE,iBArKe;EAsKf,UAAA;EACA,mBAAA;AARJ;;AAYA;EACE,mDAAA;EACA,2BAAA;EACA,sBAAA;AATF;;AAYA;EACE,mDAAA;EACA,2BAAA;EACA,sBAAA;AATF;;AAYA;EACE,aAAA;AATF;;AAYA;EACE;IACE,eAAA;EATF;;EAYA;IACE,aAAA;IACA,gBAAA;IACA,oBAAA;IACA,uBAAA;IACA,WAAA;EATF;EAUE;IACE,aAAA;IACA,mBAAA;IACA,qBAAA;IACA,YAAA;IACA,uBAAA;EARJ;EAUE;IACE,YAAA;IACA,kBAAA;EARJ;AACF;AAWE;EACE;IACE,cAAA;EATJ;AACF","sourcesContent":["@font-face {\n  font-family: \"titleFont\";\n  src: url(\"./fonts/PermanentMarker-Regular.ttf\");\n}\n\n@font-face {\n  font-family: \"dataFont\";\n  src: url(\"./fonts/Ubuntu-Regular.ttf\");\n}\n\n$transition-delay: 300ms;\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #feb101;\n  min-width: 100vw;\n  min-height: 100vh;\n}\n\n.flex-col {\n  display: flex;\n  flex-direction: column;\n}\n\n.flex {\n  display: flex;\n}\n\n.title {\n  font-family: \"titleFont\";\n  text-align: center;\n  &__word {\n    margin-left: -0.6em;\n    font-size: 0.5em;\n  }\n}\n\n.form {\n  justify-content: center;\n  margin: 0 0.77em;\n  &__input-box {\n    width: 12.5em;\n    border-radius: 5px;\n    text-align: center;\n  }\n  &__submit {\n    border-radius: 6px;\n    margin-top: 0.4em;\n    padding: 0 0.3em;\n    align-self: flex-start;\n  }\n}\n\n.search-bar {\n  background-color: whitesmoke;\n  padding: 0.3em;\n  width: 20em;\n  border: solid 1px black;\n  border-radius: 50px;\n  &__submit-button {\n    border: none;\n    background: none;\n    &:focus,\n    &:hover {\n      outline: none;\n      transition: $transition-delay;\n      transform: scale(1.2);\n    }\n  }\n  &__input-box {\n    border: none;\n    background: none;\n    width: 100%;\n    &:focus,\n    &:hover {\n      outline: none;\n    }\n  }\n}\n\n.status-message {\n  transform: scale(0.75);\n  transition: $transition-delay;\n  height: 1em;\n  margin-top: 0.4em;\n  white-space: nowrap;\n  font-family: \"titleFont\";\n  text-align: center;\n  &--error {\n    color: red;\n  }\n  &--visible {\n    transform: scale(1);\n    transition: $transition-delay;\n  }\n}\n\n.unit-toggle {\n  display: flex;\n  align-items: center;\n  font-family: \"titleFont\";\n  font-size: 1.5em;\n  margin-left: 0.6em;\n  background: none;\n  border: none;\n  transition: $transition-delay;\n  &--active {\n    transform: scale(1.2);\n    font-weight: 600;\n    transition: $transition-delay;\n    color: red;\n  }\n  &:focus,\n  &:hover {\n    transition: $transition-delay;\n    transform: scale(1.2);\n    outline: none;\n  }\n}\n\n@keyframes popIn {\n  from {\n    transform: scale(0.75);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n.display-container {\n  padding: 1em;\n  width: 18em;\n  min-height: 14.5em;\n  border-radius: 1em;\n  margin-top: 1em;\n  align-self: center;\n  color: white;\n  font-family: \"dataFont\";\n  &__location {\n    font-weight: 600;\n    text-align: center;\n  }\n  &__condition {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 1em;\n  }\n  & * {\n    animation-name: popIn;\n    animation-duration: 800ms;\n  }\n}\n\n.temperature {\n  &__label {\n    margin-top: 0.2em;\n    font-weight: 600;\n    position: relative;\n  }\n  &__data {\n    position: absolute;\n    margin-left: 0.5em;\n    font-weight: normal;\n    transition: $transition-delay;\n    -webkit-text-stroke: none;\n  }\n  &--hidden {\n    transition: $transition-delay;\n    opacity: 0;\n    transform: scale(0);\n  }\n}\n\n.day {\n  background: url(\"./img/day.jpg\");\n  background-position: center;\n  background-size: cover;\n}\n\n.night {\n  background: url(\"./img/night.jpg\");\n  background-position: center;\n  background-size: cover;\n}\n\n.footer {\n  display: none;\n}\n\n@media screen and (min-height: 420px) {\n  .display-container {\n    margin: 2.5em 0;\n  }\n\n  .footer {\n    display: flex;\n    margin-top: auto;\n    margin-bottom: 0.3em;\n    justify-content: center;\n    width: 100%;\n    &__link {\n      display: flex;\n      align-items: center;\n      text-decoration: none;\n      color: black;\n      font-family: \"dataFont\";\n    }\n    &__icon {\n      width: 1.5em;\n      margin-left: 0.2em;\n    }\n  }\n\n  @media screen and (min-width: 1000px) {\n    .title {\n      font-size: 3em;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/tests/test-data-for-styling.js":
/*!********************************************!*\
  !*** ./src/tests/test-data-for-styling.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_render_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/render-data */ "./src/modules/render-data.js");

const testDataDayTime = {
  location: {
    city: "London",
    stateOrCountry: "United Kingdom",
  },
  current: {
    condition: {
      text: "Sunny",
      icon: "https://cdn.weatherapi.com/weather/64x64/day/113.png",
    },
    temp_c: 12,
    temp_f: 53.6,
    is_day: 1,
    humidity: 54,
    feelslike_c: 10.8,
    feelslike_f: 51.4,
  },
};
const testDataNightTime = testDataDayTime;
testDataNightTime.current.is_day = 0;
testDataNightTime.current.condition.icon =
  "https://cdn.weatherapi.com/weather/64x64/night/113.png";

(0,_modules_render_data__WEBPACK_IMPORTED_MODULE_0__.renderPageBasedOnData)(testDataDayTime);
// renderPageBasedOnData(testDataNightTime);


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
/* harmony import */ var _tests_test_data_for_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tests/test-data-for-styling */ "./src/tests/test-data-for-styling.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _modules_status_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/status-messages */ "./src/modules/status-messages.js");
/* harmony import */ var _modules_api_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/api-fetch */ "./src/modules/api-fetch.js");
/* harmony import */ var _modules_filter_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/filter-data */ "./src/modules/filter-data.js");
/* harmony import */ var _modules_handle_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/handle-input */ "./src/modules/handle-input.js");
/* harmony import */ var _modules_render_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/render-data */ "./src/modules/render-data.js");
/* harmony import */ var _modules_unit_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/unit-toggle */ "./src/modules/unit-toggle.js");
// TO-DO remove test

// TO-DO remove test









//init button that toggles between fahrenheit and celsius
const unitToggle = document.querySelector(".unit-toggle");
unitToggle.addEventListener("click", _modules_unit_toggle__WEBPACK_IMPORTED_MODULE_7__.handleUnitToggleClick);

//init search form functionality
const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  try {
    const value = (0,_modules_handle_input__WEBPACK_IMPORTED_MODULE_5__.getFormValue)(event);
    (0,_modules_status_messages__WEBPACK_IMPORTED_MODULE_2__.displayStatus)("Gathering Weather Info");
    const rawData = await (0,_modules_api_fetch__WEBPACK_IMPORTED_MODULE_3__.getCurrentForecastFromWeatherServer)(value);
    (0,_modules_status_messages__WEBPACK_IMPORTED_MODULE_2__.displayStatus)("Displaying Weather Info");
    const weatherData = (0,_modules_filter_data__WEBPACK_IMPORTED_MODULE_4__.filterWeatherData)(rawData);
    (0,_modules_render_data__WEBPACK_IMPORTED_MODULE_6__.renderPageBasedOnData)(weatherData);
    (0,_modules_status_messages__WEBPACK_IMPORTED_MODULE_2__.clearMessages)();
  } catch (error) {
    console.log(error);
    (0,_modules_status_messages__WEBPACK_IMPORTED_MODULE_2__.displayError)(error);
  }
  form.reset();
  form['location'].blur();
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2FwaS1mZXRjaC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2ZpbHRlci1kYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvaGFuZGxlLWlucHV0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvcmVuZGVyLWRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9zdGF0dXMtbWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy91bml0LXRvZ2dsZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy90ZXN0cy90ZXN0LWRhdGEtZm9yLXN0eWxpbmcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1Blcm1hbmVudE1hcmtlci1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvVWJ1bnR1LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWcvZGF5LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vaW1nL25pZ2h0LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJ0aXRsZUZvbnRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiZGF0YUZvbnRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWIxMDE7XFxuICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5mbGV4LWNvbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwidGl0bGVGb250XFxcIjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnRpdGxlX193b3JkIHtcXG4gIG1hcmdpbi1sZWZ0OiAtMC42ZW07XFxuICBmb250LXNpemU6IDAuNWVtO1xcbn1cXG5cXG4uZm9ybSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCAwLjc3ZW07XFxufVxcbi5mb3JtX19pbnB1dC1ib3gge1xcbiAgd2lkdGg6IDEyLjVlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmZvcm1fX3N1Ym1pdCB7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBtYXJnaW4tdG9wOiAwLjRlbTtcXG4gIHBhZGRpbmc6IDAgMC4zZW07XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uc2VhcmNoLWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgcGFkZGluZzogMC4zZW07XFxuICB3aWR0aDogMjBlbTtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuLnNlYXJjaC1iYXJfX3N1Ym1pdC1idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuLnNlYXJjaC1iYXJfX3N1Ym1pdC1idXR0b246Zm9jdXMsIC5zZWFyY2gtYmFyX19zdWJtaXQtYnV0dG9uOmhvdmVyIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiAzMDBtcztcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuLnNlYXJjaC1iYXJfX2lucHV0LWJveCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5zZWFyY2gtYmFyX19pbnB1dC1ib3g6Zm9jdXMsIC5zZWFyY2gtYmFyX19pbnB1dC1ib3g6aG92ZXIge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnN0YXR1cy1tZXNzYWdlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC43NSk7XFxuICB0cmFuc2l0aW9uOiAzMDBtcztcXG4gIGhlaWdodDogMWVtO1xcbiAgbWFyZ2luLXRvcDogMC40ZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJ0aXRsZUZvbnRcXFwiO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uc3RhdHVzLW1lc3NhZ2UtLWVycm9yIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcbi5zdGF0dXMtbWVzc2FnZS0tdmlzaWJsZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgdHJhbnNpdGlvbjogMzAwbXM7XFxufVxcblxcbi51bml0LXRvZ2dsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwidGl0bGVGb250XFxcIjtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBtYXJnaW4tbGVmdDogMC42ZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdHJhbnNpdGlvbjogMzAwbXM7XFxufVxcbi51bml0LXRvZ2dsZS0tYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB0cmFuc2l0aW9uOiAzMDBtcztcXG4gIGNvbG9yOiByZWQ7XFxufVxcbi51bml0LXRvZ2dsZTpmb2N1cywgLnVuaXQtdG9nZ2xlOmhvdmVyIHtcXG4gIHRyYW5zaXRpb246IDMwMG1zO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuQGtleWZyYW1lcyBwb3BJbiB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuLmRpc3BsYXktY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIHdpZHRoOiAxOGVtO1xcbiAgbWluLWhlaWdodDogMTQuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJkYXRhRm9udFxcXCI7XFxufVxcbi5kaXNwbGF5LWNvbnRhaW5lcl9fbG9jYXRpb24ge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmRpc3BsYXktY29udGFpbmVyX19jb25kaXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG4uZGlzcGxheS1jb250YWluZXIgKiB7XFxuICBhbmltYXRpb24tbmFtZTogcG9wSW47XFxuICBhbmltYXRpb24tZHVyYXRpb246IDgwMG1zO1xcbn1cXG5cXG4udGVtcGVyYXR1cmVfX2xhYmVsIHtcXG4gIG1hcmdpbi10b3A6IDAuMmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRlbXBlcmF0dXJlX19kYXRhIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICB0cmFuc2l0aW9uOiAzMDBtcztcXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IG5vbmU7XFxufVxcbi50ZW1wZXJhdHVyZS0taGlkZGVuIHtcXG4gIHRyYW5zaXRpb246IDMwMG1zO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcblxcbi5kYXkge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5uaWdodCB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogNDIwcHgpIHtcXG4gIC5kaXNwbGF5LWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMi41ZW0gMDtcXG4gIH1cXG5cXG4gIC5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjNlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLmZvb3Rlcl9fbGluayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LWZhbWlseTogXFxcImRhdGFGb250XFxcIjtcXG4gIH1cXG4gIC5mb290ZXJfX2ljb24ge1xcbiAgICB3aWR0aDogMS41ZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDQyMHB4KSBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxuICAudGl0bGUge1xcbiAgICBmb250LXNpemU6IDNlbTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBQTtFQUNBLDRDQUFBO0FBQ0Y7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsNENBQUE7QUFBRjtBQUtBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQUhGOztBQU1BO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7QUFIRjs7QUFNQTtFQUNFLHdCQUFBO0VBQ0Esa0JBQUE7QUFIRjtBQUlFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQUZKOztBQU1BO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtBQUhGO0FBSUU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUZKO0FBSUU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUZKOztBQU1BO0VBQ0UsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFIRjtBQUlFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBRko7QUFHSTtFQUVFLGFBQUE7RUFDQSxpQkE1RGE7RUE2RGIscUJBQUE7QUFGTjtBQUtFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUhKO0FBSUk7RUFFRSxhQUFBO0FBSE47O0FBUUE7RUFDRSxzQkFBQTtFQUNBLGlCQTdFaUI7RUE4RWpCLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtBQUxGO0FBTUU7RUFDRSxVQUFBO0FBSko7QUFNRTtFQUNFLG1CQUFBO0VBQ0EsaUJBeEZlO0FBb0ZuQjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQXBHaUI7QUErRm5CO0FBTUU7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBeEdlO0VBeUdmLFVBQUE7QUFKSjtBQU1FO0VBRUUsaUJBN0dlO0VBOEdmLHFCQUFBO0VBQ0EsYUFBQTtBQUxKOztBQVNBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLFVBQUE7RUFORjtFQVFBO0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0VBTkY7QUFDRjtBQVNBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBUEY7QUFRRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFOSjtBQVFFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQU5KO0FBUUU7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0FBTko7O0FBV0U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFSSjtBQVVFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBaktlO0VBa0tmLHlCQUFBO0FBUko7QUFVRTtFQUNFLGlCQXJLZTtFQXNLZixVQUFBO0VBQ0EsbUJBQUE7QUFSSjs7QUFZQTtFQUNFLG1EQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQVRGOztBQVlBO0VBQ0UsbURBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FBVEY7O0FBWUE7RUFDRSxhQUFBO0FBVEY7O0FBWUE7RUFDRTtJQUNFLGVBQUE7RUFURjs7RUFZQTtJQUNFLGFBQUE7SUFDQSxnQkFBQTtJQUNBLG9CQUFBO0lBQ0EsdUJBQUE7SUFDQSxXQUFBO0VBVEY7RUFVRTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHFCQUFBO0lBQ0EsWUFBQTtJQUNBLHVCQUFBO0VBUko7RUFVRTtJQUNFLFlBQUE7SUFDQSxrQkFBQTtFQVJKO0FBQ0Y7QUFXRTtFQUNFO0lBQ0UsY0FBQTtFQVRKO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcInRpdGxlRm9udFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9mb250cy9QZXJtYW5lbnRNYXJrZXItUmVndWxhci50dGZcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcImRhdGFGb250XFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL1VidW50dS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5cXG4kdHJhbnNpdGlvbi1kZWxheTogMzAwbXM7XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmViMTAxO1xcbiAgbWluLXdpZHRoOiAxMDB2dztcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uZmxleC1jb2wge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50aXRsZSB7XFxuICBmb250LWZhbWlseTogXFxcInRpdGxlRm9udFxcXCI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAmX193b3JkIHtcXG4gICAgbWFyZ2luLWxlZnQ6IC0wLjZlbTtcXG4gICAgZm9udC1zaXplOiAwLjVlbTtcXG4gIH1cXG59XFxuXFxuLmZvcm0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDAgMC43N2VtO1xcbiAgJl9faW5wdXQtYm94IHtcXG4gICAgd2lkdGg6IDEyLjVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICAmX19zdWJtaXQge1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIG1hcmdpbi10b3A6IDAuNGVtO1xcbiAgICBwYWRkaW5nOiAwIDAuM2VtO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgfVxcbn1cXG5cXG4uc2VhcmNoLWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgcGFkZGluZzogMC4zZW07XFxuICB3aWR0aDogMjBlbTtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICZfX3N1Ym1pdC1idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgICY6Zm9jdXMsXFxuICAgICY6aG92ZXIge1xcbiAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb24tZGVsYXk7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICB9XFxuICB9XFxuICAmX19pbnB1dC1ib3gge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAmOmZvY3VzLFxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5zdGF0dXMtbWVzc2FnZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUpO1xcbiAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb24tZGVsYXk7XFxuICBoZWlnaHQ6IDFlbTtcXG4gIG1hcmdpbi10b3A6IDAuNGVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwidGl0bGVGb250XFxcIjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICYtLWVycm9yIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gIH1cXG4gICYtLXZpc2libGUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi1kZWxheTtcXG4gIH1cXG59XFxuXFxuLnVuaXQtdG9nZ2xlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJ0aXRsZUZvbnRcXFwiO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIG1hcmdpbi1sZWZ0OiAwLjZlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi1kZWxheTtcXG4gICYtLWFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb24tZGVsYXk7XFxuICAgIGNvbG9yOiByZWQ7XFxuICB9XFxuICAmOmZvY3VzLFxcbiAgJjpob3ZlciB7XFxuICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uLWRlbGF5O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgcG9wSW4ge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43NSk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbi5kaXNwbGF5LWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAxZW07XFxuICB3aWR0aDogMThlbTtcXG4gIG1pbi1oZWlnaHQ6IDE0LjVlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiZGF0YUZvbnRcXFwiO1xcbiAgJl9fbG9jYXRpb24ge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICAmX19jb25kaXRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICB9XFxuICAmICoge1xcbiAgICBhbmltYXRpb24tbmFtZTogcG9wSW47XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogODAwbXM7XFxuICB9XFxufVxcblxcbi50ZW1wZXJhdHVyZSB7XFxuICAmX19sYWJlbCB7XFxuICAgIG1hcmdpbi10b3A6IDAuMmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuICAmX19kYXRhIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uLWRlbGF5O1xcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiBub25lO1xcbiAgfVxcbiAgJi0taGlkZGVuIHtcXG4gICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb24tZGVsYXk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB9XFxufVxcblxcbi5kYXkge1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuL2ltZy9kYXkuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4ubmlnaHQge1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuL2ltZy9uaWdodC5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5mb290ZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDQyMHB4KSB7XFxuICAuZGlzcGxheS1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDIuNWVtIDA7XFxuICB9XFxuXFxuICAuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4zZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgJl9fbGluayB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJkYXRhRm9udFxcXCI7XFxuICAgIH1cXG4gICAgJl9faWNvbiB7XFxuICAgICAgd2lkdGg6IDEuNWVtO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjJlbTtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxuICAgIC50aXRsZSB7XFxuICAgICAgZm9udC1zaXplOiAzZW07XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBBUElfS0VZID0gXCI5YmNiMWM2MTlhMWQ0ZTUyYjVmMTA1ODE4MjIxNDAzXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnRGb3JlY2FzdEZyb21XZWF0aGVyU2VydmVyKHF1ZXJ5TG9jYXRpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke0FQSV9LRVl9JnE9JHtxdWVyeUxvY2F0aW9ufSZkYXlzPTcmYXFpPW5vYFxuICAgICk7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvci5tZXNzYWdlLmluY2x1ZGVzKFwiTmV0d29ya0Vycm9yXCIpKSB7XG4gICAgICB0aHJvdyBcIlVuYWJsZSB0byBjb25uZWN0IHRvIHNlcnZlci5cIjtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHtnZXRDdXJyZW50Rm9yZWNhc3RGcm9tV2VhdGhlclNlcnZlcn07IiwiZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcldlYXRoZXJEYXRhKHdlYXRoZXJEYXRhKSB7XG4gIGlmICh3ZWF0aGVyRGF0YS5lcnJvcikge1xuICAgIHRocm93IHdlYXRoZXJEYXRhLmVycm9yLm1lc3NhZ2U7XG4gIH1cbiAgY29uc3QgbG9jYXRpb24gPSBmaWx0ZXJMb2NhdGlvbih3ZWF0aGVyRGF0YS5sb2NhdGlvbik7XG4gIGNvbnN0IGN1cnJlbnQgPSBmaWx0ZXJDdXJyZW50KHdlYXRoZXJEYXRhLmN1cnJlbnQpO1xuICBjb25zdCBhcmVhVXNlc0ZhaHJlbmhlaXQgPSBkb2VzQXJlYVVzZUZhaHJlbmhlaXQoXG4gICAgd2VhdGhlckRhdGEubG9jYXRpb24uY291bnRyeVxuICApO1xuXG4gIHJldHVybiB7XG4gICAgbG9jYXRpb24sXG4gICAgY3VycmVudCxcbiAgICBhcmVhVXNlc0ZhaHJlbmhlaXQsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbHRlckxvY2F0aW9uKGxvY2F0aW9uKSB7XG4gIGNvbnN0IGNpdHkgPSBsb2NhdGlvbi5uYW1lO1xuICBpZiAobG9jYXRpb24uY291bnRyeS5pbmNsdWRlcyhcIlVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYVwiKSkge1xuICAgIGNvbnN0IHN0YXRlT3JDb3VudHJ5ID0gbG9jYXRpb24ucmVnaW9uO1xuICAgIHJldHVybiB7IGNpdHksIHN0YXRlT3JDb3VudHJ5IH07XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc3RhdGVPckNvdW50cnkgPSBsb2NhdGlvbi5jb3VudHJ5O1xuICAgIHJldHVybiB7IGNpdHksIHN0YXRlT3JDb3VudHJ5IH07XG4gIH1cbn1cblxuZnVuY3Rpb24gZmlsdGVyQ3VycmVudChjdXJyZW50KSB7XG4gIGNvbnN0IGNvbmRpdGlvbiA9IGZpbHRlckNvbmRpdGlvbihjdXJyZW50LmNvbmRpdGlvbik7XG4gIGNvbnN0IHRlbXBfYyA9IGN1cnJlbnQudGVtcF9jO1xuICBjb25zdCB0ZW1wX2YgPSBjdXJyZW50LnRlbXBfZjtcbiAgY29uc3QgaXNfZGF5ID0gY3VycmVudC5pc19kYXk7XG4gIGNvbnN0IGh1bWlkaXR5ID0gY3VycmVudC5odW1pZGl0eTtcbiAgY29uc3QgZmVlbHNsaWtlX2MgPSBjdXJyZW50LmZlZWxzbGlrZV9jO1xuICBjb25zdCBmZWVsc2xpa2VfZiA9IGN1cnJlbnQuZmVlbHNsaWtlX2Y7XG5cbiAgcmV0dXJuIHtcbiAgICBjb25kaXRpb24sXG4gICAgdGVtcF9jLFxuICAgIHRlbXBfZixcbiAgICBpc19kYXksXG4gICAgaHVtaWRpdHksXG4gICAgZmVlbHNsaWtlX2MsXG4gICAgZmVlbHNsaWtlX2YsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbHRlckNvbmRpdGlvbihjb25kaXRpb24pIHtcbiAgY29uc3QgdGV4dCA9IGNvbmRpdGlvbi50ZXh0O1xuICBjb25zdCBpY29uID0gXCJodHRwczpcIiArIGNvbmRpdGlvbi5pY29uO1xuICByZXR1cm4geyB0ZXh0LCBpY29uIH07XG59XG5cbmZ1bmN0aW9uIGRvZXNBcmVhVXNlRmFocmVuaGVpdChhcmVhKSB7XG4gIGNvbnN0IGFyZWFzVGhhdFVzZUZhaHJlbmhlaXQgPSBbXG4gICAgXCJQYWxhdVwiLFxuICAgIFwiQmVybXVkYVwiLFxuICAgIFwiQmVsaXplXCIsXG4gICAgXCJUdXJrcyBhbmQgQ2FpY29zIElzbGFuZHNcIixcbiAgICBcIkxpYmVyaWFcIixcbiAgICBcIkJhaGFtYXNcIixcbiAgICBcIlNhaW50IEtpdHRzIGFuZCBOZXZpc1wiLFxuICAgIFwiTW9udHNlcnJhdFwiLFxuICAgIFwiQ2F5bWFuIElzbGFuZHNcIixcbiAgICBcIkFudGlndWEgYW5kIEJhcmJ1ZGFcIixcbiAgICBcIlZpcmdpbiBJc2xhbmRzXCIsXG4gICAgXCJNaWNyb25lc2lhXCIsXG4gICAgXCJVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2FcIixcbiAgICBcIk1hcnNoYWxsIElzbGFuZHNcIixcbiAgXTtcblxuICByZXR1cm4gYXJlYXNUaGF0VXNlRmFocmVuaGVpdC5pbmNsdWRlcyhhcmVhKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRGb3JtVmFsdWUoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXRbXCJsb2NhdGlvblwiXS52YWx1ZTtcbiAgaWYgKHZhbHVlID09PSBcIlwiKSB7XG4gICAgdGhyb3cgXCJQbGVhc2UgZW50ZXIgeW91ciBjaXR5IGFuZCBzdGF0ZS9jb3VudHJ5LlwiO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlLnRyaW0oKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiByZW5kZXJQYWdlQmFzZWRPbkRhdGEoZGF0YSkge1xuICBjb25zdCBkaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5LWNvbnRhaW5lclwiKTtcbiAgY2xlYXJEaXNwbGF5KGRpc3BsYXlDb250YWluZXIpO1xuXG4gIGNvbnN0IHsgbG9jYXRpb24sIGN1cnJlbnQgfSA9IGRhdGE7XG4gIGNvbnN0IGxvY2F0aW9uRGlzcGxheSA9IHJlbmRlckxvY2F0aW9uTmFtZShsb2NhdGlvbik7XG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyRGlzcGxheSA9IHJlbmRlckN1cnJlbnRXZWF0aGVyKGN1cnJlbnQpO1xuXG4gIGRpc3BsYXlDb250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25EaXNwbGF5KTtcbiAgZGlzcGxheUNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlckRpc3BsYXkpO1xuXG4gIGNoYW5nZVN0eWxlVG9EYXlPck5pZ2h0KGN1cnJlbnQsIGRpc3BsYXlDb250YWluZXIpO1xuICBzZXRUZW1wVW5pdERlZmF1bHRCYXNlZE9uQXJlYShkYXRhKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTG9jYXRpb25OYW1lKGxvY2F0aW9uKSB7XG4gIGNvbnN0IHsgY2l0eSwgc3RhdGVPckNvdW50cnkgfSA9IGxvY2F0aW9uO1xuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheS1jb250YWluZXJfX2xvY2F0aW9uXCIpO1xuICBzcGFuLnRleHRDb250ZW50ID0gYCR7Y2l0eX0sICR7c3RhdGVPckNvdW50cnl9YDtcbiAgcmV0dXJuIHNwYW47XG59XG5cbmZ1bmN0aW9uIGNsZWFyRGlzcGxheShkaXNwbGF5KSB7XG4gIGRpc3BsYXkudGV4dENvbnRlbnQgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiByZW5kZXJDdXJyZW50V2VhdGhlcihjdXJyZW50KSB7XG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgY29uc3QgY29uZGl0aW9uRGlzcGxheSA9IHJlbmRlckNvbmRpdGlvbihjdXJyZW50LmNvbmRpdGlvbik7XG4gIGNvbnN0IHRlbXBlcmF0dXJlRGlzcGxheSA9IHJlbmRlclRlbXBlcmF0dXJlcyhjdXJyZW50KTtcbiAgY29uc3QgaHVtaWRpdHlEaXNwbGF5ID0gcmVuZGVySHVtaWRpdHkoY3VycmVudC5odW1pZGl0eSk7XG5cbiAgY3VycmVudFdlYXRoZXJEaXNwbGF5LmFwcGVuZENoaWxkKGNvbmRpdGlvbkRpc3BsYXkpO1xuICBjdXJyZW50V2VhdGhlckRpc3BsYXkuYXBwZW5kQ2hpbGQodGVtcGVyYXR1cmVEaXNwbGF5KTtcbiAgY3VycmVudFdlYXRoZXJEaXNwbGF5LmFwcGVuZENoaWxkKGh1bWlkaXR5RGlzcGxheSk7XG5cbiAgcmV0dXJuIGN1cnJlbnRXZWF0aGVyRGlzcGxheTtcblxuICBmdW5jdGlvbiByZW5kZXJDb25kaXRpb24oY29uZGl0aW9uKSB7XG4gICAgY29uc3QgY29uZGl0aW9uRnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbmRpdGlvbkZyYWdtZW50LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LWNvbnRhaW5lcl9fY29uZGl0aW9uXCIpO1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGljb24uc3JjID0gY29uZGl0aW9uLmljb247XG4gICAgaWNvbi5hbHQgPSBgJHtjb25kaXRpb24udGV4dH0gaWNvbmA7XG4gICAgY29uc3QgY29uZGl0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uZGl0aW9uVGV4dC50ZXh0Q29udGVudCA9IGNvbmRpdGlvbi50ZXh0O1xuICAgIGNvbmRpdGlvbkZyYWdtZW50LmFwcGVuZENoaWxkKGljb24pO1xuICAgIGNvbmRpdGlvbkZyYWdtZW50LmFwcGVuZENoaWxkKGNvbmRpdGlvblRleHQpO1xuICAgIHJldHVybiBjb25kaXRpb25GcmFnbWVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlclRlbXBlcmF0dXJlcyhjdXJyZW50KSB7XG4gICAgY29uc3QgdGVtcGVyYXR1cmVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0ZW1wZXJhdHVyZVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInRlbXBlcmF0dXJlXCIpO1xuXG4gICAgY29uc3QgY3VycmVudFRlbXAgPSByZW5kZXJUZW1wZXJhdHVyZUVsZW1lbnQoXG4gICAgICBcIkN1cnJlbnQ6XCIsXG4gICAgICBjdXJyZW50LnRlbXBfYyxcbiAgICAgIGN1cnJlbnQudGVtcF9mXG4gICAgKTtcbiAgICB0ZW1wZXJhdHVyZVNlY3Rpb24uYXBwZW5kQ2hpbGQoY3VycmVudFRlbXApO1xuXG4gICAgY29uc3QgZmVlbHNMaWtlVGVtcCA9IHJlbmRlclRlbXBlcmF0dXJlRWxlbWVudChcbiAgICAgIFwiRmVlbHMgTGlrZTpcIixcbiAgICAgIGN1cnJlbnQuZmVlbHNsaWtlX2MsXG4gICAgICBjdXJyZW50LmZlZWxzbGlrZV9mXG4gICAgKTtcbiAgICB0ZW1wZXJhdHVyZVNlY3Rpb24uYXBwZW5kQ2hpbGQoZmVlbHNMaWtlVGVtcCk7XG4gICAgcmV0dXJuIHRlbXBlcmF0dXJlU2VjdGlvbjtcblxuICAgIGZ1bmN0aW9uIHJlbmRlclRlbXBlcmF0dXJlRWxlbWVudChcbiAgICAgIHRlbXBlcmF0dXJlTGFiZWxUZXh0LFxuICAgICAgLi4udGVtcGVyYXR1cmVEYXRhXG4gICAgKSB7XG4gICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwidGVtcGVyYXR1cmVfX2xhYmVsXCIpO1xuICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSB0ZW1wZXJhdHVyZUxhYmVsVGV4dDtcblxuICAgICAgY29uc3QgdGVtcEluQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgdGVtcEluQy5jbGFzc0xpc3QuYWRkKFwidGVtcGVyYXR1cmVfX2NcIiwgXCJ0ZW1wZXJhdHVyZV9fZGF0YVwiKTtcbiAgICAgIHRlbXBJbkMudGV4dENvbnRlbnQgPSBgICR7dGVtcGVyYXR1cmVEYXRhWzBdfSBDYDtcbiAgICAgIGxhYmVsLmFwcGVuZENoaWxkKHRlbXBJbkMpO1xuXG4gICAgICBjb25zdCB0ZW1wSW5GID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICB0ZW1wSW5GLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wZXJhdHVyZV9fZlwiLCBcInRlbXBlcmF0dXJlX19kYXRhXCIpO1xuICAgICAgdGVtcEluRi50ZXh0Q29udGVudCA9IGAgJHt0ZW1wZXJhdHVyZURhdGFbMV19IEZgO1xuICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQodGVtcEluRik7XG5cbiAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJIdW1pZGl0eShodW1pZGl0eURhdGEpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcInRlbXBlcmF0dXJlX19sYWJlbFwiKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IFwiSHVtaWRpdHk6XCI7XG5cbiAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGh1bWlkaXR5LmNsYXNzTGlzdC5hZGQoXCJ0ZW1wZXJhdHVyZV9fZGF0YVwiKTtcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGAgJHtodW1pZGl0eURhdGF9JWA7XG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaHVtaWRpdHkpO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVN0eWxlVG9EYXlPck5pZ2h0KGN1cnJlbnQpIHtcbiAgY29uc3QgZGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheS1jb250YWluZXJcIik7XG4gIGNvbnN0IGlzRGF5ID0gY3VycmVudC5pc19kYXk7XG4gIGlmIChpc0RheSkge1xuICAgIGRpc3BsYXlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRheVwiKTtcbiAgICBkaXNwbGF5Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJuaWdodFwiKTtcbiAgfSBlbHNlIHtcbiAgICBkaXNwbGF5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuaWdodFwiKTtcbiAgICBkaXNwbGF5Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJkYXlcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0VGVtcFVuaXREZWZhdWx0QmFzZWRPbkFyZWEoZGF0YSkge1xuICBpZiAoZGF0YS5hcmVhVXNlc0ZhaHJlbmhlaXQpIHtcbiAgICBoaWRlQ2Vsc2l1c1RlbXBzKCk7XG4gICAgc2V0VG9nZ2xlVG9GKCk7XG4gIH0gZWxzZSB7XG4gICAgaGlkZUZhaHJlbmhlaXRUZW1wcygpO1xuICAgIHNldFRvZ2dsZVRvQygpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZUNlbHNpdXNUZW1wcygpIHtcbiAgICBoaWRlVGVtcHMoXCJjXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZUZhaHJlbmhlaXRUZW1wcygpIHtcbiAgICBoaWRlVGVtcHMoXCJmXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZVRlbXBzKHVuaXQpIHtcbiAgICBjb25zdCB0ZW1wcyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAudGVtcGVyYXR1cmVfXyR7dW5pdH1gKV07XG4gICAgdGVtcHMuZm9yRWFjaCgodGVtcCkgPT4gdGVtcC5jbGFzc0xpc3QuYWRkKFwidGVtcGVyYXR1cmUtLWhpZGRlblwiKSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRUb2dnbGVUb0MoKSB7XG4gICAgY29uc3QgY1VuaXQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuaXQtdG9nZ2xlX19DJylcbiAgICBjVW5pdC5jbGFzc0xpc3QuYWRkKCd1bml0LXRvZ2dsZS0tYWN0aXZlJylcbiAgICBjb25zdCBmVW5pdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5pdC10b2dnbGVfX0YnKVxuICAgIGZVbml0LmNsYXNzTGlzdC5yZW1vdmUoJ3VuaXQtdG9nZ2xlLS1hY3RpdmUnKVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0VG9nZ2xlVG9GKCkge1xuICAgIGNvbnN0IGNVbml0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bml0LXRvZ2dsZV9fQycpXG4gICAgY1VuaXQuY2xhc3NMaXN0LnJlbW92ZSgndW5pdC10b2dnbGUtLWFjdGl2ZScpXG4gICAgY29uc3QgZlVuaXQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuaXQtdG9nZ2xlX19GJylcbiAgICBmVW5pdC5jbGFzc0xpc3QuYWRkKCd1bml0LXRvZ2dsZS0tYWN0aXZlJylcbiAgfVxufVxuIiwiY29uc3Qgc3RhdHVzTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhdHVzLW1lc3NhZ2VcIik7XG5cbmZ1bmN0aW9uIGRpc3BsYXlTdGF0dXMobWVzc2FnZSkge1xuICBzdGF0dXNNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGF0dXMtbWVzc2FnZS0tZXJyb3JcIik7XG4gIHN0YXR1c01lc3NhZ2UuY2xhc3NMaXN0LmFkZChcInN0YXR1cy1tZXNzYWdlLS12aXNpYmxlXCIpO1xuICBzdGF0dXNNZXNzYWdlLnRleHRDb250ZW50ID0gbWVzc2FnZTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUVycm9yKGVycm9yKSB7XG4gIHN0YXR1c01lc3NhZ2UuY2xhc3NMaXN0LmFkZChcInN0YXR1cy1tZXNzYWdlLS1lcnJvclwiKTtcbiAgc3RhdHVzTWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwic3RhdHVzLW1lc3NhZ2UtLXZpc2libGVcIik7XG4gIHN0YXR1c01lc3NhZ2UudGV4dENvbnRlbnQgPSBlcnJvcjtcbn1cblxuZnVuY3Rpb24gY2xlYXJNZXNzYWdlcygpIHtcbiAgc3RhdHVzTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKFwic3RhdHVzLW1lc3NhZ2UtLWVycm9yXCIpO1xuICBzdGF0dXNNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGF0dXMtbWVzc2FnZS0tdmlzaWJsZVwiKTtcbiAgc3RhdHVzTWVzc2FnZS50ZXh0Q29udGVudCA9IFwiXCI7XG59XG5cbmV4cG9ydCB7IGRpc3BsYXlTdGF0dXMsIGRpc3BsYXlFcnJvciwgY2xlYXJNZXNzYWdlcyB9O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVVuaXRUb2dnbGVDbGljayhldmVudCkge1xuICBpZiAoaXNEaXNwbGF5RW1wdHkoKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjaGFuZ2VDbGFzc0ZvclRvZ2dsZUJ1dHRvbigpO1xuICBjaGFuZ2VDbGFzc0ZvclRlbXBlcmF0dXJlcygpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VDbGFzc0ZvclRvZ2dsZUJ1dHRvbigpIHtcbiAgICBjb25zdCBjVW5pdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5pdC10b2dnbGVfX0MnKVxuICAgIGNVbml0LmNsYXNzTGlzdC50b2dnbGUoJ3VuaXQtdG9nZ2xlLS1hY3RpdmUnKVxuICAgIGNvbnN0IGZVbml0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bml0LXRvZ2dsZV9fRicpXG4gICAgZlVuaXQuY2xhc3NMaXN0LnRvZ2dsZSgndW5pdC10b2dnbGUtLWFjdGl2ZScpXG59XG5cbmZ1bmN0aW9uIGNoYW5nZUNsYXNzRm9yVGVtcGVyYXR1cmVzKCkge1xuICBjb25zdCB0ZW1wc0luQyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRlbXBlcmF0dXJlX19jXCIpXTtcbiAgY29uc3QgdGVtcHNJbkYgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50ZW1wZXJhdHVyZV9fZlwiKV07XG4gIGNvbnN0IGFsbFRlbXBzID0gdGVtcHNJbkMuY29uY2F0KHRlbXBzSW5GKTtcbiAgYWxsVGVtcHMuZm9yRWFjaCgodGVtcCkgPT4gdGVtcC5jbGFzc0xpc3QudG9nZ2xlKFwidGVtcGVyYXR1cmUtLWhpZGRlblwiKSk7XG59XG5cbmZ1bmN0aW9uIGlzRGlzcGxheUVtcHR5KCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5LWNvbnRhaW5lclwiKS50ZXh0Q29udGVudCA9PT0gXCJcIjtcbn1cbiIsImltcG9ydCB7IHJlbmRlclBhZ2VCYXNlZE9uRGF0YSB9IGZyb20gXCIuLi9tb2R1bGVzL3JlbmRlci1kYXRhXCI7XG5jb25zdCB0ZXN0RGF0YURheVRpbWUgPSB7XG4gIGxvY2F0aW9uOiB7XG4gICAgY2l0eTogXCJMb25kb25cIixcbiAgICBzdGF0ZU9yQ291bnRyeTogXCJVbml0ZWQgS2luZ2RvbVwiLFxuICB9LFxuICBjdXJyZW50OiB7XG4gICAgY29uZGl0aW9uOiB7XG4gICAgICB0ZXh0OiBcIlN1bm55XCIsXG4gICAgICBpY29uOiBcImh0dHBzOi8vY2RuLndlYXRoZXJhcGkuY29tL3dlYXRoZXIvNjR4NjQvZGF5LzExMy5wbmdcIixcbiAgICB9LFxuICAgIHRlbXBfYzogMTIsXG4gICAgdGVtcF9mOiA1My42LFxuICAgIGlzX2RheTogMSxcbiAgICBodW1pZGl0eTogNTQsXG4gICAgZmVlbHNsaWtlX2M6IDEwLjgsXG4gICAgZmVlbHNsaWtlX2Y6IDUxLjQsXG4gIH0sXG59O1xuY29uc3QgdGVzdERhdGFOaWdodFRpbWUgPSB0ZXN0RGF0YURheVRpbWU7XG50ZXN0RGF0YU5pZ2h0VGltZS5jdXJyZW50LmlzX2RheSA9IDA7XG50ZXN0RGF0YU5pZ2h0VGltZS5jdXJyZW50LmNvbmRpdGlvbi5pY29uID1cbiAgXCJodHRwczovL2Nkbi53ZWF0aGVyYXBpLmNvbS93ZWF0aGVyLzY0eDY0L25pZ2h0LzExMy5wbmdcIjtcblxucmVuZGVyUGFnZUJhc2VkT25EYXRhKHRlc3REYXRhRGF5VGltZSk7XG4vLyByZW5kZXJQYWdlQmFzZWRPbkRhdGEodGVzdERhdGFOaWdodFRpbWUpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCIvLyBUTy1ETyByZW1vdmUgdGVzdFxuaW1wb3J0IFwiLi90ZXN0cy90ZXN0LWRhdGEtZm9yLXN0eWxpbmdcIjtcbi8vIFRPLURPIHJlbW92ZSB0ZXN0XG5cbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IHtcbiAgY2xlYXJNZXNzYWdlcyxcbiAgZGlzcGxheUVycm9yLFxuICBkaXNwbGF5U3RhdHVzLFxufSBmcm9tIFwiLi9tb2R1bGVzL3N0YXR1cy1tZXNzYWdlc1wiO1xuaW1wb3J0IHsgZ2V0Q3VycmVudEZvcmVjYXN0RnJvbVdlYXRoZXJTZXJ2ZXIgfSBmcm9tIFwiLi9tb2R1bGVzL2FwaS1mZXRjaFwiO1xuaW1wb3J0IHsgZmlsdGVyV2VhdGhlckRhdGEgfSBmcm9tIFwiLi9tb2R1bGVzL2ZpbHRlci1kYXRhXCI7XG5pbXBvcnQgeyBnZXRGb3JtVmFsdWUgfSBmcm9tIFwiLi9tb2R1bGVzL2hhbmRsZS1pbnB1dFwiO1xuaW1wb3J0IHsgcmVuZGVyUGFnZUJhc2VkT25EYXRhIH0gZnJvbSBcIi4vbW9kdWxlcy9yZW5kZXItZGF0YVwiO1xuaW1wb3J0IHsgaGFuZGxlVW5pdFRvZ2dsZUNsaWNrIH0gZnJvbSBcIi4vbW9kdWxlcy91bml0LXRvZ2dsZVwiO1xuXG4vL2luaXQgYnV0dG9uIHRoYXQgdG9nZ2xlcyBiZXR3ZWVuIGZhaHJlbmhlaXQgYW5kIGNlbHNpdXNcbmNvbnN0IHVuaXRUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVuaXQtdG9nZ2xlXCIpO1xudW5pdFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlVW5pdFRvZ2dsZUNsaWNrKTtcblxuLy9pbml0IHNlYXJjaCBmb3JtIGZ1bmN0aW9uYWxpdHlcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVTdWJtaXQpO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB2YWx1ZSA9IGdldEZvcm1WYWx1ZShldmVudCk7XG4gICAgZGlzcGxheVN0YXR1cyhcIkdhdGhlcmluZyBXZWF0aGVyIEluZm9cIik7XG4gICAgY29uc3QgcmF3RGF0YSA9IGF3YWl0IGdldEN1cnJlbnRGb3JlY2FzdEZyb21XZWF0aGVyU2VydmVyKHZhbHVlKTtcbiAgICBkaXNwbGF5U3RhdHVzKFwiRGlzcGxheWluZyBXZWF0aGVyIEluZm9cIik7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBmaWx0ZXJXZWF0aGVyRGF0YShyYXdEYXRhKTtcbiAgICByZW5kZXJQYWdlQmFzZWRPbkRhdGEod2VhdGhlckRhdGEpO1xuICAgIGNsZWFyTWVzc2FnZXMoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgZGlzcGxheUVycm9yKGVycm9yKTtcbiAgfVxuICBmb3JtLnJlc2V0KCk7XG4gIGZvcm1bJ2xvY2F0aW9uJ10uYmx1cigpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9