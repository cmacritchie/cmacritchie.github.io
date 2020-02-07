webpackHotUpdate("static\\development\\pages\\project\\scraping.js",{

/***/ "./pages/project/scraping.js":
/*!***********************************!*\
  !*** ./pages/project/scraping.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HOC_pageLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../HOC/pageLayout */ "./HOC/pageLayout.js");
var _jsxFileName = "C:\\Users\\747049\\Desktop\\craigio\\pages\\project\\scraping.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var pageDetails = {
  title: 'Sedi Web Scraping',
  back: '/#projects',
  next: '/project/tracker',
  nextTitle: 'Tracker App'
};

var LouisRiel = function LouisRiel() {
  return __jsx(_HOC_pageLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    pageDetails: pageDetails,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "For my application to Mawer Investment Management I was given a programming challenge as part of my interview process. The challenge was to get all the Insider information from the SEDI website (System for Electronic Disclosure by Insiders)."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "After doing some research (SEDI doesn't have any external APIs), I chose Python and the 'Beautiful Soup' library to conduct the web scraping."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Retrieving the information I needed was a little tricky because SEDI doesn't contain pagination and there is no set url for beginning the HTML parsing. I ended up taking a SEDI network request and modifying it using Postman to understand how the SEDI website grabbed information. If too many insiders were returned, the request would fail causing another problem. After understanding how the queries worked I was able to set up a script that would iterate through all the records while throttling the requests to prevent failure."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "While taking a look at the site through Chrome Devtools I noticed that many of the table rows and cells that needed to be scrapped didn't contain any identifying attributes besides the width. This caused a headache, but it was still manageable. after the records had been scrapped from the page, they were inserted into a MySQL database for further querying."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Here is a link to the github page")));
};

/* harmony default export */ __webpack_exports__["default"] = (LouisRiel);

/***/ })

})
//# sourceMappingURL=scraping.js.87ffa4214fea8739db46.hot-update.js.map