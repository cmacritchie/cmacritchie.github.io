(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\framework\\docker.js"],{

/***/ "./HOC/mainLayout.js":
/*!***************************!*\
  !*** ./HOC/mainLayout.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\747049\\Desktop\\craigio\\HOC\\mainLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var mainLayout = function mainLayout(_ref) {
  var page = _ref.page;
  return function (Page) {
    return function () {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        },
        __self: this
      }, __jsx("header", {
        className: "headster",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, __jsx("h1", {
        className: "headster__text-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, page)), __jsx("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, __jsx(Page, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }))));
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (mainLayout);

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fframework%2Fdocker&absolutePagePath=C%3A%5CUsers%5C747049%5CDesktop%5Ccraigio%5Cpages%5Cframework%5Cdocker.js!./":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fframework%2Fdocker&absolutePagePath=C%3A%5CUsers%5C747049%5CDesktop%5Ccraigio%5Cpages%5Cframework%5Cdocker.js ***!
  \********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/framework/docker", function() {
      var mod = __webpack_require__(/*! ./pages/framework/docker.js */ "./pages/framework/docker.js")
      if(true) {
        module.hot.accept(/*! ./pages/framework/docker.js */ "./pages/framework/docker.js", function() {
          if(!next.router.components["/framework/docker"]) return
          var updatedPage = __webpack_require__(/*! ./pages/framework/docker.js */ "./pages/framework/docker.js")
          next.router.update("/framework/docker", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_ef0ff7c60362f24a921f ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ef0ff7c60362f24a921f */ "dll-reference dll_ef0ff7c60362f24a921f"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/framework/docker.js":
/*!***********************************!*\
  !*** ./pages/framework/docker.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HOC_mainLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../HOC/mainLayout */ "./HOC/mainLayout.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import React from 'react'
 // import "../css/style.css"

var Node = function Node() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "I've only started using Docker recently, but I can see how it can be useful for devops. I've used docker to containerize a fullstack javascript project and handle routing using NGINX. Although I'm still getting familiar with docker, I plan on becoming more familiar with it in the future.");
};

var details = {
  page: 'Docker'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_HOC_mainLayout__WEBPACK_IMPORTED_MODULE_1__["default"])(details)(Node));

/***/ }),

/***/ 6:
/*!************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fframework%2Fdocker&absolutePagePath=C%3A%5CUsers%5C747049%5CDesktop%5Ccraigio%5Cpages%5Cframework%5Cdocker.js ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fframework%2Fdocker&absolutePagePath=C%3A%5CUsers%5C747049%5CDesktop%5Ccraigio%5Cpages%5Cframework%5Cdocker.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fframework%2Fdocker&absolutePagePath=C%3A%5CUsers%5C747049%5CDesktop%5Ccraigio%5Cpages%5Cframework%5Cdocker.js!./");


/***/ }),

/***/ "dll-reference dll_ef0ff7c60362f24a921f":
/*!*******************************************!*\
  !*** external "dll_ef0ff7c60362f24a921f" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_ef0ff7c60362f24a921f;

/***/ })

},[[6,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=docker.js.map