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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/day.jpg */ "./src/img/day.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/night.jpg */ "./src/img/night.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  white-space: nowrap;\n  font-family: Arial, Helvetica, sans-serif;\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.flex-col {\n  display: flex;\n  flex-direction: column;\n}\n\n.flex {\n  display: flex;\n}\n\n.title {\n  background-color: white;\n  text-align: center;\n  padding: 0.5em;\n}\n\n.form-container {\n  padding: 0.77em;\n  background-color: burlywood;\n}\n\n.form {\n  justify-content: space-between;\n}\n.form__input-box {\n  width: 12.5em;\n  border-radius: 5px;\n  text-align: center;\n}\n.form__submit {\n  background-color: burlywood;\n  border-radius: 6px;\n  margin-top: 0.4em;\n  padding: 0 0.3em;\n  align-self: flex-start;\n}\n\n.status-message {\n  transform: scale(0.75);\n  transition: 700ms;\n  height: 1em;\n  margin-top: 0.4em;\n  white-space: nowrap;\n}\n.status-message--error {\n  color: #db5555;\n}\n.status-message--visible {\n  transform: scale(1);\n  transition: 700ms;\n}\n\n.unit-toggle {\n  align-items: center;\n}\n.unit-toggle__letter {\n  margin: 0 0.38em;\n}\n.unit-toggle__letter--C {\n  color: #0073db;\n}\n.unit-toggle__letter--F {\n  color: #db5555;\n}\n.unit-toggle__background {\n  align-items: center;\n  justify-content: center;\n  background-color: #db5555;\n  border-radius: 25px;\n  width: 2.1rem;\n  border: solid #1a1a1a 1px;\n  transition: 300ms;\n}\n.unit-toggle__background--C {\n  transition: 300ms;\n  background-color: #0073db;\n}\n.unit-toggle__button {\n  position: relative;\n  left: -20%;\n  padding: 7px;\n  background-color: #1a1a1a;\n  border-radius: 50%;\n  transition: 300ms;\n}\n.unit-toggle__button--C {\n  transition: 300ms;\n  left: 20%;\n}\n\n.display-container {\n  padding: 1em;\n  min-width: 80%;\n  width: 50%;\n  border-radius: 1em;\n  margin-top: 2.5em;\n  align-self: center;\n  color: #fafafa;\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n}\n.display-container__location {\n  font-weight: 600;\n  text-align: center;\n}\n.display-container__condition {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 1em;\n}\n\n.temperature__label {\n  margin-top: 0.2em;\n  font-weight: 600;\n  position: relative;\n}\n.temperature__data {\n  position: absolute;\n  margin-left: 0.5em;\n  font-weight: normal;\n  transition: 700ms;\n}\n.temperature--hidden {\n  transition: 700ms;\n  opacity: 0;\n  transform: scale(0);\n}\n\n.day {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center;\n  background-size: cover;\n}\n\n.night {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-position: center;\n  background-size: cover;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAOA;EACE,mBAAA;EACA,yCAAA;EACA,UAAA;EACA,SAAA;EACA,sBAAA;AANF;;AASA;EACE,aAAA;EACA,sBAAA;AANF;;AASA;EACE,aAAA;AANF;;AASA;EACE,uBAtBY;EAuBZ,kBAAA;EACA,cAAA;AANF;;AASA;EACE,eAAA;EACA,2BA5BgB;AAsBlB;;AASA;EACE,8BAAA;AANF;AAOE;EACE,aAAA;EACA,kBAAA;EACA,kBAAA;AALJ;AAOE;EACE,2BAvCc;EAwCd,kBAAA;EACA,iBAAA;EACA,gBAAA;EACA,sBAAA;AALJ;;AASA;EACE,sBAAA;EACA,iBAhDuB;EAiDvB,WAAA;EACA,iBAAA;EACA,mBAAA;AANF;AAOE;EACE,cAzDM;AAoDV;AAOE;EACE,mBAAA;EACA,iBAzDqB;AAoDzB;;AASA;EACE,mBAAA;AANF;AAOE;EACE,gBAAA;AALJ;AAMI;EACE,cAvEI;AAmEV;AAMI;EACE,cAzEI;AAqEV;AAOE;EACE,mBAAA;EACA,uBAAA;EACA,yBA/EM;EAgFN,mBAAA;EACA,aAAA;EACA,yBAAA;EACA,iBAAA;AALJ;AAMI;EACE,iBAAA;EACA,yBAvFI;AAmFV;AAOE;EACE,kBAAA;EACA,UAAA;EACA,YAAA;EACA,yBA5Fa;EA6Fb,kBAAA;EACA,iBAAA;AALJ;AAMI;EACE,iBAAA;EACA,SAAA;AAJN;;AASA;EACE,YAAA;EACA,cAAA;EACA,UAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;EACA,+EAAA;AANF;AAQE;EACE,gBAAA;EACA,kBAAA;AANJ;AAQE;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;AANJ;;AAWE;EACE,iBAAA;EACA,gBAAA;EACA,kBAAA;AARJ;AAUE;EACE,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,iBAnIqB;AA2HzB;AAUE;EACE,iBAtIqB;EAuIrB,UAAA;EACA,mBAAA;AARJ;;AAYA;EACE,mDAAA;EACA,2BAAA;EACA,sBAAA;AATF;;AAYA;EACE,mDAAA;EACA,2BAAA;EACA,sBAAA;AATF","sourcesContent":["$color-C: #0073db;\n$color-F: rgb(219, 85, 85);\n$toggle-outline: rgb(26, 26, 26);\n$title-color: white;\n$form-area-color: burlywood;\n$display-msg-transition: 700ms;\n\n* {\n  white-space: nowrap;\n  font-family: Arial, Helvetica, sans-serif;\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.flex-col {\n  display: flex;\n  flex-direction: column;\n}\n\n.flex {\n  display: flex;\n}\n\n.title {\n  background-color: $title-color;\n  text-align: center;\n  padding: 0.5em;\n}\n\n.form-container {\n  padding: 0.77em;\n  background-color: $form-area-color;\n}\n\n.form {\n  justify-content: space-between;\n  &__input-box {\n    width: 12.5em;\n    border-radius: 5px;\n    text-align: center;\n  }\n  &__submit {\n    background-color: $form-area-color;\n    border-radius: 6px;\n    margin-top: 0.4em;\n    padding: 0 0.3em;\n    align-self: flex-start;\n  }\n}\n\n.status-message {\n  transform: scale(0.75);\n  transition: $display-msg-transition;\n  height: 1em;\n  margin-top: 0.4em;\n  white-space: nowrap;\n  &--error {\n    color: $color-F;\n  }\n  &--visible {\n    transform: scale(1);\n    transition: $display-msg-transition;\n  }\n}\n\n.unit-toggle {\n  align-items: center;\n  &__letter {\n    margin: 0 0.38em;\n    &--C {\n      color: $color-C;\n    }\n    &--F {\n      color: $color-F;\n    }\n  }\n  &__background {\n    align-items: center;\n    justify-content: center;\n    background-color: $color-F;\n    border-radius: 25px;\n    width: 2.1rem;\n    border: solid $toggle-outline 1px;\n    transition: 300ms;\n    &--C {\n      transition: 300ms;\n      background-color: $color-C;\n    }\n  }\n  &__button {\n    position: relative;\n    left: -20%;\n    padding: 7px;\n    background-color: $toggle-outline;\n    border-radius: 50%;\n    transition: 300ms;\n    &--C {\n      transition: 300ms;\n      left: 20%;\n    }\n  }\n}\n\n.display-container {\n  padding: 1em;\n  min-width: 80%;\n  width: 50%;\n  border-radius: 1em;\n  margin-top: 2.5em;\n  align-self: center;\n  color: #fafafa;\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,\n    1px 1px 0 #000;\n  &__location {\n    font-weight: 600;\n    text-align: center;\n  }\n  &__condition {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 1em;\n  }\n}\n\n.temperature {\n  &__label {\n    margin-top: 0.2em;\n    font-weight: 600;\n    position: relative;\n  }\n  &__data {\n    position: absolute;\n    margin-left: 0.5em;\n    font-weight: normal;\n    transition: $display-msg-transition;\n  }\n  &--hidden {\n    transition: $display-msg-transition;\n    opacity: 0;\n    transform: scale(0);\n  }\n}\n\n.day {\n  background: url(\"./img/day.jpg\");\n  background-position: center;\n  background-size: cover;\n}\n\n.night {\n  background: url(\"./img/night.jpg\");\n  background-position: center;\n  background-size: cover;\n}\n"],"sourceRoot":""}]);
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
      tempInC.classList.add(
        "temperature__c",
        "temperature__data",
        "temperature--hidden"
      );
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
// testDataNightTime.current.is_day = 0;
// testDataNightTime.current.condition.icon =
  "https://cdn.weatherapi.com/weather/64x64/night/113.png";

(0,_modules_render_data__WEBPACK_IMPORTED_MODULE_0__.renderPageBasedOnData)(testDataDayTime);
// renderPageBasedOnData(testDataNightTime);


/***/ }),

/***/ "./src/img/day.jpg":
/*!*************************!*\
  !*** ./src/img/day.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c1af31d45c0bdb7af4f.jpg";

/***/ }),

/***/ "./src/img/night.jpg":
/*!***************************!*\
  !*** ./src/img/night.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1beeb094095ad2692304.jpg";

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
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNzQztBQUN0Qzs7QUFFc0I7QUFLYTtBQUN1QztBQUNoQjtBQUNKO0FBQ1E7QUFDQTs7QUFFOUQ7QUFDQTtBQUNBLHFDQUFxQyx1RUFBcUI7O0FBRTFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLG1FQUFZO0FBQzlCLElBQUksdUVBQWE7QUFDakIsMEJBQTBCLHVGQUFtQztBQUM3RCxJQUFJLHVFQUFhO0FBQ2pCLHdCQUF3Qix1RUFBaUI7QUFDekMsSUFBSSwyRUFBcUI7QUFDekIsSUFBSSx1RUFBYTtBQUNqQixJQUFJO0FBQ0o7QUFDQSxJQUFJLHNFQUFZO0FBQ2hCO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvYXBpLWZldGNoLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZmlsdGVyLWRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9oYW5kbGUtaW5wdXQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9yZW5kZXItZGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3N0YXR1cy1tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3VuaXQtdG9nZ2xlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3Rlc3RzL3Rlc3QtZGF0YS1mb3Itc3R5bGluZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL2RheS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9uaWdodC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmZsZXgtY29sIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDAuNzdlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcXG59XFxuXFxuLmZvcm0ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uZm9ybV9faW5wdXQtYm94IHtcXG4gIHdpZHRoOiAxMi41ZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5mb3JtX19zdWJtaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgbWFyZ2luLXRvcDogMC40ZW07XFxuICBwYWRkaW5nOiAwIDAuM2VtO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLnN0YXR1cy1tZXNzYWdlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC43NSk7XFxuICB0cmFuc2l0aW9uOiA3MDBtcztcXG4gIGhlaWdodDogMWVtO1xcbiAgbWFyZ2luLXRvcDogMC40ZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4uc3RhdHVzLW1lc3NhZ2UtLWVycm9yIHtcXG4gIGNvbG9yOiAjZGI1NTU1O1xcbn1cXG4uc3RhdHVzLW1lc3NhZ2UtLXZpc2libGUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb246IDcwMG1zO1xcbn1cXG5cXG4udW5pdC10b2dnbGUge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnVuaXQtdG9nZ2xlX19sZXR0ZXIge1xcbiAgbWFyZ2luOiAwIDAuMzhlbTtcXG59XFxuLnVuaXQtdG9nZ2xlX19sZXR0ZXItLUMge1xcbiAgY29sb3I6ICMwMDczZGI7XFxufVxcbi51bml0LXRvZ2dsZV9fbGV0dGVyLS1GIHtcXG4gIGNvbG9yOiAjZGI1NTU1O1xcbn1cXG4udW5pdC10b2dnbGVfX2JhY2tncm91bmQge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiNTU1NTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICB3aWR0aDogMi4xcmVtO1xcbiAgYm9yZGVyOiBzb2xpZCAjMWExYTFhIDFweDtcXG4gIHRyYW5zaXRpb246IDMwMG1zO1xcbn1cXG4udW5pdC10b2dnbGVfX2JhY2tncm91bmQtLUMge1xcbiAgdHJhbnNpdGlvbjogMzAwbXM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3M2RiO1xcbn1cXG4udW5pdC10b2dnbGVfX2J1dHRvbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAtMjAlO1xcbiAgcGFkZGluZzogN3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRyYW5zaXRpb246IDMwMG1zO1xcbn1cXG4udW5pdC10b2dnbGVfX2J1dHRvbi0tQyB7XFxuICB0cmFuc2l0aW9uOiAzMDBtcztcXG4gIGxlZnQ6IDIwJTtcXG59XFxuXFxuLmRpc3BsYXktY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIG1pbi13aWR0aDogODAlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIG1hcmdpbi10b3A6IDIuNWVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgY29sb3I6ICNmYWZhZmE7XFxuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgIzAwMCwgMXB4IC0xcHggMCAjMDAwLCAtMXB4IDFweCAwICMwMDAsIDFweCAxcHggMCAjMDAwO1xcbn1cXG4uZGlzcGxheS1jb250YWluZXJfX2xvY2F0aW9uIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5kaXNwbGF5LWNvbnRhaW5lcl9fY29uZGl0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuXFxuLnRlbXBlcmF0dXJlX19sYWJlbCB7XFxuICBtYXJnaW4tdG9wOiAwLjJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50ZW1wZXJhdHVyZV9fZGF0YSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW4tbGVmdDogMC41ZW07XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgdHJhbnNpdGlvbjogNzAwbXM7XFxufVxcbi50ZW1wZXJhdHVyZS0taGlkZGVuIHtcXG4gIHRyYW5zaXRpb246IDcwMG1zO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcblxcbi5kYXkge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5uaWdodCB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBT0E7RUFDRSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQU5GOztBQVNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBTkY7O0FBU0E7RUFDRSxhQUFBO0FBTkY7O0FBU0E7RUFDRSx1QkF0Qlk7RUF1Qlosa0JBQUE7RUFDQSxjQUFBO0FBTkY7O0FBU0E7RUFDRSxlQUFBO0VBQ0EsMkJBNUJnQjtBQXNCbEI7O0FBU0E7RUFDRSw4QkFBQTtBQU5GO0FBT0U7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUxKO0FBT0U7RUFDRSwyQkF2Q2M7RUF3Q2Qsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFMSjs7QUFTQTtFQUNFLHNCQUFBO0VBQ0EsaUJBaER1QjtFQWlEdkIsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFORjtBQU9FO0VBQ0UsY0F6RE07QUFvRFY7QUFPRTtFQUNFLG1CQUFBO0VBQ0EsaUJBekRxQjtBQW9EekI7O0FBU0E7RUFDRSxtQkFBQTtBQU5GO0FBT0U7RUFDRSxnQkFBQTtBQUxKO0FBTUk7RUFDRSxjQXZFSTtBQW1FVjtBQU1JO0VBQ0UsY0F6RUk7QUFxRVY7QUFPRTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkEvRU07RUFnRk4sbUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQUxKO0FBTUk7RUFDRSxpQkFBQTtFQUNBLHlCQXZGSTtBQW1GVjtBQU9FO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQTVGYTtFQTZGYixrQkFBQTtFQUNBLGlCQUFBO0FBTEo7QUFNSTtFQUNFLGlCQUFBO0VBQ0EsU0FBQTtBQUpOOztBQVNBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLCtFQUFBO0FBTkY7QUFRRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFOSjtBQVFFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQU5KOztBQVdFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBUko7QUFVRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQW5JcUI7QUEySHpCO0FBVUU7RUFDRSxpQkF0SXFCO0VBdUlyQixVQUFBO0VBQ0EsbUJBQUE7QUFSSjs7QUFZQTtFQUNFLG1EQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQVRGOztBQVlBO0VBQ0UsbURBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FBVEZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGNvbG9yLUM6ICMwMDczZGI7XFxuJGNvbG9yLUY6IHJnYigyMTksIDg1LCA4NSk7XFxuJHRvZ2dsZS1vdXRsaW5lOiByZ2IoMjYsIDI2LCAyNik7XFxuJHRpdGxlLWNvbG9yOiB3aGl0ZTtcXG4kZm9ybS1hcmVhLWNvbG9yOiBidXJseXdvb2Q7XFxuJGRpc3BsYXktbXNnLXRyYW5zaXRpb246IDcwMG1zO1xcblxcbioge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5mbGV4LWNvbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICR0aXRsZS1jb2xvcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgcGFkZGluZzogMC43N2VtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGZvcm0tYXJlYS1jb2xvcjtcXG59XFxuXFxuLmZvcm0ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgJl9faW5wdXQtYm94IHtcXG4gICAgd2lkdGg6IDEyLjVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICAmX19zdWJtaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9ybS1hcmVhLWNvbG9yO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIG1hcmdpbi10b3A6IDAuNGVtO1xcbiAgICBwYWRkaW5nOiAwIDAuM2VtO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgfVxcbn1cXG5cXG4uc3RhdHVzLW1lc3NhZ2Uge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcXG4gIHRyYW5zaXRpb246ICRkaXNwbGF5LW1zZy10cmFuc2l0aW9uO1xcbiAgaGVpZ2h0OiAxZW07XFxuICBtYXJnaW4tdG9wOiAwLjRlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAmLS1lcnJvciB7XFxuICAgIGNvbG9yOiAkY29sb3ItRjtcXG4gIH1cXG4gICYtLXZpc2libGUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2l0aW9uOiAkZGlzcGxheS1tc2ctdHJhbnNpdGlvbjtcXG4gIH1cXG59XFxuXFxuLnVuaXQtdG9nZ2xlIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAmX19sZXR0ZXIge1xcbiAgICBtYXJnaW46IDAgMC4zOGVtO1xcbiAgICAmLS1DIHtcXG4gICAgICBjb2xvcjogJGNvbG9yLUM7XFxuICAgIH1cXG4gICAgJi0tRiB7XFxuICAgICAgY29sb3I6ICRjb2xvci1GO1xcbiAgICB9XFxuICB9XFxuICAmX19iYWNrZ3JvdW5kIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1GO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICB3aWR0aDogMi4xcmVtO1xcbiAgICBib3JkZXI6IHNvbGlkICR0b2dnbGUtb3V0bGluZSAxcHg7XFxuICAgIHRyYW5zaXRpb246IDMwMG1zO1xcbiAgICAmLS1DIHtcXG4gICAgICB0cmFuc2l0aW9uOiAzMDBtcztcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItQztcXG4gICAgfVxcbiAgfVxcbiAgJl9fYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAtMjAlO1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0b2dnbGUtb3V0bGluZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB0cmFuc2l0aW9uOiAzMDBtcztcXG4gICAgJi0tQyB7XFxuICAgICAgdHJhbnNpdGlvbjogMzAwbXM7XFxuICAgICAgbGVmdDogMjAlO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5kaXNwbGF5LWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAxZW07XFxuICBtaW4td2lkdGg6IDgwJTtcXG4gIHdpZHRoOiA1MCU7XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBtYXJnaW4tdG9wOiAyLjVlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGNvbG9yOiAjZmFmYWZhO1xcbiAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAwICMwMDAsIDFweCAtMXB4IDAgIzAwMCwgLTFweCAxcHggMCAjMDAwLFxcbiAgICAxcHggMXB4IDAgIzAwMDtcXG4gICZfX2xvY2F0aW9uIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbiAgJl9fY29uZGl0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgfVxcbn1cXG5cXG4udGVtcGVyYXR1cmUge1xcbiAgJl9fbGFiZWwge1xcbiAgICBtYXJnaW4tdG9wOiAwLjJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcbiAgJl9fZGF0YSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICB0cmFuc2l0aW9uOiAkZGlzcGxheS1tc2ctdHJhbnNpdGlvbjtcXG4gIH1cXG4gICYtLWhpZGRlbiB7XFxuICAgIHRyYW5zaXRpb246ICRkaXNwbGF5LW1zZy10cmFuc2l0aW9uO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgfVxcbn1cXG5cXG4uZGF5IHtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi9pbWcvZGF5LmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLm5pZ2h0IHtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi9pbWcvbmlnaHQuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IEFQSV9LRVkgPSBcIjliY2IxYzYxOWExZDRlNTJiNWYxMDU4MTgyMjE0MDNcIjtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudEZvcmVjYXN0RnJvbVdlYXRoZXJTZXJ2ZXIocXVlcnlMb2NhdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PSR7QVBJX0tFWX0mcT0ke3F1ZXJ5TG9jYXRpb259JmRheXM9NyZhcWk9bm9gXG4gICAgKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoXCJOZXR3b3JrRXJyb3JcIikpIHtcbiAgICAgIHRocm93IFwiVW5hYmxlIHRvIGNvbm5lY3QgdG8gc2VydmVyLlwiO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQge2dldEN1cnJlbnRGb3JlY2FzdEZyb21XZWF0aGVyU2VydmVyfTtcbiIsImV4cG9ydCAgZnVuY3Rpb24gZmlsdGVyV2VhdGhlckRhdGEod2VhdGhlckRhdGEpIHtcbiAgaWYgKHdlYXRoZXJEYXRhLmVycm9yKSB7XG4gICAgdGhyb3cgd2VhdGhlckRhdGEuZXJyb3IubWVzc2FnZTtcbiAgfVxuICBjb25zdCBsb2NhdGlvbiA9IGZpbHRlckxvY2F0aW9uKHdlYXRoZXJEYXRhLmxvY2F0aW9uKTtcbiAgY29uc3QgY3VycmVudCA9IGZpbHRlckN1cnJlbnQod2VhdGhlckRhdGEuY3VycmVudCk7XG5cbiAgcmV0dXJuIHtcbiAgICBsb2NhdGlvbixcbiAgICBjdXJyZW50LFxuICB9O1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJMb2NhdGlvbihsb2NhdGlvbikge1xuICBjb25zdCBjaXR5ID0gbG9jYXRpb24ubmFtZTtcbiAgaWYgKGxvY2F0aW9uLmNvdW50cnkuaW5jbHVkZXMoXCJVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2FcIikpIHtcbiAgICBjb25zdCBzdGF0ZU9yQ291bnRyeSA9IGxvY2F0aW9uLnJlZ2lvbjtcbiAgICByZXR1cm4geyBjaXR5LCBzdGF0ZU9yQ291bnRyeSB9O1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHN0YXRlT3JDb3VudHJ5ID0gbG9jYXRpb24uY291bnRyeTtcbiAgICByZXR1cm4geyBjaXR5LCBzdGF0ZU9yQ291bnRyeSB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbHRlckN1cnJlbnQoY3VycmVudCkge1xuICBjb25zdCBjb25kaXRpb24gPSBmaWx0ZXJDb25kaXRpb24oY3VycmVudC5jb25kaXRpb24pO1xuICBjb25zdCB0ZW1wX2MgPSBjdXJyZW50LnRlbXBfYztcbiAgY29uc3QgdGVtcF9mID0gY3VycmVudC50ZW1wX2Y7XG4gIGNvbnN0IGlzX2RheSA9IGN1cnJlbnQuaXNfZGF5O1xuICBjb25zdCBodW1pZGl0eSA9IGN1cnJlbnQuaHVtaWRpdHk7XG4gIGNvbnN0IGZlZWxzbGlrZV9jID0gY3VycmVudC5mZWVsc2xpa2VfYztcbiAgY29uc3QgZmVlbHNsaWtlX2YgPSBjdXJyZW50LmZlZWxzbGlrZV9mO1xuXG4gIHJldHVybiB7XG4gICAgY29uZGl0aW9uLFxuICAgIHRlbXBfYyxcbiAgICB0ZW1wX2YsXG4gICAgaXNfZGF5LFxuICAgIGh1bWlkaXR5LFxuICAgIGZlZWxzbGlrZV9jLFxuICAgIGZlZWxzbGlrZV9mLFxuICB9O1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJDb25kaXRpb24oY29uZGl0aW9uKSB7XG4gIGNvbnN0IHRleHQgPSBjb25kaXRpb24udGV4dDtcbiAgY29uc3QgaWNvbiA9IFwiaHR0cHM6XCIgKyBjb25kaXRpb24uaWNvbjtcbiAgcmV0dXJuIHsgdGV4dCwgaWNvbiB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldEZvcm1WYWx1ZShldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldFtcImxvY2F0aW9uXCJdLnZhbHVlO1xuICBpZiAodmFsdWUgPT09IFwiXCIpIHtcbiAgICB0aHJvdyBcIlBsZWFzZSBlbnRlciB5b3VyIGNpdHkgYW5kIHN0YXRlL2NvdW50cnkuXCI7XG4gIH1cblxuICByZXR1cm4gdmFsdWUudHJpbSgpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclBhZ2VCYXNlZE9uRGF0YShkYXRhKSB7XG4gIGNvbnN0IGRpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXktY29udGFpbmVyXCIpO1xuICBjbGVhckRpc3BsYXkoZGlzcGxheUNvbnRhaW5lcik7XG5cbiAgY29uc3QgeyBsb2NhdGlvbiwgY3VycmVudCB9ID0gZGF0YTtcbiAgY29uc3QgbG9jYXRpb25EaXNwbGF5ID0gcmVuZGVyTG9jYXRpb25OYW1lKGxvY2F0aW9uKTtcbiAgY29uc3QgY3VycmVudFdlYXRoZXJEaXNwbGF5ID0gcmVuZGVyQ3VycmVudFdlYXRoZXIoY3VycmVudCk7XG5cbiAgZGlzcGxheUNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbkRpc3BsYXkpO1xuICBkaXNwbGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRXZWF0aGVyRGlzcGxheSk7XG5cbiAgY2hhbmdlU3R5bGVUb0RheU9yTmlnaHQoY3VycmVudCwgZGlzcGxheUNvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckxvY2F0aW9uTmFtZShsb2NhdGlvbikge1xuICBjb25zdCB7IGNpdHksIHN0YXRlT3JDb3VudHJ5IH0gPSBsb2NhdGlvbjtcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNwYW4uY2xhc3NMaXN0LmFkZChcImRpc3BsYXktY29udGFpbmVyX19sb2NhdGlvblwiKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9IGAke2NpdHl9LCAke3N0YXRlT3JDb3VudHJ5fWA7XG4gIHJldHVybiBzcGFuO1xufVxuXG5mdW5jdGlvbiBjbGVhckRpc3BsYXkoZGlzcGxheSkge1xuICBkaXNwbGF5LnRleHRDb250ZW50ID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ3VycmVudFdlYXRoZXIoY3VycmVudCkge1xuICBjb25zdCBjdXJyZW50V2VhdGhlckRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gIGNvbnN0IGNvbmRpdGlvbkRpc3BsYXkgPSByZW5kZXJDb25kaXRpb24oY3VycmVudC5jb25kaXRpb24pO1xuICBjb25zdCB0ZW1wZXJhdHVyZURpc3BsYXkgPSByZW5kZXJUZW1wZXJhdHVyZXMoY3VycmVudCk7XG4gIGNvbnN0IGh1bWlkaXR5RGlzcGxheSA9IHJlbmRlckh1bWlkaXR5KGN1cnJlbnQuaHVtaWRpdHkpO1xuXG4gIGN1cnJlbnRXZWF0aGVyRGlzcGxheS5hcHBlbmRDaGlsZChjb25kaXRpb25EaXNwbGF5KTtcbiAgY3VycmVudFdlYXRoZXJEaXNwbGF5LmFwcGVuZENoaWxkKHRlbXBlcmF0dXJlRGlzcGxheSk7XG4gIGN1cnJlbnRXZWF0aGVyRGlzcGxheS5hcHBlbmRDaGlsZChodW1pZGl0eURpc3BsYXkpO1xuXG4gIHJldHVybiBjdXJyZW50V2VhdGhlckRpc3BsYXk7XG5cbiAgZnVuY3Rpb24gcmVuZGVyQ29uZGl0aW9uKGNvbmRpdGlvbikge1xuICAgIGNvbnN0IGNvbmRpdGlvbkZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25kaXRpb25GcmFnbWVudC5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheS1jb250YWluZXJfX2NvbmRpdGlvblwiKTtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpY29uLnNyYyA9IGNvbmRpdGlvbi5pY29uO1xuICAgIGljb24uYWx0ID0gYCR7Y29uZGl0aW9uLnRleHR9IGljb25gO1xuICAgIGNvbnN0IGNvbmRpdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbmRpdGlvblRleHQudGV4dENvbnRlbnQgPSBjb25kaXRpb24udGV4dDtcbiAgICBjb25kaXRpb25GcmFnbWVudC5hcHBlbmRDaGlsZChpY29uKTtcbiAgICBjb25kaXRpb25GcmFnbWVudC5hcHBlbmRDaGlsZChjb25kaXRpb25UZXh0KTtcbiAgICByZXR1cm4gY29uZGl0aW9uRnJhZ21lbnQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJUZW1wZXJhdHVyZXMoY3VycmVudCkge1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGVtcGVyYXR1cmVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wZXJhdHVyZVwiKTtcblxuICAgIGNvbnN0IGN1cnJlbnRUZW1wID0gcmVuZGVyVGVtcGVyYXR1cmVFbGVtZW50KFxuICAgICAgXCJDdXJyZW50OlwiLFxuICAgICAgY3VycmVudC50ZW1wX2MsXG4gICAgICBjdXJyZW50LnRlbXBfZlxuICAgICk7XG4gICAgdGVtcGVyYXR1cmVTZWN0aW9uLmFwcGVuZENoaWxkKGN1cnJlbnRUZW1wKTtcblxuICAgIGNvbnN0IGZlZWxzTGlrZVRlbXAgPSByZW5kZXJUZW1wZXJhdHVyZUVsZW1lbnQoXG4gICAgICBcIkZlZWxzIExpa2U6XCIsXG4gICAgICBjdXJyZW50LmZlZWxzbGlrZV9jLFxuICAgICAgY3VycmVudC5mZWVsc2xpa2VfZlxuICAgICk7XG4gICAgdGVtcGVyYXR1cmVTZWN0aW9uLmFwcGVuZENoaWxkKGZlZWxzTGlrZVRlbXApO1xuICAgIHJldHVybiB0ZW1wZXJhdHVyZVNlY3Rpb247XG5cbiAgICBmdW5jdGlvbiByZW5kZXJUZW1wZXJhdHVyZUVsZW1lbnQoXG4gICAgICB0ZW1wZXJhdHVyZUxhYmVsVGV4dCxcbiAgICAgIC4uLnRlbXBlcmF0dXJlRGF0YVxuICAgICkge1xuICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcInRlbXBlcmF0dXJlX19sYWJlbFwiKTtcbiAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gdGVtcGVyYXR1cmVMYWJlbFRleHQ7XG5cbiAgICAgIGNvbnN0IHRlbXBJbkMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHRlbXBJbkMuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgXCJ0ZW1wZXJhdHVyZV9fY1wiLFxuICAgICAgICBcInRlbXBlcmF0dXJlX19kYXRhXCIsXG4gICAgICAgIFwidGVtcGVyYXR1cmUtLWhpZGRlblwiXG4gICAgICApO1xuICAgICAgdGVtcEluQy50ZXh0Q29udGVudCA9IGAgJHt0ZW1wZXJhdHVyZURhdGFbMF19IENgO1xuICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQodGVtcEluQyk7XG5cbiAgICAgIGNvbnN0IHRlbXBJbkYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHRlbXBJbkYuY2xhc3NMaXN0LmFkZChcInRlbXBlcmF0dXJlX19mXCIsIFwidGVtcGVyYXR1cmVfX2RhdGFcIik7XG4gICAgICB0ZW1wSW5GLnRleHRDb250ZW50ID0gYCAke3RlbXBlcmF0dXJlRGF0YVsxXX0gRmA7XG4gICAgICBsYWJlbC5hcHBlbmRDaGlsZCh0ZW1wSW5GKTtcblxuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckh1bWlkaXR5KGh1bWlkaXR5RGF0YSkge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwidGVtcGVyYXR1cmVfX2xhYmVsXCIpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJIdW1pZGl0eTpcIjtcblxuICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgaHVtaWRpdHkuY2xhc3NMaXN0LmFkZChcInRlbXBlcmF0dXJlX19kYXRhXCIpO1xuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCAke2h1bWlkaXR5RGF0YX0lYDtcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChodW1pZGl0eSk7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlU3R5bGVUb0RheU9yTmlnaHQoY3VycmVudCkge1xuICBjb25zdCBkaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5LWNvbnRhaW5lclwiKTtcbiAgY29uc3QgaXNEYXkgPSBjdXJyZW50LmlzX2RheTtcbiAgaWYgKGlzRGF5KSB7XG4gICAgZGlzcGxheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGF5XCIpO1xuICAgIGRpc3BsYXlDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcIm5pZ2h0XCIpO1xuICB9IGVsc2Uge1xuICAgIGRpc3BsYXlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5pZ2h0XCIpO1xuICAgIGRpc3BsYXlDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImRheVwiKTtcbiAgfVxufVxuIiwiY29uc3Qgc3RhdHVzTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhdHVzLW1lc3NhZ2VcIik7XG5cbmZ1bmN0aW9uIGRpc3BsYXlTdGF0dXMobWVzc2FnZSkge1xuICBzdGF0dXNNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGF0dXMtbWVzc2FnZS0tZXJyb3JcIik7XG4gIHN0YXR1c01lc3NhZ2UuY2xhc3NMaXN0LmFkZChcInN0YXR1cy1tZXNzYWdlLS12aXNpYmxlXCIpO1xuICBzdGF0dXNNZXNzYWdlLnRleHRDb250ZW50ID0gbWVzc2FnZTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUVycm9yKGVycm9yKSB7XG4gIHN0YXR1c01lc3NhZ2UuY2xhc3NMaXN0LmFkZChcInN0YXR1cy1tZXNzYWdlLS1lcnJvclwiKTtcbiAgc3RhdHVzTWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwic3RhdHVzLW1lc3NhZ2UtLXZpc2libGVcIik7XG4gIHN0YXR1c01lc3NhZ2UudGV4dENvbnRlbnQgPSBlcnJvcjtcbn1cblxuZnVuY3Rpb24gY2xlYXJNZXNzYWdlcygpIHtcbiAgc3RhdHVzTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKFwic3RhdHVzLW1lc3NhZ2UtLWVycm9yXCIpO1xuICBzdGF0dXNNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGF0dXMtbWVzc2FnZS0tdmlzaWJsZVwiKTtcbiAgc3RhdHVzTWVzc2FnZS50ZXh0Q29udGVudCA9IFwiXCI7XG59XG5cbmV4cG9ydCB7IGRpc3BsYXlTdGF0dXMsIGRpc3BsYXlFcnJvciwgY2xlYXJNZXNzYWdlcyB9O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVVuaXRUb2dnbGVDbGljayhldmVudCkge1xuICBpZiAoaXNEaXNwbGF5RW1wdHkoKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjaGFuZ2VDbGFzc0ZvclRvZ2dsZUJ1dHRvbigpO1xuICBjaGFuZ2VDbGFzc0ZvclRlbXBlcmF0dXJlcygpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VDbGFzc0ZvclRvZ2dsZUJ1dHRvbigpIHtcbiAgY29uc3QgYnV0dG9uQmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudW5pdC10b2dnbGVfX2JhY2tncm91bmRcIik7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudW5pdC10b2dnbGVfX2J1dHRvblwiKTtcbiAgYnV0dG9uQmFja2dyb3VuZC5jbGFzc0xpc3QudG9nZ2xlKFwidW5pdC10b2dnbGVfX2JhY2tncm91bmQtLUNcIik7XG4gIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwidW5pdC10b2dnbGVfX2J1dHRvbi0tQ1wiKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlQ2xhc3NGb3JUZW1wZXJhdHVyZXMoKSB7XG4gIGNvbnN0IHRlbXBzSW5DID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGVtcGVyYXR1cmVfX2NcIildO1xuICBjb25zdCB0ZW1wc0luRiA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRlbXBlcmF0dXJlX19mXCIpXTtcbiAgY29uc3QgYWxsVGVtcHMgPSB0ZW1wc0luQy5jb25jYXQodGVtcHNJbkYpO1xuICBhbGxUZW1wcy5mb3JFYWNoKCh0ZW1wKSA9PiB0ZW1wLmNsYXNzTGlzdC50b2dnbGUoXCJ0ZW1wZXJhdHVyZS0taGlkZGVuXCIpKTtcbn1cblxuZnVuY3Rpb24gaXNEaXNwbGF5RW1wdHkoKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXktY29udGFpbmVyXCIpLnRleHRDb250ZW50ID09PSBcIlwiO1xufVxuIiwiaW1wb3J0IHsgcmVuZGVyUGFnZUJhc2VkT25EYXRhIH0gZnJvbSBcIi4uL21vZHVsZXMvcmVuZGVyLWRhdGFcIjtcbmNvbnN0IHRlc3REYXRhRGF5VGltZSA9IHtcbiAgbG9jYXRpb246IHtcbiAgICBjaXR5OiBcIkxvbmRvblwiLFxuICAgIHN0YXRlT3JDb3VudHJ5OiBcIlVuaXRlZCBLaW5nZG9tXCIsXG4gIH0sXG4gIGN1cnJlbnQ6IHtcbiAgICBjb25kaXRpb246IHtcbiAgICAgIHRleHQ6IFwiU3VubnlcIixcbiAgICAgIGljb246IFwiaHR0cHM6Ly9jZG4ud2VhdGhlcmFwaS5jb20vd2VhdGhlci82NHg2NC9kYXkvMTEzLnBuZ1wiLFxuICAgIH0sXG4gICAgdGVtcF9jOiAxMixcbiAgICB0ZW1wX2Y6IDUzLjYsXG4gICAgaXNfZGF5OiAxLFxuICAgIGh1bWlkaXR5OiA1NCxcbiAgICBmZWVsc2xpa2VfYzogMTAuOCxcbiAgICBmZWVsc2xpa2VfZjogNTEuNCxcbiAgfSxcbn07XG5jb25zdCB0ZXN0RGF0YU5pZ2h0VGltZSA9IHRlc3REYXRhRGF5VGltZTtcbi8vIHRlc3REYXRhTmlnaHRUaW1lLmN1cnJlbnQuaXNfZGF5ID0gMDtcbi8vIHRlc3REYXRhTmlnaHRUaW1lLmN1cnJlbnQuY29uZGl0aW9uLmljb24gPVxuICBcImh0dHBzOi8vY2RuLndlYXRoZXJhcGkuY29tL3dlYXRoZXIvNjR4NjQvbmlnaHQvMTEzLnBuZ1wiO1xuXG5yZW5kZXJQYWdlQmFzZWRPbkRhdGEodGVzdERhdGFEYXlUaW1lKTtcbi8vIHJlbmRlclBhZ2VCYXNlZE9uRGF0YSh0ZXN0RGF0YU5pZ2h0VGltZSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIi8vIFRPLURPIHJlbW92ZSB0ZXN0XG5pbXBvcnQgJy4vdGVzdHMvdGVzdC1kYXRhLWZvci1zdHlsaW5nJ1xuLy8gVE8tRE8gcmVtb3ZlIHRlc3RcblxuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5pbXBvcnQge1xuICBjbGVhck1lc3NhZ2VzLFxuICBkaXNwbGF5RXJyb3IsXG4gIGRpc3BsYXlTdGF0dXMsXG59IGZyb20gXCIuL21vZHVsZXMvc3RhdHVzLW1lc3NhZ2VzXCI7XG5pbXBvcnQgeyBnZXRDdXJyZW50Rm9yZWNhc3RGcm9tV2VhdGhlclNlcnZlciB9IGZyb20gXCIuL21vZHVsZXMvYXBpLWZldGNoXCI7XG5pbXBvcnQgeyBmaWx0ZXJXZWF0aGVyRGF0YSB9IGZyb20gXCIuL21vZHVsZXMvZmlsdGVyLWRhdGFcIjtcbmltcG9ydCB7IGdldEZvcm1WYWx1ZSB9IGZyb20gXCIuL21vZHVsZXMvaGFuZGxlLWlucHV0XCI7XG5pbXBvcnQgeyByZW5kZXJQYWdlQmFzZWRPbkRhdGEgfSBmcm9tIFwiLi9tb2R1bGVzL3JlbmRlci1kYXRhXCI7XG5pbXBvcnQgeyBoYW5kbGVVbml0VG9nZ2xlQ2xpY2sgfSBmcm9tIFwiLi9tb2R1bGVzL3VuaXQtdG9nZ2xlXCI7XG5cbi8vaW5pdCBidXR0b24gdGhhdCB0b2dnbGVzIGJldHdlZW4gZmFocmVuaGVpdCBhbmQgY2Vsc2l1c1xuY29uc3QgdW5pdFRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudW5pdC10b2dnbGVcIik7XG51bml0VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVVbml0VG9nZ2xlQ2xpY2spO1xuXG4vL2luaXQgc2VhcmNoIGZvcm0gZnVuY3Rpb25hbGl0eVxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVN1Ym1pdCk7XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICB0cnkge1xuICAgIGNvbnN0IHZhbHVlID0gZ2V0Rm9ybVZhbHVlKGV2ZW50KTtcbiAgICBkaXNwbGF5U3RhdHVzKFwiR2F0aGVyaW5nIFdlYXRoZXIgSW5mb1wiKTtcbiAgICBjb25zdCByYXdEYXRhID0gYXdhaXQgZ2V0Q3VycmVudEZvcmVjYXN0RnJvbVdlYXRoZXJTZXJ2ZXIodmFsdWUpO1xuICAgIGRpc3BsYXlTdGF0dXMoXCJEaXNwbGF5aW5nIFdlYXRoZXIgSW5mb1wiKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGZpbHRlcldlYXRoZXJEYXRhKHJhd0RhdGEpO1xuICAgIHJlbmRlclBhZ2VCYXNlZE9uRGF0YSh3ZWF0aGVyRGF0YSk7XG4gICAgY2xlYXJNZXNzYWdlcygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICBkaXNwbGF5RXJyb3IoZXJyb3IpO1xuICB9XG4gIGZvcm0ucmVzZXQoKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==