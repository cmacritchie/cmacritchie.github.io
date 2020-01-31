(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./HOC/mainLayout.js":
/*!***************************!*\
  !*** ./HOC/mainLayout.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\747049\\Desktop\\craigio\\HOC\\mainLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var mainLayout = function mainLayout(_ref) {
  var page = _ref.page;
  return function (Page) {
    return function () {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
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
      }, page)), __jsx("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, __jsx(Page, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }))));
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (mainLayout);

/***/ }),

/***/ "./icons/frameworks.js":
/*!*****************************!*\
  !*** ./icons/frameworks.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  title: "React / Redux",
  keywords: ["react", "redux"],
  picture: "no pic",
  link: 'react',
  icon: 'icons8-react.svg',
  description: "Redux, Context API, HOC, Hooks"
}, {
  title: "Node js",
  keywords: ["javascript", "node"],
  link: 'node',
  icon: 'icons8-nodejs.svg',
  description: "Express, websockets, JWT, Middleware, npm"
}, {
  title: "MongoDb",
  keywords: ["noSQL"],
  link: 'mongodb',
  icon: 'icons8-mongodb.svg',
  description: "NoSQL, Mongoose, Mongo Atlas, aggregation"
}, {
  title: "Docker",
  keywords: ["container", "containerization"],
  picture: "no pic",
  link: 'docker',
  icon: 'icons8-docker.svg',
  description: "containerization, NGINX, DockerHub"
}, {
  title: "Python",
  keywords: ["script", "data science"],
  picture: "no pic",
  link: 'python',
  icon: 'icons8-python.svg',
  description: "Pandas, Scikit-Learn, NumPy, GPIO, Jupyter"
}, {
  title: "C#",
  keywords: ["container", "containerization"],
  picture: "no pic",
  link: 'csharp',
  icon: 'icons8-c-sharp-logo.svg',
  description: "Object-Oriented, Design Patterns, Desktop App"
}, {
  title: "ASP.NET & .Net core",
  keywords: ["MVC", "C#"],
  picture: "no pic",
  link: 'aspnet',
  icon: 'icons8-windows-10.svg',
  description: "MVC, Full Stack, Entity Framework"
}, {
  title: "CSS3 & SASS",
  keywords: ["css", "styling"],
  picture: "no pic",
  link: 'sass',
  icon: 'icons8-sass.svg',
  description: "BEM, stylesheets, animations"
}, {
  title: "Google Cloud",
  keywords: ["container", "containerization"],
  picture: "no pic",
  link: 'googlecloud',
  icon: 'icons8-google-cloud-platform.svg',
  description: "Cloud applications"
}, {
  title: "Javascript",
  keywords: ["container", "containerization"],
  picture: "no pic",
  link: 'javascript',
  icon: 'icons8-javascript.svg',
  description: "ES6, data structures, algorithms"
}]);

/***/ }),

/***/ "./pages/frameworks.js":
/*!*****************************!*\
  !*** ./pages/frameworks.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HOC_mainLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HOC/mainLayout */ "./HOC/mainLayout.js");
/* harmony import */ var _HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HOC/fadeInSection */ "./HOC/fadeInSection.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons_frameworks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/frameworks */ "./icons/frameworks.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\747049\\Desktop\\craigio\\pages\\frameworks.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Frameworks = function Frameworks() {
  var prepareframeworks = function prepareframeworks() {
    return _icons_frameworks__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (item) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        key: item.title,
        href: "/framework/".concat(item.link),
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, __jsx("div", {
        className: "feature-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, item.title), __jsx("picture", {
        className: "feature-box__image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__("./static/icons sync recursive ^\\.\\/.*$")("./".concat(item.icon)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      })), __jsx("p", {
        className: "feature-box__description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, item.description))));
    });
  };

  return __jsx("div", {
    className: "modules",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, prepareframeworks());
};

var details = {
  page: 'Skills'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_HOC_mainLayout__WEBPACK_IMPORTED_MODULE_1__["default"])(details)(Frameworks)); // export default fadeInSection(Frameworks)

/***/ }),

/***/ "./static/icons sync recursive ^\\.\\/.*$":
/*!************************************!*\
  !*** ./static/icons sync ^\.\/.*$ ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./icons8-c-sharp-logo.svg": "./static/icons/icons8-c-sharp-logo.svg",
	"./icons8-docker.svg": "./static/icons/icons8-docker.svg",
	"./icons8-google-cloud-platform.svg": "./static/icons/icons8-google-cloud-platform.svg",
	"./icons8-javascript.svg": "./static/icons/icons8-javascript.svg",
	"./icons8-mongodb.svg": "./static/icons/icons8-mongodb.svg",
	"./icons8-nodejs.svg": "./static/icons/icons8-nodejs.svg",
	"./icons8-python.svg": "./static/icons/icons8-python.svg",
	"./icons8-react.svg": "./static/icons/icons8-react.svg",
	"./icons8-sass.svg": "./static/icons/icons8-sass.svg",
	"./icons8-sql-40.png": "./static/icons/icons8-sql-40.png",
	"./icons8-windows-10.svg": "./static/icons/icons8-windows-10.svg"
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
webpackContext.id = "./static/icons sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./static/icons/icons8-c-sharp-logo.svg":
/*!**********************************************!*\
  !*** ./static/icons/icons8-c-sharp-logo.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDhweCI+PHBhdGggZmlsbD0iIzM3NDc0ZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjIuOTAzLDMuMjg2YzAuNjc5LTAuMzgxLDEuNTE1LTAuMzgxLDIuMTkzLDAgYzMuMzU1LDEuODgzLDEzLjQ1MSw3LjU1MSwxNi44MDcsOS40MzRDNDIuNTgyLDEzLjEsNDMsMTMuODA0LDQzLDE0LjU2NmMwLDMuNzY2LDAsMTUuMTAxLDAsMTguODY3IGMwLDAuNzYyLTAuNDE4LDEuNDY2LTEuMDk3LDEuODQ3Yy0zLjM1NSwxLjg4My0xMy40NTEsNy41NTEtMTYuODA3LDkuNDM0Yy0wLjY3OSwwLjM4MS0xLjUxNSwwLjM4MS0yLjE5MywwIGMtMy4zNTUtMS44ODMtMTMuNDUxLTcuNTUxLTE2LjgwNy05LjQzNEM1LjQxOCwzNC44OTksNSwzNC4xOTYsNSwzMy40MzRjMC0zLjc2NiwwLTE1LjEwMSwwLTE4Ljg2NyBjMC0wLjc2MiwwLjQxOC0xLjQ2NiwxLjA5Ny0xLjg0N0M5LjQ1MSwxMC44MzcsMTkuNTQ5LDUuMTY5LDIyLjkwMywzLjI4NnoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGZpbGw9IiM1NDZlN2EiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTUuMzA0LDM0LjQwNEM1LjAzOCwzNC4wNDgsNSwzMy43MSw1LDMzLjI1NSBjMC0zLjc0NCwwLTE1LjAxNCwwLTE4Ljc1OWMwLTAuNzU4LDAuNDE3LTEuNDU4LDEuMDk0LTEuODM2YzMuMzQzLTEuODcyLDEzLjQwNS03LjUwNywxNi43NDgtOS4zOCBjMC42NzctMC4zNzksMS41OTQtMC4zNzEsMi4yNzEsMC4wMDhjMy4zNDMsMS44NzIsMTMuMzcxLDcuNDU5LDE2LjcxNCw5LjMzMWMwLjI3LDAuMTUyLDAuNDc2LDAuMzM1LDAuNjYsMC41NzZMNS4zMDQsMzQuNDA0eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjQsMTBjNy43MjcsMCwxNCw2LjI3MywxNCwxNHMtNi4yNzMsMTQtMTQsMTQgcy0xNC02LjI3My0xNC0xNFMxNi4yNzMsMTAsMjQsMTB6IE0yNCwxN2MzLjg2MywwLDcsMy4xMzYsNyw3YzAsMy44NjMtMy4xMzcsNy03LDdzLTctMy4xMzctNy03QzE3LDIwLjEzNiwyMC4xMzYsMTcsMjQsMTd6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBmaWxsPSIjNDU1YTY0IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Mi40ODUsMTMuMjA1YzAuNTE2LDAuNDgzLDAuNTA2LDEuMjExLDAuNTA2LDEuNzg0IGMwLDMuNzk1LTAuMDMyLDE0LjU4OSwwLjAwOSwxOC4zODRjMC4wMDQsMC4zOTYtMC4xMjcsMC44MTMtMC4zMjMsMS4xMjdMMjMuNTkzLDI0TDQyLjQ4NSwxMy4yMDV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNCAyMEgzNVYyOEgzNHpNMzcgMjBIMzhWMjhIMzd6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMiAyNUg0MFYyNkgzMnpNMzIgMjJINDBWMjNIMzJ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="

/***/ }),

/***/ "./static/icons/icons8-docker.svg":
/*!****************************************!*\
  !*** ./static/icons/icons8-docker.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MCA1MCIgd2lkdGg9IjUwcHgiIGhlaWdodD0iNTBweCI+PHBhdGggZD0iTSAyMCA5IEwgMjAgMTQgTCAxMCAxNCBMIDEwIDE5IEwgNSAxOSBMIDUgMjQgTCAxLjEyNSAyNCBDIDAuNjQ4NDM4IDI0LjAwNzgxMyAwLjI0NjA5NCAyNC4zNDc2NTYgMC4xNTYyNSAyNC44MTI1IEMgMC4xNTYyNSAyNC44MTI1IDAgMjUuNjY3OTY5IDAgMjYuNzUgQyAwIDI3LjQzNzUgMC4wNzAzMTI1IDI4LjE4MzU5NCAwLjE4NzUgMjguOTM3NSBDIDAuMTI4OTA2IDI4Ljk1MzEyNSAwLjA1MDc4MTMgMjguOTg4MjgxIDAgMjkgTCAwLjE4NzUgMjkgQyAwLjQ3NjU2MyAzMC44MDg1OTQgMS4xNDA2MjUgMzIuNzM0Mzc1IDIuMjUgMzQuNTYyNSBDIDIuMjUzOTA2IDM0LjU3MDMxMyAyLjI0NjA5NCAzNC41ODU5MzggMi4yNSAzNC41OTM3NSBDIDIuMjU3ODEzIDM0LjYxMzI4MSAyLjI2OTUzMSAzNC42MzY3MTkgMi4yODEyNSAzNC42NTYyNSBDIDIuMzMyMDMxIDM0Ljg5NDUzMSAyLjQ2NDg0NCAzNS4xMDU0NjkgMi42NTYyNSAzNS4yNSBDIDIuNjc1NzgxIDM1LjI2MTcxOSAyLjY5OTIxOSAzNS4yNzM0MzggMi43MTg3NSAzNS4yODEyNSBDIDMuMDI3MzQ0IDM1LjcyNjU2MyAzLjM1MTU2MyAzNi4xNzE4NzUgMy43MTg3NSAzNi41OTM3NSBDIDYuMzk0NTMxIDM5LjY3OTY4OCAxMC43MzgyODEgNDIgMTcgNDIgQyAyNy4yMjI2NTYgNDIgMzUuODY3MTg4IDM3LjY0NDUzMSA0MC43NSAyOSBMIDQ5Ljg0Mzc1IDI5IEMgNDguNzU3ODEzIDI4LjcyNjU2MyA0Ni40MjU3ODEgMjguMzU5Mzc1IDQ2LjgxMjUgMjYuOTM3NSBDIDQ1LjUxOTUzMSAyOC40MzM1OTQgNDMuMDU4NTk0IDI4LjYyMTA5NCA0MS4xNTYyNSAyOC4yODEyNSBDIDQxLjUxOTUzMSAyNy41OTM3NSA0MS44NzEwOTQgMjYuODk0NTMxIDQyLjE4NzUgMjYuMTU2MjUgQyA0NS4wNzgxMjUgMjYuMDgyMDMxIDQ3LjE1MjM0NCAyNS4xNTIzNDQgNDguMzEyNSAyNC4wMzEyNSBDIDQ5LjU4MjAzMSAyMi44MDQ2ODggNDkuOTY4NzUgMjEuNDM3NSA0OS45Njg3NSAyMS40Mzc1IEMgNTAuMDY2NDA2IDIxLjA1NDY4OCA0OS45MzM1OTQgMjAuNjUyMzQ0IDQ5LjYyNSAyMC40MDYyNSBDIDQ5LjYyNSAyMC40MDYyNSA0Ny4wOTc2NTYgMTguNTYyNSA0My4zMTI1IDE5LjE4NzUgQyA0Mi4yMzQzNzUgMTUuNjUyMzQ0IDM5LjQzNzUgMTMuOTM3NSAzOS40Mzc1IDEzLjkzNzUgQyAzOS4yMzA0NjkgMTMuODE2NDA2IDM4Ljk4ODI4MSAxMy43Njk1MzEgMzguNzUgMTMuODEyNSBDIDM4LjU4OTg0NCAxMy44NDc2NTYgMzguNDM3NSAxMy45MjE4NzUgMzguMzEyNSAxNC4wMzEyNSBDIDM4LjMxMjUgMTQuMDMxMjUgMzcuNjQ0NTMxIDE0LjYwMTU2MyAzNy4wOTM3NSAxNS42MjUgQyAzNi41NDI5NjkgMTYuNjQ4NDM4IDM2LjAzNTE1NiAxOC4yMDcwMzEgMzYuMjE4NzUgMjAuMjE4NzUgQyAzNi4zMDQ2ODggMjEuMTYwMTU2IDM2LjYwMTU2MyAyMi4wNTQ2ODggMzcuMDMxMjUgMjIuOTA2MjUgQyAzNi43ODkwNjMgMjMuMDU0Njg4IDM2LjY0ODQzOCAyMy4xNzk2ODggMzYuMjUgMjMuMzQzNzUgQyAzNS40MjE4NzUgMjMuNjg3NSAzNC4yMTQ4NDQgMjQgMzIuNSAyNCBMIDMyIDI0IEwgMzIgMTkgTCAyNyAxOSBMIDI3IDkgWiBNIDIyIDExIEwgMjUgMTEgTCAyNSAxNCBMIDIyIDE0IFogTSAxMiAxNiBMIDE1IDE2IEwgMTUgMTkgTCAxMiAxOSBaIE0gMTcgMTYgTCAyMCAxNiBMIDIwIDE5IEwgMTcgMTkgWiBNIDIyIDE2IEwgMjUgMTYgTCAyNSAxOSBMIDIyIDE5IFogTSAzOS4wOTM3NSAxNi4yMTg3NSBDIDM5LjgzNTkzOCAxNi43Njk1MzEgNDEuMTc5Njg4IDE3LjkyMTg3NSA0MS42NTYyNSAyMC40Mzc1IEMgNDEuNzA3MDMxIDIwLjcxNDg0NCA0MS44NzEwOTQgMjAuOTUzMTI1IDQyLjEwOTM3NSAyMS4xMDE1NjMgQyA0Mi4zNDc2NTYgMjEuMjUgNDIuNjM2NzE5IDIxLjI5Mjk2OSA0Mi45MDYyNSAyMS4yMTg3NSBDIDQ1LjQ1NzAzMSAyMC41MTk1MzEgNDYuODM1OTM4IDIxLjA5Mzc1IDQ3LjU5Mzc1IDIxLjUzMTI1IEMgNDcuNDQ5MjE5IDIxLjg0NzY1NiA0Ny40NzI2NTYgMjIuMDQyOTY5IDQ2LjkwNjI1IDIyLjU5Mzc1IEMgNDUuOTk2MDk0IDIzLjQ3MjY1NiA0NC40NTMxMjUgMjQuMzU5Mzc1IDQxLjU2MjUgMjQuMjUgQyA0MS4xNDA2MjUgMjQuMjM0Mzc1IDQwLjc1MzkwNiAyNC40ODQzNzUgNDAuNTkzNzUgMjQuODc1IEMgNDAuMTk1MzEzIDI1Ljg3MTA5NCAzOS43MzQzNzUgMjYuNzkyOTY5IDM5LjI1IDI3LjY4NzUgQyAzOS4xMDE1NjMgMjcuNjAxNTYzIDM4Ljk3NjU2MyAyNy41IDM4Ljg3NSAyNy40MDYyNSBDIDM3LjUzNTE1NiAyOS4zNDc2NTYgMjkuNzYxNzE5IDI4LjYwNTQ2OSAyOS4yMTg3NSAyNy4wOTM3NSBDIDI3LjU0Mjk2OSAyOS4wNjI1IDIyLjMzNTkzOCAyOS4wNjI1IDIwLjY1NjI1IDI3LjA5Mzc1IEMgMjAuMTEzMjgxIDI4LjYwNTQ2OSAxMi4zMDg1OTQgMjkuMzQ3NjU2IDEwLjk2ODc1IDI3LjQwNjI1IEMgOS43Njk1MzEgMjguNTMxMjUgNS4wMzUxNTYgMjkuMjIyNjU2IDMuMDYyNSAyNi45Mzc1IEMgMy4yNSAyNy42MjUgMi43NjU2MjUgMjguMDcwMzEzIDIuMTI1IDI4LjM3NSBDIDIuMDQyOTY5IDI3LjgwNDY4OCAyIDI3LjI2MTcxOSAyIDI2Ljc1IEMgMiAyNi4zMjAzMTMgMi4wMzEyNSAyNi4yODEyNSAyLjA2MjUgMjYgTCAzMi41IDI2IEMgMzQuNDY4NzUgMjYgMzUuOTQ1MzEzIDI1LjYyNSAzNyAyNS4xODc1IEMgMzguMDU0Njg4IDI0Ljc1IDM4LjgwNDY4OCAyNC4yMTg3NSAzOC45MDYyNSAyNC4xNTYyNSBDIDM5LjE0ODQzOCAyNC4wMDM5MDYgMzkuMzEyNSAyMy43NTc4MTMgMzkuMzU5Mzc1IDIzLjQ3NjU2MyBDIDM5LjQwNjI1IDIzLjE5OTIxOSAzOS4zMzIwMzEgMjIuOTEwMTU2IDM5LjE1NjI1IDIyLjY4NzUgQyAzOC42MDE1NjMgMjEuOTY0ODQ0IDM4LjMxMjUgMjEuMDU4NTk0IDM4LjIxODc1IDIwLjAzMTI1IEMgMzguMDc0MjE5IDE4LjQxNzk2OSAzOC40NTMxMjUgMTcuMjg5MDYzIDM4Ljg0Mzc1IDE2LjU2MjUgQyAzOC45NzY1NjMgMTYuMzE2NDA2IDM4Ljk4NDM3NSAxNi4zNjcxODggMzkuMDkzNzUgMTYuMjE4NzUgWiBNIDcgMjEgTCAxMCAyMSBMIDEwIDI0IEwgNyAyNCBaIE0gMTIgMjEgTCAxNSAyMSBMIDE1IDI0IEwgMTIgMjQgWiBNIDE3IDIxIEwgMjAgMjEgTCAyMCAyNCBMIDE3IDI0IFogTSAyMiAyMSBMIDI1IDIxIEwgMjUgMjQgTCAyMiAyNCBaIE0gMjcgMjEgTCAzMCAyMSBMIDMwIDI0IEwgMjcgMjQgWiBNIDIuMjUgMjkgTCAzOC41IDI5IEMgMzMuOTEwMTU2IDM2LjQxNDA2MyAyNi4yODkwNjMgNDAgMTcgNDAgQyAxMS41MzEyNSA0MCA3Ljk4NDM3NSAzOC4xNDQ1MzEgNS42NTYyNSAzNS42ODc1IEMgMTAuMDkzNzUgMzUuODk4NDM4IDEzLjUzMTI1IDM0LjcxODc1IDEzLjUzMTI1IDM0LjcxODc1IEMgMTQuMDgyMDMxIDM0LjY0ODQzOCAxNC40NzY1NjMgMzQuMTQ0NTMxIDE0LjQwNjI1IDMzLjU5Mzc1IEMgMTQuMzM1OTM4IDMzLjA0Mjk2OSAxMy44MzIwMzEgMzIuNjQ4NDM4IDEzLjI4MTI1IDMyLjcxODc1IEMgMTMuMjI2NTYzIDMyLjcyNjU2MyAxMy4xNzU3ODEgMzIuNzM0Mzc1IDEzLjEyNSAzMi43NSBDIDEzLjAzOTA2MyAzMi43NjE3MTkgMTIuOTU3MDMxIDMyLjc4MTI1IDEyLjg3NSAzMi44MTI1IEMgMTIuODc1IDMyLjgxMjUgOC43ODUxNTYgMzQuMjA3MDMxIDQgMzMuNTMxMjUgQyAzLjEwMTU2MyAzMi4wNTA3ODEgMi41MzUxNTYgMzAuNDY0ODQ0IDIuMjUgMjkgWiBNIDE2IDMxIEMgMTUuNDQ5MjE5IDMxIDE1IDMxLjQ0OTIxOSAxNSAzMiBDIDE1IDMyLjU1MDc4MSAxNS40NDkyMTkgMzMgMTYgMzMgQyAxNi41NTA3ODEgMzMgMTcgMzIuNTUwNzgxIDE3IDMyIEMgMTcgMzEuODYzMjgxIDE2Ljk4ODI4MSAzMS43NDIxODggMTYuOTM3NSAzMS42MjUgQyAxNi44NjcxODggMzEuNzUgMTYuNzE0ODQ0IDMxLjg0Mzc1IDE2LjU2MjUgMzEuODQzNzUgQyAxNi4zMzU5MzggMzEuODQzNzUgMTYuMTU2MjUgMzEuNjMyODEzIDE2LjE1NjI1IDMxLjQwNjI1IEMgMTYuMTU2MjUgMzEuMjUzOTA2IDE2LjI1MzkwNiAzMS4xMzI4MTMgMTYuMzc1IDMxLjA2MjUgQyAxNi4yNjE3MTkgMzEuMDE5NTMxIDE2LjEyODkwNiAzMSAxNiAzMSBaIi8+PC9zdmc+"

/***/ }),

/***/ "./static/icons/icons8-google-cloud-platform.svg":
/*!*******************************************************!*\
  !*** ./static/icons/icons8-google-cloud-platform.svg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDhweCI+PHBhdGggZmlsbD0iI0NGRDhEQyIgZD0iTTMwLDEzSDE4bC03LDExbDcsMTFoMTJsNy0xMUwzMCwxM3ogTTI0LDI5Yy0yLjgsMC01LTIuMi01LTVzMi4yLTUsNS01czUsMi4yLDUsNVMyNi44LDI5LDI0LDI5eiIvPjxwYXRoIGZpbGw9IiMyMTk2RjMiIGQ9Ik0zNC44LDcuMkMzNC4zLDYuNSwzMy41LDYsMzIuNiw2SDE1LjRjLTAuOSwwLTEuNywwLjUtMi4yLDEuMmwtNS44LDkuNUwxMiwyNGw2LjMtMTBoMjAuNkwzNC44LDcuMnogTTE2LDExYy0wLjYsMC0xLTAuNC0xLTFzMC40LTEsMS0xYzAuNiwwLDEsMC40LDEsMVMxNi42LDExLDE2LDExeiBNMzIsMTFjLTAuNiwwLTEtMC40LTEtMXMwLjQtMSwxLTFjMC42LDAsMSwwLjQsMSwxUzMyLjYsMTEsMzIsMTF6Ii8+PHBhdGggZmlsbD0iI0ZGQzEwNyIgZD0iTTE4LjMsMzRMNy40LDE2LjhsLTMuNiw1LjljLTAuNSwwLjgtMC41LDEuOSwwLDIuN2w5LjQsMTUuNGMwLjUsMC44LDEuMywxLjIsMi4yLDEuMmg5LjFsNS4xLThIMTguM3ogTTgsMjVjLTAuNiwwLTEtMC40LTEtMXMwLjQtMSwxLTFjMC42LDAsMSwwLjQsMSwxUzguNiwyNSw4LDI1eiBNMTYsMzljLTAuNiwwLTEtMC40LTEtMXMwLjQtMSwxLTFjMC42LDAsMSwwLjQsMSwxUzE2LjYsMzksMTYsMzl6Ii8+PHBhdGggZmlsbD0iIzE5NzZEMiIgZD0iTTcuNCAxNi44TDEyIDI0IDE0LjQgMjAuMyA4LjUgMTV6Ii8+PHBhdGggZmlsbD0iI0Y5QTgyNSIgZD0iTTI0LjYgNDJMMjkuNyAzNCAyNC45IDM0IDIyLjYgNDJ6Ii8+PHBhdGggZmlsbD0iI0REMkMwMCIgZD0iTTQ0LjIsMjIuN0wzOC45LDE0aC05LjJMMzYsMjRMMjQuNiw0Mmg4YzAuOSwwLDEuNy0wLjUsMi4yLTEuMmw5LjUtMTUuNEM0NC44LDI0LjUsNDQuOCwyMy41LDQ0LjIsMjIuN3ogTTMyLDM5Yy0wLjYsMC0xLTAuNC0xLTFzMC40LTEsMS0xYzAuNiwwLDEsMC40LDEsMVMzMi42LDM5LDMyLDM5eiBNNDAsMjVjLTAuNiwwLTEtMC40LTEtMXMwLjQtMSwxLTFjMC42LDAsMSwwLjQsMSwxUzQwLjYsMjUsNDAsMjV6Ii8+PHBhdGggZmlsbD0iI0JGMzYwQyIgZD0iTTM4LjkgMTRMMjkuNyAxNCAzMi4yIDE3LjkgNDAuMSAxNnoiLz48L3N2Zz4="

/***/ }),

/***/ "./static/icons/icons8-javascript.svg":
/*!********************************************!*\
  !*** ./static/icons/icons8-javascript.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MCA1MCIgd2lkdGg9IjUwcHgiIGhlaWdodD0iNTBweCI+PHBhdGggZD0iTSA0My4zMzU5MzggNCBMIDYuNjY3OTY5IDQgQyA1LjE5NTMxMyA0IDQgNS4xOTUzMTMgNCA2LjY2Nzk2OSBMIDQgNDMuMzMyMDMxIEMgNCA0NC44MDQ2ODggNS4xOTUzMTMgNDYgNi42Njc5NjkgNDYgTCA0My4zMzIwMzEgNDYgQyA0NC44MDQ2ODggNDYgNDYgNDQuODA0Njg4IDQ2IDQzLjMzNTkzOCBMIDQ2IDYuNjY3OTY5IEMgNDYgNS4xOTUzMTMgNDQuODA0Njg4IDQgNDMuMzM1OTM4IDQgWiBNIDI3IDM2LjE4MzU5NCBDIDI3IDQwLjE3OTY4OCAyNC42NTYyNSA0MiAyMS4yMzQzNzUgNDIgQyAxOC4xNDA2MjUgNDIgMTUuOTEwMTU2IDM5LjkyNTc4MSAxNSAzOCBMIDE4LjE0NDUzMSAzNi4wOTc2NTYgQyAxOC43NSAzNy4xNzE4NzUgMTkuNjcxODc1IDM4IDIxIDM4IEMgMjIuMjY5NTMxIDM4IDIzIDM3LjUwMzkwNiAyMyAzNS41NzQyMTkgTCAyMyAyMyBMIDI3IDIzIFogTSAzNS42NzU3ODEgNDIgQyAzMi4xMzI4MTMgNDIgMzAuMTIxMDk0IDQwLjIxNDg0NCAyOSAzOCBMIDMyIDM2IEMgMzIuODE2NDA2IDM3LjMzNTkzOCAzMy43MDcwMzEgMzguNjEzMjgxIDM1LjU4OTg0NCAzOC42MTMyODEgQyAzNy4xNzE4NzUgMzguNjEzMjgxIDM4IDM3LjgyNDIxOSAzOCAzNi43MzA0NjkgQyAzOCAzNS40MjU3ODEgMzcuMTQwNjI1IDM0Ljk2MDkzOCAzNS40MDIzNDQgMzQuMTk5MjE5IEwgMzQuNDQ5MjE5IDMzLjc4OTA2MyBDIDMxLjY5NTMxMyAzMi42MTcxODggMjkuODYzMjgxIDMxLjE0ODQzOCAyOS44NjMyODEgMjguMDM5MDYzIEMgMjkuODYzMjgxIDI1LjE3OTY4OCAzMi4wNDY4NzUgMjMgMzUuNDUzMTI1IDIzIEMgMzcuODc4OTA2IDIzIDM5LjYyMTA5NCAyMy44NDM3NSA0MC44Nzg5MDYgMjYuMDU0Njg4IEwgMzcuOTEwMTU2IDI3Ljk2NDg0NCBDIDM3LjI1MzkwNiAyNi43ODkwNjMgMzYuNTUwNzgxIDI2LjMyODEyNSAzNS40NTMxMjUgMjYuMzI4MTI1IEMgMzQuMzM1OTM4IDI2LjMyODEyNSAzMy42Mjg5MDYgMjcuMDM5MDYzIDMzLjYyODkwNiAyNy45NjQ4NDQgQyAzMy42Mjg5MDYgMjkuMTA5Mzc1IDM0LjMzNTkzOCAyOS41NzAzMTMgMzUuOTcyNjU2IDMwLjI4MTI1IEwgMzYuOTI1NzgxIDMwLjY5MTQwNiBDIDQwLjE3MTg3NSAzMi4wNzgxMjUgNDIgMzMuNDk2MDk0IDQyIDM2LjY4MzU5NCBDIDQyIDQwLjExNzE4OCAzOS4zMDA3ODEgNDIgMzUuNjc1NzgxIDQyIFoiLz48L3N2Zz4="

/***/ }),

/***/ "./static/icons/icons8-mongodb.svg":
/*!*****************************************!*\
  !*** ./static/icons/icons8-mongodb.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDhweCI+PHBhdGggZmlsbD0iIzVkNDAzNyIgZD0iTTQyLDE3LjNDNDIsMzcuOCwyNCw0NCwyNCw0NFM2LDM3LjgsNiwxNy4zYzAtMi41LDAuMi00LjYsMC40LTYuM2MwLjMtMi41LDItNC41LDQuNC01LjEgQzEzLjksNSwxOC44LDQsMjQsNHMxMC4xLDEsMTMuMywxLjljMi40LDAuNiw0LjEsMi43LDQuNCw1LjFDNDEuOCwxMi43LDQyLDE0LjksNDIsMTcuM3oiLz48cGF0aCBmaWxsPSIjNGNhZjUwIiBkPSJNMjQsN2M0LjksMCw5LjUsMSwxMi41LDEuOGMxLjIsMC4zLDIsMS4zLDIuMiwyLjZjMC4yLDEuOSwwLjMsMy45LDAuMyw1LjljMCwxNS42LTExLjUsMjEuOS0xNSwyMy40IGMtMy41LTEuNi0xNS03LjktMTUtMjMuNGMwLTIsMC4xLTQsMC4zLTUuOWMwLjEtMS4zLDEtMi4zLDIuMi0yLjZDMTQuNSw4LDE5LjEsNywyNCw3IE0yNCw0Yy01LjIsMC0xMC4xLDEtMTMuMywxLjkgQzguNCw2LjUsNi42LDguNiw2LjQsMTFDNi4yLDEyLjcsNiwxNC45LDYsMTcuM0M2LDM3LjgsMjQsNDQsMjQsNDRzMTgtNi4yLDE4LTI2LjdjMC0yLjUtMC4yLTQuNi0wLjQtNi4zYy0wLjMtMi41LTItNC41LTQuNC01LjEgQzM0LjEsNSwyOS4yLDQsMjQsNEwyNCw0eiIvPjxwYXRoIGZpbGw9IiNkY2VkYzgiIGQ9Ik0yMyAyOEgyNVYzNkgyM3oiLz48cGF0aCBmaWxsPSIjNGNhZjUwIiBkPSJNMjQsMTBjMCwwLTYsNS02LDEzYzAsNS4yLDMuMyw4LjUsNSwxMGwxLTNsMSwzYzEuNy0xLjUsNS00LjgsNS0xMEMzMCwxNSwyNCwxMCwyNCwxMHoiLz48cGF0aCBmaWxsPSIjODFjNzg0IiBkPSJNMjQsMTBjMCwwLTYsNS02LDEzYzAsNS4yLDMuMyw4LjUsNSwxMGwxLTNWMTB6Ii8+PC9zdmc+"

/***/ }),

/***/ "./static/icons/icons8-nodejs.svg":
/*!****************************************!*\
  !*** ./static/icons/icons8-nodejs.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDhweCI+PHBhdGggZmlsbD0iIzM4OGUzYyIgZD0iTTE3LjIwNCAxOS4xMjJsLTQuOTA3IDIuNzE1QzEyLjExMyAyMS45MzggMTIgMjIuMTI2IDEyIDIyLjMyOXY1LjQzM2MwIC4yMDMuMTEzLjM5LjI5Ny40OTJsNC45MDggMi43MTdjLjE4My4xMDEuNDEuMTAxLjU5MyAwbDQuOTA3LTIuNzE3QzIyLjg4NyAyOC4xNTIgMjMgMjcuOTY1IDIzIDI3Ljc2MnYtNS40MzNjMC0uMjAzLS4xMTMtLjM5LS4yOTctLjQ5MmwtNC45MDYtMi43MTVjLS4wOTItLjA1MS0uMTk1LS4wNzYtLjI5Ny0uMDc2LS4xMDMgMC0uMjA1LjAyNS0uMjk3LjA3Nk00Mi40NTEgMjQuMDEzbC0uODE4LjQ1MmMtLjAzMS4wMTctLjA0OS4wNDgtLjA0OS4wODJ2LjkwNmMwIC4wMzQuMDE5LjA2NS4wNDkuMDgybC44MTguNDUzYy4wMzEuMDE3LjA2OC4wMTcuMDk5IDBsLjgxOC0uNDUzYy4wMy0uMDE3LjA0OS0uMDQ4LjA0OS0uMDgydi0uOTA2YzAtLjAzNC0uMDE5LS4wNjUtLjA1LS4wODJsLS44MTgtLjQ1MkM0Mi41MzQgMjQuMDA0IDQyLjUxNyAyNCA0Mi41IDI0UzQyLjQ2NiAyNC4wMDQgNDIuNDUxIDI0LjAxMyIvPjxwYXRoIGZpbGw9IiMzNzQ3NGYiIGQ9Ik0zNS43NTEsMTMuMzY0bC0yLjM4OS0xLjMzM2MtMC4wNzUtMC4wNDItMC4xNjctMC4wNDEtMC4yNDEsMC4wMDMgYy0wLjA3NCwwLjA0NC0wLjEyLDAuMTIzLTAuMTIsMC4yMDlMMzMsMjAuMjk1bC0yLjIwMy0xLjIxOUMzMC43MDUsMTkuMDI1LDMwLjYwMiwxOSwzMC41LDE5Yy0wLjEwMiwwLTAuMjA1LDAuMDI1LTAuMjk3LDAuMDc2IGgwLjAwMWwtNC45MDcsMi43MTVDMjUuMTEzLDIxLjg5MiwyNSwyMi4wOCwyNSwyMi4yODJ2NS40MzNjMCwwLjIwMywwLjExMywwLjM5LDAuMjk3LDAuNDkybDQuOTA4LDIuNzE3IGMwLjE4MywwLjEwMSwwLjQxLDAuMTAxLDAuNTkzLDBsNC45MDctMi43MTdDMzUuODg3LDI4LjEwNiwzNiwyNy45MTgsMzYsMjcuNzE1VjEzLjc4OEMzNiwxMy42MTIsMzUuOTA0LDEzLjQ1LDM1Ljc1MSwxMy4zNjR6IE0zMi44NjYsMjYuNDU4bC0yLjIzLDEuMjM1Yy0wLjA4MywwLjA0Ni0wLjE4NiwwLjA0Ni0wLjI2OSwwbC0yLjIzMS0xLjIzNUMyOC4wNTEsMjYuNDEyLDI4LDI2LjMyNiwyOCwyNi4yMzR2LTIuNDcgYzAtMC4wOTIsMC4wNTEtMC4xNzcsMC4xMzUtMC4yMjRsMi4yMzEtMS4yMzRoLTAuMDAxYzAuMDQyLTAuMDIzLDAuMDg4LTAuMDM0LDAuMTM1LTAuMDM0YzAuMDQ3LDAsMC4wOTMsMC4wMTIsMC4xMzUsMC4wMzQgbDIuMjMsMS4yMzRDMzIuOTQ5LDIzLjU4NywzMywyMy42NzMsMzMsMjMuNzY1djIuNDdDMzMsMjYuMzI2LDMyLjk0OSwyNi40MTIsMzIuODY2LDI2LjQ1OHoiLz48cGF0aCBmaWxsPSIjMmU3ZDMyIiBkPSJNMTcuMjA0LDE5LjEyMkwxMiwyNy43NjJjMCwwLjIwMywwLjExMywwLjM5LDAuMjk3LDAuNDkybDQuOTA4LDIuNzE3IGMwLjE4MywwLjEwMSwwLjQxLDAuMTAxLDAuNTkzLDBMMjMsMjIuMzI5YzAtMC4yMDMtMC4xMTMtMC4zOS0wLjI5Ny0wLjQ5MmwtNC45MDYtMi43MTVjLTAuMDkyLTAuMDUxLTAuMTk1LTAuMDc2LTAuMjk3LTAuMDc2IGMtMC4xMDMsMC0wLjIwNSwwLjAyNS0wLjI5NywwLjA3NiIvPjxwYXRoIGZpbGw9IiM0Y2FmNTAiIGQ9Ik0xNy4yMDQsMTkuMTIybC00LjkwNywyLjcxNUMxMi4xMTMsMjEuOTM4LDEyLDIyLjEyNiwxMiwyMi4zMjlsNS4yMDQsOC42NDIgYzAuMTgzLDAuMTAxLDAuNDEsMC4xMDEsMC41OTMsMGw0LjkwNy0yLjcxN0MyMi44ODcsMjguMTUyLDIzLDI3Ljk2NSwyMywyNy43NjJsLTUuMjAzLTguNjRjLTAuMDkyLTAuMDUxLTAuMTk1LTAuMDc2LTAuMjk3LTAuMDc2IGMtMC4xMDMsMC0wLjIwNSwwLjAyNS0wLjI5NywwLjA3NiIvPjxwYXRoIGZpbGw9IiMzNzQ3NGYiIGQ9Ik00Ny43MDMgMjEuNzkxbC00LjkwNi0yLjcxNUM0Mi43MDUgMTkuMDI1IDQyLjYwMiAxOSA0Mi41IDE5Yy0uMTAyIDAtLjIwNS4wMjUtLjI5Ny4wNzZoLjAwMWwtNC45MDcgMi43MTVDMzcuMTE0IDIxLjg5MiAzNyAyMi4wODQgMzcgMjIuMjk0djUuNDExYzAgLjIwOS4xMTQuNDAyLjI5Ny41MDNsNC45MDggMi43MTdjLjE4NC4xMDIuNDA5LjEwMi41OTMgMGwyLjI2My0xLjI1M2MuMjA3LS4xMTUuMjA2LS40MTItLjAwMi0uNTI2bC00LjkyNC0yLjY4N0M0MC4wNTIgMjYuNDEyIDQwIDI2LjMyNSA0MCAyNi4yMzF2LTIuNDY2YzAtLjA5Mi4wNS0uMTc3LjEzLS4yMjFsMi4yMzUtMS4yMzZoLS4wMDFjLjA0Mi0uMDIzLjA4OC0uMDM0LjEzNS0uMDM0LjA0NyAwIC4wOTMuMDEyLjEzNS4wMzRsMi4yMzUgMS4yMzdjLjA4LjA0NC4xMy4xMjkuMTMuMjIxdjIuMDEyYzAgLjA4Ni4wNDYuMTY2LjEyMS4yMDkuMDc1LjA0Mi4xNjcuMDQyLjI0Mi0uMDAxbDIuMzk4LTEuMzkzYy4xNDgtLjA4Ni4yNC0uMjQ1LjI0LS40MTd2LTEuODhDNDggMjIuMDg1IDQ3Ljg4NiAyMS44OTIgNDcuNzAzIDIxLjc5MXpNMTAuNzAzIDIxLjc5MWwtNC45MDYtMi43MTVDNS43MDUgMTkuMDI1IDUuNjAyIDE5IDUuNSAxOWMtLjEwMiAwLS4yMDUuMDI1LS4yOTcuMDc2aC4wMDFsLTQuOTA3IDIuNzE1Qy4xMTQgMjEuODkyIDAgMjIuMDg0IDAgMjIuMjk0djcuNDY1YzAgLjA4Ni4wNDYuMTY2LjEyMS4yMDkuMDc1LjA0Mi4xNjcuMDQyLjI0Mi0uMDAxbDIuMzk4LTEuMzkzQzIuOTA5IDI4LjQ4OCAzIDI4LjMyOSAzIDI4LjE1N3YtNC4zOTNjMC0uMDkyLjA1LS4xNzcuMTMtLjIyMWwyLjIzNS0xLjIzNkg1LjM2NWMuMDQyLS4wMjMuMDg4LS4wMzQuMTM1LS4wMzQuMDQ3IDAgLjA5My4wMTIuMTM1LjAzNGwyLjIzNSAxLjIzN0M3Ljk1IDIzLjU4OCA4IDIzLjY3MyA4IDIzLjc2NXY0LjM5M2MwIC4xNzIuMDkxLjMzMS4yNC40MTdsMi4zOTggMS4zOTNjLjA3NS4wNDMuMTY3LjA0My4yNDIuMDAxQzEwLjk1NCAyOS45MjUgMTEgMjkuODQ1IDExIDI5Ljc1OXYtNy40NjRDMTEgMjIuMDg1IDEwLjg4NiAyMS44OTIgMTAuNzAzIDIxLjc5MXoiLz48L3N2Zz4="

/***/ }),

/***/ "./static/icons/icons8-python.svg":
/*!****************************************!*\
  !*** ./static/icons/icons8-python.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDhweCI+PHBhdGggZmlsbD0iIzAyNzdCRCIgZD0iTTI0LjA0Nyw1Yy0xLjU1NSwwLjAwNS0yLjYzMywwLjE0Mi0zLjkzNiwwLjM2N2MtMy44NDgsMC42Ny00LjU0OSwyLjA3Ny00LjU0OSw0LjY3VjE0aDl2MkgxNS4yMmgtNC4zNWMtMi42MzYsMC00Ljk0MywxLjI0Mi01LjY3NCw0LjIxOWMtMC44MjYsMy40MTctMC44NjMsNS41NTcsMCw5LjEyNUM1Ljg1MSwzMi4wMDUsNy4yOTQsMzQsOS45MzEsMzRoMy42MzJ2LTUuMTA0YzAtMi45NjYsMi42ODYtNS44OTYsNS43NjQtNS44OTZoNy4yMzZjMi41MjMsMCw1LTEuODYyLDUtNC4zNzd2LTguNTg2YzAtMi40MzktMS43NTktNC4yNjMtNC4yMTgtNC42NzJDMjcuNDA2LDUuMzU5LDI1LjU4OSw0Ljk5NCwyNC4wNDcsNXogTTE5LjA2Myw5YzAuODIxLDAsMS41LDAuNjc3LDEuNSwxLjUwMmMwLDAuODMzLTAuNjc5LDEuNDk4LTEuNSwxLjQ5OGMtMC44MzcsMC0xLjUtMC42NjQtMS41LTEuNDk4QzE3LjU2Myw5LjY4LDE4LjIyNiw5LDE5LjA2Myw5eiIvPjxwYXRoIGZpbGw9IiNGRkMxMDciIGQ9Ik0yMy4wNzgsNDNjMS41NTUtMC4wMDUsMi42MzMtMC4xNDIsMy45MzYtMC4zNjdjMy44NDgtMC42Nyw0LjU0OS0yLjA3Nyw0LjU0OS00LjY3VjM0aC05di0yaDkuMzQzaDQuMzVjMi42MzYsMCw0Ljk0My0xLjI0Miw1LjY3NC00LjIxOWMwLjgyNi0zLjQxNywwLjg2My01LjU1NywwLTkuMTI1QzQxLjI3NCwxNS45OTUsMzkuODMxLDE0LDM3LjE5NCwxNGgtMy42MzJ2NS4xMDRjMCwyLjk2Ni0yLjY4Niw1Ljg5Ni01Ljc2NCw1Ljg5NmgtNy4yMzZjLTIuNTIzLDAtNSwxLjg2Mi01LDQuMzc3djguNTg2YzAsMi40MzksMS43NTksNC4yNjMsNC4yMTgsNC42NzJDMTkuNzE5LDQyLjY0MSwyMS41MzYsNDMuMDA2LDIzLjA3OCw0M3ogTTI4LjA2MywzOWMtMC44MjEsMC0xLjUtMC42NzctMS41LTEuNTAyYzAtMC44MzMsMC42NzktMS40OTgsMS41LTEuNDk4YzAuODM3LDAsMS41LDAuNjY0LDEuNSwxLjQ5OEMyOS41NjMsMzguMzIsMjguODk5LDM5LDI4LjA2MywzOXoiLz48L3N2Zz4="

/***/ }),

/***/ "./static/icons/icons8-react.svg":
/*!***************************************!*\
  !*** ./static/icons/icons8-react.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/icons8-react-f7dd7cf25999dc408363239c89652c46.svg";

/***/ }),

/***/ "./static/icons/icons8-sass.svg":
/*!**************************************!*\
  !*** ./static/icons/icons8-sass.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDhweCI+PHBhdGggZmlsbD0iI2YwNjI5MiIgZD0iTTM5Ljg2NywyNS45NTZjLTEuNTM4LDAuMDA4LTIuODcsMC4zNzctMy45ODYsMC45MjhjLTAuNDA4LTAuODE1LTAuODIyLTEuNTMyLTAuODkxLTIuMDY1CWMtMC4wODEtMC42MjItMC4xNzUtMC45OTQtMC4wNzctMS43MzVjMC4wOTgtMC43NDEsMC41MjctMS43OTEsMC41MjEtMS44N2MtMC4wMDYtMC4wNzktMC4wOTYtMC40NTYtMC45ODMtMC40NjMJYy0wLjg4Ny0wLjAwNi0xLjY0NiwwLjE3MS0xLjczNSwwLjQwNWMtMC4wODksMC4yMzQtMC4yNiwwLjc2MS0wLjM2NiwxLjMxMWMtMC4xNTUsMC44MDQtMS43NzEsMy42NzMtMi42ODgsNS4xNzMJYy0wLjMtMC41ODYtMC41NTUtMS4xMDItMC42MDgtMS41MWMtMC4wODEtMC42MjItMC4xNzUtMC45OTQtMC4wNzctMS43MzVjMC4wOTgtMC43NDEsMC41MjctMS43OTEsMC41MjEtMS44NwljLTAuMDA2LTAuMDc5LTAuMDk2LTAuNDU2LTAuOTgzLTAuNDYzYy0wLjg4Ny0wLjAwNi0xLjY0NiwwLjE3MS0xLjczNSwwLjQwNWMtMC4wODksMC4yMzQtMC4xODUsMC43ODEtMC4zNjYsMS4zMTEJYy0wLjE4MiwwLjUyOS0yLjMyOSw1LjMxNC0yLjg5Miw2LjU1NWMtMC4yODcsMC42MzItMC41MzYsMS4xNC0wLjcxMiwxLjQ4NmMtMC4wMDEtMC4wMDEtMC4wMDEtMC4wMDItMC4wMDEtMC4wMDIJcy0wLjAxMSwwLjAyMy0wLjAyOSwwLjA2MmMtMC4xNTEsMC4yOTUtMC4yNCwwLjQ1OC0wLjI0LDAuNDU4czAuMDAxLDAuMDAyLDAuMDAzLDAuMDA2Yy0wLjEyLDAuMjE3LTAuMjQ4LDAuNDE4LTAuMzExLDAuNDE4CWMtMC4wNDQsMC0wLjEzMy0wLjU3NywwLjAxOS0xLjM2OWMwLjMyLTEuNjYsMS4wODctNC4yNDgsMS4wOC00LjMzOGMtMC4wMDQtMC4wNDYsMC4xNDMtMC40OTctMC41MDEtMC43MzMJYy0wLjYyNi0wLjIyOS0wLjg0OSwwLjE1My0wLjkwNiwwLjE1NGMtMC4wNTUsMC4wMDEtMC4wOTYsMC4xMzUtMC4wOTYsMC4xMzVzMC42OTctMi45MTEtMS4zMy0yLjkxMQljLTEuMjY4LDAtMy4wMjQsMS4zODctMy44ODksMi42NDRjLTAuNTQ2LDAuMjk4LTEuNzE1LDAuOTM2LTIuOTU0LDEuNjE3Yy0wLjQ3NiwwLjI2Mi0wLjk2MiwwLjUyOS0xLjQyMywwLjc4MwljLTAuMDMxLTAuMDM1LTAuMDYzLTAuMDY5LTAuMDk1LTAuMTA0Yy0yLjQ1OS0yLjYyMy03LjAwMy00LjQ3OC02LjgxMS04LjAwNWMwLjA3LTEuMjgyLDAuNTE2LTQuNjU4LDguNzMzLTguNzUyCWM2LjczMS0zLjM1NCwxMi4xMi0yLjQzMSwxMy4wNTEtMC4zODZjMS4zMywyLjkyMy0yLjg4LDguMzU0LTkuODcsOS4xMzhjLTIuNjYzLDAuMjk5LTQuMDY2LTAuNzM0LTQuNDE1LTEuMTE4CWMtMC4zNjctMC40MDUtMC40MjItMC40MjMtMC41NTktMC4zNDdjLTAuMjIzLDAuMTI0LTAuMDgyLDAuNDgxLDAsMC42OTRjMC4yMDksMC41NDMsMS4wNjUsMS41MDYsMi41MjUsMS45ODYJYzEuMjg1LDAuNDIyLDQuNDEyLDAuNjUzLDguMTkzLTAuODFjNC4yMzYtMS42MzgsNy41NDMtNi4xOTYsNi41NzEtMTAuMDA1Yy0wLjk4OC0zLjg3NC03LjQxMi01LjE0OC0xMy40OTItMi45ODgJQzEyLjQ0LDkuMzMyLDguNTIzLDExLjM1LDUuNzA2LDEzLjk4NGMtMy4zNDksMy4xMzItMy44ODMsNS44NTktMy42NjMsNi45OThjMC43ODIsNC4wNDgsNi4zNjEsNi42ODQsOC41OTUsOC42MzcJYy0wLjExLDAuMDYxLTAuMjE0LDAuMTE4LTAuMzA4LDAuMTdjLTEuMTIsMC41NTQtNS4zNzMsMi43OC02LjQzNyw1LjEzMWMtMS4yMDcsMi42NjcsMC4xOTIsNC41ODEsMS4xMTgsNC44MzkJYzIuODY5LDAuNzk4LDUuODEzLTAuNjM4LDcuMzk2LTIuOTk4YzEuNTgyLTIuMzU5LDEuMzg5LTUuNDMyLDAuNjYzLTYuODM0Yy0wLjAwOS0wLjAxNy0wLjAxOS0wLjAzNC0wLjAyOC0wLjA1MgljMC4yODktMC4xNzEsMC41ODQtMC4zNDUsMC44NzYtMC41MTdjMC41Ny0wLjMzNSwxLjEzLTAuNjQ3LDEuNjE1LTAuOTExYy0wLjI3MiwwLjc0NC0wLjQ3MSwxLjYzNy0wLjU3NCwyLjkyNgljLTAuMTIyLDEuNTE0LDAuNDk5LDMuNDcxLDEuMzExLDQuMjQxYzAuMzU4LDAuMzM5LDAuNzg4LDAuMzQ3LDEuMDYsMC4zNDdjMC45NDUsMCwxLjM3Ni0wLjc4NiwxLjg1MS0xLjcxNgljMC41ODItMS4xNCwxLjA5OS0yLjQ2OCwxLjA5OS0yLjQ2OHMtMC42NDgsMy41ODYsMS4xMTgsMy41ODZjMC42NDQsMCwxLjI5MS0wLjgzNSwxLjU4LTEuMjZjMC4wMDEsMC4wMDUsMC4wMDEsMC4wMDcsMC4wMDEsMC4wMDcJczAuMDE3LTAuMDI4LDAuMDUtMC4wODNjMC4wNjctMC4xMDIsMC4xMDUtMC4xNjcsMC4xMDUtMC4xNjdzMC4wMDEtMC4wMDcsMC4wMDMtMC4wMTljMC4yNTktMC40NDksMC44MzMtMS40NzMsMS42OTMtMy4xNjIJYzEuMTEyLTIuMTgyLDIuMTc4LTQuOTE2LDIuMTc4LTQuOTE2czAuMDk5LDAuNjY4LDAuNDI0LDEuNzc0YzAuMTkxLDAuNjUsMC41OTcsMS4zNjksMC45MTgsMi4wNTkJYy0wLjI1OCwwLjM1OC0wLjQxNiwwLjU2My0wLjQxNiwwLjU2M3MwLjAwMSwwLjAwNCwwLjAwNCwwLjAxMWMtMC4yMDYsMC4yNzQtMC40MzcsMC41NjktMC42NzksMC44NTcJYy0wLjg3OCwxLjA0NS0xLjkyMywyLjIzOS0yLjA2MywyLjU4M2MtMC4xNjUsMC40MDYtMC4xMjYsMC43MDQsMC4xOTMsMC45NDVjMC4yMzMsMC4xNzUsMC42NDcsMC4yMDMsMS4wOCwwLjE3NAljMC43ODktMC4wNTMsMS4zNDMtMC4yNDksMS42MTctMC4zNjhjMC40MjctMC4xNTEsMC45MjQtMC4zODgsMS4zOS0wLjczMWMwLjg2MS0wLjYzMywxLjM4LTEuNTM4LDEuMzMtMi43MzgJYy0wLjAyOC0wLjY2MS0wLjIzOC0xLjMxNi0wLjUwNS0xLjkzNGMwLjA3OC0wLjExMiwwLjE1Ni0wLjIyNiwwLjIzNS0wLjM0YzEuMzU3LTEuOTg0LDIuNDEtNC4xNjQsMi40MS00LjE2NAlzMC4wOTksMC42NjgsMC40MjQsMS43NzRjMC4xNjQsMC41NTksMC40ODksMS4xNywwLjc4MSwxLjc2OGMtMS4yNzYsMS4wMzctMi4wNjcsMi4yNDItMi4zNDIsMy4wMzIJYy0wLjUwOCwxLjQ2Mi0wLjExLDIuMTI0LDAuNjM2LDIuMjc1YzAuMzM4LDAuMDY4LDAuODE2LTAuMDg3LDEuMTc1LTAuMjM5YzAuNDQ3LTAuMTQ4LDAuOTg0LTAuMzk1LDEuNDg2LTAuNzY0CWMwLjg2MS0wLjYzMywxLjY4OS0xLjUxOSwxLjYzOS0yLjcxOGMtMC4wMjMtMC41NDYtMC4xNzEtMS4wODgtMC4zNzItMS42MDhjMS4wODItMC40NTEsMi40ODItMC43MDEsNC4yNjYtMC40OTMJYzMuODI3LDAuNDQ3LDQuNTc3LDIuODM2LDQuNDM0LDMuODM2Yy0wLjE0NCwxLTAuOTQ2LDEuNTUtMS4yMTUsMS43MTZjLTAuMjY4LDAuMTY2LTAuMzUsMC4yMjQtMC4zMjgsMC4zNDcJYzAuMDMzLDAuMTc5LDAuMTU3LDAuMTczLDAuMzg2LDAuMTM0YzAuMzE1LTAuMDUzLDIuMDA5LTAuODEzLDIuMDgyLTIuNjU5QzQ2LjA4OSwyOC41MDksNDMuODQ0LDI1LjkzNSwzOS44NjcsMjUuOTU2eiBNMTAuMzcsMzUuOQljLTEuMjY4LDEuMzgzLTMuMDM4LDEuOTA1LTMuNzk4LDEuNDY1Yy0wLjgyLTAuNDc1LTAuNDk1LTIuNTExLDEuMDYtMy45NzljMC45NDgtMC44OTQsMi4xNzItMS43MTgsMi45ODQtMi4yMjUJYzAuMTg1LTAuMTExLDAuNDU2LTAuMjc0LDAuNzg2LTAuNDcyYzAuMDU1LTAuMDMxLDAuMDg2LTAuMDQ4LDAuMDg2LTAuMDQ4bC0wLjAwMS0wLjAwMmMwLjA2NC0wLjAzOCwwLjEyOS0wLjA3NywwLjE5Ni0wLjExOAlDMTIuMjUsMzIuNjEsMTEuNzAxLDM0LjQ0OSwxMC4zNywzNS45eiBNMTkuNjA1LDI5LjYyM2MtMC40NDEsMS4wNzYtMS4zNjUsMy44My0xLjkyOCwzLjY4MmMtMC40ODMtMC4xMjctMC43NzctMi4yMi0wLjA5Ni00LjI4CWMwLjM0Mi0xLjAzNywxLjA3NC0yLjI3NiwxLjUwNC0yLjc1N2MwLjY5Mi0wLjc3NCwxLjQ1NC0xLjAyNywxLjYzOS0wLjcxM0MyMC45NTksMjUuOTU1LDE5Ljg4MiwyOC45NDgsMTkuNjA1LDI5LjYyM3ogTTI3LjIzNCwzMy4yNjNjLTAuMTg3LDAuMDk4LTAuMzU5LDAuMTU5LTAuNDM4LDAuMTEyYy0wLjA1OS0wLjAzNSwwLjA3Ny0wLjE2NCwwLjA3Ny0wLjE2NHMwLjk1NC0xLjAyNywxLjMzLTEuNDk0CWMwLjIxOS0wLjI3MiwwLjQ3Mi0wLjU5NSwwLjc0OC0wLjk1NWMwLjAwMiwwLjAzNiwwLjAwMywwLjA3MiwwLjAwMywwLjEwN0MyOC45NTIsMzIuMDk5LDI3Ljc2NCwzMi45MjksMjcuMjM0LDMzLjI2M3ogTTMzLjExMSwzMS45MjNjLTAuMTQtMC4wOTktMC4xMTYtMC40MiwwLjM0My0xLjQyMWMwLjE4LTAuMzkzLDAuNTkyLTEuMDU0LDEuMzA2LTEuNjg2YzAuMDgzLDAuMjYsMC4xMzMsMC41MDksMC4xMzIsMC43NDEJQzM0Ljg4MywzMS4xMDUsMzMuNzc5LDMxLjY4MywzMy4xMTEsMzEuOTIzeiIvPjwvc3ZnPg=="

/***/ }),

/***/ "./static/icons/icons8-sql-40.png":
/*!****************************************!*\
  !*** ./static/icons/icons8-sql-40.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAC+ElEQVRYhe2XS08TURSAv85MO5bpA/rAlhIBYyrVjcYnGokuNFFxo3FJonGpa3+Ee3+Auja6UGOiUaMkaHyiiSAIEmJ5mFJFitDO3BkXIDFyEZtCldgvmc09c+79cnPvnDNQoTRcssEjF560uVxctoRdUw4JTVOywnbab5/ffWtBTJbgUrh0fF9zTTzsX3k7YDgzGbre0XMZiPwaU2QJlmWHyiUHUBfxY1p2WBaTCv5LVARLpSJYKhXBUlmdgh5NzYxmc2WTGM3mcKtqRhaTCuaFuHijs9e0LHtlzQDLsrnR2WsWbHFRFpcK6op6rq0l6da0Ik+AA7btFJWiaQptLUm3R1HPSuOywYIQ4VjIt+ikr/vHeNKdZjpvcXB7E6mGKO8/Zrn74gOmKdjWXMeezfUMjU1w7VEPx/YmWR9fvDGKhXyYQixoFBYV/B1fcjPcfzXIhkSIplg1tTU+TEtw59kA8bAfr67xtDtNsj5U7NRSir7FE1N5cKAxFmRTY5RwwEv/8GcKlmBnqo7tG+MADI58+TuCibCfgKFz78UgL/tGcICJ3AwAAZ+O4fUAMDld+DuCmqZwojVFtNrgYdcQbwbGcOYacwWXvEUvpyBAwNA5uT9F0NDpHcpirJk9ylMzJrm5nfN53csiWPQlyc0UGJ/4huJykTcFdRGdxlg1uKCrf4w1ntkp19UGyZsCmL1Ynz5P4Td0vJ7ilixacHQ8x83OPgDCwSpaNifwV+nsTiV4/DY9K7c2SKTGIP3pKwCPuoYAOLRjPamGaOmCc6UuIvsWbkiEOHN0K8JxCFTp82du16Z6Ug1R+tJZnr8b4eqDbk60NnPq8Jb5XK8u349lL3U+r4fgT3I/CBg625JxTh/ZwoGtjaiqQtDQ5x+Ppi6Yq7ylbg63qhCtrvqjd5cqdVKDpUrdcvO7Urc6+8F/iYpgqVQES6UiWCpSQU1TssOZybJJpDOTuDVlXOoiGxS2036to+eKZdnL82OxBG5NGReW3V6Otf4/vgMu4QL3/9QzxAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./static/icons/icons8-windows-10.svg":
/*!********************************************!*\
  !*** ./static/icons/icons8-windows-10.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCI+ICAgIDxwYXRoIGQ9Ik0gMSAyIEwgMSAxOCBMIDEwIDE4IEwgMTAgMjAgTCA4IDIwIEwgOCAyMiBMIDE2IDIyIEwgMTYgMjAgTCAxNCAyMCBMIDE0IDE4IEwgMjMgMTggTCAyMyAyIEwgMSAyIHogTSAzIDQgTCAyMSA0IEwgMjEgMTYgTCAzIDE2IEwgMyA0IHogTSAxNyA1IEwgMTMgNS40NDUzMTI1IEwgMTMgOSBMIDE3IDkgTCAxNyA1IHogTSAxMSA1Ljc5Mjk2ODggTCA3IDYuMjM4MjgxMiBMIDcgOSBMIDExIDkgTCAxMSA1Ljc5Mjk2ODggeiBNIDcgMTEgTCA3IDEzLjc2MTcxOSBMIDExIDE0LjIwNzAzMSBMIDExIDExIEwgNyAxMSB6IE0gMTMgMTEgTCAxMyAxNC41NTQ2ODggTCAxNyAxNSBMIDE3IDExIEwgMTMgMTEgeiIvPjwvc3ZnPg=="

/***/ })

}]);
//# sourceMappingURL=1.js.map