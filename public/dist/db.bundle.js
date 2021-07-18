/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/assets/js/db.js":
/*!********************************!*\
  !*** ./public/assets/js/db.js ***!
  \********************************/
/***/ (() => {

eval("var db; // New db request for a \"budget\" database.\n\nvar request = indexedDB.open('budget', 1);\n\nrequest.onupgradeneeded = function (event) {\n  // Object store called \"BudgetStore\", autoIncrement set to true\n  var db = event.target.result;\n  var BudgetObjectStore = db.createObjectStore(\"BudgetStore\", {\n    autoIncrement: true\n  });\n};\n\nrequest.onsuccess = function (event) {\n  db = event.target.result; // Checking if the application is online before reading from database\n\n  if (navigator.onLine) {\n    checkDatabase();\n  }\n};\n\nrequest.onerror = function (event) {\n  // Logging error\n  console.error(event.target.error);\n};\n\nfunction saveRecord(record) {\n  // Creating a transaction on the pending db with readwrite access\n  var db = request.result; // Accessing the pending object store\n\n  var transaction = db.transaction([\"BudgetStore\"], \"readwrite\"); // Adding record to store with add method.\n\n  var budgetObjectStore = transaction.objectStore(\"BudgetStore\"); // Adds data to the objectStore\n\n  budgetObjectStore.add(record);\n}\n\nfunction checkDatabase() {\n  // Opening a transaction on the pending db\n  var db = request.result;\n  var transaction = db.transaction([\"BudgetStore\"], \"readwrite\"); // Accessing the pending object store\n\n  var budgetObjectStore = transaction.objectStore(\"BudgetStore\"); // Gets all records from store and set to getAll variable\n\n  var getAll = budgetObjectStore.getAll();\n\n  getAll.onsuccess = function () {\n    if (getAll.result.length > 0) {\n      fetch('/api/transaction', {\n        method: 'POST',\n        body: JSON.stringify(getAll.result),\n        headers: {\n          Accept: 'application/json, text/plain, */*',\n          'Content-Type': 'application/json'\n        }\n      }).then(function (response) {\n        return response.json();\n      }).then(function () {\n        // Opening a transaction on the pending db\n        var db = request.result;\n        var transaction = db.transaction([\"BudgetStore\"], \"readwrite\"); // Accessing the pending object store\n\n        var BudgetObjectStore = transaction.objectStore(\"BudgetStore\"); // Clears all items in the store\n\n        BudgetObjectStore.clear();\n      })[\"catch\"](function (err) {\n        console.log(err);\n      });\n    }\n  };\n} // Listening for app coming back online\n\n\nwindow.addEventListener('online', checkDatabase);\n\n//# sourceURL=webpack://budget-app/./public/assets/js/db.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/assets/js/db.js"]();
/******/ 	
/******/ })()
;