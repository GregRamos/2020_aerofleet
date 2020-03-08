(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.scss":
/*!*****************************!*\
  !*** ./assets/css/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/app.scss */ "./assets/css/app.scss");
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_app_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar */ "./assets/js/components/navbar.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.scss in this case)
 // Need jQuery? Install it with "yarn add jquery", then uncomment to import it.

 //import greet from './components/greet';

__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");



/***/ }),

/***/ "./assets/js/components/navbar.js":
/*!****************************************!*\
  !*** ./assets/js/components/navbar.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".menu-icon").on("click", function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("nav ul").toggleClass("showing");
  });
}); // Scrolling Effect

jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on("scroll", function () {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop()) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('nav').addClass('black');
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('nav').removeClass('black');
  }
});

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbmF2YmFyLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIm9uIiwidG9nZ2xlQ2xhc3MiLCJ3aW5kb3ciLCJzY3JvbGxUb3AiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7OztBQU9BO0NBR0E7O0NBSUE7O0FBRUFBLG1CQUFPLENBQUMsZ0VBQUQsQ0FBUDs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQUE7QUFFQUMsNkNBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBVztBQUN6QkYsK0NBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JHLEVBQWhCLENBQW1CLE9BQW5CLEVBQTRCLFlBQVc7QUFDbkNILGlEQUFDLENBQUMsUUFBRCxDQUFELENBQVlJLFdBQVosQ0FBd0IsU0FBeEI7QUFDSCxHQUZEO0FBR0gsQ0FKRCxFLENBTUE7O0FBQ0FKLDZDQUFDLENBQUNLLE1BQUQsQ0FBRCxDQUFVRixFQUFWLENBQWEsUUFBYixFQUF1QixZQUFXO0FBQzlCLE1BQUdILDZDQUFDLENBQUNLLE1BQUQsQ0FBRCxDQUFVQyxTQUFWLEVBQUgsRUFBMEI7QUFDdEJOLGlEQUFDLENBQUMsS0FBRCxDQUFELENBQVNPLFFBQVQsQ0FBa0IsT0FBbEI7QUFDSCxHQUZELE1BSUs7QUFDRFAsaURBQUMsQ0FBQyxLQUFELENBQUQsQ0FBU1EsV0FBVCxDQUFxQixPQUFyQjtBQUNIO0FBQ0osQ0FSRCxFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLnNjc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuLi9jc3MvYXBwLnNjc3MnO1xuXG4vLyBOZWVkIGpRdWVyeT8gSW5zdGFsbCBpdCB3aXRoIFwieWFybiBhZGQganF1ZXJ5XCIsIHRoZW4gdW5jb21tZW50IHRvIGltcG9ydCBpdC5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cblxuLy9pbXBvcnQgZ3JlZXQgZnJvbSAnLi9jb21wb25lbnRzL2dyZWV0JztcblxucmVxdWlyZSgnYm9vdHN0cmFwJyk7XG5cbmltcG9ydCAnLi9jb21wb25lbnRzL25hdmJhcic7XG5cbiIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgJChcIi5tZW51LWljb25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJChcIm5hdiB1bFwiKS50b2dnbGVDbGFzcyhcInNob3dpbmdcIik7XG4gICAgfSk7XG59KTtcblxuLy8gU2Nyb2xsaW5nIEVmZmVjdFxuJCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsIGZ1bmN0aW9uKCkge1xuICAgIGlmKCQod2luZG93KS5zY3JvbGxUb3AoKSkge1xuICAgICAgICAkKCduYXYnKS5hZGRDbGFzcygnYmxhY2snKTtcbiAgICB9XG5cbiAgICBlbHNlIHtcbiAgICAgICAgJCgnbmF2JykucmVtb3ZlQ2xhc3MoJ2JsYWNrJyk7XG4gICAgfVxufSkiXSwic291cmNlUm9vdCI6IiJ9