webpackHotUpdate("static\\development\\pages\\projects.js",{

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HOC_mainLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HOC/mainLayout */ "./HOC/mainLayout.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/projects */ "./icons/projects.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\747049\\Desktop\\craigio\\pages\\projects.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // require('../static/Louis_Riel.jpg')

var Projects = function Projects() {
  var prepareProjects = function prepareProjects() {
    return _icons_projects__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (item) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        key: item.title,
        href: "/project/".concat(item.link),
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, __jsx("div", {
        className: "feature-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, item.title), __jsx("picture", {
        className: "feature-box__image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx("source", {
        media: "(max-width: 799px)",
        srcSet: __webpack_require__("./static/thumbnails sync recursive ^\\.\\/.*$")("./".concat(item.thumbnailSmall)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), __jsx("source", {
        media: "(min-width: 800px)",
        srcSet: __webpack_require__("./static/thumbnails sync recursive ^\\.\\/.*$")("./".concat(item.thumbnailLarge)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), __jsx("img", {
        srcSet: __webpack_require__(/*! ../static/thumbnails/Louis_Riel1.jpg */ "./static/thumbnails/Louis_Riel1.jpg"),
        alt: "louis riel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      })), __jsx("p", {
        className: "feature-box__description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, item.description))));
    });
  };

  return __jsx("div", {
    className: "modules",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, prepareProjects());
};

var details = {
  page: 'projects'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_HOC_mainLayout__WEBPACK_IMPORTED_MODULE_1__["default"])(details)(Projects));

/***/ })

})
//# sourceMappingURL=projects.js.3113fbbc72e064738d28.hot-update.js.map