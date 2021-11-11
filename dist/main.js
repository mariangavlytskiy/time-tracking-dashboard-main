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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/utils */ \"./src/js/utils.js\");\n\n\n//# sourceURL=webpack://time-tracking-dashboard-main/./src/index.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchData\": () => (/* binding */ fetchData)\n/* harmony export */ });\nconst PORT = 5500;\nconst API_URL = `http://127.0.0.1:${PORT}`;\nlet period = 'daily';\nlet RESPONSE_DATA = null;\n\nfunction toClassName(title) {\n    return title.toLowerCase().split(' ').join('-');\n}\n\nfunction selectPeriod() {\n    document.querySelector(`#${period}`).classList.add('selected');\n}\n\nfunction handleOnPeriodClick() {\n    document.querySelector('.periods').addEventListener('click', (event) => {\n        if (!!event.target.innerText) {\n            document.querySelector(`#${period}`).classList.remove('selected');\n            period = event.target.innerText.toLowerCase();\n            selectPeriod();\n            if (RESPONSE_DATA) {\n                RESPONSE_DATA.forEach(({title, timeframes}) => {\n                    fillInfo(toClassName(title), timeframes);\n                });\n            }\n        }\n    });\n}\n\nfunction previousTextByPeriod(period, value) {\n    let firstPart;\n    switch(period) {\n        case 'monthly':\n            firstPart = 'Last Month';\n            break;\n        case 'weekly':\n            firstPart =  'Last Week';\n            break;\n        case 'daily':\n        default:\n            firstPart = 'Yesterday';\n            break;\n    }\n    return `${firstPart} - ${value}hrs`\n\n}\n\nfunction fillInfo(className, timeframeValues) {\n    const {current, previous} = timeframeValues[period];\n    const info = document.querySelector(`.${className}`);\n    if (info) {\n        const timeDiv = info.getElementsByClassName('time');\n        timeDiv[0].innerText = `${current}hrs`;\n        const previousDiv = info.getElementsByClassName('previous');\n        previousDiv[0].innerText = previousTextByPeriod(period, previous);\n    }\n\n}\n\nfunction fetchData() {\n    fetch(`${API_URL}/data.json`)\n        .then(response => response.json())\n        .then(json => {\n            json.forEach(({title, timeframes}) => {\n                fillInfo(toClassName(title), timeframes);\n            });\n            RESPONSE_DATA = json;\n        });\n};\n\n\nwindow.onload = fetchData();\n\nfunction init() {\n    handleOnPeriodClick();\n    selectPeriod();\n}\n\ninit();\n\n//# sourceURL=webpack://time-tracking-dashboard-main/./src/js/utils.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;