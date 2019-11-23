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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/about.js":
/*!*****************************!*\
  !*** ./components/about.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const About = () => __jsx("div", {
  id: "current-projects",
  style: {
    'textAlign': 'center'
  },
  className: "jsx-132139745" + " " + "section"
}, __jsx("h1", {
  className: "jsx-132139745" + " " + "title is-1"
}, " Hey, I'm Gil \uD83D\uDC4B\uD83C\uDFFE "), __jsx("p", {
  className: "jsx-132139745"
}, "During the day I assist companies in transforming various data point relationships into meaningful strategy for fueling their digital campaigns. I started my career at BLUE KABOOM as an Inbound Marketing Consultant and KROGER as a digital experience associate. I moved to Chicago to go back to school and while I learn, I also work on helping companies win their digital goals. Outside of work, I capture joy and comraderie through my Instagram games and inspirational posts. I am a part-time snacktivist, full time grad student, and on the weekends I mix podcasts and remix hip-hop/house songs."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "132139745"
}, ".elevator.jsx-132139745{text-align:center;}h1.jsx-132139745{text-align:center;}p.jsx-132139745{margin-bottom:10px;font-weight:bold;font-size:20px;border-radius:50%;padding-top:0.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvcG9ydGZvbGlvLXNpdGUvY29tcG9uZW50cy9hYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhZ0IsQUFHNkIsQUFHQSxBQUdBLGtCQUxwQixBQUdBLENBR21CLGlCQUNGLGVBQ0csa0JBQ0MsbUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvcG9ydGZvbGlvLXNpdGUvY29tcG9uZW50cy9hYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFib3V0ID0gKCkgPT4gKFxuICAgIDxkaXYgaWQ9XCJjdXJyZW50LXByb2plY3RzXCIgY2xhc3NOYW1lPVwic2VjdGlvblwiIHN0eWxlPXt7J3RleHRBbGlnbic6ICdjZW50ZXInfX0+XG4gICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIGlzLTFcIj4gSGV5LCBJJ20gR2lsIPCfkYvwn4++IDwvaDE+XG4gICAgPHA+XG4gICAgICAgIER1cmluZyB0aGUgZGF5IEkgYXNzaXN0IGNvbXBhbmllcyBpbiB0cmFuc2Zvcm1pbmcgdmFyaW91cyBkYXRhIHBvaW50IHJlbGF0aW9uc2hpcHNcbiAgICAgaW50byBtZWFuaW5nZnVsIHN0cmF0ZWd5IGZvciBmdWVsaW5nIHRoZWlyIGRpZ2l0YWwgY2FtcGFpZ25zLiBJIHN0YXJ0ZWQgbXkgY2FyZWVyIFxuICAgICBhdCBCTFVFIEtBQk9PTSBhcyBhbiBJbmJvdW5kIE1hcmtldGluZyBDb25zdWx0YW50IGFuZCBLUk9HRVIgYXMgYSBkaWdpdGFsIGV4cGVyaWVuY2VcbiAgICAgYXNzb2NpYXRlLiBJIG1vdmVkIHRvIENoaWNhZ28gdG8gZ28gYmFjayB0byBzY2hvb2wgYW5kIHdoaWxlIEkgbGVhcm4sIEkgYWxzbyB3b3JrIG9uIFxuICAgICBoZWxwaW5nIGNvbXBhbmllcyB3aW4gdGhlaXIgZGlnaXRhbCBnb2Fscy4gT3V0c2lkZSBvZiB3b3JrLCBJIGNhcHR1cmUgam95IGFuZCBjb21yYWRlcmllIFxuICAgICB0aHJvdWdoIG15IEluc3RhZ3JhbSBnYW1lcyBhbmQgaW5zcGlyYXRpb25hbCBwb3N0cy4gSSBhbSBhIHBhcnQtdGltZSBzbmFja3RpdmlzdCwgXG4gICAgIGZ1bGwgdGltZSBncmFkIHN0dWRlbnQsIGFuZCBvbiB0aGUgd2Vla2VuZHMgSSBtaXggcG9kY2FzdHMgYW5kIHJlbWl4IGhpcC1ob3AvaG91c2Ugc29uZ3MuIFxuXG4gICAgPC9wPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmVsZXZhdG9yIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaDF7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206MTBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT48L2Rpdj5cbiAgICBcbilcbmV4cG9ydCBkZWZhdWx0IEFib3V0Il19 */\n/*@ sourceURL=/Users/gilbertking/src/portfolio-site/components/about.js */"));

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./components/description.js":
/*!***********************************!*\
  !*** ./components/description.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Description = () => __jsx("div", {
  style: {
    'backgroundColor': '#282828'
  },
  className: "jsx-3719204321" + " " + "section"
}, __jsx("div", {
  className: "jsx-3719204321" + " " + "elevator columns"
}, __jsx("div", {
  className: "jsx-3719204321" + " " + "column is-6 is-offset-3"
}, __jsx("h3", {
  className: "jsx-3719204321" + " " + "title is-4"
}, "CREATOR | COLLABORATOR  | COMMUNITY BUILDER "))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3719204321"
}, ".elevator.jsx-3719204321{text-align:center;color:white;}.title.jsx-3719204321{color:white;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvcG9ydGZvbGlvLXNpdGUvY29tcG9uZW50cy9kZXNjcmlwdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPa0IsQUFHNkIsQUFJTixZQUNLLE1BSkwsV0FLZCxDQUpBIiwiZmlsZSI6Ii9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvcG9ydGZvbGlvLXNpdGUvY29tcG9uZW50cy9kZXNjcmlwdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IERlc2NyaXB0aW9uID0gKCkgPT4gKFxuICAgIDxkaXYgc3R5bGU9e3sgJ2JhY2tncm91bmRDb2xvcic6ICcjMjgyODI4JyB9fSBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZXZhdG9yIGNvbHVtbnNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtNiBpcy1vZmZzZXQtM1wiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZSBpcy00XCI+Q1JFQVRPUiB8IENPTExBQk9SQVRPUiAgfCBDT01NVU5JVFkgQlVJTERFUiA8L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuZWxldmF0b3Ige1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgRGVzY3JpcHRpb24iXX0= */\n/*@ sourceURL=/Users/gilbertking/src/portfolio-site/components/description.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Description);

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Footer = () => __jsx("div", {
  id: "footer",
  style: {
    'textAlign': 'center'
  },
  className: "jsx-2675038479" + " " + "section"
}, __jsx("div", {
  className: "jsx-2675038479" + " " + "columns"
}, __jsx("div", {
  className: "jsx-2675038479" + " " + "column"
}, __jsx("a", {
  href: "https://www.twitter.com/_gilbproducing",
  target: "_blank",
  className: "jsx-2675038479"
}, __jsx("img", {
  src: "/static/twitter.png",
  alt: "",
  className: "jsx-2675038479"
})), __jsx("a", {
  href: "https://www.linkedin.com/in/gilbertking/",
  target: "_blank",
  className: "jsx-2675038479"
}, __jsx("img", {
  src: "/static/linkedin.png",
  alt: "",
  className: "jsx-2675038479"
})))), __jsx("p", {
  className: "jsx-2675038479"
}, "Copyright 2017 \xA9 All Rights Reserved by ", __jsx("a", {
  href: "#",
  className: "jsx-2675038479"
}, "gilbproducing")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2675038479"
}, "#footer.jsx-2675038479{background-color:#282828;color:white;height:160px;}.title.jsx-2675038479{color:white;}a.jsx-2675038479{color:white;}columns.jsx-2675038479{margin-left:1rem;margin-right:1rem;text-align:center;}img.jsx-2675038479{height:35px;width:35px;padding:5px;border-radius:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvcG9ydGZvbGlvLXNpdGUvY29tcG9uZW50cy9mb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV2tCLEFBR29DLEFBS2IsQUFHRCxBQUdNLEFBS0wsWUFWZCxBQUdBLEFBUWMsS0FMTSxNQU1OLEVBakJBLFVBWU0sQUFNQSxFQWpCTCxhQUNmLEdBV0EsQUFNQSIsImZpbGUiOiIvVXNlcnMvZ2lsYmVydGtpbmcvc3JjL3BvcnRmb2xpby1zaXRlL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuICAgIDxkaXYgaWQ9XCJmb290ZXJcIiBjbGFzc05hbWU9XCJzZWN0aW9uXCIgc3R5bGU9e3sndGV4dEFsaWduJzogJ2NlbnRlcid9fT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy50d2l0dGVyLmNvbS9fZ2lsYnByb2R1Y2luZ1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgIDxpbWcgc3JjPVwiL3N0YXRpYy90d2l0dGVyLnBuZ1wiIGFsdD1cIlwiIC8+PC9hPlxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZ2lsYmVydGtpbmcvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgPGltZyBzcmM9XCIvc3RhdGljL2xpbmtlZGluLnBuZ1wiIGFsdD1cIlwiIC8+PC9hPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgICAgPHA+Q29weXJpZ2h0IDIwMTcgJmNvcHk7IEFsbCBSaWdodHMgUmVzZXJ2ZWQgYnkgPGEgaHJlZj1cIiNcIj5naWxicHJvZHVjaW5nPC9hPjwvcD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgI2Zvb3RlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgaGVpZ2h0OiAxNjBweDtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICBjb2x1bW5ze1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgd2lkdGg6ICAzNXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgRm9vdGVyIl19 */\n/*@ sourceURL=/Users/gilbertking/src/portfolio-site/components/footer.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const linkStyle = {
  marginRight: 15
};

const Header = () => __jsx("div", {
  className: "jsx-2526200270"
}, __jsx("div", {
  className: "jsx-2526200270" + " " + "header section"
}, __jsx("img", {
  src: "/static/gilb3.jpg",
  alt: "",
  width: "15",
  height: "55",
  className: "jsx-2526200270" + " " + "logo"
})), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2526200270"
}, ".logo.jsx-2526200270{margin-bottom:5px;}.title.jsx-2526200270{font-weight:bold;color:#282828;}.header.jsx-2526200270{text-align:center;background-color:white;color:black;padding-right:.5rem;padding-top:.5rem;padding-bottom:.5rem;}img.jsx-2526200270{height:350px;width:350px;margin-bottom:5px;border-radius:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvcG9ydGZvbGlvLXNpdGUvY29tcG9uZW50cy9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWWdCLEFBRzJCLEFBR0QsQUFJQyxBQVFQLGFBQ0EsSUFaRyxDQUhoQixBQU95QixPQVNSLE1BWmpCLFVBSWMsRUFTSSxVQVJJLFFBU3RCLFlBUm9CLGtCQUNHLHFCQUN2QiIsImZpbGUiOiIvVXNlcnMvZ2lsYmVydGtpbmcvc3JjL3BvcnRmb2xpby1zaXRlL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBsaW5rU3R5bGUgPSB7XG4gIG1hcmdpblJpZ2h0OiAxNVxufVxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXIgc2VjdGlvblwiPlxuICAgICAgey8qICovfVxuICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPVwiL3N0YXRpYy9naWxiMy5qcGdcIiBhbHQ9XCJcIiB3aWR0aD1cIjE1XCIgaGVpZ2h0PVwiNTVcIi8+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxvZ28ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICB9XG4gICAgICAudGl0bGUge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6ICMyODI4Mjg7XG4gICAgICB9XG4gICAgICAuaGVhZGVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcbiAgICAgICAgcGFkZGluZy10b3A6IC41cmVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XG4gICAgICB9XG4gICAgICBpbWcgeyBcbiAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICB3aWR0aDogIDM1MHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTo1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuXG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiXX0= */\n/*@ sourceURL=/Users/gilbertking/src/portfolio-site/components/header.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_typekit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-typekit */ "react-typekit");
/* harmony import */ var react_typekit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_typekit__WEBPACK_IMPORTED_MODULE_3__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Layout = ({
  children
}) => __jsx("div", {
  className: "jsx-2869033619"
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", {
  className: "jsx-2869033619"
}, 'Gil B.'), __jsx("meta", {
  charSet: "utf-8",
  className: "jsx-2869033619"
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.3/css/bulma.css",
  className: "jsx-2869033619"
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap/0.32.4/react-bootstrap.min.js",
  className: "jsx-2869033619"
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
  className: "jsx-2869033619"
}), __jsx(react_typekit__WEBPACK_IMPORTED_MODULE_3___default.a, {
  kitId: "gzc7xiy"
}), __jsx("meta", {
  name: "viewport",
  content: "initial-scale=1.0, width=device-width",
  className: "jsx-2869033619"
})), children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2869033619"
}, "body{font-family:\"franklin-gothic-urw\";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvcG9ydGZvbGlvLXNpdGUvY29tcG9uZW50cy9sYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZXVCLEFBRzJDLGtDQUNwQyIsImZpbGUiOiIvVXNlcnMvZ2lsYmVydGtpbmcvc3JjL3BvcnRmb2xpby1zaXRlL2NvbXBvbmVudHMvbGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFR5cGVraXQgZnJvbSAncmVhY3QtdHlwZWtpdCc7XG5cbmNvbnN0IExheW91dCA9ICh7Y2hpbGRyZW59KSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+eydHaWwgQi4nfTwvdGl0bGU+XG4gICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYnVsbWEvMC40LjMvY3NzL2J1bG1hLmNzc1wiIC8+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3JlYWN0LWJvb3RzdHJhcC8wLjMyLjQvcmVhY3QtYm9vdHN0cmFwLm1pbi5qc1wiLz5cbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIgLz5cbiAgICAgIDxUeXBla2l0IGtpdElkPVwiZ3pjN3hpeVwiIC8+XG4gICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cbiAgICA8L0hlYWQ+XG4gICAgeyBjaGlsZHJlbiB9XG4gICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgIGJvZHkge1xuICAgICAgICBmb250LWZhbWlseTogXCJmcmFua2xpbi1nb3RoaWMtdXJ3XCI7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0Il19 */\n/*@ sourceURL=/Users/gilbertking/src/portfolio-site/components/layout.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Navbar = props => __jsx("div", {
  className: "navbar"
}, __jsx("nav", {
  className: "navbar-menu"
}, __jsx("div", {
  className: "navbar-start"
}, __jsx("a", {
  className: "navbar-item",
  href: "#current-projects"
}, "Current Projects")), __jsx("div", {
  className: "navbar-end"
}, __jsx("a", {
  className: "navbar-item",
  href: "https://twitter.com/_gilbproducing",
  target: "_blank"
}, "Twitter")), __jsx("div", {
  className: "navbar-item"
}, __jsx("div", {
  className: "field is-separated"
}, __jsx("p", {
  className: "control"
}, __jsx("a", {
  className: "button is-white",
  href: "https://www.linkedin.com/in/gilbertking/"
}, __jsx("span", null, "Linkedin"))))), __jsx("div", {
  className: "navbar-item"
}, __jsx("div", {
  className: "field is-grouped"
}, __jsx("p", {
  className: "control"
})))), __jsx("style", {
  jsx: "true"
}, `
          {
              .elevator {
                text-align: center;
              }
              #twitter {
                  color: #55acee;
                  border-color: #55acee;
              }
              #twitter:hover {
                  background: #55acee;
                  border-color: #55acee;
                  color: white;
              }
              .navbar {
                { background-color: #f36d21; }
              }
              .navbar-item {
                { color: white;
                font-weight: bold;
              }
              img {
                height: 250px;
                border-radius: 50%;
              }
          }
        `));

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/projects.js":
/*!********************************!*\
  !*** ./components/projects.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const CurrentProjects = () => __jsx("div", {
  className: "jsx-3344845484"
}, __jsx("div", {
  id: "current-projects",
  style: {
    'textAlign': 'center'
  },
  className: "jsx-3344845484" + " " + "section"
}, __jsx("h1", {
  className: "jsx-3344845484" + " " + "title is-2"
}, "Current Projects")), __jsx("div", {
  className: "jsx-3344845484" + " " + "columns"
}, __jsx("div", {
  className: "jsx-3344845484" + " " + "column"
}, __jsx("img", {
  src: "/static/syspod.png",
  alt: "",
  target: "_blank",
  className: "jsx-3344845484"
}), __jsx("h3", {
  className: "jsx-3344845484" + " " + "title is-3"
}, "Shoot Your Shot Podcast"), __jsx("p", {
  className: "jsx-3344845484"
}, "Hey, we\u2019re all here to grow our networks, relax, vibe and get productive. We will be having weekly discussions centered around growing comfortability in expressing our ideas and becoming tighter knit in the process. Plain and simple! ")), __jsx("div", {
  className: "jsx-3344845484" + " " + "column"
}, __jsx("img", {
  src: "/static/gilbproducing.jpg",
  alt: "",
  target: "_blank",
  className: "jsx-3344845484"
}), __jsx("h3", {
  className: "jsx-3344845484" + " " + "title is-3"
}, "Foxworth Consulting"), __jsx("p", {
  className: "jsx-3344845484"
}, "There is no commitment necessary. Everybody is dealing with enough priority overload already. We should flow, and that\u2019s just how it goes. Fox will eventually tell thew world what he wants to do and when that's decided it will be here."))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3344845484"
}, "#current-projects.jsx-3344845484{text-align:center;background-color:white;padding-top:0.5rem;}img.jsx-3344845484{height:250px;width:250px;margin-bottom:10px;margin-left:175px;border-radius:50%;text-align:center;}.elevator.jsx-3344845484{text-align:center;}.title.jsx-3344845484{font-weight:bold;text-align:center;}.p.jsx-3344845484{margin-left:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvcG9ydGZvbGlvLXNpdGUvY29tcG9uZW50cy9wcm9qZWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQmtCLEFBRzZCLEFBS0wsQUFTSyxBQUdELEFBSUEsYUFmSixJQVlLLEFBSXBCLENBckJ5QixBQWN6QixPQVJvQixVQVlwQixNQWpCcUIsR0FNRCxnQkFMcEIsRUFNb0Isa0JBQ0Esa0JBRXBCIiwiZmlsZSI6Ii9Vc2Vycy9naWxiZXJ0a2luZy9zcmMvcG9ydGZvbGlvLXNpdGUvY29tcG9uZW50cy9wcm9qZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEN1cnJlbnRQcm9qZWN0cyA9ICgpID0+IChcbiAgICA8ZGl2PlxuICAgIDxkaXYgaWQ9XCJjdXJyZW50LXByb2plY3RzXCIgY2xhc3NOYW1lPVwic2VjdGlvblwiIHN0eWxlPXt7J3RleHRBbGlnbic6ICdjZW50ZXInfX0+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUgaXMtMlwiPkN1cnJlbnQgUHJvamVjdHM8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9zeXNwb2QucG5nXCIgYWx0PVwiXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PC9pbWc+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIGlzLTNcIj5TaG9vdCBZb3VyIFNob3QgUG9kY2FzdDwvaDM+XG4gICAgICAgICAgPHA+SGV5LCB3ZeKAmXJlIGFsbCBoZXJlIHRvIGdyb3cgb3VyIG5ldHdvcmtzLCByZWxheCwgdmliZSBhbmQgZ2V0IHByb2R1Y3RpdmUuIFdlIHdpbGwgYmUgaGF2aW5nIHdlZWtseSBkaXNjdXNzaW9ucyBjZW50ZXJlZCBhcm91bmQgZ3Jvd2luZyBjb21mb3J0YWJpbGl0eSBcbiAgICAgICAgICAgIGluIGV4cHJlc3Npbmcgb3VyIGlkZWFzIGFuZCBiZWNvbWluZyB0aWdodGVyIGtuaXQgaW4gdGhlIHByb2Nlc3MuIFBsYWluIGFuZCBzaW1wbGUhIDwvcD5cbiAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2dpbGJwcm9kdWNpbmcuanBnXCIgYWx0PVwiXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PC9pbWc+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIGlzLTNcIj5Gb3h3b3J0aCBDb25zdWx0aW5nPC9oMz5cbiAgICAgICAgICA8cD5UaGVyZSBpcyBubyBjb21taXRtZW50IG5lY2Vzc2FyeS4gRXZlcnlib2R5IGlzIGRlYWxpbmcgd2l0aCBlbm91Z2ggcHJpb3JpdHkgb3ZlcmxvYWQgYWxyZWFkeS4gV2Ugc2hvdWxkIGZsb3csIGFuZCB0aGF04oCZcyBqdXN0IGhvdyBpdCBnb2VzLiBGb3ggXG4gICAgICAgICAgICB3aWxsIGV2ZW50dWFsbHkgdGVsbCB0aGV3IHdvcmxkIHdoYXQgaGUgd2FudHMgdG8gZG8gYW5kIHdoZW4gdGhhdCdzIGRlY2lkZWQgaXQgd2lsbCBiZSBoZXJlLiBcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICNjdXJyZW50LXByb2plY3RzIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBpbWcge1xuICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgICAgd2lkdGg6ICAyNTBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOjEwcHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE3NXB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgfVxuICAgICAgICAuZWxldmF0b3Ige1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAucCB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+ICAgIFxuICApXG4gIFxuICBleHBvcnQgZGVmYXVsdCBDdXJyZW50UHJvamVjdHMiXX0= */\n/*@ sourceURL=/Users/gilbertking/src/portfolio-site/components/projects.js */"));

/* harmony default export */ __webpack_exports__["default"] = (CurrentProjects);

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

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

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
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

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

      const cb = listeners.get(entry.target);

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

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

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
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
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

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
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
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

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

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

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
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

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
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
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


const createRouter = function createRouter() {
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
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
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

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouteWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
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


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

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

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

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


      if (e.state.options && e.state.options.fromExternal) {
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
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

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

    const newData = _Object$assign({}, data, {
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
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
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
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');
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
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
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

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
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
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
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

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR) {
      let status;
      const {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      props = await fetch(`/_next/data${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
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

Router.events = mitt_1.default();
exports.default = Router;

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


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

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

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
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
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
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
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
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

async function loadGetInitialProps(Component, ctx) {
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/about */ "./components/about.js");
/* harmony import */ var _components_projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/projects */ "./components/projects.js");
/* harmony import */ var _components_description__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/description */ "./components/description.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import SubmitForm from '../components/form'
// import Socials from '../components/socials'






/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, __jsx(_components_navbar__WEBPACK_IMPORTED_MODULE_7__["default"], null), __jsx(_components_header__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_components_about__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_components_description__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(_components_projects__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_6__["default"], null)));

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gilbertking/src/portfolio-site/pages/index.js */"./pages/index.js");


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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ "react-typekit":
/*!********************************!*\
  !*** external "react-typekit" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-typekit");

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