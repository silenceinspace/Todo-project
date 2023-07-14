/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* put styles into a few different files */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#content {
  width: 420px;
  display: grid;
  grid-template-columns: 120px 300px;
  grid-template-rows: 120px minmax(300px, 1fr);
  background-color: darkcyan;

  & button:hover {
    text-decoration: underline;
    cursor: pointer;
    color: red;
  }
}

.default-div {
  grid-row: 1/2;
  grid-column: 1/2;

  display: grid;
  grid-template-rows: 30px;
  gap: 10px;

  border: blue 2px solid;

  & button {
    font-size: 1.2rem;
    font-weight: bold;

    background-color: white;
    color: orange;
    border: none;
  }
}

.project-div {
  grid-column: 1/2;
  grid-row: 2/3;
  margin-top: 10px;

  width: 120px;
  display: grid;
  grid-auto-rows: 30px;
  gap: 10px;

  border: green solid 2px;

  & div {
    display: flex;

    & button {
      font-size: 1.2rem;
      font-weight: bold;
      text-align: center;
      width: 100px;
      height: 30px;

      background-color: coral;
      color: skyblue;
      border: none;
    }

    & span {
      color: white;
      background-color: grey;
      font-size: 1.4rem;
      font-weight: bold;

      &:hover {
        cursor: pointer;
        color: blue;
      }
    }
  }
}

.todo-div {
  grid-column: 2/3;
  grid-row: 1/3;

  border: purple solid 2px;

  & > button {
    background-color: coral;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    border: none;
    padding: 5px;
    margin: 10px;
  }

  & .display-tasks {
    border-top: solid 5px orange;
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr;
    gap: 10px;

    & .task-field {
      padding: 5px 10px;
      font-size: 1.3rem;
      font-style: italic;
      border-bottom: 2px solid black;
      position: relative;

      & .rmv-task {
        padding: 5px 8px;
        position: absolute;
        top: 10px;
        right: 10px;

        color: white;
        font-size: 1.2rem;
        font-weight: bold;
        background-color: red;
        border: none;
        border-radius: 5px;
      }
    }
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,0CAA0C;AAC1C;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kCAAkC;EAClC,4CAA4C;EAC5C,0BAA0B;;EAE1B;IACE,0BAA0B;IAC1B,eAAe;IACf,UAAU;EACZ;AACF;;AAEA;EACE,aAAa;EACb,gBAAgB;;EAEhB,aAAa;EACb,wBAAwB;EACxB,SAAS;;EAET,sBAAsB;;EAEtB;IACE,iBAAiB;IACjB,iBAAiB;;IAEjB,uBAAuB;IACvB,aAAa;IACb,YAAY;EACd;AACF;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,gBAAgB;;EAEhB,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,SAAS;;EAET,uBAAuB;;EAEvB;IACE,aAAa;;IAEb;MACE,iBAAiB;MACjB,iBAAiB;MACjB,kBAAkB;MAClB,YAAY;MACZ,YAAY;;MAEZ,uBAAuB;MACvB,cAAc;MACd,YAAY;IACd;;IAEA;MACE,YAAY;MACZ,sBAAsB;MACtB,iBAAiB;MACjB,iBAAiB;;MAEjB;QACE,eAAe;QACf,WAAW;MACb;IACF;EACF;AACF;;AAEA;EACE,gBAAgB;EAChB,aAAa;;EAEb,wBAAwB;;EAExB;IACE,uBAAuB;IACvB,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,YAAY;EACd;;EAEA;IACE,4BAA4B;IAC5B,aAAa;IACb,mBAAmB;IACnB,0BAA0B;IAC1B,SAAS;;IAET;MACE,iBAAiB;MACjB,iBAAiB;MACjB,kBAAkB;MAClB,8BAA8B;MAC9B,kBAAkB;;MAElB;QACE,gBAAgB;QAChB,kBAAkB;QAClB,SAAS;QACT,WAAW;;QAEX,YAAY;QACZ,iBAAiB;QACjB,iBAAiB;QACjB,qBAAqB;QACrB,YAAY;QACZ,kBAAkB;MACpB;IACF;EACF;AACF","sourcesContent":["/* put styles into a few different files */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#content {\n  width: 420px;\n  display: grid;\n  grid-template-columns: 120px 300px;\n  grid-template-rows: 120px minmax(300px, 1fr);\n  background-color: darkcyan;\n\n  & button:hover {\n    text-decoration: underline;\n    cursor: pointer;\n    color: red;\n  }\n}\n\n.default-div {\n  grid-row: 1/2;\n  grid-column: 1/2;\n\n  display: grid;\n  grid-template-rows: 30px;\n  gap: 10px;\n\n  border: blue 2px solid;\n\n  & button {\n    font-size: 1.2rem;\n    font-weight: bold;\n\n    background-color: white;\n    color: orange;\n    border: none;\n  }\n}\n\n.project-div {\n  grid-column: 1/2;\n  grid-row: 2/3;\n  margin-top: 10px;\n\n  width: 120px;\n  display: grid;\n  grid-auto-rows: 30px;\n  gap: 10px;\n\n  border: green solid 2px;\n\n  & div {\n    display: flex;\n\n    & button {\n      font-size: 1.2rem;\n      font-weight: bold;\n      text-align: center;\n      width: 100px;\n      height: 30px;\n\n      background-color: coral;\n      color: skyblue;\n      border: none;\n    }\n\n    & span {\n      color: white;\n      background-color: grey;\n      font-size: 1.4rem;\n      font-weight: bold;\n\n      &:hover {\n        cursor: pointer;\n        color: blue;\n      }\n    }\n  }\n}\n\n.todo-div {\n  grid-column: 2/3;\n  grid-row: 1/3;\n\n  border: purple solid 2px;\n\n  & > button {\n    background-color: coral;\n    font-size: 1.2rem;\n    font-weight: bold;\n    color: white;\n    border: none;\n    padding: 5px;\n    margin: 10px;\n  }\n\n  & .display-tasks {\n    border-top: solid 5px orange;\n    display: grid;\n    grid-auto-rows: 1fr;\n    grid-template-columns: 1fr;\n    gap: 10px;\n\n    & .task-field {\n      padding: 5px 10px;\n      font-size: 1.3rem;\n      font-style: italic;\n      border-bottom: 2px solid black;\n      position: relative;\n\n      & .rmv-task {\n        padding: 5px 8px;\n        position: absolute;\n        top: 10px;\n        right: 10px;\n\n        color: white;\n        font-size: 1.2rem;\n        font-weight: bold;\n        background-color: red;\n        border: none;\n        border-radius: 5px;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/projectManagement.js":
/*!**********************************!*\
  !*** ./src/projectManagement.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   projectInterface: () => (/* binding */ projectInterface)
/* harmony export */ });


class Project {
  constructor(projectTitle) {
    this.projectTitle = projectTitle;
  }

  get titleOfProject() {
    return this.projectTitle;
  }

  set titleOfProject(value) {
    this.projectTitle = value;
  }
}

const projectInterface = {
  projects: [],

  add(elem) {
    this.projects.push(elem);
    return this.projects;
  },

  remove(value) {
    this.projects = this.projects.filter(
      (proj) => proj.titleOfProject !== value
    );

    return this.projects;
  },

  removeAssociatedTasks(proj, storage) {
    storage = storage.filter((task) => task.todoProject !== proj);

    return storage;
  },
};


/***/ }),

/***/ "./src/sectionWithDom.js":
/*!*******************************!*\
  !*** ./src/sectionWithDom.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendElement: () => (/* binding */ appendElement),
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   prependElement: () => (/* binding */ prependElement)
/* harmony export */ });


function createElement(name, className, text) {
  let elem = document.createElement(name);
  elem.classList.add(className);
  elem.textContent = text;

  return elem;
}

function appendElement(parent, child) {
  parent.append(child);
}

function prependElement(parent, child) {
  parent.prepend(child);
}

/*
Show all tasks for a particular project
Event delegation on projectDiv

let currentProject;
projectDiv.addEventListener("click", (e) => {
  currentProject = e.target.className;
  console.log(currentProject);
*/


/***/ }),

/***/ "./src/todosManipulations.js":
/*!***********************************!*\
  !*** ./src/todosManipulations.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo),
/* harmony export */   taskInterface: () => (/* binding */ taskInterface)
/* harmony export */ });
/* harmony import */ var _projectManagement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectManagement */ "./src/projectManagement.js");



class Todo extends _projectManagement__WEBPACK_IMPORTED_MODULE_0__.Project {
  // Creates a todo
  constructor(projectTitle, title, priority) {
    // Base class is Project that has a project property on its constructor
    super(projectTitle);
    this.title = title;
    this.priority = priority;
    this.id = self.crypto.randomUUID();
  }

  // Updates a todo
  get todoProject() {
    return this.projectTitle;
  }
  set todoProject(value) {
    this.projectTitle = value;
  }

  get todoTitle() {
    return this.title;
  }
  set todoTitle(value) {
    this.title = value;
  }

  get todoPriority() {
    return this.priority;
  }
  set todoPriority(value) {
    this.priority = value;
  }
}

// Interface for todos - what functionalities they have
const taskInterface = {
  // todos array will modify mainStorage array
  todos: [],
  add(elem) {
    this.todos.push(elem);
    return this.todos;
  },

  remove(value) {
    this.todos = this.todos.filter((task) => task.id !== value);
    return this.todos;
  },

  findAll(proj) {
    const arr = [];
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].projectTitle.toLowerCase() === proj.toLowerCase()) {
        arr.push(this.todos[i]);
      }
    }
    return arr;
  },

  // update(elem, property, value) {
  //   if (property.toLowerCase() === "title") {
  //     console.log(`Old title: ${elem.todoTitle}`);
  //     elem.todoTitle = value;
  //     console.log(`Updated title: ${value}`);
  //   } else if (property.toLowerCase() === "priority") {
  //     console.log(`Old title: ${elem.todoPriority}`);
  //     elem.todoPriority = value;
  //     console.log(`Updated priority: ${value}`);
  //   } else if (property.toLowerCase() === "project") {
  //     console.log(`Old title: ${elem.todoProject}`);
  //     elem.todoProject = value;
  //     console.log(`Updated property: ${value}`);
  //   }
  //   console.log(`Full details: "${elem.title}" title`);
  // },
};


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _todosManipulations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todosManipulations */ "./src/todosManipulations.js");
/* harmony import */ var _projectManagement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectManagement */ "./src/projectManagement.js");
/* harmony import */ var _sectionWithDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sectionWithDom */ "./src/sectionWithDom.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");






// Create the main layout
const content = document.querySelector("#content");
const defaultBlock = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", "default-div", "");
const projectBlock = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", "project-div", "");
const todoBlock = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", "todo-div", "");

(0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.appendElement)(content, defaultBlock);
(0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.appendElement)(content, projectBlock);
(0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.appendElement)(content, todoBlock);

// Default block
const inboxBtn = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createElement)("button", "btn-default", "inbox");
const today = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createElement)("button", "btn-today", "today");
const upcoming = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createElement)("button", "btn-upcoming", "upcoming");

(0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.appendElement)(defaultBlock, inboxBtn);
(0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.appendElement)(defaultBlock, today);
(0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.appendElement)(defaultBlock, upcoming);

// For now to allow task/project creation
const createTasksBtn = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createElement)("button", "create-tasks", "Create task");
const createProjectsBtn = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createElement)(
  "button",
  "create-projects",
  "Create project"
);
const displayForTasks = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", "display-tasks", "");

(0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.appendElement)(todoBlock, createTasksBtn);
(0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.appendElement)(todoBlock, createProjectsBtn);
(0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.appendElement)(todoBlock, displayForTasks);

// Main array where tasks are stored
let mainStorage = [];
console.log("Main storage:");
console.log(mainStorage);

// Create a todo
createTasksBtn.addEventListener("click", createTodo);
function createTodo() {
  let project = prompt("Project?", "");
  // Default project - if projectStorage.length == 0 ---> means that no custom projects yet
  if (project === "") {
    project = "inbox";
  }
  let title = prompt("Title", "");
  let priority = prompt("Priority", "");

  const task = new _todosManipulations__WEBPACK_IMPORTED_MODULE_0__.Todo(project, title, priority);
  mainStorage = _todosManipulations__WEBPACK_IMPORTED_MODULE_0__.taskInterface.add(task);
  console.log(mainStorage);
}

// Display all todos in a project
inboxBtn.addEventListener("click", displayTasksInProject);
projectBlock.addEventListener("click", displayTasksInProject);

function displayTasksInProject(e) {
  // Click occurs on the inside of a button
  const btn = e.target.closest("button");
  if (!btn) return;

  const projectName = e.target.textContent;
  console.log(projectName);

  const currentProject = _todosManipulations__WEBPACK_IMPORTED_MODULE_0__.taskInterface.findAll(projectName);

  // Clear the todo block not to duplicate appended elements
  displayForTasks.replaceChildren();

  for (let i = 0; i < currentProject.length; i++) {
    const taskField = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", "task-field", "");
    taskField.setAttribute("data-id", currentProject[i].id);
    const removeTask = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createElement)("button", "rmv-task", "X");
    const titlePara = currentProject[i].todoTitle;
    const projectPara = currentProject[i].todoProject;
    const priorityPara = currentProject[i].todoPriority;

    (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.appendElement)(displayForTasks, taskField);
    (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.appendElement)(taskField, removeTask);

    for (let j = 0; j < 3; j++) {
      let para;
      switch (j) {
        case 0:
          para = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createElement)("p", "task-title", `Title: ${titlePara}`);
          break;
        case 1:
          para = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createElement)("p", "task-project", `Project: ${projectPara}`);
          break;
        case 2:
          para = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createElement)(
            "p",
            "task-priority",
            `Priority: ${priorityPara}`
          );
      }
      (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.appendElement)(taskField, para);
    }
  }
}

// Remove a task
displayForTasks.addEventListener("click", removeTask);

function removeTask(e) {
  const btn = e.target.closest("button");
  if (!btn) return;

  const specificTask = e.target.closest("[data-id]");
  const id = specificTask.getAttribute("data-id");

  specificTask.remove();
  mainStorage = _todosManipulations__WEBPACK_IMPORTED_MODULE_0__.taskInterface.remove(id);
  console.log(mainStorage);
}

// Create a project
// Store projects
let projectStorage = [];
console.log("Project storage:");
console.log(projectStorage);

createProjectsBtn.addEventListener("click", createProject);
function createProject() {
  const title = prompt("Project name?", "");
  if (title === "" || !title) return;

  const project = new _projectManagement__WEBPACK_IMPORTED_MODULE_1__.Project(title);
  projectStorage = _projectManagement__WEBPACK_IMPORTED_MODULE_1__.projectInterface.add(project);

  const div = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", "project-title-div", "");
  const btn = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createElement)("button", "custom-project-div", title);
  const span = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createElement)("span", "rmv-project", "X");

  (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.appendElement)(div, btn);
  (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.appendElement)(div, span);
  (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.appendElement)(projectBlock, div);
}

// Remove a project

projectBlock.addEventListener("click", removeProject);

function removeProject(e) {
  const span = e.target.closest("span");
  if (!span) return;

  const project = span.previousElementSibling.textContent;
  const warning = confirm("remove this project with all tasks related to it?");
  if (warning) {
    // Clear array in an object from which I take all info and assign to mainStorage
    _todosManipulations__WEBPACK_IMPORTED_MODULE_0__.taskInterface.todos = _projectManagement__WEBPACK_IMPORTED_MODULE_1__.projectInterface.removeAssociatedTasks(
      project,
      _todosManipulations__WEBPACK_IMPORTED_MODULE_0__.taskInterface.todos
    );
    mainStorage = _todosManipulations__WEBPACK_IMPORTED_MODULE_0__.taskInterface.todos;

    projectStorage = _projectManagement__WEBPACK_IMPORTED_MODULE_1__.projectInterface.remove(project);
    span.parentNode.remove();
    displayForTasks.replaceChildren();
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsdURBQU87QUFDN0IsbUJBQW1CLGdFQUFnQjs7QUFFbkMsY0FBYyw4REFBYTtBQUMzQixjQUFjLDhEQUFhO0FBQzNCLGVBQWUsOERBQWE7O0FBRTVCLEVBQUUsOERBQWE7QUFDZixFQUFFLDhEQUFhO0FBQ2YsRUFBRSw4REFBYTtBQUNmOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksOERBQWEsU0FBUyxnRUFBZ0I7QUFDMUM7QUFDQSxNQUFNLDhEQUFhO0FBQ25CO0FBQ0Esa0JBQWtCLDhEQUFhOztBQUUvQixxQkFBcUIsZ0VBQWdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL3Byb2plY3RNYW5hZ2VtZW50LmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9zZWN0aW9uV2l0aERvbS5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvdG9kb3NNYW5pcHVsYXRpb25zLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogcHV0IHN0eWxlcyBpbnRvIGEgZmV3IGRpZmZlcmVudCBmaWxlcyAqL1xuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuI2NvbnRlbnQge1xuICB3aWR0aDogNDIwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTIwcHggMzAwcHg7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTIwcHggbWlubWF4KDMwMHB4LCAxZnIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrY3lhbjtcblxuICAmIGJ1dHRvbjpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cbn1cblxuLmRlZmF1bHQtZGl2IHtcbiAgZ3JpZC1yb3c6IDEvMjtcbiAgZ3JpZC1jb2x1bW46IDEvMjtcblxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHg7XG4gIGdhcDogMTBweDtcblxuICBib3JkZXI6IGJsdWUgMnB4IHNvbGlkO1xuXG4gICYgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiBvcmFuZ2U7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG59XG5cbi5wcm9qZWN0LWRpdiB7XG4gIGdyaWQtY29sdW1uOiAxLzI7XG4gIGdyaWQtcm93OiAyLzM7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG5cbiAgd2lkdGg6IDEyMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tcm93czogMzBweDtcbiAgZ2FwOiAxMHB4O1xuXG4gIGJvcmRlcjogZ3JlZW4gc29saWQgMnB4O1xuXG4gICYgZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgJiBidXR0b24ge1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIGhlaWdodDogMzBweDtcblxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29yYWw7XG4gICAgICBjb2xvcjogc2t5Ymx1ZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG5cbiAgICAmIHNwYW4ge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udG9kby1kaXYge1xuICBncmlkLWNvbHVtbjogMi8zO1xuICBncmlkLXJvdzogMS8zO1xuXG4gIGJvcmRlcjogcHVycGxlIHNvbGlkIDJweDtcblxuICAmID4gYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JhbDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gIH1cblxuICAmIC5kaXNwbGF5LXRhc2tzIHtcbiAgICBib3JkZXItdG9wOiBzb2xpZCA1cHggb3JhbmdlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDEwcHg7XG5cbiAgICAmIC50YXNrLWZpZWxkIHtcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICYgLnJtdi10YXNrIHtcbiAgICAgICAgcGFkZGluZzogNXB4IDhweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIHJpZ2h0OiAxMHB4O1xuXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwwQ0FBMEM7QUFDMUM7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLDRDQUE0QztFQUM1QywwQkFBMEI7O0VBRTFCO0lBQ0UsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7O0VBRWhCLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsU0FBUzs7RUFFVCxzQkFBc0I7O0VBRXRCO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjs7SUFFakIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZ0JBQWdCOztFQUVoQixZQUFZO0VBQ1osYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixTQUFTOztFQUVULHVCQUF1Qjs7RUFFdkI7SUFDRSxhQUFhOztJQUViO01BQ0UsaUJBQWlCO01BQ2pCLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLFlBQVk7O01BRVosdUJBQXVCO01BQ3ZCLGNBQWM7TUFDZCxZQUFZO0lBQ2Q7O0lBRUE7TUFDRSxZQUFZO01BQ1osc0JBQXNCO01BQ3RCLGlCQUFpQjtNQUNqQixpQkFBaUI7O01BRWpCO1FBQ0UsZUFBZTtRQUNmLFdBQVc7TUFDYjtJQUNGO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhOztFQUViLHdCQUF3Qjs7RUFFeEI7SUFDRSx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsU0FBUzs7SUFFVDtNQUNFLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLDhCQUE4QjtNQUM5QixrQkFBa0I7O01BRWxCO1FBQ0UsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsV0FBVzs7UUFFWCxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsWUFBWTtRQUNaLGtCQUFrQjtNQUNwQjtJQUNGO0VBQ0Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBwdXQgc3R5bGVzIGludG8gYSBmZXcgZGlmZmVyZW50IGZpbGVzICovXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgd2lkdGg6IDQyMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTIwcHggMzAwcHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEyMHB4IG1pbm1heCgzMDBweCwgMWZyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtjeWFuO1xcblxcbiAgJiBidXR0b246aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgfVxcbn1cXG5cXG4uZGVmYXVsdC1kaXYge1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMHB4O1xcbiAgZ2FwOiAxMHB4O1xcblxcbiAgYm9yZGVyOiBibHVlIDJweCBzb2xpZDtcXG5cXG4gICYgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IG9yYW5nZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgfVxcbn1cXG5cXG4ucHJvamVjdC1kaXYge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAyLzM7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcblxcbiAgd2lkdGg6IDEyMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1yb3dzOiAzMHB4O1xcbiAgZ2FwOiAxMHB4O1xcblxcbiAgYm9yZGVyOiBncmVlbiBzb2xpZCAycHg7XFxuXFxuICAmIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgICYgYnV0dG9uIHtcXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICAgIGhlaWdodDogMzBweDtcXG5cXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JhbDtcXG4gICAgICBjb2xvcjogc2t5Ymx1ZTtcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgJiBzcGFuIHtcXG4gICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG5cXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGNvbG9yOiBibHVlO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4udG9kby1kaXYge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAxLzM7XFxuXFxuICBib3JkZXI6IHB1cnBsZSBzb2xpZCAycHg7XFxuXFxuICAmID4gYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29yYWw7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgfVxcblxcbiAgJiAuZGlzcGxheS10YXNrcyB7XFxuICAgIGJvcmRlci10b3A6IHNvbGlkIDVweCBvcmFuZ2U7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1yb3dzOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBnYXA6IDEwcHg7XFxuXFxuICAgICYgLnRhc2stZmllbGQge1xcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAgICYgLnJtdi10YXNrIHtcXG4gICAgICAgIHBhZGRpbmc6IDVweCA4cHg7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDEwcHg7XFxuICAgICAgICByaWdodDogMTBweDtcXG5cXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCB7IFByb2plY3QsIHByb2plY3RJbnRlcmZhY2UgfTtcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHByb2plY3RUaXRsZSkge1xuICAgIHRoaXMucHJvamVjdFRpdGxlID0gcHJvamVjdFRpdGxlO1xuICB9XG5cbiAgZ2V0IHRpdGxlT2ZQcm9qZWN0KCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RUaXRsZTtcbiAgfVxuXG4gIHNldCB0aXRsZU9mUHJvamVjdCh2YWx1ZSkge1xuICAgIHRoaXMucHJvamVjdFRpdGxlID0gdmFsdWU7XG4gIH1cbn1cblxuY29uc3QgcHJvamVjdEludGVyZmFjZSA9IHtcbiAgcHJvamVjdHM6IFtdLFxuXG4gIGFkZChlbGVtKSB7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKGVsZW0pO1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xuICB9LFxuXG4gIHJlbW92ZSh2YWx1ZSkge1xuICAgIHRoaXMucHJvamVjdHMgPSB0aGlzLnByb2plY3RzLmZpbHRlcihcbiAgICAgIChwcm9qKSA9PiBwcm9qLnRpdGxlT2ZQcm9qZWN0ICE9PSB2YWx1ZVxuICAgICk7XG5cbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcbiAgfSxcblxuICByZW1vdmVBc3NvY2lhdGVkVGFza3MocHJvaiwgc3RvcmFnZSkge1xuICAgIHN0b3JhZ2UgPSBzdG9yYWdlLmZpbHRlcigodGFzaykgPT4gdGFzay50b2RvUHJvamVjdCAhPT0gcHJvaik7XG5cbiAgICByZXR1cm4gc3RvcmFnZTtcbiAgfSxcbn07XG4iLCJleHBvcnQgeyBjcmVhdGVFbGVtZW50LCBhcHBlbmRFbGVtZW50LCBwcmVwZW5kRWxlbWVudCB9O1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KG5hbWUsIGNsYXNzTmFtZSwgdGV4dCkge1xuICBsZXQgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XG4gIGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICBlbGVtLnRleHRDb250ZW50ID0gdGV4dDtcblxuICByZXR1cm4gZWxlbTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kRWxlbWVudChwYXJlbnQsIGNoaWxkKSB7XG4gIHBhcmVudC5hcHBlbmQoY2hpbGQpO1xufVxuXG5mdW5jdGlvbiBwcmVwZW5kRWxlbWVudChwYXJlbnQsIGNoaWxkKSB7XG4gIHBhcmVudC5wcmVwZW5kKGNoaWxkKTtcbn1cblxuLypcblNob3cgYWxsIHRhc2tzIGZvciBhIHBhcnRpY3VsYXIgcHJvamVjdFxuRXZlbnQgZGVsZWdhdGlvbiBvbiBwcm9qZWN0RGl2XG5cbmxldCBjdXJyZW50UHJvamVjdDtcbnByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGN1cnJlbnRQcm9qZWN0ID0gZS50YXJnZXQuY2xhc3NOYW1lO1xuICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdCk7XG4qL1xuIiwiZXhwb3J0IHsgVG9kbywgdGFza0ludGVyZmFjZSB9O1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RNYW5hZ2VtZW50XCI7XG5cbmNsYXNzIFRvZG8gZXh0ZW5kcyBQcm9qZWN0IHtcbiAgLy8gQ3JlYXRlcyBhIHRvZG9cbiAgY29uc3RydWN0b3IocHJvamVjdFRpdGxlLCB0aXRsZSwgcHJpb3JpdHkpIHtcbiAgICAvLyBCYXNlIGNsYXNzIGlzIFByb2plY3QgdGhhdCBoYXMgYSBwcm9qZWN0IHByb3BlcnR5IG9uIGl0cyBjb25zdHJ1Y3RvclxuICAgIHN1cGVyKHByb2plY3RUaXRsZSk7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmlkID0gc2VsZi5jcnlwdG8ucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgLy8gVXBkYXRlcyBhIHRvZG9cbiAgZ2V0IHRvZG9Qcm9qZWN0KCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RUaXRsZTtcbiAgfVxuICBzZXQgdG9kb1Byb2plY3QodmFsdWUpIHtcbiAgICB0aGlzLnByb2plY3RUaXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHRvZG9UaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgfVxuICBzZXQgdG9kb1RpdGxlKHZhbHVlKSB7XG4gICAgdGhpcy50aXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHRvZG9Qcmlvcml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcbiAgfVxuICBzZXQgdG9kb1ByaW9yaXR5KHZhbHVlKSB7XG4gICAgdGhpcy5wcmlvcml0eSA9IHZhbHVlO1xuICB9XG59XG5cbi8vIEludGVyZmFjZSBmb3IgdG9kb3MgLSB3aGF0IGZ1bmN0aW9uYWxpdGllcyB0aGV5IGhhdmVcbmNvbnN0IHRhc2tJbnRlcmZhY2UgPSB7XG4gIC8vIHRvZG9zIGFycmF5IHdpbGwgbW9kaWZ5IG1haW5TdG9yYWdlIGFycmF5XG4gIHRvZG9zOiBbXSxcbiAgYWRkKGVsZW0pIHtcbiAgICB0aGlzLnRvZG9zLnB1c2goZWxlbSk7XG4gICAgcmV0dXJuIHRoaXMudG9kb3M7XG4gIH0sXG5cbiAgcmVtb3ZlKHZhbHVlKSB7XG4gICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkICE9PSB2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXMudG9kb3M7XG4gIH0sXG5cbiAgZmluZEFsbChwcm9qKSB7XG4gICAgY29uc3QgYXJyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy50b2Rvc1tpXS5wcm9qZWN0VGl0bGUudG9Mb3dlckNhc2UoKSA9PT0gcHJvai50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIGFyci5wdXNoKHRoaXMudG9kb3NbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuICB9LFxuXG4gIC8vIHVwZGF0ZShlbGVtLCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgLy8gICBpZiAocHJvcGVydHkudG9Mb3dlckNhc2UoKSA9PT0gXCJ0aXRsZVwiKSB7XG4gIC8vICAgICBjb25zb2xlLmxvZyhgT2xkIHRpdGxlOiAke2VsZW0udG9kb1RpdGxlfWApO1xuICAvLyAgICAgZWxlbS50b2RvVGl0bGUgPSB2YWx1ZTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKGBVcGRhdGVkIHRpdGxlOiAke3ZhbHVlfWApO1xuICAvLyAgIH0gZWxzZSBpZiAocHJvcGVydHkudG9Mb3dlckNhc2UoKSA9PT0gXCJwcmlvcml0eVwiKSB7XG4gIC8vICAgICBjb25zb2xlLmxvZyhgT2xkIHRpdGxlOiAke2VsZW0udG9kb1ByaW9yaXR5fWApO1xuICAvLyAgICAgZWxlbS50b2RvUHJpb3JpdHkgPSB2YWx1ZTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKGBVcGRhdGVkIHByaW9yaXR5OiAke3ZhbHVlfWApO1xuICAvLyAgIH0gZWxzZSBpZiAocHJvcGVydHkudG9Mb3dlckNhc2UoKSA9PT0gXCJwcm9qZWN0XCIpIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKGBPbGQgdGl0bGU6ICR7ZWxlbS50b2RvUHJvamVjdH1gKTtcbiAgLy8gICAgIGVsZW0udG9kb1Byb2plY3QgPSB2YWx1ZTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKGBVcGRhdGVkIHByb3BlcnR5OiAke3ZhbHVlfWApO1xuICAvLyAgIH1cbiAgLy8gICBjb25zb2xlLmxvZyhgRnVsbCBkZXRhaWxzOiBcIiR7ZWxlbS50aXRsZX1cIiB0aXRsZWApO1xuICAvLyB9LFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IFRvZG8sIHRhc2tJbnRlcmZhY2UgfSBmcm9tIFwiLi90b2Rvc01hbmlwdWxhdGlvbnNcIjtcbmltcG9ydCB7IFByb2plY3QsIHByb2plY3RJbnRlcmZhY2UgfSBmcm9tIFwiLi9wcm9qZWN0TWFuYWdlbWVudFwiO1xuXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBhcHBlbmRFbGVtZW50LCBwcmVwZW5kRWxlbWVudCB9IGZyb20gXCIuL3NlY3Rpb25XaXRoRG9tXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuLy8gQ3JlYXRlIHRoZSBtYWluIGxheW91dFxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbmNvbnN0IGRlZmF1bHRCbG9jayA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJkZWZhdWx0LWRpdlwiLCBcIlwiKTtcbmNvbnN0IHByb2plY3RCbG9jayA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJwcm9qZWN0LWRpdlwiLCBcIlwiKTtcbmNvbnN0IHRvZG9CbG9jayA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0b2RvLWRpdlwiLCBcIlwiKTtcblxuYXBwZW5kRWxlbWVudChjb250ZW50LCBkZWZhdWx0QmxvY2spO1xuYXBwZW5kRWxlbWVudChjb250ZW50LCBwcm9qZWN0QmxvY2spO1xuYXBwZW5kRWxlbWVudChjb250ZW50LCB0b2RvQmxvY2spO1xuXG4vLyBEZWZhdWx0IGJsb2NrXG5jb25zdCBpbmJveEJ0biA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJidG4tZGVmYXVsdFwiLCBcImluYm94XCIpO1xuY29uc3QgdG9kYXkgPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiYnRuLXRvZGF5XCIsIFwidG9kYXlcIik7XG5jb25zdCB1cGNvbWluZyA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJidG4tdXBjb21pbmdcIiwgXCJ1cGNvbWluZ1wiKTtcblxuYXBwZW5kRWxlbWVudChkZWZhdWx0QmxvY2ssIGluYm94QnRuKTtcbmFwcGVuZEVsZW1lbnQoZGVmYXVsdEJsb2NrLCB0b2RheSk7XG5hcHBlbmRFbGVtZW50KGRlZmF1bHRCbG9jaywgdXBjb21pbmcpO1xuXG4vLyBGb3Igbm93IHRvIGFsbG93IHRhc2svcHJvamVjdCBjcmVhdGlvblxuY29uc3QgY3JlYXRlVGFza3NCdG4gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiY3JlYXRlLXRhc2tzXCIsIFwiQ3JlYXRlIHRhc2tcIik7XG5jb25zdCBjcmVhdGVQcm9qZWN0c0J0biA9IGNyZWF0ZUVsZW1lbnQoXG4gIFwiYnV0dG9uXCIsXG4gIFwiY3JlYXRlLXByb2plY3RzXCIsXG4gIFwiQ3JlYXRlIHByb2plY3RcIlxuKTtcbmNvbnN0IGRpc3BsYXlGb3JUYXNrcyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJkaXNwbGF5LXRhc2tzXCIsIFwiXCIpO1xuXG5hcHBlbmRFbGVtZW50KHRvZG9CbG9jaywgY3JlYXRlVGFza3NCdG4pO1xuYXBwZW5kRWxlbWVudCh0b2RvQmxvY2ssIGNyZWF0ZVByb2plY3RzQnRuKTtcbmFwcGVuZEVsZW1lbnQodG9kb0Jsb2NrLCBkaXNwbGF5Rm9yVGFza3MpO1xuXG4vLyBNYWluIGFycmF5IHdoZXJlIHRhc2tzIGFyZSBzdG9yZWRcbmxldCBtYWluU3RvcmFnZSA9IFtdO1xuY29uc29sZS5sb2coXCJNYWluIHN0b3JhZ2U6XCIpO1xuY29uc29sZS5sb2cobWFpblN0b3JhZ2UpO1xuXG4vLyBDcmVhdGUgYSB0b2RvXG5jcmVhdGVUYXNrc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlVG9kbyk7XG5mdW5jdGlvbiBjcmVhdGVUb2RvKCkge1xuICBsZXQgcHJvamVjdCA9IHByb21wdChcIlByb2plY3Q/XCIsIFwiXCIpO1xuICAvLyBEZWZhdWx0IHByb2plY3QgLSBpZiBwcm9qZWN0U3RvcmFnZS5sZW5ndGggPT0gMCAtLS0+IG1lYW5zIHRoYXQgbm8gY3VzdG9tIHByb2plY3RzIHlldFxuICBpZiAocHJvamVjdCA9PT0gXCJcIikge1xuICAgIHByb2plY3QgPSBcImluYm94XCI7XG4gIH1cbiAgbGV0IHRpdGxlID0gcHJvbXB0KFwiVGl0bGVcIiwgXCJcIik7XG4gIGxldCBwcmlvcml0eSA9IHByb21wdChcIlByaW9yaXR5XCIsIFwiXCIpO1xuXG4gIGNvbnN0IHRhc2sgPSBuZXcgVG9kbyhwcm9qZWN0LCB0aXRsZSwgcHJpb3JpdHkpO1xuICBtYWluU3RvcmFnZSA9IHRhc2tJbnRlcmZhY2UuYWRkKHRhc2spO1xuICBjb25zb2xlLmxvZyhtYWluU3RvcmFnZSk7XG59XG5cbi8vIERpc3BsYXkgYWxsIHRvZG9zIGluIGEgcHJvamVjdFxuaW5ib3hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlUYXNrc0luUHJvamVjdCk7XG5wcm9qZWN0QmxvY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlUYXNrc0luUHJvamVjdCk7XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrc0luUHJvamVjdChlKSB7XG4gIC8vIENsaWNrIG9jY3VycyBvbiB0aGUgaW5zaWRlIG9mIGEgYnV0dG9uXG4gIGNvbnN0IGJ0biA9IGUudGFyZ2V0LmNsb3Nlc3QoXCJidXR0b25cIik7XG4gIGlmICghYnRuKSByZXR1cm47XG5cbiAgY29uc3QgcHJvamVjdE5hbWUgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgY29uc29sZS5sb2cocHJvamVjdE5hbWUpO1xuXG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gdGFza0ludGVyZmFjZS5maW5kQWxsKHByb2plY3ROYW1lKTtcblxuICAvLyBDbGVhciB0aGUgdG9kbyBibG9jayBub3QgdG8gZHVwbGljYXRlIGFwcGVuZGVkIGVsZW1lbnRzXG4gIGRpc3BsYXlGb3JUYXNrcy5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRQcm9qZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdGFza0ZpZWxkID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInRhc2stZmllbGRcIiwgXCJcIik7XG4gICAgdGFza0ZpZWxkLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgY3VycmVudFByb2plY3RbaV0uaWQpO1xuICAgIGNvbnN0IHJlbW92ZVRhc2sgPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwicm12LXRhc2tcIiwgXCJYXCIpO1xuICAgIGNvbnN0IHRpdGxlUGFyYSA9IGN1cnJlbnRQcm9qZWN0W2ldLnRvZG9UaXRsZTtcbiAgICBjb25zdCBwcm9qZWN0UGFyYSA9IGN1cnJlbnRQcm9qZWN0W2ldLnRvZG9Qcm9qZWN0O1xuICAgIGNvbnN0IHByaW9yaXR5UGFyYSA9IGN1cnJlbnRQcm9qZWN0W2ldLnRvZG9Qcmlvcml0eTtcblxuICAgIGFwcGVuZEVsZW1lbnQoZGlzcGxheUZvclRhc2tzLCB0YXNrRmllbGQpO1xuICAgIGFwcGVuZEVsZW1lbnQodGFza0ZpZWxkLCByZW1vdmVUYXNrKTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XG4gICAgICBsZXQgcGFyYTtcbiAgICAgIHN3aXRjaCAoaikge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgcGFyYSA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwidGFzay10aXRsZVwiLCBgVGl0bGU6ICR7dGl0bGVQYXJhfWApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgcGFyYSA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwidGFzay1wcm9qZWN0XCIsIGBQcm9qZWN0OiAke3Byb2plY3RQYXJhfWApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgcGFyYSA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgIFwidGFzay1wcmlvcml0eVwiLFxuICAgICAgICAgICAgYFByaW9yaXR5OiAke3ByaW9yaXR5UGFyYX1gXG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGFwcGVuZEVsZW1lbnQodGFza0ZpZWxkLCBwYXJhKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gUmVtb3ZlIGEgdGFza1xuZGlzcGxheUZvclRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVUYXNrKTtcblxuZnVuY3Rpb24gcmVtb3ZlVGFzayhlKSB7XG4gIGNvbnN0IGJ0biA9IGUudGFyZ2V0LmNsb3Nlc3QoXCJidXR0b25cIik7XG4gIGlmICghYnRuKSByZXR1cm47XG5cbiAgY29uc3Qgc3BlY2lmaWNUYXNrID0gZS50YXJnZXQuY2xvc2VzdChcIltkYXRhLWlkXVwiKTtcbiAgY29uc3QgaWQgPSBzcGVjaWZpY1Rhc2suZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcblxuICBzcGVjaWZpY1Rhc2sucmVtb3ZlKCk7XG4gIG1haW5TdG9yYWdlID0gdGFza0ludGVyZmFjZS5yZW1vdmUoaWQpO1xuICBjb25zb2xlLmxvZyhtYWluU3RvcmFnZSk7XG59XG5cbi8vIENyZWF0ZSBhIHByb2plY3Rcbi8vIFN0b3JlIHByb2plY3RzXG5sZXQgcHJvamVjdFN0b3JhZ2UgPSBbXTtcbmNvbnNvbGUubG9nKFwiUHJvamVjdCBzdG9yYWdlOlwiKTtcbmNvbnNvbGUubG9nKHByb2plY3RTdG9yYWdlKTtcblxuY3JlYXRlUHJvamVjdHNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVByb2plY3QpO1xuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHtcbiAgY29uc3QgdGl0bGUgPSBwcm9tcHQoXCJQcm9qZWN0IG5hbWU/XCIsIFwiXCIpO1xuICBpZiAodGl0bGUgPT09IFwiXCIgfHwgIXRpdGxlKSByZXR1cm47XG5cbiAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlKTtcbiAgcHJvamVjdFN0b3JhZ2UgPSBwcm9qZWN0SW50ZXJmYWNlLmFkZChwcm9qZWN0KTtcblxuICBjb25zdCBkaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdC10aXRsZS1kaXZcIiwgXCJcIik7XG4gIGNvbnN0IGJ0biA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJjdXN0b20tcHJvamVjdC1kaXZcIiwgdGl0bGUpO1xuICBjb25zdCBzcGFuID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJybXYtcHJvamVjdFwiLCBcIlhcIik7XG5cbiAgYXBwZW5kRWxlbWVudChkaXYsIGJ0bik7XG4gIGFwcGVuZEVsZW1lbnQoZGl2LCBzcGFuKTtcbiAgYXBwZW5kRWxlbWVudChwcm9qZWN0QmxvY2ssIGRpdik7XG59XG5cbi8vIFJlbW92ZSBhIHByb2plY3RcblxucHJvamVjdEJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVQcm9qZWN0KTtcblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChlKSB7XG4gIGNvbnN0IHNwYW4gPSBlLnRhcmdldC5jbG9zZXN0KFwic3BhblwiKTtcbiAgaWYgKCFzcGFuKSByZXR1cm47XG5cbiAgY29uc3QgcHJvamVjdCA9IHNwYW4ucHJldmlvdXNFbGVtZW50U2libGluZy50ZXh0Q29udGVudDtcbiAgY29uc3Qgd2FybmluZyA9IGNvbmZpcm0oXCJyZW1vdmUgdGhpcyBwcm9qZWN0IHdpdGggYWxsIHRhc2tzIHJlbGF0ZWQgdG8gaXQ/XCIpO1xuICBpZiAod2FybmluZykge1xuICAgIC8vIENsZWFyIGFycmF5IGluIGFuIG9iamVjdCBmcm9tIHdoaWNoIEkgdGFrZSBhbGwgaW5mbyBhbmQgYXNzaWduIHRvIG1haW5TdG9yYWdlXG4gICAgdGFza0ludGVyZmFjZS50b2RvcyA9IHByb2plY3RJbnRlcmZhY2UucmVtb3ZlQXNzb2NpYXRlZFRhc2tzKFxuICAgICAgcHJvamVjdCxcbiAgICAgIHRhc2tJbnRlcmZhY2UudG9kb3NcbiAgICApO1xuICAgIG1haW5TdG9yYWdlID0gdGFza0ludGVyZmFjZS50b2RvcztcblxuICAgIHByb2plY3RTdG9yYWdlID0gcHJvamVjdEludGVyZmFjZS5yZW1vdmUocHJvamVjdCk7XG4gICAgc3Bhbi5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgIGRpc3BsYXlGb3JUYXNrcy5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9