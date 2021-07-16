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

/***/ "./public/index.js":
/*!*************************!*\
  !*** ./public/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _populateTotal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./populateTotal.js */ \"./public/populateTotal.js\");\n/* harmony import */ var _populateTable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./populateTable.js */ \"./public/populateTable.js\");\n/* harmony import */ var _populateChart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./populateChart.js */ \"./public/populateChart.js\");\n/* harmony import */ var _sendTransaction_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sendTransaction.js */ \"./public/sendTransaction.js\");\n\n\n\n\nvar transactions = [];\nfetch(\"/api/transaction\").then(function (response) {\n  return response.json();\n}).then(function (data) {\n  // save db data on global variable\n  transactions = data;\n  (0,_populateTotal_js__WEBPACK_IMPORTED_MODULE_0__.populateTotal)();\n  (0,_populateTable_js__WEBPACK_IMPORTED_MODULE_1__.populateTable)();\n  (0,_populateChart_js__WEBPACK_IMPORTED_MODULE_2__.populateChart)();\n});\n\ndocument.querySelector(\"#add-btn\").onclick = function () {\n  (0,_sendTransaction_js__WEBPACK_IMPORTED_MODULE_3__.sendTransaction)(true);\n};\n\ndocument.querySelector(\"#sub-btn\").onclick = function () {\n  (0,_sendTransaction_js__WEBPACK_IMPORTED_MODULE_3__.sendTransaction)(false);\n};\n\n//# sourceURL=webpack://budget-app/./public/index.js?");

/***/ }),

/***/ "./public/populateChart.js":
/*!*********************************!*\
  !*** ./public/populateChart.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"populateChart\": () => (/* binding */ populateChart)\n/* harmony export */ });\nfunction populateChart() {\n  var transactions = [];\n  var myChart; // copy array and reverse it\n\n  var reversed = transactions.slice().reverse();\n  var sum = 0; // create date labels for chart\n\n  var labels = reversed.map(function (t) {\n    var date = new Date(t.date);\n    return \"\".concat(date.getMonth() + 1, \"/\").concat(date.getDate(), \"/\").concat(date.getFullYear());\n  }); // create incremental values for chart\n\n  var data = reversed.map(function (t) {\n    sum += parseInt(t.value);\n    return sum;\n  }); // remove old chart if it exists\n\n  if (myChart) {\n    myChart.destroy();\n  }\n\n  var ctx = document.getElementById(\"myChart\").getContext(\"2d\");\n  myChart = new Chart(ctx, {\n    type: 'line',\n    data: {\n      labels: labels,\n      datasets: [{\n        label: \"Total Over Time\",\n        fill: true,\n        backgroundColor: \"#6666ff\",\n        data: data\n      }]\n    }\n  });\n}\n\n//# sourceURL=webpack://budget-app/./public/populateChart.js?");

/***/ }),

/***/ "./public/populateTable.js":
/*!*********************************!*\
  !*** ./public/populateTable.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"populateTable\": () => (/* binding */ populateTable)\n/* harmony export */ });\nfunction populateTable() {\n  var transactions = [];\n  var tbody = document.querySelector(\"#tbody\");\n  tbody.innerHTML = \"\";\n  transactions.forEach(function (transaction) {\n    // create and populate a table row\n    var tr = document.createElement(\"tr\");\n    tr.innerHTML = \"\\n        <td>\".concat(transaction.name, \"</td>\\n        <td>\").concat(transaction.value, \"</td>\\n      \");\n    tbody.appendChild(tr);\n  });\n}\n\n//# sourceURL=webpack://budget-app/./public/populateTable.js?");

/***/ }),

/***/ "./public/populateTotal.js":
/*!*********************************!*\
  !*** ./public/populateTotal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"populateTotal\": () => (/* binding */ populateTotal)\n/* harmony export */ });\nfunction populateTotal() {\n  var transactions = []; // reduce transaction amounts to a single total value\n\n  var total = transactions.reduce(function (total, t) {\n    return total + parseInt(t.value);\n  }, 0);\n  var totalEl = document.querySelector(\"#total\");\n  totalEl.textContent = total;\n}\n\n//# sourceURL=webpack://budget-app/./public/populateTotal.js?");

/***/ }),

/***/ "./public/sendTransaction.js":
/*!***********************************!*\
  !*** ./public/sendTransaction.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendTransaction\": () => (/* binding */ sendTransaction)\n/* harmony export */ });\n/* harmony import */ var _populateTotal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./populateTotal.js */ \"./public/populateTotal.js\");\n/* harmony import */ var _populateTable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./populateTable.js */ \"./public/populateTable.js\");\n/* harmony import */ var _populateChart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./populateChart.js */ \"./public/populateChart.js\");\n\n\n\nfunction sendTransaction(isAdding) {\n  var transactions = [];\n  var nameEl = document.querySelector(\"#t-name\");\n  var amountEl = document.querySelector(\"#t-amount\");\n  var errorEl = document.querySelector(\".form .error\"); // validate form\n\n  if (nameEl.value === \"\" || amountEl.value === \"\") {\n    errorEl.textContent = \"Missing Information\";\n    return;\n  } else {\n    errorEl.textContent = \"\";\n  } // create record\n\n\n  var transaction = {\n    name: nameEl.value,\n    value: amountEl.value,\n    date: new Date().toISOString()\n  }; // if subtracting funds, convert amount to negative number\n\n  if (!isAdding) {\n    transaction.value *= -1;\n  } // add to beginning of current array of data\n\n\n  transactions.unshift(transaction); // re-run logic to populate ui with new record\n\n  (0,_populateChart_js__WEBPACK_IMPORTED_MODULE_2__.populateChart)();\n  (0,_populateTable_js__WEBPACK_IMPORTED_MODULE_1__.populateTable)();\n  (0,_populateTotal_js__WEBPACK_IMPORTED_MODULE_0__.populateTotal)(); // also send to server\n\n  fetch(\"/api/transaction\", {\n    method: \"POST\",\n    body: JSON.stringify(transaction),\n    headers: {\n      Accept: \"application/json, text/plain, */*\",\n      \"Content-Type\": \"application/json\"\n    }\n  }).then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    if (data.errors) {\n      errorEl.textContent = \"Missing Information\";\n    } else {\n      // clear form\n      nameEl.value = \"\";\n      amountEl.value = \"\";\n    }\n  })[\"catch\"](function (err) {\n    // fetch failed, so save in indexed db\n    saveRecord(transaction); // clear form\n\n    nameEl.value = \"\";\n    amountEl.value = \"\";\n  });\n}\n\n//# sourceURL=webpack://budget-app/./public/sendTransaction.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./public/index.js");
/******/ 	
/******/ })()
;