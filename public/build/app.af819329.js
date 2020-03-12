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
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_navbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_anime_h1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/anime_h1 */ "./assets/js/components/anime_h1.js");
/* harmony import */ var _components_slideAnim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/slideAnim */ "./assets/js/components/slideAnim.js");
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



Object(_components_anime_h1__WEBPACK_IMPORTED_MODULE_3__["default"])();

Object(_components_slideAnim__WEBPACK_IMPORTED_MODULE_4__["default"])();

/***/ }),

/***/ "./assets/js/components/anime_h1.js":
/*!******************************************!*\
  !*** ./assets/js/components/anime_h1.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  anime.timeline({
    loop: true
  }).add({
    targets: '.ml15 .word',
    scale: [14, 1],
    opacity: [0, 1],
    easing: "easeOutCirc",
    duration: 5000,
    delay: function delay(el, i) {
      return 800 * i;
    }
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 100000
  });
});
;

/***/ }),

/***/ "./assets/js/components/navbar.js":
/*!****************************************!*\
  !*** ./assets/js/components/navbar.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/js/components/slideAnim.js":
/*!*******************************************!*\
  !*** ./assets/js/components/slideAnim.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  $(window).scroll(function () {
    $(".slideanim").each(function () {
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();

      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });
});

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvYW5pbWVfaDEuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvc2xpZGVBbmltLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJhbmltZUgxIiwic2xpZGVBbmltIiwiYW5pbWUiLCJ0aW1lbGluZSIsImxvb3AiLCJhZGQiLCJ0YXJnZXRzIiwic2NhbGUiLCJvcGFjaXR5IiwiZWFzaW5nIiwiZHVyYXRpb24iLCJkZWxheSIsImVsIiwiaSIsIiQiLCJ3aW5kb3ciLCJzY3JvbGwiLCJlYWNoIiwicG9zIiwib2Zmc2V0IiwidG9wIiwid2luVG9wIiwic2Nyb2xsVG9wIiwiYWRkQ2xhc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7O0FBT0E7Q0FHQTs7Q0FJQTs7QUFFQUEsbUJBQU8sQ0FBQyxnRUFBRCxDQUFQOztBQUVBO0FBRUE7QUFDQUMsb0VBQU87QUFFUDtBQUNBQyxxRUFBUyxHOzs7Ozs7Ozs7Ozs7QUN4QlQ7QUFBZSwyRUFBWTtBQUN2QkMsT0FBSyxDQUFDQyxRQUFOLENBQWU7QUFBQ0MsUUFBSSxFQUFFO0FBQVAsR0FBZixFQUNLQyxHQURMLENBQ1M7QUFDREMsV0FBTyxFQUFFLGFBRFI7QUFFREMsU0FBSyxFQUFFLENBQUMsRUFBRCxFQUFJLENBQUosQ0FGTjtBQUdEQyxXQUFPLEVBQUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUhSO0FBSURDLFVBQU0sRUFBRSxhQUpQO0FBS0RDLFlBQVEsRUFBRSxJQUxUO0FBTURDLFNBQUssRUFBRSxlQUFDQyxFQUFELEVBQUtDLENBQUw7QUFBQSxhQUFXLE1BQU1BLENBQWpCO0FBQUE7QUFOTixHQURULEVBUU9SLEdBUlAsQ0FRVztBQUNQQyxXQUFPLEVBQUUsT0FERjtBQUVQRSxXQUFPLEVBQUUsQ0FGRjtBQUdQRSxZQUFRLEVBQUUsSUFISDtBQUlQRCxVQUFNLEVBQUUsYUFKRDtBQUtQRSxTQUFLLEVBQUU7QUFMQSxHQVJYO0FBZUg7QUFBQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCRDtBQUFlLDJFQUFZO0FBQ3ZCRyxHQUFDLENBQUNDLE1BQUQsQ0FBRCxDQUFVQyxNQUFWLENBQWlCLFlBQVk7QUFDekJGLEtBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JHLElBQWhCLENBQXFCLFlBQVk7QUFDN0IsVUFBSUMsR0FBRyxHQUFHSixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFLLE1BQVIsR0FBaUJDLEdBQTNCO0FBRUEsVUFBSUMsTUFBTSxHQUFHUCxDQUFDLENBQUNDLE1BQUQsQ0FBRCxDQUFVTyxTQUFWLEVBQWI7O0FBQ0EsVUFBSUosR0FBRyxHQUFHRyxNQUFNLEdBQUcsR0FBbkIsRUFBd0I7QUFDcEJQLFNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVMsUUFBUixDQUFpQixPQUFqQjtBQUNIO0FBQ0osS0FQRDtBQVFILEdBVEQ7QUFVSCxDIiwiZmlsZSI6ImFwcC5hZjgxOTMyOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLnNjc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuLi9jc3MvYXBwLnNjc3MnO1xuXG4vLyBOZWVkIGpRdWVyeT8gSW5zdGFsbCBpdCB3aXRoIFwieWFybiBhZGQganF1ZXJ5XCIsIHRoZW4gdW5jb21tZW50IHRvIGltcG9ydCBpdC5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cblxuLy9pbXBvcnQgZ3JlZXQgZnJvbSAnLi9jb21wb25lbnRzL2dyZWV0JztcblxucmVxdWlyZSgnYm9vdHN0cmFwJyk7XG5cbmltcG9ydCAnLi9jb21wb25lbnRzL25hdmJhcic7XG5cbmltcG9ydCBhbmltZUgxIGZyb20gJy4vY29tcG9uZW50cy9hbmltZV9oMSc7XG5hbmltZUgxKCk7XG5cbmltcG9ydCBzbGlkZUFuaW0gZnJvbSAnLi9jb21wb25lbnRzL3NsaWRlQW5pbSc7XG5zbGlkZUFuaW0oKTtcblxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGFuaW1lLnRpbWVsaW5lKHtsb29wOiB0cnVlfSlcbiAgICAgICAgLmFkZCh7XG4gICAgICAgICAgICB0YXJnZXRzOiAnLm1sMTUgLndvcmQnLFxuICAgICAgICAgICAgc2NhbGU6IFsxNCwxXSxcbiAgICAgICAgICAgIG9wYWNpdHk6IFswLDFdLFxuICAgICAgICAgICAgZWFzaW5nOiBcImVhc2VPdXRDaXJjXCIsXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwMCxcbiAgICAgICAgICAgIGRlbGF5OiAoZWwsIGkpID0+IDgwMCAqIGlcbiAgICAgICAgfSkuYWRkKHtcbiAgICAgICAgdGFyZ2V0czogJy5tbDE1JyxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgIGVhc2luZzogXCJlYXNlT3V0RXhwb1wiLFxuICAgICAgICBkZWxheTogMTAwMDAwXG4gICAgfSk7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIi5zbGlkZWFuaW1cIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcG9zID0gJCh0aGlzKS5vZmZzZXQoKS50b3A7XG5cbiAgICAgICAgICAgIHZhciB3aW5Ub3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgICAgICBpZiAocG9zIDwgd2luVG9wICsgNjAwKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcInNsaWRlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9