(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./HOC/blocksLayout.js":
/*!*****************************!*\
  !*** ./HOC/blocksLayout.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\747049\\Desktop\\craigio\\HOC\\blocksLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var blocksLayout = function blocksLayout(_ref) {
  var page = _ref.page;
  return function (Page) {
    return function () {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
        className: "section-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        },
        __self: this
      }, __jsx("header", {
        className: "headster",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, __jsx("h1", {
        className: "headster__text-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, page), __jsx("div", {
        className: "underline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      })), __jsx("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, __jsx(Page, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      })))));
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (blocksLayout);

/***/ }),

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
  thumbnailSmall: 'Louis_Riel1.jpg',
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
      }, __jsx("source", {
        media: "(max-width: 799px)",
        srcSet: __webpack_require__("./static/thumbnails sync recursive ^\\.\\/.*$")("./".concat(item.thumbnailSmall)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), __jsx("source", {
        media: "(min-width: 800px)",
        srcSet: __webpack_require__("./static/thumbnails sync recursive ^\\.\\/.*$")("./".concat(item.thumbnailLarge)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), __jsx("img", {
        srcSet: __webpack_require__(/*! ../static/thumbnails/Louis_Riel1.jpg */ "./static/thumbnails/Louis_Riel1.jpg"),
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

/***/ }),

/***/ "./static/thumbnails sync recursive ^\\.\\/.*$":
/*!*****************************************!*\
  !*** ./static/thumbnails sync ^\.\/.*$ ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./InkedLouis_Riel_HarryPotter.jpg": "./static/thumbnails/InkedLouis_Riel_HarryPotter.jpg",
	"./Louis_Riel1.jpg": "./static/thumbnails/Louis_Riel1.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./static/thumbnails sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./static/thumbnails/InkedLouis_Riel_HarryPotter.jpg":
/*!***********************************************************!*\
  !*** ./static/thumbnails/InkedLouis_Riel_HarryPotter.jpg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/InkedLouis_Riel_HarryPotter-5db8b7a5392681a769da7bc479017bc6.jpg";

/***/ }),

/***/ "./static/thumbnails/Louis_Riel1.jpg":
/*!*******************************************!*\
  !*** ./static/thumbnails/Louis_Riel1.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Louis_Riel1-cc8d166ba1a98076b9f0707dfa2d15ba.jpg";

/***/ })

}]);
//# sourceMappingURL=2.js.map