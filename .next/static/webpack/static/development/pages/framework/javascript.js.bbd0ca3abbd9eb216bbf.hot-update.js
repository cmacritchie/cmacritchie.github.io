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
var _jsxFileName = "C:\\Users\\747049\\Desktop\\craigio\\components\\DynamicNavigation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var DynamicNavigation = function DynamicNavigation(_ref) {
  var isSticky = _ref.isSticky,
      page = _ref.page;
  // const [isSticky, setSticky] = useState(false)
  // const domRef = useRef();
  // useEffect(() => {
  //     let observer = new IntersectionObserver(function(entries) {
  //       // console.log(entries[0])
  //         return setSticky(entries[0].intersectionRatio === 0) 
  //     }, {
  //         threshold: [0, 1]
  //       });
  //       observer.observe(domRef.current);
  //     return () => observer.unobserve(domRef.current);
  //   }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "nav_sticky navigation-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "back"), __jsx("div", {
    className: !isSticky ? 'disappear' : 'appear',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, page), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "next")));
};

/* harmony default export */ __webpack_exports__["default"] = (DynamicNavigation);

/***/ })

})
//# sourceMappingURL=javascript.js.bbd0ca3abbd9eb216bbf.hot-update.js.map