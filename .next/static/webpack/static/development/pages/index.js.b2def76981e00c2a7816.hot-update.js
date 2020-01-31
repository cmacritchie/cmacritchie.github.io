webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HOC/fadeInSection */ "./HOC/fadeInSection.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Navigation */ "./components/Navigation.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\747049\\Desktop\\craigio\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// import withLayout from '../HOC/withLayout'



 // import style from 'next/css'
// import "../sass/main.scss"

 // import Frameworks from 
// import Projects from "./projects"

var DynamicAbout = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(function () {
  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./about */ "./pages/about.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./about */ "./pages/about.js")];
    },
    modules: ["./about"]
  }
});
var DynamicFrameworks = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./frameworks */ "./pages/frameworks.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./frameworks */ "./pages/frameworks.js")];
    },
    modules: ["./frameworks"]
  }
});
var DynamicProjects = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(function () {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./projects */ "./pages/projects.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./projects */ "./pages/projects.js")];
    },
    modules: ["./projects"]
  }
});
var DynamicContact = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(function () {
  return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ./contact */ "./pages/contact.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./contact */ "./pages/contact.js")];
    },
    modules: ["./contact"]
  }
}); // const mainStyle = style({ background: 'url(/static/bg.png) no-repeat center center scroll' })

var HomePage = function HomePage() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3102439976",
    __self: this
  }, ".header.jsx-3102439976{height:90vh;background-image:linear-gradient( rgba(30,144,255,0.5), rgba(0,116,228,0.5) ), url(../../static/mountain2.jpg);background-repeat:repeat-x;background-size:cover;background-position:left;position:relative;}@media screen and (max-width:700px){.header.jsx-3102439976{background-position:center;background-image:linear-gradient( rgba(30,144,255,0.5), rgba(0,116,228,0.5) );}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcNzQ3MDQ5XFxEZXNrdG9wXFxjcmFpZ2lvXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJrQixBQUdxQixBQWdCZSxZQVhNLGVBZ0JwQyw4RUFBQyxrQkFmNkIsMkJBQ0wsc0JBQ0cseUJBQ1Asa0JBRXBCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcNzQ3MDQ5XFxEZXNrdG9wXFxjcmFpZ2lvXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgd2l0aExheW91dCBmcm9tICcuLi9IT0Mvd2l0aExheW91dCdcclxuaW1wb3J0IEZhZGVJblNlY3Rpb24gZnJvbSAnLi4vSE9DL2ZhZGVJblNlY3Rpb24nXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbidcclxuLy8gaW1wb3J0IHN0eWxlIGZyb20gJ25leHQvY3NzJ1xyXG5cclxuLy8gaW1wb3J0IFwiLi4vc2Fzcy9tYWluLnNjc3NcIlxyXG5pbXBvcnQgXCIuLi9jc3Mvc3R5bGUuY3NzXCJcclxuXHJcbi8vIGltcG9ydCBGcmFtZXdvcmtzIGZyb20gXHJcbi8vIGltcG9ydCBQcm9qZWN0cyBmcm9tIFwiLi9wcm9qZWN0c1wiXHJcblxyXG5jb25zdCBEeW5hbWljQWJvdXQgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4vYWJvdXRcIikpXHJcbmNvbnN0IER5bmFtaWNGcmFtZXdvcmtzID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuL2ZyYW1ld29ya3NcIikpXHJcbmNvbnN0IER5bmFtaWNQcm9qZWN0cyA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi9wcm9qZWN0c1wiKSlcclxuY29uc3QgRHluYW1pY0NvbnRhY3QgPSBkeW5hbWljKCgpPT5pbXBvcnQoXCIuL2NvbnRhY3RcIikpXHJcblxyXG5cclxuXHJcbi8vIGNvbnN0IG1haW5TdHlsZSA9IHN0eWxlKHsgYmFja2dyb3VuZDogJ3VybCgvc3RhdGljL2JnLnBuZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgc2Nyb2xsJyB9KVxyXG5cclxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAuaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDkwdmg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgcmdiYSgzMCwgMTQ0LCAyNTUsIDAuNSksXHJcbiAgICAgICAgICByZ2JhKDAsIDExNiwgMjI4LCAwLjUpXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgdXJsKC4uLy4uL3N0YXRpYy9tb3VudGFpbjIuanBnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7IFxyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgIC5oZWFkZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgIHJnYmEoMzAsIDE0NCwgMjU1LCAwLjUpLFxyXG4gICAgICAgICAgICAgIHJnYmEoMCwgMTE2LCAyMjgsIDAuNSlcclxuICAgICAgICAgICAgICApXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiIGlkPVwiaG9tZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3RleHQtYm94XCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkaW5nLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkaW5nLXByaW1hcnktLW1haW5cIj5DcmFpZyBNYWNSaXRjaGllPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZy1wcmltYXJ5LS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZy1wcmltYXJ5LS1zdWIgaGVhZGluZy1wcmltYXJ5LS1zdWItLTFcIj5GdWxsLVN0YWNrIERldmVsb3BlcjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nLXByaW1hcnktLXN1YiBoZWFkaW5nLXByaW1hcnktLXN1Yi0tMlwiPkRhdGEgU2NpZW50aXN0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRpbmctcHJpbWFyeS0tc3ViIGhlYWRpbmctcHJpbWFyeS0tc3ViLS0zXCI+RW5naW5lZXIgaW4gVHJhaW5pbmc8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9oMT4gXHJcbiAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8TmF2aWdhdGlvbiAvPiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uc1wiIGlkPVwiYWJvdXRcIj5cclxuICAgICAgICAgIDxGYWRlSW5TZWN0aW9uPlxyXG4gICAgICAgICAgICA8RHluYW1pY0Fib3V0IC8+XHJcbiAgICAgICAgICA8L0ZhZGVJblNlY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uc1wiIGlkPVwic2tpbGxzXCI+XHJcbiAgICAgICAgICA8RmFkZUluU2VjdGlvbj5cclxuICAgICAgICAgICAgPER5bmFtaWNGcmFtZXdvcmtzIC8+XHJcbiAgICAgICAgICA8L0ZhZGVJblNlY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uc1wiIGlkPVwicHJvamVjdHNcIj5cclxuICAgICAgICAgIDxGYWRlSW5TZWN0aW9uPlxyXG4gICAgICAgICAgICA8RHluYW1pY1Byb2plY3RzIC8+XHJcbiAgICAgICAgICA8L0ZhZGVJblNlY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uc1wiIGlkPVwiY29udGFjdFwiPlxyXG4gICAgICAgICAgPEZhZGVJblNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPER5bmFtaWNDb250YWN0IC8+XHJcbiAgICAgICAgICA8L0ZhZGVJblNlY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\747049\\\\Desktop\\\\craigio\\\\pages\\\\index.js */"), __jsx("div", {
    className: "jsx-3102439976" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("header", {
    id: "home",
    className: "jsx-3102439976" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3102439976" + " " + "header__text-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3102439976" + " " + "heading-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3102439976" + " " + "heading-primary--main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Craig MacRitchie"), __jsx("div", {
    className: "jsx-3102439976" + " " + "heading-primary--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3102439976" + " " + "heading-primary--sub heading-primary--sub--1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Full-Stack Developer"), __jsx("div", {
    className: "jsx-3102439976" + " " + "heading-primary--sub heading-primary--sub--2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Data Scientist"), __jsx("div", {
    className: "jsx-3102439976" + " " + "heading-primary--sub heading-primary--sub--3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Engineer in Training"))))), __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx("div", {
    id: "about",
    className: "jsx-3102439976" + " " + "sections",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(_HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(DynamicAbout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }))), __jsx("div", {
    id: "skills",
    className: "jsx-3102439976" + " " + "sections",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(_HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(DynamicFrameworks, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }))), __jsx("div", {
    id: "projects",
    className: "jsx-3102439976" + " " + "sections",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(_HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(DynamicProjects, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }))), __jsx("div", {
    id: "contact",
    className: "jsx-3102439976" + " " + "sections",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(_HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(DynamicContact, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.b2def76981e00c2a7816.hot-update.js.map