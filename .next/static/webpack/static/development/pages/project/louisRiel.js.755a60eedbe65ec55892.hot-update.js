webpackHotUpdate("static\\development\\pages\\project\\louisRiel.js",{

/***/ "./pages/project/louisRiel.js":
/*!************************************!*\
  !*** ./pages/project/louisRiel.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HOC_pageLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../HOC/pageLayout */ "./HOC/pageLayout.js");
var _jsxFileName = "C:\\Users\\747049\\Desktop\\craigio\\pages\\project\\louisRiel.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var pageDetails = {
  title: 'Louis Riel Houses',
  back: '/#projects',
  next: '/project/scraping',
  nextTitle: 'Sedi Web Scraping'
};

var LouisRiel = function LouisRiel() {
  return __jsx(_HOC_pageLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    pageDetails: pageDetails,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "The Louis Riel House application is a volounteer project for the Louis Riel School in Calgary Alberta. The project is meant to be similar to the house system in the Harry Potter books. Teachers login to the application using their google account and are authenticated by google Oauth2. An admin user can grant or restrict site access to users by whitelisting email addresses or deleting accounts."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Once authenticated, teachers can award points to houses when a student of that house performs a note-worthy action such as answering a question correctly, performing well on a test, doing a good deed. Teachers can update / delete their awarded points while admin users can delete anyone's points"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "React, using the Context API, compose the front-end portion of this application. The Socket.IO client library is used so that viewers get a live update when house points are awarded. Higher Order Components are used for route handling when a user doesn't have sufficient priveleges."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Node.js, Express and MongoDB form the back end of this application. Middleware was used in this application to authenticate user Roles, while Google strategy with Passport.js was selected to verify and add users with emails that had been whiteListed."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "take a look at the source code HERE")));
};

/* harmony default export */ __webpack_exports__["default"] = (LouisRiel);

/***/ })

})
//# sourceMappingURL=louisRiel.js.755a60eedbe65ec55892.hot-update.js.map