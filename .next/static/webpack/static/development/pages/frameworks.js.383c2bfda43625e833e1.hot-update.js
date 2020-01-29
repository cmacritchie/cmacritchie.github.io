webpackHotUpdate("static\\development\\pages\\frameworks.js",{

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
/* harmony import */ var _HOC_mainLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HOC/mainLayout */ "./HOC/mainLayout.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons_frameworks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/frameworks */ "./icons/frameworks.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\747049\\Desktop\\craigio\\pages\\frameworks.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Frameworks = function Frameworks() {
  var prepareframeworks = function prepareframeworks() {
    return _icons_frameworks__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (item) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        key: item.title,
        href: "/framework/".concat(item.link),
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, __jsx("div", {
        className: "feature-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, item.title), __jsx("picture", {
        className: "feature-box__image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__("./static/icons sync recursive ^\\.\\/.*$")("./".concat(item.icon)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      })), __jsx("p", {
        className: "feature-box__description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, item.description))));
    });
  };

  return __jsx("div", {
    className: "modules",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, prepareframeworks());
};

var details = {
  page: 'frameworks'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_HOC_mainLayout__WEBPACK_IMPORTED_MODULE_1__["default"])(details)(Frameworks));

/***/ }),

/***/ "./static/icons sync recursive ^\\.\\/.*$":
/*!************************************!*\
  !*** ./static/icons sync ^\.\/.*$ ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./icons8-docker.svg": "./static/icons/icons8-docker.svg",
	"./javascript.svg": "./static/icons/javascript.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./static/icons sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./static/icons/javascript.svg":
/*!*************************************!*\
  !*** ./static/icons/javascript.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+SmF2YVNjcmlwdCBpY29uPC90aXRsZT48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHptMjIuMDM0IDE4LjI3NmMtLjE3NS0xLjA5NS0uODg4LTIuMDE1LTMuMDAzLTIuODczLS43MzYtLjM0NS0xLjU1NC0uNTg1LTEuNzk3LTEuMTQtLjA5MS0uMzMtLjEwNS0uNTEtLjA0Ni0uNzA1LjE1LS42NDYuOTE1LS44NCAxLjUxNS0uNjYuMzkuMTIuNzUuNDIuOTc2LjkgMS4wMzQtLjY3NiAxLjAzNC0uNjc2IDEuNzU1LTEuMTI1LS4yNy0uNDItLjQwNC0uNjAxLS41ODYtLjc4LS42My0uNzA1LTEuNDY5LTEuMDY1LTIuODM0LTEuMDM0bC0uNzA1LjA4OWMtLjY3Ni4xNjUtMS4zMi41MjUtMS43MSAxLjAwNS0xLjE0IDEuMjkxLS44MTEgMy41NDEuNTY5IDQuNDcxIDEuMzY1IDEuMDIgMy4zNjEgMS4yNDQgMy42MTYgMi4yMDUuMjQgMS4xNy0uODcgMS41NDUtMS45NjYgMS40MS0uODExLS4xOC0xLjI2LS41ODYtMS43NTUtMS4zMzZsLTEuODMgMS4wNTFjLjIxLjQ4LjQ1LjY4OS44MSAxLjEwOSAxLjc0IDEuNzU2IDYuMDkgMS42NjYgNi44NzEtMS4wMDQuMDI5LS4wOS4yNC0uNzA1LjA3NC0xLjY1bC4wNDYuMDY3em0tOC45ODMtNy4yNDVoLTIuMjQ4YzAgMS45MzgtLjAwOSAzLjg2NC0uMDA5IDUuODA1IDAgMS4yMzIuMDYzIDIuMzYzLS4xMzggMi43MTEtLjMzLjY4OS0xLjE4LjYwMS0xLjU2Ni40OC0uMzk2LS4xOTYtLjU5Ny0uNDY2LS44My0uODU1LS4wNjMtLjEwNS0uMTEtLjE5Ni0uMTI3LS4xOTZsLTEuODI1IDEuMTI1Yy4zMDUuNjMuNzUgMS4xNzIgMS4zMjQgMS41MTcuODU1LjUxIDIuMDA0LjY3NSAzLjIwNy40MDUuNzgzLS4yMjYgMS40NTgtLjY5MSAxLjgxMS0xLjQxMS41MS0uOTMuNDAyLTIuMDcuMzk3LTMuMzQ2LjAxMi0yLjA1NCAwLTQuMTA5IDAtNi4xNzlsLjAwNC0uMDU2eiIvPjwvc3ZnPg=="

/***/ })

})
//# sourceMappingURL=frameworks.js.383c2bfda43625e833e1.hot-update.js.map