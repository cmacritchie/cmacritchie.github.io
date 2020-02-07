webpackHotUpdate("static\\development\\pages\\framework\\javascript.js",{

/***/ "./components/DynamicNavigation.js":
/*!*****************************************!*\
  !*** ./components/DynamicNavigation.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\747049\\Desktop\\craigio\\components\\DynamicNavigation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var DynamicNavigation = function DynamicNavigation(_ref) {
  var isSticky = _ref.isSticky,
      _ref$pageDetails = _ref.pageDetails,
      back = _ref$pageDetails.back,
      next = _ref$pageDetails.next,
      title = _ref$pageDetails.title;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "nav_sticky navigation-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "navigation-links__button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "navigation-links__button",
    href: back,
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Back"))), __jsx("div", {
    className: "navigation-links__page ".concat(!isSticky ? 'disappear' : 'appear'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, title), __jsx("div", {
    className: "navigation-links__button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: next,
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, next)))));
};

/* harmony default export */ __webpack_exports__["default"] = (DynamicNavigation);

/***/ })

})
//# sourceMappingURL=javascript.js.c8ea9012ff746c547911.hot-update.js.map