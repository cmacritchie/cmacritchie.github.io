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
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\747049\\Desktop\\craigio\\components\\DynamicNavigation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var iconProp = {
  fontSize: '38px',
  verticalAlign: 'middle'
};

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
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "navigation-links__button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: back,
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("span", {
    className: "navigation-links__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Back"), __jsx("span", {
    className: "navigation-links__icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__["Home"], {
    style: iconProp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })))), __jsx("div", {
    className: "navigation-links__page ".concat(!isSticky ? 'disappear' : 'appear'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, title), __jsx("div", {
    className: "navigation-links__button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: next,
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("span", {
    className: "navigation-links__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, next), __jsx("span", {
    className: "navigation-links__icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__["Home"], {
    style: iconProp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (DynamicNavigation);

/***/ })

})
//# sourceMappingURL=javascript.js.4fc98be8dc35852f8085.hot-update.js.map