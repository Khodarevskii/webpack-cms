/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/index.scss */ \"./src/scss/index.scss\");\n\n$(document).ready(function () {\n  var heightElementClose;\n  function isOpen(element) {\n    return element.classList.contains('open');\n  }\n  function getScrollHeight(element) {\n    return element.scrollHeight;\n  }\n  function getOffsetHeight(element) {\n    return element.offsetHeight;\n  }\n  var cardsPlace = document.querySelectorAll('.fond-dobra-cards');\n  cardsPlace.forEach(function (cards) {\n    cards.addEventListener(\"click\", function (evt) {\n      if (evt.target.classList.contains('elements-item-show-more__button')) {\n        evt.preventDefault();\n        var text = evt.target.parentElement.parentElement.querySelectorAll('.elements-item-desc');\n        text.forEach(function (item) {\n          if (!isOpen(item)) {\n            heightElementClose = getOffsetHeight(item);\n            item.style.cssText = \"height:\".concat(heightElementClose + 'px', \"; -webkit-line-clamp: 5;\");\n            item.classList.add('open');\n            item.style.cssText = \"height:\".concat(getScrollHeight(item) + 'px', \";-webkit-line-clamp: none;\");\n            evt.target.textContent = 'Свернуть';\n          } else {\n            item.classList.remove('open');\n            item.style.cssText = \"height:\".concat(heightElementClose + 'px', \";-webkit-line-clamp: 5\");\n            evt.target.textContent = 'Развернуть';\n          }\n        });\n      }\n    });\n  });\n});\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/index.js?\n}");

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/scss/index.scss?\n}");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;