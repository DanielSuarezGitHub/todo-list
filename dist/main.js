/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  box-sizing: border-box;\n  font-size: inherit;\n  font-family: \"Roboto\", sans-serif;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-rows: 90px 1fr;\n  grid-template-columns: 250px 1fr;\n}\n\n.header {\n  font-size: 20px;\n  grid-column: 1 / 3;\n  background-color: #2e3440;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding-left: 60px;\n  color: #eceff4;\n  font-size: 2.5rem;\n}\n\nheader::before {\n  content: \"✓\";\n  margin: 0px 20px;\n  padding-top: 5px;\n  font-size: 3rem;\n}\n\n.sidebar {\n  grid-row: 2 / -2;\n  background-color: #3b4252;\n}\n\n.main {\n  background-color: rgba(26, 211, 218, 0.15);\n  box-shadow: inset 0px 6px 15px -4px #000000;\n}\n\n.sidebar img {\n  height: 26px;\n  width: 26px;\n}\n\n.sidebar {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  box-shadow: inset 2px 6px 9px -4px #000000;\n  gap: 30px;\n}\n\n.sidebar > div {\n  display: flex;\n  color: #eceff4;\n  gap: 10px;\n  font-size: 1.2rem;\n}\n\n.sidebar div:first-child {\n  padding-top: 25%;\n}\n\nli {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\nli > img:hover {\n  cursor: pointer;\n}\n\n.sidebar ul {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  height: 200px;\n  overflow: scroll;\n  width: 100%;\n  padding-left: 36%;\n  overflow-x: hidden;\n  margin-top: -20px;\n}\n\n.projectslist {\n  width: 100%;\n}\n\n::-webkit-scrollbar {\n  display: none;\n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 70px;\n  min-width: none;\n  min-width: 600px;\n}\n\n.main h2 {\n  font-size: 2.7rem;\n}\n\n.projects button {\n  background: 0;\n  border: 0;\n  font-size: 2rem;\n  color: red;\n}\n\n.projects button:hover {\n  color: #54e02a;\n  transition: 0.4s ease;\n}\n\n.title {\n  display: flex;\n  gap: 50px;\n  align-items: center;\n}\n\n.addtask {\n  margin-top: 2%;\n  border: 2px solid black;\n  border-radius: 12px;\n  width: clamp(300px, 50%, 800px);\n  font-size: 1.4rem;\n  display: flex;\n  align-items: center;\n  padding: 8px;\n  background-color: #000000;\n  color: white;\n}\n\n.addtask > span {\n  text-align: center;\n  margin-right: 4%;\n  width: 100%;\n}\n\n.addtask > button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  font-size: 1.4rem;\n  border: 0;\n  background-color: #000000;\n  color: white;\n  border: 2px solid white;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n.tasks {\n  margin-top: 20px;\n  height: 70vh;\n  width: clamp(300px, 50%, 800px);\n  display: flex;\n  gap: 20px;\n  flex-direction: column;\n  align-items: center;\n}\n\n.tasks img {\n  height: 24px;\n  width: 24px;\n}\n\n.tasks img:hover {\n  cursor: pointer;\n}\n\n.todo {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  background-color: white;\n  color: black;\n  border: 2px solid black;\n  padding: 8px;\n  border-radius: 12px;\n}\n\n.todo span:first-child {\n  font-size: 1.4rem;\n  margin-left: 10px;\n}\n\n.todo > * {\n  padding: 0;\n}\n\n.todo span:nth-child(2) {\n  margin-top: 3px;\n  margin-left: auto;\n  margin-right: 30px;\n}\n\n.todo button {\n  border: 0;\n  border-radius: 50%;\n  color: red;\n  font-size: 2rem;\n  background-color: white;\n  padding-top: 5px;\n  margin-bottom: -5px;\n}\n\n.todo > div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n\n.todo button:hover {\n  color: #54e02a;\n  transition: 0.4s ease;\n}\n\nform div {\n  display: flex;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 30px;\n}\n\ndialog {\n  border-radius: 12px;\n  background-color: #2e3440;\n  color: #eceff4;\n  border: 1px solid black;\n  padding: 40px;\n  animation: 0.5s fadeIn;\n}\n\ndialog h2 {\n  text-align: center;\n}\n\n.close {\n  background: 0;\n  border: 0;\n  font-size: 32px;\n  color: #eceff4;\n  position: absolute;\n  top: 10px;\n  left: 290px;\n}\n\n[type*=\"text\"],\n[type*=\"number\"] {\n  height: 50px;\n  width: 250px;\n  border-radius: 12px;\n  border: 0;\n  font-size: 24px;\n}\n\n[type*=\"checkbox\"] {\n  transform: scale(2);\n}\n\n.input {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\nform div:nth-of-type(2) {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  width: 100%;\n  justify-content: center;\n  gap: 20px;\n  font-size: 24px;\n}\n\ninput::placeholder {\n  text-align: center;\n  font-size: 24px;\n  opacity: 40%;\n}\n\nform > legend {\n  font-size: 36px;\n  padding-bottom: 10px;\n}\n\n[type*=\"submit\"] {\n  padding: 10px 40px;\n  font-size: 30px;\n  background-color: #5e81ac;\n  border: 0;\n  border-radius: 12px;\n}\n\n[type*=\"submit\"]:hover {\n  opacity: 80%;\n}\n\ndialog::backdrop {\n  background: black;\n  opacity: 0.6;\n}\n\n[type=\"date\"] {\n  background: #fff\n    url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)\n    97% 50% no-repeat;\n}\n[type=\"date\"]::-webkit-inner-spin-button {\n  display: none;\n}\n[type=\"date\"]::-webkit-calendar-picker-indicator {\n  opacity: 0;\n}\n\n/* custom styles */\n\ninput {\n  border: 1px solid #c4c4c4;\n  border-radius: 5px;\n  background-color: #fff;\n  padding: 3px 5px;\n  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.1);\n  width: 190px;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\ndialog {\n  margin: 47vw;\n  margin-top: 50vh;\n}\n\ndialog::backdrop {\n  opacity: 0.8;\n  color: #000000;\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  box-sizing: border-box;\n  font-size: inherit;\n  font-family: \"Roboto\", sans-serif;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-rows: 90px 1fr;\n  grid-template-columns: 250px 1fr;\n}\n\n.header {\n  font-size: 20px;\n  grid-column: 1 / 3;\n  background-color: #2e3440;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding-left: 60px;\n  color: #eceff4;\n  font-size: 2.5rem;\n}\n\nheader::before {\n  content: \"✓\";\n  margin: 0px 20px;\n  padding-top: 5px;\n  font-size: 3rem;\n}\n\n.sidebar {\n  grid-row: 2 / -2;\n  background-color: #3b4252;\n}\n\n.main {\n  background-color: rgba(26, 211, 218, 0.15);\n  box-shadow: inset 0px 6px 15px -4px #000000;\n}\n\n.sidebar img {\n  height: 26px;\n  width: 26px;\n}\n\n.sidebar {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  box-shadow: inset 2px 6px 9px -4px #000000;\n  gap: 30px;\n}\n\n.sidebar > div {\n  display: flex;\n  color: #eceff4;\n  gap: 10px;\n  font-size: 1.2rem;\n}\n\n.sidebar div:first-child {\n  padding-top: 25%;\n}\n\nli {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\nli > img:hover {\n  cursor: pointer;\n}\n\n.sidebar ul {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  height: 200px;\n  overflow: scroll;\n  width: 100%;\n  padding-left: 36%;\n  overflow-x: hidden;\n  margin-top: -20px;\n}\n\n.projectslist {\n  width: 100%;\n}\n\n::-webkit-scrollbar {\n  display: none;\n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 70px;\n  min-width: none;\n  min-width: 600px;\n}\n\n.main h2 {\n  font-size: 2.7rem;\n}\n\n.projects button {\n  background: 0;\n  border: 0;\n  font-size: 2rem;\n  color: red;\n}\n\n.projects button:hover {\n  color: #54e02a;\n  transition: 0.4s ease;\n}\n\n.title {\n  display: flex;\n  gap: 50px;\n  align-items: center;\n}\n\n.addtask {\n  margin-top: 2%;\n  border: 2px solid black;\n  border-radius: 12px;\n  width: clamp(300px, 50%, 800px);\n  font-size: 1.4rem;\n  display: flex;\n  align-items: center;\n  padding: 8px;\n  background-color: #000000;\n  color: white;\n}\n\n.addtask > span {\n  text-align: center;\n  margin-right: 4%;\n  width: 100%;\n}\n\n.addtask > button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  font-size: 1.4rem;\n  border: 0;\n  background-color: #000000;\n  color: white;\n  border: 2px solid white;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n.tasks {\n  margin-top: 20px;\n  height: 70vh;\n  width: clamp(300px, 50%, 800px);\n  display: flex;\n  gap: 20px;\n  flex-direction: column;\n  align-items: center;\n}\n\n.tasks img {\n  height: 24px;\n  width: 24px;\n}\n\n.tasks img:hover {\n  cursor: pointer;\n}\n\n.todo {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  background-color: white;\n  color: black;\n  border: 2px solid black;\n  padding: 8px;\n  border-radius: 12px;\n}\n\n.todo span:first-child {\n  font-size: 1.4rem;\n  margin-left: 10px;\n}\n\n.todo > * {\n  padding: 0;\n}\n\n.todo span:nth-child(2) {\n  margin-top: 3px;\n  margin-left: auto;\n  margin-right: 30px;\n}\n\n.todo button {\n  border: 0;\n  border-radius: 50%;\n  color: red;\n  font-size: 2rem;\n  background-color: white;\n  padding-top: 5px;\n  margin-bottom: -5px;\n}\n\n.todo > div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n\n.todo button:hover {\n  color: #54e02a;\n  transition: 0.4s ease;\n}\n\nform div {\n  display: flex;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 30px;\n}\n\ndialog {\n  border-radius: 12px;\n  background-color: #2e3440;\n  color: #eceff4;\n  border: 1px solid black;\n  padding: 40px;\n  animation: 0.5s fadeIn;\n}\n\ndialog h2 {\n  text-align: center;\n}\n\n.close {\n  background: 0;\n  border: 0;\n  font-size: 32px;\n  color: #eceff4;\n  position: absolute;\n  top: 10px;\n  left: 290px;\n}\n\n[type*=\"text\"],\n[type*=\"number\"] {\n  height: 50px;\n  width: 250px;\n  border-radius: 12px;\n  border: 0;\n  font-size: 24px;\n}\n\n[type*=\"checkbox\"] {\n  transform: scale(2);\n}\n\n.input {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\nform div:nth-of-type(2) {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  width: 100%;\n  justify-content: center;\n  gap: 20px;\n  font-size: 24px;\n}\n\ninput::placeholder {\n  text-align: center;\n  font-size: 24px;\n  opacity: 40%;\n}\n\nform > legend {\n  font-size: 36px;\n  padding-bottom: 10px;\n}\n\n[type*=\"submit\"] {\n  padding: 10px 40px;\n  font-size: 30px;\n  background-color: #5e81ac;\n  border: 0;\n  border-radius: 12px;\n}\n\n[type*=\"submit\"]:hover {\n  opacity: 80%;\n}\n\ndialog::backdrop {\n  background: black;\n  opacity: 0.6;\n}\n\n[type=\"date\"] {\n  background: #fff\n    url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)\n    97% 50% no-repeat;\n}\n[type=\"date\"]::-webkit-inner-spin-button {\n  display: none;\n}\n[type=\"date\"]::-webkit-calendar-picker-indicator {\n  opacity: 0;\n}\n\n/* custom styles */\n\ninput {\n  border: 1px solid #c4c4c4;\n  border-radius: 5px;\n  background-color: #fff;\n  padding: 3px 5px;\n  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.1);\n  width: 190px;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\ndialog {\n  margin: 47vw;\n  margin-top: 50vh;\n}\n\ndialog::backdrop {\n  opacity: 0.8;\n  color: #000000;\n}\n\n\n"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "project": () => (/* binding */ project),
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
let projects = []

class project {
    constructor(name) {
        this.name = name
        this.tasks = []
        this.id = projects.length
    }

    static addTask(name, date, id) {
        let index = projects[id].tasks.length
        projects[id].tasks.push({name: name, date: date, index: index})
    }



    static removeProject(index) {
        projects = projects.splice(index, 1)
    }
}



/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "showProject": () => (/* binding */ showProject),
/* harmony export */   "uiComponents": () => (/* binding */ uiComponents)
/* harmony export */ });
/* harmony import */ var _asset_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asset/trash-can-outline.svg */ "./src/asset/trash-can-outline.svg");
/* harmony import */ var _asset_pencil_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset/pencil.svg */ "./src/asset/pencil.svg");
/* harmony import */ var _asset_trashcanwhite_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asset/trashcanwhite.svg */ "./src/asset/trashcanwhite.svg");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./src/data.js");





class uiComponents {
  static createtask(name, date, index) {
    let todo = document.createElement("div");
    todo.classList.add(index);
    todo.classList.add("todo");
    let leftDiv = document.createElement("div");
    todo.appendChild(leftDiv);
    let completeButton = document.createElement("button");
    completeButton.textContent = "✓";
    completeButton.addEventListener("click", (e) => alert("test"));
    let taskName = document.createElement("span");
    taskName.textContent = `${name}`;
    leftDiv.appendChild(completeButton);
    leftDiv.appendChild(taskName);
    let due = document.createElement("span");
    due.textContent = `${date}`;
    due.classList.add("date");
    todo.appendChild(due);
    let edit = document.createElement("img");
    edit.src = _asset_pencil_svg__WEBPACK_IMPORTED_MODULE_1__;
    edit.addEventListener("click", (e) => alert("test"));
    let deletetask = document.createElement("img");
    deletetask.src = _asset_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_0__;
    deletetask.addEventListener("click", (e) => alert("test"));
    todo.appendChild(edit);
    todo.appendChild(deletetask);
    return todo;
  }
  static createproject(name, index) {
    index = index + 1;
    name.length > 10 ? (name = name.slice(0, 9) + "...") : (name = name);
    let project = document.createElement("li");
    let projectName = document.createElement("span");
    projectName.textContent = name;
    projectName.addEventListener("click", () => showProject(index));
    project.id = index;
    let deleteProject = document.createElement("img");
    deleteProject.addEventListener("click", () => deleteThisProject(index))
    deleteProject.src = _asset_trashcanwhite_svg__WEBPACK_IMPORTED_MODULE_2__;
    project.appendChild(projectName);
    project.appendChild(deleteProject);
    return project;
  }
}

/* Run on deletethisProject */
function renderHome() {

}



function render(projects) {
  let projectList = document.querySelector(".myProjects");
  projectList.innerHTML = "";
  for (let i = 0; i < projects.length; i++) {
    projectList.appendChild(uiComponents.createproject(projects[i].name, i));
  }
}

function deleteThisProject(index) {
    _data__WEBPACK_IMPORTED_MODULE_3__.project.removeProject(index);
    render(_data__WEBPACK_IMPORTED_MODULE_3__.projects);
}

function showProject(index) {
    index = index - 1
    const tasksList = document.querySelector('.tasks')
    let current = document.querySelector('.current')
    current.id = index
    current.textContent = _data__WEBPACK_IMPORTED_MODULE_3__.projects[index].name
    tasksList.innerHTML = ''
    for (let i = 0; i < _data__WEBPACK_IMPORTED_MODULE_3__.projects[index].tasks.length; i++) {
        tasksList.appendChild(uiComponents.createtask(_data__WEBPACK_IMPORTED_MODULE_3__.projects[index].tasks[i].name, _data__WEBPACK_IMPORTED_MODULE_3__.projects[index].tasks[i].date, i))
    }
}







/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");





function createProject(e) {
    e.preventDefault()
    for (let i = 0; i < _data__WEBPACK_IMPORTED_MODULE_0__.projects.length; i++) {
        if (_data__WEBPACK_IMPORTED_MODULE_0__.projects[i].name == forms.projectFormName.value) {
            alert('this project alreadt exists')
            return
        }
    }
    _data__WEBPACK_IMPORTED_MODULE_0__.projects.push(new _data__WEBPACK_IMPORTED_MODULE_0__.project(forms.projectFormName.value))
    formControl.closeFormProj()
    ;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.render)(_data__WEBPACK_IMPORTED_MODULE_0__.projects)
}

function createTask(e) {
    e.preventDefault()
    let id = document.querySelector('.current').id
    _data__WEBPACK_IMPORTED_MODULE_0__.project.addTask(forms.taskFormName.value, forms.taskFormDate.value, id)
    showTodo()
    formControl.closeFormTask()
}

function showTodo() {
    let id = document.querySelector('.current').id
    const tasksList = document.querySelector('.tasks')
    for (let i = 0; i < _data__WEBPACK_IMPORTED_MODULE_0__.projects[id].tasks.length; i++) {
        tasksList.appendChild(_dom__WEBPACK_IMPORTED_MODULE_1__.uiComponents.createtask(_data__WEBPACK_IMPORTED_MODULE_0__.projects[id].tasks[i].name, _data__WEBPACK_IMPORTED_MODULE_0__.projects[id].tasks[i].date, i))
    }
}

const formControl = (() => {
    function openFormProj() {
        const myModal = document.querySelector('.NewProj')
        myModal.showModal()
    }
    
    function closeFormProj() {
        const myModal = document.querySelector('.NewProj')
        myModal.close()
    }

    function openFormTask() {
        const myModal = document.querySelector('.NewTask')
        myModal.showModal()
    }
    
    function closeFormTask() {
        const myModal = document.querySelector('.NewTask')
        myModal.close()
    }

    return {closeFormProj, openFormProj, openFormTask, closeFormTask}
})()






const forms = (() => {
    const projectForm = document.querySelector('[data-new-proj-form]')
    const taskForm = document.querySelector('[data-new-task-form]')
    const projectFormName = document.querySelector('[data-new-proj-name]')
    const taskFormName = document.querySelector('[data-new-task-name]')
    const taskFormDate = document.querySelector('[data-new-task-date]')
    const openProjForm = document.querySelector('.projects button')
    const openTaskForm = document.querySelector('#addtask')
    openTaskForm.addEventListener('click', formControl.openFormTask)
    taskForm.addEventListener('submit', createTask)
    openProjForm.addEventListener('click', formControl.openFormProj)
    projectForm.addEventListener('submit', createProject)
    return {projectFormName, taskFormName, taskFormDate}
})()


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./src/asset/pencil.svg":
/*!******************************!*\
  !*** ./src/asset/pencil.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d317290131028fe10cf.svg";

/***/ }),

/***/ "./src/asset/trash-can-outline.svg":
/*!*****************************************!*\
  !*** ./src/asset/trash-can-outline.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bcf8d6ff346603c8a51a.svg";

/***/ }),

/***/ "./src/asset/trashcanwhite.svg":
/*!*************************************!*\
  !*** ./src/asset/trashcanwhite.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aad3ad15a0aa053d7e2f.svg";

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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ "./src/form.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_form__WEBPACK_IMPORTED_MODULE_1__["default"]);

let tasks = document.querySelector('.tasks')
tasks.appendChild(_dom__WEBPACK_IMPORTED_MODULE_0__.uiComponents.createtask('Hello', '2007/22/22'))



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLE1BQU0sT0FBTyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssS0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWixDQUFDOzs7Ozs7O0FBT0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvRWY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWtDO0FBQ1I7QUFDTjs7O0FBR3BCLGlFQUFlLDZDQUFLOztBQUVwQjtBQUNBLGtCQUFrQix5REFBdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogOTBweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDFmcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUzNDQwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxuICBjb2xvcjogI2VjZWZmNDtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG5oZWFkZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi4pyTXFxcIjtcXG4gIG1hcmdpbjogMHB4IDIwcHg7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBncmlkLXJvdzogMiAvIC0yO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiNDI1MjtcXG59XFxuXFxuLm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMjExLCAyMTgsIDAuMTUpO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDZweCAxNXB4IC00cHggIzAwMDAwMDtcXG59XFxuXFxuLnNpZGViYXIgaW1nIHtcXG4gIGhlaWdodDogMjZweDtcXG4gIHdpZHRoOiAyNnB4O1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3gtc2hhZG93OiBpbnNldCAycHggNnB4IDlweCAtNHB4ICMwMDAwMDA7XFxuICBnYXA6IDMwcHg7XFxufVxcblxcbi5zaWRlYmFyID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBjb2xvcjogI2VjZWZmNDtcXG4gIGdhcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uc2lkZWJhciBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgcGFkZGluZy10b3A6IDI1JTtcXG59XFxuXFxubGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbmxpID4gaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNpZGViYXIgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1sZWZ0OiAzNiU7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBtYXJnaW4tdG9wOiAtMjBweDtcXG59XFxuXFxuLnByb2plY3RzbGlzdCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogNzBweDtcXG4gIG1pbi13aWR0aDogbm9uZTtcXG4gIG1pbi13aWR0aDogNjAwcHg7XFxufVxcblxcbi5tYWluIGgyIHtcXG4gIGZvbnQtc2l6ZTogMi43cmVtO1xcbn1cXG5cXG4ucHJvamVjdHMgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4ucHJvamVjdHMgYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjNTRlMDJhO1xcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hZGR0YXNrIHtcXG4gIG1hcmdpbi10b3A6IDIlO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgd2lkdGg6IGNsYW1wKDMwMHB4LCA1MCUsIDgwMHB4KTtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYWRkdGFzayA+IHNwYW4ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXJpZ2h0OiA0JTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYWRkdGFzayA+IGJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGJvcmRlcjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2tzIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBoZWlnaHQ6IDcwdmg7XFxuICB3aWR0aDogY2xhbXAoMzAwcHgsIDUwJSwgODAwcHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFza3MgaW1nIHtcXG4gIGhlaWdodDogMjRweDtcXG4gIHdpZHRoOiAyNHB4O1xcbn1cXG5cXG4udGFza3MgaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbn1cXG5cXG4udG9kbyBzcGFuOmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi50b2RvID4gKiB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4udG9kbyBzcGFuOm50aC1jaGlsZCgyKSB7XFxuICBtYXJnaW4tdG9wOiAzcHg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogMzBweDtcXG59XFxuXFxuLnRvZG8gYnV0dG9uIHtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAtNXB4O1xcbn1cXG5cXG4udG9kbyA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udG9kbyBidXR0b246aG92ZXIge1xcbiAgY29sb3I6ICM1NGUwMmE7XFxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XFxufVxcblxcbmZvcm0gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG5cXG5kaWFsb2cge1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTM0NDA7XFxuICBjb2xvcjogI2VjZWZmNDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogNDBweDtcXG4gIGFuaW1hdGlvbjogMC41cyBmYWRlSW47XFxufVxcblxcbmRpYWxvZyBoMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jbG9zZSB7XFxuICBiYWNrZ3JvdW5kOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgY29sb3I6ICNlY2VmZjQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwcHg7XFxuICBsZWZ0OiAyOTBweDtcXG59XFxuXFxuW3R5cGUqPVxcXCJ0ZXh0XFxcIl0sXFxuW3R5cGUqPVxcXCJudW1iZXJcXFwiXSB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogMjUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG5bdHlwZSo9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcXG59XFxuXFxuLmlucHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5mb3JtIGRpdjpudGgtb2YtdHlwZSgyKSB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbmlucHV0OjpwbGFjZWhvbGRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBvcGFjaXR5OiA0MCU7XFxufVxcblxcbmZvcm0gPiBsZWdlbmQge1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcblt0eXBlKj1cXFwic3VibWl0XFxcIl0ge1xcbiAgcGFkZGluZzogMTBweCA0MHB4O1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVlODFhYztcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxufVxcblxcblt0eXBlKj1cXFwic3VibWl0XFxcIl06aG92ZXIge1xcbiAgb3BhY2l0eTogODAlO1xcbn1cXG5cXG5kaWFsb2c6OmJhY2tkcm9wIHtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgb3BhY2l0eTogMC42O1xcbn1cXG5cXG5bdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gIGJhY2tncm91bmQ6ICNmZmZcXG4gICAgdXJsKGh0dHBzOi8vY2RuMS5pY29uZmluZGVyLmNvbS9kYXRhL2ljb25zL2NjX21vbm9faWNvbl9zZXQvYmxhY2tzLzE2eDE2L2NhbGVuZGFyXzIucG5nKVxcbiAgICA5NyUgNTAlIG5vLXJlcGVhdDtcXG59XFxuW3R5cGU9XFxcImRhdGVcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5bdHlwZT1cXFwiZGF0ZVxcXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLyogY3VzdG9tIHN0eWxlcyAqL1xcblxcbmlucHV0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjNGM0YzQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogM3B4IDVweDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICB3aWR0aDogMTkwcHg7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5kaWFsb2cge1xcbiAgbWFyZ2luOiA0N3Z3O1xcbiAgbWFyZ2luLXRvcDogNTB2aDtcXG59XFxuXFxuZGlhbG9nOjpiYWNrZHJvcCB7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBjb2xvcjogIzAwMDAwMDtcXG59XFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLDRCQUE0QjtFQUM1QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtB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b20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogOTBweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDFmcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUzNDQwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxuICBjb2xvcjogI2VjZWZmNDtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG5oZWFkZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi4pyTXFxcIjtcXG4gIG1hcmdpbjogMHB4IDIwcHg7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBncmlkLXJvdzogMiAvIC0yO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiNDI1MjtcXG59XFxuXFxuLm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMjExLCAyMTgsIDAuMTUpO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDZweCAxNXB4IC00cHggIzAwMDAwMDtcXG59XFxuXFxuLnNpZGViYXIgaW1nIHtcXG4gIGhlaWdodDogMjZweDtcXG4gIHdpZHRoOiAyNnB4O1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3gtc2hhZG93OiBpbnNldCAycHggNnB4IDlweCAtNHB4ICMwMDAwMDA7XFxuICBnYXA6IDMwcHg7XFxufVxcblxcbi5zaWRlYmFyID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBjb2xvcjogI2VjZWZmNDtcXG4gIGdhcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uc2lkZWJhciBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgcGFkZGluZy10b3A6IDI1JTtcXG59XFxuXFxubGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbmxpID4gaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNpZGViYXIgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1sZWZ0OiAzNiU7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBtYXJnaW4tdG9wOiAtMjBweDtcXG59XFxuXFxuLnByb2plY3RzbGlzdCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogNzBweDtcXG4gIG1pbi13aWR0aDogbm9uZTtcXG4gIG1pbi13aWR0aDogNjAwcHg7XFxufVxcblxcbi5tYWluIGgyIHtcXG4gIGZvbnQtc2l6ZTogMi43cmVtO1xcbn1cXG5cXG4ucHJvamVjdHMgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4ucHJvamVjdHMgYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjNTRlMDJhO1xcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hZGR0YXNrIHtcXG4gIG1hcmdpbi10b3A6IDIlO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgd2lkdGg6IGNsYW1wKDMwMHB4LCA1MCUsIDgwMHB4KTtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYWRkdGFzayA+IHNwYW4ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXJpZ2h0OiA0JTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYWRkdGFzayA+IGJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGJvcmRlcjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2tzIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBoZWlnaHQ6IDcwdmg7XFxuICB3aWR0aDogY2xhbXAoMzAwcHgsIDUwJSwgODAwcHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFza3MgaW1nIHtcXG4gIGhlaWdodDogMjRweDtcXG4gIHdpZHRoOiAyNHB4O1xcbn1cXG5cXG4udGFza3MgaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbn1cXG5cXG4udG9kbyBzcGFuOmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi50b2RvID4gKiB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4udG9kbyBzcGFuOm50aC1jaGlsZCgyKSB7XFxuICBtYXJnaW4tdG9wOiAzcHg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogMzBweDtcXG59XFxuXFxuLnRvZG8gYnV0dG9uIHtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAtNXB4O1xcbn1cXG5cXG4udG9kbyA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udG9kbyBidXR0b246aG92ZXIge1xcbiAgY29sb3I6ICM1NGUwMmE7XFxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XFxufVxcblxcbmZvcm0gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG5cXG5kaWFsb2cge1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTM0NDA7XFxuICBjb2xvcjogI2VjZWZmNDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogNDBweDtcXG4gIGFuaW1hdGlvbjogMC41cyBmYWRlSW47XFxufVxcblxcbmRpYWxvZyBoMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jbG9zZSB7XFxuICBiYWNrZ3JvdW5kOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgY29sb3I6ICNlY2VmZjQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwcHg7XFxuICBsZWZ0OiAyOTBweDtcXG59XFxuXFxuW3R5cGUqPVxcXCJ0ZXh0XFxcIl0sXFxuW3R5cGUqPVxcXCJudW1iZXJcXFwiXSB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogMjUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG5bdHlwZSo9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcXG59XFxuXFxuLmlucHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5mb3JtIGRpdjpudGgtb2YtdHlwZSgyKSB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbmlucHV0OjpwbGFjZWhvbGRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBvcGFjaXR5OiA0MCU7XFxufVxcblxcbmZvcm0gPiBsZWdlbmQge1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcblt0eXBlKj1cXFwic3VibWl0XFxcIl0ge1xcbiAgcGFkZGluZzogMTBweCA0MHB4O1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVlODFhYztcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxufVxcblxcblt0eXBlKj1cXFwic3VibWl0XFxcIl06aG92ZXIge1xcbiAgb3BhY2l0eTogODAlO1xcbn1cXG5cXG5kaWFsb2c6OmJhY2tkcm9wIHtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgb3BhY2l0eTogMC42O1xcbn1cXG5cXG5bdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gIGJhY2tncm91bmQ6ICNmZmZcXG4gICAgdXJsKGh0dHBzOi8vY2RuMS5pY29uZmluZGVyLmNvbS9kYXRhL2ljb25zL2NjX21vbm9faWNvbl9zZXQvYmxhY2tzLzE2eDE2L2NhbGVuZGFyXzIucG5nKVxcbiAgICA5NyUgNTAlIG5vLXJlcGVhdDtcXG59XFxuW3R5cGU9XFxcImRhdGVcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5bdHlwZT1cXFwiZGF0ZVxcXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLyogY3VzdG9tIHN0eWxlcyAqL1xcblxcbmlucHV0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjNGM0YzQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogM3B4IDVweDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICB3aWR0aDogMTkwcHg7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5kaWFsb2cge1xcbiAgbWFyZ2luOiA0N3Z3O1xcbiAgbWFyZ2luLXRvcDogNTB2aDtcXG59XFxuXFxuZGlhbG9nOjpiYWNrZHJvcCB7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBjb2xvcjogIzAwMDAwMDtcXG59XFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJsZXQgcHJvamVjdHMgPSBbXVxuXG5jbGFzcyBwcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdXG4gICAgICAgIHRoaXMuaWQgPSBwcm9qZWN0cy5sZW5ndGhcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkVGFzayhuYW1lLCBkYXRlLCBpZCkge1xuICAgICAgICBsZXQgaW5kZXggPSBwcm9qZWN0c1tpZF0udGFza3MubGVuZ3RoXG4gICAgICAgIHByb2plY3RzW2lkXS50YXNrcy5wdXNoKHtuYW1lOiBuYW1lLCBkYXRlOiBkYXRlLCBpbmRleDogaW5kZXh9KVxuICAgIH1cblxuXG5cbiAgICBzdGF0aWMgcmVtb3ZlUHJvamVjdChpbmRleCkge1xuICAgICAgICBwcm9qZWN0cyA9IHByb2plY3RzLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG59XG5cbmV4cG9ydCB7cHJvamVjdHMsIHByb2plY3R9IiwiaW1wb3J0IHRyYXNoSWNvbiBmcm9tIFwiLi9hc3NldC90cmFzaC1jYW4tb3V0bGluZS5zdmdcIjtcbmltcG9ydCBwZW5jaWxJY29uIGZyb20gXCIuL2Fzc2V0L3BlbmNpbC5zdmdcIjtcbmltcG9ydCB0cmFzaEljb25XIGZyb20gXCIuL2Fzc2V0L3RyYXNoY2Fud2hpdGUuc3ZnXCI7XG5pbXBvcnQgeyBwcm9qZWN0cywgcHJvamVjdCBhcyBwcm9qZWN0Q2xhc3MgfSBmcm9tIFwiLi9kYXRhXCI7XG5cbmNsYXNzIHVpQ29tcG9uZW50cyB7XG4gIHN0YXRpYyBjcmVhdGV0YXNrKG5hbWUsIGRhdGUsIGluZGV4KSB7XG4gICAgbGV0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG8uY2xhc3NMaXN0LmFkZChpbmRleCk7XG4gICAgdG9kby5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcbiAgICBsZXQgbGVmdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kby5hcHBlbmRDaGlsZChsZWZ0RGl2KTtcbiAgICBsZXQgY29tcGxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbXBsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCLinJNcIjtcbiAgICBjb21wbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IGFsZXJ0KFwidGVzdFwiKSk7XG4gICAgbGV0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgdGFza05hbWUudGV4dENvbnRlbnQgPSBgJHtuYW1lfWA7XG4gICAgbGVmdERpdi5hcHBlbmRDaGlsZChjb21wbGV0ZUJ1dHRvbik7XG4gICAgbGVmdERpdi5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG4gICAgbGV0IGR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGR1ZS50ZXh0Q29udGVudCA9IGAke2RhdGV9YDtcbiAgICBkdWUuY2xhc3NMaXN0LmFkZChcImRhdGVcIik7XG4gICAgdG9kby5hcHBlbmRDaGlsZChkdWUpO1xuICAgIGxldCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBlZGl0LnNyYyA9IHBlbmNpbEljb247XG4gICAgZWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IGFsZXJ0KFwidGVzdFwiKSk7XG4gICAgbGV0IGRlbGV0ZXRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGRlbGV0ZXRhc2suc3JjID0gdHJhc2hJY29uO1xuICAgIGRlbGV0ZXRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBhbGVydChcInRlc3RcIikpO1xuICAgIHRvZG8uYXBwZW5kQ2hpbGQoZWRpdCk7XG4gICAgdG9kby5hcHBlbmRDaGlsZChkZWxldGV0YXNrKTtcbiAgICByZXR1cm4gdG9kbztcbiAgfVxuICBzdGF0aWMgY3JlYXRlcHJvamVjdChuYW1lLCBpbmRleCkge1xuICAgIGluZGV4ID0gaW5kZXggKyAxO1xuICAgIG5hbWUubGVuZ3RoID4gMTAgPyAobmFtZSA9IG5hbWUuc2xpY2UoMCwgOSkgKyBcIi4uLlwiKSA6IChuYW1lID0gbmFtZSk7XG4gICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIHByb2plY3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzaG93UHJvamVjdChpbmRleCkpO1xuICAgIHByb2plY3QuaWQgPSBpbmRleDtcbiAgICBsZXQgZGVsZXRlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZGVsZXRlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZGVsZXRlVGhpc1Byb2plY3QoaW5kZXgpKVxuICAgIGRlbGV0ZVByb2plY3Quc3JjID0gdHJhc2hJY29uVztcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3QpO1xuICAgIHJldHVybiBwcm9qZWN0O1xuICB9XG59XG5cbi8qIFJ1biBvbiBkZWxldGV0aGlzUHJvamVjdCAqL1xuZnVuY3Rpb24gcmVuZGVySG9tZSgpIHtcblxufVxuXG5cblxuZnVuY3Rpb24gcmVuZGVyKHByb2plY3RzKSB7XG4gIGxldCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXlQcm9qZWN0c1wiKTtcbiAgcHJvamVjdExpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHVpQ29tcG9uZW50cy5jcmVhdGVwcm9qZWN0KHByb2plY3RzW2ldLm5hbWUsIGkpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWxldGVUaGlzUHJvamVjdChpbmRleCkge1xuICAgIHByb2plY3RDbGFzcy5yZW1vdmVQcm9qZWN0KGluZGV4KTtcbiAgICByZW5kZXIocHJvamVjdHMpO1xufVxuXG5mdW5jdGlvbiBzaG93UHJvamVjdChpbmRleCkge1xuICAgIGluZGV4ID0gaW5kZXggLSAxXG4gICAgY29uc3QgdGFza3NMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJylcbiAgICBsZXQgY3VycmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50JylcbiAgICBjdXJyZW50LmlkID0gaW5kZXhcbiAgICBjdXJyZW50LnRleHRDb250ZW50ID0gcHJvamVjdHNbaW5kZXhdLm5hbWVcbiAgICB0YXNrc0xpc3QuaW5uZXJIVE1MID0gJydcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzW2luZGV4XS50YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0YXNrc0xpc3QuYXBwZW5kQ2hpbGQodWlDb21wb25lbnRzLmNyZWF0ZXRhc2socHJvamVjdHNbaW5kZXhdLnRhc2tzW2ldLm5hbWUsIHByb2plY3RzW2luZGV4XS50YXNrc1tpXS5kYXRlLCBpKSlcbiAgICB9XG59XG5cblxuXG5cbmV4cG9ydCB7IHVpQ29tcG9uZW50cywgcmVuZGVyLCBzaG93UHJvamVjdCB9O1xuIiwiaW1wb3J0IHtwcm9qZWN0LCBwcm9qZWN0c30gZnJvbSAnLi9kYXRhJ1xuaW1wb3J0IHsgcmVuZGVyLCB1aUNvbXBvbmVudHMgfSBmcm9tICcuL2RvbSdcblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHByb2plY3RzW2ldLm5hbWUgPT0gZm9ybXMucHJvamVjdEZvcm1OYW1lLnZhbHVlKSB7XG4gICAgICAgICAgICBhbGVydCgndGhpcyBwcm9qZWN0IGFscmVhZHQgZXhpc3RzJylcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgfVxuICAgIHByb2plY3RzLnB1c2gobmV3IHByb2plY3QoZm9ybXMucHJvamVjdEZvcm1OYW1lLnZhbHVlKSlcbiAgICBmb3JtQ29udHJvbC5jbG9zZUZvcm1Qcm9qKClcbiAgICByZW5kZXIocHJvamVjdHMpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2soZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGxldCBpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50JykuaWRcbiAgICBwcm9qZWN0LmFkZFRhc2soZm9ybXMudGFza0Zvcm1OYW1lLnZhbHVlLCBmb3Jtcy50YXNrRm9ybURhdGUudmFsdWUsIGlkKVxuICAgIHNob3dUb2RvKClcbiAgICBmb3JtQ29udHJvbC5jbG9zZUZvcm1UYXNrKClcbn1cblxuZnVuY3Rpb24gc2hvd1RvZG8oKSB7XG4gICAgbGV0IGlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQnKS5pZFxuICAgIGNvbnN0IHRhc2tzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c1tpZF0udGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGFza3NMaXN0LmFwcGVuZENoaWxkKHVpQ29tcG9uZW50cy5jcmVhdGV0YXNrKHByb2plY3RzW2lkXS50YXNrc1tpXS5uYW1lLCBwcm9qZWN0c1tpZF0udGFza3NbaV0uZGF0ZSwgaSkpXG4gICAgfVxufVxuXG5jb25zdCBmb3JtQ29udHJvbCA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gb3BlbkZvcm1Qcm9qKCkge1xuICAgICAgICBjb25zdCBteU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLk5ld1Byb2onKVxuICAgICAgICBteU1vZGFsLnNob3dNb2RhbCgpXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNsb3NlRm9ybVByb2ooKSB7XG4gICAgICAgIGNvbnN0IG15TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuTmV3UHJvaicpXG4gICAgICAgIG15TW9kYWwuY2xvc2UoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9wZW5Gb3JtVGFzaygpIHtcbiAgICAgICAgY29uc3QgbXlNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5OZXdUYXNrJylcbiAgICAgICAgbXlNb2RhbC5zaG93TW9kYWwoKVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBjbG9zZUZvcm1UYXNrKCkge1xuICAgICAgICBjb25zdCBteU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLk5ld1Rhc2snKVxuICAgICAgICBteU1vZGFsLmNsb3NlKClcbiAgICB9XG5cbiAgICByZXR1cm4ge2Nsb3NlRm9ybVByb2osIG9wZW5Gb3JtUHJvaiwgb3BlbkZvcm1UYXNrLCBjbG9zZUZvcm1UYXNrfVxufSkoKVxuXG5cblxuXG5cblxuY29uc3QgZm9ybXMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbmV3LXByb2otZm9ybV0nKVxuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbmV3LXRhc2stZm9ybV0nKVxuICAgIGNvbnN0IHByb2plY3RGb3JtTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5ldy1wcm9qLW5hbWVdJylcbiAgICBjb25zdCB0YXNrRm9ybU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uZXctdGFzay1uYW1lXScpXG4gICAgY29uc3QgdGFza0Zvcm1EYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbmV3LXRhc2stZGF0ZV0nKVxuICAgIGNvbnN0IG9wZW5Qcm9qRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cyBidXR0b24nKVxuICAgIGNvbnN0IG9wZW5UYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGR0YXNrJylcbiAgICBvcGVuVGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmb3JtQ29udHJvbC5vcGVuRm9ybVRhc2spXG4gICAgdGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgY3JlYXRlVGFzaylcbiAgICBvcGVuUHJvakZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmb3JtQ29udHJvbC5vcGVuRm9ybVByb2opXG4gICAgcHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgY3JlYXRlUHJvamVjdClcbiAgICByZXR1cm4ge3Byb2plY3RGb3JtTmFtZSwgdGFza0Zvcm1OYW1lLCB0YXNrRm9ybURhdGV9XG59KSgpXG5cblxuZXhwb3J0IGRlZmF1bHQgZm9ybXMiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHt1aUNvbXBvbmVudHN9IGZyb20gJy4vZG9tJ1xuaW1wb3J0IGZvcm1zIGZyb20gJy4vZm9ybSdcbmltcG9ydCAnLi9zdHlsZS5jc3MnXG5cblxuZXhwb3J0IGRlZmF1bHQgZm9ybXNcblxubGV0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJylcbnRhc2tzLmFwcGVuZENoaWxkKHVpQ29tcG9uZW50cy5jcmVhdGV0YXNrKCdIZWxsbycsICcyMDA3LzIyLzIyJykpXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9