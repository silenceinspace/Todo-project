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

  & button:disabled {
    background-color: black;
    color: grey;
  }

  & button:disabled:hover {
    cursor: default;
    text-decoration: none;
  }
}

.inbox-div {
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

  & .create-task-directly {
    display: block;
    margin: 10px auto;
  }

  & .display-tasks {
    border-top: solid 5px orange;
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr;
    gap: 10px;

    & .task-div {
      padding: 5px 10px;
      font-size: 1.3rem;
      font-style: italic;
      border-bottom: 2px solid black;
      position: relative;

      & .remove-task {
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
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,0CAA0C;AAC1C;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kCAAkC;EAClC,4CAA4C;EAC5C,0BAA0B;;EAE1B;IACE,0BAA0B;IAC1B,eAAe;IACf,UAAU;EACZ;;EAEA;IACE,uBAAuB;IACvB,WAAW;EACb;;EAEA;IACE,eAAe;IACf,qBAAqB;EACvB;AACF;;AAEA;EACE,aAAa;EACb,gBAAgB;;EAEhB,aAAa;EACb,wBAAwB;EACxB,SAAS;;EAET,sBAAsB;;EAEtB;IACE,iBAAiB;IACjB,iBAAiB;;IAEjB,uBAAuB;IACvB,aAAa;IACb,YAAY;EACd;AACF;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,gBAAgB;;EAEhB,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,SAAS;;EAET,uBAAuB;;EAEvB;IACE,aAAa;;IAEb;MACE,iBAAiB;MACjB,iBAAiB;MACjB,kBAAkB;MAClB,YAAY;MACZ,YAAY;;MAEZ,uBAAuB;MACvB,cAAc;MACd,YAAY;IACd;;IAEA;MACE,YAAY;MACZ,sBAAsB;MACtB,iBAAiB;MACjB,iBAAiB;;MAEjB;QACE,eAAe;QACf,WAAW;MACb;IACF;EACF;AACF;;AAEA;EACE,gBAAgB;EAChB,aAAa;;EAEb,wBAAwB;;EAExB;IACE,uBAAuB;IACvB,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,YAAY;EACd;;EAEA;IACE,cAAc;IACd,iBAAiB;EACnB;;EAEA;IACE,4BAA4B;IAC5B,aAAa;IACb,mBAAmB;IACnB,0BAA0B;IAC1B,SAAS;;IAET;MACE,iBAAiB;MACjB,iBAAiB;MACjB,kBAAkB;MAClB,8BAA8B;MAC9B,kBAAkB;;MAElB;QACE,gBAAgB;QAChB,kBAAkB;QAClB,SAAS;QACT,WAAW;;QAEX,YAAY;QACZ,iBAAiB;QACjB,iBAAiB;QACjB,qBAAqB;QACrB,YAAY;QACZ,kBAAkB;MACpB;IACF;EACF;AACF","sourcesContent":["/* put styles into a few different files */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#content {\n  width: 420px;\n  display: grid;\n  grid-template-columns: 120px 300px;\n  grid-template-rows: 120px minmax(300px, 1fr);\n  background-color: darkcyan;\n\n  & button:hover {\n    text-decoration: underline;\n    cursor: pointer;\n    color: red;\n  }\n\n  & button:disabled {\n    background-color: black;\n    color: grey;\n  }\n\n  & button:disabled:hover {\n    cursor: default;\n    text-decoration: none;\n  }\n}\n\n.inbox-div {\n  grid-row: 1/2;\n  grid-column: 1/2;\n\n  display: grid;\n  grid-template-rows: 30px;\n  gap: 10px;\n\n  border: blue 2px solid;\n\n  & button {\n    font-size: 1.2rem;\n    font-weight: bold;\n\n    background-color: white;\n    color: orange;\n    border: none;\n  }\n}\n\n.project-div {\n  grid-column: 1/2;\n  grid-row: 2/3;\n  margin-top: 10px;\n\n  width: 120px;\n  display: grid;\n  grid-auto-rows: 30px;\n  gap: 10px;\n\n  border: green solid 2px;\n\n  & div {\n    display: flex;\n\n    & button {\n      font-size: 1.2rem;\n      font-weight: bold;\n      text-align: center;\n      width: 100px;\n      height: 30px;\n\n      background-color: coral;\n      color: skyblue;\n      border: none;\n    }\n\n    & span {\n      color: white;\n      background-color: grey;\n      font-size: 1.4rem;\n      font-weight: bold;\n\n      &:hover {\n        cursor: pointer;\n        color: blue;\n      }\n    }\n  }\n}\n\n.todo-div {\n  grid-column: 2/3;\n  grid-row: 1/3;\n\n  border: purple solid 2px;\n\n  & > button {\n    background-color: coral;\n    font-size: 1.2rem;\n    font-weight: bold;\n    color: white;\n    border: none;\n    padding: 5px;\n    margin: 10px;\n  }\n\n  & .create-task-directly {\n    display: block;\n    margin: 10px auto;\n  }\n\n  & .display-tasks {\n    border-top: solid 5px orange;\n    display: grid;\n    grid-auto-rows: 1fr;\n    grid-template-columns: 1fr;\n    gap: 10px;\n\n    & .task-div {\n      padding: 5px 10px;\n      font-size: 1.3rem;\n      font-style: italic;\n      border-bottom: 2px solid black;\n      position: relative;\n\n      & .remove-task {\n        padding: 5px 8px;\n        position: absolute;\n        top: 10px;\n        right: 10px;\n\n        color: white;\n        font-size: 1.2rem;\n        font-weight: bold;\n        background-color: red;\n        border: none;\n        border-radius: 5px;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
const inboxBlock = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", "inbox-div", "");
const projectBlock = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", "project-div", "");
const todoBlock = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", "todo-div", "");

(0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.appendElement)(content, inboxBlock);
(0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.appendElement)(content, projectBlock);
(0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.appendElement)(content, todoBlock);

// Default block
const inbox = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createElement)("button", "button-inbox", "inbox");
inbox.disabled = true;
inbox.classList.add("project");
const today = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createElement)("button", "button-today", "today");
const upcoming = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createElement)("button", "button-upcoming", "upcoming");

(0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.appendElement)(inboxBlock, inbox);
(0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.appendElement)(inboxBlock, today);
(0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.appendElement)(inboxBlock, upcoming);

// For now to allow task/project creation
const createTaskButton = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createElement)("button", "create-tasks", "Create task");
const createProjectButton = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createElement)(
  "button",
  "create-projects",
  "Create project"
);
const displayForTasks = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", "display-tasks", "");

(0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.appendElement)(todoBlock, createTaskButton);
(0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.appendElement)(todoBlock, createProjectButton);
(0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.appendElement)(todoBlock, displayForTasks);

// Main array where tasks are stored
let mainStorage = [];
console.log("Main storage:");
console.log(mainStorage);
// Store projects
let projectStorage = [];
console.log("Project storage:");
console.log(projectStorage);

// Create a todo directly in a task
const createTaskInsideProject = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createElement)(
  "button",
  "create-task-directly",
  "+"
);
(0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.appendElement)(todoBlock, createTaskInsideProject);
createTaskInsideProject.addEventListener("click", createTodo);

// Create a todo globally - project name is required!!!
createTaskButton.addEventListener("click", createTodo);
function createTodo(e) {
  // Create a task locally inside the chosen task
  const directCreation = e.target.closest(".create-task-directly");
  let project;

  if (directCreation) {
    const currentlyChosenProject =
      document.querySelector("button[disabled]").textContent;
    project = currentlyChosenProject;
  } else {
    project = prompt("Project?", "");
    // Default project, there are no custom projects yet
    if (projectStorage.length === 0) {
      alert(
        "You have not created any project yet. Your tasks are put into inbox"
      );
      project = "inbox";
    }
  }

  let title = prompt("Title", "");
  let priority = prompt("Priority", "");

  const task = new _todosManipulations__WEBPACK_IMPORTED_MODULE_0__.Todo(project, title, priority);
  mainStorage = _todosManipulations__WEBPACK_IMPORTED_MODULE_0__.taskInterface.add(task);
  console.log(mainStorage);

  updateTaskDisplay();
}

// Display all todos in a project
inbox.addEventListener("click", displayThisProjectTasks);
projectBlock.addEventListener("click", displayThisProjectTasks);

function displayThisProjectTasks(e) {
  // Click occurs on the inside of a button
  const btn = e.target.closest("button");
  if (!btn) return;

  let disabledButtons = document.querySelectorAll("button.project");
  disabledButtons.forEach((btn) => (btn.disabled = false));

  btn.disabled = true;

  const projectName = e.target.textContent;
  generateListOfTasks(projectName);
}

function updateTaskDisplay() {
  const projectName = document.querySelector("button[disabled]").textContent;

  generateListOfTasks(projectName);
}

function generateListOfTasks(project) {
  const currentProject = _todosManipulations__WEBPACK_IMPORTED_MODULE_0__.taskInterface.findAll(project);
  // Clear the todo block not to duplicate appended elements
  displayForTasks.replaceChildren();

  for (let i = 0; i < currentProject.length; i++) {
    const taskDiv = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", "task-div", "");
    taskDiv.setAttribute("data-id", currentProject[i].id);
    const removeButton = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createElement)("button", "remove-task", "X");
    const titlePara = currentProject[i].todoTitle;
    const projectPara = currentProject[i].todoProject;
    const priorityPara = currentProject[i].todoPriority;

    (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.appendElement)(displayForTasks, taskDiv);
    (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.appendElement)(taskDiv, removeButton);

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
      (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.appendElement)(taskDiv, para);
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
createProjectButton.addEventListener("click", createProject);
function createProject() {
  const title = prompt("Project name?", "");
  if (title === "" || !title) return;

  const project = new _projectManagement__WEBPACK_IMPORTED_MODULE_1__.Project(title);
  projectStorage = _projectManagement__WEBPACK_IMPORTED_MODULE_1__.projectInterface.add(project);

  const div = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", "project-title-div", "");
  const btn = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createElement)("button", "custom-project-div", title);
  btn.classList.add("project");
  const span = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createElement)("span", "remove-project", "X");

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

    inbox.disabled = true;
    updateTaskDisplay();
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBLGtCQUFrQiwyQkFBMkI7QUFDN0Msb0JBQW9CLDhEQUFhO0FBQ2pDO0FBQ0EseUJBQXlCLDhEQUFhO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLDhEQUFhO0FBQ2pCLElBQUksOERBQWE7O0FBRWpCLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw4REFBYSw4QkFBOEIsVUFBVTtBQUN0RTtBQUNBO0FBQ0EsaUJBQWlCLDhEQUFhLGtDQUFrQyxZQUFZO0FBQzVFO0FBQ0E7QUFDQSxpQkFBaUIsOERBQWE7QUFDOUI7QUFDQTtBQUNBLHlCQUF5QixhQUFhO0FBQ3RDO0FBQ0E7QUFDQSxNQUFNLDhEQUFhO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLDhEQUFhO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsdURBQU87QUFDN0IsbUJBQW1CLGdFQUFnQjs7QUFFbkMsY0FBYyw4REFBYTtBQUMzQixjQUFjLDhEQUFhO0FBQzNCO0FBQ0EsZUFBZSw4REFBYTs7QUFFNUIsRUFBRSw4REFBYTtBQUNmLEVBQUUsOERBQWE7QUFDZixFQUFFLDhEQUFhO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksOERBQWEsU0FBUyxnRUFBZ0I7QUFDMUM7QUFDQSxNQUFNLDhEQUFhO0FBQ25CO0FBQ0Esa0JBQWtCLDhEQUFhOztBQUUvQixxQkFBcUIsZ0VBQWdCO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvcHJvamVjdE1hbmFnZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL3NlY3Rpb25XaXRoRG9tLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy90b2Rvc01hbmlwdWxhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBwdXQgc3R5bGVzIGludG8gYSBmZXcgZGlmZmVyZW50IGZpbGVzICovXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4jY29udGVudCB7XG4gIHdpZHRoOiA0MjBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMjBweCAzMDBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMjBweCBtaW5tYXgoMzAwcHgsIDFmcik7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtjeWFuO1xuXG4gICYgYnV0dG9uOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuXG4gICYgYnV0dG9uOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogZ3JleTtcbiAgfVxuXG4gICYgYnV0dG9uOmRpc2FibGVkOmhvdmVyIHtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG59XG5cbi5pbmJveC1kaXYge1xuICBncmlkLXJvdzogMS8yO1xuICBncmlkLWNvbHVtbjogMS8yO1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzBweDtcbiAgZ2FwOiAxMHB4O1xuXG4gIGJvcmRlcjogYmx1ZSAycHggc29saWQ7XG5cbiAgJiBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IG9yYW5nZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbn1cblxuLnByb2plY3QtZGl2IHtcbiAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgZ3JpZC1yb3c6IDIvMztcbiAgbWFyZ2luLXRvcDogMTBweDtcblxuICB3aWR0aDogMTIwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1yb3dzOiAzMHB4O1xuICBnYXA6IDEwcHg7XG5cbiAgYm9yZGVyOiBncmVlbiBzb2xpZCAycHg7XG5cbiAgJiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAmIGJ1dHRvbiB7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JhbDtcbiAgICAgIGNvbG9yOiBza3libHVlO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cblxuICAgICYgc3BhbiB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi50b2RvLWRpdiB7XG4gIGdyaWQtY29sdW1uOiAyLzM7XG4gIGdyaWQtcm93OiAxLzM7XG5cbiAgYm9yZGVyOiBwdXJwbGUgc29saWQgMnB4O1xuXG4gICYgPiBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgfVxuXG4gICYgLmNyZWF0ZS10YXNrLWRpcmVjdGx5IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgfVxuXG4gICYgLmRpc3BsYXktdGFza3Mge1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDVweCBvcmFuZ2U7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tcm93czogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogMTBweDtcblxuICAgICYgLnRhc2stZGl2IHtcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICYgLnJlbW92ZS10YXNrIHtcbiAgICAgICAgcGFkZGluZzogNXB4IDhweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIHJpZ2h0OiAxMHB4O1xuXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwwQ0FBMEM7QUFDMUM7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLDRDQUE0QztFQUM1QywwQkFBMEI7O0VBRTFCO0lBQ0UsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixVQUFVO0VBQ1o7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsV0FBVztFQUNiOztFQUVBO0lBQ0UsZUFBZTtJQUNmLHFCQUFxQjtFQUN2QjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjs7RUFFaEIsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixTQUFTOztFQUVULHNCQUFzQjs7RUFFdEI7SUFDRSxpQkFBaUI7SUFDakIsaUJBQWlCOztJQUVqQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixnQkFBZ0I7O0VBRWhCLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLFNBQVM7O0VBRVQsdUJBQXVCOztFQUV2QjtJQUNFLGFBQWE7O0lBRWI7TUFDRSxpQkFBaUI7TUFDakIsaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osWUFBWTs7TUFFWix1QkFBdUI7TUFDdkIsY0FBYztNQUNkLFlBQVk7SUFDZDs7SUFFQTtNQUNFLFlBQVk7TUFDWixzQkFBc0I7TUFDdEIsaUJBQWlCO01BQ2pCLGlCQUFpQjs7TUFFakI7UUFDRSxlQUFlO1FBQ2YsV0FBVztNQUNiO0lBQ0Y7RUFDRjtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7O0VBRWIsd0JBQXdCOztFQUV4QjtJQUNFLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsU0FBUzs7SUFFVDtNQUNFLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLDhCQUE4QjtNQUM5QixrQkFBa0I7O01BRWxCO1FBQ0UsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsV0FBVzs7UUFFWCxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsWUFBWTtRQUNaLGtCQUFrQjtNQUNwQjtJQUNGO0VBQ0Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBwdXQgc3R5bGVzIGludG8gYSBmZXcgZGlmZmVyZW50IGZpbGVzICovXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgd2lkdGg6IDQyMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTIwcHggMzAwcHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEyMHB4IG1pbm1heCgzMDBweCwgMWZyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtjeWFuO1xcblxcbiAgJiBidXR0b246aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgfVxcblxcbiAgJiBidXR0b246ZGlzYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IGdyZXk7XFxuICB9XFxuXFxuICAmIGJ1dHRvbjpkaXNhYmxlZDpob3ZlciB7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgfVxcbn1cXG5cXG4uaW5ib3gtZGl2IHtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzBweDtcXG4gIGdhcDogMTBweDtcXG5cXG4gIGJvcmRlcjogYmx1ZSAycHggc29saWQ7XFxuXFxuICAmIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBvcmFuZ2U7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gIH1cXG59XFxuXFxuLnByb2plY3QtZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMi8zO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG5cXG4gIHdpZHRoOiAxMjBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tcm93czogMzBweDtcXG4gIGdhcDogMTBweDtcXG5cXG4gIGJvcmRlcjogZ3JlZW4gc29saWQgMnB4O1xcblxcbiAgJiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICAmIGJ1dHRvbiB7XFxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICBoZWlnaHQ6IDMwcHg7XFxuXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29yYWw7XFxuICAgICAgY29sb3I6IHNreWJsdWU7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICB9XFxuXFxuICAgICYgc3BhbiB7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBjb2xvcjogYmx1ZTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnRvZG8tZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMS8zO1xcblxcbiAgYm9yZGVyOiBwdXJwbGUgc29saWQgMnB4O1xcblxcbiAgJiA+IGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gIH1cXG5cXG4gICYgLmNyZWF0ZS10YXNrLWRpcmVjdGx5IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgfVxcblxcbiAgJiAuZGlzcGxheS10YXNrcyB7XFxuICAgIGJvcmRlci10b3A6IHNvbGlkIDVweCBvcmFuZ2U7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1yb3dzOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBnYXA6IDEwcHg7XFxuXFxuICAgICYgLnRhc2stZGl2IHtcXG4gICAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgICAmIC5yZW1vdmUtdGFzayB7XFxuICAgICAgICBwYWRkaW5nOiA1cHggOHB4O1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAxMHB4O1xcbiAgICAgICAgcmlnaHQ6IDEwcHg7XFxuXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgeyBQcm9qZWN0LCBwcm9qZWN0SW50ZXJmYWNlIH07XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0VGl0bGUpIHtcbiAgICB0aGlzLnByb2plY3RUaXRsZSA9IHByb2plY3RUaXRsZTtcbiAgfVxuXG4gIGdldCB0aXRsZU9mUHJvamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0VGl0bGU7XG4gIH1cblxuICBzZXQgdGl0bGVPZlByb2plY3QodmFsdWUpIHtcbiAgICB0aGlzLnByb2plY3RUaXRsZSA9IHZhbHVlO1xuICB9XG59XG5cbmNvbnN0IHByb2plY3RJbnRlcmZhY2UgPSB7XG4gIHByb2plY3RzOiBbXSxcblxuICBhZGQoZWxlbSkge1xuICAgIHRoaXMucHJvamVjdHMucHVzaChlbGVtKTtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcbiAgfSxcblxuICByZW1vdmUodmFsdWUpIHtcbiAgICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIoXG4gICAgICAocHJvaikgPT4gcHJvai50aXRsZU9mUHJvamVjdCAhPT0gdmFsdWVcbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XG4gIH0sXG5cbiAgcmVtb3ZlQXNzb2NpYXRlZFRhc2tzKHByb2osIHN0b3JhZ2UpIHtcbiAgICBzdG9yYWdlID0gc3RvcmFnZS5maWx0ZXIoKHRhc2spID0+IHRhc2sudG9kb1Byb2plY3QgIT09IHByb2opO1xuXG4gICAgcmV0dXJuIHN0b3JhZ2U7XG4gIH0sXG59O1xuIiwiZXhwb3J0IHsgY3JlYXRlRWxlbWVudCwgYXBwZW5kRWxlbWVudCwgcHJlcGVuZEVsZW1lbnQgfTtcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChuYW1lLCBjbGFzc05hbWUsIHRleHQpIHtcbiAgbGV0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xuICBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgZWxlbS50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgcmV0dXJuIGVsZW07XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEVsZW1lbnQocGFyZW50LCBjaGlsZCkge1xuICBwYXJlbnQuYXBwZW5kKGNoaWxkKTtcbn1cblxuZnVuY3Rpb24gcHJlcGVuZEVsZW1lbnQocGFyZW50LCBjaGlsZCkge1xuICBwYXJlbnQucHJlcGVuZChjaGlsZCk7XG59XG5cbi8qXG5TaG93IGFsbCB0YXNrcyBmb3IgYSBwYXJ0aWN1bGFyIHByb2plY3RcbkV2ZW50IGRlbGVnYXRpb24gb24gcHJvamVjdERpdlxuXG5sZXQgY3VycmVudFByb2plY3Q7XG5wcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBjdXJyZW50UHJvamVjdCA9IGUudGFyZ2V0LmNsYXNzTmFtZTtcbiAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xuKi9cbiIsImV4cG9ydCB7IFRvZG8sIHRhc2tJbnRlcmZhY2UgfTtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0TWFuYWdlbWVudFwiO1xuXG5jbGFzcyBUb2RvIGV4dGVuZHMgUHJvamVjdCB7XG4gIC8vIENyZWF0ZXMgYSB0b2RvXG4gIGNvbnN0cnVjdG9yKHByb2plY3RUaXRsZSwgdGl0bGUsIHByaW9yaXR5KSB7XG4gICAgLy8gQmFzZSBjbGFzcyBpcyBQcm9qZWN0IHRoYXQgaGFzIGEgcHJvamVjdCBwcm9wZXJ0eSBvbiBpdHMgY29uc3RydWN0b3JcbiAgICBzdXBlcihwcm9qZWN0VGl0bGUpO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5pZCA9IHNlbGYuY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgfVxuXG4gIC8vIFVwZGF0ZXMgYSB0b2RvXG4gIGdldCB0b2RvUHJvamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0VGl0bGU7XG4gIH1cbiAgc2V0IHRvZG9Qcm9qZWN0KHZhbHVlKSB7XG4gICAgdGhpcy5wcm9qZWN0VGl0bGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB0b2RvVGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gIH1cbiAgc2V0IHRvZG9UaXRsZSh2YWx1ZSkge1xuICAgIHRoaXMudGl0bGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB0b2RvUHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XG4gIH1cbiAgc2V0IHRvZG9Qcmlvcml0eSh2YWx1ZSkge1xuICAgIHRoaXMucHJpb3JpdHkgPSB2YWx1ZTtcbiAgfVxufVxuXG4vLyBJbnRlcmZhY2UgZm9yIHRvZG9zIC0gd2hhdCBmdW5jdGlvbmFsaXRpZXMgdGhleSBoYXZlXG5jb25zdCB0YXNrSW50ZXJmYWNlID0ge1xuICAvLyB0b2RvcyBhcnJheSB3aWxsIG1vZGlmeSBtYWluU3RvcmFnZSBhcnJheVxuICB0b2RvczogW10sXG4gIGFkZChlbGVtKSB7XG4gICAgdGhpcy50b2Rvcy5wdXNoKGVsZW0pO1xuICAgIHJldHVybiB0aGlzLnRvZG9zO1xuICB9LFxuXG4gIHJlbW92ZSh2YWx1ZSkge1xuICAgIHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLmZpbHRlcigodGFzaykgPT4gdGFzay5pZCAhPT0gdmFsdWUpO1xuICAgIHJldHVybiB0aGlzLnRvZG9zO1xuICB9LFxuXG4gIGZpbmRBbGwocHJvaikge1xuICAgIGNvbnN0IGFyciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMudG9kb3NbaV0ucHJvamVjdFRpdGxlLnRvTG93ZXJDYXNlKCkgPT09IHByb2oudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBhcnIucHVzaCh0aGlzLnRvZG9zW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfSxcblxuICAvLyB1cGRhdGUoZWxlbSwgcHJvcGVydHksIHZhbHVlKSB7XG4gIC8vICAgaWYgKHByb3BlcnR5LnRvTG93ZXJDYXNlKCkgPT09IFwidGl0bGVcIikge1xuICAvLyAgICAgY29uc29sZS5sb2coYE9sZCB0aXRsZTogJHtlbGVtLnRvZG9UaXRsZX1gKTtcbiAgLy8gICAgIGVsZW0udG9kb1RpdGxlID0gdmFsdWU7XG4gIC8vICAgICBjb25zb2xlLmxvZyhgVXBkYXRlZCB0aXRsZTogJHt2YWx1ZX1gKTtcbiAgLy8gICB9IGVsc2UgaWYgKHByb3BlcnR5LnRvTG93ZXJDYXNlKCkgPT09IFwicHJpb3JpdHlcIikge1xuICAvLyAgICAgY29uc29sZS5sb2coYE9sZCB0aXRsZTogJHtlbGVtLnRvZG9Qcmlvcml0eX1gKTtcbiAgLy8gICAgIGVsZW0udG9kb1ByaW9yaXR5ID0gdmFsdWU7XG4gIC8vICAgICBjb25zb2xlLmxvZyhgVXBkYXRlZCBwcmlvcml0eTogJHt2YWx1ZX1gKTtcbiAgLy8gICB9IGVsc2UgaWYgKHByb3BlcnR5LnRvTG93ZXJDYXNlKCkgPT09IFwicHJvamVjdFwiKSB7XG4gIC8vICAgICBjb25zb2xlLmxvZyhgT2xkIHRpdGxlOiAke2VsZW0udG9kb1Byb2plY3R9YCk7XG4gIC8vICAgICBlbGVtLnRvZG9Qcm9qZWN0ID0gdmFsdWU7XG4gIC8vICAgICBjb25zb2xlLmxvZyhgVXBkYXRlZCBwcm9wZXJ0eTogJHt2YWx1ZX1gKTtcbiAgLy8gICB9XG4gIC8vICAgY29uc29sZS5sb2coYEZ1bGwgZGV0YWlsczogXCIke2VsZW0udGl0bGV9XCIgdGl0bGVgKTtcbiAgLy8gfSxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBUb2RvLCB0YXNrSW50ZXJmYWNlIH0gZnJvbSBcIi4vdG9kb3NNYW5pcHVsYXRpb25zXCI7XG5pbXBvcnQgeyBQcm9qZWN0LCBwcm9qZWN0SW50ZXJmYWNlIH0gZnJvbSBcIi4vcHJvamVjdE1hbmFnZW1lbnRcIjtcblxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgYXBwZW5kRWxlbWVudCwgcHJlcGVuZEVsZW1lbnQgfSBmcm9tIFwiLi9zZWN0aW9uV2l0aERvbVwiO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5cbi8vIENyZWF0ZSB0aGUgbWFpbiBsYXlvdXRcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5jb25zdCBpbmJveEJsb2NrID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImluYm94LWRpdlwiLCBcIlwiKTtcbmNvbnN0IHByb2plY3RCbG9jayA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJwcm9qZWN0LWRpdlwiLCBcIlwiKTtcbmNvbnN0IHRvZG9CbG9jayA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0b2RvLWRpdlwiLCBcIlwiKTtcblxuYXBwZW5kRWxlbWVudChjb250ZW50LCBpbmJveEJsb2NrKTtcbmFwcGVuZEVsZW1lbnQoY29udGVudCwgcHJvamVjdEJsb2NrKTtcbmFwcGVuZEVsZW1lbnQoY29udGVudCwgdG9kb0Jsb2NrKTtcblxuLy8gRGVmYXVsdCBibG9ja1xuY29uc3QgaW5ib3ggPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiYnV0dG9uLWluYm94XCIsIFwiaW5ib3hcIik7XG5pbmJveC5kaXNhYmxlZCA9IHRydWU7XG5pbmJveC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbmNvbnN0IHRvZGF5ID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcImJ1dHRvbi10b2RheVwiLCBcInRvZGF5XCIpO1xuY29uc3QgdXBjb21pbmcgPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiYnV0dG9uLXVwY29taW5nXCIsIFwidXBjb21pbmdcIik7XG5cbmFwcGVuZEVsZW1lbnQoaW5ib3hCbG9jaywgaW5ib3gpO1xuYXBwZW5kRWxlbWVudChpbmJveEJsb2NrLCB0b2RheSk7XG5hcHBlbmRFbGVtZW50KGluYm94QmxvY2ssIHVwY29taW5nKTtcblxuLy8gRm9yIG5vdyB0byBhbGxvdyB0YXNrL3Byb2plY3QgY3JlYXRpb25cbmNvbnN0IGNyZWF0ZVRhc2tCdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiY3JlYXRlLXRhc2tzXCIsIFwiQ3JlYXRlIHRhc2tcIik7XG5jb25zdCBjcmVhdGVQcm9qZWN0QnV0dG9uID0gY3JlYXRlRWxlbWVudChcbiAgXCJidXR0b25cIixcbiAgXCJjcmVhdGUtcHJvamVjdHNcIixcbiAgXCJDcmVhdGUgcHJvamVjdFwiXG4pO1xuY29uc3QgZGlzcGxheUZvclRhc2tzID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImRpc3BsYXktdGFza3NcIiwgXCJcIik7XG5cbmFwcGVuZEVsZW1lbnQodG9kb0Jsb2NrLCBjcmVhdGVUYXNrQnV0dG9uKTtcbmFwcGVuZEVsZW1lbnQodG9kb0Jsb2NrLCBjcmVhdGVQcm9qZWN0QnV0dG9uKTtcbmFwcGVuZEVsZW1lbnQodG9kb0Jsb2NrLCBkaXNwbGF5Rm9yVGFza3MpO1xuXG4vLyBNYWluIGFycmF5IHdoZXJlIHRhc2tzIGFyZSBzdG9yZWRcbmxldCBtYWluU3RvcmFnZSA9IFtdO1xuY29uc29sZS5sb2coXCJNYWluIHN0b3JhZ2U6XCIpO1xuY29uc29sZS5sb2cobWFpblN0b3JhZ2UpO1xuLy8gU3RvcmUgcHJvamVjdHNcbmxldCBwcm9qZWN0U3RvcmFnZSA9IFtdO1xuY29uc29sZS5sb2coXCJQcm9qZWN0IHN0b3JhZ2U6XCIpO1xuY29uc29sZS5sb2cocHJvamVjdFN0b3JhZ2UpO1xuXG4vLyBDcmVhdGUgYSB0b2RvIGRpcmVjdGx5IGluIGEgdGFza1xuY29uc3QgY3JlYXRlVGFza0luc2lkZVByb2plY3QgPSBjcmVhdGVFbGVtZW50KFxuICBcImJ1dHRvblwiLFxuICBcImNyZWF0ZS10YXNrLWRpcmVjdGx5XCIsXG4gIFwiK1wiXG4pO1xuYXBwZW5kRWxlbWVudCh0b2RvQmxvY2ssIGNyZWF0ZVRhc2tJbnNpZGVQcm9qZWN0KTtcbmNyZWF0ZVRhc2tJbnNpZGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVUb2RvKTtcblxuLy8gQ3JlYXRlIGEgdG9kbyBnbG9iYWxseSAtIHByb2plY3QgbmFtZSBpcyByZXF1aXJlZCEhIVxuY3JlYXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlVG9kbyk7XG5mdW5jdGlvbiBjcmVhdGVUb2RvKGUpIHtcbiAgLy8gQ3JlYXRlIGEgdGFzayBsb2NhbGx5IGluc2lkZSB0aGUgY2hvc2VuIHRhc2tcbiAgY29uc3QgZGlyZWN0Q3JlYXRpb24gPSBlLnRhcmdldC5jbG9zZXN0KFwiLmNyZWF0ZS10YXNrLWRpcmVjdGx5XCIpO1xuICBsZXQgcHJvamVjdDtcblxuICBpZiAoZGlyZWN0Q3JlYXRpb24pIHtcbiAgICBjb25zdCBjdXJyZW50bHlDaG9zZW5Qcm9qZWN0ID1cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25bZGlzYWJsZWRdXCIpLnRleHRDb250ZW50O1xuICAgIHByb2plY3QgPSBjdXJyZW50bHlDaG9zZW5Qcm9qZWN0O1xuICB9IGVsc2Uge1xuICAgIHByb2plY3QgPSBwcm9tcHQoXCJQcm9qZWN0P1wiLCBcIlwiKTtcbiAgICAvLyBEZWZhdWx0IHByb2plY3QsIHRoZXJlIGFyZSBubyBjdXN0b20gcHJvamVjdHMgeWV0XG4gICAgaWYgKHByb2plY3RTdG9yYWdlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYWxlcnQoXG4gICAgICAgIFwiWW91IGhhdmUgbm90IGNyZWF0ZWQgYW55IHByb2plY3QgeWV0LiBZb3VyIHRhc2tzIGFyZSBwdXQgaW50byBpbmJveFwiXG4gICAgICApO1xuICAgICAgcHJvamVjdCA9IFwiaW5ib3hcIjtcbiAgICB9XG4gIH1cblxuICBsZXQgdGl0bGUgPSBwcm9tcHQoXCJUaXRsZVwiLCBcIlwiKTtcbiAgbGV0IHByaW9yaXR5ID0gcHJvbXB0KFwiUHJpb3JpdHlcIiwgXCJcIik7XG5cbiAgY29uc3QgdGFzayA9IG5ldyBUb2RvKHByb2plY3QsIHRpdGxlLCBwcmlvcml0eSk7XG4gIG1haW5TdG9yYWdlID0gdGFza0ludGVyZmFjZS5hZGQodGFzayk7XG4gIGNvbnNvbGUubG9nKG1haW5TdG9yYWdlKTtcblxuICB1cGRhdGVUYXNrRGlzcGxheSgpO1xufVxuXG4vLyBEaXNwbGF5IGFsbCB0b2RvcyBpbiBhIHByb2plY3RcbmluYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5VGhpc1Byb2plY3RUYXNrcyk7XG5wcm9qZWN0QmxvY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlUaGlzUHJvamVjdFRhc2tzKTtcblxuZnVuY3Rpb24gZGlzcGxheVRoaXNQcm9qZWN0VGFza3MoZSkge1xuICAvLyBDbGljayBvY2N1cnMgb24gdGhlIGluc2lkZSBvZiBhIGJ1dHRvblxuICBjb25zdCBidG4gPSBlLnRhcmdldC5jbG9zZXN0KFwiYnV0dG9uXCIpO1xuICBpZiAoIWJ0bikgcmV0dXJuO1xuXG4gIGxldCBkaXNhYmxlZEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uLnByb2plY3RcIik7XG4gIGRpc2FibGVkQnV0dG9ucy5mb3JFYWNoKChidG4pID0+IChidG4uZGlzYWJsZWQgPSBmYWxzZSkpO1xuXG4gIGJ0bi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgY29uc3QgcHJvamVjdE5hbWUgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgZ2VuZXJhdGVMaXN0T2ZUYXNrcyhwcm9qZWN0TmFtZSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRhc2tEaXNwbGF5KCkge1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25bZGlzYWJsZWRdXCIpLnRleHRDb250ZW50O1xuXG4gIGdlbmVyYXRlTGlzdE9mVGFza3MocHJvamVjdE5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUxpc3RPZlRhc2tzKHByb2plY3QpIHtcbiAgY29uc3QgY3VycmVudFByb2plY3QgPSB0YXNrSW50ZXJmYWNlLmZpbmRBbGwocHJvamVjdCk7XG4gIC8vIENsZWFyIHRoZSB0b2RvIGJsb2NrIG5vdCB0byBkdXBsaWNhdGUgYXBwZW5kZWQgZWxlbWVudHNcbiAgZGlzcGxheUZvclRhc2tzLnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFByb2plY3QubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0YXNrRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInRhc2stZGl2XCIsIFwiXCIpO1xuICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBjdXJyZW50UHJvamVjdFtpXS5pZCk7XG4gICAgY29uc3QgcmVtb3ZlQnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcInJlbW92ZS10YXNrXCIsIFwiWFwiKTtcbiAgICBjb25zdCB0aXRsZVBhcmEgPSBjdXJyZW50UHJvamVjdFtpXS50b2RvVGl0bGU7XG4gICAgY29uc3QgcHJvamVjdFBhcmEgPSBjdXJyZW50UHJvamVjdFtpXS50b2RvUHJvamVjdDtcbiAgICBjb25zdCBwcmlvcml0eVBhcmEgPSBjdXJyZW50UHJvamVjdFtpXS50b2RvUHJpb3JpdHk7XG5cbiAgICBhcHBlbmRFbGVtZW50KGRpc3BsYXlGb3JUYXNrcywgdGFza0Rpdik7XG4gICAgYXBwZW5kRWxlbWVudCh0YXNrRGl2LCByZW1vdmVCdXR0b24pO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAzOyBqKyspIHtcbiAgICAgIGxldCBwYXJhO1xuICAgICAgc3dpdGNoIChqKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICBwYXJhID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJ0YXNrLXRpdGxlXCIsIGBUaXRsZTogJHt0aXRsZVBhcmF9YCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBwYXJhID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJ0YXNrLXByb2plY3RcIiwgYFByb2plY3Q6ICR7cHJvamVjdFBhcmF9YCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBwYXJhID0gY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIFwicFwiLFxuICAgICAgICAgICAgXCJ0YXNrLXByaW9yaXR5XCIsXG4gICAgICAgICAgICBgUHJpb3JpdHk6ICR7cHJpb3JpdHlQYXJhfWBcbiAgICAgICAgICApO1xuICAgICAgfVxuICAgICAgYXBwZW5kRWxlbWVudCh0YXNrRGl2LCBwYXJhKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gUmVtb3ZlIGEgdGFza1xuZGlzcGxheUZvclRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVUYXNrKTtcblxuZnVuY3Rpb24gcmVtb3ZlVGFzayhlKSB7XG4gIGNvbnN0IGJ0biA9IGUudGFyZ2V0LmNsb3Nlc3QoXCJidXR0b25cIik7XG4gIGlmICghYnRuKSByZXR1cm47XG5cbiAgY29uc3Qgc3BlY2lmaWNUYXNrID0gZS50YXJnZXQuY2xvc2VzdChcIltkYXRhLWlkXVwiKTtcbiAgY29uc3QgaWQgPSBzcGVjaWZpY1Rhc2suZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcblxuICBzcGVjaWZpY1Rhc2sucmVtb3ZlKCk7XG4gIG1haW5TdG9yYWdlID0gdGFza0ludGVyZmFjZS5yZW1vdmUoaWQpO1xuICBjb25zb2xlLmxvZyhtYWluU3RvcmFnZSk7XG59XG5cbi8vIENyZWF0ZSBhIHByb2plY3RcbmNyZWF0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVByb2plY3QpO1xuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHtcbiAgY29uc3QgdGl0bGUgPSBwcm9tcHQoXCJQcm9qZWN0IG5hbWU/XCIsIFwiXCIpO1xuICBpZiAodGl0bGUgPT09IFwiXCIgfHwgIXRpdGxlKSByZXR1cm47XG5cbiAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlKTtcbiAgcHJvamVjdFN0b3JhZ2UgPSBwcm9qZWN0SW50ZXJmYWNlLmFkZChwcm9qZWN0KTtcblxuICBjb25zdCBkaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdC10aXRsZS1kaXZcIiwgXCJcIik7XG4gIGNvbnN0IGJ0biA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJjdXN0b20tcHJvamVjdC1kaXZcIiwgdGl0bGUpO1xuICBidG4uY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gIGNvbnN0IHNwYW4gPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcInJlbW92ZS1wcm9qZWN0XCIsIFwiWFwiKTtcblxuICBhcHBlbmRFbGVtZW50KGRpdiwgYnRuKTtcbiAgYXBwZW5kRWxlbWVudChkaXYsIHNwYW4pO1xuICBhcHBlbmRFbGVtZW50KHByb2plY3RCbG9jaywgZGl2KTtcbn1cblxuLy8gUmVtb3ZlIGEgcHJvamVjdFxucHJvamVjdEJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVQcm9qZWN0KTtcbmZ1bmN0aW9uIHJlbW92ZVByb2plY3QoZSkge1xuICBjb25zdCBzcGFuID0gZS50YXJnZXQuY2xvc2VzdChcInNwYW5cIik7XG4gIGlmICghc3BhbikgcmV0dXJuO1xuXG4gIGNvbnN0IHByb2plY3QgPSBzcGFuLnByZXZpb3VzRWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQ7XG4gIGNvbnN0IHdhcm5pbmcgPSBjb25maXJtKFwicmVtb3ZlIHRoaXMgcHJvamVjdCB3aXRoIGFsbCB0YXNrcyByZWxhdGVkIHRvIGl0P1wiKTtcbiAgaWYgKHdhcm5pbmcpIHtcbiAgICAvLyBDbGVhciBhcnJheSBpbiBhbiBvYmplY3QgZnJvbSB3aGljaCBJIHRha2UgYWxsIGluZm8gYW5kIGFzc2lnbiB0byBtYWluU3RvcmFnZVxuICAgIHRhc2tJbnRlcmZhY2UudG9kb3MgPSBwcm9qZWN0SW50ZXJmYWNlLnJlbW92ZUFzc29jaWF0ZWRUYXNrcyhcbiAgICAgIHByb2plY3QsXG4gICAgICB0YXNrSW50ZXJmYWNlLnRvZG9zXG4gICAgKTtcbiAgICBtYWluU3RvcmFnZSA9IHRhc2tJbnRlcmZhY2UudG9kb3M7XG5cbiAgICBwcm9qZWN0U3RvcmFnZSA9IHByb2plY3RJbnRlcmZhY2UucmVtb3ZlKHByb2plY3QpO1xuICAgIHNwYW4ucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgICBkaXNwbGF5Rm9yVGFza3MucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgICBpbmJveC5kaXNhYmxlZCA9IHRydWU7XG4gICAgdXBkYXRlVGFza0Rpc3BsYXkoKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9