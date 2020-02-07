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
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: back,
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Back"), __jsx("div", {
    className: "navigation-links__page ".concat(!isSticky ? 'disappear' : 'appear'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, title), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: next,
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Next")));
};

/* harmony default export */ __webpack_exports__["default"] = (DynamicNavigation);

/***/ })

})
//# sourceMappingURL=javascript.js.7d93d0afb473fc572f30.hot-update.js.map