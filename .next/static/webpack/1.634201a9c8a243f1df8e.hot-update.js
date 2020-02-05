webpackHotUpdate(1,{

/***/ "./pages/frameworks.js":
/*!*****************************!*\
  !*** ./pages/frameworks.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HOC_informationLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HOC/informationLayout */ "./HOC/informationLayout.js");
/* harmony import */ var _HOC_blocksLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HOC/blocksLayout */ "./HOC/blocksLayout.js");
/* harmony import */ var _HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../HOC/fadeInSection */ "./HOC/fadeInSection.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icons_frameworks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/frameworks */ "./icons/frameworks.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\747049\\Desktop\\craigio\\pages\\frameworks.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Frameworks = function Frameworks() {
  var prepareframeworks = function prepareframeworks() {
    return _icons_frameworks__WEBPACK_IMPORTED_MODULE_5__["default"].map(function (item) {
      return __jsx(_HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: item.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/framework/".concat(item.link),
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, __jsx("div", {
        className: "feature-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, item.title), __jsx("picture", {
        className: "feature-box__image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__("./static/icons sync recursive ^\\.\\/.*$")("./".concat(item.icon)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      })), __jsx("p", {
        className: "feature-box__description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, item.description)))));
    });
  };

  return __jsx("div", {
    className: "modules",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, prepareframeworks());
};

var details = {
  page: 'Skills'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_HOC_blocksLayout__WEBPACK_IMPORTED_MODULE_2__["default"])(details)(Frameworks)); // export default fadeInSection(Frameworks)

/***/ })

})
//# sourceMappingURL=1.634201a9c8a243f1df8e.hot-update.js.map