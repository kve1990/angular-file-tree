function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-node [listItems]=\"listItems\" [root]=\"true\"></app-node>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/node/node.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/node/node.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNodeNodeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ul [class.tree]=\"root\">\n    <li *ngFor=\"let item of listItems\">\n        <input *ngIf=\"item.type === 'folder'\" type=\"checkbox\">\n        <span [class]=\"item.type\">\n            {{item.name}}\n            <span class=\"count\" *ngIf=\"item.type === 'folder' && item.children\"> ({{countFiles(item.children)}})</span>\n        </span>\n        <app-node *ngIf=\"item.type === 'folder'\" [listItems]=\"item.children || []\"></app-node>\n    </li>\n</ul>";
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _assets_files_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../assets/files/data.json */
    "./src/assets/files/data.json");

    var _assets_files_data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../assets/files/data.json */
    "./src/assets/files/data.json", 1);

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.listItems = _assets_files_data_json__WEBPACK_IMPORTED_MODULE_2__.tree || [];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _node_node_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./node/node.component */
    "./src/app/node/node.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _node_node_component__WEBPACK_IMPORTED_MODULE_7__["NodeComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"].withServerTransition({
        appId: 'app-root'
      }), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production
      }), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/node/node.component.scss":
  /*!******************************************!*\
    !*** ./src/app/node/node.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppNodeNodeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ul {\n  display: inline-block;\n  float: left;\n  clear: left;\n  margin: 0.25rem;\n  padding: 0;\n}\nul.tree {\n  position: relative;\n}\nul.tree:before {\n  left: 0.5rem;\n}\nul.tree:after {\n  display: none;\n}\nul app-node:before {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  top: 0.25rem;\n  right: auto;\n  bottom: 0;\n  left: 1.75rem;\n  margin: auto;\n  border-right: dotted black 0.1rem;\n  width: 0;\n  height: auto;\n}\nul app-node:after {\n  content: \"-\";\n  position: absolute;\n  z-index: 3;\n  top: 0;\n  left: -0.5rem;\n  margin: 0.65rem;\n  padding: 0;\n  width: 0.8rem;\n  height: 0.8rem;\n  text-align: center;\n  line-height: 0.85rem;\n  font-size: 1rem;\n  background: white;\n  color: black;\n  border: solid gray 1px;\n  border-radius: 0.1rem;\n}\nul > li {\n  display: block;\n  position: relative;\n  float: left;\n  clear: both;\n  right: auto;\n  padding-left: 1rem;\n  width: auto;\n  text-align: center;\n  color: white;\n  background: transparent;\n}\nul > li:last-child:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  z-index: 2;\n  top: 1rem;\n  left: 0;\n  bottom: -0.25rem;\n  width: 0.75rem;\n  height: auto;\n  background: white;\n}\nul > li > input {\n  display: block;\n  position: absolute;\n  float: left;\n  z-index: 4;\n  margin: 0 0 0 -1rem;\n  padding: 0;\n  width: 1rem;\n  height: 2rem;\n  font-size: 1rem;\n  opacity: 0;\n  cursor: pointer;\n}\nul > li > input:checked ~ app-node:before {\n  display: none;\n}\nul > li > input:checked ~ app-node:after {\n  content: \"+\";\n}\nul > li > input:checked ~ app-node * {\n  display: none;\n}\nul > li > input:checked ~ span.folder:before {\n  background-image: url(\"data:image/vnd.microsoft.icon;base64,AAABAAEAEBAAAAAAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAAAAD///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8BAAAABwAAABcAAAAbAAAAGwAAABsAAAAbAAAAGwAAABsAAAAbAAAAGwAAABsAAAAbAAAAGwAAABsAAAAXAAAABwNMcIsDZJS3A2SUtwNklLcDZJS3A2SUtwNklLcDZJS3A2SUtwNklLcDZJS3A2SUtwNklLcDZJS3A2SUtwNMcIsDbqSphs/w/4LL7f+Cy+3/gsvt/4LL7f+Cy+3/gsvt/4LL7f+Cy+3/gsvt/4LL7f+Cy+3/gsvt/4bP8P8DbqSpA3i0m4bP7v99yOj/fcjo/33I6P99yOj/fcjo/33I6P99yOj/fcjo/33I6P99yOj/fcjo/33I6P+Gz+7/A3i0mwJ8uZeK0/D/gszr/4LM6/+CzOv/gszr/4LM6/+CzOv/gszr/4LM6/+CzOv/gszr/4LM6/+CzOv/itPw/wJ8uZcCf76Tj9fy/4fQ7f+H0O3/h9Dt/4fQ7f+H0O3/h9Dt/4fQ7f+H0O3/h9Dt/4fQ7f+H0O3/h9Dt/4/X8v8Cf76TAoLCj5Tb9P+N1fD/jdXw/43V8P+N1fD/jdXw/43V8P+N1fD/jdXw/43V8P+N1fD/jdXw/43V8P+U2/T/AoLCjwKFx4uZ4Pb/ktrz/5La8/+S2vP/ktrz/5La8/+S2vP/ktrz/5La8/+S2vP/ktrz/5La8/+S2vP/meD2/wKFx4sCiMuHn+X5/5jf9v+Y3/b/mN/2/5jf9v+Y3/b/mN/2/5jf9v+Y3/b/mN/2/5jf9v+Y3/b/mN/2/5/l+f8CiMuHAorPg6Pp+/+d4/n/neP5/53j+f+d4/n/neP5/53j+f+j6fr/o+n6/6Pp+v+j6fr/o+n6/6Pp+v+m7Pv/AorPgwKN0oGo7f3/ouf7/6Ln+/+i5/v/ouf7/6Ln+/+r8P3/jNDt/4HF5/+Bxef/gcXn/4HF5/+Bxef/gcXn/wKN0oECj9Z9rvP//6vw/v+r8P7/q/D+/6vw/v+u8///j9Pv/4/T7/+r8P7/q/D+/6vw/v+r8P7/q/D+/67z//8Cj9Z9ApHZXQKR2XsCkdl7ApHZewKR2XsCkdl7ApHZewKR2Xv+/v3/+Pjz//Dw5v/p6dv//slB//S2Lv8Ckdl7ApHZXf///wH///8B////Af///wH///8B////Af///wECktsrApLbeQKS23kCktt5ApLbeQKS23kCktt5ApLbK////wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8BAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//w==\");\n}\nul > li > span {\n  display: block;\n  position: relative;\n  float: left;\n  z-index: 3;\n  margin: 0.25rem;\n  padding: 0.25rem;\n  border-radius: 0.25rem;\n  color: black;\n  background: white;\n}\nul > li > span.folder:before {\n  content: \"\";\n  display: inline-block;\n  margin: 0 0.25rem 0 0;\n  width: 1rem;\n  height: 1rem;\n  line-height: 1rem;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background: url(\"data:image/vnd.microsoft.icon;base64,AAABAAEAEBAAAAAAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAAAAD///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8BAAAABwAAABcAAAAbAAAAGwAAABsAAAAbAAAAGwAAABsAAAAbAAAAGwAAABsAAAAbAAAAGwAAABcAAAAPAAAACQNMcIsDZJS3A2SUtwNklLcDZJS3A2SUtwNklLcDZJS3A2SUtwNklLcDZJS3A2SUtwNklLcDTHCTAAAAHwAAABEDbqSpb8Hn/4bQ7/+Fz+7/hc/u/4XP7v+Fz+7/hc/u/4XP7v+Fz+7/hc/u/4XP7v+H0PD/OpfDyQJcikX///8BA3i0m1e13/+N1vH/h9Hu/4fR7v+H0e7/h9Hu/4fR7v+H0e7/h9Hu/4fR7v+H0e7/iNHu/3jJ6e0CgL97////AQJ8uZdGrdz/l9/2/5Tb9P+U2/T/lNv0/5Tb9P+U2/T/lNv0/5Tb9P+U2/T/lNv0/5Tb9P+b4fj/JpvTnQKGyCMCf76TYL7n/4XX8v+h5vr/oOX6/6Dl+v+g5fr/oOX6/6Lo+v+l6vv/per7/6Xq+/+l6vv/puz7/2vJ68kCis9VAoLCj33P8P9px+z/r/P//63x/v+t8f7/rfH+/63x/v+Y5fj/SbLj/0my4/9JsuP/Tbbl/wKKz8UCjtZ9Ao7WfQKFx4uW3vb/Trjn/0645/9OuOf/Trjn/0645/9OuOf/Trjn/4HR8P+S2vP/ktrz/5ng9v8ChceL////Af///wECiMuHn+X5/5jf9v+Y3/b/mN/2/5jf9v+Y3/b/mN/2/5jf9v+Y3/b/mN/2/5jf9v+f5fn/AojLh////wH///8BAorPg6Pp+/+d4/n/neP5/53j+f+d4/n/neP5/53j+f+d4/n/neP5/53j+f+d4/n/o+n7/wKKz4P///8B////AQKN0oGo7f3/ouf7/6Ln+/+i5/v/ouf7/6Ln+/+i5/v/ouf7/6Ln+/+i5/v/ouf7/6jt/f8CjdKB////Af///wECj9Z9rvP//6vw/v+r8P7/q/D+/6vw/v+r8P7/q/D+/6vw/v+r8P7/q/D+/6vw/v+u8///Ao/Wff///wH///8BApHZXQKR2XsCkdl7ApHZewKR2XsCkdl7ApHZe/7+/f/19e7/6+vd//7JQf/0ti7/ApHZewKR2V3///8B////Af///wH///8B////Af///wH///8B////AQKS2ysCktt5ApLbeQKS23kCktt5ApLbeQKS2yv///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8BAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//w==\");\n}\nul > li > span:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: -0.9rem;\n  top: -0.5rem;\n  bottom: 0;\n  margin: auto 0.25rem auto 0.25rem;\n  border-top: dotted black 0.1rem;\n  width: 0.75rem;\n  height: 0;\n}\n.count {\n  font-size: 0.8rem;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YWxlcml5L1Byb2plY3RzL2ZpbGUtc3lzdGVtLWFuZ3VsYXIvc3JjL2FwcC9ub2RlL25vZGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25vZGUvbm9kZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDRCxlQUFBO0VBQ0EsVUFBQTtBQ0FEO0FERUU7RUFDRSxrQkFBQTtBQ0FKO0FEQ0k7RUFBVyxZQUFBO0FDRWY7QURESTtFQUFVLGFBQUE7QUNJZDtBREZFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxRQUFBO0VBQVUsWUFBQTtBQ0tkO0FESEU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUFPLGFBQUE7RUFDUCxlQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FDTUo7QURIRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDS0o7QURISTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNLTjtBREZJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUFvQixVQUFBO0VBQ3BCLFdBQUE7RUFBWSxZQUFBO0VBQ1osZUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDTU47QURKTTtFQUEyQixhQUFBO0FDT2pDO0FETk07RUFBMEIsWUFBQTtBQ1NoQztBRFJNO0VBQXVCLGFBQUE7QUNXN0I7QURWTTtFQUNFLDhqREFBQTtBQ1lSO0FEUkk7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDVU47QURSTTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3akRBQUE7QUNVUjtBRFJNO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQ1VSO0FESkE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FDT0YiLCJmaWxlIjoic3JjL2FwcC9ub2RlL25vZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbnVse1xuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNsZWFyOiBsZWZ0O1xuXHRtYXJnaW46LjI1cmVtO1xuXHRwYWRkaW5nOjA7XG4gIFxuICAmLnRyZWV7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICY6YmVmb3JlIHsgbGVmdDouNXJlbTsgfVxuICAgICY6YWZ0ZXIgeyBkaXNwbGF5OiBub25lO31cbiAgfVxuICBhcHAtbm9kZTpiZWZvcmV7XG4gICAgY29udGVudDpcIlwiOyBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgIHotaW5kZXg6IDE7XG4gICAgdG9wOi4yNXJlbTsgXG4gICAgcmlnaHQ6YXV0bzsgXG4gICAgYm90dG9tOjA7IFxuICAgIGxlZnQ6IDEuNzVyZW07IFxuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3JkZXItcmlnaHQ6IGRvdHRlZCBibGFjayAuMXJlbTtcbiAgICB3aWR0aDogMDsgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIGFwcC1ub2RlOmFmdGVye1xuICAgIGNvbnRlbnQ6IFwiLVwiOyBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgIHotaW5kZXg6IDM7XG4gICAgdG9wOjA7IGxlZnQ6LS41cmVtO1xuICAgIG1hcmdpbjouNjVyZW07IFxuICAgIHBhZGRpbmc6MDtcbiAgICB3aWR0aDouOHJlbTsgXG4gICAgaGVpZ2h0OiAuOHJlbTsgXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7IFxuICAgIGxpbmUtaGVpZ2h0OiAuODVyZW07IFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyOnNvbGlkIGdyYXkgMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IC4xcmVtO1xuICB9XG5cbiAgJiA+IGxpe1xuICAgIGRpc3BsYXk6IGJsb2NrOyBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICAgIGZsb2F0OiBsZWZ0OyBcbiAgICBjbGVhcjogYm90aDtcbiAgICByaWdodDphdXRvO1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICB3aWR0aDphdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgY29sb3I6d2hpdGU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgICAmOmxhc3QtY2hpbGQ6YmVmb3Jle1xuICAgICAgY29udGVudDogXCJcIjsgXG4gICAgICBkaXNwbGF5OiBibG9jazsgXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgei1pbmRleDogMjtcbiAgICAgIHRvcDoxcmVtOyBcbiAgICAgIGxlZnQ6MDsgXG4gICAgICBib3R0b206LS4yNXJlbTtcbiAgICAgIHdpZHRoOi43NXJlbTsgXG4gICAgICBoZWlnaHQ6YXV0bztcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIH1cblxuICAgICYgPiBpbnB1dHtcbiAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgei1pbmRleDogNDtcbiAgICAgIG1hcmdpbjowIDAgMCAtMXJlbTsgcGFkZGluZzowO1xuICAgICAgd2lkdGg6MXJlbTsgaGVpZ2h0OiAycmVtO1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgJjpjaGVja2VkfmFwcC1ub2RlOmJlZm9yZXsgZGlzcGxheTogbm9uZTt9XG4gICAgICAmOmNoZWNrZWR+YXBwLW5vZGU6YWZ0ZXJ7IGNvbnRlbnQ6IFwiK1wiIH1cbiAgICAgICY6Y2hlY2tlZH5hcHAtbm9kZSAqIHsgZGlzcGxheTogbm9uZTt9XG4gICAgICAmOmNoZWNrZWR+c3Bhbi5mb2xkZXI6YmVmb3Jle1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3ZuZC5taWNyb3NvZnQuaWNvbjtiYXNlNjQsQUFBQkFBRUFFQkFBQUFBQUlBQm9CQUFBRmdBQUFDZ0FBQUFRQUFBQUlBQUFBQUVBSUFBQUFBQUFRQVFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUQvLy84Qi8vLy9BZi8vL3dILy8vOEIvLy8vQWYvLy93SC8vLzhCLy8vL0FmLy8vd0gvLy84Qi8vLy9BZi8vL3dILy8vOEIvLy8vQWYvLy93SC8vLzhCQUFBQUJ3QUFBQmNBQUFBYkFBQUFHd0FBQUJzQUFBQWJBQUFBR3dBQUFCc0FBQUFiQUFBQUd3QUFBQnNBQUFBYkFBQUFHd0FBQUJzQUFBQVhBQUFBQndOTWNJc0RaSlMzQTJTVXR3TmtsTGNEWkpTM0EyU1V0d05rbExjRFpKUzNBMlNVdHdOa2xMY0RaSlMzQTJTVXR3TmtsTGNEWkpTM0EyU1V0d05NY0lzRGJxU3Bocy93LzRMTDdmK0N5KzMvZ3N2dC80TEw3ZitDeSszL2dzdnQvNExMN2YrQ3krMy9nc3Z0LzRMTDdmK0N5KzMvZ3N2dC80YlA4UDhEYnFTcEEzaTBtNGJQN3Y5OXlPai9mY2pvLzMzSTZQOTl5T2ovZmNqby8zM0k2UDk5eU9qL2Zjam8vMzNJNlA5OXlPai9mY2pvLzMzSTZQK0d6KzcvQTNpMG13Sjh1WmVLMC9EL2dzenIvNExNNi8rQ3pPdi9nc3pyLzRMTTYvK0N6T3YvZ3N6ci80TE02LytDek92L2dzenIvNExNNi8rQ3pPdi9pdFB3L3dKOHVaY0NmNzZUajlmeS80ZlE3ZitIME8zL2g5RHQvNGZRN2YrSDBPMy9oOUR0LzRmUTdmK0gwTzMvaDlEdC80ZlE3ZitIME8zL2g5RHQvNC9YOHY4Q2Y3NlRBb0xDajVUYjlQK04xZkQvamRYdy80M1Y4UCtOMWZEL2pkWHcvNDNWOFArTjFmRC9qZFh3LzQzVjhQK04xZkQvamRYdy80M1Y4UCtVMi9UL0FvTENqd0tGeDR1WjRQYi9rdHJ6LzVMYTgvK1MydlAva3Ryei81TGE4LytTMnZQL2t0cnovNUxhOC8rUzJ2UC9rdHJ6LzVMYTgvK1MydlAvbWVEMi93S0Z4NHNDaU11SG4rWDUvNWpmOXYrWTMvYi9tTi8yLzVqZjl2K1kzL2IvbU4vMi81amY5ditZMy9iL21OLzIvNWpmOXYrWTMvYi9tTi8yLzUvbCtmOENpTXVIQW9yUGc2UHArLytkNC9uL25lUDUvNTNqK2YrZDQvbi9uZVA1LzUzaitmK2o2ZnIvbytuNi82UHArditqNmZyL28rbjYvNlBwK3YrbTdQdi9Bb3JQZ3dLTjBvR283ZjMvb3VmNy82TG4rLytpNS92L291ZjcvNkxuKy8rcjhQMy9qTkR0LzRIRjUvK0J4ZWYvZ2NYbi80SEY1LytCeGVmL2djWG4vd0tOMG9FQ2o5WjlydlAvLzZ2dy92K3I4UDcvcS9EKy82dncvdit1OC8vL2o5UHYvNC9UNy8rcjhQNy9xL0QrLzZ2dy92K3I4UDcvcS9EKy82N3ovLzhDajlaOUFwSFpYUUtSMlhzQ2tkbDdBcEhaZXdLUjJYc0NrZGw3QXBIWmV3S1IyWHYrL3YzLytQanovL0R3NXYvcDZkdi8vc2xCLy9TMkx2OENrZGw3QXBIWlhmLy8vd0gvLy84Qi8vLy9BZi8vL3dILy8vOEIvLy8vQWYvLy93RUNrdHNyQXBMYmVRS1MyM2tDa3R0NUFwTGJlUUtTMjNrQ2t0dDVBcExiSy8vLy93SC8vLzhCLy8vL0FmLy8vd0gvLy84Qi8vLy9BZi8vL3dILy8vOEIvLy8vQWYvLy93SC8vLzhCLy8vL0FmLy8vd0gvLy84Qi8vLy9BZi8vL3dILy8vOEJBQUQvL3dBQS8vOEFBUC8vQUFELy93QUEvLzhBQVAvL0FBRC8vd0FBLy84QUFQLy9BQUQvL3dBQS8vOEFBUC8vQUFELy93QUEvLzhBQVAvL0FBRC8vdz09XCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgICYgPiBzcGFue1xuICAgICAgZGlzcGxheTogYmxvY2s7IFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgei1pbmRleDogMztcbiAgICAgIG1hcmdpbjouMjVyZW07IFxuICAgICAgcGFkZGluZzogLjI1cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG5cbiAgICAgICYuZm9sZGVyOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6XCJcIjsgXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luOiAwIC4yNXJlbSAgMCAwO1xuICAgICAgICB3aWR0aDoxcmVtOyBcbiAgICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMXJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6Y29udGFpbjtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiZGF0YTppbWFnZS92bmQubWljcm9zb2Z0Lmljb247YmFzZTY0LEFBQUJBQUVBRUJBQUFBQUFJQUJvQkFBQUZnQUFBQ2dBQUFBUUFBQUFJQUFBQUFFQUlBQUFBQUFBUUFRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFELy8vOEIvLy8vQWYvLy93SC8vLzhCLy8vL0FmLy8vd0gvLy84Qi8vLy9BZi8vL3dILy8vOEIvLy8vQWYvLy93SC8vLzhCLy8vL0FmLy8vd0gvLy84QkFBQUFCd0FBQUJjQUFBQWJBQUFBR3dBQUFCc0FBQUFiQUFBQUd3QUFBQnNBQUFBYkFBQUFHd0FBQUJzQUFBQWJBQUFBR3dBQUFCY0FBQUFQQUFBQUNRTk1jSXNEWkpTM0EyU1V0d05rbExjRFpKUzNBMlNVdHdOa2xMY0RaSlMzQTJTVXR3TmtsTGNEWkpTM0EyU1V0d05rbExjRFRIQ1RBQUFBSHdBQUFCRURicVNwYjhIbi80YlE3LytGeis3L2hjL3UvNFhQN3YrRnorNy9oYy91LzRYUDd2K0Z6KzcvaGMvdS80WFA3ditIMFBEL09wZkR5UUpjaWtYLy8vOEJBM2kwbTFlMTMvK04xdkgvaDlIdS80ZlI3ditIMGU3L2g5SHUvNGZSN3YrSDBlNy9oOUh1LzRmUjd2K0gwZTcvaU5IdS8zako2ZTBDZ0w5Ny8vLy9BUUo4dVpkR3Jkei9sOS8yLzVUYjlQK1UyL1QvbE52MC81VGI5UCtVMi9UL2xOdjAvNVRiOVArVTIvVC9sTnYwLzVUYjlQK2I0ZmovSnB2VG5RS0d5Q01DZjc2VFlMN24vNFhYOHYraDV2ci9vT1g2LzZEbCt2K2c1ZnIvb09YNi82TG8rditsNnZ2L3BlcjcvNlhxKy8rbDZ2di9wdXo3LzJ2SjY4a0NpczlWQW9MQ2ozM1A4UDlweCt6L3IvUC8vNjN4L3YrdDhmNy9yZkgrLzYzeC92K1k1ZmovU2JMai8wbXk0LzlKc3VQL1RiYmwvd0tLejhVQ2p0WjlBbzdXZlFLRng0dVczdmIvVHJqbi8wNjQ1LzlPdU9mL1Ryam4vMDY0NS85T3VPZi9UcmpuLzRIUjhQK1MydlAva3Ryei81bmc5djhDaGNlTC8vLy9BZi8vL3dFQ2lNdUhuK1g1LzVqZjl2K1kzL2IvbU4vMi81amY5ditZMy9iL21OLzIvNWpmOXYrWTMvYi9tTi8yLzVqZjl2K2Y1Zm4vQW9qTGgvLy8vd0gvLy84QkFvclBnNlBwKy8rZDQvbi9uZVA1LzUzaitmK2Q0L24vbmVQNS81M2orZitkNC9uL25lUDUvNTNqK2YrZDQvbi9vK243L3dLS3o0UC8vLzhCLy8vL0FRS04wb0dvN2YzL291ZjcvNkxuKy8raTUvdi9vdWY3LzZMbisvK2k1L3Yvb3VmNy82TG4rLytpNS92L291ZjcvNmp0L2Y4Q2pkS0IvLy8vQWYvLy93RUNqOVo5cnZQLy82dncvdityOFA3L3EvRCsvNnZ3L3YrcjhQNy9xL0QrLzZ2dy92K3I4UDcvcS9EKy82dncvdit1OC8vL0FvL1dmZi8vL3dILy8vOEJBcEhaWFFLUjJYc0NrZGw3QXBIWmV3S1IyWHNDa2RsN0FwSFplLzcrL2YvMTllNy82K3ZkLy83SlFmLzB0aTcvQXBIWmV3S1IyVjMvLy84Qi8vLy9BZi8vL3dILy8vOEIvLy8vQWYvLy93SC8vLzhCLy8vL0FRS1MyeXNDa3R0NUFwTGJlUUtTMjNrQ2t0dDVBcExiZVFLUzJ5di8vLzhCLy8vL0FmLy8vd0gvLy84Qi8vLy9BZi8vL3dILy8vOEIvLy8vQWYvLy93SC8vLzhCLy8vL0FmLy8vd0gvLy84Qi8vLy9BZi8vL3dILy8vOEIvLy8vQWYvLy93SC8vLzhCQUFELy93QUEvLzhBQVAvL0FBRC8vd0FBLy84QUFQLy9BQUQvL3dBQS8vOEFBUC8vQUFELy93QUEvLzhBQVAvL0FBRC8vd0FBLy84QUFQLy9BQUQvL3c9PVwiKTtcbiAgICAgIH1cbiAgICAgICY6YWZ0ZXJ7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7IFxuICAgICAgICBkaXNwbGF5OiBibG9jazsgXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDotLjlyZW07IFxuICAgICAgICB0b3A6LS41cmVtOyBcbiAgICAgICAgYm90dG9tOjA7XG4gICAgICAgIG1hcmdpbjogYXV0byAuMjVyZW0gYXV0byAuMjVyZW07XG4gICAgICAgIGJvcmRlci10b3A6IGRvdHRlZCBibGFjayAuMXJlbTtcbiAgICAgICAgd2lkdGg6IC43NXJlbTtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uY291bnQge1xuICBmb250LXNpemU6IC44cmVtO1xuICBmb250LXdlaWdodDogYm9sZDs7XG59XG4iLCJ1bCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNsZWFyOiBsZWZ0O1xuICBtYXJnaW46IDAuMjVyZW07XG4gIHBhZGRpbmc6IDA7XG59XG51bC50cmVlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxudWwudHJlZTpiZWZvcmUge1xuICBsZWZ0OiAwLjVyZW07XG59XG51bC50cmVlOmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbnVsIGFwcC1ub2RlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAwLjI1cmVtO1xuICByaWdodDogYXV0bztcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAxLjc1cmVtO1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlci1yaWdodDogZG90dGVkIGJsYWNrIDAuMXJlbTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogYXV0bztcbn1cbnVsIGFwcC1ub2RlOmFmdGVyIHtcbiAgY29udGVudDogXCItXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMztcbiAgdG9wOiAwO1xuICBsZWZ0OiAtMC41cmVtO1xuICBtYXJnaW46IDAuNjVyZW07XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAwLjhyZW07XG4gIGhlaWdodDogMC44cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAwLjg1cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogc29saWQgZ3JheSAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAuMXJlbTtcbn1cbnVsID4gbGkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgY2xlYXI6IGJvdGg7XG4gIHJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIHdpZHRoOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG51bCA+IGxpOmxhc3QtY2hpbGQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgdG9wOiAxcmVtO1xuICBsZWZ0OiAwO1xuICBib3R0b206IC0wLjI1cmVtO1xuICB3aWR0aDogMC43NXJlbTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbnVsID4gbGkgPiBpbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZsb2F0OiBsZWZ0O1xuICB6LWluZGV4OiA0O1xuICBtYXJnaW46IDAgMCAwIC0xcmVtO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMXJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbnVsID4gbGkgPiBpbnB1dDpjaGVja2VkIH4gYXBwLW5vZGU6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbnVsID4gbGkgPiBpbnB1dDpjaGVja2VkIH4gYXBwLW5vZGU6YWZ0ZXIge1xuICBjb250ZW50OiBcIitcIjtcbn1cbnVsID4gbGkgPiBpbnB1dDpjaGVja2VkIH4gYXBwLW5vZGUgKiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG51bCA+IGxpID4gaW5wdXQ6Y2hlY2tlZCB+IHNwYW4uZm9sZGVyOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvdm5kLm1pY3Jvc29mdC5pY29uO2Jhc2U2NCxBQUFCQUFFQUVCQUFBQUFBSUFCb0JBQUFGZ0FBQUNnQUFBQVFBQUFBSUFBQUFBRUFJQUFBQUFBQVFBUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRC8vLzhCLy8vL0FmLy8vd0gvLy84Qi8vLy9BZi8vL3dILy8vOEIvLy8vQWYvLy93SC8vLzhCLy8vL0FmLy8vd0gvLy84Qi8vLy9BZi8vL3dILy8vOEJBQUFBQndBQUFCY0FBQUFiQUFBQUd3QUFBQnNBQUFBYkFBQUFHd0FBQUJzQUFBQWJBQUFBR3dBQUFCc0FBQUFiQUFBQUd3QUFBQnNBQUFBWEFBQUFCd05NY0lzRFpKUzNBMlNVdHdOa2xMY0RaSlMzQTJTVXR3TmtsTGNEWkpTM0EyU1V0d05rbExjRFpKUzNBMlNVdHdOa2xMY0RaSlMzQTJTVXR3Tk1jSXNEYnFTcGhzL3cvNExMN2YrQ3krMy9nc3Z0LzRMTDdmK0N5KzMvZ3N2dC80TEw3ZitDeSszL2dzdnQvNExMN2YrQ3krMy9nc3Z0LzRiUDhQOERicVNwQTNpMG00YlA3djk5eU9qL2Zjam8vMzNJNlA5OXlPai9mY2pvLzMzSTZQOTl5T2ovZmNqby8zM0k2UDk5eU9qL2Zjam8vMzNJNlArR3orNy9BM2kwbXdKOHVaZUswL0QvZ3N6ci80TE02LytDek92L2dzenIvNExNNi8rQ3pPdi9nc3pyLzRMTTYvK0N6T3YvZ3N6ci80TE02LytDek92L2l0UHcvd0o4dVpjQ2Y3NlRqOWZ5LzRmUTdmK0gwTzMvaDlEdC80ZlE3ZitIME8zL2g5RHQvNGZRN2YrSDBPMy9oOUR0LzRmUTdmK0gwTzMvaDlEdC80L1g4djhDZjc2VEFvTENqNVRiOVArTjFmRC9qZFh3LzQzVjhQK04xZkQvamRYdy80M1Y4UCtOMWZEL2pkWHcvNDNWOFArTjFmRC9qZFh3LzQzVjhQK1UyL1QvQW9MQ2p3S0Z4NHVaNFBiL2t0cnovNUxhOC8rUzJ2UC9rdHJ6LzVMYTgvK1MydlAva3Ryei81TGE4LytTMnZQL2t0cnovNUxhOC8rUzJ2UC9tZUQyL3dLRng0c0NpTXVIbitYNS81amY5ditZMy9iL21OLzIvNWpmOXYrWTMvYi9tTi8yLzVqZjl2K1kzL2IvbU4vMi81amY5ditZMy9iL21OLzIvNS9sK2Y4Q2lNdUhBb3JQZzZQcCsvK2Q0L24vbmVQNS81M2orZitkNC9uL25lUDUvNTNqK2YrajZmci9vK242LzZQcCt2K2o2ZnIvbytuNi82UHArdittN1B2L0FvclBnd0tOMG9HbzdmMy9vdWY3LzZMbisvK2k1L3Yvb3VmNy82TG4rLytyOFAzL2pORHQvNEhGNS8rQnhlZi9nY1huLzRIRjUvK0J4ZWYvZ2NYbi93S04wb0VDajlaOXJ2UC8vNnZ3L3YrcjhQNy9xL0QrLzZ2dy92K3U4Ly8vajlQdi80L1Q3LytyOFA3L3EvRCsvNnZ3L3YrcjhQNy9xL0QrLzY3ei8vOENqOVo5QXBIWlhRS1IyWHNDa2RsN0FwSFpld0tSMlhzQ2tkbDdBcEhaZXdLUjJYdisvdjMvK1Bqei8vRHc1di9wNmR2Ly9zbEIvL1MyTHY4Q2tkbDdBcEhaWGYvLy93SC8vLzhCLy8vL0FmLy8vd0gvLy84Qi8vLy9BZi8vL3dFQ2t0c3JBcExiZVFLUzIza0NrdHQ1QXBMYmVRS1MyM2tDa3R0NUFwTGJLLy8vL3dILy8vOEIvLy8vQWYvLy93SC8vLzhCLy8vL0FmLy8vd0gvLy84Qi8vLy9BZi8vL3dILy8vOEIvLy8vQWYvLy93SC8vLzhCLy8vL0FmLy8vd0gvLy84QkFBRC8vd0FBLy84QUFQLy9BQUQvL3dBQS8vOEFBUC8vQUFELy93QUEvLzhBQVAvL0FBRC8vd0FBLy84QUFQLy9BQUQvL3dBQS8vOEFBUC8vQUFELy93PT1cIik7XG59XG51bCA+IGxpID4gc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICB6LWluZGV4OiAzO1xuICBtYXJnaW46IDAuMjVyZW07XG4gIHBhZGRpbmc6IDAuMjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG51bCA+IGxpID4gc3Bhbi5mb2xkZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMC4yNXJlbSAwIDA7XG4gIHdpZHRoOiAxcmVtO1xuICBoZWlnaHQ6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQ6IHVybChcImRhdGE6aW1hZ2Uvdm5kLm1pY3Jvc29mdC5pY29uO2Jhc2U2NCxBQUFCQUFFQUVCQUFBQUFBSUFCb0JBQUFGZ0FBQUNnQUFBQVFBQUFBSUFBQUFBRUFJQUFBQUFBQVFBUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRC8vLzhCLy8vL0FmLy8vd0gvLy84Qi8vLy9BZi8vL3dILy8vOEIvLy8vQWYvLy93SC8vLzhCLy8vL0FmLy8vd0gvLy84Qi8vLy9BZi8vL3dILy8vOEJBQUFBQndBQUFCY0FBQUFiQUFBQUd3QUFBQnNBQUFBYkFBQUFHd0FBQUJzQUFBQWJBQUFBR3dBQUFCc0FBQUFiQUFBQUd3QUFBQmNBQUFBUEFBQUFDUU5NY0lzRFpKUzNBMlNVdHdOa2xMY0RaSlMzQTJTVXR3TmtsTGNEWkpTM0EyU1V0d05rbExjRFpKUzNBMlNVdHdOa2xMY0RUSENUQUFBQUh3QUFBQkVEYnFTcGI4SG4vNGJRNy8rRnorNy9oYy91LzRYUDd2K0Z6KzcvaGMvdS80WFA3ditGeis3L2hjL3UvNFhQN3YrSDBQRC9PcGZEeVFKY2lrWC8vLzhCQTNpMG0xZTEzLytOMXZIL2g5SHUvNGZSN3YrSDBlNy9oOUh1LzRmUjd2K0gwZTcvaDlIdS80ZlI3ditIMGU3L2lOSHUvM2pKNmUwQ2dMOTcvLy8vQVFKOHVaZEdyZHovbDkvMi81VGI5UCtVMi9UL2xOdjAvNVRiOVArVTIvVC9sTnYwLzVUYjlQK1UyL1QvbE52MC81VGI5UCtiNGZqL0pwdlRuUUtHeUNNQ2Y3NlRZTDduLzRYWDh2K2g1dnIvb09YNi82RGwrditnNWZyL29PWDYvNkxvK3YrbDZ2di9wZXI3LzZYcSsvK2w2dnYvcHV6Ny8ydko2OGtDaXM5VkFvTENqMzNQOFA5cHgrei9yL1AvLzYzeC92K3Q4ZjcvcmZIKy82M3gvditZNWZqL1NiTGovMG15NC85SnN1UC9UYmJsL3dLS3o4VUNqdFo5QW83V2ZRS0Z4NHVXM3ZiL1Ryam4vMDY0NS85T3VPZi9UcmpuLzA2NDUvOU91T2YvVHJqbi80SFI4UCtTMnZQL2t0cnovNW5nOXY4Q2hjZUwvLy8vQWYvLy93RUNpTXVIbitYNS81amY5ditZMy9iL21OLzIvNWpmOXYrWTMvYi9tTi8yLzVqZjl2K1kzL2IvbU4vMi81amY5ditmNWZuL0FvakxoLy8vL3dILy8vOEJBb3JQZzZQcCsvK2Q0L24vbmVQNS81M2orZitkNC9uL25lUDUvNTNqK2YrZDQvbi9uZVA1LzUzaitmK2Q0L24vbytuNy93S0t6NFAvLy84Qi8vLy9BUUtOMG9HbzdmMy9vdWY3LzZMbisvK2k1L3Yvb3VmNy82TG4rLytpNS92L291ZjcvNkxuKy8raTUvdi9vdWY3LzZqdC9mOENqZEtCLy8vL0FmLy8vd0VDajlaOXJ2UC8vNnZ3L3YrcjhQNy9xL0QrLzZ2dy92K3I4UDcvcS9EKy82dncvdityOFA3L3EvRCsvNnZ3L3YrdTgvLy9Bby9XZmYvLy93SC8vLzhCQXBIWlhRS1IyWHNDa2RsN0FwSFpld0tSMlhzQ2tkbDdBcEhaZS83Ky9mLzE5ZTcvNit2ZC8vN0pRZi8wdGk3L0FwSFpld0tSMlYzLy8vOEIvLy8vQWYvLy93SC8vLzhCLy8vL0FmLy8vd0gvLy84Qi8vLy9BUUtTMnlzQ2t0dDVBcExiZVFLUzIza0NrdHQ1QXBMYmVRS1MyeXYvLy84Qi8vLy9BZi8vL3dILy8vOEIvLy8vQWYvLy93SC8vLzhCLy8vL0FmLy8vd0gvLy84Qi8vLy9BZi8vL3dILy8vOEIvLy8vQWYvLy93SC8vLzhCLy8vL0FmLy8vd0gvLy84QkFBRC8vd0FBLy84QUFQLy9BQUQvL3dBQS8vOEFBUC8vQUFELy93QUEvLzhBQVAvL0FBRC8vd0FBLy84QUFQLy9BQUQvL3dBQS8vOEFBUC8vQUFELy93PT1cIik7XG59XG51bCA+IGxpID4gc3BhbjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0wLjlyZW07XG4gIHRvcDogLTAuNXJlbTtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG8gMC4yNXJlbSBhdXRvIDAuMjVyZW07XG4gIGJvcmRlci10b3A6IGRvdHRlZCBibGFjayAwLjFyZW07XG4gIHdpZHRoOiAwLjc1cmVtO1xuICBoZWlnaHQ6IDA7XG59XG5cbi5jb3VudCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/node/node.component.ts":
  /*!****************************************!*\
    !*** ./src/app/node/node.component.ts ***!
    \****************************************/

  /*! exports provided: NodeComponent */

  /***/
  function srcAppNodeNodeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NodeComponent", function () {
      return NodeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NodeComponent = /*#__PURE__*/function () {
      function NodeComponent() {
        _classCallCheck(this, NodeComponent);
      }

      _createClass(NodeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.listItems = this.sortItems(_toConsumableArray(this.listItems));
        }
      }, {
        key: "sortItems",
        value: function sortItems(items) {
          return items.sort(function (a, b) {
            if (a.type === 'folder' && b.type === 'file') {
              return -1;
            }

            if (a.type === 'file' && b.type === 'folder') {
              return 1;
            }

            if (a.type === b.type) {
              if (a.name > b.name) {
                return 1;
              }

              if (a.name == b.name) {
                return 0;
              }

              if (a.name < b.name) {
                return -1;
              }
            }
          });
        }
      }, {
        key: "countFiles",
        value: function countFiles(items) {
          var _this = this;

          return items.reduce(function (count, item) {
            if (item.type === 'file') {
              return ++count;
            }

            if (item.type === 'folder' && item.children && item.children.length) {
              return count + _this.countFiles(item.children);
            }

            return count;
          }, 0);
        }
      }]);

      return NodeComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NodeComponent.prototype, "listItems", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NodeComponent.prototype, "root", void 0);
    NodeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-node',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./node.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/node/node.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./node.component.scss */
      "./src/app/node/node.component.scss"))["default"]]
    })], NodeComponent);
    /***/
  },

  /***/
  "./src/assets/files/data.json":
  /*!************************************!*\
    !*** ./src/assets/files/data.json ***!
    \************************************/

  /*! exports provided: tree, default */

  /***/
  function srcAssetsFilesDataJson(module) {
    module.exports = JSON.parse("{\"tree\":[{\"name\":\"Pictures\",\"type\":\"folder\",\"children\":[{\"name\":\"Family\",\"type\":\"folder\",\"children\":[{\"name\":\"file1.jpg\",\"type\":\"file\"},{\"name\":\"file2.jpg\",\"type\":\"file\"},{\"name\":\"file3.jpg\",\"type\":\"file\"}]},{\"name\":\"foto21345.jpg\",\"type\":\"file\"},{\"name\":\"foto2908776t.jpg\",\"type\":\"file\"}]},{\"name\":\"Documents\",\"type\":\"folder\",\"children\":[{\"name\":\"Drafts\",\"type\":\"folder\",\"children\":[{\"name\":\"Temporary\",\"type\":\"folder\",\"children\":[]},{\"name\":\"document9.docx\",\"type\":\"file\"},{\"name\":\"document10.docx\",\"type\":\"file\"},{\"name\":\"document99.docx\",\"type\":\"file\"}]},{\"name\":\"price.docx\",\"type\":\"file\"},{\"name\":\"vision.docx\",\"type\":\"file\"},{\"name\":\"Trash\",\"type\":\"folder\",\"children\":[{\"name\":\"doc1.docx\",\"type\":\"file\"},{\"name\":\"doc2.docx\",\"type\":\"file\"},{\"name\":\"doc3.docx\",\"type\":\"file\"}]}]},{\"name\":\"Games\",\"type\":\"folder\",\"children\":[{\"name\":\"tetris.exe\",\"type\":\"file\"},{\"name\":\"gomoku.com\",\"type\":\"file\"},{\"name\":\"pacman.com\",\"type\":\"file\"}]}]}");
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });

    var environment = {
      production: false
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    document.addEventListener('DOMContentLoaded', function () {
      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/valeriy/Projects/file-system-angular/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map