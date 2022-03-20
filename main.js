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
    const toggleBackground = document.querySelector(".unit-toggle__background");
    const toggleButton = document.querySelector(".unit-toggle__button");
    toggleBackground.classList.add("unit-toggle__background--C");
    toggleButton.classList.add("unit-toggle__button--C");
  }

  function setToggleToF() {
    const toggleBackground = document.querySelector(".unit-toggle__background");
    const toggleButton = document.querySelector(".unit-toggle__button");
    toggleBackground.classList.remove("unit-toggle__background--C");
    toggleButton.classList.remove("unit-toggle__button--C");
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

/***/ "./src/tests/uses-fahrenheit-tests.js":
/*!********************************************!*\
  !*** ./src/tests/uses-fahrenheit-tests.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_filter_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/filter-data */ "./src/modules/filter-data.js");
/* harmony import */ var _modules_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/api-fetch */ "./src/modules/api-fetch.js");



let listOfFAreas = [];
fn("Montserrat");
fn("Ngerulmud,Palau");
fn("British Virgin Islands");
fn("Turks And Caicos Islands");
fn("Saint Kitts And Nevis");
fn("Marshall Islands");
fn("Bermuda");
fn("Cayman Islands");
fn("Barbuda");
fn("Micronesia");
fn("Bahamas");
fn("Belize");
fn("Liberia");
fn("united states of america");
fn("london");

function getCountryFromData(data) {
  const country = data.location.country;
  listOfFAreas.push(country);
}

function filterTest(data) {
  (0,_modules_filter_data__WEBPACK_IMPORTED_MODULE_0__.filterWeatherData)(data);
}

function fn(name) {
  (0,_modules_api_fetch__WEBPACK_IMPORTED_MODULE_1__.getCurrentForecastFromWeatherServer)(name).then(filterTest);
}


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
/* harmony import */ var _tests_uses_fahrenheit_tests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tests/uses-fahrenheit-tests */ "./src/tests/uses-fahrenheit-tests.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _modules_status_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/status-messages */ "./src/modules/status-messages.js");
/* harmony import */ var _modules_api_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/api-fetch */ "./src/modules/api-fetch.js");
/* harmony import */ var _modules_filter_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/filter-data */ "./src/modules/filter-data.js");
/* harmony import */ var _modules_handle_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/handle-input */ "./src/modules/handle-input.js");
/* harmony import */ var _modules_render_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/render-data */ "./src/modules/render-data.js");
/* harmony import */ var _modules_unit_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/unit-toggle */ "./src/modules/unit-toggle.js");
// TO-DO remove test
// import './tests/test-data-for-styling'

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVHQUFnQztBQUM1RSw0Q0FBNEMsMkdBQWtDO0FBQzlFLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0EsNkNBQTZDLHdCQUF3Qiw4Q0FBOEMsZUFBZSxjQUFjLDJCQUEyQixHQUFHLGVBQWUsa0JBQWtCLDJCQUEyQixHQUFHLFdBQVcsa0JBQWtCLEdBQUcsWUFBWSw0QkFBNEIsdUJBQXVCLG1CQUFtQixHQUFHLHFCQUFxQixvQkFBb0IsZ0NBQWdDLEdBQUcsV0FBVyxtQ0FBbUMsR0FBRyxvQkFBb0Isa0JBQWtCLHVCQUF1Qix1QkFBdUIsR0FBRyxpQkFBaUIsZ0NBQWdDLHVCQUF1QixzQkFBc0IscUJBQXFCLDJCQUEyQixHQUFHLHFCQUFxQiwyQkFBMkIsc0JBQXNCLGdCQUFnQixzQkFBc0Isd0JBQXdCLEdBQUcsMEJBQTBCLG1CQUFtQixHQUFHLDRCQUE0Qix3QkFBd0Isc0JBQXNCLEdBQUcsa0JBQWtCLHdCQUF3QixHQUFHLHdCQUF3QixxQkFBcUIsR0FBRywyQkFBMkIsbUJBQW1CLEdBQUcsMkJBQTJCLG1CQUFtQixHQUFHLDRCQUE0Qix3QkFBd0IsNEJBQTRCLDhCQUE4Qix3QkFBd0Isa0JBQWtCLDhCQUE4QixzQkFBc0IsR0FBRywrQkFBK0Isc0JBQXNCLDhCQUE4QixHQUFHLHdCQUF3Qix1QkFBdUIsZUFBZSxpQkFBaUIsOEJBQThCLHVCQUF1QixzQkFBc0IsR0FBRywyQkFBMkIsc0JBQXNCLGNBQWMsR0FBRyx3QkFBd0IsaUJBQWlCLG1CQUFtQixlQUFlLHVCQUF1QixzQkFBc0IsdUJBQXVCLG1CQUFtQixvRkFBb0YsR0FBRyxnQ0FBZ0MscUJBQXFCLHVCQUF1QixHQUFHLGlDQUFpQyxrQkFBa0IsMkJBQTJCLHdCQUF3Qix1QkFBdUIsR0FBRyx5QkFBeUIsc0JBQXNCLHFCQUFxQix1QkFBdUIsR0FBRyxzQkFBc0IsdUJBQXVCLHVCQUF1Qix3QkFBd0Isc0JBQXNCLEdBQUcsd0JBQXdCLHNCQUFzQixlQUFlLHdCQUF3QixHQUFHLFVBQVUsZ0VBQWdFLGdDQUFnQywyQkFBMkIsR0FBRyxZQUFZLGdFQUFnRSxnQ0FBZ0MsMkJBQTJCLEdBQUcsT0FBTyxpRkFBaUYsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksWUFBWSxVQUFVLE1BQU0sS0FBSyxVQUFVLGFBQWEsUUFBUSxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxZQUFZLFlBQVksV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsYUFBYSxZQUFZLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxhQUFhLFFBQVEsS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsWUFBWSxZQUFZLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFlBQVksTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFlBQVksWUFBWSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsYUFBYSxPQUFPLEtBQUssYUFBYSxZQUFZLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVywyQ0FBMkMsNkJBQTZCLG1DQUFtQyxzQkFBc0IsOEJBQThCLGlDQUFpQyxPQUFPLHdCQUF3Qiw4Q0FBOEMsZUFBZSxjQUFjLDJCQUEyQixHQUFHLGVBQWUsa0JBQWtCLDJCQUEyQixHQUFHLFdBQVcsa0JBQWtCLEdBQUcsWUFBWSxtQ0FBbUMsdUJBQXVCLG1CQUFtQixHQUFHLHFCQUFxQixvQkFBb0IsdUNBQXVDLEdBQUcsV0FBVyxtQ0FBbUMsa0JBQWtCLG9CQUFvQix5QkFBeUIseUJBQXlCLEtBQUssZUFBZSx5Q0FBeUMseUJBQXlCLHdCQUF3Qix1QkFBdUIsNkJBQTZCLEtBQUssR0FBRyxxQkFBcUIsMkJBQTJCLHdDQUF3QyxnQkFBZ0Isc0JBQXNCLHdCQUF3QixjQUFjLHNCQUFzQixLQUFLLGdCQUFnQiwwQkFBMEIsMENBQTBDLEtBQUssR0FBRyxrQkFBa0Isd0JBQXdCLGVBQWUsdUJBQXVCLFlBQVksd0JBQXdCLE9BQU8sWUFBWSx3QkFBd0IsT0FBTyxLQUFLLG1CQUFtQiwwQkFBMEIsOEJBQThCLGlDQUFpQywwQkFBMEIsb0JBQW9CLHdDQUF3Qyx3QkFBd0IsWUFBWSwwQkFBMEIsbUNBQW1DLE9BQU8sS0FBSyxlQUFlLHlCQUF5QixpQkFBaUIsbUJBQW1CLHdDQUF3Qyx5QkFBeUIsd0JBQXdCLFlBQVksMEJBQTBCLGtCQUFrQixPQUFPLEtBQUssR0FBRyx3QkFBd0IsaUJBQWlCLG1CQUFtQixlQUFlLHVCQUF1QixzQkFBc0IsdUJBQXVCLG1CQUFtQix5RkFBeUYsaUJBQWlCLHVCQUF1Qix5QkFBeUIsS0FBSyxrQkFBa0Isb0JBQW9CLDZCQUE2QiwwQkFBMEIseUJBQXlCLEtBQUssR0FBRyxrQkFBa0IsY0FBYyx3QkFBd0IsdUJBQXVCLHlCQUF5QixLQUFLLGFBQWEseUJBQXlCLHlCQUF5QiwwQkFBMEIsMENBQTBDLEtBQUssZUFBZSwwQ0FBMEMsaUJBQWlCLDBCQUEwQixLQUFLLEdBQUcsVUFBVSx1Q0FBdUMsZ0NBQWdDLDJCQUEyQixHQUFHLFlBQVkseUNBQXlDLGdDQUFnQywyQkFBMkIsR0FBRyxxQkFBcUI7QUFDbHdOO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDWjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzVCYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQTRJO0FBQzVJO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsNEhBQU87Ozs7QUFJc0Y7QUFDOUcsT0FBTyxpRUFBZSw0SEFBTyxJQUFJLG1JQUFjLEdBQUcsbUlBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxRQUFRLEtBQUssY0FBYztBQUNsRjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNkM7Ozs7Ozs7Ozs7Ozs7OztBQ2hCdEM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixJQUFJO0FBQ0o7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDUk87QUFDUDtBQUNBOztBQUVBLFVBQVUsb0JBQW9CO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLHVCQUF1QjtBQUNqQztBQUNBO0FBQ0Esd0JBQXdCLEtBQUssSUFBSSxlQUFlO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0Msb0JBQW9CO0FBQ3BEOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0Msb0JBQW9CO0FBQ3BEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLGFBQWE7QUFDNUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlFQUFpRSxLQUFLO0FBQ3RFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFKQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFc0Q7Ozs7Ozs7Ozs7Ozs7OztBQ3BCL0M7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDeEIyRDtBQUNnQjs7QUFFM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLHVFQUFpQjtBQUNuQjs7QUFFQTtBQUNBLEVBQUUsdUZBQW1DO0FBQ3JDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNzQztBQUN0Qzs7QUFFc0I7QUFLYTtBQUN1QztBQUNoQjtBQUNKO0FBQ1E7QUFDQTs7QUFFOUQ7QUFDQTtBQUNBLHFDQUFxQyx1RUFBcUI7O0FBRTFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLG1FQUFZO0FBQzlCLElBQUksdUVBQWE7QUFDakIsMEJBQTBCLHVGQUFtQztBQUM3RCxJQUFJLHVFQUFhO0FBQ2pCLHdCQUF3Qix1RUFBaUI7QUFDekMsSUFBSSwyRUFBcUI7QUFDekIsSUFBSSx1RUFBYTtBQUNqQixJQUFJO0FBQ0o7QUFDQSxJQUFJLHNFQUFZO0FBQ2hCO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvYXBpLWZldGNoLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZmlsdGVyLWRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9oYW5kbGUtaW5wdXQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9yZW5kZXItZGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3N0YXR1cy1tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3VuaXQtdG9nZ2xlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3Rlc3RzL3VzZXMtZmFocmVuaGVpdC10ZXN0cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL2RheS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9uaWdodC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmZsZXgtY29sIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDAuNzdlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcXG59XFxuXFxuLmZvcm0ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uZm9ybV9faW5wdXQtYm94IHtcXG4gIHdpZHRoOiAxMi41ZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5mb3JtX19zdWJtaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgbWFyZ2luLXRvcDogMC40ZW07XFxuICBwYWRkaW5nOiAwIDAuM2VtO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLnN0YXR1cy1tZXNzYWdlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC43NSk7XFxuICB0cmFuc2l0aW9uOiA3MDBtcztcXG4gIGhlaWdodDogMWVtO1xcbiAgbWFyZ2luLXRvcDogMC40ZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4uc3RhdHVzLW1lc3NhZ2UtLWVycm9yIHtcXG4gIGNvbG9yOiAjZGI1NTU1O1xcbn1cXG4uc3RhdHVzLW1lc3NhZ2UtLXZpc2libGUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb246IDcwMG1zO1xcbn1cXG5cXG4udW5pdC10b2dnbGUge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnVuaXQtdG9nZ2xlX19sZXR0ZXIge1xcbiAgbWFyZ2luOiAwIDAuMzhlbTtcXG59XFxuLnVuaXQtdG9nZ2xlX19sZXR0ZXItLUMge1xcbiAgY29sb3I6ICMwMDczZGI7XFxufVxcbi51bml0LXRvZ2dsZV9fbGV0dGVyLS1GIHtcXG4gIGNvbG9yOiAjZGI1NTU1O1xcbn1cXG4udW5pdC10b2dnbGVfX2JhY2tncm91bmQge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiNTU1NTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICB3aWR0aDogMi4xcmVtO1xcbiAgYm9yZGVyOiBzb2xpZCAjMWExYTFhIDFweDtcXG4gIHRyYW5zaXRpb246IDMwMG1zO1xcbn1cXG4udW5pdC10b2dnbGVfX2JhY2tncm91bmQtLUMge1xcbiAgdHJhbnNpdGlvbjogMzAwbXM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3M2RiO1xcbn1cXG4udW5pdC10b2dnbGVfX2J1dHRvbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAtMjAlO1xcbiAgcGFkZGluZzogN3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRyYW5zaXRpb246IDMwMG1zO1xcbn1cXG4udW5pdC10b2dnbGVfX2J1dHRvbi0tQyB7XFxuICB0cmFuc2l0aW9uOiAzMDBtcztcXG4gIGxlZnQ6IDIwJTtcXG59XFxuXFxuLmRpc3BsYXktY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIG1pbi13aWR0aDogODAlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIG1hcmdpbi10b3A6IDIuNWVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgY29sb3I6ICNmYWZhZmE7XFxuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgIzAwMCwgMXB4IC0xcHggMCAjMDAwLCAtMXB4IDFweCAwICMwMDAsIDFweCAxcHggMCAjMDAwO1xcbn1cXG4uZGlzcGxheS1jb250YWluZXJfX2xvY2F0aW9uIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5kaXNwbGF5LWNvbnRhaW5lcl9fY29uZGl0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuXFxuLnRlbXBlcmF0dXJlX19sYWJlbCB7XFxuICBtYXJnaW4tdG9wOiAwLjJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50ZW1wZXJhdHVyZV9fZGF0YSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW4tbGVmdDogMC41ZW07XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgdHJhbnNpdGlvbjogNzAwbXM7XFxufVxcbi50ZW1wZXJhdHVyZS0taGlkZGVuIHtcXG4gIHRyYW5zaXRpb246IDcwMG1zO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcblxcbi5kYXkge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5uaWdodCB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBT0E7RUFDRSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQU5GOztBQVNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBTkY7O0FBU0E7RUFDRSxhQUFBO0FBTkY7O0FBU0E7RUFDRSx1QkF0Qlk7RUF1Qlosa0JBQUE7RUFDQSxjQUFBO0FBTkY7O0FBU0E7RUFDRSxlQUFBO0VBQ0EsMkJBNUJnQjtBQXNCbEI7O0FBU0E7RUFDRSw4QkFBQTtBQU5GO0FBT0U7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUxKO0FBT0U7RUFDRSwyQkF2Q2M7RUF3Q2Qsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFMSjs7QUFTQTtFQUNFLHNCQUFBO0VBQ0EsaUJBaER1QjtFQWlEdkIsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFORjtBQU9FO0VBQ0UsY0F6RE07QUFvRFY7QUFPRTtFQUNFLG1CQUFBO0VBQ0EsaUJBekRxQjtBQW9EekI7O0FBU0E7RUFDRSxtQkFBQTtBQU5GO0FBT0U7RUFDRSxnQkFBQTtBQUxKO0FBTUk7RUFDRSxjQXZFSTtBQW1FVjtBQU1JO0VBQ0UsY0F6RUk7QUFxRVY7QUFPRTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkEvRU07RUFnRk4sbUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQUxKO0FBTUk7RUFDRSxpQkFBQTtFQUNBLHlCQXZGSTtBQW1GVjtBQU9FO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQTVGYTtFQTZGYixrQkFBQTtFQUNBLGlCQUFBO0FBTEo7QUFNSTtFQUNFLGlCQUFBO0VBQ0EsU0FBQTtBQUpOOztBQVNBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLCtFQUFBO0FBTkY7QUFRRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFOSjtBQVFFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQU5KOztBQVdFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBUko7QUFVRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQW5JcUI7QUEySHpCO0FBVUU7RUFDRSxpQkF0SXFCO0VBdUlyQixVQUFBO0VBQ0EsbUJBQUE7QUFSSjs7QUFZQTtFQUNFLG1EQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQVRGOztBQVlBO0VBQ0UsbURBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FBVEZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGNvbG9yLUM6ICMwMDczZGI7XFxuJGNvbG9yLUY6IHJnYigyMTksIDg1LCA4NSk7XFxuJHRvZ2dsZS1vdXRsaW5lOiByZ2IoMjYsIDI2LCAyNik7XFxuJHRpdGxlLWNvbG9yOiB3aGl0ZTtcXG4kZm9ybS1hcmVhLWNvbG9yOiBidXJseXdvb2Q7XFxuJGRpc3BsYXktbXNnLXRyYW5zaXRpb246IDcwMG1zO1xcblxcbioge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5mbGV4LWNvbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICR0aXRsZS1jb2xvcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgcGFkZGluZzogMC43N2VtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGZvcm0tYXJlYS1jb2xvcjtcXG59XFxuXFxuLmZvcm0ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgJl9faW5wdXQtYm94IHtcXG4gICAgd2lkdGg6IDEyLjVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICAmX19zdWJtaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9ybS1hcmVhLWNvbG9yO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIG1hcmdpbi10b3A6IDAuNGVtO1xcbiAgICBwYWRkaW5nOiAwIDAuM2VtO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgfVxcbn1cXG5cXG4uc3RhdHVzLW1lc3NhZ2Uge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcXG4gIHRyYW5zaXRpb246ICRkaXNwbGF5LW1zZy10cmFuc2l0aW9uO1xcbiAgaGVpZ2h0OiAxZW07XFxuICBtYXJnaW4tdG9wOiAwLjRlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAmLS1lcnJvciB7XFxuICAgIGNvbG9yOiAkY29sb3ItRjtcXG4gIH1cXG4gICYtLXZpc2libGUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2l0aW9uOiAkZGlzcGxheS1tc2ctdHJhbnNpdGlvbjtcXG4gIH1cXG59XFxuXFxuLnVuaXQtdG9nZ2xlIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAmX19sZXR0ZXIge1xcbiAgICBtYXJnaW46IDAgMC4zOGVtO1xcbiAgICAmLS1DIHtcXG4gICAgICBjb2xvcjogJGNvbG9yLUM7XFxuICAgIH1cXG4gICAgJi0tRiB7XFxuICAgICAgY29sb3I6ICRjb2xvci1GO1xcbiAgICB9XFxuICB9XFxuICAmX19iYWNrZ3JvdW5kIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1GO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICB3aWR0aDogMi4xcmVtO1xcbiAgICBib3JkZXI6IHNvbGlkICR0b2dnbGUtb3V0bGluZSAxcHg7XFxuICAgIHRyYW5zaXRpb246IDMwMG1zO1xcbiAgICAmLS1DIHtcXG4gICAgICB0cmFuc2l0aW9uOiAzMDBtcztcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItQztcXG4gICAgfVxcbiAgfVxcbiAgJl9fYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAtMjAlO1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0b2dnbGUtb3V0bGluZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB0cmFuc2l0aW9uOiAzMDBtcztcXG4gICAgJi0tQyB7XFxuICAgICAgdHJhbnNpdGlvbjogMzAwbXM7XFxuICAgICAgbGVmdDogMjAlO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5kaXNwbGF5LWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAxZW07XFxuICBtaW4td2lkdGg6IDgwJTtcXG4gIHdpZHRoOiA1MCU7XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBtYXJnaW4tdG9wOiAyLjVlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGNvbG9yOiAjZmFmYWZhO1xcbiAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAwICMwMDAsIDFweCAtMXB4IDAgIzAwMCwgLTFweCAxcHggMCAjMDAwLFxcbiAgICAxcHggMXB4IDAgIzAwMDtcXG4gICZfX2xvY2F0aW9uIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbiAgJl9fY29uZGl0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgfVxcbn1cXG5cXG4udGVtcGVyYXR1cmUge1xcbiAgJl9fbGFiZWwge1xcbiAgICBtYXJnaW4tdG9wOiAwLjJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcbiAgJl9fZGF0YSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICB0cmFuc2l0aW9uOiAkZGlzcGxheS1tc2ctdHJhbnNpdGlvbjtcXG4gIH1cXG4gICYtLWhpZGRlbiB7XFxuICAgIHRyYW5zaXRpb246ICRkaXNwbGF5LW1zZy10cmFuc2l0aW9uO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgfVxcbn1cXG5cXG4uZGF5IHtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi9pbWcvZGF5LmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLm5pZ2h0IHtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi9pbWcvbmlnaHQuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IEFQSV9LRVkgPSBcIjliY2IxYzYxOWExZDRlNTJiNWYxMDU4MTgyMjE0MDNcIjtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudEZvcmVjYXN0RnJvbVdlYXRoZXJTZXJ2ZXIocXVlcnlMb2NhdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PSR7QVBJX0tFWX0mcT0ke3F1ZXJ5TG9jYXRpb259JmRheXM9NyZhcWk9bm9gXG4gICAgKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoXCJOZXR3b3JrRXJyb3JcIikpIHtcbiAgICAgIHRocm93IFwiVW5hYmxlIHRvIGNvbm5lY3QgdG8gc2VydmVyLlwiO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQge2dldEN1cnJlbnRGb3JlY2FzdEZyb21XZWF0aGVyU2VydmVyfTtcbiIsImV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJXZWF0aGVyRGF0YSh3ZWF0aGVyRGF0YSkge1xuICBpZiAod2VhdGhlckRhdGEuZXJyb3IpIHtcbiAgICB0aHJvdyB3ZWF0aGVyRGF0YS5lcnJvci5tZXNzYWdlO1xuICB9XG4gIGNvbnN0IGxvY2F0aW9uID0gZmlsdGVyTG9jYXRpb24od2VhdGhlckRhdGEubG9jYXRpb24pO1xuICBjb25zdCBjdXJyZW50ID0gZmlsdGVyQ3VycmVudCh3ZWF0aGVyRGF0YS5jdXJyZW50KTtcbiAgY29uc3QgYXJlYVVzZXNGYWhyZW5oZWl0ID0gZG9lc0FyZWFVc2VGYWhyZW5oZWl0KFxuICAgIHdlYXRoZXJEYXRhLmxvY2F0aW9uLmNvdW50cnlcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIGxvY2F0aW9uLFxuICAgIGN1cnJlbnQsXG4gICAgYXJlYVVzZXNGYWhyZW5oZWl0LFxuICB9O1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJMb2NhdGlvbihsb2NhdGlvbikge1xuICBjb25zdCBjaXR5ID0gbG9jYXRpb24ubmFtZTtcbiAgaWYgKGxvY2F0aW9uLmNvdW50cnkuaW5jbHVkZXMoXCJVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2FcIikpIHtcbiAgICBjb25zdCBzdGF0ZU9yQ291bnRyeSA9IGxvY2F0aW9uLnJlZ2lvbjtcbiAgICByZXR1cm4geyBjaXR5LCBzdGF0ZU9yQ291bnRyeSB9O1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHN0YXRlT3JDb3VudHJ5ID0gbG9jYXRpb24uY291bnRyeTtcbiAgICByZXR1cm4geyBjaXR5LCBzdGF0ZU9yQ291bnRyeSB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbHRlckN1cnJlbnQoY3VycmVudCkge1xuICBjb25zdCBjb25kaXRpb24gPSBmaWx0ZXJDb25kaXRpb24oY3VycmVudC5jb25kaXRpb24pO1xuICBjb25zdCB0ZW1wX2MgPSBjdXJyZW50LnRlbXBfYztcbiAgY29uc3QgdGVtcF9mID0gY3VycmVudC50ZW1wX2Y7XG4gIGNvbnN0IGlzX2RheSA9IGN1cnJlbnQuaXNfZGF5O1xuICBjb25zdCBodW1pZGl0eSA9IGN1cnJlbnQuaHVtaWRpdHk7XG4gIGNvbnN0IGZlZWxzbGlrZV9jID0gY3VycmVudC5mZWVsc2xpa2VfYztcbiAgY29uc3QgZmVlbHNsaWtlX2YgPSBjdXJyZW50LmZlZWxzbGlrZV9mO1xuXG4gIHJldHVybiB7XG4gICAgY29uZGl0aW9uLFxuICAgIHRlbXBfYyxcbiAgICB0ZW1wX2YsXG4gICAgaXNfZGF5LFxuICAgIGh1bWlkaXR5LFxuICAgIGZlZWxzbGlrZV9jLFxuICAgIGZlZWxzbGlrZV9mLFxuICB9O1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJDb25kaXRpb24oY29uZGl0aW9uKSB7XG4gIGNvbnN0IHRleHQgPSBjb25kaXRpb24udGV4dDtcbiAgY29uc3QgaWNvbiA9IFwiaHR0cHM6XCIgKyBjb25kaXRpb24uaWNvbjtcbiAgcmV0dXJuIHsgdGV4dCwgaWNvbiB9O1xufVxuXG5mdW5jdGlvbiBkb2VzQXJlYVVzZUZhaHJlbmhlaXQoYXJlYSkge1xuICBjb25zdCBhcmVhc1RoYXRVc2VGYWhyZW5oZWl0ID0gW1xuICAgIFwiUGFsYXVcIixcbiAgICBcIkJlcm11ZGFcIixcbiAgICBcIkJlbGl6ZVwiLFxuICAgIFwiVHVya3MgYW5kIENhaWNvcyBJc2xhbmRzXCIsXG4gICAgXCJMaWJlcmlhXCIsXG4gICAgXCJCYWhhbWFzXCIsXG4gICAgXCJTYWludCBLaXR0cyBhbmQgTmV2aXNcIixcbiAgICBcIk1vbnRzZXJyYXRcIixcbiAgICBcIkNheW1hbiBJc2xhbmRzXCIsXG4gICAgXCJBbnRpZ3VhIGFuZCBCYXJidWRhXCIsXG4gICAgXCJWaXJnaW4gSXNsYW5kc1wiLFxuICAgIFwiTWljcm9uZXNpYVwiLFxuICAgIFwiVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhXCIsXG4gICAgXCJNYXJzaGFsbCBJc2xhbmRzXCIsXG4gIF07XG5cbiAgcmV0dXJuIGFyZWFzVGhhdFVzZUZhaHJlbmhlaXQuaW5jbHVkZXMoYXJlYSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0Rm9ybVZhbHVlKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0W1wibG9jYXRpb25cIl0udmFsdWU7XG4gIGlmICh2YWx1ZSA9PT0gXCJcIikge1xuICAgIHRocm93IFwiUGxlYXNlIGVudGVyIHlvdXIgY2l0eSBhbmQgc3RhdGUvY291bnRyeS5cIjtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZS50cmltKCk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gcmVuZGVyUGFnZUJhc2VkT25EYXRhKGRhdGEpIHtcbiAgY29uc3QgZGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheS1jb250YWluZXJcIik7XG4gIGNsZWFyRGlzcGxheShkaXNwbGF5Q29udGFpbmVyKTtcblxuICBjb25zdCB7IGxvY2F0aW9uLCBjdXJyZW50IH0gPSBkYXRhO1xuICBjb25zdCBsb2NhdGlvbkRpc3BsYXkgPSByZW5kZXJMb2NhdGlvbk5hbWUobG9jYXRpb24pO1xuICBjb25zdCBjdXJyZW50V2VhdGhlckRpc3BsYXkgPSByZW5kZXJDdXJyZW50V2VhdGhlcihjdXJyZW50KTtcblxuICBkaXNwbGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uRGlzcGxheSk7XG4gIGRpc3BsYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXJEaXNwbGF5KTtcblxuICBjaGFuZ2VTdHlsZVRvRGF5T3JOaWdodChjdXJyZW50LCBkaXNwbGF5Q29udGFpbmVyKTtcbiAgc2V0VGVtcFVuaXREZWZhdWx0QmFzZWRPbkFyZWEoZGF0YSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckxvY2F0aW9uTmFtZShsb2NhdGlvbikge1xuICBjb25zdCB7IGNpdHksIHN0YXRlT3JDb3VudHJ5IH0gPSBsb2NhdGlvbjtcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNwYW4uY2xhc3NMaXN0LmFkZChcImRpc3BsYXktY29udGFpbmVyX19sb2NhdGlvblwiKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9IGAke2NpdHl9LCAke3N0YXRlT3JDb3VudHJ5fWA7XG4gIHJldHVybiBzcGFuO1xufVxuXG5mdW5jdGlvbiBjbGVhckRpc3BsYXkoZGlzcGxheSkge1xuICBkaXNwbGF5LnRleHRDb250ZW50ID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ3VycmVudFdlYXRoZXIoY3VycmVudCkge1xuICBjb25zdCBjdXJyZW50V2VhdGhlckRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gIGNvbnN0IGNvbmRpdGlvbkRpc3BsYXkgPSByZW5kZXJDb25kaXRpb24oY3VycmVudC5jb25kaXRpb24pO1xuICBjb25zdCB0ZW1wZXJhdHVyZURpc3BsYXkgPSByZW5kZXJUZW1wZXJhdHVyZXMoY3VycmVudCk7XG4gIGNvbnN0IGh1bWlkaXR5RGlzcGxheSA9IHJlbmRlckh1bWlkaXR5KGN1cnJlbnQuaHVtaWRpdHkpO1xuXG4gIGN1cnJlbnRXZWF0aGVyRGlzcGxheS5hcHBlbmRDaGlsZChjb25kaXRpb25EaXNwbGF5KTtcbiAgY3VycmVudFdlYXRoZXJEaXNwbGF5LmFwcGVuZENoaWxkKHRlbXBlcmF0dXJlRGlzcGxheSk7XG4gIGN1cnJlbnRXZWF0aGVyRGlzcGxheS5hcHBlbmRDaGlsZChodW1pZGl0eURpc3BsYXkpO1xuXG4gIHJldHVybiBjdXJyZW50V2VhdGhlckRpc3BsYXk7XG5cbiAgZnVuY3Rpb24gcmVuZGVyQ29uZGl0aW9uKGNvbmRpdGlvbikge1xuICAgIGNvbnN0IGNvbmRpdGlvbkZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25kaXRpb25GcmFnbWVudC5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheS1jb250YWluZXJfX2NvbmRpdGlvblwiKTtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpY29uLnNyYyA9IGNvbmRpdGlvbi5pY29uO1xuICAgIGljb24uYWx0ID0gYCR7Y29uZGl0aW9uLnRleHR9IGljb25gO1xuICAgIGNvbnN0IGNvbmRpdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbmRpdGlvblRleHQudGV4dENvbnRlbnQgPSBjb25kaXRpb24udGV4dDtcbiAgICBjb25kaXRpb25GcmFnbWVudC5hcHBlbmRDaGlsZChpY29uKTtcbiAgICBjb25kaXRpb25GcmFnbWVudC5hcHBlbmRDaGlsZChjb25kaXRpb25UZXh0KTtcbiAgICByZXR1cm4gY29uZGl0aW9uRnJhZ21lbnQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJUZW1wZXJhdHVyZXMoY3VycmVudCkge1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGVtcGVyYXR1cmVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wZXJhdHVyZVwiKTtcblxuICAgIGNvbnN0IGN1cnJlbnRUZW1wID0gcmVuZGVyVGVtcGVyYXR1cmVFbGVtZW50KFxuICAgICAgXCJDdXJyZW50OlwiLFxuICAgICAgY3VycmVudC50ZW1wX2MsXG4gICAgICBjdXJyZW50LnRlbXBfZlxuICAgICk7XG4gICAgdGVtcGVyYXR1cmVTZWN0aW9uLmFwcGVuZENoaWxkKGN1cnJlbnRUZW1wKTtcblxuICAgIGNvbnN0IGZlZWxzTGlrZVRlbXAgPSByZW5kZXJUZW1wZXJhdHVyZUVsZW1lbnQoXG4gICAgICBcIkZlZWxzIExpa2U6XCIsXG4gICAgICBjdXJyZW50LmZlZWxzbGlrZV9jLFxuICAgICAgY3VycmVudC5mZWVsc2xpa2VfZlxuICAgICk7XG4gICAgdGVtcGVyYXR1cmVTZWN0aW9uLmFwcGVuZENoaWxkKGZlZWxzTGlrZVRlbXApO1xuICAgIHJldHVybiB0ZW1wZXJhdHVyZVNlY3Rpb247XG5cbiAgICBmdW5jdGlvbiByZW5kZXJUZW1wZXJhdHVyZUVsZW1lbnQoXG4gICAgICB0ZW1wZXJhdHVyZUxhYmVsVGV4dCxcbiAgICAgIC4uLnRlbXBlcmF0dXJlRGF0YVxuICAgICkge1xuICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcInRlbXBlcmF0dXJlX19sYWJlbFwiKTtcbiAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gdGVtcGVyYXR1cmVMYWJlbFRleHQ7XG5cbiAgICAgIGNvbnN0IHRlbXBJbkMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHRlbXBJbkMuY2xhc3NMaXN0LmFkZChcInRlbXBlcmF0dXJlX19jXCIsIFwidGVtcGVyYXR1cmVfX2RhdGFcIik7XG4gICAgICB0ZW1wSW5DLnRleHRDb250ZW50ID0gYCAke3RlbXBlcmF0dXJlRGF0YVswXX0gQ2A7XG4gICAgICBsYWJlbC5hcHBlbmRDaGlsZCh0ZW1wSW5DKTtcblxuICAgICAgY29uc3QgdGVtcEluRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgdGVtcEluRi5jbGFzc0xpc3QuYWRkKFwidGVtcGVyYXR1cmVfX2ZcIiwgXCJ0ZW1wZXJhdHVyZV9fZGF0YVwiKTtcbiAgICAgIHRlbXBJbkYudGV4dENvbnRlbnQgPSBgICR7dGVtcGVyYXR1cmVEYXRhWzFdfSBGYDtcbiAgICAgIGxhYmVsLmFwcGVuZENoaWxkKHRlbXBJbkYpO1xuXG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVySHVtaWRpdHkoaHVtaWRpdHlEYXRhKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wZXJhdHVyZV9fbGFiZWxcIik7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBcIkh1bWlkaXR5OlwiO1xuXG4gICAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBodW1pZGl0eS5jbGFzc0xpc3QuYWRkKFwidGVtcGVyYXR1cmVfX2RhdGFcIik7XG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgICR7aHVtaWRpdHlEYXRhfSVgO1xuICAgIGxhYmVsLmFwcGVuZENoaWxkKGh1bWlkaXR5KTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VTdHlsZVRvRGF5T3JOaWdodChjdXJyZW50KSB7XG4gIGNvbnN0IGRpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXktY29udGFpbmVyXCIpO1xuICBjb25zdCBpc0RheSA9IGN1cnJlbnQuaXNfZGF5O1xuICBpZiAoaXNEYXkpIHtcbiAgICBkaXNwbGF5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkYXlcIik7XG4gICAgZGlzcGxheUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwibmlnaHRcIik7XG4gIH0gZWxzZSB7XG4gICAgZGlzcGxheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmlnaHRcIik7XG4gICAgZGlzcGxheUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZGF5XCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldFRlbXBVbml0RGVmYXVsdEJhc2VkT25BcmVhKGRhdGEpIHtcbiAgaWYgKGRhdGEuYXJlYVVzZXNGYWhyZW5oZWl0KSB7XG4gICAgaGlkZUNlbHNpdXNUZW1wcygpO1xuICAgIHNldFRvZ2dsZVRvRigpO1xuICB9IGVsc2Uge1xuICAgIGhpZGVGYWhyZW5oZWl0VGVtcHMoKTtcbiAgICBzZXRUb2dnbGVUb0MoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVDZWxzaXVzVGVtcHMoKSB7XG4gICAgaGlkZVRlbXBzKFwiY1wiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVGYWhyZW5oZWl0VGVtcHMoKSB7XG4gICAgaGlkZVRlbXBzKFwiZlwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVUZW1wcyh1bml0KSB7XG4gICAgY29uc3QgdGVtcHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnRlbXBlcmF0dXJlX18ke3VuaXR9YCldO1xuICAgIHRlbXBzLmZvckVhY2goKHRlbXApID0+IHRlbXAuY2xhc3NMaXN0LmFkZChcInRlbXBlcmF0dXJlLS1oaWRkZW5cIikpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0VG9nZ2xlVG9DKCkge1xuICAgIGNvbnN0IHRvZ2dsZUJhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVuaXQtdG9nZ2xlX19iYWNrZ3JvdW5kXCIpO1xuICAgIGNvbnN0IHRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudW5pdC10b2dnbGVfX2J1dHRvblwiKTtcbiAgICB0b2dnbGVCYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoXCJ1bml0LXRvZ2dsZV9fYmFja2dyb3VuZC0tQ1wiKTtcbiAgICB0b2dnbGVCdXR0b24uY2xhc3NMaXN0LmFkZChcInVuaXQtdG9nZ2xlX19idXR0b24tLUNcIik7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRUb2dnbGVUb0YoKSB7XG4gICAgY29uc3QgdG9nZ2xlQmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudW5pdC10b2dnbGVfX2JhY2tncm91bmRcIik7XG4gICAgY29uc3QgdG9nZ2xlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51bml0LXRvZ2dsZV9fYnV0dG9uXCIpO1xuICAgIHRvZ2dsZUJhY2tncm91bmQuY2xhc3NMaXN0LnJlbW92ZShcInVuaXQtdG9nZ2xlX19iYWNrZ3JvdW5kLS1DXCIpO1xuICAgIHRvZ2dsZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwidW5pdC10b2dnbGVfX2J1dHRvbi0tQ1wiKTtcbiAgfVxufVxuIiwiY29uc3Qgc3RhdHVzTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhdHVzLW1lc3NhZ2VcIik7XG5cbmZ1bmN0aW9uIGRpc3BsYXlTdGF0dXMobWVzc2FnZSkge1xuICBzdGF0dXNNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGF0dXMtbWVzc2FnZS0tZXJyb3JcIik7XG4gIHN0YXR1c01lc3NhZ2UuY2xhc3NMaXN0LmFkZChcInN0YXR1cy1tZXNzYWdlLS12aXNpYmxlXCIpO1xuICBzdGF0dXNNZXNzYWdlLnRleHRDb250ZW50ID0gbWVzc2FnZTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUVycm9yKGVycm9yKSB7XG4gIHN0YXR1c01lc3NhZ2UuY2xhc3NMaXN0LmFkZChcInN0YXR1cy1tZXNzYWdlLS1lcnJvclwiKTtcbiAgc3RhdHVzTWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwic3RhdHVzLW1lc3NhZ2UtLXZpc2libGVcIik7XG4gIHN0YXR1c01lc3NhZ2UudGV4dENvbnRlbnQgPSBlcnJvcjtcbn1cblxuZnVuY3Rpb24gY2xlYXJNZXNzYWdlcygpIHtcbiAgc3RhdHVzTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKFwic3RhdHVzLW1lc3NhZ2UtLWVycm9yXCIpO1xuICBzdGF0dXNNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGF0dXMtbWVzc2FnZS0tdmlzaWJsZVwiKTtcbiAgc3RhdHVzTWVzc2FnZS50ZXh0Q29udGVudCA9IFwiXCI7XG59XG5cbmV4cG9ydCB7IGRpc3BsYXlTdGF0dXMsIGRpc3BsYXlFcnJvciwgY2xlYXJNZXNzYWdlcyB9O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVVuaXRUb2dnbGVDbGljayhldmVudCkge1xuICBpZiAoaXNEaXNwbGF5RW1wdHkoKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjaGFuZ2VDbGFzc0ZvclRvZ2dsZUJ1dHRvbigpO1xuICBjaGFuZ2VDbGFzc0ZvclRlbXBlcmF0dXJlcygpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VDbGFzc0ZvclRvZ2dsZUJ1dHRvbigpIHtcbiAgY29uc3QgYnV0dG9uQmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudW5pdC10b2dnbGVfX2JhY2tncm91bmRcIik7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudW5pdC10b2dnbGVfX2J1dHRvblwiKTtcbiAgYnV0dG9uQmFja2dyb3VuZC5jbGFzc0xpc3QudG9nZ2xlKFwidW5pdC10b2dnbGVfX2JhY2tncm91bmQtLUNcIik7XG4gIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwidW5pdC10b2dnbGVfX2J1dHRvbi0tQ1wiKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlQ2xhc3NGb3JUZW1wZXJhdHVyZXMoKSB7XG4gIGNvbnN0IHRlbXBzSW5DID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGVtcGVyYXR1cmVfX2NcIildO1xuICBjb25zdCB0ZW1wc0luRiA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRlbXBlcmF0dXJlX19mXCIpXTtcbiAgY29uc3QgYWxsVGVtcHMgPSB0ZW1wc0luQy5jb25jYXQodGVtcHNJbkYpO1xuICBhbGxUZW1wcy5mb3JFYWNoKCh0ZW1wKSA9PiB0ZW1wLmNsYXNzTGlzdC50b2dnbGUoXCJ0ZW1wZXJhdHVyZS0taGlkZGVuXCIpKTtcbn1cblxuZnVuY3Rpb24gaXNEaXNwbGF5RW1wdHkoKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXktY29udGFpbmVyXCIpLnRleHRDb250ZW50ID09PSBcIlwiO1xufVxuIiwiaW1wb3J0IHsgZmlsdGVyV2VhdGhlckRhdGEgfSBmcm9tIFwiLi4vbW9kdWxlcy9maWx0ZXItZGF0YVwiO1xuaW1wb3J0IHsgZ2V0Q3VycmVudEZvcmVjYXN0RnJvbVdlYXRoZXJTZXJ2ZXIgfSBmcm9tIFwiLi4vbW9kdWxlcy9hcGktZmV0Y2hcIjtcblxubGV0IGxpc3RPZkZBcmVhcyA9IFtdO1xuZm4oXCJNb250c2VycmF0XCIpO1xuZm4oXCJOZ2VydWxtdWQsUGFsYXVcIik7XG5mbihcIkJyaXRpc2ggVmlyZ2luIElzbGFuZHNcIik7XG5mbihcIlR1cmtzIEFuZCBDYWljb3MgSXNsYW5kc1wiKTtcbmZuKFwiU2FpbnQgS2l0dHMgQW5kIE5ldmlzXCIpO1xuZm4oXCJNYXJzaGFsbCBJc2xhbmRzXCIpO1xuZm4oXCJCZXJtdWRhXCIpO1xuZm4oXCJDYXltYW4gSXNsYW5kc1wiKTtcbmZuKFwiQmFyYnVkYVwiKTtcbmZuKFwiTWljcm9uZXNpYVwiKTtcbmZuKFwiQmFoYW1hc1wiKTtcbmZuKFwiQmVsaXplXCIpO1xuZm4oXCJMaWJlcmlhXCIpO1xuZm4oXCJ1bml0ZWQgc3RhdGVzIG9mIGFtZXJpY2FcIik7XG5mbihcImxvbmRvblwiKTtcblxuZnVuY3Rpb24gZ2V0Q291bnRyeUZyb21EYXRhKGRhdGEpIHtcbiAgY29uc3QgY291bnRyeSA9IGRhdGEubG9jYXRpb24uY291bnRyeTtcbiAgbGlzdE9mRkFyZWFzLnB1c2goY291bnRyeSk7XG59XG5cbmZ1bmN0aW9uIGZpbHRlclRlc3QoZGF0YSkge1xuICBmaWx0ZXJXZWF0aGVyRGF0YShkYXRhKTtcbn1cblxuZnVuY3Rpb24gZm4obmFtZSkge1xuICBnZXRDdXJyZW50Rm9yZWNhc3RGcm9tV2VhdGhlclNlcnZlcihuYW1lKS50aGVuKGZpbHRlclRlc3QpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCIvLyBUTy1ETyByZW1vdmUgdGVzdFxuLy8gaW1wb3J0ICcuL3Rlc3RzL3Rlc3QtZGF0YS1mb3Itc3R5bGluZydcbmltcG9ydCAnLi90ZXN0cy91c2VzLWZhaHJlbmhlaXQtdGVzdHMnXG4vLyBUTy1ETyByZW1vdmUgdGVzdFxuXG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcbmltcG9ydCB7XG4gIGNsZWFyTWVzc2FnZXMsXG4gIGRpc3BsYXlFcnJvcixcbiAgZGlzcGxheVN0YXR1cyxcbn0gZnJvbSBcIi4vbW9kdWxlcy9zdGF0dXMtbWVzc2FnZXNcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRGb3JlY2FzdEZyb21XZWF0aGVyU2VydmVyIH0gZnJvbSBcIi4vbW9kdWxlcy9hcGktZmV0Y2hcIjtcbmltcG9ydCB7IGZpbHRlcldlYXRoZXJEYXRhIH0gZnJvbSBcIi4vbW9kdWxlcy9maWx0ZXItZGF0YVwiO1xuaW1wb3J0IHsgZ2V0Rm9ybVZhbHVlIH0gZnJvbSBcIi4vbW9kdWxlcy9oYW5kbGUtaW5wdXRcIjtcbmltcG9ydCB7IHJlbmRlclBhZ2VCYXNlZE9uRGF0YSB9IGZyb20gXCIuL21vZHVsZXMvcmVuZGVyLWRhdGFcIjtcbmltcG9ydCB7IGhhbmRsZVVuaXRUb2dnbGVDbGljayB9IGZyb20gXCIuL21vZHVsZXMvdW5pdC10b2dnbGVcIjtcblxuLy9pbml0IGJ1dHRvbiB0aGF0IHRvZ2dsZXMgYmV0d2VlbiBmYWhyZW5oZWl0IGFuZCBjZWxzaXVzXG5jb25zdCB1bml0VG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51bml0LXRvZ2dsZVwiKTtcbnVuaXRUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVVuaXRUb2dnbGVDbGljayk7XG5cbi8vaW5pdCBzZWFyY2ggZm9ybSBmdW5jdGlvbmFsaXR5XG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlU3VibWl0KTtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdmFsdWUgPSBnZXRGb3JtVmFsdWUoZXZlbnQpO1xuICAgIGRpc3BsYXlTdGF0dXMoXCJHYXRoZXJpbmcgV2VhdGhlciBJbmZvXCIpO1xuICAgIGNvbnN0IHJhd0RhdGEgPSBhd2FpdCBnZXRDdXJyZW50Rm9yZWNhc3RGcm9tV2VhdGhlclNlcnZlcih2YWx1ZSk7XG4gICAgZGlzcGxheVN0YXR1cyhcIkRpc3BsYXlpbmcgV2VhdGhlciBJbmZvXCIpO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gZmlsdGVyV2VhdGhlckRhdGEocmF3RGF0YSk7XG4gICAgcmVuZGVyUGFnZUJhc2VkT25EYXRhKHdlYXRoZXJEYXRhKTtcbiAgICBjbGVhck1lc3NhZ2VzKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIGRpc3BsYXlFcnJvcihlcnJvcik7XG4gIH1cbiAgZm9ybS5yZXNldCgpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9