exports.ids = [3];
exports.modules = {

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

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HOC_informationLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HOC/informationLayout */ "./HOC/informationLayout.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\747049\\Desktop\\craigio\\pages\\contact.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const iconProp = {
  fontSize: '50px',
  verticalAlign: 'middle'
};

const Contact = () => __jsx("div", {
  className: "content__text about-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("div", {
  className: "contact-icons",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("a", {
  href: "https://www.linkedin.com/in/craig-macritchie/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["LinkedIn"], {
  style: iconProp,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
})), __jsx("a", {
  href: "https://github.com/cmacritchie",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["GitHub"], {
  style: iconProp,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
})), __jsx("a", {
  href: "mailto:craig.macritchie@gmail.com?subject=Portfolio website",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["MailOutline"], {
  style: iconProp,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}))), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, "If you have any questions or comments please contact me, I'm always looking to improve!"), __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}), __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}), __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, "I am currently working on:"), __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, "DevOps"));

const details = {
  page: 'contact'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_HOC_informationLayout__WEBPACK_IMPORTED_MODULE_1__["default"])(details)(Contact));

/***/ })

};;
//# sourceMappingURL=3.js.map