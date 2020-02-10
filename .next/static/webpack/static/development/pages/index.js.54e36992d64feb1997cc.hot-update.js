webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      highlighted = _useState[0],
      setHighlighted = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    // .splice(1, 0, 'Feb');
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        console.log(entry);

        if (entry.isIntersecting) {
          // setHighlighted(oldArray => [entry.target.id, ...oldArray])
          if (entry.boundingClientRect.top > entry.rootBounds.top && entry.boundingClientRect.top < entry.rootBounds.bottom) {
            console.log('entry from bottom ', entry.target.id);
            setHighlighted(function (oldArray) {
              return [entry.target.id].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(oldArray));
            });
          }

          if (entry.boundingClientRect.bottom > entry.rootBounds.top && entry.boundingClientRect.bottom < entry.rootBounds.bottom) {
            console.log('entry from bottom ', entry.target.id);
            setHighlighted(function (oldArray) {
              return oldArray.splice(1, 0, entry.target.id);
            });
          }
        }

        if (!entry.isIntersecting) {
          //below threshold
          if (entry.boundingClientRect.top > entry.rootBounds.bottom) {
            setHighlighted(function (oldArray) {
              return oldArray.filter(function (item) {
                return item !== entry.target.id;
              });
            });
          }
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
  }, ".header.jsx-645270024{height:90vh;background-image:linear-gradient(  rgba(30,144,255,0.5), rgba(3,37,69,0.5) ), url(".concat(__webpack_require__(/*! ../assets/mountain2.jpg */ "./assets/mountain2.jpg"), ");background-repeat:repeat-x;background-size:cover;background-position:left;position:relative;}@media screen and (max-width:700px){.header.jsx-645270024{background-position:center;background-image:linear-gradient( rgba(30,144,255,0.5), rgba(3,37,69,0.5) ), url( ").concat(__webpack_require__(/*! ../assets/mountain2_phone.jpg */ "./assets/mountain2_phone.jpg"), ");}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcNzQ3MDQ5XFxEZXNrdG9wXFxjcmFpZ2lvXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0VrQixBQUdxQixBQWlCZSxZQVhRLGVBZ0JLLGlHQWZiLGVBZ0I3QixZQWZ3QixzQkFDRyx5QkFDUCxrQkFFcEIiLCJmaWxlIjoiQzpcXFVzZXJzXFw3NDcwNDlcXERlc2t0b3BcXGNyYWlnaW9cXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEZhZGVJblNlY3Rpb24gZnJvbSAnLi4vSE9DL2ZhZGVJblNlY3Rpb24nXHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbidcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcclxuXHJcbmltcG9ydCBcIi4uL2Nzcy9zdHlsZS5jc3NcIlxyXG5cclxuaW1wb3J0IEFib3V0IGZyb20gJy4vYWJvdXQnXHJcbmltcG9ydCBGcmFtZXdvcmtzIGZyb20gJy4vZnJhbWV3b3JrcydcclxuaW1wb3J0IFByb2plY3RzIGZyb20gJy4vcHJvamVjdHMnXHJcbmltcG9ydCBDb250YWN0IGZyb20gJy4vY29udGFjdCdcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtoaWdobGlnaHRlZCwgc2V0SGlnaGxpZ2h0ZWRdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgIC8vIC5zcGxpY2UoMSwgMCwgJ0ZlYicpO1xyXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcblxyXG4gICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZW50cnkpXHJcbiAgICAgICAgaWYoZW50cnkuaXNJbnRlcnNlY3Rpbmcpe1xyXG4gICAgICAgICAgLy8gc2V0SGlnaGxpZ2h0ZWQob2xkQXJyYXkgPT4gW2VudHJ5LnRhcmdldC5pZCwgLi4ub2xkQXJyYXldKVxyXG4gICAgICAgICAgaWYoZW50cnkuYm91bmRpbmdDbGllbnRSZWN0LnRvcCA+IGVudHJ5LnJvb3RCb3VuZHMudG9wICYmIGVudHJ5LmJvdW5kaW5nQ2xpZW50UmVjdC50b3AgPCBlbnRyeS5yb290Qm91bmRzLmJvdHRvbSApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2VudHJ5IGZyb20gYm90dG9tICcsIGVudHJ5LnRhcmdldC5pZClcclxuICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQob2xkQXJyYXkgPT4gW2VudHJ5LnRhcmdldC5pZCwgLi4ub2xkQXJyYXldKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZihlbnRyeS5ib3VuZGluZ0NsaWVudFJlY3QuYm90dG9tID4gZW50cnkucm9vdEJvdW5kcy50b3AgJiYgZW50cnkuYm91bmRpbmdDbGllbnRSZWN0LmJvdHRvbSA8IGVudHJ5LnJvb3RCb3VuZHMuYm90dG9tICkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZW50cnkgZnJvbSBib3R0b20gJywgZW50cnkudGFyZ2V0LmlkKVxyXG4gICAgICAgICAgICBzZXRIaWdobGlnaHRlZChvbGRBcnJheSA9PiBvbGRBcnJheS5zcGxpY2UoMSwgMCwgZW50cnkudGFyZ2V0LmlkKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCFlbnRyeS5pc0ludGVyc2VjdGluZyl7XHJcbiAgICAgICAgICAvL2JlbG93IHRocmVzaG9sZFxyXG4gICAgICAgICAgaWYoZW50cnkuYm91bmRpbmdDbGllbnRSZWN0LnRvcCA+IGVudHJ5LnJvb3RCb3VuZHMuYm90dG9tKXtcclxuICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQob2xkQXJyYXkgPT4gb2xkQXJyYXkuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gZW50cnkudGFyZ2V0LmlkKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZW50cnkpXHJcbiAgICAgICAgLy8gaWYoKGVudHJ5LmludGVyc2VjdGlvblJlY3QuaGVpZ2h0IC8gZW50cnkucm9vdEJvdW5kcy5oZWlnaHQpID4gMC42KSB7XHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyhlbnRyeSlcclxuICAgICAgICAvLyAgIHNldEhpZ2hsaWdodGVkKGVudHJ5LnRhcmdldC5pZClcclxuICAgICAgICAvLyB9IFxyXG4gICAgICB9KVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgICByb290TWFyZ2luOiAnMHB4IDBweCAtNjAlIDBweCcsIC8vdG9wLCByaWdodCwgYm90dG9tIGxlZnRcclxuICAgICAgICAgIC8vIHRocmVzaG9sZDpbMCwgMC41LCAwLjEsIDAuMTUsIDAuMiwgMC4yNSwgMC40LCAwLjYsIDAuOCwgMV0gXHJcbiAgICAgICAgICB0aHJlc2hvbGQ6WzAsIDFdIFxyXG4gICAgICB9KTtcclxuICAgICAgXHJcblxyXG4gICAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2aWdhdGlvbi1ibG9jaycpO1xyXG5cclxuICAgICAgZm9yIChsZXQgZWxtIG9mIGVsZW1lbnRzKSB7XHJcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbG0pO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGZvciAobGV0IGVsbSBvZiBlbGVtZW50cykge1xyXG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbG0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zb2xlLmxvZyhoaWdobGlnaHRlZClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAuaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDkwdmg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICByZ2JhKDMwLCAxNDQsIDI1NSwgMC41KSxcclxuICAgICAgICAgIHJnYmEoMywgMzcsIDY5LCAwLjUpXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgdXJsKCR7cmVxdWlyZSgnLi4vYXNzZXRzL21vdW50YWluMi5qcGcnKX0pO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDsgXHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXHJcbiBcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgIC5oZWFkZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICByZ2JhKDMwLCAxNDQsIDI1NSwgMC41KSxcclxuICAgICAgICAgICAgcmdiYSgzLCAzNywgNjksIDAuNSlcclxuICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIHVybCggJHtyZXF1aXJlKCcuLi9hc3NldHMvbW91bnRhaW4yX3Bob25lLmpwZycpfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlciBuYXZpZ2F0aW9uLWJsb2NrXCIgaWQ9XCJob21lXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fdGV4dC1ib3hcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRpbmctcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRpbmctcHJpbWFyeS0tbWFpblwiPkNyYWlnIE1hY1JpdGNoaWU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nLXByaW1hcnktLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nLXByaW1hcnktLXN1YiBoZWFkaW5nLXByaW1hcnktLXN1Yi0tMVwiPkZ1bGwtU3RhY2sgRGV2ZWxvcGVyPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRpbmctcHJpbWFyeS0tc3ViIGhlYWRpbmctcHJpbWFyeS0tc3ViLS0yXCI+RGF0YSBTY2llbnRpc3Q8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZy1wcmltYXJ5LS1zdWIgaGVhZGluZy1wcmltYXJ5LS1zdWItLTNcIj5FbmdpbmVlciBpbiBUcmFpbmluZzwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2gxPiBcclxuICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uIGN1cnJlbnRUYWIgPXtoaWdobGlnaHRlZH0gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj4gICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHNlY3Rpb25zIG5hdmlnYXRpb24tYmxvY2tgfSBpZD1cImFib3V0XCI+XHJcbiAgICAgICAgICAgIDxGYWRlSW5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgIDxBYm91dCAvPlxyXG4gICAgICAgICAgICA8L0ZhZGVJblNlY3Rpb24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc2VjdGlvbnMgbmF2aWdhdGlvbi1ibG9ja2B9IGlkPVwic2tpbGxzXCI+XHJcbiAgICAgICAgICAgIDxGYWRlSW5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgIDxGcmFtZXdvcmtzIC8+XHJcbiAgICAgICAgICAgIDwvRmFkZUluU2VjdGlvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzZWN0aW9ucyBuYXZpZ2F0aW9uLWJsb2NrYH0gaWQ9XCJwcm9qZWN0c1wiPlxyXG4gICAgICAgICAgICA8RmFkZUluU2VjdGlvbj5cclxuICAgICAgICAgICAgICA8UHJvamVjdHMgLz4gICAgICAgIFxyXG4gICAgICAgICAgICA8L0ZhZGVJblNlY3Rpb24+XHJcbiAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc2VjdGlvbnMgbmF2aWdhdGlvbi1ibG9ja2B9IGlkPVwiY29udGFjdFwiPlxyXG4gICAgICAgICAgICA8RmFkZUluU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxDb250YWN0IC8+ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0ZhZGVJblNlY3Rpb24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIl19 */\n/*@ sourceURL=C:\\\\Users\\\\747049\\\\Desktop\\\\craigio\\\\pages\\\\index.js */")), __jsx("div", {
    className: "jsx-645270024" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("header", {
    id: "home",
    className: "jsx-645270024" + " " + "header navigation-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-645270024" + " " + "header__text-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-645270024" + " " + "heading-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-645270024" + " " + "heading-primary--main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Craig MacRitchie"), __jsx("div", {
    className: "jsx-645270024" + " " + "heading-primary--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-645270024" + " " + "heading-primary--sub heading-primary--sub--1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Full-Stack Developer"), __jsx("div", {
    className: "jsx-645270024" + " " + "heading-primary--sub heading-primary--sub--2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Data Scientist"), __jsx("div", {
    className: "jsx-645270024" + " " + "heading-primary--sub heading-primary--sub--3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "Engineer in Training"))))), __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    currentTab: highlighted,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-645270024" + " " + "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx("div", {
    id: "about",
    className: "jsx-645270024" + " " + "sections navigation-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(_HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx(_about__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }))), __jsx("div", {
    id: "skills",
    className: "jsx-645270024" + " " + "sections navigation-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx(_HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx(_frameworks__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }))), __jsx("div", {
    id: "projects",
    className: "jsx-645270024" + " " + "sections navigation-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx(_HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx(_projects__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }))), __jsx("div", {
    id: "contact",
    className: "jsx-645270024" + " " + "sections navigation-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, __jsx(_HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx(_contact__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  })))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.54e36992d64feb1997cc.hot-update.js.map