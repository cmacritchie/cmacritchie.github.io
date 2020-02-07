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
      page = _ref.page,
      back = _ref.back,
      next = _ref.next;

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
    className: "headster__text-box ".concat(isSticky ? 'disappear' : 'appear'),
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

/***/ }),

/***/ "./pages/framework/javascript.js":
/*!***************************************!*\
  !*** ./pages/framework/javascript.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HOC_pageLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../HOC/pageLayout */ "./HOC/pageLayout.js");
var _jsxFileName = "C:\\Users\\747049\\Desktop\\craigio\\pages\\framework\\javascript.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import React from 'react'
 // import "../css/style.css"

var pageDetails = {
  page: 'Javascript',
  back: '/#frameworks',
  next: '/framework/csharp'
};

var Javascript = function Javascript() {
  return __jsx(_HOC_pageLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    pageDetails: pageDetails,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "My Javascript carreer started off  when I learned vanilla javascript, then eventually Jquery. I really liked the syntax and maleability of javascript so I decided to study other javascript libraries including React, Node.js, Next.js and other npm packages"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Recently, I started looking at data structures and algorithms by looking at stephen Griders' course on Udemy. I really enjoy working on MERN stack projects."));
};

/* harmony default export */ __webpack_exports__["default"] = (Javascript);

/***/ })

})
//# sourceMappingURL=javascript.js.20a4a096501288f886ad.hot-update.js.map