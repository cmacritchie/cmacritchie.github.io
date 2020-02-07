exports.ids = [2];
exports.modules = {

/***/ "./HOC/blocksLayout.js":
/*!*****************************!*\
  !*** ./HOC/blocksLayout.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\747049\\Desktop\\craigio\\HOC\\blocksLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const blocksLayout = ({
  page
}) => Page => {
  return () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "section-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("header", {
    className: "headster",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("h1", {
    className: "headster__text-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, page), __jsx("div", {
    className: "underline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  })), __jsx("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(Page, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (blocksLayout);

/***/ }),

/***/ "./HOC/informationLayout.js":
/*!**********************************!*\
  !*** ./HOC/informationLayout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\747049\\Desktop\\craigio\\HOC\\informationLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const informationLayout = ({
  page
}) => Page => {
  return () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "section-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "headster",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("h1", {
    className: "headster__text-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, page), __jsx("div", {
    className: "underline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  })), __jsx("div", {
    className: "information",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx(Page, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (informationLayout);

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HOC_blocksLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HOC/blocksLayout */ "./HOC/blocksLayout.js");
/* harmony import */ var _HOC_informationLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HOC/informationLayout */ "./HOC/informationLayout.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\747049\\Desktop\\craigio\\pages\\about.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const About = () => __jsx("div", {
  className: "content__text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("picture", {
  className: "about-image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("source", {
  media: "(max-width: 799px)",
  srcSet: __webpack_require__(/*! ../static/better2.jpg */ "./static/better2.jpg"),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), __jsx("source", {
  media: "(min-width: 800px)",
  srcSet: __webpack_require__(/*! ../static/better3.jpg */ "./static/better3.jpg"),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx("img", {
  srcSet: __webpack_require__(/*! ../static/better3.jpg */ "./static/better3.jpg"),
  alt: "craig macritchie",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
})), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "Hi! My name is Craig MacRitchie and I'm a full Stack developer based in Calgary. I enjoy working with a number of different technologies, though I have a passion for working with javascript. I've worked with a number of data science technologies and hope to learn more in the future."));

const details = {
  page: 'about me'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_HOC_informationLayout__WEBPACK_IMPORTED_MODULE_2__["default"])(details)(About)); // backend moving towards microservices
// ide plugins
// tech:
// 80% java
// rest is GO 
// database: mongo => postgres and event source 
// event source database as a log
// event store is the database application CQRS
// backend developer
// fair amount of chain 3 layers above 
// quality of people especialy from a tech perspective
// ember 
// tight nit team 
// not tied to a team as much as the backend

/***/ }),

/***/ "./static/better2.jpg":
/*!****************************!*\
  !*** ./static/better2.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/better2-1b8089fe91bf1bc82aeacd4068cf1d74.jpg";

/***/ }),

/***/ "./static/better3.jpg":
/*!****************************!*\
  !*** ./static/better3.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/better3-f5b186c94e27ba81bfc641e490c99818.jpg";

/***/ })

};;
//# sourceMappingURL=2.js.map