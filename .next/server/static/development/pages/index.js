module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./HOC/blocksLayout.js":
/*!*****************************!*\
  !*** ./HOC/blocksLayout.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\747049\\Desktop\\craigio\\HOC\\blocksLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const blocksLayout = ({
  page
}) => Page => {
  return () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "section-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("header", {
    className: "headster",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("h1", {
    className: "headster__text-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, page), __jsx("div", {
    className: "underline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  })), __jsx("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(Page, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (blocksLayout);

/***/ }),

/***/ "./HOC/fadeInSection.js":
/*!******************************!*\
  !*** ./HOC/fadeInSection.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\747049\\Desktop\\craigio\\HOC\\fadeInSection.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function fadeInSection(props) {
  const {
    0: isVisible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const domRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          return setVisible(entry.isIntersecting);
        }
      });
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return __jsx("div", {
    className: `fade-in-section ${isVisible ? 'is-visible' : ''}`,
    ref: domRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, props.children);
}

/* harmony default export */ __webpack_exports__["default"] = (fadeInSection);

/***/ }),

/***/ "./HOC/informationLayout.js":
/*!**********************************!*\
  !*** ./HOC/informationLayout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\747049\\Desktop\\craigio\\HOC\\informationLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const informationLayout = ({
  page
}) => Page => {
  return () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "section-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "headster",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("h1", {
    className: "headster__text-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, page), __jsx("div", {
    className: "underline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  })), __jsx("div", {
    className: "information",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx(Page, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (informationLayout);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\747049\\Desktop\\craigio\\components\\Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Footer = () => {
  return __jsx("footer", {
    className: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "footer__links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#home",
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#about",
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "About")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#skills",
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "Skills")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#projects",
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "Projects")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#contact",
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "Contact"))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "Craig MacRitchie February 2020"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "icons from ", __jsx("a", {
    className: "footer__link",
    href: "https://icons8.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "Icons8"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Navigation.js":
/*!**********************************!*\
  !*** ./components/Navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\747049\\Desktop\\craigio\\components\\Navigation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const iconProp = {
  fontSize: '38px',
  verticalAlign: 'middle'
};

const Navigation = ({
  currentTab
}) => {
  const {
    0: isSticky,
    1: setSticky
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const domRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let observer = new IntersectionObserver(function (entries) {
      // console.log(entries[0])
      return setSticky(entries[0].intersectionRatio === 0);
    }, {
      threshold: [0, 1]
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "#pre-navigation",
    ref: domRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), __jsx("div", {
    className: `navigation-links ${isSticky ? 'nav_sticky' : 'nav_unsticky'}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("a", {
    className: `navigation-links__button ${currentTab === 'home' && 'current-tab'}`,
    href: "#home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("span", {
    className: "navigation-links__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Home"), __jsx("span", {
    className: "navigation-links__icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__["Home"], {
    style: iconProp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }))), __jsx("a", {
    className: `navigation-links__button ${currentTab === 'about' && 'current-tab'}`,
    href: "#about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("span", {
    className: "navigation-links__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "About"), __jsx("span", {
    className: "navigation-links__icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__["Person"], {
    style: iconProp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }))), __jsx("a", {
    className: `navigation-links__button ${currentTab === 'skills' && 'current-tab'}`,
    href: "#skills",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("span", {
    className: "navigation-links__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "Skills"), __jsx("span", {
    className: "navigation-links__icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__["Code"], {
    style: iconProp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }))), __jsx("a", {
    className: `navigation-links__button ${currentTab === 'projects' && 'current-tab'}`,
    href: "#projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx("span", {
    className: "navigation-links__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, "Projects"), __jsx("span", {
    className: "navigation-links__icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__["FolderOpen"], {
    style: iconProp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }))), __jsx("a", {
    className: `navigation-links__button ${currentTab === 'contact' && 'current-tab'}`,
    href: "#contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx("span", {
    className: "navigation-links__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, "Contact"), __jsx("span", {
    className: "navigation-links__icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__["ContactMail"], {
    style: iconProp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {



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
  description: "Redux, Context API, HOC, Hooks, SSR"
}, {
  title: "Node.js",
  keywords: ["javascript", "node"],
  link: 'node',
  icon: 'icons8-nodejs.svg',
  description: "Express, websockets, JWT, Middleware, npm"
}, {
  title: "Databases",
  keywords: ["noSQL"],
  link: 'databases',
  icon: 'icons8-mongodb.svg',
  description: "SQL, NoSQL, Mongoose, Microsoft SQL Server"
}, {
  title: "DevOps",
  keywords: ["container", "containerization"],
  link: 'devops',
  icon: 'devops.png',
  description: "Azure DevOps, Git, Docker, Travis CI"
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
  description: "OOP, Design Patterns, Unity, "
}, {
  title: "ASP.NET & .Net core",
  keywords: ["MVC", "C#"],
  picture: "no pic",
  link: 'aspnet',
  icon: 'icons8-windows-10.svg',
  description: "MVC, Full Stack, Entity Framework"
}, {
  title: "Style Sheets",
  keywords: ["", "styling"],
  link: 'styleSheets',
  icon: 'icons8-sass.svg',
  description: "CSS3, Sass, BEM, Animations"
}, {
  title: "Cloud Technologies",
  keywords: ["container", "containerization"],
  link: 'cloud',
  icon: 'icons8-cloud-connection-100.png',
  description: "Azure, Google Cloud, FireStore, AWS"
}, {
  title: "Javascript",
  keywords: ["container", "containerization"],
  picture: "no pic",
  link: 'javascript',
  icon: 'icons8-javascript.svg',
  description: "ES6, data structures, algorithms"
}]);

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
  description: "Harry Potter House style MERN application",
  picture: "",
  link: 'louisRiel',
  thumbnailSmall: 'Louis_Riel1.jpg',
  thumbnailLarge: 'InkedLouis_Riel_HarryPotter.jpg'
}, {
  title: "SEDI Webscraping",
  keywords: ["python", "beautiful soup"],
  description: "Webscraping application using Python",
  picture: "no pic",
  link: 'scraping',
  thumbnailSmall: 'Scrapping.png',
  thumbnailLarge: 'InkedLouis_Riel_HarryPotter.jpg'
}, {
  title: "Tracker App",
  keywords: ["javascript"],
  description: "MERN Stack Project for tracking progress",
  picture: "no pic",
  link: 'tracker',
  thumbnailSmall: 'TrackerIcon.png',
  thumbnailLarge: 'InkedLouis_Riel_HarryPotter.jpg'
}, {
  title: "Home Irrigation",
  keywords: ["javascript"],
  description: "IoT device using Python and Raspberry Pi",
  picture: "no pic",
  link: 'irrigation',
  thumbnailSmall: 'irrigationIcon2.jpg',
  thumbnailLarge: 'InkedLouis_Riel_HarryPotter.jpg'
}]);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = _router.default.router.pageLoader.prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    _router.default.prefetch(this.getHref());
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (true) {
      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = (0, _rewriteUrlForExport.rewriteUrlForNextExport)(props.href);
      }
    }

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign(_Object$assign({}, data), {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (true) {
        // @ts-ignore this is temporarily global (attached to window)
        if (__NEXT_DATA__.nextExport) {
          as = rewrite_url_for_export_1.rewriteUrlForNextExport(as);
        }
      }

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as));
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeMatch = route_matcher_1.getRouteMatcher(route_regex_1.getRouteRegex(route))(asPathname);

        if (!routeMatch) {
          const error = `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`;

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign(_Object$assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__NEXT_SPR ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

      if (true) {
        // mark it as prefetched for debugging in dev
        this.pageLoader.prefetched[route] = true;
        return;
      }

      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HOC_blocksLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HOC/blocksLayout */ "./HOC/blocksLayout.js");
/* harmony import */ var _HOC_informationLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HOC/informationLayout */ "./HOC/informationLayout.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\747049\\Desktop\\craigio\\pages\\about.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const About = () => __jsx("div", {
  className: "content__text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("picture", {
  className: "about-image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("source", {
  media: "(max-width: 799px)",
  srcSet: __webpack_require__(/*! ../static/better2.jpg */ "./static/better2.jpg"),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), __jsx("source", {
  media: "(min-width: 800px)",
  srcSet: __webpack_require__(/*! ../static/better3.jpg */ "./static/better3.jpg"),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx("img", {
  srcSet: __webpack_require__(/*! ../static/better3.jpg */ "./static/better3.jpg"),
  alt: "craig macritchie",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
})), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "Hi! My name is Craig MacRitchie and I'm a full Stack developer based in Calgary. I enjoy working with a number of different technologies, though I have a passion for working with javascript. I've worked with a number of data science technologies and hope to learn more in the future."));

const details = {
  page: 'about me'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_HOC_informationLayout__WEBPACK_IMPORTED_MODULE_2__["default"])(details)(About)); // backend moving towards microservices
// ide plugins
// tech:
// 80% java
// rest is GO 
// database: mongo => postgres and event source 
// event source database as a log
// event store is the database application CQRS
// backend developer
// fair amount of chain 3 layers above 
// quality of people especialy from a tech perspective
// ember 
// tight nit team 
// not tied to a team as much as the backend

/***/ }),

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HOC_informationLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HOC/informationLayout */ "./HOC/informationLayout.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\747049\\Desktop\\craigio\\pages\\contact.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const iconProp = {
  fontSize: '50px',
  verticalAlign: 'middle'
};

const Contact = () => __jsx("div", {
  className: "content__text about-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("div", {
  className: "contact-icons",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("a", {
  href: "https://www.linkedin.com/in/craig-macritchie/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["LinkedIn"], {
  style: iconProp,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
})), __jsx("a", {
  href: "https://github.com/cmacritchie",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["GitHub"], {
  style: iconProp,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
})), __jsx("a", {
  href: "mailto:craig.macritchie@gmail.com?subject=Portfolio website",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["MailOutline"], {
  style: iconProp,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}))), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, "If you have any questions or comments please contact me, I'm always looking to improve!"), __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}), __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}), __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, "I am currently working on:"), __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, "DevOps"));

const details = {
  page: 'contact'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_HOC_informationLayout__WEBPACK_IMPORTED_MODULE_1__["default"])(details)(Contact));

/***/ }),

/***/ "./pages/frameworks.js":
/*!*****************************!*\
  !*** ./pages/frameworks.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HOC_informationLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HOC/informationLayout */ "./HOC/informationLayout.js");
/* harmony import */ var _HOC_blocksLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HOC/blocksLayout */ "./HOC/blocksLayout.js");
/* harmony import */ var _HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../HOC/fadeInSection */ "./HOC/fadeInSection.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icons_frameworks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/frameworks */ "./icons/frameworks.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\747049\\Desktop\\craigio\\pages\\frameworks.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Frameworks = () => {
  const prepareframeworks = () => {
    return _icons_frameworks__WEBPACK_IMPORTED_MODULE_5__["default"].map(item => {
      return __jsx(_HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: item.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: undefined
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: `/framework/${item.link}`,
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: undefined
      }, __jsx("div", {
        className: "feature-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: undefined
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: undefined
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: undefined
      }, item.title), __jsx("picture", {
        className: "feature-box__image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: undefined
      }, __jsx("img", {
        src: __webpack_require__("./static/icons sync recursive ^\\.\\/.*$")(`./${item.icon}`),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: undefined
      })), __jsx("p", {
        className: "feature-box__description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: undefined
      }, item.description)))));
    });
  };

  return __jsx("div", {
    className: "modules",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, prepareframeworks());
};

const details = {
  page: 'Skills'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_HOC_blocksLayout__WEBPACK_IMPORTED_MODULE_2__["default"])(details)(Frameworks)); // export default fadeInSection(Frameworks)

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HOC/fadeInSection */ "./HOC/fadeInSection.js");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navigation */ "./components/Navigation.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about */ "./pages/about.js");
/* harmony import */ var _frameworks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./frameworks */ "./pages/frameworks.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects */ "./pages/projects.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact */ "./pages/contact.js");
var _jsxFileName = "C:\\Users\\747049\\Desktop\\craigio\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










const HomePage = () => {
  const {
    0: highlighted,
    1: setHighlighted
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('home');
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRect.height / entry.rootBounds.height > 0.6) {
          setHighlighted(entry.target.id);
        }
      });
    }, {
      rootMargin: '0px 0px -60% 0px',
      //top, right, bottom left
      threshold: [0, 0.5, 0.1, 0.15, 0.2, 0.25, 0.4, 0.6, 0.8, 1]
    });
    let elements = document.querySelectorAll('.navigation-block');

    for (let elm of elements) {
      observer.observe(elm);
    }

    return () => {
      for (let elm of elements) {
        observer.unobserve(elm);
      }
    };
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "138383410",
    __self: undefined
  }, ".header.jsx-138383410{height:90vh;background-image:linear-gradient(  rgba(30,144,255,0.5), rgba(3,37,69,0.5) ), url(../../static/mountain2.jpg);background-repeat:repeat-x;background-size:cover;background-position:left;position:relative;}@media screen and (max-width:700px){.header.jsx-138383410{background-position:center;background-image:linear-gradient( rgba(130,201,228,0.5), rgba(30,144,255,0.5) ), url(../../static/mountain2_phone.jpg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcNzQ3MDQ5XFxEZXNrdG9wXFxjcmFpZ2lvXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0NrQixBQUdxQixBQWlCZSxZQVhNLGVBZ0JVLCtGQWZoQix3QkFnQjdCLEdBZndCLHNCQUNHLHlCQUNQLGtCQUVwQiIsImZpbGUiOiJDOlxcVXNlcnNcXDc0NzA0OVxcRGVza3RvcFxcY3JhaWdpb1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRmFkZUluU2VjdGlvbiBmcm9tICcuLi9IT0MvZmFkZUluU2VjdGlvbidcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xyXG5cclxuaW1wb3J0IFwiLi4vY3NzL3N0eWxlLmNzc1wiXHJcblxyXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9hYm91dCdcclxuaW1wb3J0IEZyYW1ld29ya3MgZnJvbSAnLi9mcmFtZXdvcmtzJ1xyXG5pbXBvcnQgUHJvamVjdHMgZnJvbSAnLi9wcm9qZWN0cydcclxuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9jb250YWN0J1xyXG5cclxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2hpZ2hsaWdodGVkLCBzZXRIaWdobGlnaHRlZF0gPSB1c2VTdGF0ZSgnaG9tZScpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG5cclxuICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcclxuXHJcbiAgICAgICAgaWYoKGVudHJ5LmludGVyc2VjdGlvblJlY3QuaGVpZ2h0IC8gZW50cnkucm9vdEJvdW5kcy5oZWlnaHQpID4gMC42KSB7XHJcbiAgICAgICAgICBzZXRIaWdobGlnaHRlZChlbnRyeS50YXJnZXQuaWQpXHJcbiAgICAgICAgfSBcclxuICAgICAgfSlcclxuICAgICAgfSwge1xyXG4gICAgICAgICAgcm9vdE1hcmdpbjogJzBweCAwcHggLTYwJSAwcHgnLCAvL3RvcCwgcmlnaHQsIGJvdHRvbSBsZWZ0XHJcbiAgICAgICAgICB0aHJlc2hvbGQ6WzAsIDAuNSwgMC4xLCAwLjE1LCAwLjIsIDAuMjUsIDAuNCwgMC42LCAwLjgsIDFdIFxyXG4gICAgICB9KTtcclxuICAgICAgXHJcblxyXG4gICAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2aWdhdGlvbi1ibG9jaycpO1xyXG5cclxuICAgICAgZm9yIChsZXQgZWxtIG9mIGVsZW1lbnRzKSB7XHJcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbG0pO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGZvciAobGV0IGVsbSBvZiBlbGVtZW50cykge1xyXG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbG0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogOTB2aDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHJnYmEoMzAsIDE0NCwgMjU1LCAwLjUpLFxyXG4gICAgICAgICAgcmdiYSgzLCAzNywgNjksIDAuNSlcclxuICAgICAgICAgICksXHJcbiAgICAgICAgICB1cmwoLi4vLi4vc3RhdGljL21vdW50YWluMi5qcGcpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDsgXHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgICAgLmhlYWRlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgcmdiYSgxMzAsIDIwMSwgMjI4LCAwLjUpLFxyXG4gICAgICAgICAgICAgIHJnYmEoMzAsIDE0NCwgMjU1LCAwLjUpXHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICB1cmwoLi4vLi4vc3RhdGljL21vdW50YWluMl9waG9uZS5qcGcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXIgbmF2aWdhdGlvbi1ibG9ja1wiIGlkPVwiaG9tZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3RleHQtYm94XCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkaW5nLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkaW5nLXByaW1hcnktLW1haW5cIj5DcmFpZyBNYWNSaXRjaGllPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZy1wcmltYXJ5LS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZy1wcmltYXJ5LS1zdWIgaGVhZGluZy1wcmltYXJ5LS1zdWItLTFcIj5GdWxsLVN0YWNrIERldmVsb3BlcjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nLXByaW1hcnktLXN1YiBoZWFkaW5nLXByaW1hcnktLXN1Yi0tMlwiPkRhdGEgU2NpZW50aXN0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRpbmctcHJpbWFyeS0tc3ViIGhlYWRpbmctcHJpbWFyeS0tc3ViLS0zXCI+RW5naW5lZXIgaW4gVHJhaW5pbmc8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9oMT4gXHJcbiAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8TmF2aWdhdGlvbiBjdXJyZW50VGFiID17aGlnaGxpZ2h0ZWR9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+ICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzZWN0aW9ucyBuYXZpZ2F0aW9uLWJsb2NrYH0gaWQ9XCJhYm91dFwiPlxyXG4gICAgICAgICAgICA8RmFkZUluU2VjdGlvbj5cclxuICAgICAgICAgICAgICA8QWJvdXQgLz5cclxuICAgICAgICAgICAgPC9GYWRlSW5TZWN0aW9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHNlY3Rpb25zIG5hdmlnYXRpb24tYmxvY2tgfSBpZD1cInNraWxsc1wiPlxyXG4gICAgICAgICAgICA8RmFkZUluU2VjdGlvbj5cclxuICAgICAgICAgICAgICA8RnJhbWV3b3JrcyAvPlxyXG4gICAgICAgICAgICA8L0ZhZGVJblNlY3Rpb24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc2VjdGlvbnMgbmF2aWdhdGlvbi1ibG9ja2B9IGlkPVwicHJvamVjdHNcIj5cclxuICAgICAgICAgICAgPEZhZGVJblNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPFByb2plY3RzIC8+ICAgICAgICBcclxuICAgICAgICAgICAgPC9GYWRlSW5TZWN0aW9uPlxyXG4gICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHNlY3Rpb25zIG5hdmlnYXRpb24tYmxvY2tgfSBpZD1cImNvbnRhY3RcIj5cclxuICAgICAgICAgICAgPEZhZGVJblNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFjdCAvPiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9GYWRlSW5TZWN0aW9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\747049\\\\Desktop\\\\craigio\\\\pages\\\\index.js */"), __jsx("div", {
    className: "jsx-138383410" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx("header", {
    id: "home",
    className: "jsx-138383410" + " " + "header navigation-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-138383410" + " " + "header__text-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-138383410" + " " + "heading-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-138383410" + " " + "heading-primary--main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, "Craig MacRitchie"), __jsx("div", {
    className: "jsx-138383410" + " " + "heading-primary--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-138383410" + " " + "heading-primary--sub heading-primary--sub--1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, "Full-Stack Developer"), __jsx("div", {
    className: "jsx-138383410" + " " + "heading-primary--sub heading-primary--sub--2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, "Data Scientist"), __jsx("div", {
    className: "jsx-138383410" + " " + "heading-primary--sub heading-primary--sub--3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, "Engineer in Training"))))), __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    currentTab: highlighted,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-138383410" + " " + "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, __jsx("div", {
    id: "about",
    className: "jsx-138383410" + " " + `sections navigation-block`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, __jsx(_HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, __jsx(_about__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }))), __jsx("div", {
    id: "skills",
    className: "jsx-138383410" + " " + `sections navigation-block`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, __jsx(_HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, __jsx(_frameworks__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }))), __jsx("div", {
    id: "projects",
    className: "jsx-138383410" + " " + `sections navigation-block`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, __jsx(_HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, __jsx(_projects__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }))), __jsx("div", {
    id: "contact",
    className: "jsx-138383410" + " " + `sections navigation-block`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, __jsx(_HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, __jsx(_contact__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  })))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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

const Projects = () => {
  const prepareProjects = () => {
    return _icons_projects__WEBPACK_IMPORTED_MODULE_4__["default"].map(item => {
      return __jsx(_HOC_fadeInSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
        key: item.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: undefined
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: `/project/${item.link}`,
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: undefined
      }, __jsx("div", {
        className: "feature-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: undefined
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: undefined
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: undefined
      }, item.title), __jsx("picture", {
        className: "feature-box__image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: undefined
      }, __jsx("img", {
        srcSet: __webpack_require__("./static/thumbnails sync recursive ^\\.\\/.*$")(`./${item.thumbnailSmall}`),
        alt: "louis riel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: undefined
      })), __jsx("p", {
        className: "feature-box__description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: undefined
      }, item.description)))));
    });
  };

  return __jsx("div", {
    className: "modules",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, prepareProjects());
};

const details = {
  page: 'projects'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_HOC_blocksLayout__WEBPACK_IMPORTED_MODULE_2__["default"])(details)(Projects));

/***/ }),

/***/ "./static/better2.jpg":
/*!****************************!*\
  !*** ./static/better2.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/better2-1b8089fe91bf1bc82aeacd4068cf1d74.jpg";

/***/ }),

/***/ "./static/better3.jpg":
/*!****************************!*\
  !*** ./static/better3.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/better3-f5b186c94e27ba81bfc641e490c99818.jpg";

/***/ }),

/***/ "./static/icons sync recursive ^\\.\\/.*$":
/*!************************************!*\
  !*** ./static/icons sync ^\.\/.*$ ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./devops.png": "./static/icons/devops.png",
	"./icons8-c-sharp-logo.svg": "./static/icons/icons8-c-sharp-logo.svg",
	"./icons8-cloud-connection-100.png": "./static/icons/icons8-cloud-connection-100.png",
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

/***/ "./static/icons/devops.png":
/*!*********************************!*\
  !*** ./static/icons/devops.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/devops-6a7055e09bae44e45b43150d6ab5694f.png";

/***/ }),

/***/ "./static/icons/icons8-c-sharp-logo.svg":
/*!**********************************************!*\
  !*** ./static/icons/icons8-c-sharp-logo.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDhweCI+PHBhdGggZmlsbD0iIzM3NDc0ZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjIuOTAzLDMuMjg2YzAuNjc5LTAuMzgxLDEuNTE1LTAuMzgxLDIuMTkzLDAgYzMuMzU1LDEuODgzLDEzLjQ1MSw3LjU1MSwxNi44MDcsOS40MzRDNDIuNTgyLDEzLjEsNDMsMTMuODA0LDQzLDE0LjU2NmMwLDMuNzY2LDAsMTUuMTAxLDAsMTguODY3IGMwLDAuNzYyLTAuNDE4LDEuNDY2LTEuMDk3LDEuODQ3Yy0zLjM1NSwxLjg4My0xMy40NTEsNy41NTEtMTYuODA3LDkuNDM0Yy0wLjY3OSwwLjM4MS0xLjUxNSwwLjM4MS0yLjE5MywwIGMtMy4zNTUtMS44ODMtMTMuNDUxLTcuNTUxLTE2LjgwNy05LjQzNEM1LjQxOCwzNC44OTksNSwzNC4xOTYsNSwzMy40MzRjMC0zLjc2NiwwLTE1LjEwMSwwLTE4Ljg2NyBjMC0wLjc2MiwwLjQxOC0xLjQ2NiwxLjA5Ny0xLjg0N0M5LjQ1MSwxMC44MzcsMTkuNTQ5LDUuMTY5LDIyLjkwMywzLjI4NnoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGZpbGw9IiM1NDZlN2EiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTUuMzA0LDM0LjQwNEM1LjAzOCwzNC4wNDgsNSwzMy43MSw1LDMzLjI1NSBjMC0zLjc0NCwwLTE1LjAxNCwwLTE4Ljc1OWMwLTAuNzU4LDAuNDE3LTEuNDU4LDEuMDk0LTEuODM2YzMuMzQzLTEuODcyLDEzLjQwNS03LjUwNywxNi43NDgtOS4zOCBjMC42NzctMC4zNzksMS41OTQtMC4zNzEsMi4yNzEsMC4wMDhjMy4zNDMsMS44NzIsMTMuMzcxLDcuNDU5LDE2LjcxNCw5LjMzMWMwLjI3LDAuMTUyLDAuNDc2LDAuMzM1LDAuNjYsMC41NzZMNS4zMDQsMzQuNDA0eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjQsMTBjNy43MjcsMCwxNCw2LjI3MywxNCwxNHMtNi4yNzMsMTQtMTQsMTQgcy0xNC02LjI3My0xNC0xNFMxNi4yNzMsMTAsMjQsMTB6IE0yNCwxN2MzLjg2MywwLDcsMy4xMzYsNyw3YzAsMy44NjMtMy4xMzcsNy03LDdzLTctMy4xMzctNy03QzE3LDIwLjEzNiwyMC4xMzYsMTcsMjQsMTd6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBmaWxsPSIjNDU1YTY0IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Mi40ODUsMTMuMjA1YzAuNTE2LDAuNDgzLDAuNTA2LDEuMjExLDAuNTA2LDEuNzg0IGMwLDMuNzk1LTAuMDMyLDE0LjU4OSwwLjAwOSwxOC4zODRjMC4wMDQsMC4zOTYtMC4xMjcsMC44MTMtMC4zMjMsMS4xMjdMMjMuNTkzLDI0TDQyLjQ4NSwxMy4yMDV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNCAyMEgzNVYyOEgzNHpNMzcgMjBIMzhWMjhIMzd6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMiAyNUg0MFYyNkgzMnpNMzIgMjJINDBWMjNIMzJ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="

/***/ }),

/***/ "./static/icons/icons8-cloud-connection-100.png":
/*!******************************************************!*\
  !*** ./static/icons/icons8-cloud-connection-100.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

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

/***/ }),

/***/ "./static/thumbnails sync recursive ^\\.\\/.*$":
/*!*****************************************!*\
  !*** ./static/thumbnails sync ^\.\/.*$ ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./InkedLouis_Riel_HarryPotter.jpg": "./static/thumbnails/InkedLouis_Riel_HarryPotter.jpg",
	"./Louis_Riel1.jpg": "./static/thumbnails/Louis_Riel1.jpg",
	"./Scrapping.png": "./static/thumbnails/Scrapping.png",
	"./TrackerIcon.png": "./static/thumbnails/TrackerIcon.png",
	"./irrigationIcon.jpg": "./static/thumbnails/irrigationIcon.jpg",
	"./irrigationIcon2.jpg": "./static/thumbnails/irrigationIcon2.jpg"
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

/***/ }),

/***/ "./static/thumbnails/Scrapping.png":
/*!*****************************************!*\
  !*** ./static/thumbnails/Scrapping.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Scrapping-49b675d335db910287558cd15c3c52d6.png";

/***/ }),

/***/ "./static/thumbnails/TrackerIcon.png":
/*!*******************************************!*\
  !*** ./static/thumbnails/TrackerIcon.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/thumbnails/irrigationIcon.jpg":
/*!**********************************************!*\
  !*** ./static/thumbnails/irrigationIcon.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/irrigationIcon-9f24ceb23e0887d309bf26c5231b0290.jpg";

/***/ }),

/***/ "./static/thumbnails/irrigationIcon2.jpg":
/*!***********************************************!*\
  !*** ./static/thumbnails/irrigationIcon2.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/irrigationIcon2-3d503a82bae89534bd965b837238d34d.jpg";

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\747049\Desktop\craigio\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/icons":
/*!*************************************!*\
  !*** external "@material-ui/icons" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map