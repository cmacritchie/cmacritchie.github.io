webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../HOC/fadeInSection */ "./HOC/fadeInSection.js");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Navigation */ "./components/Navigation.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about */ "./pages/about.js");
/* harmony import */ var _frameworks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./frameworks */ "./pages/frameworks.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projects */ "./pages/projects.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact */ "./pages/contact.js");


var _jsxFileName = "C:\\Users\\747049\\Desktop\\craigio\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;










var HomePage = function HomePage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(['home']),
      highlighted = _useState[0],
      setHighlighted = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setHighlighted(function (oldArray) {
            return [entry.EventTarget.id].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(oldArray));
          });
        } // console.log(entry)
        // if((entry.intersectionRect.height / entry.rootBounds.height) > 0.6) {
        //   console.log(entry)
        //   setHighlighted(entry.target.id)
        // } 

      });
    }, {
      rootMargin: '0px 0px -60% 0px',
      //top, right, bottom left
      // threshold:[0, 0.5, 0.1, 0.15, 0.2, 0.25, 0.4, 0.6, 0.8, 1] 
      threshold: [0, 1]
    });
    var elements = document.querySelectorAll('.navigation-block');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(elements), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var elm = _step.value;
        observer.observe(elm);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return function () {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(elements), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var elm = _step2.value;
          observer.unobserve(elm);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    };
  }, []);
  console.log(highlighted);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "645270024",
    __self: this
  }, ".header.jsx-645270024{height:90vh;background-image:linear-gradient(  rgba(30,144,255,0.5), rgba(3,37,69,0.5) ), url(".concat(__webpack_require__(/*! ../assets/mountain2.jpg */ "./assets/mountain2.jpg"), ");background-repeat:repeat-x;background-size:cover;background-position:left;position:relative;}@media screen and (max-width:700px){.header.jsx-645270024{background-position:center;background-image:linear-gradient( rgba(30,144,255,0.5), rgba(3,37,69,0.5) ), url( ").concat(__webpack_require__(/*! ../assets/mountain2_phone.jpg */ "./assets/mountain2_phone.jpg"), ");}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcNzQ3MDQ5XFxEZXNrdG9wXFxjcmFpZ2lvXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdURrQixBQUdxQixBQWlCZSxZQVhRLGVBZ0JLLGlHQWZiLGVBZ0I3QixZQWZ3QixzQkFDRyx5QkFDUCxrQkFFcEIiLCJmaWxlIjoiQzpcXFVzZXJzXFw3NDcwNDlcXERlc2t0b3BcXGNyYWlnaW9cXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEZhZGVJblNlY3Rpb24gZnJvbSAnLi4vSE9DL2ZhZGVJblNlY3Rpb24nXHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbidcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcclxuXHJcbmltcG9ydCBcIi4uL2Nzcy9zdHlsZS5jc3NcIlxyXG5cclxuaW1wb3J0IEFib3V0IGZyb20gJy4vYWJvdXQnXHJcbmltcG9ydCBGcmFtZXdvcmtzIGZyb20gJy4vZnJhbWV3b3JrcydcclxuaW1wb3J0IFByb2plY3RzIGZyb20gJy4vcHJvamVjdHMnXHJcbmltcG9ydCBDb250YWN0IGZyb20gJy4vY29udGFjdCdcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtoaWdobGlnaHRlZCwgc2V0SGlnaGxpZ2h0ZWRdID0gdXNlU3RhdGUoWydob21lJ10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG5cclxuICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcclxuXHJcbiAgICAgICAgaWYoZW50cnkuaXNJbnRlcnNlY3Rpbmcpe1xyXG4gICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQob2xkQXJyYXkgPT4gW2VudHJ5LkV2ZW50VGFyZ2V0LmlkLCAuLi5vbGRBcnJheV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVudHJ5KVxyXG4gICAgICAgIC8vIGlmKChlbnRyeS5pbnRlcnNlY3Rpb25SZWN0LmhlaWdodCAvIGVudHJ5LnJvb3RCb3VuZHMuaGVpZ2h0KSA+IDAuNikge1xyXG4gICAgICAgIC8vICAgY29uc29sZS5sb2coZW50cnkpXHJcbiAgICAgICAgLy8gICBzZXRIaWdobGlnaHRlZChlbnRyeS50YXJnZXQuaWQpXHJcbiAgICAgICAgLy8gfSBcclxuICAgICAgfSlcclxuICAgICAgfSwge1xyXG4gICAgICAgICAgcm9vdE1hcmdpbjogJzBweCAwcHggLTYwJSAwcHgnLCAvL3RvcCwgcmlnaHQsIGJvdHRvbSBsZWZ0XHJcbiAgICAgICAgICAvLyB0aHJlc2hvbGQ6WzAsIDAuNSwgMC4xLCAwLjE1LCAwLjIsIDAuMjUsIDAuNCwgMC42LCAwLjgsIDFdIFxyXG4gICAgICAgICAgdGhyZXNob2xkOlswLCAxXSBcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG5cclxuICAgICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmlnYXRpb24tYmxvY2snKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGVsbSBvZiBlbGVtZW50cykge1xyXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoZWxtKTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBmb3IgKGxldCBlbG0gb2YgZWxlbWVudHMpIHtcclxuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxtKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc29sZS5sb2coaGlnaGxpZ2h0ZWQpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgcmdiYSgzMCwgMTQ0LCAyNTUsIDAuNSksXHJcbiAgICAgICAgICByZ2JhKDMsIDM3LCA2OSwgMC41KVxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgIHVybCgke3JlcXVpcmUoJy4uL2Fzc2V0cy9tb3VudGFpbjIuanBnJyl9KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7IFxyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxyXG4gXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgICAuaGVhZGVye1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgcmdiYSgzMCwgMTQ0LCAyNTUsIDAuNSksXHJcbiAgICAgICAgICAgIHJnYmEoMywgMzcsIDY5LCAwLjUpXHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICB1cmwoICR7cmVxdWlyZSgnLi4vYXNzZXRzL21vdW50YWluMl9waG9uZS5qcGcnKX0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXIgbmF2aWdhdGlvbi1ibG9ja1wiIGlkPVwiaG9tZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3RleHQtYm94XCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkaW5nLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkaW5nLXByaW1hcnktLW1haW5cIj5DcmFpZyBNYWNSaXRjaGllPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZy1wcmltYXJ5LS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZy1wcmltYXJ5LS1zdWIgaGVhZGluZy1wcmltYXJ5LS1zdWItLTFcIj5GdWxsLVN0YWNrIERldmVsb3BlcjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nLXByaW1hcnktLXN1YiBoZWFkaW5nLXByaW1hcnktLXN1Yi0tMlwiPkRhdGEgU2NpZW50aXN0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRpbmctcHJpbWFyeS0tc3ViIGhlYWRpbmctcHJpbWFyeS0tc3ViLS0zXCI+RW5naW5lZXIgaW4gVHJhaW5pbmc8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9oMT4gXHJcbiAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8TmF2aWdhdGlvbiBjdXJyZW50VGFiID17aGlnaGxpZ2h0ZWR9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+ICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzZWN0aW9ucyBuYXZpZ2F0aW9uLWJsb2NrYH0gaWQ9XCJhYm91dFwiPlxyXG4gICAgICAgICAgICA8RmFkZUluU2VjdGlvbj5cclxuICAgICAgICAgICAgICA8QWJvdXQgLz5cclxuICAgICAgICAgICAgPC9GYWRlSW5TZWN0aW9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHNlY3Rpb25zIG5hdmlnYXRpb24tYmxvY2tgfSBpZD1cInNraWxsc1wiPlxyXG4gICAgICAgICAgICA8RmFkZUluU2VjdGlvbj5cclxuICAgICAgICAgICAgICA8RnJhbWV3b3JrcyAvPlxyXG4gICAgICAgICAgICA8L0ZhZGVJblNlY3Rpb24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc2VjdGlvbnMgbmF2aWdhdGlvbi1ibG9ja2B9IGlkPVwicHJvamVjdHNcIj5cclxuICAgICAgICAgICAgPEZhZGVJblNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPFByb2plY3RzIC8+ICAgICAgICBcclxuICAgICAgICAgICAgPC9GYWRlSW5TZWN0aW9uPlxyXG4gICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHNlY3Rpb25zIG5hdmlnYXRpb24tYmxvY2tgfSBpZD1cImNvbnRhY3RcIj5cclxuICAgICAgICAgICAgPEZhZGVJblNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFjdCAvPiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9GYWRlSW5TZWN0aW9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\747049\\\\Desktop\\\\craigio\\\\pages\\\\index.js */")), __jsx("div", {
    className: "jsx-645270024" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("header", {
    id: "home",
    className: "jsx-645270024" + " " + "header navigation-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-645270024" + " " + "header__text-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-645270024" + " " + "heading-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-645270024" + " " + "heading-primary--main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Craig MacRitchie"), __jsx("div", {
    className: "jsx-645270024" + " " + "heading-primary--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-645270024" + " " + "heading-primary--sub heading-primary--sub--1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Full-Stack Developer"), __jsx("div", {
    className: "jsx-645270024" + " " + "heading-primary--sub heading-primary--sub--2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Data Scientist"), __jsx("div", {
    className: "jsx-645270024" + " " + "heading-primary--sub heading-primary--sub--3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Engineer in Training"))))), __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    currentTab: highlighted,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-645270024" + " " + "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("div", {
    id: "about",
    className: "jsx-645270024" + " " + "sections navigation-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx(_HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx(_about__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }))), __jsx("div", {
    id: "skills",
    className: "jsx-645270024" + " " + "sections navigation-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx(_HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx(_frameworks__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }))), __jsx("div", {
    id: "projects",
    className: "jsx-645270024" + " " + "sections navigation-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx(_HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx(_projects__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }))), __jsx("div", {
    id: "contact",
    className: "jsx-645270024" + " " + "sections navigation-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx(_HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx(_contact__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  })))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.d06b5129f5f112b98dfe.hot-update.js.map