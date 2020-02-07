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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../HOC/fadeInSection */ "./HOC/fadeInSection.js");
/* harmony import */ var _HOC_navigationBlocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../HOC/navigationBlocks */ "./HOC/navigationBlocks.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Navigation */ "./components/Navigation.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about */ "./pages/about.js");
/* harmony import */ var _frameworks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./frameworks */ "./pages/frameworks.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./projects */ "./pages/projects.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contact */ "./pages/contact.js");

var _jsxFileName = "C:\\Users\\747049\\Desktop\\craigio\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
// import withLayout from '../HOC/withLayout'






 // import style from 'next/css'
// import { useState} from 'react'
// import "../sass/main.scss"

 // import Frameworks from 
// import Projects from "./projects"





var DynamicAbout = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./about */ "./pages/about.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./about */ "./pages/about.js")];
    },
    modules: ["./about"]
  }
});
var DynamicFrameworks = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./frameworks */ "./pages/frameworks.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./frameworks */ "./pages/frameworks.js")];
    },
    modules: ["./frameworks"]
  }
});
var DynamicProjects = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./projects */ "./pages/projects.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./projects */ "./pages/projects.js")];
    },
    modules: ["./projects"]
  }
});
var DynamicContact = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./contact */ "./pages/contact.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./contact */ "./pages/contact.js")];
    },
    modules: ["./contact"]
  }
}); // const mainStyle = style({ background: 'url(/static/bg.png) no-repeat center center scroll' })

var HomePage = function HomePage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('home'),
      highlighted = _useState[0],
      setHighlighted = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.intersectionRect.height / entry.rootBounds.height > 0.6) {
          setHighlighted(entry.target.id);
        }
      });
    }, {
      rootMargin: '0px 0px -60% 0px',
      //top, right, bottom left
      // threshold:[0.01, 0.20, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] 
      threshold: [0, 0.5, 0.1, 0.15, 0.2, 0.25, 0.4, 0.6, 0.8, 1]
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
  }, []); // console.log(highlighted)

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "138383410",
    __self: this
  }, ".header.jsx-138383410{height:90vh;background-image:linear-gradient(  rgba(30,144,255,0.5), rgba(3,37,69,0.5) ), url(../../static/mountain2.jpg);background-repeat:repeat-x;background-size:cover;background-position:left;position:relative;}@media screen and (max-width:700px){.header.jsx-138383410{background-position:center;background-image:linear-gradient( rgba(130,201,228,0.5), rgba(30,144,255,0.5) ), url(../../static/mountain2_phone.jpg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcNzQ3MDQ5XFxEZXNrdG9wXFxjcmFpZ2lvXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0VrQixBQUdxQixBQWlCZSxZQVhNLGVBZ0JVLCtGQWZoQix3QkFnQjdCLEdBZndCLHNCQUNHLHlCQUNQLGtCQUVwQiIsImZpbGUiOiJDOlxcVXNlcnNcXDc0NzA0OVxcRGVza3RvcFxcY3JhaWdpb1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHdpdGhMYXlvdXQgZnJvbSAnLi4vSE9DL3dpdGhMYXlvdXQnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEZhZGVJblNlY3Rpb24gZnJvbSAnLi4vSE9DL2ZhZGVJblNlY3Rpb24nXHJcbmltcG9ydCBOYXZpZ2F0aW9uQmxvY2sgZnJvbSAnLi4vSE9DL25hdmlnYXRpb25CbG9ja3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbidcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcclxuLy8gaW1wb3J0IHN0eWxlIGZyb20gJ25leHQvY3NzJ1xyXG4vLyBpbXBvcnQgeyB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbi8vIGltcG9ydCBcIi4uL3Nhc3MvbWFpbi5zY3NzXCJcclxuaW1wb3J0IFwiLi4vY3NzL3N0eWxlLmNzc1wiXHJcblxyXG4vLyBpbXBvcnQgRnJhbWV3b3JrcyBmcm9tIFxyXG4vLyBpbXBvcnQgUHJvamVjdHMgZnJvbSBcIi4vcHJvamVjdHNcIlxyXG5cclxuaW1wb3J0IEFib3V0IGZyb20gJy4vYWJvdXQnXHJcbmltcG9ydCBGcmFtZXdvcmtzIGZyb20gJy4vZnJhbWV3b3JrcydcclxuaW1wb3J0IFByb2plY3RzIGZyb20gJy4vcHJvamVjdHMnXHJcbmltcG9ydCBDb250YWN0IGZyb20gJy4vY29udGFjdCdcclxuXHJcbmNvbnN0IER5bmFtaWNBYm91dCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi9hYm91dFwiKSlcclxuY29uc3QgRHluYW1pY0ZyYW1ld29ya3MgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4vZnJhbWV3b3Jrc1wiKSlcclxuY29uc3QgRHluYW1pY1Byb2plY3RzID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuL3Byb2plY3RzXCIpKVxyXG5jb25zdCBEeW5hbWljQ29udGFjdCA9IGR5bmFtaWMoKCk9PmltcG9ydChcIi4vY29udGFjdFwiKSlcclxuXHJcblxyXG5cclxuLy8gY29uc3QgbWFpblN0eWxlID0gc3R5bGUoeyBiYWNrZ3JvdW5kOiAndXJsKC9zdGF0aWMvYmcucG5nKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBzY3JvbGwnIH0pXHJcblxyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbaGlnaGxpZ2h0ZWQsIHNldEhpZ2hsaWdodGVkXSA9IHVzZVN0YXRlKCdob21lJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcblxyXG4gICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xyXG5cclxuICAgICAgICBpZigoZW50cnkuaW50ZXJzZWN0aW9uUmVjdC5oZWlnaHQgLyBlbnRyeS5yb290Qm91bmRzLmhlaWdodCkgPiAwLjYpIHtcclxuICAgICAgICAgIHNldEhpZ2hsaWdodGVkKGVudHJ5LnRhcmdldC5pZClcclxuICAgICAgICB9IFxyXG4gICAgICB9KVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgICByb290TWFyZ2luOiAnMHB4IDBweCAtNjAlIDBweCcsIC8vdG9wLCByaWdodCwgYm90dG9tIGxlZnRcclxuICAgICAgICAgIC8vIHRocmVzaG9sZDpbMC4wMSwgMC4yMCwgMC40LCAwLjUsIDAuNiwgMC43LCAwLjgsIDAuOSwgMV0gXHJcbiAgICAgICAgICB0aHJlc2hvbGQ6WzAsIDAuNSwgMC4xLCAwLjE1LCAwLjIsIDAuMjUsIDAuNCwgMC42LCAwLjgsIDFdIFxyXG4gICAgICB9KTtcclxuICAgICAgXHJcblxyXG4gICAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2aWdhdGlvbi1ibG9jaycpO1xyXG5cclxuICAgICAgZm9yIChsZXQgZWxtIG9mIGVsZW1lbnRzKSB7XHJcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbG0pO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGZvciAobGV0IGVsbSBvZiBlbGVtZW50cykge1xyXG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbG0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuLy8gY29uc29sZS5sb2coaGlnaGxpZ2h0ZWQpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgcmdiYSgzMCwgMTQ0LCAyNTUsIDAuNSksXHJcbiAgICAgICAgICByZ2JhKDMsIDM3LCA2OSwgMC41KVxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgIHVybCguLi8uLi9zdGF0aWMvbW91bnRhaW4yLmpwZyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14OyBcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyBcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgICAuaGVhZGVye1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICByZ2JhKDEzMCwgMjAxLCAyMjgsIDAuNSksXHJcbiAgICAgICAgICAgICAgcmdiYSgzMCwgMTQ0LCAyNTUsIDAuNSlcclxuICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIHVybCguLi8uLi9zdGF0aWMvbW91bnRhaW4yX3Bob25lLmpwZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgey8qIDxOYXZpZ2F0aW9uQmxvY2sgdmlld1NlY3Rpb249eyh2YWx1ZSk9PntcclxuICAgICAgICBpZihoaWdobGlnaHRTZWN0aW9uLnNlY3Rpb24gPT09J2hvbWUnIHx8IHZhbHVlID4gaGlnaGxpZ2h0U2VjdGlvbi52YWx1ZSApXHJcbiAgICAgICAgc2V0SGlnaGxpZ2h0ZWQoe3NlY3Rpb246J2hvbWUnLCB2YWx1ZX0pXHJcbiAgICAgICAgfX0+ICovfVxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyIG5hdmlnYXRpb24tYmxvY2tcIiBpZD1cImhvbWVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190ZXh0LWJveFwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGluZy1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGluZy1wcmltYXJ5LS1tYWluXCI+Q3JhaWcgTWFjUml0Y2hpZTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRpbmctcHJpbWFyeS0tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRpbmctcHJpbWFyeS0tc3ViIGhlYWRpbmctcHJpbWFyeS0tc3ViLS0xXCI+RnVsbC1TdGFjayBEZXZlbG9wZXI8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZy1wcmltYXJ5LS1zdWIgaGVhZGluZy1wcmltYXJ5LS1zdWItLTJcIj5EYXRhIFNjaWVudGlzdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nLXByaW1hcnktLXN1YiBoZWFkaW5nLXByaW1hcnktLXN1Yi0tM1wiPkVuZ2luZWVyIGluIFRyYWluaW5nPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvaDE+IFxyXG4gICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgey8qIDwvTmF2aWdhdGlvbkJsb2NrPiAqL31cclxuICAgICAgICA8TmF2aWdhdGlvbiBjdXJyZW50VGFiID17aGlnaGxpZ2h0ZWR9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+ICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzZWN0aW9ucyBuYXZpZ2F0aW9uLWJsb2NrYH0gaWQ9XCJhYm91dFwiPlxyXG4gICAgICAgICAgICA8RmFkZUluU2VjdGlvbj5cclxuICAgICAgICAgICAgey8qIDxOYXZpZ2F0aW9uQmxvY2sgdmlld1NlY3Rpb249eyh2YWx1ZSk9PntcclxuICAgICAgICAgICAgICBpZihoaWdobGlnaHRTZWN0aW9uLnNlY3Rpb24gPT09J2Fib3V0JyB8fCB2YWx1ZSA+IGhpZ2hsaWdodFNlY3Rpb24udmFsdWUgKVxyXG4gICAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkKHtzZWN0aW9uOidhYm91dCcsIHZhbHVlfSlcclxuICAgICAgICAgICAgICB9fT4gKi99XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8QWJvdXQgLz5cclxuICAgICAgICAgICAgICB7LyogPC9OYXZpZ2F0aW9uQmxvY2s+ICovfVxyXG4gICAgICAgICAgICA8L0ZhZGVJblNlY3Rpb24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc2VjdGlvbnMgbmF2aWdhdGlvbi1ibG9ja2B9IGlkPVwic2tpbGxzXCI+XHJcbiAgICAgICAgICAgIDxGYWRlSW5TZWN0aW9uPlxyXG4gICAgICAgICAgICB7LyogPE5hdmlnYXRpb25CbG9jayB2aWV3U2VjdGlvbj17KHZhbHVlKT0+e1xyXG4gICAgICAgIGlmKGhpZ2hsaWdodFNlY3Rpb24uc2VjdGlvbiA9PT0nc2tpbGxzJyB8fCB2YWx1ZSA+IGhpZ2hsaWdodFNlY3Rpb24udmFsdWUgKVxyXG4gICAgICAgIHNldEhpZ2hsaWdodGVkKHtzZWN0aW9uOidza2lsbHMnLCB2YWx1ZX0pXHJcbiAgICAgICAgfX0+ICovfVxyXG5cclxuICAgICAgICAgICAgICA8RnJhbWV3b3JrcyAvPlxyXG4gICAgICAgICAgICAgIHsvKiA8L05hdmlnYXRpb25CbG9jaz4gKi99XHJcbiAgICAgICAgICAgIDwvRmFkZUluU2VjdGlvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzZWN0aW9ucyBuYXZpZ2F0aW9uLWJsb2NrYH0gaWQ9XCJwcm9qZWN0c1wiPlxyXG4gICAgICAgICAgICA8RmFkZUluU2VjdGlvbj5cclxuICAgICAgICAgICAgey8qIDxOYXZpZ2F0aW9uQmxvY2sgdmlld1NlY3Rpb249eyh2YWx1ZSk9PntcclxuICAgICAgICAgICAgICBpZihoaWdobGlnaHRTZWN0aW9uLnNlY3Rpb24gPT09J3Byb2plY3RzJyB8fCB2YWx1ZSA+IGhpZ2hsaWdodFNlY3Rpb24udmFsdWUgKVxyXG4gICAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkKHtzZWN0aW9uOidwcm9qZWN0cycsIHZhbHVlfSlcclxuICAgICAgICAgICAgICB9fT4gKi99XHJcblxyXG4gICAgICAgICAgICAgIDxQcm9qZWN0cyAvPlxyXG4gICAgICAgICAgICAgIHsvKiA8L05hdmlnYXRpb25CbG9jaz4gKi99XHJcbiAgICAgICAgICAgIDwvRmFkZUluU2VjdGlvbj5cclxuICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzZWN0aW9ucyBuYXZpZ2F0aW9uLWJsb2NrYH0gaWQ9XCJjb250YWN0XCI+XHJcbiAgICAgICAgICAgIDxGYWRlSW5TZWN0aW9uPlxyXG4gICAgICAgICAgICB7LyogPE5hdmlnYXRpb25CbG9jayB2aWV3U2VjdGlvbj17KHZhbHVlKT0+e1xyXG4gICAgICAgICAgICBpZihoaWdobGlnaHRTZWN0aW9uLnNlY3Rpb24gPT09J2NvbnRhY3QnIHx8IHZhbHVlID4gaGlnaGxpZ2h0U2VjdGlvbi52YWx1ZSApXHJcbiAgICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQoe3NlY3Rpb246J2NvbnRhY3QnLCB2YWx1ZX0pXHJcbiAgICAgICAgICAgICAgfX0+ICAqL31cclxuXHJcbiAgICAgICAgICAgICAgICA8Q29udGFjdCAvPlxyXG4gICAgICAgICAgICAgICAgey8qIDwvTmF2aWdhdGlvbkJsb2NrPiAqL31cclxuICAgICAgICAgICAgPC9GYWRlSW5TZWN0aW9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\747049\\\\Desktop\\\\craigio\\\\pages\\\\index.js */"), __jsx("div", {
    className: "jsx-138383410" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("header", {
    id: "home",
    className: "jsx-138383410" + " " + "header navigation-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-138383410" + " " + "header__text-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-138383410" + " " + "heading-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-138383410" + " " + "heading-primary--main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Craig MacRitchie"), __jsx("div", {
    className: "jsx-138383410" + " " + "heading-primary--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-138383410" + " " + "heading-primary--sub heading-primary--sub--1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Full-Stack Developer"), __jsx("div", {
    className: "jsx-138383410" + " " + "heading-primary--sub heading-primary--sub--2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Data Scientist"), __jsx("div", {
    className: "jsx-138383410" + " " + "heading-primary--sub heading-primary--sub--3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "Engineer in Training"))))), __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_7__["default"], {
    currentTab: highlighted,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-138383410" + " " + "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx("div", {
    id: "about",
    className: "jsx-138383410" + " " + "sections navigation-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx(_HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx(_about__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }))), __jsx("div", {
    id: "skills",
    className: "jsx-138383410" + " " + "sections navigation-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx(_HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx(_frameworks__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }))), __jsx("div", {
    id: "projects",
    className: "jsx-138383410" + " " + "sections navigation-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx(_HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx(_projects__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }))), __jsx("div", {
    id: "contact",
    className: "jsx-138383410" + " " + "sections navigation-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx(_HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx(_contact__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  })))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.27924c2dc3f2abb8fe95.hot-update.js.map