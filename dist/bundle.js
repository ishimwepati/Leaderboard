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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_leaderboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/leaderboard */ \"./src/modules/leaderboard.js\");\n/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/form */ \"./src/modules/form.js\");\n// index.js\n\n\n\n\nconst init = () => {\n  (0,_modules_leaderboard__WEBPACK_IMPORTED_MODULE_0__.displayLeaderboard)();\n  document.getElementById('refreshButton').addEventListener('click', _modules_leaderboard__WEBPACK_IMPORTED_MODULE_0__.refreshLeaderboard);\n\n  const scoreForm = document.getElementById('scoreForm');\n  scoreForm.addEventListener('submit', _modules_form__WEBPACK_IMPORTED_MODULE_1__.handleFormSubmit); \n};\n\ninit();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleFormSubmit: () => (/* binding */ handleFormSubmit)\n/* harmony export */ });\n/* harmony import */ var _leaderboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leaderboard */ \"./src/modules/leaderboard.js\");\n // Import the addScore function from leaderboard.js\n\nfunction handleFormSubmit(event) {\n  event.preventDefault();\n  const nameInput = document.getElementById('name');\n  const scoreInput = document.getElementById('score');\n  (0,_leaderboard__WEBPACK_IMPORTED_MODULE_0__.addScore)(nameInput.value, parseInt(scoreInput.value));\n  nameInput.value = '';\n  scoreInput.value = '';\n}\n\n\n//# sourceURL=webpack:///./src/modules/form.js?");

/***/ }),

/***/ "./src/modules/leaderboard.js":
/*!************************************!*\
  !*** ./src/modules/leaderboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addScore: () => (/* binding */ addScore),\n/* harmony export */   displayLeaderboard: () => (/* binding */ displayLeaderboard),\n/* harmony export */   loadLeaderboardData: () => (/* binding */ loadLeaderboardData),\n/* harmony export */   refreshLeaderboard: () => (/* binding */ refreshLeaderboard)\n/* harmony export */ });\nlet leaderboardData = [];\n\n\nconst displayLeaderboard = () => {\n  const leaderboardList = document.getElementById('leaderboardList');\n  leaderboardList.innerHTML = '';\n\n  leaderboardData.forEach((entry, index) => {\n    const listItem = document.createElement('li');\n    listItem.textContent = `${index + 1}. ${entry.name} : ${entry.score}`;\n    leaderboardList.appendChild(listItem);\n  });\n};\n\nconst addScore = (name, score) => {\n  leaderboardData.push({ name, score });\n  displayLeaderboard();\n  saveLeaderboardData();\n};\n\nconst refreshLeaderboard = () => {\n \n  setTimeout(() => {\n    leaderboardData.push({ name: 'New Player', score: 400 });\n    displayLeaderboard();\n    saveLeaderboardData();\n  }, 5000);\n};\n\nconst saveLeaderboardData = () => {\n  localStorage.setItem('leaderboardData', JSON.stringify(leaderboardData));\n};\n\nconst loadLeaderboardData = () => {\n  const data = localStorage.getItem('leaderboardData');\n  if (data) {\n    try {\n      leaderboardData = JSON.parse(data);\n    } catch (error) {\n      console.error('Error parsing leaderboard data:', error);\n      leaderboardData = [];\n    }\n  }\n};\n\nloadLeaderboardData();\n\n\n//# sourceURL=webpack:///./src/modules/leaderboard.js?");

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