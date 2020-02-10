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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(["home"]),
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
            console.log('entry from top ', entry.target.id);
            setHighlighted(function (oldArray) {
              console.log('oldarray', oldArray);
              var newArray = oldArray.splice(1, 0, entry.target.id);
              return newArray;
            });
          }
        }

        if (!entry.isIntersecting) {
          //below threshold
          if (entry.boundingClientRect.top > entry.rootBounds.bottom) {
            console.log('removed ', entry.target.id);
            setHighlighted(function (oldArray) {
              return oldArray.filter(function (item) {
                return item !== entry.target.id;
              });
            });
          } else {
            console.log('scrolled out ', entry.target.id);
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
  }, ".header.jsx-645270024{height:90vh;background-image:linear-gradient(  rgba(30,144,255,0.5), rgba(3,37,69,0.5) ), url(".concat(__webpack_require__(/*! ../assets/mountain2.jpg */ "./assets/mountain2.jpg"), ");background-repeat:repeat-x;background-size:cover;background-position:left;position:relative;}@media screen and (max-width:700px){.header.jsx-645270024{background-position:center;background-image:linear-gradient( rgba(30,144,255,0.5), rgba(3,37,69,0.5) ), url( ").concat(__webpack_require__(/*! ../assets/mountain2_phone.jpg */ "./assets/mountain2_phone.jpg"), ");}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcNzQ3MDQ5XFxEZXNrdG9wXFxjcmFpZ2lvXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0ZrQixBQUdxQixBQWlCZSxZQVhRLGVBZ0JLLGlHQWZiLGVBZ0I3QixZQWZ3QixzQkFDRyx5QkFDUCxrQkFFcEIiLCJmaWxlIjoiQzpcXFVzZXJzXFw3NDcwNDlcXERlc2t0b3BcXGNyYWlnaW9cXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEZhZGVJblNlY3Rpb24gZnJvbSAnLi4vSE9DL2ZhZGVJblNlY3Rpb24nXHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbidcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcclxuXHJcbmltcG9ydCBcIi4uL2Nzcy9zdHlsZS5jc3NcIlxyXG5cclxuaW1wb3J0IEFib3V0IGZyb20gJy4vYWJvdXQnXHJcbmltcG9ydCBGcmFtZXdvcmtzIGZyb20gJy4vZnJhbWV3b3JrcydcclxuaW1wb3J0IFByb2plY3RzIGZyb20gJy4vcHJvamVjdHMnXHJcbmltcG9ydCBDb250YWN0IGZyb20gJy4vY29udGFjdCdcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtoaWdobGlnaHRlZCwgc2V0SGlnaGxpZ2h0ZWRdID0gdXNlU3RhdGUoW1wiaG9tZVwiXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgLy8gLnNwbGljZSgxLCAwLCAnRmViJyk7XHJcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuXHJcbiAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlbnRyeSlcclxuICAgICAgICBpZihlbnRyeS5pc0ludGVyc2VjdGluZyl7XHJcbiAgICAgICAgICAvLyBzZXRIaWdobGlnaHRlZChvbGRBcnJheSA9PiBbZW50cnkudGFyZ2V0LmlkLCAuLi5vbGRBcnJheV0pXHJcbiAgICAgICAgICBpZihlbnRyeS5ib3VuZGluZ0NsaWVudFJlY3QudG9wID4gZW50cnkucm9vdEJvdW5kcy50b3AgJiYgZW50cnkuYm91bmRpbmdDbGllbnRSZWN0LnRvcCA8IGVudHJ5LnJvb3RCb3VuZHMuYm90dG9tICkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZW50cnkgZnJvbSBib3R0b20gJywgZW50cnkudGFyZ2V0LmlkKVxyXG4gICAgICAgICAgICBzZXRIaWdobGlnaHRlZChvbGRBcnJheSA9PiBbZW50cnkudGFyZ2V0LmlkLCAuLi5vbGRBcnJheV0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmKGVudHJ5LmJvdW5kaW5nQ2xpZW50UmVjdC5ib3R0b20gPiBlbnRyeS5yb290Qm91bmRzLnRvcCAmJiBlbnRyeS5ib3VuZGluZ0NsaWVudFJlY3QuYm90dG9tIDwgZW50cnkucm9vdEJvdW5kcy5ib3R0b20gKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbnRyeSBmcm9tIHRvcCAnLCBlbnRyeS50YXJnZXQuaWQpXHJcbiAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkKG9sZEFycmF5ID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnb2xkYXJyYXknLCBvbGRBcnJheSlcclxuICAgICAgICAgICAgICBjb25zdCBuZXdBcnJheSA9IG9sZEFycmF5LnNwbGljZSgxLCAwLCBlbnRyeS50YXJnZXQuaWQpXHJcbiAgICAgICAgICAgICAgcmV0dXJuIG5ld0FycmF5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighZW50cnkuaXNJbnRlcnNlY3Rpbmcpe1xyXG4gICAgICAgICAgLy9iZWxvdyB0aHJlc2hvbGRcclxuICAgICAgICAgIGlmKGVudHJ5LmJvdW5kaW5nQ2xpZW50UmVjdC50b3AgPiBlbnRyeS5yb290Qm91bmRzLmJvdHRvbSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZW1vdmVkICcsIGVudHJ5LnRhcmdldC5pZClcclxuICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQob2xkQXJyYXkgPT4gb2xkQXJyYXkuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gZW50cnkudGFyZ2V0LmlkKSlcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzY3JvbGxlZCBvdXQgJywgZW50cnkudGFyZ2V0LmlkKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlbnRyeSlcclxuICAgICAgICAvLyBpZigoZW50cnkuaW50ZXJzZWN0aW9uUmVjdC5oZWlnaHQgLyBlbnRyeS5yb290Qm91bmRzLmhlaWdodCkgPiAwLjYpIHtcclxuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKGVudHJ5KVxyXG4gICAgICAgIC8vICAgc2V0SGlnaGxpZ2h0ZWQoZW50cnkudGFyZ2V0LmlkKVxyXG4gICAgICAgIC8vIH0gXHJcbiAgICAgIH0pXHJcbiAgICAgIH0sIHtcclxuICAgICAgICAgIHJvb3RNYXJnaW46ICcwcHggMHB4IC02MCUgMHB4JywgLy90b3AsIHJpZ2h0LCBib3R0b20gbGVmdFxyXG4gICAgICAgICAgLy8gdGhyZXNob2xkOlswLCAwLjUsIDAuMSwgMC4xNSwgMC4yLCAwLjI1LCAwLjQsIDAuNiwgMC44LCAxXSBcclxuICAgICAgICAgIHRocmVzaG9sZDpbMCwgMV0gXHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuXHJcbiAgICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZpZ2F0aW9uLWJsb2NrJyk7XHJcblxyXG4gICAgICBmb3IgKGxldCBlbG0gb2YgZWxlbWVudHMpIHtcclxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGVsbSk7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZm9yIChsZXQgZWxtIG9mIGVsZW1lbnRzKSB7XHJcbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsbSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKGhpZ2hsaWdodGVkKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogOTB2aDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHJnYmEoMzAsIDE0NCwgMjU1LCAwLjUpLFxyXG4gICAgICAgICAgcmdiYSgzLCAzNywgNjksIDAuNSlcclxuICAgICAgICAgICksXHJcbiAgICAgICAgICB1cmwoJHtyZXF1aXJlKCcuLi9hc3NldHMvbW91bnRhaW4yLmpwZycpfSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14OyBcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyBcclxuIFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgICAgLmhlYWRlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgIHJnYmEoMzAsIDE0NCwgMjU1LCAwLjUpLFxyXG4gICAgICAgICAgICByZ2JhKDMsIDM3LCA2OSwgMC41KVxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgdXJsKCAke3JlcXVpcmUoJy4uL2Fzc2V0cy9tb3VudGFpbjJfcGhvbmUuanBnJyl9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyIG5hdmlnYXRpb24tYmxvY2tcIiBpZD1cImhvbWVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190ZXh0LWJveFwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGluZy1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGluZy1wcmltYXJ5LS1tYWluXCI+Q3JhaWcgTWFjUml0Y2hpZTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRpbmctcHJpbWFyeS0tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRpbmctcHJpbWFyeS0tc3ViIGhlYWRpbmctcHJpbWFyeS0tc3ViLS0xXCI+RnVsbC1TdGFjayBEZXZlbG9wZXI8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZy1wcmltYXJ5LS1zdWIgaGVhZGluZy1wcmltYXJ5LS1zdWItLTJcIj5EYXRhIFNjaWVudGlzdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nLXByaW1hcnktLXN1YiBoZWFkaW5nLXByaW1hcnktLXN1Yi0tM1wiPkVuZ2luZWVyIGluIFRyYWluaW5nPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvaDE+IFxyXG4gICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgPE5hdmlnYXRpb24gY3VycmVudFRhYiA9e2hpZ2hsaWdodGVkfSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPiAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc2VjdGlvbnMgbmF2aWdhdGlvbi1ibG9ja2B9IGlkPVwiYWJvdXRcIj5cclxuICAgICAgICAgICAgPEZhZGVJblNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPEFib3V0IC8+XHJcbiAgICAgICAgICAgIDwvRmFkZUluU2VjdGlvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzZWN0aW9ucyBuYXZpZ2F0aW9uLWJsb2NrYH0gaWQ9XCJza2lsbHNcIj5cclxuICAgICAgICAgICAgPEZhZGVJblNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPEZyYW1ld29ya3MgLz5cclxuICAgICAgICAgICAgPC9GYWRlSW5TZWN0aW9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHNlY3Rpb25zIG5hdmlnYXRpb24tYmxvY2tgfSBpZD1cInByb2plY3RzXCI+XHJcbiAgICAgICAgICAgIDxGYWRlSW5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgIDxQcm9qZWN0cyAvPiAgICAgICAgXHJcbiAgICAgICAgICAgIDwvRmFkZUluU2VjdGlvbj5cclxuICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzZWN0aW9ucyBuYXZpZ2F0aW9uLWJsb2NrYH0gaWQ9XCJjb250YWN0XCI+XHJcbiAgICAgICAgICAgIDxGYWRlSW5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhY3QgLz4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvRmFkZUluU2VjdGlvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\747049\\\\Desktop\\\\craigio\\\\pages\\\\index.js */")), __jsx("div", {
    className: "jsx-645270024" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("header", {
    id: "home",
    className: "jsx-645270024" + " " + "header navigation-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-645270024" + " " + "header__text-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-645270024" + " " + "heading-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-645270024" + " " + "heading-primary--main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "Craig MacRitchie"), __jsx("div", {
    className: "jsx-645270024" + " " + "heading-primary--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-645270024" + " " + "heading-primary--sub heading-primary--sub--1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "Full-Stack Developer"), __jsx("div", {
    className: "jsx-645270024" + " " + "heading-primary--sub heading-primary--sub--2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "Data Scientist"), __jsx("div", {
    className: "jsx-645270024" + " " + "heading-primary--sub heading-primary--sub--3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Engineer in Training"))))), __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    currentTab: highlighted,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-645270024" + " " + "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx("div", {
    id: "about",
    className: "jsx-645270024" + " " + "sections navigation-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx(_HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx(_about__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }))), __jsx("div", {
    id: "skills",
    className: "jsx-645270024" + " " + "sections navigation-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx(_HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx(_frameworks__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }))), __jsx("div", {
    id: "projects",
    className: "jsx-645270024" + " " + "sections navigation-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, __jsx(_HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx(_projects__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }))), __jsx("div", {
    id: "contact",
    className: "jsx-645270024" + " " + "sections navigation-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx(_HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx(_contact__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  })))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.9558140e2f31a923584b.hot-update.js.map