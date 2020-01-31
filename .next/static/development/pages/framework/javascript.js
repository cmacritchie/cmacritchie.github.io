(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\framework\\javascript.js"],{

/***/ "./HOC/pageLayout.js":
/*!***************************!*\
  !*** ./HOC/pageLayout.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\747049\\Desktop\\craigio\\HOC\\pageLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var pageLayout = function pageLayout(_ref) {
  var page = _ref.page;
  return function (Page) {
    return function () {
      return __jsx("div", {
        className: "sudo-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        },
        __self: this
      }, __jsx("div", {
        className: "page-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, __jsx("header", {
        className: "headster",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, __jsx("h1", {
        className: "headster__text-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, page)), __jsx("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, __jsx(Page, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }))));
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (pageLayout);

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fframework%2Fjavascript&absolutePagePath=C%3A%5CUsers%5C747049%5CDesktop%5Ccraigio%5Cpages%5Cframework%5Cjavascript.js!./":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fframework%2Fjavascript&absolutePagePath=C%3A%5CUsers%5C747049%5CDesktop%5Ccraigio%5Cpages%5Cframework%5Cjavascript.js ***!
  \****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/framework/javascript", function() {
      var mod = __webpack_require__(/*! ./pages/framework/javascript.js */ "./pages/framework/javascript.js")
      if(true) {
        module.hot.accept(/*! ./pages/framework/javascript.js */ "./pages/framework/javascript.js", function() {
          if(!next.router.components["/framework/javascript"]) return
          var updatedPage = __webpack_require__(/*! ./pages/framework/javascript.js */ "./pages/framework/javascript.js")
          next.router.update("/framework/javascript", updatedPage)
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

/***/ "./pages/framework/javascript.js":
/*!***************************************!*\
  !*** ./pages/framework/javascript.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HOC_pageLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../HOC/pageLayout */ "./HOC/pageLayout.js");
var _jsxFileName = "C:\\Users\\747049\\Desktop\\craigio\\pages\\framework\\javascript.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import React from 'react'
 // import "../css/style.css"

var Node = function Node() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "My Javascript carreer started off  when I learned vanilla javascript, then eventually Jquery. I really liked the syntax and maleability of javascript so I decided to study other javascript libraries including React, Node.js, Next.js and other npm packages"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Recently, I started looking at data structures and algorithms by looking at stephen Griders' course on Udemy. I really enjoy working on MERN stack projects."));
};

var details = {
  page: 'Javascript'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_HOC_pageLayout__WEBPACK_IMPORTED_MODULE_1__["default"])(details)(Node));

/***/ }),

/***/ 0:
/*!********************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fframework%2Fjavascript&absolutePagePath=C%3A%5CUsers%5C747049%5CDesktop%5Ccraigio%5Cpages%5Cframework%5Cjavascript.js ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fframework%2Fjavascript&absolutePagePath=C%3A%5CUsers%5C747049%5CDesktop%5Ccraigio%5Cpages%5Cframework%5Cjavascript.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fframework%2Fjavascript&absolutePagePath=C%3A%5CUsers%5C747049%5CDesktop%5Ccraigio%5Cpages%5Cframework%5Cjavascript.js!./");


/***/ }),

/***/ "dll-reference dll_ef0ff7c60362f24a921f":
/*!*******************************************!*\
  !*** external "dll_ef0ff7c60362f24a921f" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_ef0ff7c60362f24a921f;

/***/ })

},[[0,"static/runtime/webpack.js","styles"]]]);
//# sourceMappingURL=javascript.js.map