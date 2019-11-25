webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/projects.js":
/*!********************************!*\
  !*** ./components/projects.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Projects = function Projects() {
  return __jsx("div", null, __jsx("div", {
    id: "current-projects",
    className: "section",
    "class": "center",
    style: {
      'textAlign': 'center'
    }
  }, __jsx("h1", {
    className: "title is-2"
  }, "Current Projects")), __jsx(Slider, null, content.map(function (article, index) {
    return __jsx("div", {
      key: index
    }, __jsx("h2", null, article.title), __jsx("div", null, article.description));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=index.js.c98b18f21ea55a56d78c.hot-update.js.map