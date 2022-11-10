/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../js/index.js":
/*!**********************!*\
  !*** ../js/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"../scss/style.scss\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation */ \"../js/validation.js\");\n\n\n\nObject(_validation__WEBPACK_IMPORTED_MODULE_1__[\"validation\"])();\nObject(_validation__WEBPACK_IMPORTED_MODULE_1__[\"copyToClipboard\"])();\n\nconst humberger_icon = document.querySelector(\".humberger_icon\");\nconst side_bar_contents_icon = document.querySelector(\n    \".side_bar_contents_icon\"\n);\nconst js_contents_icon = document.querySelector(\".js_contents_icon\");\nconst js_add_sheet_open = document.querySelector(\".js_add_sheet_open\");\nconst contents_add_close_sp = document.querySelector(\".contents_add_close_sp\");\n\nconst humberger_icon_line = document.querySelector(\".humberger_icon_line\");\nconst contents_add = document.querySelector(\".contents_add\");\nconst contents_add_buttons = document.querySelector(\".contents_add_buttons\");\nconst contents_list = document.querySelector(\".contents_list\");\nconst copyclipboard = document.querySelector(\".copyclipboard\");\nconst copyclipboard_btn = document.querySelector(\".copyclipboard_btn\");\n\n// ハンバーガーアイコンをクリックしたときのイベント\nhumberger_icon.addEventListener(\"click\", () => {\n    humberger_icon_line.classList.toggle(\"is_active\");\n});\n\n// 追加シートを開閉するときのファンクション\nfunction sheet_is_active() {\n    const is_active = contents_add.classList.toggle(\"is_active\");\n    side_bar_contents_icon.classList.toggle(\"is_active\");\n    contents_add_buttons.classList.toggle(\"is_active\");\n    contents_list.classList.toggle(\"is_active\");\n    if (is_active === true) {\n        document.getElementsByTagName(\"body\")[0].style.overflow = \"hidden\";\n    } else {\n        document.getElementsByTagName(\"body\")[0].style.overflow = \"visible\";\n    }\n}\n\nfunction sheet_is_close() {\n    contents_add.classList.remove(\"is_active\");\n    side_bar_contents_icon.classList.remove(\"is_active\");\n    contents_add_buttons.classList.remove(\"is_active\");\n    contents_list.classList.remove(\"is_active\");\n}\n\n// スマホでコンテンツアイコンをクリックしたときのイベント\njs_contents_icon.addEventListener(\"click\", () => {\n    js_contents_icon.classList.toggle(\"is_active\");\n});\n\n// サイドバーのコンテンツアイコンをクリックしたときのイベント\nside_bar_contents_icon.addEventListener(\"click\", () => {\n    sheet_is_active();\n});\n\n// スマホの追加ボタンをクリックしたときのイベント\njs_add_sheet_open.addEventListener(\"click\", () => {\n    sheet_is_active();\n});\n\n// スマホのばつボタンをクリックしたときのイベント\ncontents_add_close_sp.addEventListener(\"click\", () => {\n    sheet_is_close();\n});\n\n// クリップボードコピーしましたの閉じるボタンを押したときのイベント\ncopyclipboard_btn.addEventListener(\"click\", () => {\n    copyclipboard.classList.remove(\"is_active\");\n});\n\n\n//# sourceURL=webpack:///../js/index.js?");

/***/ }),

/***/ "../js/validation.js":
/*!***************************!*\
  !*** ../js/validation.js ***!
  \***************************/
/*! exports provided: validation, copyToClipboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validation\", function() { return validation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"copyToClipboard\", function() { return copyToClipboard; });\nconst form = document.querySelector(\".contents_add_form\");\nconst button = document.querySelector(\".contents_add_button_register\");\nconst contents_add_input =\n    document.getElementsByClassName(\"contents_add_input\")[1];\nconst contents_list_table_items = document.getElementsByClassName(\n    \"contents_list_table_item\"\n);\n\nconst copyclipboard = document.querySelector(\".copyclipboard\");\n\nconst validation = function () {\n    button.addEventListener(\"click\", () => {\n        const validation = form.checkValidity();\n        // const report = form.reportValidity();\n        const a = contents_add_input.reportValidity();\n        console.log(validation);\n        console.log(\"ddd\" + a);\n        // console.log(report);\n        // return validation;\n    });\n};\n\nconst copyToClipboard = function () {\n    for (const table_item of contents_list_table_items) {\n        const item_children = table_item.children;\n        // console.log(item_children);\n        for (const td of item_children) {\n            td.addEventListener(\"click\", () => {\n                const text = td.textContent;\n                console.log(text);\n                navigator.clipboard.writeText(text);\n                copyclipboard.classList.add(\"is_active\");\n                setTimeout(() => {\n                    copyclipboard.classList.remove(\"is_active\");\n                }, 4000);\n            });\n        }\n    }\n};\n\n\n//# sourceURL=webpack:///../js/validation.js?");

/***/ }),

/***/ "../scss/style.scss":
/*!**************************!*\
  !*** ../scss/style.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///../scss/style.scss?");

/***/ })

/******/ });