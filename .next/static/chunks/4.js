(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HOC_mainLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HOC/mainLayout */ "./HOC/mainLayout.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\747049\\Desktop\\craigio\\pages\\contact.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Contact = function Contact() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "contact-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.linkedin.com/in/craig-macritchie/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["LinkedIn"], {
    style: {
      fontSize: 50
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })), __jsx("a", {
    href: "https://github.com/cmacritchie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["GitHub"], {
    style: {
      fontSize: 50
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), __jsx("a", {
    href: "mailto:craig.macritchie@gmail.com?subject=Portfolio website",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["MailOutline"], {
    style: {
      fontSize: 50
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }))), __jsx("p", {
    className: "content__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "If you have any questions or comments please contact me, I'm always looking to improve!"));
};

var details = {
  page: 'contact'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_HOC_mainLayout__WEBPACK_IMPORTED_MODULE_1__["default"])(details)(Contact));

/***/ })

}]);
//# sourceMappingURL=4.js.map