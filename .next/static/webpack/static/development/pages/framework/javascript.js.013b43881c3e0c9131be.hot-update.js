webpackHotUpdate("static\\development\\pages\\framework\\javascript.js",{

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
/* harmony import */ var _components_DynamicNavigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DynamicNavigation */ "./components/DynamicNavigation.js");
var _jsxFileName = "C:\\Users\\747049\\Desktop\\craigio\\HOC\\pageLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var PageLayout = function PageLayout(_ref) {
  var children = _ref.children,
      page = _ref.page;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isSticky = _useState[0],
      setSticky = _useState[1];

  var domRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var observer = new IntersectionObserver(function (entries) {
      // console.log(entries[0])
      return setSticky(entries[0].intersectionRatio === 0);
    }, {
      threshold: [0, 1],
      rootMargin: '-56px 0px 0px 0px' //top, right, bottom left

    });
    observer.observe(domRef.current);
    return function () {
      return observer.unobserve(domRef.current);
    };
  }, []);
  return __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(_components_DynamicNavigation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    page: page,
    isSticky: isSticky,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("div", {
    className: "#pre-navigation",
    ref: domRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("div", {
    className: "headster",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("h1", {
    className: "headster__text-box ".concat(isSticky && 'disappear'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, page), __jsx("div", {
    className: "underline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), __jsx("div", {
    className: "page-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, children)));
};

/* harmony default export */ __webpack_exports__["default"] = (PageLayout);

/***/ })

})
//# sourceMappingURL=javascript.js.013b43881c3e0c9131be.hot-update.js.map