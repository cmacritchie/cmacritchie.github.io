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
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\Users\\747049\\Desktop\\craigio\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
// import withLayout from '../HOC/withLayout'





 // import style from 'next/css'
// import { useState} from 'react'
// import "../sass/main.scss"

 // import Frameworks from 
// import Projects from "./projects"

var DynamicAbout = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(function () {
  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./about */ "./pages/about.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./about */ "./pages/about.js")];
    },
    modules: ["./about"]
  }
});
var DynamicFrameworks = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./frameworks */ "./pages/frameworks.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./frameworks */ "./pages/frameworks.js")];
    },
    modules: ["./frameworks"]
  }
});
var DynamicProjects = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(function () {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./projects */ "./pages/projects.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./projects */ "./pages/projects.js")];
    },
    modules: ["./projects"]
  }
});
var DynamicContact = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(function () {
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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    section: 'home',
    lineHeight: 20
  }),
      highlighted = _useState[0],
      setHighlighted = _useState[1]; // let elements = document.querySelectorAll('.navigation-block');


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // let elements = document.querySelectorAll('.navigation-block');
    // console.log(elements)
    // let tops =
    // window.addEventListener('scroll', () => {
    // });
    var observer = new IntersectionObserver(function (entries) {
      var windowHeight = window.innerHeight;
      var windowScrolly = window.pageYOffset;
      var topScreen = windowScrolly;
      var screenThresholdPercent = 0.4;
      var windowThreshold = screenThresholdPercent * windowHeight;
      entries.forEach(function (entry) {
        if (entry.intersectionRect.height > highlighted.lineHeight) {
          console.log(entry.target.id, entry.intersectionRect.height);
          setHighlighted({
            section: entry.target.id,
            lineHeight: entry.intersectionRect.height
          }); // }
          // }  
          // }
        }
      });
    }, {
      rootMargin: '0px 0px -60% 0px',
      //top, right, bottom left
      // threshold:[0.01, 0.20, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] 
      threshold: [0, 0.1, 0.2, 0.4, 0.6, 0.8, 1]
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
  }, ".header.jsx-138383410{height:90vh;background-image:linear-gradient(  rgba(30,144,255,0.5), rgba(3,37,69,0.5) ), url(../../static/mountain2.jpg);background-repeat:repeat-x;background-size:cover;background-position:left;position:relative;}@media screen and (max-width:700px){.header.jsx-138383410{background-position:center;background-image:linear-gradient( rgba(130,201,228,0.5), rgba(30,144,255,0.5) ), url(../../static/mountain2_phone.jpg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcNzQ3MDQ5XFxEZXNrdG9wXFxjcmFpZ2lvXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUZrQixBQUdxQixBQWlCZSxZQVhNLGVBZ0JVLCtGQWZoQix3QkFnQjdCLEdBZndCLHNCQUNHLHlCQUNQLGtCQUVwQiIsImZpbGUiOiJDOlxcVXNlcnNcXDc0NzA0OVxcRGVza3RvcFxcY3JhaWdpb1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHdpdGhMYXlvdXQgZnJvbSAnLi4vSE9DL3dpdGhMYXlvdXQnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEZhZGVJblNlY3Rpb24gZnJvbSAnLi4vSE9DL2ZhZGVJblNlY3Rpb24nXHJcbmltcG9ydCBOYXZpZ2F0aW9uQmxvY2sgZnJvbSAnLi4vSE9DL25hdmlnYXRpb25CbG9ja3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbidcclxuLy8gaW1wb3J0IHN0eWxlIGZyb20gJ25leHQvY3NzJ1xyXG4vLyBpbXBvcnQgeyB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbi8vIGltcG9ydCBcIi4uL3Nhc3MvbWFpbi5zY3NzXCJcclxuaW1wb3J0IFwiLi4vY3NzL3N0eWxlLmNzc1wiXHJcblxyXG4vLyBpbXBvcnQgRnJhbWV3b3JrcyBmcm9tIFxyXG4vLyBpbXBvcnQgUHJvamVjdHMgZnJvbSBcIi4vcHJvamVjdHNcIlxyXG5cclxuY29uc3QgRHluYW1pY0Fib3V0ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuL2Fib3V0XCIpKVxyXG5jb25zdCBEeW5hbWljRnJhbWV3b3JrcyA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi9mcmFtZXdvcmtzXCIpKVxyXG5jb25zdCBEeW5hbWljUHJvamVjdHMgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4vcHJvamVjdHNcIikpXHJcbmNvbnN0IER5bmFtaWNDb250YWN0ID0gZHluYW1pYygoKT0+aW1wb3J0KFwiLi9jb250YWN0XCIpKVxyXG5cclxuXHJcblxyXG4vLyBjb25zdCBtYWluU3R5bGUgPSBzdHlsZSh7IGJhY2tncm91bmQ6ICd1cmwoL3N0YXRpYy9iZy5wbmcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIHNjcm9sbCcgfSlcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtoaWdobGlnaHRlZCwgc2V0SGlnaGxpZ2h0ZWRdID0gdXNlU3RhdGUoe3NlY3Rpb246ICdob21lJywgbGluZUhlaWdodDoyMH0pO1xyXG4gIC8vIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZpZ2F0aW9uLWJsb2NrJyk7XHJcbiAgXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2aWdhdGlvbi1ibG9jaycpO1xyXG4gICAgLy8gY29uc29sZS5sb2coZWxlbWVudHMpXHJcbiAgICAvLyBsZXQgdG9wcyA9XHJcbiAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICBcclxuICAgIC8vIH0pO1xyXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICAgIFxyXG4gICAgICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgY29uc3Qgd2luZG93U2Nyb2xseSA9IHdpbmRvdy5wYWdlWU9mZnNldFxyXG5cclxuICAgICAgIGNvbnN0IHRvcFNjcmVlbiA9IHdpbmRvd1Njcm9sbHlcclxuICAgICAgIGNvbnN0IHNjcmVlblRocmVzaG9sZFBlcmNlbnQgPTAuNFxyXG4gICAgICBcclxuICAgICAgY29uc3Qgd2luZG93VGhyZXNob2xkID0gc2NyZWVuVGhyZXNob2xkUGVyY2VudCAqIHdpbmRvd0hlaWdodFxyXG5cclxuXHJcbiAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XHJcblxyXG4gICAgICAgIGlmKGVudHJ5LmludGVyc2VjdGlvblJlY3QuaGVpZ2h0ID4gaGlnaGxpZ2h0ZWQubGluZUhlaWdodCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlbnRyeS50YXJnZXQuaWQsIGVudHJ5LmludGVyc2VjdGlvblJlY3QuaGVpZ2h0KVxyXG4gICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQoe3NlY3Rpb246ZW50cnkudGFyZ2V0LmlkLCBsaW5lSGVpZ2h0OmVudHJ5LmludGVyc2VjdGlvblJlY3QuaGVpZ2h0fSlcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gfSAgXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICB9KVxyXG5cclxuICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgICByb290TWFyZ2luOiAnMHB4IDBweCAtNjAlIDBweCcsIC8vdG9wLCByaWdodCwgYm90dG9tIGxlZnRcclxuICAgICAgICAgIC8vIHRocmVzaG9sZDpbMC4wMSwgMC4yMCwgMC40LCAwLjUsIDAuNiwgMC43LCAwLjgsIDAuOSwgMV0gXHJcbiAgICAgICAgICB0aHJlc2hvbGQ6WzAsIDAuMSwgMC4yLCAwLjQsIDAuNiwgMC44LCAxXSBcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG5cclxuICAgICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmlnYXRpb24tYmxvY2snKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGVsbSBvZiBlbGVtZW50cykge1xyXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoZWxtKTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBmb3IgKGxldCBlbG0gb2YgZWxlbWVudHMpIHtcclxuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxtKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKGhpZ2hsaWdodGVkKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogOTB2aDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHJnYmEoMzAsIDE0NCwgMjU1LCAwLjUpLFxyXG4gICAgICAgICAgcmdiYSgzLCAzNywgNjksIDAuNSlcclxuICAgICAgICAgICksXHJcbiAgICAgICAgICB1cmwoLi4vLi4vc3RhdGljL21vdW50YWluMi5qcGcpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDsgXHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgICAgLmhlYWRlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgcmdiYSgxMzAsIDIwMSwgMjI4LCAwLjUpLFxyXG4gICAgICAgICAgICAgIHJnYmEoMzAsIDE0NCwgMjU1LCAwLjUpXHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICB1cmwoLi4vLi4vc3RhdGljL21vdW50YWluMl9waG9uZS5qcGcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIHsvKiA8TmF2aWdhdGlvbkJsb2NrIHZpZXdTZWN0aW9uPXsodmFsdWUpPT57XHJcbiAgICAgICAgaWYoaGlnaGxpZ2h0U2VjdGlvbi5zZWN0aW9uID09PSdob21lJyB8fCB2YWx1ZSA+IGhpZ2hsaWdodFNlY3Rpb24udmFsdWUgKVxyXG4gICAgICAgIHNldEhpZ2hsaWdodGVkKHtzZWN0aW9uOidob21lJywgdmFsdWV9KVxyXG4gICAgICAgIH19PiAqL31cclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlciBuYXZpZ2F0aW9uLWJsb2NrXCIgaWQ9XCJob21lXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fdGV4dC1ib3hcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRpbmctcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRpbmctcHJpbWFyeS0tbWFpblwiPkNyYWlnIE1hY1JpdGNoaWU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nLXByaW1hcnktLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nLXByaW1hcnktLXN1YiBoZWFkaW5nLXByaW1hcnktLXN1Yi0tMVwiPkZ1bGwtU3RhY2sgRGV2ZWxvcGVyPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRpbmctcHJpbWFyeS0tc3ViIGhlYWRpbmctcHJpbWFyeS0tc3ViLS0yXCI+RGF0YSBTY2llbnRpc3Q8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZy1wcmltYXJ5LS1zdWIgaGVhZGluZy1wcmltYXJ5LS1zdWItLTNcIj5FbmdpbmVlciBpbiBUcmFpbmluZzwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2gxPiBcclxuICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIHsvKiA8L05hdmlnYXRpb25CbG9jaz4gKi99XHJcbiAgICAgICAgPE5hdmlnYXRpb24gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj4gICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25zIG5hdmlnYXRpb24tYmxvY2tcIiBpZD1cImFib3V0XCI+XHJcbiAgICAgICAgICAgIDxGYWRlSW5TZWN0aW9uPlxyXG4gICAgICAgICAgICB7LyogPE5hdmlnYXRpb25CbG9jayB2aWV3U2VjdGlvbj17KHZhbHVlKT0+e1xyXG4gICAgICAgICAgICAgIGlmKGhpZ2hsaWdodFNlY3Rpb24uc2VjdGlvbiA9PT0nYWJvdXQnIHx8IHZhbHVlID4gaGlnaGxpZ2h0U2VjdGlvbi52YWx1ZSApXHJcbiAgICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQoe3NlY3Rpb246J2Fib3V0JywgdmFsdWV9KVxyXG4gICAgICAgICAgICAgIH19PiAqL31cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxEeW5hbWljQWJvdXQgLz5cclxuICAgICAgICAgICAgICB7LyogPC9OYXZpZ2F0aW9uQmxvY2s+ICovfVxyXG4gICAgICAgICAgICA8L0ZhZGVJblNlY3Rpb24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbnMgbmF2aWdhdGlvbi1ibG9ja1wiIGlkPVwic2tpbGxzXCI+XHJcbiAgICAgICAgICAgIDxGYWRlSW5TZWN0aW9uPlxyXG4gICAgICAgICAgICB7LyogPE5hdmlnYXRpb25CbG9jayB2aWV3U2VjdGlvbj17KHZhbHVlKT0+e1xyXG4gICAgICAgIGlmKGhpZ2hsaWdodFNlY3Rpb24uc2VjdGlvbiA9PT0nc2tpbGxzJyB8fCB2YWx1ZSA+IGhpZ2hsaWdodFNlY3Rpb24udmFsdWUgKVxyXG4gICAgICAgIHNldEhpZ2hsaWdodGVkKHtzZWN0aW9uOidza2lsbHMnLCB2YWx1ZX0pXHJcbiAgICAgICAgfX0+ICovfVxyXG5cclxuICAgICAgICAgICAgICA8RHluYW1pY0ZyYW1ld29ya3MgLz5cclxuICAgICAgICAgICAgICB7LyogPC9OYXZpZ2F0aW9uQmxvY2s+ICovfVxyXG4gICAgICAgICAgICA8L0ZhZGVJblNlY3Rpb24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbnMgbmF2aWdhdGlvbi1ibG9ja1wiIGlkPVwicHJvamVjdHNcIj5cclxuICAgICAgICAgICAgPEZhZGVJblNlY3Rpb24+XHJcbiAgICAgICAgICAgIHsvKiA8TmF2aWdhdGlvbkJsb2NrIHZpZXdTZWN0aW9uPXsodmFsdWUpPT57XHJcbiAgICAgICAgICAgICAgaWYoaGlnaGxpZ2h0U2VjdGlvbi5zZWN0aW9uID09PSdwcm9qZWN0cycgfHwgdmFsdWUgPiBoaWdobGlnaHRTZWN0aW9uLnZhbHVlIClcclxuICAgICAgICAgICAgICBzZXRIaWdobGlnaHRlZCh7c2VjdGlvbjoncHJvamVjdHMnLCB2YWx1ZX0pXHJcbiAgICAgICAgICAgICAgfX0+ICovfVxyXG5cclxuICAgICAgICAgICAgICA8RHluYW1pY1Byb2plY3RzIC8+XHJcbiAgICAgICAgICAgICAgey8qIDwvTmF2aWdhdGlvbkJsb2NrPiAqL31cclxuICAgICAgICAgICAgPC9GYWRlSW5TZWN0aW9uPlxyXG4gICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25zIG5hdmlnYXRpb24tYmxvY2tcIiBpZD1cImNvbnRhY3RcIj5cclxuICAgICAgICAgICAgPEZhZGVJblNlY3Rpb24+XHJcbiAgICAgICAgICAgIHsvKiA8TmF2aWdhdGlvbkJsb2NrIHZpZXdTZWN0aW9uPXsodmFsdWUpPT57XHJcbiAgICAgICAgICAgIGlmKGhpZ2hsaWdodFNlY3Rpb24uc2VjdGlvbiA9PT0nY29udGFjdCcgfHwgdmFsdWUgPiBoaWdobGlnaHRTZWN0aW9uLnZhbHVlIClcclxuICAgICAgICAgICAgICBzZXRIaWdobGlnaHRlZCh7c2VjdGlvbjonY29udGFjdCcsIHZhbHVlfSlcclxuICAgICAgICAgICAgICB9fT4gICovfVxyXG5cclxuICAgICAgICAgICAgICAgIDxEeW5hbWljQ29udGFjdCAvPlxyXG4gICAgICAgICAgICAgICAgey8qIDwvTmF2aWdhdGlvbkJsb2NrPiAqL31cclxuICAgICAgICAgICAgPC9GYWRlSW5TZWN0aW9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICBUaGFua3MgdG8gPGEgaHJlZj1cImh0dHBzOi8vaWNvbnM4LmNvbS9cIj5JY29uczggPC9hPmZvciBzdXBwbHlpbmcgaWNvbnMgXHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\747049\\\\Desktop\\\\craigio\\\\pages\\\\index.js */"), __jsx("div", {
    className: "jsx-138383410" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx("header", {
    id: "home",
    className: "jsx-138383410" + " " + "header navigation-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-138383410" + " " + "header__text-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-138383410" + " " + "heading-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-138383410" + " " + "heading-primary--main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "Craig MacRitchie"), __jsx("div", {
    className: "jsx-138383410" + " " + "heading-primary--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-138383410" + " " + "heading-primary--sub heading-primary--sub--1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "Full-Stack Developer"), __jsx("div", {
    className: "jsx-138383410" + " " + "heading-primary--sub heading-primary--sub--2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "Data Scientist"), __jsx("div", {
    className: "jsx-138383410" + " " + "heading-primary--sub heading-primary--sub--3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "Engineer in Training"))))), __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-138383410" + " " + "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx("div", {
    id: "about",
    className: "jsx-138383410" + " " + "sections navigation-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx(_HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx(DynamicAbout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }))), __jsx("div", {
    id: "skills",
    className: "jsx-138383410" + " " + "sections navigation-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx(_HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx(DynamicFrameworks, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }))), __jsx("div", {
    id: "projects",
    className: "jsx-138383410" + " " + "sections navigation-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, __jsx(_HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, __jsx(DynamicProjects, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }))), __jsx("div", {
    id: "contact",
    className: "jsx-138383410" + " " + "sections navigation-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, __jsx(_HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, __jsx(DynamicContact, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  })))), __jsx("footer", {
    className: "jsx-138383410",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, "Thanks to ", __jsx("a", {
    href: "https://icons8.com/",
    className: "jsx-138383410",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, "Icons8 "), "for supplying icons")));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.08dbf6ab8d4bc94508c9.hot-update.js.map