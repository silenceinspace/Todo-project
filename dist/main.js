/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/inbox-block.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/inbox-block.css ***!
  \*******************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.inbox-div {
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
`, "",{"version":3,"sources":["webpack://./src/inbox-block.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,gBAAgB;;EAEhB,aAAa;EACb,wBAAwB;EACxB,SAAS;;EAET,sBAAsB;;EAEtB;IACE,iBAAiB;IACjB,iBAAiB;;IAEjB,uBAAuB;IACvB,aAAa;IACb,YAAY;EACd;AACF","sourcesContent":[".inbox-div {\n  grid-row: 1/2;\n  grid-column: 1/2;\n\n  display: grid;\n  grid-template-rows: 30px;\n  gap: 10px;\n\n  border: blue 2px solid;\n\n  & button {\n    font-size: 1.2rem;\n    font-weight: bold;\n\n    background-color: white;\n    color: orange;\n    border: none;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `* {
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
`, "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kCAAkC;EAClC,4CAA4C;EAC5C,0BAA0B;;EAE1B;IACE,0BAA0B;IAC1B,eAAe;IACf,UAAU;EACZ;;EAEA;IACE,uBAAuB;IACvB,WAAW;EACb;;EAEA;IACE,eAAe;IACf,qBAAqB;EACvB;AACF","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#content {\n  width: 420px;\n  display: grid;\n  grid-template-columns: 120px 300px;\n  grid-template-rows: 120px minmax(300px, 1fr);\n  background-color: darkcyan;\n\n  & button:hover {\n    text-decoration: underline;\n    cursor: pointer;\n    color: red;\n  }\n\n  & button:disabled {\n    background-color: black;\n    color: grey;\n  }\n\n  & button:disabled:hover {\n    cursor: default;\n    text-decoration: none;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/project-block.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/project-block.css ***!
  \*********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.project-div {
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
`, "",{"version":3,"sources":["webpack://./src/project-block.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,aAAa;EACb,gBAAgB;;EAEhB,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,SAAS;;EAET,uBAAuB;;EAEvB;IACE,aAAa;;IAEb;MACE,iBAAiB;MACjB,iBAAiB;MACjB,kBAAkB;MAClB,YAAY;MACZ,YAAY;;MAEZ,uBAAuB;MACvB,cAAc;MACd,YAAY;IACd;;IAEA;MACE,YAAY;MACZ,sBAAsB;MACtB,iBAAiB;MACjB,iBAAiB;;MAEjB;QACE,eAAe;QACf,WAAW;MACb;IACF;EACF;AACF","sourcesContent":[".project-div {\n  grid-column: 1/2;\n  grid-row: 2/3;\n  margin-top: 10px;\n\n  width: 120px;\n  display: grid;\n  grid-auto-rows: 30px;\n  gap: 10px;\n\n  border: green solid 2px;\n\n  & div {\n    display: flex;\n\n    & button {\n      font-size: 1.2rem;\n      font-weight: bold;\n      text-align: center;\n      width: 100px;\n      height: 30px;\n\n      background-color: coral;\n      color: skyblue;\n      border: none;\n    }\n\n    & span {\n      color: white;\n      background-color: grey;\n      font-size: 1.4rem;\n      font-weight: bold;\n\n      &:hover {\n        cursor: pointer;\n        color: blue;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/todo-block.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/todo-block.css ***!
  \******************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.todo-div {
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
          cursor: pointer;

          position: absolute;
          bottom: -7px;
          left: 0px;
          font-size: 1.7rem;
        }
      }
    }
  }
}
`, "",{"version":3,"sources":["webpack://./src/todo-block.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,aAAa;;EAEb,wBAAwB;;EAExB;IACE,uBAAuB;IACvB,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,YAAY;EACd;;EAEA;IACE,cAAc;IACd,iBAAiB;EACnB;;EAEA;IACE,4BAA4B;IAC5B,aAAa;IACb,mBAAmB;IACnB,0BAA0B;IAC1B,SAAS;;IAET;MACE,0BAA0B;MAC1B,iBAAiB;MACjB,kBAAkB;MAClB,8BAA8B;MAC9B,kBAAkB;;MAElB;QACE,gBAAgB;QAChB,kBAAkB;QAClB,SAAS;QACT,WAAW;;QAEX,YAAY;QACZ,iBAAiB;QACjB,iBAAiB;QACjB,2BAA2B;QAC3B,YAAY;QACZ,kBAAkB;MACpB;;MAEA;QACE,kBAAkB;QAClB,QAAQ;QACR,SAAS;QACT,YAAY;QACZ,WAAW;;QAEX,gBAAgB;QAChB,mBAAmB;QACnB,sBAAsB;QACtB,uBAAuB;;QAEvB;UACE,YAAY;UACZ,YAAY;UACZ,eAAe;;UAEf,kBAAkB;UAClB,YAAY;UACZ,SAAS;UACT,iBAAiB;QACnB;MACF;IACF;EACF;AACF","sourcesContent":[".todo-div {\n  grid-column: 2/3;\n  grid-row: 1/3;\n\n  border: purple solid 2px;\n\n  & > button {\n    background-color: coral;\n    font-size: 1.2rem;\n    font-weight: bold;\n    color: white;\n    border: none;\n    padding: 5px;\n    margin: 10px;\n  }\n\n  & .create-task-directly {\n    display: block;\n    margin: 10px auto;\n  }\n\n  & .display-tasks {\n    border-top: solid 5px orange;\n    display: grid;\n    grid-auto-rows: 1fr;\n    grid-template-columns: 1fr;\n    gap: 10px;\n\n    & .task-div {\n      padding: 5px 10px 5px 30px;\n      font-size: 1.3rem;\n      font-style: italic;\n      border-bottom: 2px solid black;\n      position: relative;\n\n      & .remove-task {\n        padding: 5px 8px;\n        position: absolute;\n        top: 10px;\n        right: 10px;\n\n        color: white;\n        font-size: 1.2rem;\n        font-weight: bold;\n        background-color: goldenrod;\n        border: none;\n        border-radius: 5px;\n      }\n\n      & .check-box {\n        position: absolute;\n        top: 6px;\n        left: 1px;\n        height: 25px;\n        width: 25px;\n\n        appearance: none;\n        border-radius: 15px;\n        background-color: grey;\n        border: 3px solid black;\n\n        &:hover::before {\n          content: \"✔\";\n          color: white;\n          cursor: pointer;\n\n          position: absolute;\n          bottom: -7px;\n          left: 0px;\n          font-size: 1.7rem;\n        }\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/inbox-block.css":
/*!*****************************!*\
  !*** ./src/inbox-block.css ***!
  \*****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_inbox_block_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./inbox-block.css */ "./node_modules/css-loader/dist/cjs.js!./src/inbox-block.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_inbox_block_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_inbox_block_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_inbox_block_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_inbox_block_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/project-block.css":
/*!*******************************!*\
  !*** ./src/project-block.css ***!
  \*******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_project_block_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./project-block.css */ "./node_modules/css-loader/dist/cjs.js!./src/project-block.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_project_block_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_project_block_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_project_block_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_project_block_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/todo-block.css":
/*!****************************!*\
  !*** ./src/todo-block.css ***!
  \****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_todo_block_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./todo-block.css */ "./node_modules/css-loader/dist/cjs.js!./src/todo-block.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_todo_block_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_todo_block_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_todo_block_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_todo_block_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony export */   createBlocksToRepresentTasks: () => (/* binding */ createBlocksToRepresentTasks),
/* harmony export */   createEventListener: () => (/* binding */ createEventListener),
/* harmony export */   createProjectButton: () => (/* binding */ createProjectButton),
/* harmony export */   createTaskButton: () => (/* binding */ createTaskButton),
/* harmony export */   createTaskInsideProject: () => (/* binding */ createTaskInsideProject),
/* harmony export */   createTextFields: () => (/* binding */ createTextFields),
/* harmony export */   displayForTasks: () => (/* binding */ displayForTasks),
/* harmony export */   displayNewProject: () => (/* binding */ displayNewProject),
/* harmony export */   findChosenProject: () => (/* binding */ findChosenProject),
/* harmony export */   findClick: () => (/* binding */ findClick),
/* harmony export */   findClosestDataAttibute: () => (/* binding */ findClosestDataAttibute),
/* harmony export */   getIdOfSpecificTask: () => (/* binding */ getIdOfSpecificTask),
/* harmony export */   grabTitleOfActiveProject: () => (/* binding */ grabTitleOfActiveProject),
/* harmony export */   highlightProject: () => (/* binding */ highlightProject),
/* harmony export */   inbox: () => (/* binding */ inbox),
/* harmony export */   projectBlock: () => (/* binding */ projectBlock),
/* harmony export */   removePreviousTasksFromDOM: () => (/* binding */ removePreviousTasksFromDOM),
/* harmony export */   setColorOnChecklist: () => (/* binding */ setColorOnChecklist)
/* harmony export */ });
// Export functions

// Export variables


function createElement(name, className, text) {
  let elem = document.createElement(name);
  elem.classList.add(className);
  elem.textContent = text;

  return elem;
}

function appendElement(parent, child) {
  parent.append(child);
}

function findClick(e, value) {
  const elem = e.target.closest(value);
  return elem;
}
function findChosenProject() {
  const title = document.querySelector("button[disabled]").textContent;
  return title;
}

function grabTitleOfActiveProject(e) {
  const title = e.target.textContent;
  return title;
}

function createEventListener(forElem, type, func) {
  forElem.addEventListener(type, func);
}

function removePreviousTasksFromDOM() {
  displayForTasks.replaceChildren();
}

function createBlocksToRepresentTasks(project) {
  for (let i = 0; i < project.length; i++) {
    const taskDiv = createElement("div", "task-div", "");
    taskDiv.setAttribute("data-id", project[i].id);
    const removeButton = createElement("button", "remove-task", "X");
    const checkList = createElement("input", "check-box", "");
    checkList.setAttribute("type", "checkbox");
    const titlePara = project[i].todoTitle;
    const projectPara = project[i].todoProject;
    const priorityPara = project[i].todoPriority;
    const dueDatePara = project[i].todoDueDate;

    appendElement(displayForTasks, taskDiv);
    appendElement(taskDiv, removeButton);
    appendElement(taskDiv, checkList);

    setColorOnChecklist(priorityPara, checkList);

    createTextFields(
      titlePara,
      projectPara,
      priorityPara,
      dueDatePara,
      taskDiv
    );
  }
}

function createTextFields(title, project, dueDate, priority, div) {
  const textForTitle = createElement("p", "task-title", `Title: ${title}`);
  const textForProject = createElement(
    "p",
    "task-project",
    `Project: ${project}`
  );
  const textForDueDate = createElement(
    "p",
    "task-dueDate",
    `Due by: ${dueDate}`
  );
  const textForPriority = createElement(
    "p",
    "task-priority",
    `Priority: ${priority}`
  );

  appendElement(div, textForTitle);
  appendElement(div, textForProject);
  appendElement(div, textForDueDate);
  appendElement(div, textForPriority);
}

function setColorOnChecklist(priorityLevel, element) {
  if (priorityLevel === "1") {
    element.style.border = "3px solid red";
    element.style.backgroundColor = "rgb(214, 111, 111)";
  } else if (priorityLevel === "2") {
    element.style.border = "3px solid yellow";
    element.style.backgroundColor = "rgb(173, 173, 79)";
  } else if (priorityLevel === "3") {
    element.style.border = "3px solid blue";
    element.style.backgroundColor = "rgb(117, 117, 199)";
  }
}

function highlightProject(value = "inbox") {
  const disabledButtons = document.querySelectorAll("button.project");
  disabledButtons.forEach((btn) => {
    btn.disabled = false;
    if (btn.textContent === value) {
      btn.disabled = true;
    }
  });
}

function findClosestDataAttibute(e) {
  const task = e.target.closest("[data-id]");
  return task;
}

function getIdOfSpecificTask(task) {
  const id = task.getAttribute("data-id");
  return id;
}

function displayNewProject(value) {
  const div = createElement("div", "project-title-div", "");
  const btn = createElement("button", "custom-project-btn", value);
  btn.classList.add("project");
  const span = createElement("span", "remove-project-btn", "X");
  appendElement(div, btn);
  appendElement(div, span);
  appendElement(projectBlock, div);
}

// Main layout
const content = document.querySelector("#content");
const inboxBlock = createElement("div", "inbox-div", "");
const projectBlock = createElement("div", "project-div", "");
const todoBlock = createElement("div", "todo-div", "");
appendElement(content, inboxBlock);
appendElement(content, projectBlock);
appendElement(content, todoBlock);

// Default block
const inbox = createElement("button", "button-inbox", "inbox");
inbox.disabled = true;
inbox.classList.add("project");
const today = createElement("button", "button-today", "today");
const upcoming = createElement("button", "button-upcoming", "upcoming");
appendElement(inboxBlock, inbox);
appendElement(inboxBlock, today);
appendElement(inboxBlock, upcoming);

// For now to allow task/project creation
const createTaskButton = createElement("button", "create-tasks", "Create task");
const createProjectButton = createElement(
  "button",
  "create-projects",
  "Create project"
);
const displayForTasks = createElement("div", "display-tasks", "");
appendElement(todoBlock, createTaskButton);
appendElement(todoBlock, createProjectButton);
appendElement(todoBlock, displayForTasks);

// Create tasks locally in a project
const createTaskInsideProject = createElement(
  "button",
  "create-task-directly",
  "+"
);
appendElement(todoBlock, createTaskInsideProject);


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
  constructor(projectTitle, title, dueDate, priority) {
    // Base class is Project that has a project property on its constructor
    super(projectTitle);
    this.title = title;
    this.dueDate = dueDate;
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

  get todoDueDate() {
    return this.dueDate;
  }

  set todoDueDate(value) {
    this.dueDate = value;
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
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _inbox_block_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inbox-block.css */ "./src/inbox-block.css");
/* harmony import */ var _project_block_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-block.css */ "./src/project-block.css");
/* harmony import */ var _todo_block_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo-block.css */ "./src/todo-block.css");


// Import methods

// Import variables

// Similar sections with styles are grouped different files





// Section containing program logic
let mainStorage = [];
console.log("Main storage:");
console.log(mainStorage);
let projectStorage = [];
console.log("Project storage:");
console.log(projectStorage);

// Get input from a user
function getInputForTaskProject() {
  let project;
  if (checkForCustomProjects()) {
    project = "inbox";
  } else {
    project = prompt("Project?", "");
  }
  return project;
}

// Assign all tasks to a default project if true
function checkForCustomProjects() {
  if (projectStorage.length === 0) {
    alert(
      "You have not created any project yet. Your tasks are put into inbox"
    );
    return true;
  }
}

function getInputForTaskTitle() {
  const title = prompt("Title", "");
  return title;
}

function getInputForTaskDueDate() {
  const dueDate = prompt("Due date?", "");
  return dueDate;
}

function getInputForTaskPriority() {
  const priority = prompt("Priority", "");
  return priority;
}

// 1) Create a todo directly in a task
// 2) Create a todo globally - project name is required
(0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createEventListener)(_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createTaskInsideProject, "click", createTodo);
(0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createEventListener)(_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createTaskButton, "click", createTodo);
function createTodo(e) {
  let project;
  const createdDirectlyOnProject = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.findClick)(e, ".create-task-directly");
  if (createdDirectlyOnProject) {
    const activeProject = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.findChosenProject)();
    project = activeProject;
  } else {
    project = getInputForTaskProject();
  }

  let title = getInputForTaskTitle();
  let dueDate = getInputForTaskDueDate();
  let priority = getInputForTaskPriority();
  const task = new _todosManipulations__WEBPACK_IMPORTED_MODULE_0__.Todo(project, title, dueDate, priority);
  mainStorage = _todosManipulations__WEBPACK_IMPORTED_MODULE_0__.taskInterface.add(task);
  console.log(mainStorage);
  updateTodoDisplay();
}

// Display all todos in a project
(0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createEventListener)(_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.inbox, "click", displayTasksInThisProject);
(0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createEventListener)(_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.projectBlock, "click", displayTasksInThisProject);
function generateListOfTasks(project) {
  const currentProject = _todosManipulations__WEBPACK_IMPORTED_MODULE_0__.taskInterface.findAll(project);
  // Clear the todo block not to duplicate appended elements
  (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.removePreviousTasksFromDOM)();
  (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createBlocksToRepresentTasks)(currentProject);
}

function displayTasksInThisProject(e) {
  // Click occurs on the inside of a button
  const btn = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.findClick)(e, "button");
  if (!btn) return;

  const title = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.grabTitleOfActiveProject)(e);
  (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.highlightProject)(title);
  generateListOfTasks(title);
}

function updateTodoDisplay() {
  const projectTitle = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.findChosenProject)();
  generateListOfTasks(projectTitle);
}

// Remove a task
(0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createEventListener)(_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.displayForTasks, "click", removeTask);
function removeTask(e) {
  const btn = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.findClick)(e, "button");
  if (!btn) return;

  const task = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.findClosestDataAttibute)(e);
  const id = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.getIdOfSpecificTask)(task);

  task.remove();
  mainStorage = _todosManipulations__WEBPACK_IMPORTED_MODULE_0__.taskInterface.remove(id);
  console.log(mainStorage);
}

// Complete a task
function checkTaskStatus(e) {
  const task = e.target.checked;
  return task;
}

function selectAllParagraphs(e) {
  const parargraphs = e.target.parentNode.querySelectorAll("p");
  return parargraphs;
}

function applyStrikeThroughEffect(e) {
  const paragraphs = selectAllParagraphs(e);
  paragraphs.forEach((para) => (para.style.textDecoration = "line-through"));
}

function slowDownTaskRemoval(taskPara, idPara) {
  setTimeout(() => {
    taskPara.remove();
    mainStorage = _todosManipulations__WEBPACK_IMPORTED_MODULE_0__.taskInterface.remove(idPara);
    console.log(mainStorage);
  }, 300);
}

function preventUncheckingTask(e) {
  e.target.disabled = true;
}

(0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createEventListener)(_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.displayForTasks, "change", completeTask);
function completeTask(e) {
  const taskStatus = checkTaskStatus(e);
  if (taskStatus) {
    applyStrikeThroughEffect(e);
    preventUncheckingTask(e);

    const task = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.findClosestDataAttibute)(e);
    const id = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.getIdOfSpecificTask)(task);
    slowDownTaskRemoval(task, id);
  }
}

// Create a project
function getInputForNewProject() {
  const title = prompt("Project name?", "");
  return title;
}

(0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createEventListener)(_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createProjectButton, "click", createProject);
function createProject() {
  const title = getInputForNewProject();
  const project = new _projectManagement__WEBPACK_IMPORTED_MODULE_1__.Project(title);
  projectStorage = _projectManagement__WEBPACK_IMPORTED_MODULE_1__.projectInterface.add(project);
  (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.displayNewProject)(title);
  (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.highlightProject)(title);
  updateTodoDisplay();
}

// Remove a project
function getSiblingElementText(element) {
  const title = element.previousElementSibling.textContent;
  return title;
}

function confirmChoice() {
  const warning = confirm("remove this project with all tasks related to it?");
  return warning;
}
// Clear array in an object from which I take all info and assign to mainStorage
function changeArraysInMethodObjects(proj) {
  _todosManipulations__WEBPACK_IMPORTED_MODULE_0__.taskInterface.todos = _projectManagement__WEBPACK_IMPORTED_MODULE_1__.projectInterface.removeAssociatedTasks(
    proj,
    _todosManipulations__WEBPACK_IMPORTED_MODULE_0__.taskInterface.todos
  );
  mainStorage = _todosManipulations__WEBPACK_IMPORTED_MODULE_0__.taskInterface.todos;
}

function removeProjectBtn(element) {
  element.parentNode.remove();
}

(0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.createEventListener)(_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.projectBlock, "click", removeProject);
function removeProject(e) {
  const span = (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.findClick)(e, "span");
  if (!span) return;

  const project = getSiblingElementText(span);
  const answer = confirmChoice();
  if (answer) {
    changeArraysInMethodObjects(project);
    projectStorage = _projectManagement__WEBPACK_IMPORTED_MODULE_1__.projectInterface.remove(project);
    removeProjectBtn(span);
    // While removing an element from DOM and needing to rerender content, it will automatically go back to inbox project
    (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.removePreviousTasksFromDOM)();
    (0,_sectionWithDom__WEBPACK_IMPORTED_MODULE_2__.highlightProject)();
    updateTodoDisplay();
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQSxvRUFBbUIsQ0FBQyw0REFBZTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQix3RUFBdUI7QUFDeEMsZUFBZSxvRUFBbUI7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0VBQW1CLENBQUMsZ0VBQW1CO0FBQ3ZDO0FBQ0E7QUFDQSxzQkFBc0IsdURBQU87QUFDN0IsbUJBQW1CLGdFQUFnQjtBQUNuQyxFQUFFLGtFQUFpQjtBQUNuQixFQUFFLGlFQUFnQjtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw4REFBYSxTQUFTLGdFQUFnQjtBQUN4QztBQUNBLElBQUksOERBQWE7QUFDakI7QUFDQSxnQkFBZ0IsOERBQWE7QUFDN0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9FQUFtQixDQUFDLHlEQUFZO0FBQ2hDO0FBQ0EsZUFBZSwwREFBUztBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixnRUFBZ0I7QUFDckM7QUFDQTtBQUNBLElBQUksMkVBQTBCO0FBQzlCLElBQUksaUVBQWdCO0FBQ3BCO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9pbmJveC1ibG9jay5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL21haW4uY3NzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9wcm9qZWN0LWJsb2NrLmNzcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvdG9kby1ibG9jay5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvaW5ib3gtYmxvY2suY3NzPzVhMTgiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL21haW4uY3NzP2RkZDMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL3Byb2plY3QtYmxvY2suY3NzPzI4NTUiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL3RvZG8tYmxvY2suY3NzP2FmZTUiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvcHJvamVjdE1hbmFnZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL3NlY3Rpb25XaXRoRG9tLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy90b2Rvc01hbmlwdWxhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuaW5ib3gtZGl2IHtcbiAgZ3JpZC1yb3c6IDEvMjtcbiAgZ3JpZC1jb2x1bW46IDEvMjtcblxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHg7XG4gIGdhcDogMTBweDtcblxuICBib3JkZXI6IGJsdWUgMnB4IHNvbGlkO1xuXG4gICYgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiBvcmFuZ2U7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmJveC1ibG9jay5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCOztFQUVoQixhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLFNBQVM7O0VBRVQsc0JBQXNCOztFQUV0QjtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7O0lBRWpCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsWUFBWTtFQUNkO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmluYm94LWRpdiB7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHg7XFxuICBnYXA6IDEwcHg7XFxuXFxuICBib3JkZXI6IGJsdWUgMnB4IHNvbGlkO1xcblxcbiAgJiBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogb3JhbmdlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuI2NvbnRlbnQge1xuICB3aWR0aDogNDIwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTIwcHggMzAwcHg7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTIwcHggbWlubWF4KDMwMHB4LCAxZnIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrY3lhbjtcblxuICAmIGJ1dHRvbjpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cblxuICAmIGJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IGdyZXk7XG4gIH1cblxuICAmIGJ1dHRvbjpkaXNhYmxlZDpob3ZlciB7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLDRDQUE0QztFQUM1QywwQkFBMEI7O0VBRTFCO0lBQ0UsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixVQUFVO0VBQ1o7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsV0FBVztFQUNiOztFQUVBO0lBQ0UsZUFBZTtJQUNmLHFCQUFxQjtFQUN2QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIHdpZHRoOiA0MjBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEyMHB4IDMwMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMjBweCBtaW5tYXgoMzAwcHgsIDFmcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrY3lhbjtcXG5cXG4gICYgYnV0dG9uOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHJlZDtcXG4gIH1cXG5cXG4gICYgYnV0dG9uOmRpc2FibGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgfVxcblxcbiAgJiBidXR0b246ZGlzYWJsZWQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAucHJvamVjdC1kaXYge1xuICBncmlkLWNvbHVtbjogMS8yO1xuICBncmlkLXJvdzogMi8zO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gIHdpZHRoOiAxMjBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLXJvd3M6IDMwcHg7XG4gIGdhcDogMTBweDtcblxuICBib3JkZXI6IGdyZWVuIHNvbGlkIDJweDtcblxuICAmIGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgICYgYnV0dG9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xuICAgICAgY29sb3I6IHNreWJsdWU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuXG4gICAgJiBzcGFuIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Byb2plY3QtYmxvY2suY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixnQkFBZ0I7O0VBRWhCLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLFNBQVM7O0VBRVQsdUJBQXVCOztFQUV2QjtJQUNFLGFBQWE7O0lBRWI7TUFDRSxpQkFBaUI7TUFDakIsaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osWUFBWTs7TUFFWix1QkFBdUI7TUFDdkIsY0FBYztNQUNkLFlBQVk7SUFDZDs7SUFFQTtNQUNFLFlBQVk7TUFDWixzQkFBc0I7TUFDdEIsaUJBQWlCO01BQ2pCLGlCQUFpQjs7TUFFakI7UUFDRSxlQUFlO1FBQ2YsV0FBVztNQUNiO0lBQ0Y7RUFDRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wcm9qZWN0LWRpdiB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuXFxuICB3aWR0aDogMTIwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDMwcHg7XFxuICBnYXA6IDEwcHg7XFxuXFxuICBib3JkZXI6IGdyZWVuIHNvbGlkIDJweDtcXG5cXG4gICYgZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgJiBidXR0b24ge1xcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgaGVpZ2h0OiAzMHB4O1xcblxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xcbiAgICAgIGNvbG9yOiBza3libHVlO1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgfVxcblxcbiAgICAmIHNwYW4ge1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgY29sb3I6IGJsdWU7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnRvZG8tZGl2IHtcbiAgZ3JpZC1jb2x1bW46IDIvMztcbiAgZ3JpZC1yb3c6IDEvMztcblxuICBib3JkZXI6IHB1cnBsZSBzb2xpZCAycHg7XG5cbiAgJiA+IGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29yYWw7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICB9XG5cbiAgJiAuY3JlYXRlLXRhc2stZGlyZWN0bHkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICB9XG5cbiAgJiAuZGlzcGxheS10YXNrcyB7XG4gICAgYm9yZGVyLXRvcDogc29saWQgNXB4IG9yYW5nZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXV0by1yb3dzOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiAxMHB4O1xuXG4gICAgJiAudGFzay1kaXYge1xuICAgICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDMwcHg7XG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgJiAucmVtb3ZlLXRhc2sge1xuICAgICAgICBwYWRkaW5nOiA1cHggOHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG5cbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICB9XG5cbiAgICAgICYgLmNoZWNrLWJveCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA2cHg7XG4gICAgICAgIGxlZnQ6IDFweDtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICB3aWR0aDogMjVweDtcblxuICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcblxuICAgICAgICAmOmhvdmVyOjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6IFwi4pyUXCI7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IC03cHg7XG4gICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy90b2RvLWJsb2NrLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhOztFQUViLHdCQUF3Qjs7RUFFeEI7SUFDRSx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLFNBQVM7O0lBRVQ7TUFDRSwwQkFBMEI7TUFDMUIsaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQiw4QkFBOEI7TUFDOUIsa0JBQWtCOztNQUVsQjtRQUNFLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsU0FBUztRQUNULFdBQVc7O1FBRVgsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsMkJBQTJCO1FBQzNCLFlBQVk7UUFDWixrQkFBa0I7TUFDcEI7O01BRUE7UUFDRSxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFNBQVM7UUFDVCxZQUFZO1FBQ1osV0FBVzs7UUFFWCxnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLHNCQUFzQjtRQUN0Qix1QkFBdUI7O1FBRXZCO1VBQ0UsWUFBWTtVQUNaLFlBQVk7VUFDWixlQUFlOztVQUVmLGtCQUFrQjtVQUNsQixZQUFZO1VBQ1osU0FBUztVQUNULGlCQUFpQjtRQUNuQjtNQUNGO0lBQ0Y7RUFDRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50b2RvLWRpdiB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDEvMztcXG5cXG4gIGJvcmRlcjogcHVycGxlIHNvbGlkIDJweDtcXG5cXG4gICYgPiBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JhbDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICB9XFxuXFxuICAmIC5jcmVhdGUtdGFzay1kaXJlY3RseSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IDEwcHggYXV0bztcXG4gIH1cXG5cXG4gICYgLmRpc3BsYXktdGFza3Mge1xcbiAgICBib3JkZXItdG9wOiBzb2xpZCA1cHggb3JhbmdlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tcm93czogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ2FwOiAxMHB4O1xcblxcbiAgICAmIC50YXNrLWRpdiB7XFxuICAgICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDMwcHg7XFxuICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICAgJiAucmVtb3ZlLXRhc2sge1xcbiAgICAgICAgcGFkZGluZzogNXB4IDhweDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMTBweDtcXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xcblxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICB9XFxuXFxuICAgICAgJiAuY2hlY2stYm94IHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogNnB4O1xcbiAgICAgICAgbGVmdDogMXB4O1xcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcbiAgICAgICAgd2lkdGg6IDI1cHg7XFxuXFxuICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG5cXG4gICAgICAgICY6aG92ZXI6OmJlZm9yZSB7XFxuICAgICAgICAgIGNvbnRlbnQ6IFxcXCLinJRcXFwiO1xcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICBib3R0b206IC03cHg7XFxuICAgICAgICAgIGxlZnQ6IDBweDtcXG4gICAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luYm94LWJsb2NrLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5ib3gtYmxvY2suY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9qZWN0LWJsb2NrLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdC1ibG9jay5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9kby1ibG9jay5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvZG8tYmxvY2suY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgeyBQcm9qZWN0LCBwcm9qZWN0SW50ZXJmYWNlIH07XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0VGl0bGUpIHtcbiAgICB0aGlzLnByb2plY3RUaXRsZSA9IHByb2plY3RUaXRsZTtcbiAgfVxuXG4gIGdldCB0aXRsZU9mUHJvamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0VGl0bGU7XG4gIH1cblxuICBzZXQgdGl0bGVPZlByb2plY3QodmFsdWUpIHtcbiAgICB0aGlzLnByb2plY3RUaXRsZSA9IHZhbHVlO1xuICB9XG59XG5cbmNvbnN0IHByb2plY3RJbnRlcmZhY2UgPSB7XG4gIHByb2plY3RzOiBbXSxcblxuICBhZGQoZWxlbSkge1xuICAgIHRoaXMucHJvamVjdHMucHVzaChlbGVtKTtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcbiAgfSxcblxuICByZW1vdmUodmFsdWUpIHtcbiAgICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIoXG4gICAgICAocHJvaikgPT4gcHJvai50aXRsZU9mUHJvamVjdCAhPT0gdmFsdWVcbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XG4gIH0sXG5cbiAgcmVtb3ZlQXNzb2NpYXRlZFRhc2tzKHByb2osIHN0b3JhZ2UpIHtcbiAgICBzdG9yYWdlID0gc3RvcmFnZS5maWx0ZXIoKHRhc2spID0+IHRhc2sudG9kb1Byb2plY3QgIT09IHByb2opO1xuXG4gICAgcmV0dXJuIHN0b3JhZ2U7XG4gIH0sXG59O1xuIiwiLy8gRXhwb3J0IGZ1bmN0aW9uc1xuZXhwb3J0IHtcbiAgZGlzcGxheU5ld1Byb2plY3QsXG4gIGZpbmRDbGljayxcbiAgZmluZENob3NlblByb2plY3QsXG4gIGNyZWF0ZUV2ZW50TGlzdGVuZXIsXG4gIGdyYWJUaXRsZU9mQWN0aXZlUHJvamVjdCxcbiAgcmVtb3ZlUHJldmlvdXNUYXNrc0Zyb21ET00sXG4gIGNyZWF0ZUJsb2Nrc1RvUmVwcmVzZW50VGFza3MsXG4gIGNyZWF0ZVRleHRGaWVsZHMsXG4gIHNldENvbG9yT25DaGVja2xpc3QsXG4gIGhpZ2hsaWdodFByb2plY3QsXG4gIGZpbmRDbG9zZXN0RGF0YUF0dGlidXRlLFxuICBnZXRJZE9mU3BlY2lmaWNUYXNrLFxufTtcbi8vIEV4cG9ydCB2YXJpYWJsZXNcbmV4cG9ydCB7XG4gIHByb2plY3RCbG9jayxcbiAgaW5ib3gsXG4gIGNyZWF0ZVRhc2tCdXR0b24sXG4gIGNyZWF0ZVByb2plY3RCdXR0b24sXG4gIGRpc3BsYXlGb3JUYXNrcyxcbiAgY3JlYXRlVGFza0luc2lkZVByb2plY3QsXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KG5hbWUsIGNsYXNzTmFtZSwgdGV4dCkge1xuICBsZXQgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XG4gIGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICBlbGVtLnRleHRDb250ZW50ID0gdGV4dDtcblxuICByZXR1cm4gZWxlbTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kRWxlbWVudChwYXJlbnQsIGNoaWxkKSB7XG4gIHBhcmVudC5hcHBlbmQoY2hpbGQpO1xufVxuXG5mdW5jdGlvbiBmaW5kQ2xpY2soZSwgdmFsdWUpIHtcbiAgY29uc3QgZWxlbSA9IGUudGFyZ2V0LmNsb3Nlc3QodmFsdWUpO1xuICByZXR1cm4gZWxlbTtcbn1cbmZ1bmN0aW9uIGZpbmRDaG9zZW5Qcm9qZWN0KCkge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25bZGlzYWJsZWRdXCIpLnRleHRDb250ZW50O1xuICByZXR1cm4gdGl0bGU7XG59XG5cbmZ1bmN0aW9uIGdyYWJUaXRsZU9mQWN0aXZlUHJvamVjdChlKSB7XG4gIGNvbnN0IHRpdGxlID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gIHJldHVybiB0aXRsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRXZlbnRMaXN0ZW5lcihmb3JFbGVtLCB0eXBlLCBmdW5jKSB7XG4gIGZvckVsZW0uYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmdW5jKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJldmlvdXNUYXNrc0Zyb21ET00oKSB7XG4gIGRpc3BsYXlGb3JUYXNrcy5yZXBsYWNlQ2hpbGRyZW4oKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQmxvY2tzVG9SZXByZXNlbnRUYXNrcyhwcm9qZWN0KSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHRhc2tEaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwidGFzay1kaXZcIiwgXCJcIik7XG4gICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIHByb2plY3RbaV0uaWQpO1xuICAgIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJyZW1vdmUtdGFza1wiLCBcIlhcIik7XG4gICAgY29uc3QgY2hlY2tMaXN0ID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIsIFwiY2hlY2stYm94XCIsIFwiXCIpO1xuICAgIGNoZWNrTGlzdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgY29uc3QgdGl0bGVQYXJhID0gcHJvamVjdFtpXS50b2RvVGl0bGU7XG4gICAgY29uc3QgcHJvamVjdFBhcmEgPSBwcm9qZWN0W2ldLnRvZG9Qcm9qZWN0O1xuICAgIGNvbnN0IHByaW9yaXR5UGFyYSA9IHByb2plY3RbaV0udG9kb1ByaW9yaXR5O1xuICAgIGNvbnN0IGR1ZURhdGVQYXJhID0gcHJvamVjdFtpXS50b2RvRHVlRGF0ZTtcblxuICAgIGFwcGVuZEVsZW1lbnQoZGlzcGxheUZvclRhc2tzLCB0YXNrRGl2KTtcbiAgICBhcHBlbmRFbGVtZW50KHRhc2tEaXYsIHJlbW92ZUJ1dHRvbik7XG4gICAgYXBwZW5kRWxlbWVudCh0YXNrRGl2LCBjaGVja0xpc3QpO1xuXG4gICAgc2V0Q29sb3JPbkNoZWNrbGlzdChwcmlvcml0eVBhcmEsIGNoZWNrTGlzdCk7XG5cbiAgICBjcmVhdGVUZXh0RmllbGRzKFxuICAgICAgdGl0bGVQYXJhLFxuICAgICAgcHJvamVjdFBhcmEsXG4gICAgICBwcmlvcml0eVBhcmEsXG4gICAgICBkdWVEYXRlUGFyYSxcbiAgICAgIHRhc2tEaXZcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHRGaWVsZHModGl0bGUsIHByb2plY3QsIGR1ZURhdGUsIHByaW9yaXR5LCBkaXYpIHtcbiAgY29uc3QgdGV4dEZvclRpdGxlID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJ0YXNrLXRpdGxlXCIsIGBUaXRsZTogJHt0aXRsZX1gKTtcbiAgY29uc3QgdGV4dEZvclByb2plY3QgPSBjcmVhdGVFbGVtZW50KFxuICAgIFwicFwiLFxuICAgIFwidGFzay1wcm9qZWN0XCIsXG4gICAgYFByb2plY3Q6ICR7cHJvamVjdH1gXG4gICk7XG4gIGNvbnN0IHRleHRGb3JEdWVEYXRlID0gY3JlYXRlRWxlbWVudChcbiAgICBcInBcIixcbiAgICBcInRhc2stZHVlRGF0ZVwiLFxuICAgIGBEdWUgYnk6ICR7ZHVlRGF0ZX1gXG4gICk7XG4gIGNvbnN0IHRleHRGb3JQcmlvcml0eSA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgXCJwXCIsXG4gICAgXCJ0YXNrLXByaW9yaXR5XCIsXG4gICAgYFByaW9yaXR5OiAke3ByaW9yaXR5fWBcbiAgKTtcblxuICBhcHBlbmRFbGVtZW50KGRpdiwgdGV4dEZvclRpdGxlKTtcbiAgYXBwZW5kRWxlbWVudChkaXYsIHRleHRGb3JQcm9qZWN0KTtcbiAgYXBwZW5kRWxlbWVudChkaXYsIHRleHRGb3JEdWVEYXRlKTtcbiAgYXBwZW5kRWxlbWVudChkaXYsIHRleHRGb3JQcmlvcml0eSk7XG59XG5cbmZ1bmN0aW9uIHNldENvbG9yT25DaGVja2xpc3QocHJpb3JpdHlMZXZlbCwgZWxlbWVudCkge1xuICBpZiAocHJpb3JpdHlMZXZlbCA9PT0gXCIxXCIpIHtcbiAgICBlbGVtZW50LnN0eWxlLmJvcmRlciA9IFwiM3B4IHNvbGlkIHJlZFwiO1xuICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjE0LCAxMTEsIDExMSlcIjtcbiAgfSBlbHNlIGlmIChwcmlvcml0eUxldmVsID09PSBcIjJcIikge1xuICAgIGVsZW1lbnQuc3R5bGUuYm9yZGVyID0gXCIzcHggc29saWQgeWVsbG93XCI7XG4gICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigxNzMsIDE3MywgNzkpXCI7XG4gIH0gZWxzZSBpZiAocHJpb3JpdHlMZXZlbCA9PT0gXCIzXCIpIHtcbiAgICBlbGVtZW50LnN0eWxlLmJvcmRlciA9IFwiM3B4IHNvbGlkIGJsdWVcIjtcbiAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDExNywgMTE3LCAxOTkpXCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGlnaGxpZ2h0UHJvamVjdCh2YWx1ZSA9IFwiaW5ib3hcIikge1xuICBjb25zdCBkaXNhYmxlZEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uLnByb2plY3RcIik7XG4gIGRpc2FibGVkQnV0dG9ucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICBidG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBpZiAoYnRuLnRleHRDb250ZW50ID09PSB2YWx1ZSkge1xuICAgICAgYnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmaW5kQ2xvc2VzdERhdGFBdHRpYnV0ZShlKSB7XG4gIGNvbnN0IHRhc2sgPSBlLnRhcmdldC5jbG9zZXN0KFwiW2RhdGEtaWRdXCIpO1xuICByZXR1cm4gdGFzaztcbn1cblxuZnVuY3Rpb24gZ2V0SWRPZlNwZWNpZmljVGFzayh0YXNrKSB7XG4gIGNvbnN0IGlkID0gdGFzay5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpO1xuICByZXR1cm4gaWQ7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlOZXdQcm9qZWN0KHZhbHVlKSB7XG4gIGNvbnN0IGRpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJwcm9qZWN0LXRpdGxlLWRpdlwiLCBcIlwiKTtcbiAgY29uc3QgYnRuID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcImN1c3RvbS1wcm9qZWN0LWJ0blwiLCB2YWx1ZSk7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgY29uc3Qgc3BhbiA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwicmVtb3ZlLXByb2plY3QtYnRuXCIsIFwiWFwiKTtcbiAgYXBwZW5kRWxlbWVudChkaXYsIGJ0bik7XG4gIGFwcGVuZEVsZW1lbnQoZGl2LCBzcGFuKTtcbiAgYXBwZW5kRWxlbWVudChwcm9qZWN0QmxvY2ssIGRpdik7XG59XG5cbi8vIE1haW4gbGF5b3V0XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuY29uc3QgaW5ib3hCbG9jayA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJpbmJveC1kaXZcIiwgXCJcIik7XG5jb25zdCBwcm9qZWN0QmxvY2sgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdC1kaXZcIiwgXCJcIik7XG5jb25zdCB0b2RvQmxvY2sgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwidG9kby1kaXZcIiwgXCJcIik7XG5hcHBlbmRFbGVtZW50KGNvbnRlbnQsIGluYm94QmxvY2spO1xuYXBwZW5kRWxlbWVudChjb250ZW50LCBwcm9qZWN0QmxvY2spO1xuYXBwZW5kRWxlbWVudChjb250ZW50LCB0b2RvQmxvY2spO1xuXG4vLyBEZWZhdWx0IGJsb2NrXG5jb25zdCBpbmJveCA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJidXR0b24taW5ib3hcIiwgXCJpbmJveFwiKTtcbmluYm94LmRpc2FibGVkID0gdHJ1ZTtcbmluYm94LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuY29uc3QgdG9kYXkgPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiYnV0dG9uLXRvZGF5XCIsIFwidG9kYXlcIik7XG5jb25zdCB1cGNvbWluZyA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJidXR0b24tdXBjb21pbmdcIiwgXCJ1cGNvbWluZ1wiKTtcbmFwcGVuZEVsZW1lbnQoaW5ib3hCbG9jaywgaW5ib3gpO1xuYXBwZW5kRWxlbWVudChpbmJveEJsb2NrLCB0b2RheSk7XG5hcHBlbmRFbGVtZW50KGluYm94QmxvY2ssIHVwY29taW5nKTtcblxuLy8gRm9yIG5vdyB0byBhbGxvdyB0YXNrL3Byb2plY3QgY3JlYXRpb25cbmNvbnN0IGNyZWF0ZVRhc2tCdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiY3JlYXRlLXRhc2tzXCIsIFwiQ3JlYXRlIHRhc2tcIik7XG5jb25zdCBjcmVhdGVQcm9qZWN0QnV0dG9uID0gY3JlYXRlRWxlbWVudChcbiAgXCJidXR0b25cIixcbiAgXCJjcmVhdGUtcHJvamVjdHNcIixcbiAgXCJDcmVhdGUgcHJvamVjdFwiXG4pO1xuY29uc3QgZGlzcGxheUZvclRhc2tzID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImRpc3BsYXktdGFza3NcIiwgXCJcIik7XG5hcHBlbmRFbGVtZW50KHRvZG9CbG9jaywgY3JlYXRlVGFza0J1dHRvbik7XG5hcHBlbmRFbGVtZW50KHRvZG9CbG9jaywgY3JlYXRlUHJvamVjdEJ1dHRvbik7XG5hcHBlbmRFbGVtZW50KHRvZG9CbG9jaywgZGlzcGxheUZvclRhc2tzKTtcblxuLy8gQ3JlYXRlIHRhc2tzIGxvY2FsbHkgaW4gYSBwcm9qZWN0XG5jb25zdCBjcmVhdGVUYXNrSW5zaWRlUHJvamVjdCA9IGNyZWF0ZUVsZW1lbnQoXG4gIFwiYnV0dG9uXCIsXG4gIFwiY3JlYXRlLXRhc2stZGlyZWN0bHlcIixcbiAgXCIrXCJcbik7XG5hcHBlbmRFbGVtZW50KHRvZG9CbG9jaywgY3JlYXRlVGFza0luc2lkZVByb2plY3QpO1xuIiwiZXhwb3J0IHsgVG9kbywgdGFza0ludGVyZmFjZSB9O1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RNYW5hZ2VtZW50XCI7XG5cbmNsYXNzIFRvZG8gZXh0ZW5kcyBQcm9qZWN0IHtcbiAgLy8gQ3JlYXRlcyBhIHRvZG9cbiAgY29uc3RydWN0b3IocHJvamVjdFRpdGxlLCB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAvLyBCYXNlIGNsYXNzIGlzIFByb2plY3QgdGhhdCBoYXMgYSBwcm9qZWN0IHByb3BlcnR5IG9uIGl0cyBjb25zdHJ1Y3RvclxuICAgIHN1cGVyKHByb2plY3RUaXRsZSk7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuaWQgPSBzZWxmLmNyeXB0by5yYW5kb21VVUlEKCk7XG4gIH1cblxuICAvLyBVcGRhdGVzIGEgdG9kb1xuICBnZXQgdG9kb1Byb2plY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdFRpdGxlO1xuICB9XG4gIHNldCB0b2RvUHJvamVjdCh2YWx1ZSkge1xuICAgIHRoaXMucHJvamVjdFRpdGxlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgdG9kb1RpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICB9XG4gIHNldCB0b2RvVGl0bGUodmFsdWUpIHtcbiAgICB0aGlzLnRpdGxlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgdG9kb0R1ZURhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcbiAgfVxuXG4gIHNldCB0b2RvRHVlRGF0ZSh2YWx1ZSkge1xuICAgIHRoaXMuZHVlRGF0ZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHRvZG9Qcmlvcml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcbiAgfVxuICBzZXQgdG9kb1ByaW9yaXR5KHZhbHVlKSB7XG4gICAgdGhpcy5wcmlvcml0eSA9IHZhbHVlO1xuICB9XG59XG5cbi8vIEludGVyZmFjZSBmb3IgdG9kb3MgLSB3aGF0IGZ1bmN0aW9uYWxpdGllcyB0aGV5IGhhdmVcbmNvbnN0IHRhc2tJbnRlcmZhY2UgPSB7XG4gIC8vIHRvZG9zIGFycmF5IHdpbGwgbW9kaWZ5IG1haW5TdG9yYWdlIGFycmF5XG4gIHRvZG9zOiBbXSxcbiAgYWRkKGVsZW0pIHtcbiAgICB0aGlzLnRvZG9zLnB1c2goZWxlbSk7XG4gICAgcmV0dXJuIHRoaXMudG9kb3M7XG4gIH0sXG5cbiAgcmVtb3ZlKHZhbHVlKSB7XG4gICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkICE9PSB2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXMudG9kb3M7XG4gIH0sXG5cbiAgZmluZEFsbChwcm9qKSB7XG4gICAgY29uc3QgYXJyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy50b2Rvc1tpXS5wcm9qZWN0VGl0bGUudG9Mb3dlckNhc2UoKSA9PT0gcHJvai50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIGFyci5wdXNoKHRoaXMudG9kb3NbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuICB9LFxuXG4gIC8vIHVwZGF0ZShlbGVtLCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgLy8gICBpZiAocHJvcGVydHkudG9Mb3dlckNhc2UoKSA9PT0gXCJ0aXRsZVwiKSB7XG4gIC8vICAgICBjb25zb2xlLmxvZyhgT2xkIHRpdGxlOiAke2VsZW0udG9kb1RpdGxlfWApO1xuICAvLyAgICAgZWxlbS50b2RvVGl0bGUgPSB2YWx1ZTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKGBVcGRhdGVkIHRpdGxlOiAke3ZhbHVlfWApO1xuICAvLyAgIH0gZWxzZSBpZiAocHJvcGVydHkudG9Mb3dlckNhc2UoKSA9PT0gXCJwcmlvcml0eVwiKSB7XG4gIC8vICAgICBjb25zb2xlLmxvZyhgT2xkIHRpdGxlOiAke2VsZW0udG9kb1ByaW9yaXR5fWApO1xuICAvLyAgICAgZWxlbS50b2RvUHJpb3JpdHkgPSB2YWx1ZTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKGBVcGRhdGVkIHByaW9yaXR5OiAke3ZhbHVlfWApO1xuICAvLyAgIH0gZWxzZSBpZiAocHJvcGVydHkudG9Mb3dlckNhc2UoKSA9PT0gXCJwcm9qZWN0XCIpIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKGBPbGQgdGl0bGU6ICR7ZWxlbS50b2RvUHJvamVjdH1gKTtcbiAgLy8gICAgIGVsZW0udG9kb1Byb2plY3QgPSB2YWx1ZTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKGBVcGRhdGVkIHByb3BlcnR5OiAke3ZhbHVlfWApO1xuICAvLyAgIH1cbiAgLy8gICBjb25zb2xlLmxvZyhgRnVsbCBkZXRhaWxzOiBcIiR7ZWxlbS50aXRsZX1cIiB0aXRsZWApO1xuICAvLyB9LFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IFRvZG8sIHRhc2tJbnRlcmZhY2UgfSBmcm9tIFwiLi90b2Rvc01hbmlwdWxhdGlvbnNcIjtcbmltcG9ydCB7IFByb2plY3QsIHByb2plY3RJbnRlcmZhY2UgfSBmcm9tIFwiLi9wcm9qZWN0TWFuYWdlbWVudFwiO1xuLy8gSW1wb3J0IG1ldGhvZHNcbmltcG9ydCB7XG4gIGRpc3BsYXlOZXdQcm9qZWN0LFxuICBmaW5kQ2xpY2ssXG4gIGZpbmRDaG9zZW5Qcm9qZWN0LFxuICBjcmVhdGVFdmVudExpc3RlbmVyLFxuICBncmFiVGl0bGVPZkFjdGl2ZVByb2plY3QsXG4gIHJlbW92ZVByZXZpb3VzVGFza3NGcm9tRE9NLFxuICBjcmVhdGVCbG9ja3NUb1JlcHJlc2VudFRhc2tzLFxuICBoaWdobGlnaHRQcm9qZWN0LFxuICBmaW5kQ2xvc2VzdERhdGFBdHRpYnV0ZSxcbiAgZ2V0SWRPZlNwZWNpZmljVGFzayxcbn0gZnJvbSBcIi4vc2VjdGlvbldpdGhEb21cIjtcbi8vIEltcG9ydCB2YXJpYWJsZXNcbmltcG9ydCB7XG4gIHByb2plY3RCbG9jayxcbiAgaW5ib3gsXG4gIGNyZWF0ZVRhc2tCdXR0b24sXG4gIGNyZWF0ZVByb2plY3RCdXR0b24sXG4gIGRpc3BsYXlGb3JUYXNrcyxcbiAgY3JlYXRlVGFza0luc2lkZVByb2plY3QsXG59IGZyb20gXCIuL3NlY3Rpb25XaXRoRG9tXCI7XG4vLyBTaW1pbGFyIHNlY3Rpb25zIHdpdGggc3R5bGVzIGFyZSBncm91cGVkIGRpZmZlcmVudCBmaWxlc1xuaW1wb3J0IFwiLi9tYWluLmNzc1wiO1xuaW1wb3J0IFwiLi9pbmJveC1ibG9jay5jc3NcIjtcbmltcG9ydCBcIi4vcHJvamVjdC1ibG9jay5jc3NcIjtcbmltcG9ydCBcIi4vdG9kby1ibG9jay5jc3NcIjtcblxuLy8gU2VjdGlvbiBjb250YWluaW5nIHByb2dyYW0gbG9naWNcbmxldCBtYWluU3RvcmFnZSA9IFtdO1xuY29uc29sZS5sb2coXCJNYWluIHN0b3JhZ2U6XCIpO1xuY29uc29sZS5sb2cobWFpblN0b3JhZ2UpO1xubGV0IHByb2plY3RTdG9yYWdlID0gW107XG5jb25zb2xlLmxvZyhcIlByb2plY3Qgc3RvcmFnZTpcIik7XG5jb25zb2xlLmxvZyhwcm9qZWN0U3RvcmFnZSk7XG5cbi8vIEdldCBpbnB1dCBmcm9tIGEgdXNlclxuZnVuY3Rpb24gZ2V0SW5wdXRGb3JUYXNrUHJvamVjdCgpIHtcbiAgbGV0IHByb2plY3Q7XG4gIGlmIChjaGVja0ZvckN1c3RvbVByb2plY3RzKCkpIHtcbiAgICBwcm9qZWN0ID0gXCJpbmJveFwiO1xuICB9IGVsc2Uge1xuICAgIHByb2plY3QgPSBwcm9tcHQoXCJQcm9qZWN0P1wiLCBcIlwiKTtcbiAgfVxuICByZXR1cm4gcHJvamVjdDtcbn1cblxuLy8gQXNzaWduIGFsbCB0YXNrcyB0byBhIGRlZmF1bHQgcHJvamVjdCBpZiB0cnVlXG5mdW5jdGlvbiBjaGVja0ZvckN1c3RvbVByb2plY3RzKCkge1xuICBpZiAocHJvamVjdFN0b3JhZ2UubGVuZ3RoID09PSAwKSB7XG4gICAgYWxlcnQoXG4gICAgICBcIllvdSBoYXZlIG5vdCBjcmVhdGVkIGFueSBwcm9qZWN0IHlldC4gWW91ciB0YXNrcyBhcmUgcHV0IGludG8gaW5ib3hcIlxuICAgICk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0SW5wdXRGb3JUYXNrVGl0bGUoKSB7XG4gIGNvbnN0IHRpdGxlID0gcHJvbXB0KFwiVGl0bGVcIiwgXCJcIik7XG4gIHJldHVybiB0aXRsZTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5wdXRGb3JUYXNrRHVlRGF0ZSgpIHtcbiAgY29uc3QgZHVlRGF0ZSA9IHByb21wdChcIkR1ZSBkYXRlP1wiLCBcIlwiKTtcbiAgcmV0dXJuIGR1ZURhdGU7XG59XG5cbmZ1bmN0aW9uIGdldElucHV0Rm9yVGFza1ByaW9yaXR5KCkge1xuICBjb25zdCBwcmlvcml0eSA9IHByb21wdChcIlByaW9yaXR5XCIsIFwiXCIpO1xuICByZXR1cm4gcHJpb3JpdHk7XG59XG5cbi8vIDEpIENyZWF0ZSBhIHRvZG8gZGlyZWN0bHkgaW4gYSB0YXNrXG4vLyAyKSBDcmVhdGUgYSB0b2RvIGdsb2JhbGx5IC0gcHJvamVjdCBuYW1lIGlzIHJlcXVpcmVkXG5jcmVhdGVFdmVudExpc3RlbmVyKGNyZWF0ZVRhc2tJbnNpZGVQcm9qZWN0LCBcImNsaWNrXCIsIGNyZWF0ZVRvZG8pO1xuY3JlYXRlRXZlbnRMaXN0ZW5lcihjcmVhdGVUYXNrQnV0dG9uLCBcImNsaWNrXCIsIGNyZWF0ZVRvZG8pO1xuZnVuY3Rpb24gY3JlYXRlVG9kbyhlKSB7XG4gIGxldCBwcm9qZWN0O1xuICBjb25zdCBjcmVhdGVkRGlyZWN0bHlPblByb2plY3QgPSBmaW5kQ2xpY2soZSwgXCIuY3JlYXRlLXRhc2stZGlyZWN0bHlcIik7XG4gIGlmIChjcmVhdGVkRGlyZWN0bHlPblByb2plY3QpIHtcbiAgICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gZmluZENob3NlblByb2plY3QoKTtcbiAgICBwcm9qZWN0ID0gYWN0aXZlUHJvamVjdDtcbiAgfSBlbHNlIHtcbiAgICBwcm9qZWN0ID0gZ2V0SW5wdXRGb3JUYXNrUHJvamVjdCgpO1xuICB9XG5cbiAgbGV0IHRpdGxlID0gZ2V0SW5wdXRGb3JUYXNrVGl0bGUoKTtcbiAgbGV0IGR1ZURhdGUgPSBnZXRJbnB1dEZvclRhc2tEdWVEYXRlKCk7XG4gIGxldCBwcmlvcml0eSA9IGdldElucHV0Rm9yVGFza1ByaW9yaXR5KCk7XG4gIGNvbnN0IHRhc2sgPSBuZXcgVG9kbyhwcm9qZWN0LCB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICBtYWluU3RvcmFnZSA9IHRhc2tJbnRlcmZhY2UuYWRkKHRhc2spO1xuICBjb25zb2xlLmxvZyhtYWluU3RvcmFnZSk7XG4gIHVwZGF0ZVRvZG9EaXNwbGF5KCk7XG59XG5cbi8vIERpc3BsYXkgYWxsIHRvZG9zIGluIGEgcHJvamVjdFxuY3JlYXRlRXZlbnRMaXN0ZW5lcihpbmJveCwgXCJjbGlja1wiLCBkaXNwbGF5VGFza3NJblRoaXNQcm9qZWN0KTtcbmNyZWF0ZUV2ZW50TGlzdGVuZXIocHJvamVjdEJsb2NrLCBcImNsaWNrXCIsIGRpc3BsYXlUYXNrc0luVGhpc1Byb2plY3QpO1xuZnVuY3Rpb24gZ2VuZXJhdGVMaXN0T2ZUYXNrcyhwcm9qZWN0KSB7XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gdGFza0ludGVyZmFjZS5maW5kQWxsKHByb2plY3QpO1xuICAvLyBDbGVhciB0aGUgdG9kbyBibG9jayBub3QgdG8gZHVwbGljYXRlIGFwcGVuZGVkIGVsZW1lbnRzXG4gIHJlbW92ZVByZXZpb3VzVGFza3NGcm9tRE9NKCk7XG4gIGNyZWF0ZUJsb2Nrc1RvUmVwcmVzZW50VGFza3MoY3VycmVudFByb2plY3QpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VGFza3NJblRoaXNQcm9qZWN0KGUpIHtcbiAgLy8gQ2xpY2sgb2NjdXJzIG9uIHRoZSBpbnNpZGUgb2YgYSBidXR0b25cbiAgY29uc3QgYnRuID0gZmluZENsaWNrKGUsIFwiYnV0dG9uXCIpO1xuICBpZiAoIWJ0bikgcmV0dXJuO1xuXG4gIGNvbnN0IHRpdGxlID0gZ3JhYlRpdGxlT2ZBY3RpdmVQcm9qZWN0KGUpO1xuICBoaWdobGlnaHRQcm9qZWN0KHRpdGxlKTtcbiAgZ2VuZXJhdGVMaXN0T2ZUYXNrcyh0aXRsZSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRvZG9EaXNwbGF5KCkge1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBmaW5kQ2hvc2VuUHJvamVjdCgpO1xuICBnZW5lcmF0ZUxpc3RPZlRhc2tzKHByb2plY3RUaXRsZSk7XG59XG5cbi8vIFJlbW92ZSBhIHRhc2tcbmNyZWF0ZUV2ZW50TGlzdGVuZXIoZGlzcGxheUZvclRhc2tzLCBcImNsaWNrXCIsIHJlbW92ZVRhc2spO1xuZnVuY3Rpb24gcmVtb3ZlVGFzayhlKSB7XG4gIGNvbnN0IGJ0biA9IGZpbmRDbGljayhlLCBcImJ1dHRvblwiKTtcbiAgaWYgKCFidG4pIHJldHVybjtcblxuICBjb25zdCB0YXNrID0gZmluZENsb3Nlc3REYXRhQXR0aWJ1dGUoZSk7XG4gIGNvbnN0IGlkID0gZ2V0SWRPZlNwZWNpZmljVGFzayh0YXNrKTtcblxuICB0YXNrLnJlbW92ZSgpO1xuICBtYWluU3RvcmFnZSA9IHRhc2tJbnRlcmZhY2UucmVtb3ZlKGlkKTtcbiAgY29uc29sZS5sb2cobWFpblN0b3JhZ2UpO1xufVxuXG4vLyBDb21wbGV0ZSBhIHRhc2tcbmZ1bmN0aW9uIGNoZWNrVGFza1N0YXR1cyhlKSB7XG4gIGNvbnN0IHRhc2sgPSBlLnRhcmdldC5jaGVja2VkO1xuICByZXR1cm4gdGFzaztcbn1cblxuZnVuY3Rpb24gc2VsZWN0QWxsUGFyYWdyYXBocyhlKSB7XG4gIGNvbnN0IHBhcmFyZ3JhcGhzID0gZS50YXJnZXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKFwicFwiKTtcbiAgcmV0dXJuIHBhcmFyZ3JhcGhzO1xufVxuXG5mdW5jdGlvbiBhcHBseVN0cmlrZVRocm91Z2hFZmZlY3QoZSkge1xuICBjb25zdCBwYXJhZ3JhcGhzID0gc2VsZWN0QWxsUGFyYWdyYXBocyhlKTtcbiAgcGFyYWdyYXBocy5mb3JFYWNoKChwYXJhKSA9PiAocGFyYS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibGluZS10aHJvdWdoXCIpKTtcbn1cblxuZnVuY3Rpb24gc2xvd0Rvd25UYXNrUmVtb3ZhbCh0YXNrUGFyYSwgaWRQYXJhKSB7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHRhc2tQYXJhLnJlbW92ZSgpO1xuICAgIG1haW5TdG9yYWdlID0gdGFza0ludGVyZmFjZS5yZW1vdmUoaWRQYXJhKTtcbiAgICBjb25zb2xlLmxvZyhtYWluU3RvcmFnZSk7XG4gIH0sIDMwMCk7XG59XG5cbmZ1bmN0aW9uIHByZXZlbnRVbmNoZWNraW5nVGFzayhlKSB7XG4gIGUudGFyZ2V0LmRpc2FibGVkID0gdHJ1ZTtcbn1cblxuY3JlYXRlRXZlbnRMaXN0ZW5lcihkaXNwbGF5Rm9yVGFza3MsIFwiY2hhbmdlXCIsIGNvbXBsZXRlVGFzayk7XG5mdW5jdGlvbiBjb21wbGV0ZVRhc2soZSkge1xuICBjb25zdCB0YXNrU3RhdHVzID0gY2hlY2tUYXNrU3RhdHVzKGUpO1xuICBpZiAodGFza1N0YXR1cykge1xuICAgIGFwcGx5U3RyaWtlVGhyb3VnaEVmZmVjdChlKTtcbiAgICBwcmV2ZW50VW5jaGVja2luZ1Rhc2soZSk7XG5cbiAgICBjb25zdCB0YXNrID0gZmluZENsb3Nlc3REYXRhQXR0aWJ1dGUoZSk7XG4gICAgY29uc3QgaWQgPSBnZXRJZE9mU3BlY2lmaWNUYXNrKHRhc2spO1xuICAgIHNsb3dEb3duVGFza1JlbW92YWwodGFzaywgaWQpO1xuICB9XG59XG5cbi8vIENyZWF0ZSBhIHByb2plY3RcbmZ1bmN0aW9uIGdldElucHV0Rm9yTmV3UHJvamVjdCgpIHtcbiAgY29uc3QgdGl0bGUgPSBwcm9tcHQoXCJQcm9qZWN0IG5hbWU/XCIsIFwiXCIpO1xuICByZXR1cm4gdGl0bGU7XG59XG5cbmNyZWF0ZUV2ZW50TGlzdGVuZXIoY3JlYXRlUHJvamVjdEJ1dHRvbiwgXCJjbGlja1wiLCBjcmVhdGVQcm9qZWN0KTtcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XG4gIGNvbnN0IHRpdGxlID0gZ2V0SW5wdXRGb3JOZXdQcm9qZWN0KCk7XG4gIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSk7XG4gIHByb2plY3RTdG9yYWdlID0gcHJvamVjdEludGVyZmFjZS5hZGQocHJvamVjdCk7XG4gIGRpc3BsYXlOZXdQcm9qZWN0KHRpdGxlKTtcbiAgaGlnaGxpZ2h0UHJvamVjdCh0aXRsZSk7XG4gIHVwZGF0ZVRvZG9EaXNwbGF5KCk7XG59XG5cbi8vIFJlbW92ZSBhIHByb2plY3RcbmZ1bmN0aW9uIGdldFNpYmxpbmdFbGVtZW50VGV4dChlbGVtZW50KSB7XG4gIGNvbnN0IHRpdGxlID0gZWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50O1xuICByZXR1cm4gdGl0bGU7XG59XG5cbmZ1bmN0aW9uIGNvbmZpcm1DaG9pY2UoKSB7XG4gIGNvbnN0IHdhcm5pbmcgPSBjb25maXJtKFwicmVtb3ZlIHRoaXMgcHJvamVjdCB3aXRoIGFsbCB0YXNrcyByZWxhdGVkIHRvIGl0P1wiKTtcbiAgcmV0dXJuIHdhcm5pbmc7XG59XG4vLyBDbGVhciBhcnJheSBpbiBhbiBvYmplY3QgZnJvbSB3aGljaCBJIHRha2UgYWxsIGluZm8gYW5kIGFzc2lnbiB0byBtYWluU3RvcmFnZVxuZnVuY3Rpb24gY2hhbmdlQXJyYXlzSW5NZXRob2RPYmplY3RzKHByb2opIHtcbiAgdGFza0ludGVyZmFjZS50b2RvcyA9IHByb2plY3RJbnRlcmZhY2UucmVtb3ZlQXNzb2NpYXRlZFRhc2tzKFxuICAgIHByb2osXG4gICAgdGFza0ludGVyZmFjZS50b2Rvc1xuICApO1xuICBtYWluU3RvcmFnZSA9IHRhc2tJbnRlcmZhY2UudG9kb3M7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3RCdG4oZWxlbWVudCkge1xuICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlKCk7XG59XG5cbmNyZWF0ZUV2ZW50TGlzdGVuZXIocHJvamVjdEJsb2NrLCBcImNsaWNrXCIsIHJlbW92ZVByb2plY3QpO1xuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChlKSB7XG4gIGNvbnN0IHNwYW4gPSBmaW5kQ2xpY2soZSwgXCJzcGFuXCIpO1xuICBpZiAoIXNwYW4pIHJldHVybjtcblxuICBjb25zdCBwcm9qZWN0ID0gZ2V0U2libGluZ0VsZW1lbnRUZXh0KHNwYW4pO1xuICBjb25zdCBhbnN3ZXIgPSBjb25maXJtQ2hvaWNlKCk7XG4gIGlmIChhbnN3ZXIpIHtcbiAgICBjaGFuZ2VBcnJheXNJbk1ldGhvZE9iamVjdHMocHJvamVjdCk7XG4gICAgcHJvamVjdFN0b3JhZ2UgPSBwcm9qZWN0SW50ZXJmYWNlLnJlbW92ZShwcm9qZWN0KTtcbiAgICByZW1vdmVQcm9qZWN0QnRuKHNwYW4pO1xuICAgIC8vIFdoaWxlIHJlbW92aW5nIGFuIGVsZW1lbnQgZnJvbSBET00gYW5kIG5lZWRpbmcgdG8gcmVyZW5kZXIgY29udGVudCwgaXQgd2lsbCBhdXRvbWF0aWNhbGx5IGdvIGJhY2sgdG8gaW5ib3ggcHJvamVjdFxuICAgIHJlbW92ZVByZXZpb3VzVGFza3NGcm9tRE9NKCk7XG4gICAgaGlnaGxpZ2h0UHJvamVjdCgpO1xuICAgIHVwZGF0ZVRvZG9EaXNwbGF5KCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==