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

/***/ "./index.scss":
/*!********************!*\
  !*** ./index.scss ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./index.scss?");

/***/ }),

/***/ "./data.ts":
/*!*****************!*\
  !*** ./data.ts ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    items: [\n        { id: 1, icon: \"sun.svg\", sound: \"summer.mp3\", bg: \"summer-bg.jpg\", color: \"orangered\" },\n        { id: 2, icon: \"cloud-rain.svg\", sound: \"rain.mp3\", bg: \"rainy-bg.jpg\", color: \"plum\" },\n        { id: 3, icon: \"cloud-snow.svg\", sound: \"winter.mp3\", bg: \"winter-bg.jpg\", color: \"darkolivegreen\" }\n    ],\n    selectedId: 1,\n    audio: new Audio()\n});\n\n\n//# sourceURL=webpack:///./data.ts?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./index.scss\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./data.ts\");\n\n\nfunction selectSound(event) {\n    event.preventDefault();\n    var currentButton = document.querySelector(\"#button-\".concat(_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"].selectedId));\n    var currentSvg = currentButton.querySelector(\".svg\");\n    var currentItem = _data__WEBPACK_IMPORTED_MODULE_1__[\"default\"].items.find(function (item) { return item.id === _data__WEBPACK_IMPORTED_MODULE_1__[\"default\"].selectedId; });\n    var currentBackground = document.querySelector(\"#bg-\".concat(currentItem.id));\n    var button = event.target.closest(\".button\");\n    var svg = button.querySelector(\".svg\");\n    var id = +button.dataset.id;\n    var item = _data__WEBPACK_IMPORTED_MODULE_1__[\"default\"].items.find(function (item) { return item.id === id; });\n    var background = document.querySelector(\"#bg-\".concat(item.id));\n    if (_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"].selectedId !== id) {\n        currentSvg.src = \"./assets/icons/\".concat(currentItem.icon);\n        background.classList.add(\"current\");\n        currentBackground.classList.remove(\"current\");\n        _data__WEBPACK_IMPORTED_MODULE_1__[\"default\"].selectedId = id;\n        _data__WEBPACK_IMPORTED_MODULE_1__[\"default\"].audio.src = \"./assets/sounds/\".concat(item.sound);\n    }\n    if (_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"].audio.paused === true) {\n        _data__WEBPACK_IMPORTED_MODULE_1__[\"default\"].audio.src = \"./assets/sounds/\".concat(item.sound);\n        _data__WEBPACK_IMPORTED_MODULE_1__[\"default\"].audio.play();\n        svg.src = \"./assets/icons/pause.svg\";\n    }\n    else {\n        _data__WEBPACK_IMPORTED_MODULE_1__[\"default\"].audio.pause();\n        svg.src = \"./assets/icons/\".concat(item.icon);\n    }\n}\nfunction volumeSound(event) {\n    var volume = +event.target.value;\n    _data__WEBPACK_IMPORTED_MODULE_1__[\"default\"].audio.volume = volume / 100;\n}\nfunction displayApp() {\n    var root = document.querySelector(\"#app\");\n    root.innerHTML = \"\\n  <div class=\\\"wrapper\\\">\\n    <h1 class=\\\"title\\\">Weather sound</h1>\\n    <div class=\\\"items-list\\\">\\n    \".concat(_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"].items\n        .map(function (item) {\n        return \"\\n        <button class=\\\"button\\\" id=\\\"button-\".concat(item.id, \"\\\" data-id=\\\"\").concat(item.id, \"\\\">\\n          <img src=\\\"./assets/\").concat(item.bg, \"\\\" class=\\\"background\\\">\\n          <img src=\\\"./assets/icons/\").concat(item.icon, \"\\\" class=\\\"svg\\\">\\n        </button>\\n        \");\n    })\n        .join(\"\"), \"\\n    </div>\\n    <input type=\\\"range\\\" class=\\\"input\\\">\\n    \").concat(_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"].items.map(function (item) { return \"<img src=\\\"./assets/\".concat(item.bg, \"\\\" class=\\\"background\\\" id=\\\"bg-\").concat(item.id, \"\\\">\"); }).join(\"\"), \"\\n  </div>\\n  \");\n}\nfunction start() {\n    displayApp();\n    var buttonList = document.querySelectorAll(\".button\");\n    var input = document.querySelector(\".input\");\n    buttonList === null || buttonList === void 0 ? void 0 : buttonList.forEach(function (button) { return button.addEventListener(\"click\", selectSound); });\n    input.addEventListener(\"input\", volumeSound);\n}\nstart();\n\n\n//# sourceURL=webpack:///./index.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;