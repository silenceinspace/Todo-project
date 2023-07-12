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

    background-color: grey;
    color: orange;
    border: none;
  }
}

.project-div {
  grid-column: 1/2;
  grid-row: 2/3;
  margin-top: 10px;

  display: grid;
  grid-auto-rows: 30px;
  gap: 10px;

  border: green solid 2px;

  & button {
    font-size: 1.2rem;
    font-weight: bold;

    background-color: darkolivegreen;
    color: skyblue;
    border: none;
  }
}

.todo-div {
  grid-column: 2/3;
  grid-row: 1/3;

  border: purple solid 2px;

  & > button {
    background-color: green;
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
    }
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,0CAA0C;AAC1C;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kCAAkC;EAClC,4CAA4C;;EAE5C;IACE,0BAA0B;IAC1B,eAAe;IACf,UAAU;EACZ;AACF;;AAEA;EACE,aAAa;EACb,gBAAgB;;EAEhB,aAAa;EACb,wBAAwB;EACxB,SAAS;;EAET,sBAAsB;;EAEtB;IACE,iBAAiB;IACjB,iBAAiB;;IAEjB,sBAAsB;IACtB,aAAa;IACb,YAAY;EACd;AACF;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,gBAAgB;;EAEhB,aAAa;EACb,oBAAoB;EACpB,SAAS;;EAET,uBAAuB;;EAEvB;IACE,iBAAiB;IACjB,iBAAiB;;IAEjB,gCAAgC;IAChC,cAAc;IACd,YAAY;EACd;AACF;;AAEA;EACE,gBAAgB;EAChB,aAAa;;EAEb,wBAAwB;;EAExB;IACE,uBAAuB;IACvB,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,YAAY;EACd;;EAEA;IACE,4BAA4B;IAC5B,aAAa;IACb,mBAAmB;IACnB,0BAA0B;IAC1B,SAAS;;IAET;MACE,iBAAiB;MACjB,iBAAiB;MACjB,kBAAkB;MAClB,8BAA8B;IAChC;EACF;AACF","sourcesContent":["/* put styles into a few different files */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#content {\n  width: 420px;\n  display: grid;\n  grid-template-columns: 120px 300px;\n  grid-template-rows: 120px minmax(300px, 1fr);\n\n  & button:hover {\n    text-decoration: underline;\n    cursor: pointer;\n    color: red;\n  }\n}\n\n.default-div {\n  grid-row: 1/2;\n  grid-column: 1/2;\n\n  display: grid;\n  grid-template-rows: 30px;\n  gap: 10px;\n\n  border: blue 2px solid;\n\n  & button {\n    font-size: 1.2rem;\n    font-weight: bold;\n\n    background-color: grey;\n    color: orange;\n    border: none;\n  }\n}\n\n.project-div {\n  grid-column: 1/2;\n  grid-row: 2/3;\n  margin-top: 10px;\n\n  display: grid;\n  grid-auto-rows: 30px;\n  gap: 10px;\n\n  border: green solid 2px;\n\n  & button {\n    font-size: 1.2rem;\n    font-weight: bold;\n\n    background-color: darkolivegreen;\n    color: skyblue;\n    border: none;\n  }\n}\n\n.todo-div {\n  grid-column: 2/3;\n  grid-row: 1/3;\n\n  border: purple solid 2px;\n\n  & > button {\n    background-color: green;\n    font-size: 1.2rem;\n    font-weight: bold;\n    color: white;\n    border: none;\n    padding: 5px;\n    margin: 10px;\n  }\n\n  & .display-tasks {\n    border-top: solid 5px orange;\n    display: grid;\n    grid-auto-rows: 1fr;\n    grid-template-columns: 1fr;\n    gap: 10px;\n\n    & .task-field {\n      padding: 5px 10px;\n      font-size: 1.3rem;\n      font-style: italic;\n      border-bottom: 2px solid black;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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

  remove(elem) {
    const specificProject = elem.titleOfProject;

    this.projects = this.projects.filter(
      (proj) => proj.titleOfProject !== specificProject
    );
    console.log(`Remove project: "${specificProject}" title`);

    return this.projects;
  },

  removeAssociatedTasks(proj, storage) {
    const relatedTasks = proj.titleOfProject;
    storage = storage.filter((task) => task.todoProject !== relatedTasks);

    console.log(`All tasks related to "${relatedTasks}" project were removed`);

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

  remove(elem) {
    const identifier = elem.id;

    this.todos = this.todos.filter((task) => task.id !== identifier);
    return this.todos;
  },

  // Display all details of a found element
  // Should I fetch an element by index?
  find(index) {
    const elem = this.todos[index];
    console.log(`Find task: "${elem.todoTitle}" title`);
    return elem;
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

  update(elem, property, value) {
    if (property.toLowerCase() === "title") {
      console.log(`Old title: ${elem.todoTitle}`);
      elem.todoTitle = value;
      console.log(`Updated title: ${value}`);
    } else if (property.toLowerCase() === "priority") {
      console.log(`Old title: ${elem.todoPriority}`);
      elem.todoPriority = value;
      console.log(`Updated priority: ${value}`);
    } else if (property.toLowerCase() === "project") {
      console.log(`Old title: ${elem.todoProject}`);
      elem.todoProject = value;
      console.log(`Updated property: ${value}`);
    }
    console.log(`Full details: "${elem.title}" title`);
  },
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
  // Default project
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
defaultBlock.addEventListener("click", displayTasksInProject);
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
    const titlePara = currentProject[i].todoTitle;
    const projectPara = currentProject[i].todoProject;
    const priorityPara = currentProject[i].todoPriority;

    const taskField = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", "task-field", "");
    (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.appendElement)(displayForTasks, taskField);

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

  const btn = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createElement)("button", "custom-project-button", title);

  (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.appendElement)(projectBlock, btn);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5QkFBeUIsOERBQWE7O0FBRXRDO0FBQ0E7O0FBRUEsa0JBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLDhEQUFhO0FBQ25DLElBQUksOERBQWE7O0FBRWpCLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw4REFBYSw4QkFBOEIsVUFBVTtBQUN0RTtBQUNBO0FBQ0EsaUJBQWlCLDhEQUFhLGtDQUFrQyxZQUFZO0FBQzVFO0FBQ0E7QUFDQSxpQkFBaUIsOERBQWE7QUFDOUI7QUFDQTtBQUNBLHlCQUF5QixhQUFhO0FBQ3RDO0FBQ0E7QUFDQSxNQUFNLDhEQUFhO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQix1REFBTztBQUM3QixtQkFBbUIsZ0VBQWdCOztBQUVuQyxjQUFjLDhEQUFhOztBQUUzQixFQUFFLDhEQUFhO0FBQ2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvcHJvamVjdE1hbmFnZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL3NlY3Rpb25XaXRoRG9tLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy90b2Rvc01hbmlwdWxhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBwdXQgc3R5bGVzIGludG8gYSBmZXcgZGlmZmVyZW50IGZpbGVzICovXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4jY29udGVudCB7XG4gIHdpZHRoOiA0MjBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMjBweCAzMDBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMjBweCBtaW5tYXgoMzAwcHgsIDFmcik7XG5cbiAgJiBidXR0b246aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogcmVkO1xuICB9XG59XG5cbi5kZWZhdWx0LWRpdiB7XG4gIGdyaWQtcm93OiAxLzI7XG4gIGdyaWQtY29sdW1uOiAxLzI7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMHB4O1xuICBnYXA6IDEwcHg7XG5cbiAgYm9yZGVyOiBibHVlIDJweCBzb2xpZDtcblxuICAmIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgIGNvbG9yOiBvcmFuZ2U7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG59XG5cbi5wcm9qZWN0LWRpdiB7XG4gIGdyaWQtY29sdW1uOiAxLzI7XG4gIGdyaWQtcm93OiAyLzM7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLXJvd3M6IDMwcHg7XG4gIGdhcDogMTBweDtcblxuICBib3JkZXI6IGdyZWVuIHNvbGlkIDJweDtcblxuICAmIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrb2xpdmVncmVlbjtcbiAgICBjb2xvcjogc2t5Ymx1ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbn1cblxuLnRvZG8tZGl2IHtcbiAgZ3JpZC1jb2x1bW46IDIvMztcbiAgZ3JpZC1yb3c6IDEvMztcblxuICBib3JkZXI6IHB1cnBsZSBzb2xpZCAycHg7XG5cbiAgJiA+IGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICB9XG5cbiAgJiAuZGlzcGxheS10YXNrcyB7XG4gICAgYm9yZGVyLXRvcDogc29saWQgNXB4IG9yYW5nZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXV0by1yb3dzOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiAxMHB4O1xuXG4gICAgJiAudGFzay1maWVsZCB7XG4gICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xuICAgIH1cbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwwQ0FBMEM7QUFDMUM7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLDRDQUE0Qzs7RUFFNUM7SUFDRSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjs7RUFFaEIsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixTQUFTOztFQUVULHNCQUFzQjs7RUFFdEI7SUFDRSxpQkFBaUI7SUFDakIsaUJBQWlCOztJQUVqQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixnQkFBZ0I7O0VBRWhCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsU0FBUzs7RUFFVCx1QkFBdUI7O0VBRXZCO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjs7SUFFakIsZ0NBQWdDO0lBQ2hDLGNBQWM7SUFDZCxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhOztFQUViLHdCQUF3Qjs7RUFFeEI7SUFDRSx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsU0FBUzs7SUFFVDtNQUNFLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLDhCQUE4QjtJQUNoQztFQUNGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogcHV0IHN0eWxlcyBpbnRvIGEgZmV3IGRpZmZlcmVudCBmaWxlcyAqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIHdpZHRoOiA0MjBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEyMHB4IDMwMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMjBweCBtaW5tYXgoMzAwcHgsIDFmcik7XFxuXFxuICAmIGJ1dHRvbjpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiByZWQ7XFxuICB9XFxufVxcblxcbi5kZWZhdWx0LWRpdiB7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHg7XFxuICBnYXA6IDEwcHg7XFxuXFxuICBib3JkZXI6IGJsdWUgMnB4IHNvbGlkO1xcblxcbiAgJiBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGNvbG9yOiBvcmFuZ2U7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gIH1cXG59XFxuXFxuLnByb2plY3QtZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMi8zO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tcm93czogMzBweDtcXG4gIGdhcDogMTBweDtcXG5cXG4gIGJvcmRlcjogZ3JlZW4gc29saWQgMnB4O1xcblxcbiAgJiBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtvbGl2ZWdyZWVuO1xcbiAgICBjb2xvcjogc2t5Ymx1ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgfVxcbn1cXG5cXG4udG9kby1kaXYge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAxLzM7XFxuXFxuICBib3JkZXI6IHB1cnBsZSBzb2xpZCAycHg7XFxuXFxuICAmID4gYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgfVxcblxcbiAgJiAuZGlzcGxheS10YXNrcyB7XFxuICAgIGJvcmRlci10b3A6IHNvbGlkIDVweCBvcmFuZ2U7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1yb3dzOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBnYXA6IDEwcHg7XFxuXFxuICAgICYgLnRhc2stZmllbGQge1xcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IHsgUHJvamVjdCwgcHJvamVjdEludGVyZmFjZSB9O1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IocHJvamVjdFRpdGxlKSB7XG4gICAgdGhpcy5wcm9qZWN0VGl0bGUgPSBwcm9qZWN0VGl0bGU7XG4gIH1cblxuICBnZXQgdGl0bGVPZlByb2plY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdFRpdGxlO1xuICB9XG5cbiAgc2V0IHRpdGxlT2ZQcm9qZWN0KHZhbHVlKSB7XG4gICAgdGhpcy5wcm9qZWN0VGl0bGUgPSB2YWx1ZTtcbiAgfVxufVxuXG5jb25zdCBwcm9qZWN0SW50ZXJmYWNlID0ge1xuICBwcm9qZWN0czogW10sXG5cbiAgYWRkKGVsZW0pIHtcbiAgICB0aGlzLnByb2plY3RzLnB1c2goZWxlbSk7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XG4gIH0sXG5cbiAgcmVtb3ZlKGVsZW0pIHtcbiAgICBjb25zdCBzcGVjaWZpY1Byb2plY3QgPSBlbGVtLnRpdGxlT2ZQcm9qZWN0O1xuXG4gICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMuZmlsdGVyKFxuICAgICAgKHByb2opID0+IHByb2oudGl0bGVPZlByb2plY3QgIT09IHNwZWNpZmljUHJvamVjdFxuICAgICk7XG4gICAgY29uc29sZS5sb2coYFJlbW92ZSBwcm9qZWN0OiBcIiR7c3BlY2lmaWNQcm9qZWN0fVwiIHRpdGxlYCk7XG5cbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcbiAgfSxcblxuICByZW1vdmVBc3NvY2lhdGVkVGFza3MocHJvaiwgc3RvcmFnZSkge1xuICAgIGNvbnN0IHJlbGF0ZWRUYXNrcyA9IHByb2oudGl0bGVPZlByb2plY3Q7XG4gICAgc3RvcmFnZSA9IHN0b3JhZ2UuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnRvZG9Qcm9qZWN0ICE9PSByZWxhdGVkVGFza3MpO1xuXG4gICAgY29uc29sZS5sb2coYEFsbCB0YXNrcyByZWxhdGVkIHRvIFwiJHtyZWxhdGVkVGFza3N9XCIgcHJvamVjdCB3ZXJlIHJlbW92ZWRgKTtcblxuICAgIHJldHVybiBzdG9yYWdlO1xuICB9LFxufTtcbiIsImV4cG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGFwcGVuZEVsZW1lbnQsIHByZXBlbmRFbGVtZW50IH07XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQobmFtZSwgY2xhc3NOYW1lLCB0ZXh0KSB7XG4gIGxldCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKTtcbiAgZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIGVsZW0udGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gIHJldHVybiBlbGVtO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRFbGVtZW50KHBhcmVudCwgY2hpbGQpIHtcbiAgcGFyZW50LmFwcGVuZChjaGlsZCk7XG59XG5cbmZ1bmN0aW9uIHByZXBlbmRFbGVtZW50KHBhcmVudCwgY2hpbGQpIHtcbiAgcGFyZW50LnByZXBlbmQoY2hpbGQpO1xufVxuXG4vKlxuU2hvdyBhbGwgdGFza3MgZm9yIGEgcGFydGljdWxhciBwcm9qZWN0XG5FdmVudCBkZWxlZ2F0aW9uIG9uIHByb2plY3REaXZcblxubGV0IGN1cnJlbnRQcm9qZWN0O1xucHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY3VycmVudFByb2plY3QgPSBlLnRhcmdldC5jbGFzc05hbWU7XG4gIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0KTtcbiovXG4iLCJleHBvcnQgeyBUb2RvLCB0YXNrSW50ZXJmYWNlIH07XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdE1hbmFnZW1lbnRcIjtcblxuY2xhc3MgVG9kbyBleHRlbmRzIFByb2plY3Qge1xuICAvLyBDcmVhdGVzIGEgdG9kb1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0VGl0bGUsIHRpdGxlLCBwcmlvcml0eSkge1xuICAgIC8vIEJhc2UgY2xhc3MgaXMgUHJvamVjdCB0aGF0IGhhcyBhIHByb2plY3QgcHJvcGVydHkgb24gaXRzIGNvbnN0cnVjdG9yXG4gICAgc3VwZXIocHJvamVjdFRpdGxlKTtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuaWQgPSBzZWxmLmNyeXB0by5yYW5kb21VVUlEKCk7XG4gIH1cblxuICAvLyBVcGRhdGVzIGEgdG9kb1xuICBnZXQgdG9kb1Byb2plY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdFRpdGxlO1xuICB9XG4gIHNldCB0b2RvUHJvamVjdCh2YWx1ZSkge1xuICAgIHRoaXMucHJvamVjdFRpdGxlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgdG9kb1RpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICB9XG4gIHNldCB0b2RvVGl0bGUodmFsdWUpIHtcbiAgICB0aGlzLnRpdGxlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgdG9kb1ByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xuICB9XG4gIHNldCB0b2RvUHJpb3JpdHkodmFsdWUpIHtcbiAgICB0aGlzLnByaW9yaXR5ID0gdmFsdWU7XG4gIH1cbn1cblxuLy8gSW50ZXJmYWNlIGZvciB0b2RvcyAtIHdoYXQgZnVuY3Rpb25hbGl0aWVzIHRoZXkgaGF2ZVxuY29uc3QgdGFza0ludGVyZmFjZSA9IHtcbiAgLy8gdG9kb3MgYXJyYXkgd2lsbCBtb2RpZnkgbWFpblN0b3JhZ2UgYXJyYXlcbiAgdG9kb3M6IFtdLFxuICBhZGQoZWxlbSkge1xuICAgIHRoaXMudG9kb3MucHVzaChlbGVtKTtcbiAgICByZXR1cm4gdGhpcy50b2RvcztcbiAgfSxcblxuICByZW1vdmUoZWxlbSkge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSBlbGVtLmlkO1xuXG4gICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkICE9PSBpZGVudGlmaWVyKTtcbiAgICByZXR1cm4gdGhpcy50b2RvcztcbiAgfSxcblxuICAvLyBEaXNwbGF5IGFsbCBkZXRhaWxzIG9mIGEgZm91bmQgZWxlbWVudFxuICAvLyBTaG91bGQgSSBmZXRjaCBhbiBlbGVtZW50IGJ5IGluZGV4P1xuICBmaW5kKGluZGV4KSB7XG4gICAgY29uc3QgZWxlbSA9IHRoaXMudG9kb3NbaW5kZXhdO1xuICAgIGNvbnNvbGUubG9nKGBGaW5kIHRhc2s6IFwiJHtlbGVtLnRvZG9UaXRsZX1cIiB0aXRsZWApO1xuICAgIHJldHVybiBlbGVtO1xuICB9LFxuXG4gIGZpbmRBbGwocHJvaikge1xuICAgIGNvbnN0IGFyciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMudG9kb3NbaV0ucHJvamVjdFRpdGxlLnRvTG93ZXJDYXNlKCkgPT09IHByb2oudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBhcnIucHVzaCh0aGlzLnRvZG9zW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfSxcblxuICB1cGRhdGUoZWxlbSwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgaWYgKHByb3BlcnR5LnRvTG93ZXJDYXNlKCkgPT09IFwidGl0bGVcIikge1xuICAgICAgY29uc29sZS5sb2coYE9sZCB0aXRsZTogJHtlbGVtLnRvZG9UaXRsZX1gKTtcbiAgICAgIGVsZW0udG9kb1RpdGxlID0gdmFsdWU7XG4gICAgICBjb25zb2xlLmxvZyhgVXBkYXRlZCB0aXRsZTogJHt2YWx1ZX1gKTtcbiAgICB9IGVsc2UgaWYgKHByb3BlcnR5LnRvTG93ZXJDYXNlKCkgPT09IFwicHJpb3JpdHlcIikge1xuICAgICAgY29uc29sZS5sb2coYE9sZCB0aXRsZTogJHtlbGVtLnRvZG9Qcmlvcml0eX1gKTtcbiAgICAgIGVsZW0udG9kb1ByaW9yaXR5ID0gdmFsdWU7XG4gICAgICBjb25zb2xlLmxvZyhgVXBkYXRlZCBwcmlvcml0eTogJHt2YWx1ZX1gKTtcbiAgICB9IGVsc2UgaWYgKHByb3BlcnR5LnRvTG93ZXJDYXNlKCkgPT09IFwicHJvamVjdFwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhgT2xkIHRpdGxlOiAke2VsZW0udG9kb1Byb2plY3R9YCk7XG4gICAgICBlbGVtLnRvZG9Qcm9qZWN0ID0gdmFsdWU7XG4gICAgICBjb25zb2xlLmxvZyhgVXBkYXRlZCBwcm9wZXJ0eTogJHt2YWx1ZX1gKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYEZ1bGwgZGV0YWlsczogXCIke2VsZW0udGl0bGV9XCIgdGl0bGVgKTtcbiAgfSxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBUb2RvLCB0YXNrSW50ZXJmYWNlIH0gZnJvbSBcIi4vdG9kb3NNYW5pcHVsYXRpb25zXCI7XG5pbXBvcnQgeyBQcm9qZWN0LCBwcm9qZWN0SW50ZXJmYWNlIH0gZnJvbSBcIi4vcHJvamVjdE1hbmFnZW1lbnRcIjtcblxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgYXBwZW5kRWxlbWVudCwgcHJlcGVuZEVsZW1lbnQgfSBmcm9tIFwiLi9zZWN0aW9uV2l0aERvbVwiO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5cbi8vIENyZWF0ZSB0aGUgbWFpbiBsYXlvdXRcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5jb25zdCBkZWZhdWx0QmxvY2sgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZGVmYXVsdC1kaXZcIiwgXCJcIik7XG5jb25zdCBwcm9qZWN0QmxvY2sgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdC1kaXZcIiwgXCJcIik7XG5jb25zdCB0b2RvQmxvY2sgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwidG9kby1kaXZcIiwgXCJcIik7XG5cbmFwcGVuZEVsZW1lbnQoY29udGVudCwgZGVmYXVsdEJsb2NrKTtcbmFwcGVuZEVsZW1lbnQoY29udGVudCwgcHJvamVjdEJsb2NrKTtcbmFwcGVuZEVsZW1lbnQoY29udGVudCwgdG9kb0Jsb2NrKTtcblxuLy8gRGVmYXVsdCBibG9ja1xuY29uc3QgaW5ib3hCdG4gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiYnRuLWRlZmF1bHRcIiwgXCJpbmJveFwiKTtcbmNvbnN0IHRvZGF5ID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcImJ0bi10b2RheVwiLCBcInRvZGF5XCIpO1xuY29uc3QgdXBjb21pbmcgPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiYnRuLXVwY29taW5nXCIsIFwidXBjb21pbmdcIik7XG5cbmFwcGVuZEVsZW1lbnQoZGVmYXVsdEJsb2NrLCBpbmJveEJ0bik7XG5hcHBlbmRFbGVtZW50KGRlZmF1bHRCbG9jaywgdG9kYXkpO1xuYXBwZW5kRWxlbWVudChkZWZhdWx0QmxvY2ssIHVwY29taW5nKTtcblxuLy8gRm9yIG5vdyB0byBhbGxvdyB0YXNrL3Byb2plY3QgY3JlYXRpb25cbmNvbnN0IGNyZWF0ZVRhc2tzQnRuID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcImNyZWF0ZS10YXNrc1wiLCBcIkNyZWF0ZSB0YXNrXCIpO1xuY29uc3QgY3JlYXRlUHJvamVjdHNCdG4gPSBjcmVhdGVFbGVtZW50KFxuICBcImJ1dHRvblwiLFxuICBcImNyZWF0ZS1wcm9qZWN0c1wiLFxuICBcIkNyZWF0ZSBwcm9qZWN0XCJcbik7XG5jb25zdCBkaXNwbGF5Rm9yVGFza3MgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZGlzcGxheS10YXNrc1wiLCBcIlwiKTtcblxuYXBwZW5kRWxlbWVudCh0b2RvQmxvY2ssIGNyZWF0ZVRhc2tzQnRuKTtcbmFwcGVuZEVsZW1lbnQodG9kb0Jsb2NrLCBjcmVhdGVQcm9qZWN0c0J0bik7XG5hcHBlbmRFbGVtZW50KHRvZG9CbG9jaywgZGlzcGxheUZvclRhc2tzKTtcblxuLy8gTWFpbiBhcnJheSB3aGVyZSB0YXNrcyBhcmUgc3RvcmVkXG5sZXQgbWFpblN0b3JhZ2UgPSBbXTtcbmNvbnNvbGUubG9nKFwiTWFpbiBzdG9yYWdlOlwiKTtcbmNvbnNvbGUubG9nKG1haW5TdG9yYWdlKTtcblxuLy8gQ3JlYXRlIGEgdG9kb1xuY3JlYXRlVGFza3NCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVRvZG8pO1xuZnVuY3Rpb24gY3JlYXRlVG9kbygpIHtcbiAgbGV0IHByb2plY3QgPSBwcm9tcHQoXCJQcm9qZWN0P1wiLCBcIlwiKTtcbiAgLy8gRGVmYXVsdCBwcm9qZWN0XG4gIGlmIChwcm9qZWN0ID09PSBcIlwiKSB7XG4gICAgcHJvamVjdCA9IFwiaW5ib3hcIjtcbiAgfVxuICBsZXQgdGl0bGUgPSBwcm9tcHQoXCJUaXRsZVwiLCBcIlwiKTtcbiAgbGV0IHByaW9yaXR5ID0gcHJvbXB0KFwiUHJpb3JpdHlcIiwgXCJcIik7XG5cbiAgY29uc3QgdGFzayA9IG5ldyBUb2RvKHByb2plY3QsIHRpdGxlLCBwcmlvcml0eSk7XG4gIG1haW5TdG9yYWdlID0gdGFza0ludGVyZmFjZS5hZGQodGFzayk7XG4gIGNvbnNvbGUubG9nKG1haW5TdG9yYWdlKTtcbn1cblxuLy8gRGlzcGxheSBhbGwgdG9kb3MgaW4gYSBwcm9qZWN0XG5kZWZhdWx0QmxvY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlUYXNrc0luUHJvamVjdCk7XG5wcm9qZWN0QmxvY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlUYXNrc0luUHJvamVjdCk7XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrc0luUHJvamVjdChlKSB7XG4gIC8vIENsaWNrIG9jY3VycyBvbiB0aGUgaW5zaWRlIG9mIGEgYnV0dG9uXG4gIGNvbnN0IGJ0biA9IGUudGFyZ2V0LmNsb3Nlc3QoXCJidXR0b25cIik7XG4gIGlmICghYnRuKSByZXR1cm47XG5cbiAgY29uc3QgcHJvamVjdE5hbWUgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgY29uc29sZS5sb2cocHJvamVjdE5hbWUpO1xuXG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gdGFza0ludGVyZmFjZS5maW5kQWxsKHByb2plY3ROYW1lKTtcblxuICAvLyBDbGVhciB0aGUgdG9kbyBibG9jayBub3QgdG8gZHVwbGljYXRlIGFwcGVuZGVkIGVsZW1lbnRzXG4gIGRpc3BsYXlGb3JUYXNrcy5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRQcm9qZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdGl0bGVQYXJhID0gY3VycmVudFByb2plY3RbaV0udG9kb1RpdGxlO1xuICAgIGNvbnN0IHByb2plY3RQYXJhID0gY3VycmVudFByb2plY3RbaV0udG9kb1Byb2plY3Q7XG4gICAgY29uc3QgcHJpb3JpdHlQYXJhID0gY3VycmVudFByb2plY3RbaV0udG9kb1ByaW9yaXR5O1xuXG4gICAgY29uc3QgdGFza0ZpZWxkID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInRhc2stZmllbGRcIiwgXCJcIik7XG4gICAgYXBwZW5kRWxlbWVudChkaXNwbGF5Rm9yVGFza3MsIHRhc2tGaWVsZCk7XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xuICAgICAgbGV0IHBhcmE7XG4gICAgICBzd2l0Y2ggKGopIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHBhcmEgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInRhc2stdGl0bGVcIiwgYFRpdGxlOiAke3RpdGxlUGFyYX1gKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHBhcmEgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInRhc2stcHJvamVjdFwiLCBgUHJvamVjdDogJHtwcm9qZWN0UGFyYX1gKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHBhcmEgPSBjcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICBcInRhc2stcHJpb3JpdHlcIixcbiAgICAgICAgICAgIGBQcmlvcml0eTogJHtwcmlvcml0eVBhcmF9YFxuICAgICAgICAgICk7XG4gICAgICB9XG4gICAgICBhcHBlbmRFbGVtZW50KHRhc2tGaWVsZCwgcGFyYSk7XG4gICAgfVxuICB9XG59XG5cbi8vIENyZWF0ZSBhIHByb2plY3Rcbi8vIFN0b3JlIHByb2plY3RzXG5sZXQgcHJvamVjdFN0b3JhZ2UgPSBbXTtcbmNvbnNvbGUubG9nKFwiUHJvamVjdCBzdG9yYWdlOlwiKTtcbmNvbnNvbGUubG9nKHByb2plY3RTdG9yYWdlKTtcblxuY3JlYXRlUHJvamVjdHNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVByb2plY3QpO1xuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHtcbiAgY29uc3QgdGl0bGUgPSBwcm9tcHQoXCJQcm9qZWN0IG5hbWU/XCIsIFwiXCIpO1xuICBpZiAodGl0bGUgPT09IFwiXCIgfHwgIXRpdGxlKSByZXR1cm47XG5cbiAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlKTtcbiAgcHJvamVjdFN0b3JhZ2UgPSBwcm9qZWN0SW50ZXJmYWNlLmFkZChwcm9qZWN0KTtcblxuICBjb25zdCBidG4gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiY3VzdG9tLXByb2plY3QtYnV0dG9uXCIsIHRpdGxlKTtcblxuICBhcHBlbmRFbGVtZW50KHByb2plY3RCbG9jaywgYnRuKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==