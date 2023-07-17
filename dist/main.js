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
      padding: 5px 10px 5px 30px;
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
        background-color: goldenrod;
        border: none;
        border-radius: 5px;
      }

      & .check-box {
        position: absolute;
        top: 6px;
        left: 1px;
        height: 25px;
        width: 25px;

        appearance: none;
        border-radius: 15px;
        background-color: grey;
        border: 3px solid black;

        &:hover::before {
          content: "✔";
          color: white;

          position: absolute;
          bottom: -7px;
          left: 0px;
          font-size: 1.7rem;

          cursor: pointer;
        }
      }
    }
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,0CAA0C;AAC1C;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kCAAkC;EAClC,4CAA4C;EAC5C,0BAA0B;;EAE1B;IACE,0BAA0B;IAC1B,eAAe;IACf,UAAU;EACZ;;EAEA;IACE,uBAAuB;IACvB,WAAW;EACb;;EAEA;IACE,eAAe;IACf,qBAAqB;EACvB;AACF;;AAEA;EACE,aAAa;EACb,gBAAgB;;EAEhB,aAAa;EACb,wBAAwB;EACxB,SAAS;;EAET,sBAAsB;;EAEtB;IACE,iBAAiB;IACjB,iBAAiB;;IAEjB,uBAAuB;IACvB,aAAa;IACb,YAAY;EACd;AACF;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,gBAAgB;;EAEhB,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,SAAS;;EAET,uBAAuB;;EAEvB;IACE,aAAa;;IAEb;MACE,iBAAiB;MACjB,iBAAiB;MACjB,kBAAkB;MAClB,YAAY;MACZ,YAAY;;MAEZ,uBAAuB;MACvB,cAAc;MACd,YAAY;IACd;;IAEA;MACE,YAAY;MACZ,sBAAsB;MACtB,iBAAiB;MACjB,iBAAiB;;MAEjB;QACE,eAAe;QACf,WAAW;MACb;IACF;EACF;AACF;;AAEA;EACE,gBAAgB;EAChB,aAAa;;EAEb,wBAAwB;;EAExB;IACE,uBAAuB;IACvB,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,YAAY;EACd;;EAEA;IACE,cAAc;IACd,iBAAiB;EACnB;;EAEA;IACE,4BAA4B;IAC5B,aAAa;IACb,mBAAmB;IACnB,0BAA0B;IAC1B,SAAS;;IAET;MACE,0BAA0B;MAC1B,iBAAiB;MACjB,kBAAkB;MAClB,8BAA8B;MAC9B,kBAAkB;;MAElB;QACE,gBAAgB;QAChB,kBAAkB;QAClB,SAAS;QACT,WAAW;;QAEX,YAAY;QACZ,iBAAiB;QACjB,iBAAiB;QACjB,2BAA2B;QAC3B,YAAY;QACZ,kBAAkB;MACpB;;MAEA;QACE,kBAAkB;QAClB,QAAQ;QACR,SAAS;QACT,YAAY;QACZ,WAAW;;QAEX,gBAAgB;QAChB,mBAAmB;QACnB,sBAAsB;QACtB,uBAAuB;;QAEvB;UACE,YAAY;UACZ,YAAY;;UAEZ,kBAAkB;UAClB,YAAY;UACZ,SAAS;UACT,iBAAiB;;UAEjB,eAAe;QACjB;MACF;IACF;EACF;AACF","sourcesContent":["/* put styles into a few different files */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#content {\n  width: 420px;\n  display: grid;\n  grid-template-columns: 120px 300px;\n  grid-template-rows: 120px minmax(300px, 1fr);\n  background-color: darkcyan;\n\n  & button:hover {\n    text-decoration: underline;\n    cursor: pointer;\n    color: red;\n  }\n\n  & button:disabled {\n    background-color: black;\n    color: grey;\n  }\n\n  & button:disabled:hover {\n    cursor: default;\n    text-decoration: none;\n  }\n}\n\n.inbox-div {\n  grid-row: 1/2;\n  grid-column: 1/2;\n\n  display: grid;\n  grid-template-rows: 30px;\n  gap: 10px;\n\n  border: blue 2px solid;\n\n  & button {\n    font-size: 1.2rem;\n    font-weight: bold;\n\n    background-color: white;\n    color: orange;\n    border: none;\n  }\n}\n\n.project-div {\n  grid-column: 1/2;\n  grid-row: 2/3;\n  margin-top: 10px;\n\n  width: 120px;\n  display: grid;\n  grid-auto-rows: 30px;\n  gap: 10px;\n\n  border: green solid 2px;\n\n  & div {\n    display: flex;\n\n    & button {\n      font-size: 1.2rem;\n      font-weight: bold;\n      text-align: center;\n      width: 100px;\n      height: 30px;\n\n      background-color: coral;\n      color: skyblue;\n      border: none;\n    }\n\n    & span {\n      color: white;\n      background-color: grey;\n      font-size: 1.4rem;\n      font-weight: bold;\n\n      &:hover {\n        cursor: pointer;\n        color: blue;\n      }\n    }\n  }\n}\n\n.todo-div {\n  grid-column: 2/3;\n  grid-row: 1/3;\n\n  border: purple solid 2px;\n\n  & > button {\n    background-color: coral;\n    font-size: 1.2rem;\n    font-weight: bold;\n    color: white;\n    border: none;\n    padding: 5px;\n    margin: 10px;\n  }\n\n  & .create-task-directly {\n    display: block;\n    margin: 10px auto;\n  }\n\n  & .display-tasks {\n    border-top: solid 5px orange;\n    display: grid;\n    grid-auto-rows: 1fr;\n    grid-template-columns: 1fr;\n    gap: 10px;\n\n    & .task-div {\n      padding: 5px 10px 5px 30px;\n      font-size: 1.3rem;\n      font-style: italic;\n      border-bottom: 2px solid black;\n      position: relative;\n\n      & .remove-task {\n        padding: 5px 8px;\n        position: absolute;\n        top: 10px;\n        right: 10px;\n\n        color: white;\n        font-size: 1.2rem;\n        font-weight: bold;\n        background-color: goldenrod;\n        border: none;\n        border-radius: 5px;\n      }\n\n      & .check-box {\n        position: absolute;\n        top: 6px;\n        left: 1px;\n        height: 25px;\n        width: 25px;\n\n        appearance: none;\n        border-radius: 15px;\n        background-color: grey;\n        border: 3px solid black;\n\n        &:hover::before {\n          content: \"✔\";\n          color: white;\n\n          position: absolute;\n          bottom: -7px;\n          left: 0px;\n          font-size: 1.7rem;\n\n          cursor: pointer;\n        }\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   createElement: () => (/* binding */ createElement)
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

// Section containing program logic
// Main array where tasks are stored
let mainStorage = [];
console.log("Main storage:");
console.log(mainStorage);
// Store projects
let projectStorage = [];
console.log("Project storage:");
console.log(projectStorage);

// Task creation:
// 1) Create a todo directly in a task
const createTaskInsideProject = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createElement)(
  "button",
  "create-task-directly",
  "+"
);
(0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.appendElement)(todoBlock, createTaskInsideProject);
createTaskInsideProject.addEventListener("click", createTodo);

// 2) Create a todo globally - project name is required!!!
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
    const checkList = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createElement)("input", "check-box", "");
    checkList.setAttribute("type", "checkbox");
    const titlePara = currentProject[i].todoTitle;
    const projectPara = currentProject[i].todoProject;
    const priorityPara = currentProject[i].todoPriority;

    (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.appendElement)(displayForTasks, taskDiv);
    (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.appendElement)(taskDiv, removeButton);
    (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.appendElement)(taskDiv, checkList);

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

    // Highlight priority levels differently
    if (priorityPara === "1") {
      checkList.style.border = "3px solid red";
      checkList.style.backgroundColor = "rgb(214, 111, 111)";
    } else if (priorityPara === "2") {
      checkList.style.border = "3px solid yellow";
      checkList.style.backgroundColor = "rgb(173, 173, 79)";
    } else if (priorityPara === "3") {
      checkList.style.border = "3px solid blue";
      checkList.style.backgroundColor = "rgb(117, 117, 199)";
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

// Complete a task
displayForTasks.addEventListener("change", completeTask);

function completeTask(e) {
  let taskStatus = e.target.checked;
  if (taskStatus === true) {
    const strikeThroughPara = e.target.parentNode.querySelectorAll("p");
    strikeThroughPara.forEach(
      (para) => (para.style.textDecoration = "line-through")
    );
    e.target.disabled = true;

    const specificTask = e.target.closest("[data-id]");
    const id = specificTask.getAttribute("data-id");
    setTimeout(() => {
      specificTask.remove();
      mainStorage = _todosManipulations__WEBPACK_IMPORTED_MODULE_0__.taskInterface.remove(id);
      console.log(mainStorage);
    }, 300);
  }
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

  let disabledButtons = document.querySelectorAll("button.project");
  disabledButtons.forEach((btn) => (btn.disabled = false));
  btn.disabled = true;
  updateTaskDisplay();
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

    // While removing an element from DOM and needing to rerender content, it will automatically go back to inbox project
    displayForTasks.replaceChildren();
    inbox.disabled = true;
    updateTaskDisplay();
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQix1REFBTztBQUM3QixtQkFBbUIsZ0VBQWdCOztBQUVuQyxjQUFjLDhEQUFhO0FBQzNCLGNBQWMsOERBQWE7QUFDM0I7QUFDQSxlQUFlLDhEQUFhOztBQUU1QixFQUFFLDhEQUFhO0FBQ2YsRUFBRSw4REFBYTtBQUNmLEVBQUUsOERBQWE7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4REFBYSxTQUFTLGdFQUFnQjtBQUMxQztBQUNBLE1BQU0sOERBQWE7QUFDbkI7QUFDQSxrQkFBa0IsOERBQWE7QUFDL0IscUJBQXFCLGdFQUFnQjtBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvcHJvamVjdE1hbmFnZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL3NlY3Rpb25XaXRoRG9tLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy90b2Rvc01hbmlwdWxhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBwdXQgc3R5bGVzIGludG8gYSBmZXcgZGlmZmVyZW50IGZpbGVzICovXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4jY29udGVudCB7XG4gIHdpZHRoOiA0MjBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMjBweCAzMDBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMjBweCBtaW5tYXgoMzAwcHgsIDFmcik7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtjeWFuO1xuXG4gICYgYnV0dG9uOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuXG4gICYgYnV0dG9uOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogZ3JleTtcbiAgfVxuXG4gICYgYnV0dG9uOmRpc2FibGVkOmhvdmVyIHtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG59XG5cbi5pbmJveC1kaXYge1xuICBncmlkLXJvdzogMS8yO1xuICBncmlkLWNvbHVtbjogMS8yO1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzBweDtcbiAgZ2FwOiAxMHB4O1xuXG4gIGJvcmRlcjogYmx1ZSAycHggc29saWQ7XG5cbiAgJiBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IG9yYW5nZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbn1cblxuLnByb2plY3QtZGl2IHtcbiAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgZ3JpZC1yb3c6IDIvMztcbiAgbWFyZ2luLXRvcDogMTBweDtcblxuICB3aWR0aDogMTIwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1yb3dzOiAzMHB4O1xuICBnYXA6IDEwcHg7XG5cbiAgYm9yZGVyOiBncmVlbiBzb2xpZCAycHg7XG5cbiAgJiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAmIGJ1dHRvbiB7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JhbDtcbiAgICAgIGNvbG9yOiBza3libHVlO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cblxuICAgICYgc3BhbiB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi50b2RvLWRpdiB7XG4gIGdyaWQtY29sdW1uOiAyLzM7XG4gIGdyaWQtcm93OiAxLzM7XG5cbiAgYm9yZGVyOiBwdXJwbGUgc29saWQgMnB4O1xuXG4gICYgPiBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgfVxuXG4gICYgLmNyZWF0ZS10YXNrLWRpcmVjdGx5IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgfVxuXG4gICYgLmRpc3BsYXktdGFza3Mge1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDVweCBvcmFuZ2U7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tcm93czogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogMTBweDtcblxuICAgICYgLnRhc2stZGl2IHtcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAzMHB4O1xuICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICYgLnJlbW92ZS10YXNrIHtcbiAgICAgICAgcGFkZGluZzogNXB4IDhweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIHJpZ2h0OiAxMHB4O1xuXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgfVxuXG4gICAgICAmIC5jaGVjay1ib3gge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNnB4O1xuICAgICAgICBsZWZ0OiAxcHg7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgd2lkdGg6IDI1cHg7XG5cbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG5cbiAgICAgICAgJjpob3Zlcjo6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiBcIuKclFwiO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IC03cHg7XG4gICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDBDQUEwQztBQUMxQztFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsNENBQTRDO0VBQzVDLDBCQUEwQjs7RUFFMUI7SUFDRSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLFVBQVU7RUFDWjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxlQUFlO0lBQ2YscUJBQXFCO0VBQ3ZCO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCOztFQUVoQixhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLFNBQVM7O0VBRVQsc0JBQXNCOztFQUV0QjtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7O0lBRWpCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGdCQUFnQjs7RUFFaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsU0FBUzs7RUFFVCx1QkFBdUI7O0VBRXZCO0lBQ0UsYUFBYTs7SUFFYjtNQUNFLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixZQUFZOztNQUVaLHVCQUF1QjtNQUN2QixjQUFjO01BQ2QsWUFBWTtJQUNkOztJQUVBO01BQ0UsWUFBWTtNQUNaLHNCQUFzQjtNQUN0QixpQkFBaUI7TUFDakIsaUJBQWlCOztNQUVqQjtRQUNFLGVBQWU7UUFDZixXQUFXO01BQ2I7SUFDRjtFQUNGO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTs7RUFFYix3QkFBd0I7O0VBRXhCO0lBQ0UsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtFQUNkOztFQUVBO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixTQUFTOztJQUVUO01BQ0UsMEJBQTBCO01BQzFCLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsOEJBQThCO01BQzlCLGtCQUFrQjs7TUFFbEI7UUFDRSxnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxXQUFXOztRQUVYLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLDJCQUEyQjtRQUMzQixZQUFZO1FBQ1osa0JBQWtCO01BQ3BCOztNQUVBO1FBQ0Usa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixTQUFTO1FBQ1QsWUFBWTtRQUNaLFdBQVc7O1FBRVgsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixzQkFBc0I7UUFDdEIsdUJBQXVCOztRQUV2QjtVQUNFLFlBQVk7VUFDWixZQUFZOztVQUVaLGtCQUFrQjtVQUNsQixZQUFZO1VBQ1osU0FBUztVQUNULGlCQUFpQjs7VUFFakIsZUFBZTtRQUNqQjtNQUNGO0lBQ0Y7RUFDRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHB1dCBzdHlsZXMgaW50byBhIGZldyBkaWZmZXJlbnQgZmlsZXMgKi9cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICB3aWR0aDogNDIwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMjBweCAzMDBweDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTIwcHggbWlubWF4KDMwMHB4LCAxZnIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2N5YW47XFxuXFxuICAmIGJ1dHRvbjpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiByZWQ7XFxuICB9XFxuXFxuICAmIGJ1dHRvbjpkaXNhYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogZ3JleTtcXG4gIH1cXG5cXG4gICYgYnV0dG9uOmRpc2FibGVkOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB9XFxufVxcblxcbi5pbmJveC1kaXYge1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMHB4O1xcbiAgZ2FwOiAxMHB4O1xcblxcbiAgYm9yZGVyOiBibHVlIDJweCBzb2xpZDtcXG5cXG4gICYgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IG9yYW5nZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgfVxcbn1cXG5cXG4ucHJvamVjdC1kaXYge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAyLzM7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcblxcbiAgd2lkdGg6IDEyMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1yb3dzOiAzMHB4O1xcbiAgZ2FwOiAxMHB4O1xcblxcbiAgYm9yZGVyOiBncmVlbiBzb2xpZCAycHg7XFxuXFxuICAmIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgICYgYnV0dG9uIHtcXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICAgIGhlaWdodDogMzBweDtcXG5cXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JhbDtcXG4gICAgICBjb2xvcjogc2t5Ymx1ZTtcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgJiBzcGFuIHtcXG4gICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG5cXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGNvbG9yOiBibHVlO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4udG9kby1kaXYge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAxLzM7XFxuXFxuICBib3JkZXI6IHB1cnBsZSBzb2xpZCAycHg7XFxuXFxuICAmID4gYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29yYWw7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgfVxcblxcbiAgJiAuY3JlYXRlLXRhc2stZGlyZWN0bHkge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICB9XFxuXFxuICAmIC5kaXNwbGF5LXRhc2tzIHtcXG4gICAgYm9yZGVyLXRvcDogc29saWQgNXB4IG9yYW5nZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdhcDogMTBweDtcXG5cXG4gICAgJiAudGFzay1kaXYge1xcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAzMHB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAgICYgLnJlbW92ZS10YXNrIHtcXG4gICAgICAgIHBhZGRpbmc6IDVweCA4cHg7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDEwcHg7XFxuICAgICAgICByaWdodDogMTBweDtcXG5cXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgfVxcblxcbiAgICAgICYgLmNoZWNrLWJveCB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDZweDtcXG4gICAgICAgIGxlZnQ6IDFweDtcXG4gICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgICAgIHdpZHRoOiAyNXB4O1xcblxcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuXFxuICAgICAgICAmOmhvdmVyOjpiZWZvcmUge1xcbiAgICAgICAgICBjb250ZW50OiBcXFwi4pyUXFxcIjtcXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xcblxcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgIGJvdHRvbTogLTdweDtcXG4gICAgICAgICAgbGVmdDogMHB4O1xcbiAgICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcXG5cXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgeyBQcm9qZWN0LCBwcm9qZWN0SW50ZXJmYWNlIH07XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0VGl0bGUpIHtcbiAgICB0aGlzLnByb2plY3RUaXRsZSA9IHByb2plY3RUaXRsZTtcbiAgfVxuXG4gIGdldCB0aXRsZU9mUHJvamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0VGl0bGU7XG4gIH1cblxuICBzZXQgdGl0bGVPZlByb2plY3QodmFsdWUpIHtcbiAgICB0aGlzLnByb2plY3RUaXRsZSA9IHZhbHVlO1xuICB9XG59XG5cbmNvbnN0IHByb2plY3RJbnRlcmZhY2UgPSB7XG4gIHByb2plY3RzOiBbXSxcblxuICBhZGQoZWxlbSkge1xuICAgIHRoaXMucHJvamVjdHMucHVzaChlbGVtKTtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcbiAgfSxcblxuICByZW1vdmUodmFsdWUpIHtcbiAgICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIoXG4gICAgICAocHJvaikgPT4gcHJvai50aXRsZU9mUHJvamVjdCAhPT0gdmFsdWVcbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XG4gIH0sXG5cbiAgcmVtb3ZlQXNzb2NpYXRlZFRhc2tzKHByb2osIHN0b3JhZ2UpIHtcbiAgICBzdG9yYWdlID0gc3RvcmFnZS5maWx0ZXIoKHRhc2spID0+IHRhc2sudG9kb1Byb2plY3QgIT09IHByb2opO1xuXG4gICAgcmV0dXJuIHN0b3JhZ2U7XG4gIH0sXG59O1xuIiwiZXhwb3J0IHsgY3JlYXRlRWxlbWVudCwgYXBwZW5kRWxlbWVudH07XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQobmFtZSwgY2xhc3NOYW1lLCB0ZXh0KSB7XG4gIGxldCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKTtcbiAgZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIGVsZW0udGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gIHJldHVybiBlbGVtO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRFbGVtZW50KHBhcmVudCwgY2hpbGQpIHtcbiAgcGFyZW50LmFwcGVuZChjaGlsZCk7XG59IiwiZXhwb3J0IHsgVG9kbywgdGFza0ludGVyZmFjZSB9O1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RNYW5hZ2VtZW50XCI7XG5cbmNsYXNzIFRvZG8gZXh0ZW5kcyBQcm9qZWN0IHtcbiAgLy8gQ3JlYXRlcyBhIHRvZG9cbiAgY29uc3RydWN0b3IocHJvamVjdFRpdGxlLCB0aXRsZSwgcHJpb3JpdHkpIHtcbiAgICAvLyBCYXNlIGNsYXNzIGlzIFByb2plY3QgdGhhdCBoYXMgYSBwcm9qZWN0IHByb3BlcnR5IG9uIGl0cyBjb25zdHJ1Y3RvclxuICAgIHN1cGVyKHByb2plY3RUaXRsZSk7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmlkID0gc2VsZi5jcnlwdG8ucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgLy8gVXBkYXRlcyBhIHRvZG9cbiAgZ2V0IHRvZG9Qcm9qZWN0KCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RUaXRsZTtcbiAgfVxuICBzZXQgdG9kb1Byb2plY3QodmFsdWUpIHtcbiAgICB0aGlzLnByb2plY3RUaXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHRvZG9UaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgfVxuICBzZXQgdG9kb1RpdGxlKHZhbHVlKSB7XG4gICAgdGhpcy50aXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHRvZG9Qcmlvcml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcbiAgfVxuICBzZXQgdG9kb1ByaW9yaXR5KHZhbHVlKSB7XG4gICAgdGhpcy5wcmlvcml0eSA9IHZhbHVlO1xuICB9XG59XG5cbi8vIEludGVyZmFjZSBmb3IgdG9kb3MgLSB3aGF0IGZ1bmN0aW9uYWxpdGllcyB0aGV5IGhhdmVcbmNvbnN0IHRhc2tJbnRlcmZhY2UgPSB7XG4gIC8vIHRvZG9zIGFycmF5IHdpbGwgbW9kaWZ5IG1haW5TdG9yYWdlIGFycmF5XG4gIHRvZG9zOiBbXSxcbiAgYWRkKGVsZW0pIHtcbiAgICB0aGlzLnRvZG9zLnB1c2goZWxlbSk7XG4gICAgcmV0dXJuIHRoaXMudG9kb3M7XG4gIH0sXG5cbiAgcmVtb3ZlKHZhbHVlKSB7XG4gICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkICE9PSB2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXMudG9kb3M7XG4gIH0sXG5cbiAgZmluZEFsbChwcm9qKSB7XG4gICAgY29uc3QgYXJyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy50b2Rvc1tpXS5wcm9qZWN0VGl0bGUudG9Mb3dlckNhc2UoKSA9PT0gcHJvai50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIGFyci5wdXNoKHRoaXMudG9kb3NbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuICB9LFxuXG4gIC8vIHVwZGF0ZShlbGVtLCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgLy8gICBpZiAocHJvcGVydHkudG9Mb3dlckNhc2UoKSA9PT0gXCJ0aXRsZVwiKSB7XG4gIC8vICAgICBjb25zb2xlLmxvZyhgT2xkIHRpdGxlOiAke2VsZW0udG9kb1RpdGxlfWApO1xuICAvLyAgICAgZWxlbS50b2RvVGl0bGUgPSB2YWx1ZTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKGBVcGRhdGVkIHRpdGxlOiAke3ZhbHVlfWApO1xuICAvLyAgIH0gZWxzZSBpZiAocHJvcGVydHkudG9Mb3dlckNhc2UoKSA9PT0gXCJwcmlvcml0eVwiKSB7XG4gIC8vICAgICBjb25zb2xlLmxvZyhgT2xkIHRpdGxlOiAke2VsZW0udG9kb1ByaW9yaXR5fWApO1xuICAvLyAgICAgZWxlbS50b2RvUHJpb3JpdHkgPSB2YWx1ZTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKGBVcGRhdGVkIHByaW9yaXR5OiAke3ZhbHVlfWApO1xuICAvLyAgIH0gZWxzZSBpZiAocHJvcGVydHkudG9Mb3dlckNhc2UoKSA9PT0gXCJwcm9qZWN0XCIpIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKGBPbGQgdGl0bGU6ICR7ZWxlbS50b2RvUHJvamVjdH1gKTtcbiAgLy8gICAgIGVsZW0udG9kb1Byb2plY3QgPSB2YWx1ZTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKGBVcGRhdGVkIHByb3BlcnR5OiAke3ZhbHVlfWApO1xuICAvLyAgIH1cbiAgLy8gICBjb25zb2xlLmxvZyhgRnVsbCBkZXRhaWxzOiBcIiR7ZWxlbS50aXRsZX1cIiB0aXRsZWApO1xuICAvLyB9LFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IFRvZG8sIHRhc2tJbnRlcmZhY2UgfSBmcm9tIFwiLi90b2Rvc01hbmlwdWxhdGlvbnNcIjtcbmltcG9ydCB7IFByb2plY3QsIHByb2plY3RJbnRlcmZhY2UgfSBmcm9tIFwiLi9wcm9qZWN0TWFuYWdlbWVudFwiO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgYXBwZW5kRWxlbWVudCB9IGZyb20gXCIuL3NlY3Rpb25XaXRoRG9tXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuLy8gQ3JlYXRlIHRoZSBtYWluIGxheW91dFxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbmNvbnN0IGluYm94QmxvY2sgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiaW5ib3gtZGl2XCIsIFwiXCIpO1xuY29uc3QgcHJvamVjdEJsb2NrID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInByb2plY3QtZGl2XCIsIFwiXCIpO1xuY29uc3QgdG9kb0Jsb2NrID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInRvZG8tZGl2XCIsIFwiXCIpO1xuXG5hcHBlbmRFbGVtZW50KGNvbnRlbnQsIGluYm94QmxvY2spO1xuYXBwZW5kRWxlbWVudChjb250ZW50LCBwcm9qZWN0QmxvY2spO1xuYXBwZW5kRWxlbWVudChjb250ZW50LCB0b2RvQmxvY2spO1xuXG4vLyBEZWZhdWx0IGJsb2NrXG5jb25zdCBpbmJveCA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJidXR0b24taW5ib3hcIiwgXCJpbmJveFwiKTtcbmluYm94LmRpc2FibGVkID0gdHJ1ZTtcbmluYm94LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuY29uc3QgdG9kYXkgPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiYnV0dG9uLXRvZGF5XCIsIFwidG9kYXlcIik7XG5jb25zdCB1cGNvbWluZyA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJidXR0b24tdXBjb21pbmdcIiwgXCJ1cGNvbWluZ1wiKTtcblxuYXBwZW5kRWxlbWVudChpbmJveEJsb2NrLCBpbmJveCk7XG5hcHBlbmRFbGVtZW50KGluYm94QmxvY2ssIHRvZGF5KTtcbmFwcGVuZEVsZW1lbnQoaW5ib3hCbG9jaywgdXBjb21pbmcpO1xuXG4vLyBGb3Igbm93IHRvIGFsbG93IHRhc2svcHJvamVjdCBjcmVhdGlvblxuY29uc3QgY3JlYXRlVGFza0J1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJjcmVhdGUtdGFza3NcIiwgXCJDcmVhdGUgdGFza1wiKTtcbmNvbnN0IGNyZWF0ZVByb2plY3RCdXR0b24gPSBjcmVhdGVFbGVtZW50KFxuICBcImJ1dHRvblwiLFxuICBcImNyZWF0ZS1wcm9qZWN0c1wiLFxuICBcIkNyZWF0ZSBwcm9qZWN0XCJcbik7XG5jb25zdCBkaXNwbGF5Rm9yVGFza3MgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZGlzcGxheS10YXNrc1wiLCBcIlwiKTtcblxuYXBwZW5kRWxlbWVudCh0b2RvQmxvY2ssIGNyZWF0ZVRhc2tCdXR0b24pO1xuYXBwZW5kRWxlbWVudCh0b2RvQmxvY2ssIGNyZWF0ZVByb2plY3RCdXR0b24pO1xuYXBwZW5kRWxlbWVudCh0b2RvQmxvY2ssIGRpc3BsYXlGb3JUYXNrcyk7XG5cbi8vIFNlY3Rpb24gY29udGFpbmluZyBwcm9ncmFtIGxvZ2ljXG4vLyBNYWluIGFycmF5IHdoZXJlIHRhc2tzIGFyZSBzdG9yZWRcbmxldCBtYWluU3RvcmFnZSA9IFtdO1xuY29uc29sZS5sb2coXCJNYWluIHN0b3JhZ2U6XCIpO1xuY29uc29sZS5sb2cobWFpblN0b3JhZ2UpO1xuLy8gU3RvcmUgcHJvamVjdHNcbmxldCBwcm9qZWN0U3RvcmFnZSA9IFtdO1xuY29uc29sZS5sb2coXCJQcm9qZWN0IHN0b3JhZ2U6XCIpO1xuY29uc29sZS5sb2cocHJvamVjdFN0b3JhZ2UpO1xuXG4vLyBUYXNrIGNyZWF0aW9uOlxuLy8gMSkgQ3JlYXRlIGEgdG9kbyBkaXJlY3RseSBpbiBhIHRhc2tcbmNvbnN0IGNyZWF0ZVRhc2tJbnNpZGVQcm9qZWN0ID0gY3JlYXRlRWxlbWVudChcbiAgXCJidXR0b25cIixcbiAgXCJjcmVhdGUtdGFzay1kaXJlY3RseVwiLFxuICBcIitcIlxuKTtcbmFwcGVuZEVsZW1lbnQodG9kb0Jsb2NrLCBjcmVhdGVUYXNrSW5zaWRlUHJvamVjdCk7XG5jcmVhdGVUYXNrSW5zaWRlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlVG9kbyk7XG5cbi8vIDIpIENyZWF0ZSBhIHRvZG8gZ2xvYmFsbHkgLSBwcm9qZWN0IG5hbWUgaXMgcmVxdWlyZWQhISFcbmNyZWF0ZVRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVRvZG8pO1xuXG5mdW5jdGlvbiBjcmVhdGVUb2RvKGUpIHtcbiAgLy8gQ3JlYXRlIGEgdGFzayBsb2NhbGx5IGluc2lkZSB0aGUgY2hvc2VuIHRhc2tcbiAgY29uc3QgZGlyZWN0Q3JlYXRpb24gPSBlLnRhcmdldC5jbG9zZXN0KFwiLmNyZWF0ZS10YXNrLWRpcmVjdGx5XCIpO1xuICBsZXQgcHJvamVjdDtcblxuICBpZiAoZGlyZWN0Q3JlYXRpb24pIHtcbiAgICBjb25zdCBjdXJyZW50bHlDaG9zZW5Qcm9qZWN0ID1cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25bZGlzYWJsZWRdXCIpLnRleHRDb250ZW50O1xuICAgIHByb2plY3QgPSBjdXJyZW50bHlDaG9zZW5Qcm9qZWN0O1xuICB9IGVsc2Uge1xuICAgIHByb2plY3QgPSBwcm9tcHQoXCJQcm9qZWN0P1wiLCBcIlwiKTtcbiAgICAvLyBEZWZhdWx0IHByb2plY3QsIHRoZXJlIGFyZSBubyBjdXN0b20gcHJvamVjdHMgeWV0XG4gICAgaWYgKHByb2plY3RTdG9yYWdlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYWxlcnQoXG4gICAgICAgIFwiWW91IGhhdmUgbm90IGNyZWF0ZWQgYW55IHByb2plY3QgeWV0LiBZb3VyIHRhc2tzIGFyZSBwdXQgaW50byBpbmJveFwiXG4gICAgICApO1xuICAgICAgcHJvamVjdCA9IFwiaW5ib3hcIjtcbiAgICB9XG4gIH1cblxuICBsZXQgdGl0bGUgPSBwcm9tcHQoXCJUaXRsZVwiLCBcIlwiKTtcbiAgbGV0IHByaW9yaXR5ID0gcHJvbXB0KFwiUHJpb3JpdHlcIiwgXCJcIik7XG5cbiAgY29uc3QgdGFzayA9IG5ldyBUb2RvKHByb2plY3QsIHRpdGxlLCBwcmlvcml0eSk7XG4gIG1haW5TdG9yYWdlID0gdGFza0ludGVyZmFjZS5hZGQodGFzayk7XG4gIGNvbnNvbGUubG9nKG1haW5TdG9yYWdlKTtcblxuICB1cGRhdGVUYXNrRGlzcGxheSgpO1xufVxuXG4vLyBEaXNwbGF5IGFsbCB0b2RvcyBpbiBhIHByb2plY3RcbmluYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5VGhpc1Byb2plY3RUYXNrcyk7XG5wcm9qZWN0QmxvY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlUaGlzUHJvamVjdFRhc2tzKTtcblxuZnVuY3Rpb24gZGlzcGxheVRoaXNQcm9qZWN0VGFza3MoZSkge1xuICAvLyBDbGljayBvY2N1cnMgb24gdGhlIGluc2lkZSBvZiBhIGJ1dHRvblxuICBjb25zdCBidG4gPSBlLnRhcmdldC5jbG9zZXN0KFwiYnV0dG9uXCIpO1xuICBpZiAoIWJ0bikgcmV0dXJuO1xuXG4gIGxldCBkaXNhYmxlZEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uLnByb2plY3RcIik7XG4gIGRpc2FibGVkQnV0dG9ucy5mb3JFYWNoKChidG4pID0+IChidG4uZGlzYWJsZWQgPSBmYWxzZSkpO1xuXG4gIGJ0bi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgY29uc3QgcHJvamVjdE5hbWUgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgZ2VuZXJhdGVMaXN0T2ZUYXNrcyhwcm9qZWN0TmFtZSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRhc2tEaXNwbGF5KCkge1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25bZGlzYWJsZWRdXCIpLnRleHRDb250ZW50O1xuXG4gIGdlbmVyYXRlTGlzdE9mVGFza3MocHJvamVjdE5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUxpc3RPZlRhc2tzKHByb2plY3QpIHtcbiAgY29uc3QgY3VycmVudFByb2plY3QgPSB0YXNrSW50ZXJmYWNlLmZpbmRBbGwocHJvamVjdCk7XG4gIC8vIENsZWFyIHRoZSB0b2RvIGJsb2NrIG5vdCB0byBkdXBsaWNhdGUgYXBwZW5kZWQgZWxlbWVudHNcbiAgZGlzcGxheUZvclRhc2tzLnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFByb2plY3QubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0YXNrRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInRhc2stZGl2XCIsIFwiXCIpO1xuICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBjdXJyZW50UHJvamVjdFtpXS5pZCk7XG4gICAgY29uc3QgcmVtb3ZlQnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcInJlbW92ZS10YXNrXCIsIFwiWFwiKTtcbiAgICBjb25zdCBjaGVja0xpc3QgPSBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgXCJjaGVjay1ib3hcIiwgXCJcIik7XG4gICAgY2hlY2tMaXN0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICBjb25zdCB0aXRsZVBhcmEgPSBjdXJyZW50UHJvamVjdFtpXS50b2RvVGl0bGU7XG4gICAgY29uc3QgcHJvamVjdFBhcmEgPSBjdXJyZW50UHJvamVjdFtpXS50b2RvUHJvamVjdDtcbiAgICBjb25zdCBwcmlvcml0eVBhcmEgPSBjdXJyZW50UHJvamVjdFtpXS50b2RvUHJpb3JpdHk7XG5cbiAgICBhcHBlbmRFbGVtZW50KGRpc3BsYXlGb3JUYXNrcywgdGFza0Rpdik7XG4gICAgYXBwZW5kRWxlbWVudCh0YXNrRGl2LCByZW1vdmVCdXR0b24pO1xuICAgIGFwcGVuZEVsZW1lbnQodGFza0RpdiwgY2hlY2tMaXN0KTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XG4gICAgICBsZXQgcGFyYTtcbiAgICAgIHN3aXRjaCAoaikge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgcGFyYSA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwidGFzay10aXRsZVwiLCBgVGl0bGU6ICR7dGl0bGVQYXJhfWApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgcGFyYSA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwidGFzay1wcm9qZWN0XCIsIGBQcm9qZWN0OiAke3Byb2plY3RQYXJhfWApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgcGFyYSA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgIFwidGFzay1wcmlvcml0eVwiLFxuICAgICAgICAgICAgYFByaW9yaXR5OiAke3ByaW9yaXR5UGFyYX1gXG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGFwcGVuZEVsZW1lbnQodGFza0RpdiwgcGFyYSk7XG4gICAgfVxuXG4gICAgLy8gSGlnaGxpZ2h0IHByaW9yaXR5IGxldmVscyBkaWZmZXJlbnRseVxuICAgIGlmIChwcmlvcml0eVBhcmEgPT09IFwiMVwiKSB7XG4gICAgICBjaGVja0xpc3Quc3R5bGUuYm9yZGVyID0gXCIzcHggc29saWQgcmVkXCI7XG4gICAgICBjaGVja0xpc3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjE0LCAxMTEsIDExMSlcIjtcbiAgICB9IGVsc2UgaWYgKHByaW9yaXR5UGFyYSA9PT0gXCIyXCIpIHtcbiAgICAgIGNoZWNrTGlzdC5zdHlsZS5ib3JkZXIgPSBcIjNweCBzb2xpZCB5ZWxsb3dcIjtcbiAgICAgIGNoZWNrTGlzdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigxNzMsIDE3MywgNzkpXCI7XG4gICAgfSBlbHNlIGlmIChwcmlvcml0eVBhcmEgPT09IFwiM1wiKSB7XG4gICAgICBjaGVja0xpc3Quc3R5bGUuYm9yZGVyID0gXCIzcHggc29saWQgYmx1ZVwiO1xuICAgICAgY2hlY2tMaXN0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDExNywgMTE3LCAxOTkpXCI7XG4gICAgfVxuICB9XG59XG5cbi8vIFJlbW92ZSBhIHRhc2tcbmRpc3BsYXlGb3JUYXNrcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlVGFzayk7XG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2soZSkge1xuICBjb25zdCBidG4gPSBlLnRhcmdldC5jbG9zZXN0KFwiYnV0dG9uXCIpO1xuICBpZiAoIWJ0bikgcmV0dXJuO1xuXG4gIGNvbnN0IHNwZWNpZmljVGFzayA9IGUudGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1pZF1cIik7XG4gIGNvbnN0IGlkID0gc3BlY2lmaWNUYXNrLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XG5cbiAgc3BlY2lmaWNUYXNrLnJlbW92ZSgpO1xuICBtYWluU3RvcmFnZSA9IHRhc2tJbnRlcmZhY2UucmVtb3ZlKGlkKTtcbiAgY29uc29sZS5sb2cobWFpblN0b3JhZ2UpO1xufVxuXG4vLyBDb21wbGV0ZSBhIHRhc2tcbmRpc3BsYXlGb3JUYXNrcy5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGNvbXBsZXRlVGFzayk7XG5cbmZ1bmN0aW9uIGNvbXBsZXRlVGFzayhlKSB7XG4gIGxldCB0YXNrU3RhdHVzID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgaWYgKHRhc2tTdGF0dXMgPT09IHRydWUpIHtcbiAgICBjb25zdCBzdHJpa2VUaHJvdWdoUGFyYSA9IGUudGFyZ2V0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvckFsbChcInBcIik7XG4gICAgc3RyaWtlVGhyb3VnaFBhcmEuZm9yRWFjaChcbiAgICAgIChwYXJhKSA9PiAocGFyYS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibGluZS10aHJvdWdoXCIpXG4gICAgKTtcbiAgICBlLnRhcmdldC5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICBjb25zdCBzcGVjaWZpY1Rhc2sgPSBlLnRhcmdldC5jbG9zZXN0KFwiW2RhdGEtaWRdXCIpO1xuICAgIGNvbnN0IGlkID0gc3BlY2lmaWNUYXNrLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzcGVjaWZpY1Rhc2sucmVtb3ZlKCk7XG4gICAgICBtYWluU3RvcmFnZSA9IHRhc2tJbnRlcmZhY2UucmVtb3ZlKGlkKTtcbiAgICAgIGNvbnNvbGUubG9nKG1haW5TdG9yYWdlKTtcbiAgICB9LCAzMDApO1xuICB9XG59XG4vLyBDcmVhdGUgYSBwcm9qZWN0XG5jcmVhdGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVQcm9qZWN0KTtcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XG4gIGNvbnN0IHRpdGxlID0gcHJvbXB0KFwiUHJvamVjdCBuYW1lP1wiLCBcIlwiKTtcbiAgaWYgKHRpdGxlID09PSBcIlwiIHx8ICF0aXRsZSkgcmV0dXJuO1xuXG4gIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSk7XG4gIHByb2plY3RTdG9yYWdlID0gcHJvamVjdEludGVyZmFjZS5hZGQocHJvamVjdCk7XG5cbiAgY29uc3QgZGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInByb2plY3QtdGl0bGUtZGl2XCIsIFwiXCIpO1xuICBjb25zdCBidG4gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiY3VzdG9tLXByb2plY3QtZGl2XCIsIHRpdGxlKTtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICBjb25zdCBzcGFuID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJyZW1vdmUtcHJvamVjdFwiLCBcIlhcIik7XG5cbiAgYXBwZW5kRWxlbWVudChkaXYsIGJ0bik7XG4gIGFwcGVuZEVsZW1lbnQoZGl2LCBzcGFuKTtcbiAgYXBwZW5kRWxlbWVudChwcm9qZWN0QmxvY2ssIGRpdik7XG5cbiAgbGV0IGRpc2FibGVkQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b24ucHJvamVjdFwiKTtcbiAgZGlzYWJsZWRCdXR0b25zLmZvckVhY2goKGJ0bikgPT4gKGJ0bi5kaXNhYmxlZCA9IGZhbHNlKSk7XG4gIGJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gIHVwZGF0ZVRhc2tEaXNwbGF5KCk7XG59XG5cbi8vIFJlbW92ZSBhIHByb2plY3RcbnByb2plY3RCbG9jay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlUHJvamVjdCk7XG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0KGUpIHtcbiAgY29uc3Qgc3BhbiA9IGUudGFyZ2V0LmNsb3Nlc3QoXCJzcGFuXCIpO1xuICBpZiAoIXNwYW4pIHJldHVybjtcblxuICBjb25zdCBwcm9qZWN0ID0gc3Bhbi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50O1xuICBjb25zdCB3YXJuaW5nID0gY29uZmlybShcInJlbW92ZSB0aGlzIHByb2plY3Qgd2l0aCBhbGwgdGFza3MgcmVsYXRlZCB0byBpdD9cIik7XG4gIGlmICh3YXJuaW5nKSB7XG4gICAgLy8gQ2xlYXIgYXJyYXkgaW4gYW4gb2JqZWN0IGZyb20gd2hpY2ggSSB0YWtlIGFsbCBpbmZvIGFuZCBhc3NpZ24gdG8gbWFpblN0b3JhZ2VcbiAgICB0YXNrSW50ZXJmYWNlLnRvZG9zID0gcHJvamVjdEludGVyZmFjZS5yZW1vdmVBc3NvY2lhdGVkVGFza3MoXG4gICAgICBwcm9qZWN0LFxuICAgICAgdGFza0ludGVyZmFjZS50b2Rvc1xuICAgICk7XG4gICAgbWFpblN0b3JhZ2UgPSB0YXNrSW50ZXJmYWNlLnRvZG9zO1xuICAgIHByb2plY3RTdG9yYWdlID0gcHJvamVjdEludGVyZmFjZS5yZW1vdmUocHJvamVjdCk7XG4gICAgc3Bhbi5wYXJlbnROb2RlLnJlbW92ZSgpO1xuXG4gICAgLy8gV2hpbGUgcmVtb3ZpbmcgYW4gZWxlbWVudCBmcm9tIERPTSBhbmQgbmVlZGluZyB0byByZXJlbmRlciBjb250ZW50LCBpdCB3aWxsIGF1dG9tYXRpY2FsbHkgZ28gYmFjayB0byBpbmJveCBwcm9qZWN0XG4gICAgZGlzcGxheUZvclRhc2tzLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgIGluYm94LmRpc2FibGVkID0gdHJ1ZTtcbiAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=