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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1KQUFzRDtBQUNsRyw0Q0FBNEMsaUlBQTZDO0FBQ3pGLDRDQUE0Qyx1R0FBZ0M7QUFDNUUsNENBQTRDLDJHQUFrQztBQUM5RSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxzREFBc0QsK0JBQStCLHlEQUF5RCxHQUFHLGNBQWMsOEJBQThCLHlEQUF5RCxHQUFHLEtBQUssZUFBZSxjQUFjLDJCQUEyQixHQUFHLFVBQVUsOEJBQThCLHFCQUFxQixzQkFBc0IsR0FBRyxlQUFlLGtCQUFrQiwyQkFBMkIsR0FBRyxXQUFXLGtCQUFrQixHQUFHLFlBQVksK0JBQStCLHVCQUF1QixHQUFHLGdCQUFnQix3QkFBd0IscUJBQXFCLEdBQUcsV0FBVyw0QkFBNEIscUJBQXFCLEdBQUcsb0JBQW9CLGtCQUFrQix1QkFBdUIsdUJBQXVCLEdBQUcsaUJBQWlCLHVCQUF1QixzQkFBc0IscUJBQXFCLDJCQUEyQixHQUFHLGlCQUFpQixpQ0FBaUMsbUJBQW1CLGdCQUFnQiw0QkFBNEIsd0JBQXdCLEdBQUcsOEJBQThCLGlCQUFpQixxQkFBcUIsR0FBRyxzRUFBc0Usa0JBQWtCLHNCQUFzQiwwQkFBMEIsR0FBRywwQkFBMEIsaUJBQWlCLHFCQUFxQixnQkFBZ0IsR0FBRyw4REFBOEQsa0JBQWtCLEdBQUcscUJBQXFCLDJCQUEyQixzQkFBc0IsZ0JBQWdCLHNCQUFzQix3QkFBd0IsK0JBQStCLHVCQUF1QixHQUFHLDBCQUEwQixlQUFlLEdBQUcsNEJBQTRCLHdCQUF3QixzQkFBc0IsR0FBRyxrQkFBa0Isa0JBQWtCLHdCQUF3QiwrQkFBK0IscUJBQXFCLHVCQUF1QixxQkFBcUIsaUJBQWlCLHNCQUFzQixHQUFHLHdCQUF3QiwwQkFBMEIscUJBQXFCLHNCQUFzQixlQUFlLEdBQUcsMENBQTBDLHNCQUFzQiwwQkFBMEIsa0JBQWtCLEdBQUcsc0JBQXNCLFVBQVUsNkJBQTZCLGlCQUFpQixLQUFLLFFBQVEsMEJBQTBCLGlCQUFpQixLQUFLLEdBQUcsc0JBQXNCLGlCQUFpQixnQkFBZ0IsdUJBQXVCLHVCQUF1QixvQkFBb0IsdUJBQXVCLGlCQUFpQiw4QkFBOEIsR0FBRyxnQ0FBZ0MscUJBQXFCLHVCQUF1QixHQUFHLGlDQUFpQyxrQkFBa0IsMkJBQTJCLHdCQUF3Qix1QkFBdUIsR0FBRyx3QkFBd0IsMEJBQTBCLDhCQUE4QixHQUFHLHlCQUF5QixzQkFBc0IscUJBQXFCLHVCQUF1QixHQUFHLHNCQUFzQix1QkFBdUIsdUJBQXVCLHdCQUF3QixzQkFBc0IsOEJBQThCLEdBQUcsd0JBQXdCLHNCQUFzQixlQUFlLHdCQUF3QixHQUFHLFVBQVUsZ0VBQWdFLGdDQUFnQywyQkFBMkIsR0FBRyxZQUFZLGdFQUFnRSxnQ0FBZ0MsMkJBQTJCLEdBQUcsYUFBYSxrQkFBa0IsR0FBRywyQ0FBMkMsd0JBQXdCLHNCQUFzQixLQUFLLGVBQWUsb0JBQW9CLHVCQUF1QiwyQkFBMkIsOEJBQThCLGtCQUFrQixLQUFLLG1CQUFtQixvQkFBb0IsMEJBQTBCLDRCQUE0QixtQkFBbUIsZ0NBQWdDLEtBQUssbUJBQW1CLG1CQUFtQix5QkFBeUIsS0FBSyxHQUFHLGlFQUFpRSxZQUFZLHFCQUFxQixLQUFLLEdBQUcsT0FBTyxpRkFBaUYsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxZQUFZLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxhQUFhLFlBQVksV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxZQUFZLFFBQVEsS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLGFBQWEsT0FBTyxLQUFLLFdBQVcsV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksWUFBWSxVQUFVLE1BQU0sS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxZQUFZLFlBQVksS0FBSyxLQUFLLFlBQVksV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxxQ0FBcUMsK0JBQStCLHNEQUFzRCxHQUFHLGdCQUFnQiw4QkFBOEIsNkNBQTZDLEdBQUcsNkJBQTZCLE9BQU8sZUFBZSxjQUFjLDJCQUEyQixHQUFHLFVBQVUsOEJBQThCLHFCQUFxQixzQkFBc0IsR0FBRyxlQUFlLGtCQUFrQiwyQkFBMkIsR0FBRyxXQUFXLGtCQUFrQixHQUFHLFlBQVksK0JBQStCLHVCQUF1QixhQUFhLDBCQUEwQix1QkFBdUIsS0FBSyxHQUFHLFdBQVcsNEJBQTRCLHFCQUFxQixrQkFBa0Isb0JBQW9CLHlCQUF5Qix5QkFBeUIsS0FBSyxlQUFlLHlCQUF5Qix3QkFBd0IsdUJBQXVCLDZCQUE2QixLQUFLLEdBQUcsaUJBQWlCLGlDQUFpQyxtQkFBbUIsZ0JBQWdCLDRCQUE0Qix3QkFBd0Isc0JBQXNCLG1CQUFtQix1QkFBdUIsNkJBQTZCLHNCQUFzQixzQ0FBc0MsOEJBQThCLE9BQU8sS0FBSyxrQkFBa0IsbUJBQW1CLHVCQUF1QixrQkFBa0IsNkJBQTZCLHNCQUFzQixPQUFPLEtBQUssR0FBRyxxQkFBcUIsMkJBQTJCLGtDQUFrQyxnQkFBZ0Isc0JBQXNCLHdCQUF3QiwrQkFBK0IsdUJBQXVCLGNBQWMsaUJBQWlCLEtBQUssZ0JBQWdCLDBCQUEwQixvQ0FBb0MsS0FBSyxHQUFHLGtCQUFrQixrQkFBa0Isd0JBQXdCLCtCQUErQixxQkFBcUIsdUJBQXVCLHFCQUFxQixpQkFBaUIsa0NBQWtDLGVBQWUsNEJBQTRCLHVCQUF1QixvQ0FBb0MsaUJBQWlCLEtBQUsseUJBQXlCLG9DQUFvQyw0QkFBNEIsb0JBQW9CLEtBQUssR0FBRyxzQkFBc0IsVUFBVSw2QkFBNkIsaUJBQWlCLEtBQUssUUFBUSwwQkFBMEIsaUJBQWlCLEtBQUssR0FBRyx3QkFBd0IsaUJBQWlCLGdCQUFnQix1QkFBdUIsdUJBQXVCLG9CQUFvQix1QkFBdUIsaUJBQWlCLDhCQUE4QixpQkFBaUIsdUJBQXVCLHlCQUF5QixLQUFLLGtCQUFrQixvQkFBb0IsNkJBQTZCLDBCQUEwQix5QkFBeUIsS0FBSyxTQUFTLDRCQUE0QixnQ0FBZ0MsS0FBSyxHQUFHLGtCQUFrQixjQUFjLHdCQUF3Qix1QkFBdUIseUJBQXlCLEtBQUssYUFBYSx5QkFBeUIseUJBQXlCLDBCQUEwQixvQ0FBb0MsZ0NBQWdDLEtBQUssZUFBZSxvQ0FBb0MsaUJBQWlCLDBCQUEwQixLQUFLLEdBQUcsVUFBVSx1Q0FBdUMsZ0NBQWdDLDJCQUEyQixHQUFHLFlBQVkseUNBQXlDLGdDQUFnQywyQkFBMkIsR0FBRyxhQUFhLGtCQUFrQixHQUFHLDJDQUEyQyx3QkFBd0Isc0JBQXNCLEtBQUssZUFBZSxvQkFBb0IsdUJBQXVCLDJCQUEyQiw4QkFBOEIsa0JBQWtCLGVBQWUsc0JBQXNCLDRCQUE0Qiw4QkFBOEIscUJBQXFCLGtDQUFrQyxPQUFPLGVBQWUscUJBQXFCLDJCQUEyQixPQUFPLEtBQUssNkNBQTZDLGNBQWMsdUJBQXVCLE9BQU8sS0FBSyxHQUFHLHFCQUFxQjtBQUMvK1M7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNoQjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzVCYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQTRJO0FBQzVJO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsNEhBQU87Ozs7QUFJc0Y7QUFDOUcsT0FBTyxpRUFBZSw0SEFBTyxJQUFJLG1JQUFjLEdBQUcsbUlBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxRQUFRLEtBQUssY0FBYztBQUNsRjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2RPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsSUFBSTtBQUNKO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6RU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1JPO0FBQ1A7QUFDQTs7QUFFQSxVQUFVLG9CQUFvQjtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSx1QkFBdUI7QUFDakM7QUFDQTtBQUNBLHdCQUF3QixLQUFLLElBQUksZUFBZTtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDLG9CQUFvQjtBQUNwRDs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDLG9CQUFvQjtBQUNwRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQixhQUFhO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpRUFBaUUsS0FBSztBQUN0RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXNEOzs7Ozs7Ozs7Ozs7Ozs7QUNwQi9DO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJzQjtBQUthO0FBQ3VDO0FBQ2hCO0FBQ0o7QUFDUTtBQUNBOztBQUU5RDtBQUNBO0FBQ0EscUNBQXFDLHVFQUFxQjs7QUFFMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsbUVBQVk7QUFDOUIsSUFBSSx1RUFBYTtBQUNqQiwwQkFBMEIsdUZBQW1DO0FBQzdELElBQUksdUVBQWE7QUFDakIsd0JBQXdCLHVFQUFpQjtBQUN6QyxJQUFJLDJFQUFxQjtBQUN6QixJQUFJLHVFQUFhO0FBQ2pCLElBQUk7QUFDSjtBQUNBLElBQUksc0VBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2FwaS1mZXRjaC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2ZpbHRlci1kYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvaGFuZGxlLWlucHV0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvcmVuZGVyLWRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9zdGF0dXMtbWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy91bml0LXRvZ2dsZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvUGVybWFuZW50TWFya2VyLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9VYnVudHUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltZy9kYXkuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWcvbmlnaHQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcInRpdGxlRm9udFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJkYXRhRm9udFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlYjEwMTtcXG4gIG1pbi13aWR0aDogMTAwdnc7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmZsZXgtY29sIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJ0aXRsZUZvbnRcXFwiO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udGl0bGVfX3dvcmQge1xcbiAgbWFyZ2luLWxlZnQ6IC0wLjZlbTtcXG4gIGZvbnQtc2l6ZTogMC41ZW07XFxufVxcblxcbi5mb3JtIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDAuNzdlbTtcXG59XFxuLmZvcm1fX2lucHV0LWJveCB7XFxuICB3aWR0aDogMTIuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZm9ybV9fc3VibWl0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIG1hcmdpbi10b3A6IDAuNGVtO1xcbiAgcGFkZGluZzogMCAwLjNlbTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5zZWFyY2gtYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICBwYWRkaW5nOiAwLjNlbTtcXG4gIHdpZHRoOiAyMGVtO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbn1cXG4uc2VhcmNoLWJhcl9fc3VibWl0LWJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG4uc2VhcmNoLWJhcl9fc3VibWl0LWJ1dHRvbjpmb2N1cywgLnNlYXJjaC1iYXJfX3N1Ym1pdC1idXR0b246aG92ZXIge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHRyYW5zaXRpb246IDMwMG1zO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG4uc2VhcmNoLWJhcl9faW5wdXQtYm94IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnNlYXJjaC1iYXJfX2lucHV0LWJveDpmb2N1cywgLnNlYXJjaC1iYXJfX2lucHV0LWJveDpob3ZlciB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uc3RhdHVzLW1lc3NhZ2Uge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcXG4gIHRyYW5zaXRpb246IDMwMG1zO1xcbiAgaGVpZ2h0OiAxZW07XFxuICBtYXJnaW4tdG9wOiAwLjRlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBmb250LWZhbWlseTogXFxcInRpdGxlRm9udFxcXCI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5zdGF0dXMtbWVzc2FnZS0tZXJyb3Ige1xcbiAgY29sb3I6IHJlZDtcXG59XFxuLnN0YXR1cy1tZXNzYWdlLS12aXNpYmxlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB0cmFuc2l0aW9uOiAzMDBtcztcXG59XFxuXFxuLnVuaXQtdG9nZ2xlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJ0aXRsZUZvbnRcXFwiO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIG1hcmdpbi1sZWZ0OiAwLjZlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiAzMDBtcztcXG59XFxuLnVuaXQtdG9nZ2xlLS1hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHRyYW5zaXRpb246IDMwMG1zO1xcbiAgY29sb3I6IHJlZDtcXG59XFxuLnVuaXQtdG9nZ2xlOmZvY3VzLCAudW5pdC10b2dnbGU6aG92ZXIge1xcbiAgdHJhbnNpdGlvbjogMzAwbXM7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHBvcEluIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG4uZGlzcGxheS1jb250YWluZXIge1xcbiAgcGFkZGluZzogMWVtO1xcbiAgd2lkdGg6IDE4ZW07XFxuICBtaW4taGVpZ2h0OiAxNC41ZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBtYXJnaW4tdG9wOiAxZW07XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogXFxcImRhdGFGb250XFxcIjtcXG59XFxuLmRpc3BsYXktY29udGFpbmVyX19sb2NhdGlvbiB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZGlzcGxheS1jb250YWluZXJfX2NvbmRpdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcbi5kaXNwbGF5LWNvbnRhaW5lciAqIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBwb3BJbjtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogODAwbXM7XFxufVxcblxcbi50ZW1wZXJhdHVyZV9fbGFiZWwge1xcbiAgbWFyZ2luLXRvcDogMC4yZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGVtcGVyYXR1cmVfX2RhdGEge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHRyYW5zaXRpb246IDMwMG1zO1xcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogbm9uZTtcXG59XFxuLnRlbXBlcmF0dXJlLS1oaWRkZW4ge1xcbiAgdHJhbnNpdGlvbjogMzAwbXM7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxuXFxuLmRheSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLm5pZ2h0IHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA0MjBweCkge1xcbiAgLmRpc3BsYXktY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAyLjVlbSAwO1xcbiAgfVxcblxcbiAgLmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IDAuM2VtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAuZm9vdGVyX19saW5rIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiZGF0YUZvbnRcXFwiO1xcbiAgfVxcbiAgLmZvb3Rlcl9faWNvbiB7XFxuICAgIHdpZHRoOiAxLjVlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuMmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogNDIwcHgpIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcXG4gIC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogM2VtO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHdCQUFBO0VBQ0EsNENBQUE7QUFDRjtBQUVBO0VBQ0UsdUJBQUE7RUFDQSw0Q0FBQTtBQUFGO0FBS0E7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBSEY7O0FBTUE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtBQUhGOztBQU1BO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtBQUhGO0FBSUU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBRko7O0FBTUE7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0FBSEY7QUFJRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRko7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBRko7O0FBTUE7RUFDRSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUhGO0FBSUU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFGSjtBQUdJO0VBRUUsYUFBQTtFQUNBLGlCQTVEYTtFQTZEYixxQkFBQTtBQUZOO0FBS0U7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBSEo7QUFJSTtFQUVFLGFBQUE7QUFITjs7QUFRQTtFQUNFLHNCQUFBO0VBQ0EsaUJBN0VpQjtFQThFakIsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0FBTEY7QUFNRTtFQUNFLFVBQUE7QUFKSjtBQU1FO0VBQ0UsbUJBQUE7RUFDQSxpQkF4RmU7QUFvRm5COztBQVFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBcEdpQjtBQStGbkI7QUFNRTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkF4R2U7RUF5R2YsVUFBQTtBQUpKO0FBTUU7RUFFRSxpQkE3R2U7RUE4R2YscUJBQUE7RUFDQSxhQUFBO0FBTEo7O0FBU0E7RUFDRTtJQUNFLHNCQUFBO0lBQ0EsVUFBQTtFQU5GO0VBUUE7SUFDRSxtQkFBQTtJQUNBLFVBQUE7RUFORjtBQUNGO0FBU0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFQRjtBQVFFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQU5KO0FBUUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBTko7QUFRRTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7QUFOSjs7QUFXRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVJKO0FBVUU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFqS2U7RUFrS2YseUJBQUE7QUFSSjtBQVVFO0VBQ0UsaUJBcktlO0VBc0tmLFVBQUE7RUFDQSxtQkFBQTtBQVJKOztBQVlBO0VBQ0UsbURBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FBVEY7O0FBWUE7RUFDRSxtREFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7QUFURjs7QUFZQTtFQUNFLGFBQUE7QUFURjs7QUFZQTtFQUNFO0lBQ0UsZUFBQTtFQVRGOztFQVlBO0lBQ0UsYUFBQTtJQUNBLGdCQUFBO0lBQ0Esb0JBQUE7SUFDQSx1QkFBQTtJQUNBLFdBQUE7RUFURjtFQVVFO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EscUJBQUE7SUFDQSxZQUFBO0lBQ0EsdUJBQUE7RUFSSjtFQVVFO0lBQ0UsWUFBQTtJQUNBLGtCQUFBO0VBUko7QUFDRjtBQVdFO0VBQ0U7SUFDRSxjQUFBO0VBVEo7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwidGl0bGVGb250XFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL1Blcm1hbmVudE1hcmtlci1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiZGF0YUZvbnRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvVWJ1bnR1LVJlZ3VsYXIudHRmXFxcIik7XFxufVxcblxcbiR0cmFuc2l0aW9uLWRlbGF5OiAzMDBtcztcXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWIxMDE7XFxuICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5mbGV4LWNvbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwidGl0bGVGb250XFxcIjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICZfX3dvcmQge1xcbiAgICBtYXJnaW4tbGVmdDogLTAuNmVtO1xcbiAgICBmb250LXNpemU6IDAuNWVtO1xcbiAgfVxcbn1cXG5cXG4uZm9ybSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCAwLjc3ZW07XFxuICAmX19pbnB1dC1ib3gge1xcbiAgICB3aWR0aDogMTIuNWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG4gICZfX3N1Ym1pdCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgbWFyZ2luLXRvcDogMC40ZW07XFxuICAgIHBhZGRpbmc6IDAgMC4zZW07XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICB9XFxufVxcblxcbi5zZWFyY2gtYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICBwYWRkaW5nOiAwLjNlbTtcXG4gIHdpZHRoOiAyMGVtO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgJl9fc3VibWl0LWJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgJjpmb2N1cyxcXG4gICAgJjpob3ZlciB7XFxuICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi1kZWxheTtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIH1cXG4gIH1cXG4gICZfX2lucHV0LWJveCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgICY6Zm9jdXMsXFxuICAgICY6aG92ZXIge1xcbiAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnN0YXR1cy1tZXNzYWdlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC43NSk7XFxuICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi1kZWxheTtcXG4gIGhlaWdodDogMWVtO1xcbiAgbWFyZ2luLXRvcDogMC40ZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJ0aXRsZUZvbnRcXFwiO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgJi0tZXJyb3Ige1xcbiAgICBjb2xvcjogcmVkO1xcbiAgfVxcbiAgJi0tdmlzaWJsZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uLWRlbGF5O1xcbiAgfVxcbn1cXG5cXG4udW5pdC10b2dnbGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcInRpdGxlRm9udFxcXCI7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNmVtO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uLWRlbGF5O1xcbiAgJi0tYWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi1kZWxheTtcXG4gICAgY29sb3I6IHJlZDtcXG4gIH1cXG4gICY6Zm9jdXMsXFxuICAmOmhvdmVyIHtcXG4gICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb24tZGVsYXk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBwb3BJbiB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuLmRpc3BsYXktY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIHdpZHRoOiAxOGVtO1xcbiAgbWluLWhlaWdodDogMTQuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJkYXRhRm9udFxcXCI7XFxuICAmX19sb2NhdGlvbiB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG4gICZfX2NvbmRpdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gIH1cXG4gICYgKiB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBwb3BJbjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4MDBtcztcXG4gIH1cXG59XFxuXFxuLnRlbXBlcmF0dXJlIHtcXG4gICZfX2xhYmVsIHtcXG4gICAgbWFyZ2luLXRvcDogMC4yZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG4gICZfX2RhdGEge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb24tZGVsYXk7XFxuICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IG5vbmU7XFxuICB9XFxuICAmLS1oaWRkZW4ge1xcbiAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi1kZWxheTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIH1cXG59XFxuXFxuLmRheSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vaW1nL2RheS5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5uaWdodCB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vaW1nL25pZ2h0LmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogNDIwcHgpIHtcXG4gIC5kaXNwbGF5LWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMi41ZW0gMDtcXG4gIH1cXG5cXG4gIC5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjNlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAmX19saW5rIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICBmb250LWZhbWlseTogXFxcImRhdGFGb250XFxcIjtcXG4gICAgfVxcbiAgICAmX19pY29uIHtcXG4gICAgICB3aWR0aDogMS41ZW07XFxuICAgICAgbWFyZ2luLWxlZnQ6IDAuMmVtO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcXG4gICAgLnRpdGxlIHtcXG4gICAgICBmb250LXNpemU6IDNlbTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IEFQSV9LRVkgPSBcIjliY2IxYzYxOWExZDRlNTJiNWYxMDU4MTgyMjE0MDNcIjtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudEZvcmVjYXN0RnJvbVdlYXRoZXJTZXJ2ZXIocXVlcnlMb2NhdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PSR7QVBJX0tFWX0mcT0ke3F1ZXJ5TG9jYXRpb259JmRheXM9NyZhcWk9bm9gXG4gICAgKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoXCJOZXR3b3JrRXJyb3JcIikpIHtcbiAgICAgIHRocm93IFwiVW5hYmxlIHRvIGNvbm5lY3QgdG8gc2VydmVyLlwiO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQge2dldEN1cnJlbnRGb3JlY2FzdEZyb21XZWF0aGVyU2VydmVyfTsiLCJleHBvcnQgZnVuY3Rpb24gZmlsdGVyV2VhdGhlckRhdGEod2VhdGhlckRhdGEpIHtcbiAgaWYgKHdlYXRoZXJEYXRhLmVycm9yKSB7XG4gICAgdGhyb3cgd2VhdGhlckRhdGEuZXJyb3IubWVzc2FnZTtcbiAgfVxuICBjb25zdCBsb2NhdGlvbiA9IGZpbHRlckxvY2F0aW9uKHdlYXRoZXJEYXRhLmxvY2F0aW9uKTtcbiAgY29uc3QgY3VycmVudCA9IGZpbHRlckN1cnJlbnQod2VhdGhlckRhdGEuY3VycmVudCk7XG4gIGNvbnN0IGFyZWFVc2VzRmFocmVuaGVpdCA9IGRvZXNBcmVhVXNlRmFocmVuaGVpdChcbiAgICB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5jb3VudHJ5XG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBsb2NhdGlvbixcbiAgICBjdXJyZW50LFxuICAgIGFyZWFVc2VzRmFocmVuaGVpdCxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyTG9jYXRpb24obG9jYXRpb24pIHtcbiAgY29uc3QgY2l0eSA9IGxvY2F0aW9uLm5hbWU7XG4gIGlmIChsb2NhdGlvbi5jb3VudHJ5LmluY2x1ZGVzKFwiVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhXCIpKSB7XG4gICAgY29uc3Qgc3RhdGVPckNvdW50cnkgPSBsb2NhdGlvbi5yZWdpb247XG4gICAgcmV0dXJuIHsgY2l0eSwgc3RhdGVPckNvdW50cnkgfTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzdGF0ZU9yQ291bnRyeSA9IGxvY2F0aW9uLmNvdW50cnk7XG4gICAgcmV0dXJuIHsgY2l0eSwgc3RhdGVPckNvdW50cnkgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaWx0ZXJDdXJyZW50KGN1cnJlbnQpIHtcbiAgY29uc3QgY29uZGl0aW9uID0gZmlsdGVyQ29uZGl0aW9uKGN1cnJlbnQuY29uZGl0aW9uKTtcbiAgY29uc3QgdGVtcF9jID0gY3VycmVudC50ZW1wX2M7XG4gIGNvbnN0IHRlbXBfZiA9IGN1cnJlbnQudGVtcF9mO1xuICBjb25zdCBpc19kYXkgPSBjdXJyZW50LmlzX2RheTtcbiAgY29uc3QgaHVtaWRpdHkgPSBjdXJyZW50Lmh1bWlkaXR5O1xuICBjb25zdCBmZWVsc2xpa2VfYyA9IGN1cnJlbnQuZmVlbHNsaWtlX2M7XG4gIGNvbnN0IGZlZWxzbGlrZV9mID0gY3VycmVudC5mZWVsc2xpa2VfZjtcblxuICByZXR1cm4ge1xuICAgIGNvbmRpdGlvbixcbiAgICB0ZW1wX2MsXG4gICAgdGVtcF9mLFxuICAgIGlzX2RheSxcbiAgICBodW1pZGl0eSxcbiAgICBmZWVsc2xpa2VfYyxcbiAgICBmZWVsc2xpa2VfZixcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyQ29uZGl0aW9uKGNvbmRpdGlvbikge1xuICBjb25zdCB0ZXh0ID0gY29uZGl0aW9uLnRleHQ7XG4gIGNvbnN0IGljb24gPSBcImh0dHBzOlwiICsgY29uZGl0aW9uLmljb247XG4gIHJldHVybiB7IHRleHQsIGljb24gfTtcbn1cblxuZnVuY3Rpb24gZG9lc0FyZWFVc2VGYWhyZW5oZWl0KGFyZWEpIHtcbiAgY29uc3QgYXJlYXNUaGF0VXNlRmFocmVuaGVpdCA9IFtcbiAgICBcIlBhbGF1XCIsXG4gICAgXCJCZXJtdWRhXCIsXG4gICAgXCJCZWxpemVcIixcbiAgICBcIlR1cmtzIGFuZCBDYWljb3MgSXNsYW5kc1wiLFxuICAgIFwiTGliZXJpYVwiLFxuICAgIFwiQmFoYW1hc1wiLFxuICAgIFwiU2FpbnQgS2l0dHMgYW5kIE5ldmlzXCIsXG4gICAgXCJNb250c2VycmF0XCIsXG4gICAgXCJDYXltYW4gSXNsYW5kc1wiLFxuICAgIFwiQW50aWd1YSBhbmQgQmFyYnVkYVwiLFxuICAgIFwiVmlyZ2luIElzbGFuZHNcIixcbiAgICBcIk1pY3JvbmVzaWFcIixcbiAgICBcIlVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYVwiLFxuICAgIFwiTWFyc2hhbGwgSXNsYW5kc1wiLFxuICBdO1xuXG4gIHJldHVybiBhcmVhc1RoYXRVc2VGYWhyZW5oZWl0LmluY2x1ZGVzKGFyZWEpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldEZvcm1WYWx1ZShldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldFtcImxvY2F0aW9uXCJdLnZhbHVlO1xuICBpZiAodmFsdWUgPT09IFwiXCIpIHtcbiAgICB0aHJvdyBcIlBsZWFzZSBlbnRlciB5b3VyIGNpdHkgYW5kIHN0YXRlL2NvdW50cnkuXCI7XG4gIH1cblxuICByZXR1cm4gdmFsdWUudHJpbSgpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclBhZ2VCYXNlZE9uRGF0YShkYXRhKSB7XG4gIGNvbnN0IGRpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXktY29udGFpbmVyXCIpO1xuICBjbGVhckRpc3BsYXkoZGlzcGxheUNvbnRhaW5lcik7XG5cbiAgY29uc3QgeyBsb2NhdGlvbiwgY3VycmVudCB9ID0gZGF0YTtcbiAgY29uc3QgbG9jYXRpb25EaXNwbGF5ID0gcmVuZGVyTG9jYXRpb25OYW1lKGxvY2F0aW9uKTtcbiAgY29uc3QgY3VycmVudFdlYXRoZXJEaXNwbGF5ID0gcmVuZGVyQ3VycmVudFdlYXRoZXIoY3VycmVudCk7XG5cbiAgZGlzcGxheUNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbkRpc3BsYXkpO1xuICBkaXNwbGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRXZWF0aGVyRGlzcGxheSk7XG5cbiAgY2hhbmdlU3R5bGVUb0RheU9yTmlnaHQoY3VycmVudCwgZGlzcGxheUNvbnRhaW5lcik7XG4gIHNldFRlbXBVbml0RGVmYXVsdEJhc2VkT25BcmVhKGRhdGEpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJMb2NhdGlvbk5hbWUobG9jYXRpb24pIHtcbiAgY29uc3QgeyBjaXR5LCBzdGF0ZU9yQ291bnRyeSB9ID0gbG9jYXRpb247XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LWNvbnRhaW5lcl9fbG9jYXRpb25cIik7XG4gIHNwYW4udGV4dENvbnRlbnQgPSBgJHtjaXR5fSwgJHtzdGF0ZU9yQ291bnRyeX1gO1xuICByZXR1cm4gc3Bhbjtcbn1cblxuZnVuY3Rpb24gY2xlYXJEaXNwbGF5KGRpc3BsYXkpIHtcbiAgZGlzcGxheS50ZXh0Q29udGVudCA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckN1cnJlbnRXZWF0aGVyKGN1cnJlbnQpIHtcbiAgY29uc3QgY3VycmVudFdlYXRoZXJEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICBjb25zdCBjb25kaXRpb25EaXNwbGF5ID0gcmVuZGVyQ29uZGl0aW9uKGN1cnJlbnQuY29uZGl0aW9uKTtcbiAgY29uc3QgdGVtcGVyYXR1cmVEaXNwbGF5ID0gcmVuZGVyVGVtcGVyYXR1cmVzKGN1cnJlbnQpO1xuICBjb25zdCBodW1pZGl0eURpc3BsYXkgPSByZW5kZXJIdW1pZGl0eShjdXJyZW50Lmh1bWlkaXR5KTtcblxuICBjdXJyZW50V2VhdGhlckRpc3BsYXkuYXBwZW5kQ2hpbGQoY29uZGl0aW9uRGlzcGxheSk7XG4gIGN1cnJlbnRXZWF0aGVyRGlzcGxheS5hcHBlbmRDaGlsZCh0ZW1wZXJhdHVyZURpc3BsYXkpO1xuICBjdXJyZW50V2VhdGhlckRpc3BsYXkuYXBwZW5kQ2hpbGQoaHVtaWRpdHlEaXNwbGF5KTtcblxuICByZXR1cm4gY3VycmVudFdlYXRoZXJEaXNwbGF5O1xuXG4gIGZ1bmN0aW9uIHJlbmRlckNvbmRpdGlvbihjb25kaXRpb24pIHtcbiAgICBjb25zdCBjb25kaXRpb25GcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uZGl0aW9uRnJhZ21lbnQuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktY29udGFpbmVyX19jb25kaXRpb25cIik7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaWNvbi5zcmMgPSBjb25kaXRpb24uaWNvbjtcbiAgICBpY29uLmFsdCA9IGAke2NvbmRpdGlvbi50ZXh0fSBpY29uYDtcbiAgICBjb25zdCBjb25kaXRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25kaXRpb25UZXh0LnRleHRDb250ZW50ID0gY29uZGl0aW9uLnRleHQ7XG4gICAgY29uZGl0aW9uRnJhZ21lbnQuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgY29uZGl0aW9uRnJhZ21lbnQuYXBwZW5kQ2hpbGQoY29uZGl0aW9uVGV4dCk7XG4gICAgcmV0dXJuIGNvbmRpdGlvbkZyYWdtZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyVGVtcGVyYXR1cmVzKGN1cnJlbnQpIHtcbiAgICBjb25zdCB0ZW1wZXJhdHVyZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRlbXBlcmF0dXJlU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwidGVtcGVyYXR1cmVcIik7XG5cbiAgICBjb25zdCBjdXJyZW50VGVtcCA9IHJlbmRlclRlbXBlcmF0dXJlRWxlbWVudChcbiAgICAgIFwiQ3VycmVudDpcIixcbiAgICAgIGN1cnJlbnQudGVtcF9jLFxuICAgICAgY3VycmVudC50ZW1wX2ZcbiAgICApO1xuICAgIHRlbXBlcmF0dXJlU2VjdGlvbi5hcHBlbmRDaGlsZChjdXJyZW50VGVtcCk7XG5cbiAgICBjb25zdCBmZWVsc0xpa2VUZW1wID0gcmVuZGVyVGVtcGVyYXR1cmVFbGVtZW50KFxuICAgICAgXCJGZWVscyBMaWtlOlwiLFxuICAgICAgY3VycmVudC5mZWVsc2xpa2VfYyxcbiAgICAgIGN1cnJlbnQuZmVlbHNsaWtlX2ZcbiAgICApO1xuICAgIHRlbXBlcmF0dXJlU2VjdGlvbi5hcHBlbmRDaGlsZChmZWVsc0xpa2VUZW1wKTtcbiAgICByZXR1cm4gdGVtcGVyYXR1cmVTZWN0aW9uO1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyVGVtcGVyYXR1cmVFbGVtZW50KFxuICAgICAgdGVtcGVyYXR1cmVMYWJlbFRleHQsXG4gICAgICAuLi50ZW1wZXJhdHVyZURhdGFcbiAgICApIHtcbiAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wZXJhdHVyZV9fbGFiZWxcIik7XG4gICAgICBsYWJlbC50ZXh0Q29udGVudCA9IHRlbXBlcmF0dXJlTGFiZWxUZXh0O1xuXG4gICAgICBjb25zdCB0ZW1wSW5DID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICB0ZW1wSW5DLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wZXJhdHVyZV9fY1wiLCBcInRlbXBlcmF0dXJlX19kYXRhXCIpO1xuICAgICAgdGVtcEluQy50ZXh0Q29udGVudCA9IGAgJHt0ZW1wZXJhdHVyZURhdGFbMF19IENgO1xuICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQodGVtcEluQyk7XG5cbiAgICAgIGNvbnN0IHRlbXBJbkYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHRlbXBJbkYuY2xhc3NMaXN0LmFkZChcInRlbXBlcmF0dXJlX19mXCIsIFwidGVtcGVyYXR1cmVfX2RhdGFcIik7XG4gICAgICB0ZW1wSW5GLnRleHRDb250ZW50ID0gYCAke3RlbXBlcmF0dXJlRGF0YVsxXX0gRmA7XG4gICAgICBsYWJlbC5hcHBlbmRDaGlsZCh0ZW1wSW5GKTtcblxuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckh1bWlkaXR5KGh1bWlkaXR5RGF0YSkge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwidGVtcGVyYXR1cmVfX2xhYmVsXCIpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJIdW1pZGl0eTpcIjtcblxuICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgaHVtaWRpdHkuY2xhc3NMaXN0LmFkZChcInRlbXBlcmF0dXJlX19kYXRhXCIpO1xuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCAke2h1bWlkaXR5RGF0YX0lYDtcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChodW1pZGl0eSk7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlU3R5bGVUb0RheU9yTmlnaHQoY3VycmVudCkge1xuICBjb25zdCBkaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5LWNvbnRhaW5lclwiKTtcbiAgY29uc3QgaXNEYXkgPSBjdXJyZW50LmlzX2RheTtcbiAgaWYgKGlzRGF5KSB7XG4gICAgZGlzcGxheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGF5XCIpO1xuICAgIGRpc3BsYXlDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcIm5pZ2h0XCIpO1xuICB9IGVsc2Uge1xuICAgIGRpc3BsYXlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5pZ2h0XCIpO1xuICAgIGRpc3BsYXlDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImRheVwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRUZW1wVW5pdERlZmF1bHRCYXNlZE9uQXJlYShkYXRhKSB7XG4gIGlmIChkYXRhLmFyZWFVc2VzRmFocmVuaGVpdCkge1xuICAgIGhpZGVDZWxzaXVzVGVtcHMoKTtcbiAgICBzZXRUb2dnbGVUb0YoKTtcbiAgfSBlbHNlIHtcbiAgICBoaWRlRmFocmVuaGVpdFRlbXBzKCk7XG4gICAgc2V0VG9nZ2xlVG9DKCk7XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlQ2Vsc2l1c1RlbXBzKCkge1xuICAgIGhpZGVUZW1wcyhcImNcIik7XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlRmFocmVuaGVpdFRlbXBzKCkge1xuICAgIGhpZGVUZW1wcyhcImZcIik7XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlVGVtcHModW5pdCkge1xuICAgIGNvbnN0IHRlbXBzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC50ZW1wZXJhdHVyZV9fJHt1bml0fWApXTtcbiAgICB0ZW1wcy5mb3JFYWNoKCh0ZW1wKSA9PiB0ZW1wLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wZXJhdHVyZS0taGlkZGVuXCIpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFRvZ2dsZVRvQygpIHtcbiAgICBjb25zdCBjVW5pdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5pdC10b2dnbGVfX0MnKVxuICAgIGNVbml0LmNsYXNzTGlzdC5hZGQoJ3VuaXQtdG9nZ2xlLS1hY3RpdmUnKVxuICAgIGNvbnN0IGZVbml0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bml0LXRvZ2dsZV9fRicpXG4gICAgZlVuaXQuY2xhc3NMaXN0LnJlbW92ZSgndW5pdC10b2dnbGUtLWFjdGl2ZScpXG4gIH1cblxuICBmdW5jdGlvbiBzZXRUb2dnbGVUb0YoKSB7XG4gICAgY29uc3QgY1VuaXQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuaXQtdG9nZ2xlX19DJylcbiAgICBjVW5pdC5jbGFzc0xpc3QucmVtb3ZlKCd1bml0LXRvZ2dsZS0tYWN0aXZlJylcbiAgICBjb25zdCBmVW5pdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5pdC10b2dnbGVfX0YnKVxuICAgIGZVbml0LmNsYXNzTGlzdC5hZGQoJ3VuaXQtdG9nZ2xlLS1hY3RpdmUnKVxuICB9XG59XG4iLCJjb25zdCBzdGF0dXNNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGF0dXMtbWVzc2FnZVwiKTtcblxuZnVuY3Rpb24gZGlzcGxheVN0YXR1cyhtZXNzYWdlKSB7XG4gIHN0YXR1c01lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZShcInN0YXR1cy1tZXNzYWdlLS1lcnJvclwiKTtcbiAgc3RhdHVzTWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwic3RhdHVzLW1lc3NhZ2UtLXZpc2libGVcIik7XG4gIHN0YXR1c01lc3NhZ2UudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5RXJyb3IoZXJyb3IpIHtcbiAgc3RhdHVzTWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwic3RhdHVzLW1lc3NhZ2UtLWVycm9yXCIpO1xuICBzdGF0dXNNZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJzdGF0dXMtbWVzc2FnZS0tdmlzaWJsZVwiKTtcbiAgc3RhdHVzTWVzc2FnZS50ZXh0Q29udGVudCA9IGVycm9yO1xufVxuXG5mdW5jdGlvbiBjbGVhck1lc3NhZ2VzKCkge1xuICBzdGF0dXNNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGF0dXMtbWVzc2FnZS0tZXJyb3JcIik7XG4gIHN0YXR1c01lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZShcInN0YXR1cy1tZXNzYWdlLS12aXNpYmxlXCIpO1xuICBzdGF0dXNNZXNzYWdlLnRleHRDb250ZW50ID0gXCJcIjtcbn1cblxuZXhwb3J0IHsgZGlzcGxheVN0YXR1cywgZGlzcGxheUVycm9yLCBjbGVhck1lc3NhZ2VzIH07XG4iLCJleHBvcnQgZnVuY3Rpb24gaGFuZGxlVW5pdFRvZ2dsZUNsaWNrKGV2ZW50KSB7XG4gIGlmIChpc0Rpc3BsYXlFbXB0eSgpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNoYW5nZUNsYXNzRm9yVG9nZ2xlQnV0dG9uKCk7XG4gIGNoYW5nZUNsYXNzRm9yVGVtcGVyYXR1cmVzKCk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUNsYXNzRm9yVG9nZ2xlQnV0dG9uKCkge1xuICAgIGNvbnN0IGNVbml0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bml0LXRvZ2dsZV9fQycpXG4gICAgY1VuaXQuY2xhc3NMaXN0LnRvZ2dsZSgndW5pdC10b2dnbGUtLWFjdGl2ZScpXG4gICAgY29uc3QgZlVuaXQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuaXQtdG9nZ2xlX19GJylcbiAgICBmVW5pdC5jbGFzc0xpc3QudG9nZ2xlKCd1bml0LXRvZ2dsZS0tYWN0aXZlJylcbn1cblxuZnVuY3Rpb24gY2hhbmdlQ2xhc3NGb3JUZW1wZXJhdHVyZXMoKSB7XG4gIGNvbnN0IHRlbXBzSW5DID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGVtcGVyYXR1cmVfX2NcIildO1xuICBjb25zdCB0ZW1wc0luRiA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRlbXBlcmF0dXJlX19mXCIpXTtcbiAgY29uc3QgYWxsVGVtcHMgPSB0ZW1wc0luQy5jb25jYXQodGVtcHNJbkYpO1xuICBhbGxUZW1wcy5mb3JFYWNoKCh0ZW1wKSA9PiB0ZW1wLmNsYXNzTGlzdC50b2dnbGUoXCJ0ZW1wZXJhdHVyZS0taGlkZGVuXCIpKTtcbn1cblxuZnVuY3Rpb24gaXNEaXNwbGF5RW1wdHkoKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXktY29udGFpbmVyXCIpLnRleHRDb250ZW50ID09PSBcIlwiO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcbmltcG9ydCB7XG4gIGNsZWFyTWVzc2FnZXMsXG4gIGRpc3BsYXlFcnJvcixcbiAgZGlzcGxheVN0YXR1cyxcbn0gZnJvbSBcIi4vbW9kdWxlcy9zdGF0dXMtbWVzc2FnZXNcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRGb3JlY2FzdEZyb21XZWF0aGVyU2VydmVyIH0gZnJvbSBcIi4vbW9kdWxlcy9hcGktZmV0Y2hcIjtcbmltcG9ydCB7IGZpbHRlcldlYXRoZXJEYXRhIH0gZnJvbSBcIi4vbW9kdWxlcy9maWx0ZXItZGF0YVwiO1xuaW1wb3J0IHsgZ2V0Rm9ybVZhbHVlIH0gZnJvbSBcIi4vbW9kdWxlcy9oYW5kbGUtaW5wdXRcIjtcbmltcG9ydCB7IHJlbmRlclBhZ2VCYXNlZE9uRGF0YSB9IGZyb20gXCIuL21vZHVsZXMvcmVuZGVyLWRhdGFcIjtcbmltcG9ydCB7IGhhbmRsZVVuaXRUb2dnbGVDbGljayB9IGZyb20gXCIuL21vZHVsZXMvdW5pdC10b2dnbGVcIjtcblxuLy9pbml0IGJ1dHRvbiB0aGF0IHRvZ2dsZXMgYmV0d2VlbiBmYWhyZW5oZWl0IGFuZCBjZWxzaXVzXG5jb25zdCB1bml0VG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51bml0LXRvZ2dsZVwiKTtcbnVuaXRUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVVuaXRUb2dnbGVDbGljayk7XG5cbi8vaW5pdCBzZWFyY2ggZm9ybSBmdW5jdGlvbmFsaXR5XG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlU3VibWl0KTtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdmFsdWUgPSBnZXRGb3JtVmFsdWUoZXZlbnQpO1xuICAgIGRpc3BsYXlTdGF0dXMoXCJHYXRoZXJpbmcgV2VhdGhlciBJbmZvXCIpO1xuICAgIGNvbnN0IHJhd0RhdGEgPSBhd2FpdCBnZXRDdXJyZW50Rm9yZWNhc3RGcm9tV2VhdGhlclNlcnZlcih2YWx1ZSk7XG4gICAgZGlzcGxheVN0YXR1cyhcIkRpc3BsYXlpbmcgV2VhdGhlciBJbmZvXCIpO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gZmlsdGVyV2VhdGhlckRhdGEocmF3RGF0YSk7XG4gICAgcmVuZGVyUGFnZUJhc2VkT25EYXRhKHdlYXRoZXJEYXRhKTtcbiAgICBjbGVhck1lc3NhZ2VzKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIGRpc3BsYXlFcnJvcihlcnJvcik7XG4gIH1cbiAgZm9ybS5yZXNldCgpO1xuICBmb3JtWydsb2NhdGlvbiddLmJsdXIoKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==