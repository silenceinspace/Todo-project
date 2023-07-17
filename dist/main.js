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
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _inbox_block_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inbox-block.css */ "./src/inbox-block.css");
/* harmony import */ var _project_block_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-block.css */ "./src/project-block.css");
/* harmony import */ var _todo_block_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo-block.css */ "./src/todo-block.css");




// Similar sections with styles are grouped different files





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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly90b2RvLXByb2plY3QvLi9zcmMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL3Byb2plY3QtYmxvY2suY3NzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy90b2RvLWJsb2NrLmNzcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9pbmJveC1ibG9jay5jc3M/NWExOCIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvbWFpbi5jc3M/ZGRkMyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvcHJvamVjdC1ibG9jay5jc3M/Mjg1NSIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvdG9kby1ibG9jay5jc3M/YWZlNSIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9wcm9qZWN0TWFuYWdlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvc2VjdGlvbldpdGhEb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL3RvZG9zTWFuaXB1bGF0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5pbmJveC1kaXYge1xuICBncmlkLXJvdzogMS8yO1xuICBncmlkLWNvbHVtbjogMS8yO1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzBweDtcbiAgZ2FwOiAxMHB4O1xuXG4gIGJvcmRlcjogYmx1ZSAycHggc29saWQ7XG5cbiAgJiBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IG9yYW5nZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luYm94LWJsb2NrLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7O0VBRWhCLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsU0FBUzs7RUFFVCxzQkFBc0I7O0VBRXRCO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjs7SUFFakIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixZQUFZO0VBQ2Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaW5ib3gtZGl2IHtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzBweDtcXG4gIGdhcDogMTBweDtcXG5cXG4gIGJvcmRlcjogYmx1ZSAycHggc29saWQ7XFxuXFxuICAmIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBvcmFuZ2U7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4jY29udGVudCB7XG4gIHdpZHRoOiA0MjBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMjBweCAzMDBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMjBweCBtaW5tYXgoMzAwcHgsIDFmcik7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtjeWFuO1xuXG4gICYgYnV0dG9uOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuXG4gICYgYnV0dG9uOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogZ3JleTtcbiAgfVxuXG4gICYgYnV0dG9uOmRpc2FibGVkOmhvdmVyIHtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsNENBQTRDO0VBQzVDLDBCQUEwQjs7RUFFMUI7SUFDRSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLFVBQVU7RUFDWjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxlQUFlO0lBQ2YscUJBQXFCO0VBQ3ZCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgd2lkdGg6IDQyMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTIwcHggMzAwcHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEyMHB4IG1pbm1heCgzMDBweCwgMWZyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtjeWFuO1xcblxcbiAgJiBidXR0b246aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgfVxcblxcbiAgJiBidXR0b246ZGlzYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IGdyZXk7XFxuICB9XFxuXFxuICAmIGJ1dHRvbjpkaXNhYmxlZDpob3ZlciB7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5wcm9qZWN0LWRpdiB7XG4gIGdyaWQtY29sdW1uOiAxLzI7XG4gIGdyaWQtcm93OiAyLzM7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG5cbiAgd2lkdGg6IDEyMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tcm93czogMzBweDtcbiAgZ2FwOiAxMHB4O1xuXG4gIGJvcmRlcjogZ3JlZW4gc29saWQgMnB4O1xuXG4gICYgZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgJiBidXR0b24ge1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIGhlaWdodDogMzBweDtcblxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29yYWw7XG4gICAgICBjb2xvcjogc2t5Ymx1ZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG5cbiAgICAmIHNwYW4ge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcHJvamVjdC1ibG9jay5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGdCQUFnQjs7RUFFaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsU0FBUzs7RUFFVCx1QkFBdUI7O0VBRXZCO0lBQ0UsYUFBYTs7SUFFYjtNQUNFLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixZQUFZOztNQUVaLHVCQUF1QjtNQUN2QixjQUFjO01BQ2QsWUFBWTtJQUNkOztJQUVBO01BQ0UsWUFBWTtNQUNaLHNCQUFzQjtNQUN0QixpQkFBaUI7TUFDakIsaUJBQWlCOztNQUVqQjtRQUNFLGVBQWU7UUFDZixXQUFXO01BQ2I7SUFDRjtFQUNGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnByb2plY3QtZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMi8zO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG5cXG4gIHdpZHRoOiAxMjBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tcm93czogMzBweDtcXG4gIGdhcDogMTBweDtcXG5cXG4gIGJvcmRlcjogZ3JlZW4gc29saWQgMnB4O1xcblxcbiAgJiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICAmIGJ1dHRvbiB7XFxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICBoZWlnaHQ6IDMwcHg7XFxuXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29yYWw7XFxuICAgICAgY29sb3I6IHNreWJsdWU7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICB9XFxuXFxuICAgICYgc3BhbiB7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBjb2xvcjogYmx1ZTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAudG9kby1kaXYge1xuICBncmlkLWNvbHVtbjogMi8zO1xuICBncmlkLXJvdzogMS8zO1xuXG4gIGJvcmRlcjogcHVycGxlIHNvbGlkIDJweDtcblxuICAmID4gYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JhbDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gIH1cblxuICAmIC5jcmVhdGUtdGFzay1kaXJlY3RseSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIH1cblxuICAmIC5kaXNwbGF5LXRhc2tzIHtcbiAgICBib3JkZXItdG9wOiBzb2xpZCA1cHggb3JhbmdlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDEwcHg7XG5cbiAgICAmIC50YXNrLWRpdiB7XG4gICAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMzBweDtcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAmIC5yZW1vdmUtdGFzayB7XG4gICAgICAgIHBhZGRpbmc6IDVweCA4cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICByaWdodDogMTBweDtcblxuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZGVucm9kO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIH1cblxuICAgICAgJiAuY2hlY2stYm94IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDZweDtcbiAgICAgICAgbGVmdDogMXB4O1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgIHdpZHRoOiAyNXB4O1xuXG4gICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuXG4gICAgICAgICY6aG92ZXI6OmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogXCLinJRcIjtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogLTdweDtcbiAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3RvZG8tYmxvY2suY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7O0VBRWIsd0JBQXdCOztFQUV4QjtJQUNFLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsU0FBUzs7SUFFVDtNQUNFLDBCQUEwQjtNQUMxQixpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLDhCQUE4QjtNQUM5QixrQkFBa0I7O01BRWxCO1FBQ0UsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsV0FBVzs7UUFFWCxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQiwyQkFBMkI7UUFDM0IsWUFBWTtRQUNaLGtCQUFrQjtNQUNwQjs7TUFFQTtRQUNFLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsU0FBUztRQUNULFlBQVk7UUFDWixXQUFXOztRQUVYLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLHVCQUF1Qjs7UUFFdkI7VUFDRSxZQUFZO1VBQ1osWUFBWTtVQUNaLGVBQWU7O1VBRWYsa0JBQWtCO1VBQ2xCLFlBQVk7VUFDWixTQUFTO1VBQ1QsaUJBQWlCO1FBQ25CO01BQ0Y7SUFDRjtFQUNGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRvZG8tZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMS8zO1xcblxcbiAgYm9yZGVyOiBwdXJwbGUgc29saWQgMnB4O1xcblxcbiAgJiA+IGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gIH1cXG5cXG4gICYgLmNyZWF0ZS10YXNrLWRpcmVjdGx5IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgfVxcblxcbiAgJiAuZGlzcGxheS10YXNrcyB7XFxuICAgIGJvcmRlci10b3A6IHNvbGlkIDVweCBvcmFuZ2U7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1yb3dzOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBnYXA6IDEwcHg7XFxuXFxuICAgICYgLnRhc2stZGl2IHtcXG4gICAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMzBweDtcXG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgICAmIC5yZW1vdmUtdGFzayB7XFxuICAgICAgICBwYWRkaW5nOiA1cHggOHB4O1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAxMHB4O1xcbiAgICAgICAgcmlnaHQ6IDEwcHg7XFxuXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZGVucm9kO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgIH1cXG5cXG4gICAgICAmIC5jaGVjay1ib3gge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiA2cHg7XFxuICAgICAgICBsZWZ0OiAxcHg7XFxuICAgICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgICAgICB3aWR0aDogMjVweDtcXG5cXG4gICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcblxcbiAgICAgICAgJjpob3Zlcjo6YmVmb3JlIHtcXG4gICAgICAgICAgY29udGVudDogXFxcIuKclFxcXCI7XFxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgIGJvdHRvbTogLTdweDtcXG4gICAgICAgICAgbGVmdDogMHB4O1xcbiAgICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5ib3gtYmxvY2suY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmJveC1ibG9jay5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2plY3QtYmxvY2suY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9qZWN0LWJsb2NrLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b2RvLWJsb2NrLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9kby1ibG9jay5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCB7IFByb2plY3QsIHByb2plY3RJbnRlcmZhY2UgfTtcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHByb2plY3RUaXRsZSkge1xuICAgIHRoaXMucHJvamVjdFRpdGxlID0gcHJvamVjdFRpdGxlO1xuICB9XG5cbiAgZ2V0IHRpdGxlT2ZQcm9qZWN0KCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RUaXRsZTtcbiAgfVxuXG4gIHNldCB0aXRsZU9mUHJvamVjdCh2YWx1ZSkge1xuICAgIHRoaXMucHJvamVjdFRpdGxlID0gdmFsdWU7XG4gIH1cbn1cblxuY29uc3QgcHJvamVjdEludGVyZmFjZSA9IHtcbiAgcHJvamVjdHM6IFtdLFxuXG4gIGFkZChlbGVtKSB7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKGVsZW0pO1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xuICB9LFxuXG4gIHJlbW92ZSh2YWx1ZSkge1xuICAgIHRoaXMucHJvamVjdHMgPSB0aGlzLnByb2plY3RzLmZpbHRlcihcbiAgICAgIChwcm9qKSA9PiBwcm9qLnRpdGxlT2ZQcm9qZWN0ICE9PSB2YWx1ZVxuICAgICk7XG5cbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcbiAgfSxcblxuICByZW1vdmVBc3NvY2lhdGVkVGFza3MocHJvaiwgc3RvcmFnZSkge1xuICAgIHN0b3JhZ2UgPSBzdG9yYWdlLmZpbHRlcigodGFzaykgPT4gdGFzay50b2RvUHJvamVjdCAhPT0gcHJvaik7XG5cbiAgICByZXR1cm4gc3RvcmFnZTtcbiAgfSxcbn07XG4iLCJleHBvcnQgeyBjcmVhdGVFbGVtZW50LCBhcHBlbmRFbGVtZW50fTtcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChuYW1lLCBjbGFzc05hbWUsIHRleHQpIHtcbiAgbGV0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xuICBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgZWxlbS50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgcmV0dXJuIGVsZW07XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEVsZW1lbnQocGFyZW50LCBjaGlsZCkge1xuICBwYXJlbnQuYXBwZW5kKGNoaWxkKTtcbn0iLCJleHBvcnQgeyBUb2RvLCB0YXNrSW50ZXJmYWNlIH07XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdE1hbmFnZW1lbnRcIjtcblxuY2xhc3MgVG9kbyBleHRlbmRzIFByb2plY3Qge1xuICAvLyBDcmVhdGVzIGEgdG9kb1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0VGl0bGUsIHRpdGxlLCBwcmlvcml0eSkge1xuICAgIC8vIEJhc2UgY2xhc3MgaXMgUHJvamVjdCB0aGF0IGhhcyBhIHByb2plY3QgcHJvcGVydHkgb24gaXRzIGNvbnN0cnVjdG9yXG4gICAgc3VwZXIocHJvamVjdFRpdGxlKTtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuaWQgPSBzZWxmLmNyeXB0by5yYW5kb21VVUlEKCk7XG4gIH1cblxuICAvLyBVcGRhdGVzIGEgdG9kb1xuICBnZXQgdG9kb1Byb2plY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdFRpdGxlO1xuICB9XG4gIHNldCB0b2RvUHJvamVjdCh2YWx1ZSkge1xuICAgIHRoaXMucHJvamVjdFRpdGxlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgdG9kb1RpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICB9XG4gIHNldCB0b2RvVGl0bGUodmFsdWUpIHtcbiAgICB0aGlzLnRpdGxlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgdG9kb1ByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xuICB9XG4gIHNldCB0b2RvUHJpb3JpdHkodmFsdWUpIHtcbiAgICB0aGlzLnByaW9yaXR5ID0gdmFsdWU7XG4gIH1cbn1cblxuLy8gSW50ZXJmYWNlIGZvciB0b2RvcyAtIHdoYXQgZnVuY3Rpb25hbGl0aWVzIHRoZXkgaGF2ZVxuY29uc3QgdGFza0ludGVyZmFjZSA9IHtcbiAgLy8gdG9kb3MgYXJyYXkgd2lsbCBtb2RpZnkgbWFpblN0b3JhZ2UgYXJyYXlcbiAgdG9kb3M6IFtdLFxuICBhZGQoZWxlbSkge1xuICAgIHRoaXMudG9kb3MucHVzaChlbGVtKTtcbiAgICByZXR1cm4gdGhpcy50b2RvcztcbiAgfSxcblxuICByZW1vdmUodmFsdWUpIHtcbiAgICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT09IHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcy50b2RvcztcbiAgfSxcblxuICBmaW5kQWxsKHByb2opIHtcbiAgICBjb25zdCBhcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLnRvZG9zW2ldLnByb2plY3RUaXRsZS50b0xvd2VyQ2FzZSgpID09PSBwcm9qLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgYXJyLnB1c2godGhpcy50b2Rvc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH0sXG5cbiAgLy8gdXBkYXRlKGVsZW0sIHByb3BlcnR5LCB2YWx1ZSkge1xuICAvLyAgIGlmIChwcm9wZXJ0eS50b0xvd2VyQ2FzZSgpID09PSBcInRpdGxlXCIpIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKGBPbGQgdGl0bGU6ICR7ZWxlbS50b2RvVGl0bGV9YCk7XG4gIC8vICAgICBlbGVtLnRvZG9UaXRsZSA9IHZhbHVlO1xuICAvLyAgICAgY29uc29sZS5sb2coYFVwZGF0ZWQgdGl0bGU6ICR7dmFsdWV9YCk7XG4gIC8vICAgfSBlbHNlIGlmIChwcm9wZXJ0eS50b0xvd2VyQ2FzZSgpID09PSBcInByaW9yaXR5XCIpIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKGBPbGQgdGl0bGU6ICR7ZWxlbS50b2RvUHJpb3JpdHl9YCk7XG4gIC8vICAgICBlbGVtLnRvZG9Qcmlvcml0eSA9IHZhbHVlO1xuICAvLyAgICAgY29uc29sZS5sb2coYFVwZGF0ZWQgcHJpb3JpdHk6ICR7dmFsdWV9YCk7XG4gIC8vICAgfSBlbHNlIGlmIChwcm9wZXJ0eS50b0xvd2VyQ2FzZSgpID09PSBcInByb2plY3RcIikge1xuICAvLyAgICAgY29uc29sZS5sb2coYE9sZCB0aXRsZTogJHtlbGVtLnRvZG9Qcm9qZWN0fWApO1xuICAvLyAgICAgZWxlbS50b2RvUHJvamVjdCA9IHZhbHVlO1xuICAvLyAgICAgY29uc29sZS5sb2coYFVwZGF0ZWQgcHJvcGVydHk6ICR7dmFsdWV9YCk7XG4gIC8vICAgfVxuICAvLyAgIGNvbnNvbGUubG9nKGBGdWxsIGRldGFpbHM6IFwiJHtlbGVtLnRpdGxlfVwiIHRpdGxlYCk7XG4gIC8vIH0sXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgVG9kbywgdGFza0ludGVyZmFjZSB9IGZyb20gXCIuL3RvZG9zTWFuaXB1bGF0aW9uc1wiO1xuaW1wb3J0IHsgUHJvamVjdCwgcHJvamVjdEludGVyZmFjZSB9IGZyb20gXCIuL3Byb2plY3RNYW5hZ2VtZW50XCI7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBhcHBlbmRFbGVtZW50IH0gZnJvbSBcIi4vc2VjdGlvbldpdGhEb21cIjtcblxuLy8gU2ltaWxhciBzZWN0aW9ucyB3aXRoIHN0eWxlcyBhcmUgZ3JvdXBlZCBkaWZmZXJlbnQgZmlsZXNcbmltcG9ydCBcIi4vbWFpbi5jc3NcIjtcbmltcG9ydCBcIi4vaW5ib3gtYmxvY2suY3NzXCI7XG5pbXBvcnQgXCIuL3Byb2plY3QtYmxvY2suY3NzXCI7XG5pbXBvcnQgXCIuL3RvZG8tYmxvY2suY3NzXCI7XG5cbi8vIENyZWF0ZSB0aGUgbWFpbiBsYXlvdXRcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5jb25zdCBpbmJveEJsb2NrID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImluYm94LWRpdlwiLCBcIlwiKTtcbmNvbnN0IHByb2plY3RCbG9jayA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJwcm9qZWN0LWRpdlwiLCBcIlwiKTtcbmNvbnN0IHRvZG9CbG9jayA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0b2RvLWRpdlwiLCBcIlwiKTtcblxuYXBwZW5kRWxlbWVudChjb250ZW50LCBpbmJveEJsb2NrKTtcbmFwcGVuZEVsZW1lbnQoY29udGVudCwgcHJvamVjdEJsb2NrKTtcbmFwcGVuZEVsZW1lbnQoY29udGVudCwgdG9kb0Jsb2NrKTtcblxuLy8gRGVmYXVsdCBibG9ja1xuY29uc3QgaW5ib3ggPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiYnV0dG9uLWluYm94XCIsIFwiaW5ib3hcIik7XG5pbmJveC5kaXNhYmxlZCA9IHRydWU7XG5pbmJveC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbmNvbnN0IHRvZGF5ID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcImJ1dHRvbi10b2RheVwiLCBcInRvZGF5XCIpO1xuY29uc3QgdXBjb21pbmcgPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiYnV0dG9uLXVwY29taW5nXCIsIFwidXBjb21pbmdcIik7XG5cbmFwcGVuZEVsZW1lbnQoaW5ib3hCbG9jaywgaW5ib3gpO1xuYXBwZW5kRWxlbWVudChpbmJveEJsb2NrLCB0b2RheSk7XG5hcHBlbmRFbGVtZW50KGluYm94QmxvY2ssIHVwY29taW5nKTtcblxuLy8gRm9yIG5vdyB0byBhbGxvdyB0YXNrL3Byb2plY3QgY3JlYXRpb25cbmNvbnN0IGNyZWF0ZVRhc2tCdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiY3JlYXRlLXRhc2tzXCIsIFwiQ3JlYXRlIHRhc2tcIik7XG5jb25zdCBjcmVhdGVQcm9qZWN0QnV0dG9uID0gY3JlYXRlRWxlbWVudChcbiAgXCJidXR0b25cIixcbiAgXCJjcmVhdGUtcHJvamVjdHNcIixcbiAgXCJDcmVhdGUgcHJvamVjdFwiXG4pO1xuY29uc3QgZGlzcGxheUZvclRhc2tzID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImRpc3BsYXktdGFza3NcIiwgXCJcIik7XG5cbmFwcGVuZEVsZW1lbnQodG9kb0Jsb2NrLCBjcmVhdGVUYXNrQnV0dG9uKTtcbmFwcGVuZEVsZW1lbnQodG9kb0Jsb2NrLCBjcmVhdGVQcm9qZWN0QnV0dG9uKTtcbmFwcGVuZEVsZW1lbnQodG9kb0Jsb2NrLCBkaXNwbGF5Rm9yVGFza3MpO1xuXG4vLyBTZWN0aW9uIGNvbnRhaW5pbmcgcHJvZ3JhbSBsb2dpY1xuLy8gTWFpbiBhcnJheSB3aGVyZSB0YXNrcyBhcmUgc3RvcmVkXG5sZXQgbWFpblN0b3JhZ2UgPSBbXTtcbmNvbnNvbGUubG9nKFwiTWFpbiBzdG9yYWdlOlwiKTtcbmNvbnNvbGUubG9nKG1haW5TdG9yYWdlKTtcbi8vIFN0b3JlIHByb2plY3RzXG5sZXQgcHJvamVjdFN0b3JhZ2UgPSBbXTtcbmNvbnNvbGUubG9nKFwiUHJvamVjdCBzdG9yYWdlOlwiKTtcbmNvbnNvbGUubG9nKHByb2plY3RTdG9yYWdlKTtcblxuLy8gVGFzayBjcmVhdGlvbjpcbi8vIDEpIENyZWF0ZSBhIHRvZG8gZGlyZWN0bHkgaW4gYSB0YXNrXG5jb25zdCBjcmVhdGVUYXNrSW5zaWRlUHJvamVjdCA9IGNyZWF0ZUVsZW1lbnQoXG4gIFwiYnV0dG9uXCIsXG4gIFwiY3JlYXRlLXRhc2stZGlyZWN0bHlcIixcbiAgXCIrXCJcbik7XG5hcHBlbmRFbGVtZW50KHRvZG9CbG9jaywgY3JlYXRlVGFza0luc2lkZVByb2plY3QpO1xuY3JlYXRlVGFza0luc2lkZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVRvZG8pO1xuXG4vLyAyKSBDcmVhdGUgYSB0b2RvIGdsb2JhbGx5IC0gcHJvamVjdCBuYW1lIGlzIHJlcXVpcmVkISEhXG5jcmVhdGVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVUb2RvKTtcblxuZnVuY3Rpb24gY3JlYXRlVG9kbyhlKSB7XG4gIC8vIENyZWF0ZSBhIHRhc2sgbG9jYWxseSBpbnNpZGUgdGhlIGNob3NlbiB0YXNrXG4gIGNvbnN0IGRpcmVjdENyZWF0aW9uID0gZS50YXJnZXQuY2xvc2VzdChcIi5jcmVhdGUtdGFzay1kaXJlY3RseVwiKTtcbiAgbGV0IHByb2plY3Q7XG5cbiAgaWYgKGRpcmVjdENyZWF0aW9uKSB7XG4gICAgY29uc3QgY3VycmVudGx5Q2hvc2VuUHJvamVjdCA9XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uW2Rpc2FibGVkXVwiKS50ZXh0Q29udGVudDtcbiAgICBwcm9qZWN0ID0gY3VycmVudGx5Q2hvc2VuUHJvamVjdDtcbiAgfSBlbHNlIHtcbiAgICBwcm9qZWN0ID0gcHJvbXB0KFwiUHJvamVjdD9cIiwgXCJcIik7XG4gICAgLy8gRGVmYXVsdCBwcm9qZWN0LCB0aGVyZSBhcmUgbm8gY3VzdG9tIHByb2plY3RzIHlldFxuICAgIGlmIChwcm9qZWN0U3RvcmFnZS5sZW5ndGggPT09IDApIHtcbiAgICAgIGFsZXJ0KFxuICAgICAgICBcIllvdSBoYXZlIG5vdCBjcmVhdGVkIGFueSBwcm9qZWN0IHlldC4gWW91ciB0YXNrcyBhcmUgcHV0IGludG8gaW5ib3hcIlxuICAgICAgKTtcbiAgICAgIHByb2plY3QgPSBcImluYm94XCI7XG4gICAgfVxuICB9XG5cbiAgbGV0IHRpdGxlID0gcHJvbXB0KFwiVGl0bGVcIiwgXCJcIik7XG4gIGxldCBwcmlvcml0eSA9IHByb21wdChcIlByaW9yaXR5XCIsIFwiXCIpO1xuXG4gIGNvbnN0IHRhc2sgPSBuZXcgVG9kbyhwcm9qZWN0LCB0aXRsZSwgcHJpb3JpdHkpO1xuICBtYWluU3RvcmFnZSA9IHRhc2tJbnRlcmZhY2UuYWRkKHRhc2spO1xuICBjb25zb2xlLmxvZyhtYWluU3RvcmFnZSk7XG5cbiAgdXBkYXRlVGFza0Rpc3BsYXkoKTtcbn1cblxuLy8gRGlzcGxheSBhbGwgdG9kb3MgaW4gYSBwcm9qZWN0XG5pbmJveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheVRoaXNQcm9qZWN0VGFza3MpO1xucHJvamVjdEJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5VGhpc1Byb2plY3RUYXNrcyk7XG5cbmZ1bmN0aW9uIGRpc3BsYXlUaGlzUHJvamVjdFRhc2tzKGUpIHtcbiAgLy8gQ2xpY2sgb2NjdXJzIG9uIHRoZSBpbnNpZGUgb2YgYSBidXR0b25cbiAgY29uc3QgYnRuID0gZS50YXJnZXQuY2xvc2VzdChcImJ1dHRvblwiKTtcbiAgaWYgKCFidG4pIHJldHVybjtcblxuICBsZXQgZGlzYWJsZWRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvbi5wcm9qZWN0XCIpO1xuICBkaXNhYmxlZEJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiAoYnRuLmRpc2FibGVkID0gZmFsc2UpKTtcblxuICBidG4uZGlzYWJsZWQgPSB0cnVlO1xuXG4gIGNvbnN0IHByb2plY3ROYW1lID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gIGdlbmVyYXRlTGlzdE9mVGFza3MocHJvamVjdE5hbWUpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUYXNrRGlzcGxheSgpIHtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uW2Rpc2FibGVkXVwiKS50ZXh0Q29udGVudDtcblxuICBnZW5lcmF0ZUxpc3RPZlRhc2tzKHByb2plY3ROYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVMaXN0T2ZUYXNrcyhwcm9qZWN0KSB7XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gdGFza0ludGVyZmFjZS5maW5kQWxsKHByb2plY3QpO1xuICAvLyBDbGVhciB0aGUgdG9kbyBibG9jayBub3QgdG8gZHVwbGljYXRlIGFwcGVuZGVkIGVsZW1lbnRzXG4gIGRpc3BsYXlGb3JUYXNrcy5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRQcm9qZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdGFza0RpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0YXNrLWRpdlwiLCBcIlwiKTtcbiAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgY3VycmVudFByb2plY3RbaV0uaWQpO1xuICAgIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJyZW1vdmUtdGFza1wiLCBcIlhcIik7XG4gICAgY29uc3QgY2hlY2tMaXN0ID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIsIFwiY2hlY2stYm94XCIsIFwiXCIpO1xuICAgIGNoZWNrTGlzdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgY29uc3QgdGl0bGVQYXJhID0gY3VycmVudFByb2plY3RbaV0udG9kb1RpdGxlO1xuICAgIGNvbnN0IHByb2plY3RQYXJhID0gY3VycmVudFByb2plY3RbaV0udG9kb1Byb2plY3Q7XG4gICAgY29uc3QgcHJpb3JpdHlQYXJhID0gY3VycmVudFByb2plY3RbaV0udG9kb1ByaW9yaXR5O1xuXG4gICAgYXBwZW5kRWxlbWVudChkaXNwbGF5Rm9yVGFza3MsIHRhc2tEaXYpO1xuICAgIGFwcGVuZEVsZW1lbnQodGFza0RpdiwgcmVtb3ZlQnV0dG9uKTtcbiAgICBhcHBlbmRFbGVtZW50KHRhc2tEaXYsIGNoZWNrTGlzdCk7XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xuICAgICAgbGV0IHBhcmE7XG4gICAgICBzd2l0Y2ggKGopIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHBhcmEgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInRhc2stdGl0bGVcIiwgYFRpdGxlOiAke3RpdGxlUGFyYX1gKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHBhcmEgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInRhc2stcHJvamVjdFwiLCBgUHJvamVjdDogJHtwcm9qZWN0UGFyYX1gKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHBhcmEgPSBjcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICBcInRhc2stcHJpb3JpdHlcIixcbiAgICAgICAgICAgIGBQcmlvcml0eTogJHtwcmlvcml0eVBhcmF9YFxuICAgICAgICAgICk7XG4gICAgICB9XG4gICAgICBhcHBlbmRFbGVtZW50KHRhc2tEaXYsIHBhcmEpO1xuICAgIH1cblxuICAgIC8vIEhpZ2hsaWdodCBwcmlvcml0eSBsZXZlbHMgZGlmZmVyZW50bHlcbiAgICBpZiAocHJpb3JpdHlQYXJhID09PSBcIjFcIikge1xuICAgICAgY2hlY2tMaXN0LnN0eWxlLmJvcmRlciA9IFwiM3B4IHNvbGlkIHJlZFwiO1xuICAgICAgY2hlY2tMaXN0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDIxNCwgMTExLCAxMTEpXCI7XG4gICAgfSBlbHNlIGlmIChwcmlvcml0eVBhcmEgPT09IFwiMlwiKSB7XG4gICAgICBjaGVja0xpc3Quc3R5bGUuYm9yZGVyID0gXCIzcHggc29saWQgeWVsbG93XCI7XG4gICAgICBjaGVja0xpc3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMTczLCAxNzMsIDc5KVwiO1xuICAgIH0gZWxzZSBpZiAocHJpb3JpdHlQYXJhID09PSBcIjNcIikge1xuICAgICAgY2hlY2tMaXN0LnN0eWxlLmJvcmRlciA9IFwiM3B4IHNvbGlkIGJsdWVcIjtcbiAgICAgIGNoZWNrTGlzdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigxMTcsIDExNywgMTk5KVwiO1xuICAgIH1cbiAgfVxufVxuXG4vLyBSZW1vdmUgYSB0YXNrXG5kaXNwbGF5Rm9yVGFza3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZVRhc2spO1xuXG5mdW5jdGlvbiByZW1vdmVUYXNrKGUpIHtcbiAgY29uc3QgYnRuID0gZS50YXJnZXQuY2xvc2VzdChcImJ1dHRvblwiKTtcbiAgaWYgKCFidG4pIHJldHVybjtcblxuICBjb25zdCBzcGVjaWZpY1Rhc2sgPSBlLnRhcmdldC5jbG9zZXN0KFwiW2RhdGEtaWRdXCIpO1xuICBjb25zdCBpZCA9IHNwZWNpZmljVGFzay5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpO1xuXG4gIHNwZWNpZmljVGFzay5yZW1vdmUoKTtcbiAgbWFpblN0b3JhZ2UgPSB0YXNrSW50ZXJmYWNlLnJlbW92ZShpZCk7XG4gIGNvbnNvbGUubG9nKG1haW5TdG9yYWdlKTtcbn1cblxuLy8gQ29tcGxldGUgYSB0YXNrXG5kaXNwbGF5Rm9yVGFza3MuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBjb21wbGV0ZVRhc2spO1xuXG5mdW5jdGlvbiBjb21wbGV0ZVRhc2soZSkge1xuICBsZXQgdGFza1N0YXR1cyA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gIGlmICh0YXNrU3RhdHVzID09PSB0cnVlKSB7XG4gICAgY29uc3Qgc3RyaWtlVGhyb3VnaFBhcmEgPSBlLnRhcmdldC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJwXCIpO1xuICAgIHN0cmlrZVRocm91Z2hQYXJhLmZvckVhY2goXG4gICAgICAocGFyYSkgPT4gKHBhcmEuc3R5bGUudGV4dERlY29yYXRpb24gPSBcImxpbmUtdGhyb3VnaFwiKVxuICAgICk7XG4gICAgZS50YXJnZXQuZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNUYXNrID0gZS50YXJnZXQuY2xvc2VzdChcIltkYXRhLWlkXVwiKTtcbiAgICBjb25zdCBpZCA9IHNwZWNpZmljVGFzay5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc3BlY2lmaWNUYXNrLnJlbW92ZSgpO1xuICAgICAgbWFpblN0b3JhZ2UgPSB0YXNrSW50ZXJmYWNlLnJlbW92ZShpZCk7XG4gICAgICBjb25zb2xlLmxvZyhtYWluU3RvcmFnZSk7XG4gICAgfSwgMzAwKTtcbiAgfVxufVxuLy8gQ3JlYXRlIGEgcHJvamVjdFxuY3JlYXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlUHJvamVjdCk7XG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xuICBjb25zdCB0aXRsZSA9IHByb21wdChcIlByb2plY3QgbmFtZT9cIiwgXCJcIik7XG4gIGlmICh0aXRsZSA9PT0gXCJcIiB8fCAhdGl0bGUpIHJldHVybjtcblxuICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUpO1xuICBwcm9qZWN0U3RvcmFnZSA9IHByb2plY3RJbnRlcmZhY2UuYWRkKHByb2plY3QpO1xuXG4gIGNvbnN0IGRpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJwcm9qZWN0LXRpdGxlLWRpdlwiLCBcIlwiKTtcbiAgY29uc3QgYnRuID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcImN1c3RvbS1wcm9qZWN0LWRpdlwiLCB0aXRsZSk7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgY29uc3Qgc3BhbiA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwicmVtb3ZlLXByb2plY3RcIiwgXCJYXCIpO1xuXG4gIGFwcGVuZEVsZW1lbnQoZGl2LCBidG4pO1xuICBhcHBlbmRFbGVtZW50KGRpdiwgc3Bhbik7XG4gIGFwcGVuZEVsZW1lbnQocHJvamVjdEJsb2NrLCBkaXYpO1xuXG4gIGxldCBkaXNhYmxlZEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uLnByb2plY3RcIik7XG4gIGRpc2FibGVkQnV0dG9ucy5mb3JFYWNoKChidG4pID0+IChidG4uZGlzYWJsZWQgPSBmYWxzZSkpO1xuICBidG4uZGlzYWJsZWQgPSB0cnVlO1xuICB1cGRhdGVUYXNrRGlzcGxheSgpO1xufVxuXG4vLyBSZW1vdmUgYSBwcm9qZWN0XG5wcm9qZWN0QmxvY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZVByb2plY3QpO1xuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChlKSB7XG4gIGNvbnN0IHNwYW4gPSBlLnRhcmdldC5jbG9zZXN0KFwic3BhblwiKTtcbiAgaWYgKCFzcGFuKSByZXR1cm47XG5cbiAgY29uc3QgcHJvamVjdCA9IHNwYW4ucHJldmlvdXNFbGVtZW50U2libGluZy50ZXh0Q29udGVudDtcbiAgY29uc3Qgd2FybmluZyA9IGNvbmZpcm0oXCJyZW1vdmUgdGhpcyBwcm9qZWN0IHdpdGggYWxsIHRhc2tzIHJlbGF0ZWQgdG8gaXQ/XCIpO1xuICBpZiAod2FybmluZykge1xuICAgIC8vIENsZWFyIGFycmF5IGluIGFuIG9iamVjdCBmcm9tIHdoaWNoIEkgdGFrZSBhbGwgaW5mbyBhbmQgYXNzaWduIHRvIG1haW5TdG9yYWdlXG4gICAgdGFza0ludGVyZmFjZS50b2RvcyA9IHByb2plY3RJbnRlcmZhY2UucmVtb3ZlQXNzb2NpYXRlZFRhc2tzKFxuICAgICAgcHJvamVjdCxcbiAgICAgIHRhc2tJbnRlcmZhY2UudG9kb3NcbiAgICApO1xuICAgIG1haW5TdG9yYWdlID0gdGFza0ludGVyZmFjZS50b2RvcztcbiAgICBwcm9qZWN0U3RvcmFnZSA9IHByb2plY3RJbnRlcmZhY2UucmVtb3ZlKHByb2plY3QpO1xuICAgIHNwYW4ucGFyZW50Tm9kZS5yZW1vdmUoKTtcblxuICAgIC8vIFdoaWxlIHJlbW92aW5nIGFuIGVsZW1lbnQgZnJvbSBET00gYW5kIG5lZWRpbmcgdG8gcmVyZW5kZXIgY29udGVudCwgaXQgd2lsbCBhdXRvbWF0aWNhbGx5IGdvIGJhY2sgdG8gaW5ib3ggcHJvamVjdFxuICAgIGRpc3BsYXlGb3JUYXNrcy5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICBpbmJveC5kaXNhYmxlZCA9IHRydWU7XG4gICAgdXBkYXRlVGFza0Rpc3BsYXkoKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9