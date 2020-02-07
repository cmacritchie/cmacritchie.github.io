webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./icons/projects.js":
/*!***************************!*\
  !*** ./icons/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  title: "LR House",
  keywords: ["javascript"],
  description: "descriptions here",
  picture: "no pic",
  link: 'node',
  thumbnailSmall: 'Louis_Riel1.jpg',
  thumbnailLarge: 'InkedLouis_Riel_HarryPotter.jpg'
}, {
  title: "SEDI Webscraping",
  keywords: ["python", "beautiful soup"],
  description: "built with MySQL, python and beautiful soup",
  picture: "no pic",
  link: 'node',
  thumbnailSmall: 'TrackerIcon.png',
  thumbnailLarge: 'InkedLouis_Riel_HarryPotter.jpg'
}, {
  title: "Tracker App",
  keywords: ["javascript"],
  description: "MERN Stack Project for tracking progress",
  picture: "no pic",
  link: 'node',
  thumbnailSmall: 'Louis_Riel1.jpg',
  thumbnailLarge: 'InkedLouis_Riel_HarryPotter.jpg'
}, {
  title: "Home Irrigation",
  keywords: ["javascript"],
  description: "descriptions here",
  picture: "no pic",
  link: 'node',
  thumbnailSmall: 'Louis_Riel1.jpg',
  thumbnailLarge: 'InkedLouis_Riel_HarryPotter.jpg'
}, {
  title: "2017 U of C Hackathon",
  keywords: ["javascript"],
  description: "descriptions here",
  picture: "no pic",
  link: 'node',
  thumbnailSmall: 'Louis_Riel1.jpg',
  thumbnailLarge: 'InkedLouis_Riel_HarryPotter.jpg'
}, {
  title: "2017 SAIT Cisco Hackathon",
  keywords: ["javascript"],
  description: "descriptions here",
  picture: "no pic",
  link: 'node',
  thumbnailSmall: 'Louis_Riel1.jpg',
  thumbnailLarge: 'InkedLouis_Riel_HarryPotter.jpg'
}]);

/***/ }),

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HOC/fadeInSection */ "./HOC/fadeInSection.js");
/* harmony import */ var _HOC_blocksLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HOC/blocksLayout */ "./HOC/blocksLayout.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons_projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/projects */ "./icons/projects.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\747049\\Desktop\\craigio\\pages\\projects.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // require('../static/Louis_Riel.jpg')

var Projects = function Projects() {
  var prepareProjects = function prepareProjects() {
    return _icons_projects__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (item) {
      return __jsx(_HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
        key: item.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/project/".concat(item.link),
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, __jsx("div", {
        className: "feature-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, item.title), __jsx("picture", {
        className: "feature-box__image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx("img", {
        srcSet: __webpack_require__("./static/thumbnails sync recursive ^\\.\\/.*$")("./".concat(item.thumbnailSmall)),
        alt: "louis riel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      })), __jsx("p", {
        className: "feature-box__description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, item.description)))));
    });
  };

  return __jsx("div", {
    className: "modules",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, prepareProjects());
};

var details = {
  page: 'projects'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_HOC_blocksLayout__WEBPACK_IMPORTED_MODULE_2__["default"])(details)(Projects));

/***/ })

})
//# sourceMappingURL=index.js.ddc89eeb9b4d8def9be1.hot-update.js.map