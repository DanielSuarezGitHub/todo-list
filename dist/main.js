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
        projects[id].tasks.push({name: name, date: date})
    }

    static deleteTask(id, index) {
        projects[id].tasks.splice(index, 1)
        console.log(projects[id].tasks);
    }



    static removeProject(index) {
        projects.splice(index, 1)
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
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form */ "./src/form.js");






class uiComponents {
  static createtask(name, date, index) {
    let todo = document.createElement("div");
    todo.classList.add(index);
    todo.classList.add("todo");
    let leftDiv = document.createElement("div");
    todo.appendChild(leftDiv);
    let completeButton = document.createElement("button");
    completeButton.textContent = "✓";
    completeButton.addEventListener("click", () => removeTask(index));
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
    edit.addEventListener("click", () => displayEdit(index));
    let deletetask = document.createElement("img");
    deletetask.id = index
    deletetask.src = _asset_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_0__;
    deletetask.addEventListener("click", () => removeTask(index));
    todo.appendChild(edit);
    todo.appendChild(deletetask);
    return todo;
  }
  static createproject(name, index) {
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

function displayEdit(index) {
    let id = document.querySelector('.current').id
    _form__WEBPACK_IMPORTED_MODULE_4__.forms.editTaskForm.addEventListener('submit', (e) => (0,_form__WEBPACK_IMPORTED_MODULE_4__.editTask)(e, index, id))
    _form__WEBPACK_IMPORTED_MODULE_4__.forms.editTaskForm.showModal()
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
    const tasksList = document.querySelector('.tasks')
    let current = document.querySelector('.current')
    current.id = index
    current.textContent = _data__WEBPACK_IMPORTED_MODULE_3__.projects[index].name
    tasksList.innerHTML = ''
    for (let i = 0; i < _data__WEBPACK_IMPORTED_MODULE_3__.projects[index].tasks.length; i++) {
        tasksList.appendChild(uiComponents.createtask(_data__WEBPACK_IMPORTED_MODULE_3__.projects[index].tasks[i].name, _data__WEBPACK_IMPORTED_MODULE_3__.projects[index].tasks[i].date, i))
    }
}

function removeTask(index) {
    let id = document.querySelector('.current').id
    console.log(id);
    console.log(index);
    _data__WEBPACK_IMPORTED_MODULE_3__.project.deleteTask(id, index)
    ;(0,_form__WEBPACK_IMPORTED_MODULE_4__.showTodo)()
}






/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editTask": () => (/* binding */ editTask),
/* harmony export */   "forms": () => (/* binding */ forms),
/* harmony export */   "showTodo": () => (/* binding */ showTodo)
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


function editTask(e, index, id) {
    e.preventDefault()
    _data__WEBPACK_IMPORTED_MODULE_0__.projects[id].tasks[index].name = forms.editTaskFormName.value
    _data__WEBPACK_IMPORTED_MODULE_0__.projects[id].tasks[index].date = forms.taskFormDate.value
    forms.editTaskForm.close()
    showTodo()
}

function showTodo() {
    let id = document.querySelector('.current').id
    const tasksList = document.querySelector('.tasks')
    tasksList.innerHTML = ''
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
    const editTaskForm = document.querySelector('[data-edit-task-form]')
    const editTaskFormName = document.querySelector('[data-edit-task-name]')
    const editTaskFormDate = document.querySelector('[data-edit-task-date]')
    openTaskForm.addEventListener('click', formControl.openFormTask)
    taskForm.addEventListener('submit', createTask)
    openProjForm.addEventListener('click', formControl.openFormProj)
    projectForm.addEventListener('submit', createProject)
    return {projectFormName, taskFormName, taskFormDate, editTaskForm, editTaskFormDate, editTaskFormName}
})()




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLG9IQUFvSDtBQUNwSDtBQUNBLDZDQUE2QyxjQUFjLGVBQWUsR0FBRyxXQUFXLDJCQUEyQix1QkFBdUIsd0NBQXdDLEdBQUcsVUFBVSxrQkFBa0IsaUJBQWlCLGtCQUFrQixpQ0FBaUMscUNBQXFDLEdBQUcsYUFBYSxvQkFBb0IsdUJBQXVCLDhCQUE4QixrQkFBa0Isd0JBQXdCLGdDQUFnQyx1QkFBdUIsbUJBQW1CLHNCQUFzQixHQUFHLG9CQUFvQixtQkFBbUIscUJBQXFCLHFCQUFxQixvQkFBb0IsR0FBRyxjQUFjLHFCQUFxQiw4QkFBOEIsR0FBRyxXQUFXLCtDQUErQyxnREFBZ0QsR0FBRyxrQkFBa0IsaUJBQWlCLGdCQUFnQixHQUFHLGNBQWMsa0JBQWtCLHdCQUF3QiwyQkFBMkIsK0NBQStDLGNBQWMsR0FBRyxvQkFBb0Isa0JBQWtCLG1CQUFtQixjQUFjLHNCQUFzQixHQUFHLDhCQUE4QixxQkFBcUIsR0FBRyxRQUFRLGtCQUFrQix3QkFBd0IsY0FBYyxHQUFHLG9CQUFvQixvQkFBb0IsR0FBRyxpQkFBaUIscUJBQXFCLGtCQUFrQiwyQkFBMkIsYUFBYSxrQkFBa0IscUJBQXFCLGdCQUFnQixzQkFBc0IsdUJBQXVCLHNCQUFzQixHQUFHLG1CQUFtQixnQkFBZ0IsR0FBRyx5QkFBeUIsa0JBQWtCLEdBQUcsV0FBVyxrQkFBa0IsMkJBQTJCLHdCQUF3QixzQkFBc0Isb0JBQW9CLHFCQUFxQixHQUFHLGNBQWMsc0JBQXNCLEdBQUcsc0JBQXNCLGtCQUFrQixjQUFjLG9CQUFvQixlQUFlLEdBQUcsNEJBQTRCLG1CQUFtQiwwQkFBMEIsR0FBRyxZQUFZLGtCQUFrQixjQUFjLHdCQUF3QixHQUFHLGNBQWMsbUJBQW1CLDRCQUE0Qix3QkFBd0Isb0NBQW9DLHNCQUFzQixrQkFBa0Isd0JBQXdCLGlCQUFpQiw4QkFBOEIsaUJBQWlCLEdBQUcscUJBQXFCLHVCQUF1QixxQkFBcUIsZ0JBQWdCLEdBQUcsdUJBQXVCLGtCQUFrQix3QkFBd0IsNEJBQTRCLGlCQUFpQixnQkFBZ0IsdUJBQXVCLHNCQUFzQixjQUFjLDhCQUE4QixpQkFBaUIsNEJBQTRCLEdBQUcsWUFBWSxvQkFBb0IsR0FBRyxZQUFZLHFCQUFxQixpQkFBaUIsb0NBQW9DLGtCQUFrQixjQUFjLDJCQUEyQix3QkFBd0IsR0FBRyxnQkFBZ0IsaUJBQWlCLGdCQUFnQixHQUFHLHNCQUFzQixvQkFBb0IsR0FBRyxXQUFXLGtCQUFrQix3QkFBd0IsZ0JBQWdCLDRCQUE0QixpQkFBaUIsNEJBQTRCLGlCQUFpQix3QkFBd0IsR0FBRyw0QkFBNEIsc0JBQXNCLHNCQUFzQixHQUFHLGVBQWUsZUFBZSxHQUFHLDZCQUE2QixvQkFBb0Isc0JBQXNCLHVCQUF1QixHQUFHLGtCQUFrQixjQUFjLHVCQUF1QixlQUFlLG9CQUFvQiw0QkFBNEIscUJBQXFCLHdCQUF3QixHQUFHLGlCQUFpQixrQkFBa0IsNEJBQTRCLHdCQUF3QixjQUFjLEdBQUcsd0JBQXdCLG1CQUFtQiwwQkFBMEIsR0FBRyxjQUFjLGtCQUFrQixHQUFHLFVBQVUsa0JBQWtCLDJCQUEyQix3QkFBd0IsY0FBYyxHQUFHLFlBQVksd0JBQXdCLDhCQUE4QixtQkFBbUIsNEJBQTRCLGtCQUFrQiwyQkFBMkIsR0FBRyxlQUFlLHVCQUF1QixHQUFHLFlBQVksa0JBQWtCLGNBQWMsb0JBQW9CLG1CQUFtQix1QkFBdUIsY0FBYyxnQkFBZ0IsR0FBRywyQ0FBMkMsaUJBQWlCLGlCQUFpQix3QkFBd0IsY0FBYyxvQkFBb0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsWUFBWSxrQkFBa0IsMkJBQTJCLGNBQWMsR0FBRyw2QkFBNkIscUJBQXFCLHdCQUF3QixnQkFBZ0IsNEJBQTRCLGNBQWMsb0JBQW9CLEdBQUcsd0JBQXdCLHVCQUF1QixvQkFBb0IsaUJBQWlCLEdBQUcsbUJBQW1CLG9CQUFvQix5QkFBeUIsR0FBRyx3QkFBd0IsdUJBQXVCLG9CQUFvQiw4QkFBOEIsY0FBYyx3QkFBd0IsR0FBRyw4QkFBOEIsaUJBQWlCLEdBQUcsc0JBQXNCLHNCQUFzQixpQkFBaUIsR0FBRyxxQkFBcUIsMElBQTBJLEdBQUcsOENBQThDLGtCQUFrQixHQUFHLHNEQUFzRCxlQUFlLEdBQUcsa0NBQWtDLDhCQUE4Qix1QkFBdUIsMkJBQTJCLHFCQUFxQixtREFBbUQsaUJBQWlCLEdBQUcsdUJBQXVCLFFBQVEsaUJBQWlCLEtBQUssWUFBWSxpQkFBaUIsS0FBSyxHQUFHLFlBQVksaUJBQWlCLHFCQUFxQixHQUFHLHNCQUFzQixpQkFBaUIsbUJBQW1CLEdBQUcsYUFBYSxnRkFBZ0YsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLE1BQU0sT0FBTyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssS0FB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QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBa0M7QUFDUjtBQUNOOzs7QUFHcEIsaUVBQWUsNkNBQUs7O0FBRXBCO0FBQ0Esa0JBQWtCLHlEQUF1QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA5MHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggMWZyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTM0NDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHBhZGRpbmctbGVmdDogNjBweDtcXG4gIGNvbG9yOiAjZWNlZmY0O1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbmhlYWRlcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLinJNcXFwiO1xcbiAgbWFyZ2luOiAwcHggMjBweDtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGdyaWQtcm93OiAyIC8gLTI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I0MjUyO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI2LCAyMTEsIDIxOCwgMC4xNSk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwcHggNnB4IDE1cHggLTRweCAjMDAwMDAwO1xcbn1cXG5cXG4uc2lkZWJhciBpbWcge1xcbiAgaGVpZ2h0OiAyNnB4O1xcbiAgd2lkdGg6IDI2cHg7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDJweCA2cHggOXB4IC00cHggIzAwMDAwMDtcXG4gIGdhcDogMzBweDtcXG59XFxuXFxuLnNpZGViYXIgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbG9yOiAjZWNlZmY0O1xcbiAgZ2FwOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5zaWRlYmFyIGRpdjpmaXJzdC1jaGlsZCB7XFxuICBwYWRkaW5nLXRvcDogMjUlO1xcbn1cXG5cXG5saSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxubGkgPiBpbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZWJhciB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDM2JTtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xcbn1cXG5cXG4ucHJvamVjdHNsaXN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiA3MHB4O1xcbiAgbWluLXdpZHRoOiBub25lO1xcbiAgbWluLXdpZHRoOiA2MDBweDtcXG59XFxuXFxuLm1haW4gaDIge1xcbiAgZm9udC1zaXplOiAyLjdyZW07XFxufVxcblxcbi5wcm9qZWN0cyBidXR0b24ge1xcbiAgYmFja2dyb3VuZDogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5wcm9qZWN0cyBidXR0b246aG92ZXIge1xcbiAgY29sb3I6ICM1NGUwMmE7XFxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XFxufVxcblxcbi50aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZHRhc2sge1xcbiAgbWFyZ2luLXRvcDogMiU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICB3aWR0aDogY2xhbXAoMzAwcHgsIDUwJSwgODAwcHgpO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5hZGR0YXNrID4gc3BhbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tcmlnaHQ6IDQlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hZGR0YXNrID4gYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgYm9yZGVyOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFza3Mge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGhlaWdodDogNzB2aDtcXG4gIHdpZHRoOiBjbGFtcCgzMDBweCwgNTAlLCA4MDBweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrcyBpbWcge1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgd2lkdGg6IDI0cHg7XFxufVxcblxcbi50YXNrcyBpbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxufVxcblxcbi50b2RvIHNwYW46Zmlyc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLnRvZG8gPiAqIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi50b2RvIHNwYW46bnRoLWNoaWxkKDIpIHtcXG4gIG1hcmdpbi10b3A6IDNweDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbn1cXG5cXG4udG9kbyBidXR0b24ge1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IC01cHg7XFxufVxcblxcbi50b2RvID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi50b2RvIGJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogIzU0ZTAyYTtcXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcXG59XFxuXFxuZm9ybSBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDMwcHg7XFxufVxcblxcbmRpYWxvZyB7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlMzQ0MDtcXG4gIGNvbG9yOiAjZWNlZmY0O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiA0MHB4O1xcbiAgYW5pbWF0aW9uOiAwLjVzIGZhZGVJbjtcXG59XFxuXFxuZGlhbG9nIGgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIGJhY2tncm91bmQ6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBjb2xvcjogI2VjZWZmNDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTBweDtcXG4gIGxlZnQ6IDI5MHB4O1xcbn1cXG5cXG5bdHlwZSo9XFxcInRleHRcXFwiXSxcXG5bdHlwZSo9XFxcIm51bWJlclxcXCJdIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcblt0eXBlKj1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xcbn1cXG5cXG4uaW5wdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbmZvcm0gZGl2Om50aC1vZi10eXBlKDIpIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIG9wYWNpdHk6IDQwJTtcXG59XFxuXFxuZm9ybSA+IGxlZ2VuZCB7XFxuICBmb250LXNpemU6IDM2cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuW3R5cGUqPVxcXCJzdWJtaXRcXFwiXSB7XFxuICBwYWRkaW5nOiAxMHB4IDQwcHg7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWU4MWFjO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG59XFxuXFxuW3R5cGUqPVxcXCJzdWJtaXRcXFwiXTpob3ZlciB7XFxuICBvcGFjaXR5OiA4MCU7XFxufVxcblxcbmRpYWxvZzo6YmFja2Ryb3Age1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBvcGFjaXR5OiAwLjY7XFxufVxcblxcblt0eXBlPVxcXCJkYXRlXFxcIl0ge1xcbiAgYmFja2dyb3VuZDogI2ZmZlxcbiAgICB1cmwoaHR0cHM6Ly9jZG4xLmljb25maW5kZXIuY29tL2RhdGEvaWNvbnMvY2NfbW9ub19pY29uX3NldC9ibGFja3MvMTZ4MTYvY2FsZW5kYXJfMi5wbmcpXFxuICAgIDk3JSA1MCUgbm8tcmVwZWF0O1xcbn1cXG5bdHlwZT1cXFwiZGF0ZVxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblt0eXBlPVxcXCJkYXRlXFxcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4vKiBjdXN0b20gc3R5bGVzICovXFxuXFxuaW5wdXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAzcHggNXB4O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIHdpZHRoOiAxOTBweDtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbmRpYWxvZyB7XFxuICBtYXJnaW46IDQ3dnc7XFxuICBtYXJnaW4tdG9wOiA1MHZoO1xcbn1cXG5cXG5kaWFsb2c6OmJhY2tkcm9wIHtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLHNCQUFzQjtF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QUNoQiw4Q0FBOEM7RUFDOUMsWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA5MHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggMWZyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTM0NDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHBhZGRpbmctbGVmdDogNjBweDtcXG4gIGNvbG9yOiAjZWNlZmY0O1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbmhlYWRlcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLinJNcXFwiO1xcbiAgbWFyZ2luOiAwcHggMjBweDtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGdyaWQtcm93OiAyIC8gLTI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I0MjUyO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI2LCAyMTEsIDIxOCwgMC4xNSk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwcHggNnB4IDE1cHggLTRweCAjMDAwMDAwO1xcbn1cXG5cXG4uc2lkZWJhciBpbWcge1xcbiAgaGVpZ2h0OiAyNnB4O1xcbiAgd2lkdGg6IDI2cHg7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDJweCA2cHggOXB4IC00cHggIzAwMDAwMDtcXG4gIGdhcDogMzBweDtcXG59XFxuXFxuLnNpZGViYXIgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbG9yOiAjZWNlZmY0O1xcbiAgZ2FwOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5zaWRlYmFyIGRpdjpmaXJzdC1jaGlsZCB7XFxuICBwYWRkaW5nLXRvcDogMjUlO1xcbn1cXG5cXG5saSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxubGkgPiBpbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZWJhciB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDM2JTtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xcbn1cXG5cXG4ucHJvamVjdHNsaXN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiA3MHB4O1xcbiAgbWluLXdpZHRoOiBub25lO1xcbiAgbWluLXdpZHRoOiA2MDBweDtcXG59XFxuXFxuLm1haW4gaDIge1xcbiAgZm9udC1zaXplOiAyLjdyZW07XFxufVxcblxcbi5wcm9qZWN0cyBidXR0b24ge1xcbiAgYmFja2dyb3VuZDogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5wcm9qZWN0cyBidXR0b246aG92ZXIge1xcbiAgY29sb3I6ICM1NGUwMmE7XFxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XFxufVxcblxcbi50aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZHRhc2sge1xcbiAgbWFyZ2luLXRvcDogMiU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICB3aWR0aDogY2xhbXAoMzAwcHgsIDUwJSwgODAwcHgpO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5hZGR0YXNrID4gc3BhbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tcmlnaHQ6IDQlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hZGR0YXNrID4gYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgYm9yZGVyOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFza3Mge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGhlaWdodDogNzB2aDtcXG4gIHdpZHRoOiBjbGFtcCgzMDBweCwgNTAlLCA4MDBweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrcyBpbWcge1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgd2lkdGg6IDI0cHg7XFxufVxcblxcbi50YXNrcyBpbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxufVxcblxcbi50b2RvIHNwYW46Zmlyc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLnRvZG8gPiAqIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi50b2RvIHNwYW46bnRoLWNoaWxkKDIpIHtcXG4gIG1hcmdpbi10b3A6IDNweDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbn1cXG5cXG4udG9kbyBidXR0b24ge1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IC01cHg7XFxufVxcblxcbi50b2RvID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi50b2RvIGJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogIzU0ZTAyYTtcXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcXG59XFxuXFxuZm9ybSBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDMwcHg7XFxufVxcblxcbmRpYWxvZyB7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlMzQ0MDtcXG4gIGNvbG9yOiAjZWNlZmY0O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiA0MHB4O1xcbiAgYW5pbWF0aW9uOiAwLjVzIGZhZGVJbjtcXG59XFxuXFxuZGlhbG9nIGgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIGJhY2tncm91bmQ6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBjb2xvcjogI2VjZWZmNDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTBweDtcXG4gIGxlZnQ6IDI5MHB4O1xcbn1cXG5cXG5bdHlwZSo9XFxcInRleHRcXFwiXSxcXG5bdHlwZSo9XFxcIm51bWJlclxcXCJdIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcblt0eXBlKj1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xcbn1cXG5cXG4uaW5wdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbmZvcm0gZGl2Om50aC1vZi10eXBlKDIpIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIG9wYWNpdHk6IDQwJTtcXG59XFxuXFxuZm9ybSA+IGxlZ2VuZCB7XFxuICBmb250LXNpemU6IDM2cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuW3R5cGUqPVxcXCJzdWJtaXRcXFwiXSB7XFxuICBwYWRkaW5nOiAxMHB4IDQwcHg7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWU4MWFjO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG59XFxuXFxuW3R5cGUqPVxcXCJzdWJtaXRcXFwiXTpob3ZlciB7XFxuICBvcGFjaXR5OiA4MCU7XFxufVxcblxcbmRpYWxvZzo6YmFja2Ryb3Age1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBvcGFjaXR5OiAwLjY7XFxufVxcblxcblt0eXBlPVxcXCJkYXRlXFxcIl0ge1xcbiAgYmFja2dyb3VuZDogI2ZmZlxcbiAgICB1cmwoaHR0cHM6Ly9jZG4xLmljb25maW5kZXIuY29tL2RhdGEvaWNvbnMvY2NfbW9ub19pY29uX3NldC9ibGFja3MvMTZ4MTYvY2FsZW5kYXJfMi5wbmcpXFxuICAgIDk3JSA1MCUgbm8tcmVwZWF0O1xcbn1cXG5bdHlwZT1cXFwiZGF0ZVxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblt0eXBlPVxcXCJkYXRlXFxcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4vKiBjdXN0b20gc3R5bGVzICovXFxuXFxuaW5wdXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAzcHggNXB4O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIHdpZHRoOiAxOTBweDtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbmRpYWxvZyB7XFxuICBtYXJnaW46IDQ3dnc7XFxuICBtYXJnaW4tdG9wOiA1MHZoO1xcbn1cXG5cXG5kaWFsb2c6OmJhY2tkcm9wIHtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImxldCBwcm9qZWN0cyA9IFtdXG5cbmNsYXNzIHByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLnRhc2tzID0gW11cbiAgICAgICAgdGhpcy5pZCA9IHByb2plY3RzLmxlbmd0aFxuICAgIH1cblxuICAgIHN0YXRpYyBhZGRUYXNrKG5hbWUsIGRhdGUsIGlkKSB7XG4gICAgICAgIHByb2plY3RzW2lkXS50YXNrcy5wdXNoKHtuYW1lOiBuYW1lLCBkYXRlOiBkYXRlfSlcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVsZXRlVGFzayhpZCwgaW5kZXgpIHtcbiAgICAgICAgcHJvamVjdHNbaWRdLnRhc2tzLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNbaWRdLnRhc2tzKTtcbiAgICB9XG5cblxuXG4gICAgc3RhdGljIHJlbW92ZVByb2plY3QoaW5kZXgpIHtcbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbn1cblxuZXhwb3J0IHtwcm9qZWN0cywgcHJvamVjdH0iLCJpbXBvcnQgdHJhc2hJY29uIGZyb20gXCIuL2Fzc2V0L3RyYXNoLWNhbi1vdXRsaW5lLnN2Z1wiO1xuaW1wb3J0IHBlbmNpbEljb24gZnJvbSBcIi4vYXNzZXQvcGVuY2lsLnN2Z1wiO1xuaW1wb3J0IHRyYXNoSWNvblcgZnJvbSBcIi4vYXNzZXQvdHJhc2hjYW53aGl0ZS5zdmdcIjtcbmltcG9ydCB7IHByb2plY3RzLCBwcm9qZWN0IGFzIHByb2plY3RDbGFzcyB9IGZyb20gXCIuL2RhdGFcIjtcbmltcG9ydCB7IGVkaXRUYXNrLCBmb3Jtcywgc2hvd1RvZG8gfSBmcm9tIFwiLi9mb3JtXCI7XG5cbmNsYXNzIHVpQ29tcG9uZW50cyB7XG4gIHN0YXRpYyBjcmVhdGV0YXNrKG5hbWUsIGRhdGUsIGluZGV4KSB7XG4gICAgbGV0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG8uY2xhc3NMaXN0LmFkZChpbmRleCk7XG4gICAgdG9kby5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcbiAgICBsZXQgbGVmdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kby5hcHBlbmRDaGlsZChsZWZ0RGl2KTtcbiAgICBsZXQgY29tcGxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbXBsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCLinJNcIjtcbiAgICBjb21wbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcmVtb3ZlVGFzayhpbmRleCkpO1xuICAgIGxldCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHRhc2tOYW1lLnRleHRDb250ZW50ID0gYCR7bmFtZX1gO1xuICAgIGxlZnREaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVCdXR0b24pO1xuICAgIGxlZnREaXYuYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuICAgIGxldCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBkdWUudGV4dENvbnRlbnQgPSBgJHtkYXRlfWA7XG4gICAgZHVlLmNsYXNzTGlzdC5hZGQoXCJkYXRlXCIpO1xuICAgIHRvZG8uYXBwZW5kQ2hpbGQoZHVlKTtcbiAgICBsZXQgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZWRpdC5zcmMgPSBwZW5jaWxJY29uO1xuICAgIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGRpc3BsYXlFZGl0KGluZGV4KSk7XG4gICAgbGV0IGRlbGV0ZXRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGRlbGV0ZXRhc2suaWQgPSBpbmRleFxuICAgIGRlbGV0ZXRhc2suc3JjID0gdHJhc2hJY29uO1xuICAgIGRlbGV0ZXRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHJlbW92ZVRhc2soaW5kZXgpKTtcbiAgICB0b2RvLmFwcGVuZENoaWxkKGVkaXQpO1xuICAgIHRvZG8uYXBwZW5kQ2hpbGQoZGVsZXRldGFzayk7XG4gICAgcmV0dXJuIHRvZG87XG4gIH1cbiAgc3RhdGljIGNyZWF0ZXByb2plY3QobmFtZSwgaW5kZXgpIHtcbiAgICBuYW1lLmxlbmd0aCA+IDEwID8gKG5hbWUgPSBuYW1lLnNsaWNlKDAsIDkpICsgXCIuLi5cIikgOiAobmFtZSA9IG5hbWUpO1xuICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICBwcm9qZWN0TmFtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gc2hvd1Byb2plY3QoaW5kZXgpKTtcbiAgICBwcm9qZWN0LmlkID0gaW5kZXg7XG4gICAgbGV0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGRlbGV0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGRlbGV0ZVRoaXNQcm9qZWN0KGluZGV4KSlcbiAgICBkZWxldGVQcm9qZWN0LnNyYyA9IHRyYXNoSWNvblc7XG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0KTtcbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfVxufVxuXG4vKiBSdW4gb24gZGVsZXRldGhpc1Byb2plY3QgKi9cbmZ1bmN0aW9uIHJlbmRlckhvbWUoKSB7XG5cbn1cblxuZnVuY3Rpb24gZGlzcGxheUVkaXQoaW5kZXgpIHtcbiAgICBsZXQgaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudCcpLmlkXG4gICAgZm9ybXMuZWRpdFRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiBlZGl0VGFzayhlLCBpbmRleCwgaWQpKVxuICAgIGZvcm1zLmVkaXRUYXNrRm9ybS5zaG93TW9kYWwoKVxufVxuXG5cblxuZnVuY3Rpb24gcmVuZGVyKHByb2plY3RzKSB7XG4gIGxldCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXlQcm9qZWN0c1wiKTtcbiAgcHJvamVjdExpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHVpQ29tcG9uZW50cy5jcmVhdGVwcm9qZWN0KHByb2plY3RzW2ldLm5hbWUsIGkpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWxldGVUaGlzUHJvamVjdChpbmRleCkge1xuICAgIHByb2plY3RDbGFzcy5yZW1vdmVQcm9qZWN0KGluZGV4KTtcbiAgICByZW5kZXIocHJvamVjdHMpO1xufVxuXG5mdW5jdGlvbiBzaG93UHJvamVjdChpbmRleCkge1xuICAgIGNvbnN0IHRhc2tzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpXG4gICAgbGV0IGN1cnJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudCcpXG4gICAgY3VycmVudC5pZCA9IGluZGV4XG4gICAgY3VycmVudC50ZXh0Q29udGVudCA9IHByb2plY3RzW2luZGV4XS5uYW1lXG4gICAgdGFza3NMaXN0LmlubmVySFRNTCA9ICcnXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c1tpbmRleF0udGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGFza3NMaXN0LmFwcGVuZENoaWxkKHVpQ29tcG9uZW50cy5jcmVhdGV0YXNrKHByb2plY3RzW2luZGV4XS50YXNrc1tpXS5uYW1lLCBwcm9qZWN0c1tpbmRleF0udGFza3NbaV0uZGF0ZSwgaSkpXG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVUYXNrKGluZGV4KSB7XG4gICAgbGV0IGlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQnKS5pZFxuICAgIGNvbnNvbGUubG9nKGlkKTtcbiAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgcHJvamVjdENsYXNzLmRlbGV0ZVRhc2soaWQsIGluZGV4KVxuICAgIHNob3dUb2RvKClcbn1cblxuXG5cbmV4cG9ydCB7IHVpQ29tcG9uZW50cywgcmVuZGVyLCBzaG93UHJvamVjdCB9O1xuIiwiaW1wb3J0IHtwcm9qZWN0LCBwcm9qZWN0c30gZnJvbSAnLi9kYXRhJ1xuaW1wb3J0IHsgcmVuZGVyLCB1aUNvbXBvbmVudHMgfSBmcm9tICcuL2RvbSdcblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHByb2plY3RzW2ldLm5hbWUgPT0gZm9ybXMucHJvamVjdEZvcm1OYW1lLnZhbHVlKSB7XG4gICAgICAgICAgICBhbGVydCgndGhpcyBwcm9qZWN0IGFscmVhZHQgZXhpc3RzJylcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgfVxuICAgIHByb2plY3RzLnB1c2gobmV3IHByb2plY3QoZm9ybXMucHJvamVjdEZvcm1OYW1lLnZhbHVlKSlcbiAgICBmb3JtQ29udHJvbC5jbG9zZUZvcm1Qcm9qKClcbiAgICByZW5kZXIocHJvamVjdHMpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2soZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGxldCBpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50JykuaWRcbiAgICBwcm9qZWN0LmFkZFRhc2soZm9ybXMudGFza0Zvcm1OYW1lLnZhbHVlLCBmb3Jtcy50YXNrRm9ybURhdGUudmFsdWUsIGlkKVxuICAgIHNob3dUb2RvKClcbiAgICBmb3JtQ29udHJvbC5jbG9zZUZvcm1UYXNrKClcbn1cblxuXG5mdW5jdGlvbiBlZGl0VGFzayhlLCBpbmRleCwgaWQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBwcm9qZWN0c1tpZF0udGFza3NbaW5kZXhdLm5hbWUgPSBmb3Jtcy5lZGl0VGFza0Zvcm1OYW1lLnZhbHVlXG4gICAgcHJvamVjdHNbaWRdLnRhc2tzW2luZGV4XS5kYXRlID0gZm9ybXMudGFza0Zvcm1EYXRlLnZhbHVlXG4gICAgZm9ybXMuZWRpdFRhc2tGb3JtLmNsb3NlKClcbiAgICBzaG93VG9kbygpXG59XG5cbmZ1bmN0aW9uIHNob3dUb2RvKCkge1xuICAgIGxldCBpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50JykuaWRcbiAgICBjb25zdCB0YXNrc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKVxuICAgIHRhc2tzTGlzdC5pbm5lckhUTUwgPSAnJ1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNbaWRdLnRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRhc2tzTGlzdC5hcHBlbmRDaGlsZCh1aUNvbXBvbmVudHMuY3JlYXRldGFzayhwcm9qZWN0c1tpZF0udGFza3NbaV0ubmFtZSwgcHJvamVjdHNbaWRdLnRhc2tzW2ldLmRhdGUsIGkpKVxuICAgIH1cbn1cblxuY29uc3QgZm9ybUNvbnRyb2wgPSAoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIG9wZW5Gb3JtUHJvaigpIHtcbiAgICAgICAgY29uc3QgbXlNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5OZXdQcm9qJylcbiAgICAgICAgbXlNb2RhbC5zaG93TW9kYWwoKVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBjbG9zZUZvcm1Qcm9qKCkge1xuICAgICAgICBjb25zdCBteU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLk5ld1Byb2onKVxuICAgICAgICBteU1vZGFsLmNsb3NlKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvcGVuRm9ybVRhc2soKSB7XG4gICAgICAgIGNvbnN0IG15TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuTmV3VGFzaycpXG4gICAgICAgIG15TW9kYWwuc2hvd01vZGFsKClcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gY2xvc2VGb3JtVGFzaygpIHtcbiAgICAgICAgY29uc3QgbXlNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5OZXdUYXNrJylcbiAgICAgICAgbXlNb2RhbC5jbG9zZSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtjbG9zZUZvcm1Qcm9qLCBvcGVuRm9ybVByb2osIG9wZW5Gb3JtVGFzaywgY2xvc2VGb3JtVGFza31cbn0pKClcblxuXG5cblxuXG5cbmNvbnN0IGZvcm1zID0gKCgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5ldy1wcm9qLWZvcm1dJylcbiAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5ldy10YXNrLWZvcm1dJylcbiAgICBjb25zdCBwcm9qZWN0Rm9ybU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uZXctcHJvai1uYW1lXScpXG4gICAgY29uc3QgdGFza0Zvcm1OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbmV3LXRhc2stbmFtZV0nKVxuICAgIGNvbnN0IHRhc2tGb3JtRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5ldy10YXNrLWRhdGVdJylcbiAgICBjb25zdCBvcGVuUHJvakZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMgYnV0dG9uJylcbiAgICBjb25zdCBvcGVuVGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkdGFzaycpXG4gICAgY29uc3QgZWRpdFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZWRpdC10YXNrLWZvcm1dJylcbiAgICBjb25zdCBlZGl0VGFza0Zvcm1OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZWRpdC10YXNrLW5hbWVdJylcbiAgICBjb25zdCBlZGl0VGFza0Zvcm1EYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZWRpdC10YXNrLWRhdGVdJylcbiAgICBvcGVuVGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmb3JtQ29udHJvbC5vcGVuRm9ybVRhc2spXG4gICAgdGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgY3JlYXRlVGFzaylcbiAgICBvcGVuUHJvakZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmb3JtQ29udHJvbC5vcGVuRm9ybVByb2opXG4gICAgcHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgY3JlYXRlUHJvamVjdClcbiAgICByZXR1cm4ge3Byb2plY3RGb3JtTmFtZSwgdGFza0Zvcm1OYW1lLCB0YXNrRm9ybURhdGUsIGVkaXRUYXNrRm9ybSwgZWRpdFRhc2tGb3JtRGF0ZSwgZWRpdFRhc2tGb3JtTmFtZX1cbn0pKClcblxuXG5leHBvcnQgeyBmb3Jtcywgc2hvd1RvZG8sIGVkaXRUYXNrIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHt1aUNvbXBvbmVudHN9IGZyb20gJy4vZG9tJ1xuaW1wb3J0IGZvcm1zIGZyb20gJy4vZm9ybSdcbmltcG9ydCAnLi9zdHlsZS5jc3MnXG5cblxuZXhwb3J0IGRlZmF1bHQgZm9ybXNcblxubGV0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJylcbnRhc2tzLmFwcGVuZENoaWxkKHVpQ29tcG9uZW50cy5jcmVhdGV0YXNrKCdIZWxsbycsICcyMDA3LzIyLzIyJykpXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9