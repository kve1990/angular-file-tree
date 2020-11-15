(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <app-node *ngIf=\"listItems && listItems.length\" [listItems]=\"listItems\" [root]=\"true\"></app-node>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/node/node.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/node/node.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul [class.tree]=\"root\">\n    <li *ngFor=\"let item of listItems\">\n        <input *ngIf=\"item.type === 'folder'\" type=\"checkbox\" checked=\"true\">\n        <span [class]=\"item.type\">\n            <span class=\"name\">{{item.name}}</span>\n            <span class=\"count\" *ngIf=\"item.type === 'folder' && item.children\"> ({{item.children | countFiles}})</span>\n        </span>\n        <app-node *ngIf=\"item.type === 'folder'\" [listItems]=\"item.children || []\"></app-node>\n    </li>\n</ul>");

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");



let AppComponent = class AppComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() {
        this.subs = this.dataService.getData().subscribe(list => this.listItems = list['tree']);
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
};
AppComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_node_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node/node.component */ "./src/app/node/node.component.ts");
/* harmony import */ var _count_files_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./count-files.pipe */ "./src/app/count-files.pipe.ts");







let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _node_node_component__WEBPACK_IMPORTED_MODULE_5__["NodeComponent"],
            _count_files_pipe__WEBPACK_IMPORTED_MODULE_6__["CountFilesPipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"].withServerTransition({ appId: 'app-root' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/count-files.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/count-files.pipe.ts ***!
  \*************************************/
/*! exports provided: CountFilesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountFilesPipe", function() { return CountFilesPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CountFilesPipe = class CountFilesPipe {
    transform(items) {
        return items.reduce((count, item) => {
            if (item.type === 'file') {
                return ++count;
            }
            if (item.type === 'folder' && item.children && item.children.length) {
                return count + this.transform(item.children);
            }
            return count;
        }, 0);
    }
};
CountFilesPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'countFiles'
    })
], CountFilesPipe);



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



const DataUrl = 'https://kve1990.github.io/angular-file-tree/dist/browser/assets/files/data.json';
let DataService = class DataService {
    constructor(http) {
        this.http = http;
    }
    getData() {
        return this.http.get(DataUrl);
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/app/node/node.component.scss":
/*!******************************************!*\
  !*** ./src/app/node/node.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ul {\n  display: inline-block;\n  float: left;\n  clear: left;\n  margin: 0.25rem;\n  padding: 0;\n}\nul.tree {\n  position: relative;\n}\nul.tree:before {\n  left: 0.5rem;\n}\nul.tree:after {\n  display: none;\n}\nul app-node:before {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  top: 0.25rem;\n  right: auto;\n  bottom: 0;\n  left: 1.75rem;\n  margin: auto;\n  border-right: dotted black 0.1rem;\n  width: 0;\n  height: auto;\n}\nul app-node:after {\n  content: \"-\";\n  position: absolute;\n  z-index: 3;\n  top: 0;\n  left: -0.5rem;\n  margin: 0.65rem;\n  padding: 0;\n  width: 0.8rem;\n  height: 0.8rem;\n  text-align: center;\n  line-height: 0.85rem;\n  font-size: 1rem;\n  background: white;\n  color: black;\n  border: solid gray 1px;\n  border-radius: 0.1rem;\n}\nul > li {\n  display: block;\n  position: relative;\n  float: left;\n  clear: both;\n  right: auto;\n  padding-left: 1rem;\n  width: auto;\n  text-align: center;\n  color: white;\n  background: transparent;\n}\nul > li:last-child:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  z-index: 2;\n  top: 1rem;\n  left: 0;\n  bottom: -0.25rem;\n  width: 0.75rem;\n  height: auto;\n  background: white;\n}\nul > li > input {\n  display: block;\n  position: absolute;\n  float: left;\n  z-index: 4;\n  margin: 0 0 0 -1rem;\n  padding: 0;\n  width: 1rem;\n  height: 2rem;\n  font-size: 1rem;\n  opacity: 0;\n  cursor: pointer;\n}\nul > li > input:checked ~ app-node:before {\n  display: none;\n}\nul > li > input:checked ~ app-node:after {\n  content: \"+\";\n}\nul > li > input:checked ~ app-node * {\n  display: none;\n}\nul > li > input:checked ~ span.folder:before {\n  background-image: url(\"data:image/vnd.microsoft.icon;base64,AAABAAEAEBAAAAAAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAAAAD///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8BAAAABwAAABcAAAAbAAAAGwAAABsAAAAbAAAAGwAAABsAAAAbAAAAGwAAABsAAAAbAAAAGwAAABsAAAAXAAAABwNMcIsDZJS3A2SUtwNklLcDZJS3A2SUtwNklLcDZJS3A2SUtwNklLcDZJS3A2SUtwNklLcDZJS3A2SUtwNMcIsDbqSphs/w/4LL7f+Cy+3/gsvt/4LL7f+Cy+3/gsvt/4LL7f+Cy+3/gsvt/4LL7f+Cy+3/gsvt/4bP8P8DbqSpA3i0m4bP7v99yOj/fcjo/33I6P99yOj/fcjo/33I6P99yOj/fcjo/33I6P99yOj/fcjo/33I6P+Gz+7/A3i0mwJ8uZeK0/D/gszr/4LM6/+CzOv/gszr/4LM6/+CzOv/gszr/4LM6/+CzOv/gszr/4LM6/+CzOv/itPw/wJ8uZcCf76Tj9fy/4fQ7f+H0O3/h9Dt/4fQ7f+H0O3/h9Dt/4fQ7f+H0O3/h9Dt/4fQ7f+H0O3/h9Dt/4/X8v8Cf76TAoLCj5Tb9P+N1fD/jdXw/43V8P+N1fD/jdXw/43V8P+N1fD/jdXw/43V8P+N1fD/jdXw/43V8P+U2/T/AoLCjwKFx4uZ4Pb/ktrz/5La8/+S2vP/ktrz/5La8/+S2vP/ktrz/5La8/+S2vP/ktrz/5La8/+S2vP/meD2/wKFx4sCiMuHn+X5/5jf9v+Y3/b/mN/2/5jf9v+Y3/b/mN/2/5jf9v+Y3/b/mN/2/5jf9v+Y3/b/mN/2/5/l+f8CiMuHAorPg6Pp+/+d4/n/neP5/53j+f+d4/n/neP5/53j+f+j6fr/o+n6/6Pp+v+j6fr/o+n6/6Pp+v+m7Pv/AorPgwKN0oGo7f3/ouf7/6Ln+/+i5/v/ouf7/6Ln+/+r8P3/jNDt/4HF5/+Bxef/gcXn/4HF5/+Bxef/gcXn/wKN0oECj9Z9rvP//6vw/v+r8P7/q/D+/6vw/v+u8///j9Pv/4/T7/+r8P7/q/D+/6vw/v+r8P7/q/D+/67z//8Cj9Z9ApHZXQKR2XsCkdl7ApHZewKR2XsCkdl7ApHZewKR2Xv+/v3/+Pjz//Dw5v/p6dv//slB//S2Lv8Ckdl7ApHZXf///wH///8B////Af///wH///8B////Af///wECktsrApLbeQKS23kCktt5ApLbeQKS23kCktt5ApLbK////wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8BAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//w==\");\n}\nul > li > span {\n  display: block;\n  position: relative;\n  float: left;\n  z-index: 3;\n  margin: 0.25rem;\n  padding: 0.25rem;\n  border-radius: 0.25rem;\n  color: black;\n  background: white;\n}\nul > li > span.folder:before {\n  content: \"\";\n  display: inline-block;\n  margin: 0 0.25rem 0 0;\n  width: 1rem;\n  height: 1rem;\n  line-height: 1rem;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background: url(\"data:image/vnd.microsoft.icon;base64,AAABAAEAEBAAAAAAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAAAAD///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8BAAAABwAAABcAAAAbAAAAGwAAABsAAAAbAAAAGwAAABsAAAAbAAAAGwAAABsAAAAbAAAAGwAAABcAAAAPAAAACQNMcIsDZJS3A2SUtwNklLcDZJS3A2SUtwNklLcDZJS3A2SUtwNklLcDZJS3A2SUtwNklLcDTHCTAAAAHwAAABEDbqSpb8Hn/4bQ7/+Fz+7/hc/u/4XP7v+Fz+7/hc/u/4XP7v+Fz+7/hc/u/4XP7v+H0PD/OpfDyQJcikX///8BA3i0m1e13/+N1vH/h9Hu/4fR7v+H0e7/h9Hu/4fR7v+H0e7/h9Hu/4fR7v+H0e7/iNHu/3jJ6e0CgL97////AQJ8uZdGrdz/l9/2/5Tb9P+U2/T/lNv0/5Tb9P+U2/T/lNv0/5Tb9P+U2/T/lNv0/5Tb9P+b4fj/JpvTnQKGyCMCf76TYL7n/4XX8v+h5vr/oOX6/6Dl+v+g5fr/oOX6/6Lo+v+l6vv/per7/6Xq+/+l6vv/puz7/2vJ68kCis9VAoLCj33P8P9px+z/r/P//63x/v+t8f7/rfH+/63x/v+Y5fj/SbLj/0my4/9JsuP/Tbbl/wKKz8UCjtZ9Ao7WfQKFx4uW3vb/Trjn/0645/9OuOf/Trjn/0645/9OuOf/Trjn/4HR8P+S2vP/ktrz/5ng9v8ChceL////Af///wECiMuHn+X5/5jf9v+Y3/b/mN/2/5jf9v+Y3/b/mN/2/5jf9v+Y3/b/mN/2/5jf9v+f5fn/AojLh////wH///8BAorPg6Pp+/+d4/n/neP5/53j+f+d4/n/neP5/53j+f+d4/n/neP5/53j+f+d4/n/o+n7/wKKz4P///8B////AQKN0oGo7f3/ouf7/6Ln+/+i5/v/ouf7/6Ln+/+i5/v/ouf7/6Ln+/+i5/v/ouf7/6jt/f8CjdKB////Af///wECj9Z9rvP//6vw/v+r8P7/q/D+/6vw/v+r8P7/q/D+/6vw/v+r8P7/q/D+/6vw/v+u8///Ao/Wff///wH///8BApHZXQKR2XsCkdl7ApHZewKR2XsCkdl7ApHZe/7+/f/19e7/6+vd//7JQf/0ti7/ApHZewKR2V3///8B////Af///wH///8B////Af///wH///8B////AQKS2ysCktt5ApLbeQKS23kCktt5ApLbeQKS2yv///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8BAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//w==\");\n}\nul > li > span:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: -0.9rem;\n  top: -0.5rem;\n  bottom: 0;\n  margin: auto 0.25rem auto 0.25rem;\n  border-top: dotted black 0.1rem;\n  width: 0.75rem;\n  height: 0;\n}\n.count {\n  font-size: 0.7rem;\n  font-weight: bold;\n  color: darkblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YWxlcml5L1Byb2plY3RzL2ZpbGUtc3lzdGVtLWFuZ3VsYXIvc3JjL2FwcC9ub2RlL25vZGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25vZGUvbm9kZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDRCxlQUFBO0VBQ0EsVUFBQTtBQ0FEO0FERUU7RUFDRSxrQkFBQTtBQ0FKO0FEQ0k7RUFBVyxZQUFBO0FDRWY7QURESTtFQUFVLGFBQUE7QUNJZDtBREZFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxRQUFBO0VBQVUsWUFBQTtBQ0tkO0FESEU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUFPLGFBQUE7RUFDUCxlQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FDTUo7QURIRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDS0o7QURISTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNLTjtBREZJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUFvQixVQUFBO0VBQ3BCLFdBQUE7RUFBWSxZQUFBO0VBQ1osZUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDTU47QURKTTtFQUEyQixhQUFBO0FDT2pDO0FETk07RUFBMEIsWUFBQTtBQ1NoQztBRFJNO0VBQXVCLGFBQUE7QUNXN0I7QURWTTtFQUNFLDhqREFBQTtBQ1lSO0FEUkk7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDVU47QURSTTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3akRBQUE7QUNVUjtBRFJNO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQ1VSO0FESkE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ09GIiwiZmlsZSI6InNyYy9hcHAvbm9kZS9ub2RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG51bHtcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBjbGVhcjogbGVmdDtcblx0bWFyZ2luOi4yNXJlbTtcblx0cGFkZGluZzowO1xuICBcbiAgJi50cmVle1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAmOmJlZm9yZSB7IGxlZnQ6LjVyZW07IH1cbiAgICAmOmFmdGVyIHsgZGlzcGxheTogbm9uZTt9XG4gIH1cbiAgYXBwLW5vZGU6YmVmb3Jle1xuICAgIGNvbnRlbnQ6XCJcIjsgXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICB6LWluZGV4OiAxO1xuICAgIHRvcDouMjVyZW07IFxuICAgIHJpZ2h0OmF1dG87IFxuICAgIGJvdHRvbTowOyBcbiAgICBsZWZ0OiAxLjc1cmVtOyBcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYm9yZGVyLXJpZ2h0OiBkb3R0ZWQgYmxhY2sgLjFyZW07XG4gICAgd2lkdGg6IDA7IGhlaWdodDogYXV0bztcbiAgfVxuICBhcHAtbm9kZTphZnRlcntcbiAgICBjb250ZW50OiBcIi1cIjsgXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICB6LWluZGV4OiAzO1xuICAgIHRvcDowOyBsZWZ0Oi0uNXJlbTtcbiAgICBtYXJnaW46LjY1cmVtOyBcbiAgICBwYWRkaW5nOjA7XG4gICAgd2lkdGg6LjhyZW07IFxuICAgIGhlaWdodDogLjhyZW07IFxuICAgIHRleHQtYWxpZ246Y2VudGVyOyBcbiAgICBsaW5lLWhlaWdodDogLjg1cmVtOyBcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlcjpzb2xpZCBncmF5IDFweDtcbiAgICBib3JkZXItcmFkaXVzOiAuMXJlbTtcbiAgfVxuXG4gICYgPiBsaXtcbiAgICBkaXNwbGF5OiBibG9jazsgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgICBmbG9hdDogbGVmdDsgXG4gICAgY2xlYXI6IGJvdGg7XG4gICAgcmlnaHQ6YXV0bztcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgd2lkdGg6YXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgIGNvbG9yOndoaXRlO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgJjpsYXN0LWNoaWxkOmJlZm9yZXtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7IFxuICAgICAgZGlzcGxheTogYmxvY2s7IFxuICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgICB0b3A6MXJlbTsgXG4gICAgICBsZWZ0OjA7IFxuICAgICAgYm90dG9tOi0uMjVyZW07XG4gICAgICB3aWR0aDouNzVyZW07IFxuICAgICAgaGVpZ2h0OmF1dG87XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAmID4gaW5wdXR7XG4gICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIHotaW5kZXg6IDQ7XG4gICAgICBtYXJnaW46MCAwIDAgLTFyZW07IHBhZGRpbmc6MDtcbiAgICAgIHdpZHRoOjFyZW07IGhlaWdodDogMnJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICY6Y2hlY2tlZH5hcHAtbm9kZTpiZWZvcmV7IGRpc3BsYXk6IG5vbmU7fVxuICAgICAgJjpjaGVja2VkfmFwcC1ub2RlOmFmdGVyeyBjb250ZW50OiBcIitcIiB9XG4gICAgICAmOmNoZWNrZWR+YXBwLW5vZGUgKiB7IGRpc3BsYXk6IG5vbmU7fVxuICAgICAgJjpjaGVja2VkfnNwYW4uZm9sZGVyOmJlZm9yZXtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS92bmQubWljcm9zb2Z0Lmljb247YmFzZTY0LEFBQUJBQUVBRUJBQUFBQUFJQUJvQkFBQUZnQUFBQ2dBQUFBUUFBQUFJQUFBQUFFQUlBQUFBQUFBUUFRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFELy8vOEIvLy8vQWYvLy93SC8vLzhCLy8vL0FmLy8vd0gvLy84Qi8vLy9BZi8vL3dILy8vOEIvLy8vQWYvLy93SC8vLzhCLy8vL0FmLy8vd0gvLy84QkFBQUFCd0FBQUJjQUFBQWJBQUFBR3dBQUFCc0FBQUFiQUFBQUd3QUFBQnNBQUFBYkFBQUFHd0FBQUJzQUFBQWJBQUFBR3dBQUFCc0FBQUFYQUFBQUJ3Tk1jSXNEWkpTM0EyU1V0d05rbExjRFpKUzNBMlNVdHdOa2xMY0RaSlMzQTJTVXR3TmtsTGNEWkpTM0EyU1V0d05rbExjRFpKUzNBMlNVdHdOTWNJc0RicVNwaHMvdy80TEw3ZitDeSszL2dzdnQvNExMN2YrQ3krMy9nc3Z0LzRMTDdmK0N5KzMvZ3N2dC80TEw3ZitDeSszL2dzdnQvNGJQOFA4RGJxU3BBM2kwbTRiUDd2OTl5T2ovZmNqby8zM0k2UDk5eU9qL2Zjam8vMzNJNlA5OXlPai9mY2pvLzMzSTZQOTl5T2ovZmNqby8zM0k2UCtHeis3L0EzaTBtd0o4dVplSzAvRC9nc3pyLzRMTTYvK0N6T3YvZ3N6ci80TE02LytDek92L2dzenIvNExNNi8rQ3pPdi9nc3pyLzRMTTYvK0N6T3YvaXRQdy93Sjh1WmNDZjc2VGo5ZnkvNGZRN2YrSDBPMy9oOUR0LzRmUTdmK0gwTzMvaDlEdC80ZlE3ZitIME8zL2g5RHQvNGZRN2YrSDBPMy9oOUR0LzQvWDh2OENmNzZUQW9MQ2o1VGI5UCtOMWZEL2pkWHcvNDNWOFArTjFmRC9qZFh3LzQzVjhQK04xZkQvamRYdy80M1Y4UCtOMWZEL2pkWHcvNDNWOFArVTIvVC9Bb0xDandLRng0dVo0UGIva3Ryei81TGE4LytTMnZQL2t0cnovNUxhOC8rUzJ2UC9rdHJ6LzVMYTgvK1MydlAva3Ryei81TGE4LytTMnZQL21lRDIvd0tGeDRzQ2lNdUhuK1g1LzVqZjl2K1kzL2IvbU4vMi81amY5ditZMy9iL21OLzIvNWpmOXYrWTMvYi9tTi8yLzVqZjl2K1kzL2IvbU4vMi81L2wrZjhDaU11SEFvclBnNlBwKy8rZDQvbi9uZVA1LzUzaitmK2Q0L24vbmVQNS81M2orZitqNmZyL28rbjYvNlBwK3YrajZmci9vK242LzZQcCt2K203UHYvQW9yUGd3S04wb0dvN2YzL291ZjcvNkxuKy8raTUvdi9vdWY3LzZMbisvK3I4UDMvak5EdC80SEY1LytCeGVmL2djWG4vNEhGNS8rQnhlZi9nY1huL3dLTjBvRUNqOVo5cnZQLy82dncvdityOFA3L3EvRCsvNnZ3L3YrdTgvLy9qOVB2LzQvVDcvK3I4UDcvcS9EKy82dncvdityOFA3L3EvRCsvNjd6Ly84Q2o5WjlBcEhaWFFLUjJYc0NrZGw3QXBIWmV3S1IyWHNDa2RsN0FwSFpld0tSMlh2Ky92My8rUGp6Ly9EdzV2L3A2ZHYvL3NsQi8vUzJMdjhDa2RsN0FwSFpYZi8vL3dILy8vOEIvLy8vQWYvLy93SC8vLzhCLy8vL0FmLy8vd0VDa3RzckFwTGJlUUtTMjNrQ2t0dDVBcExiZVFLUzIza0NrdHQ1QXBMYksvLy8vd0gvLy84Qi8vLy9BZi8vL3dILy8vOEIvLy8vQWYvLy93SC8vLzhCLy8vL0FmLy8vd0gvLy84Qi8vLy9BZi8vL3dILy8vOEIvLy8vQWYvLy93SC8vLzhCQUFELy93QUEvLzhBQVAvL0FBRC8vd0FBLy84QUFQLy9BQUQvL3dBQS8vOEFBUC8vQUFELy93QUEvLzhBQVAvL0FBRC8vd0FBLy84QUFQLy9BQUQvL3c9PVwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmID4gc3BhbntcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyBcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIHotaW5kZXg6IDM7XG4gICAgICBtYXJnaW46LjI1cmVtOyBcbiAgICAgIHBhZGRpbmc6IC4yNXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuXG4gICAgICAmLmZvbGRlcjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OlwiXCI7IFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMCAuMjVyZW0gIDAgMDtcbiAgICAgICAgd2lkdGg6MXJlbTsgXG4gICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOmNvbnRhaW47XG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcImRhdGE6aW1hZ2Uvdm5kLm1pY3Jvc29mdC5pY29uO2Jhc2U2NCxBQUFCQUFFQUVCQUFBQUFBSUFCb0JBQUFGZ0FBQUNnQUFBQVFBQUFBSUFBQUFBRUFJQUFBQUFBQVFBUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRC8vLzhCLy8vL0FmLy8vd0gvLy84Qi8vLy9BZi8vL3dILy8vOEIvLy8vQWYvLy93SC8vLzhCLy8vL0FmLy8vd0gvLy84Qi8vLy9BZi8vL3dILy8vOEJBQUFBQndBQUFCY0FBQUFiQUFBQUd3QUFBQnNBQUFBYkFBQUFHd0FBQUJzQUFBQWJBQUFBR3dBQUFCc0FBQUFiQUFBQUd3QUFBQmNBQUFBUEFBQUFDUU5NY0lzRFpKUzNBMlNVdHdOa2xMY0RaSlMzQTJTVXR3TmtsTGNEWkpTM0EyU1V0d05rbExjRFpKUzNBMlNVdHdOa2xMY0RUSENUQUFBQUh3QUFBQkVEYnFTcGI4SG4vNGJRNy8rRnorNy9oYy91LzRYUDd2K0Z6KzcvaGMvdS80WFA3ditGeis3L2hjL3UvNFhQN3YrSDBQRC9PcGZEeVFKY2lrWC8vLzhCQTNpMG0xZTEzLytOMXZIL2g5SHUvNGZSN3YrSDBlNy9oOUh1LzRmUjd2K0gwZTcvaDlIdS80ZlI3ditIMGU3L2lOSHUvM2pKNmUwQ2dMOTcvLy8vQVFKOHVaZEdyZHovbDkvMi81VGI5UCtVMi9UL2xOdjAvNVRiOVArVTIvVC9sTnYwLzVUYjlQK1UyL1QvbE52MC81VGI5UCtiNGZqL0pwdlRuUUtHeUNNQ2Y3NlRZTDduLzRYWDh2K2g1dnIvb09YNi82RGwrditnNWZyL29PWDYvNkxvK3YrbDZ2di9wZXI3LzZYcSsvK2w2dnYvcHV6Ny8ydko2OGtDaXM5VkFvTENqMzNQOFA5cHgrei9yL1AvLzYzeC92K3Q4ZjcvcmZIKy82M3gvditZNWZqL1NiTGovMG15NC85SnN1UC9UYmJsL3dLS3o4VUNqdFo5QW83V2ZRS0Z4NHVXM3ZiL1Ryam4vMDY0NS85T3VPZi9UcmpuLzA2NDUvOU91T2YvVHJqbi80SFI4UCtTMnZQL2t0cnovNW5nOXY4Q2hjZUwvLy8vQWYvLy93RUNpTXVIbitYNS81amY5ditZMy9iL21OLzIvNWpmOXYrWTMvYi9tTi8yLzVqZjl2K1kzL2IvbU4vMi81amY5ditmNWZuL0FvakxoLy8vL3dILy8vOEJBb3JQZzZQcCsvK2Q0L24vbmVQNS81M2orZitkNC9uL25lUDUvNTNqK2YrZDQvbi9uZVA1LzUzaitmK2Q0L24vbytuNy93S0t6NFAvLy84Qi8vLy9BUUtOMG9HbzdmMy9vdWY3LzZMbisvK2k1L3Yvb3VmNy82TG4rLytpNS92L291ZjcvNkxuKy8raTUvdi9vdWY3LzZqdC9mOENqZEtCLy8vL0FmLy8vd0VDajlaOXJ2UC8vNnZ3L3YrcjhQNy9xL0QrLzZ2dy92K3I4UDcvcS9EKy82dncvdityOFA3L3EvRCsvNnZ3L3YrdTgvLy9Bby9XZmYvLy93SC8vLzhCQXBIWlhRS1IyWHNDa2RsN0FwSFpld0tSMlhzQ2tkbDdBcEhaZS83Ky9mLzE5ZTcvNit2ZC8vN0pRZi8wdGk3L0FwSFpld0tSMlYzLy8vOEIvLy8vQWYvLy93SC8vLzhCLy8vL0FmLy8vd0gvLy84Qi8vLy9BUUtTMnlzQ2t0dDVBcExiZVFLUzIza0NrdHQ1QXBMYmVRS1MyeXYvLy84Qi8vLy9BZi8vL3dILy8vOEIvLy8vQWYvLy93SC8vLzhCLy8vL0FmLy8vd0gvLy84Qi8vLy9BZi8vL3dILy8vOEIvLy8vQWYvLy93SC8vLzhCLy8vL0FmLy8vd0gvLy84QkFBRC8vd0FBLy84QUFQLy9BQUQvL3dBQS8vOEFBUC8vQUFELy93QUEvLzhBQVAvL0FBRC8vd0FBLy84QUFQLy9BQUQvL3dBQS8vOEFBUC8vQUFELy93PT1cIik7XG4gICAgICB9XG4gICAgICAmOmFmdGVye1xuICAgICAgICBjb250ZW50OiBcIlwiOyBcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6LS45cmVtOyBcbiAgICAgICAgdG9wOi0uNXJlbTsgXG4gICAgICAgIGJvdHRvbTowO1xuICAgICAgICBtYXJnaW46IGF1dG8gLjI1cmVtIGF1dG8gLjI1cmVtO1xuICAgICAgICBib3JkZXItdG9wOiBkb3R0ZWQgYmxhY2sgLjFyZW07XG4gICAgICAgIHdpZHRoOiAuNzVyZW07XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmNvdW50IHtcbiAgZm9udC1zaXplOiAuN3JlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBkYXJrYmx1ZTtcbn1cbiIsInVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgY2xlYXI6IGxlZnQ7XG4gIG1hcmdpbjogMC4yNXJlbTtcbiAgcGFkZGluZzogMDtcbn1cbnVsLnRyZWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG51bC50cmVlOmJlZm9yZSB7XG4gIGxlZnQ6IDAuNXJlbTtcbn1cbnVsLnRyZWU6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxudWwgYXBwLW5vZGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDAuMjVyZW07XG4gIHJpZ2h0OiBhdXRvO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDEuNzVyZW07XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyLXJpZ2h0OiBkb3R0ZWQgYmxhY2sgMC4xcmVtO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxudWwgYXBwLW5vZGU6YWZ0ZXIge1xuICBjb250ZW50OiBcIi1cIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAzO1xuICB0b3A6IDA7XG4gIGxlZnQ6IC0wLjVyZW07XG4gIG1hcmdpbjogMC42NXJlbTtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDAuOHJlbTtcbiAgaGVpZ2h0OiAwLjhyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDAuODVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiBzb2xpZCBncmF5IDFweDtcbiAgYm9yZGVyLXJhZGl1czogMC4xcmVtO1xufVxudWwgPiBsaSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBjbGVhcjogYm90aDtcbiAgcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgd2lkdGg6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbnVsID4gbGk6bGFzdC1jaGlsZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDFyZW07XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogLTAuMjVyZW07XG4gIHdpZHRoOiAwLjc1cmVtO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxudWwgPiBsaSA+IGlucHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHotaW5kZXg6IDQ7XG4gIG1hcmdpbjogMCAwIDAgLTFyZW07XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxcmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxudWwgPiBsaSA+IGlucHV0OmNoZWNrZWQgfiBhcHAtbm9kZTpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxudWwgPiBsaSA+IGlucHV0OmNoZWNrZWQgfiBhcHAtbm9kZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiK1wiO1xufVxudWwgPiBsaSA+IGlucHV0OmNoZWNrZWQgfiBhcHAtbm9kZSAqIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbnVsID4gbGkgPiBpbnB1dDpjaGVja2VkIH4gc3Bhbi5mb2xkZXI6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS92bmQubWljcm9zb2Z0Lmljb247YmFzZTY0LEFBQUJBQUVBRUJBQUFBQUFJQUJvQkFBQUZnQUFBQ2dBQUFBUUFBQUFJQUFBQUFFQUlBQUFBQUFBUUFRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFELy8vOEIvLy8vQWYvLy93SC8vLzhCLy8vL0FmLy8vd0gvLy84Qi8vLy9BZi8vL3dILy8vOEIvLy8vQWYvLy93SC8vLzhCLy8vL0FmLy8vd0gvLy84QkFBQUFCd0FBQUJjQUFBQWJBQUFBR3dBQUFCc0FBQUFiQUFBQUd3QUFBQnNBQUFBYkFBQUFHd0FBQUJzQUFBQWJBQUFBR3dBQUFCc0FBQUFYQUFBQUJ3Tk1jSXNEWkpTM0EyU1V0d05rbExjRFpKUzNBMlNVdHdOa2xMY0RaSlMzQTJTVXR3TmtsTGNEWkpTM0EyU1V0d05rbExjRFpKUzNBMlNVdHdOTWNJc0RicVNwaHMvdy80TEw3ZitDeSszL2dzdnQvNExMN2YrQ3krMy9nc3Z0LzRMTDdmK0N5KzMvZ3N2dC80TEw3ZitDeSszL2dzdnQvNGJQOFA4RGJxU3BBM2kwbTRiUDd2OTl5T2ovZmNqby8zM0k2UDk5eU9qL2Zjam8vMzNJNlA5OXlPai9mY2pvLzMzSTZQOTl5T2ovZmNqby8zM0k2UCtHeis3L0EzaTBtd0o4dVplSzAvRC9nc3pyLzRMTTYvK0N6T3YvZ3N6ci80TE02LytDek92L2dzenIvNExNNi8rQ3pPdi9nc3pyLzRMTTYvK0N6T3YvaXRQdy93Sjh1WmNDZjc2VGo5ZnkvNGZRN2YrSDBPMy9oOUR0LzRmUTdmK0gwTzMvaDlEdC80ZlE3ZitIME8zL2g5RHQvNGZRN2YrSDBPMy9oOUR0LzQvWDh2OENmNzZUQW9MQ2o1VGI5UCtOMWZEL2pkWHcvNDNWOFArTjFmRC9qZFh3LzQzVjhQK04xZkQvamRYdy80M1Y4UCtOMWZEL2pkWHcvNDNWOFArVTIvVC9Bb0xDandLRng0dVo0UGIva3Ryei81TGE4LytTMnZQL2t0cnovNUxhOC8rUzJ2UC9rdHJ6LzVMYTgvK1MydlAva3Ryei81TGE4LytTMnZQL21lRDIvd0tGeDRzQ2lNdUhuK1g1LzVqZjl2K1kzL2IvbU4vMi81amY5ditZMy9iL21OLzIvNWpmOXYrWTMvYi9tTi8yLzVqZjl2K1kzL2IvbU4vMi81L2wrZjhDaU11SEFvclBnNlBwKy8rZDQvbi9uZVA1LzUzaitmK2Q0L24vbmVQNS81M2orZitqNmZyL28rbjYvNlBwK3YrajZmci9vK242LzZQcCt2K203UHYvQW9yUGd3S04wb0dvN2YzL291ZjcvNkxuKy8raTUvdi9vdWY3LzZMbisvK3I4UDMvak5EdC80SEY1LytCeGVmL2djWG4vNEhGNS8rQnhlZi9nY1huL3dLTjBvRUNqOVo5cnZQLy82dncvdityOFA3L3EvRCsvNnZ3L3YrdTgvLy9qOVB2LzQvVDcvK3I4UDcvcS9EKy82dncvdityOFA3L3EvRCsvNjd6Ly84Q2o5WjlBcEhaWFFLUjJYc0NrZGw3QXBIWmV3S1IyWHNDa2RsN0FwSFpld0tSMlh2Ky92My8rUGp6Ly9EdzV2L3A2ZHYvL3NsQi8vUzJMdjhDa2RsN0FwSFpYZi8vL3dILy8vOEIvLy8vQWYvLy93SC8vLzhCLy8vL0FmLy8vd0VDa3RzckFwTGJlUUtTMjNrQ2t0dDVBcExiZVFLUzIza0NrdHQ1QXBMYksvLy8vd0gvLy84Qi8vLy9BZi8vL3dILy8vOEIvLy8vQWYvLy93SC8vLzhCLy8vL0FmLy8vd0gvLy84Qi8vLy9BZi8vL3dILy8vOEIvLy8vQWYvLy93SC8vLzhCQUFELy93QUEvLzhBQVAvL0FBRC8vd0FBLy84QUFQLy9BQUQvL3dBQS8vOEFBUC8vQUFELy93QUEvLzhBQVAvL0FBRC8vd0FBLy84QUFQLy9BQUQvL3c9PVwiKTtcbn1cbnVsID4gbGkgPiBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHotaW5kZXg6IDM7XG4gIG1hcmdpbjogMC4yNXJlbTtcbiAgcGFkZGluZzogMC4yNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbnVsID4gbGkgPiBzcGFuLmZvbGRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAwLjI1cmVtIDAgMDtcbiAgd2lkdGg6IDFyZW07XG4gIGhlaWdodDogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDFyZW07XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZDogdXJsKFwiZGF0YTppbWFnZS92bmQubWljcm9zb2Z0Lmljb247YmFzZTY0LEFBQUJBQUVBRUJBQUFBQUFJQUJvQkFBQUZnQUFBQ2dBQUFBUUFBQUFJQUFBQUFFQUlBQUFBQUFBUUFRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFELy8vOEIvLy8vQWYvLy93SC8vLzhCLy8vL0FmLy8vd0gvLy84Qi8vLy9BZi8vL3dILy8vOEIvLy8vQWYvLy93SC8vLzhCLy8vL0FmLy8vd0gvLy84QkFBQUFCd0FBQUJjQUFBQWJBQUFBR3dBQUFCc0FBQUFiQUFBQUd3QUFBQnNBQUFBYkFBQUFHd0FBQUJzQUFBQWJBQUFBR3dBQUFCY0FBQUFQQUFBQUNRTk1jSXNEWkpTM0EyU1V0d05rbExjRFpKUzNBMlNVdHdOa2xMY0RaSlMzQTJTVXR3TmtsTGNEWkpTM0EyU1V0d05rbExjRFRIQ1RBQUFBSHdBQUFCRURicVNwYjhIbi80YlE3LytGeis3L2hjL3UvNFhQN3YrRnorNy9oYy91LzRYUDd2K0Z6KzcvaGMvdS80WFA3ditIMFBEL09wZkR5UUpjaWtYLy8vOEJBM2kwbTFlMTMvK04xdkgvaDlIdS80ZlI3ditIMGU3L2g5SHUvNGZSN3YrSDBlNy9oOUh1LzRmUjd2K0gwZTcvaU5IdS8zako2ZTBDZ0w5Ny8vLy9BUUo4dVpkR3Jkei9sOS8yLzVUYjlQK1UyL1QvbE52MC81VGI5UCtVMi9UL2xOdjAvNVRiOVArVTIvVC9sTnYwLzVUYjlQK2I0ZmovSnB2VG5RS0d5Q01DZjc2VFlMN24vNFhYOHYraDV2ci9vT1g2LzZEbCt2K2c1ZnIvb09YNi82TG8rditsNnZ2L3BlcjcvNlhxKy8rbDZ2di9wdXo3LzJ2SjY4a0NpczlWQW9MQ2ozM1A4UDlweCt6L3IvUC8vNjN4L3YrdDhmNy9yZkgrLzYzeC92K1k1ZmovU2JMai8wbXk0LzlKc3VQL1RiYmwvd0tLejhVQ2p0WjlBbzdXZlFLRng0dVczdmIvVHJqbi8wNjQ1LzlPdU9mL1Ryam4vMDY0NS85T3VPZi9UcmpuLzRIUjhQK1MydlAva3Ryei81bmc5djhDaGNlTC8vLy9BZi8vL3dFQ2lNdUhuK1g1LzVqZjl2K1kzL2IvbU4vMi81amY5ditZMy9iL21OLzIvNWpmOXYrWTMvYi9tTi8yLzVqZjl2K2Y1Zm4vQW9qTGgvLy8vd0gvLy84QkFvclBnNlBwKy8rZDQvbi9uZVA1LzUzaitmK2Q0L24vbmVQNS81M2orZitkNC9uL25lUDUvNTNqK2YrZDQvbi9vK243L3dLS3o0UC8vLzhCLy8vL0FRS04wb0dvN2YzL291ZjcvNkxuKy8raTUvdi9vdWY3LzZMbisvK2k1L3Yvb3VmNy82TG4rLytpNS92L291ZjcvNmp0L2Y4Q2pkS0IvLy8vQWYvLy93RUNqOVo5cnZQLy82dncvdityOFA3L3EvRCsvNnZ3L3YrcjhQNy9xL0QrLzZ2dy92K3I4UDcvcS9EKy82dncvdit1OC8vL0FvL1dmZi8vL3dILy8vOEJBcEhaWFFLUjJYc0NrZGw3QXBIWmV3S1IyWHNDa2RsN0FwSFplLzcrL2YvMTllNy82K3ZkLy83SlFmLzB0aTcvQXBIWmV3S1IyVjMvLy84Qi8vLy9BZi8vL3dILy8vOEIvLy8vQWYvLy93SC8vLzhCLy8vL0FRS1MyeXNDa3R0NUFwTGJlUUtTMjNrQ2t0dDVBcExiZVFLUzJ5di8vLzhCLy8vL0FmLy8vd0gvLy84Qi8vLy9BZi8vL3dILy8vOEIvLy8vQWYvLy93SC8vLzhCLy8vL0FmLy8vd0gvLy84Qi8vLy9BZi8vL3dILy8vOEIvLy8vQWYvLy93SC8vLzhCQUFELy93QUEvLzhBQVAvL0FBRC8vd0FBLy84QUFQLy9BQUQvL3dBQS8vOEFBUC8vQUFELy93QUEvLzhBQVAvL0FBRC8vd0FBLy84QUFQLy9BQUQvL3c9PVwiKTtcbn1cbnVsID4gbGkgPiBzcGFuOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTAuOXJlbTtcbiAgdG9wOiAtMC41cmVtO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0byAwLjI1cmVtIGF1dG8gMC4yNXJlbTtcbiAgYm9yZGVyLXRvcDogZG90dGVkIGJsYWNrIDAuMXJlbTtcbiAgd2lkdGg6IDAuNzVyZW07XG4gIGhlaWdodDogMDtcbn1cblxuLmNvdW50IHtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogZGFya2JsdWU7XG59Il19 */");

/***/ }),

/***/ "./src/app/node/node.component.ts":
/*!****************************************!*\
  !*** ./src/app/node/node.component.ts ***!
  \****************************************/
/*! exports provided: NodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeComponent", function() { return NodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _sort_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sort.service */ "./src/app/sort.service.ts");



let NodeComponent = class NodeComponent {
    constructor(sortService) {
        this.sortService = sortService;
    }
    ngOnInit() {
        this.sortService.sortItems(this.listItems);
    }
};
NodeComponent.ctorParameters = () => [
    { type: _sort_service__WEBPACK_IMPORTED_MODULE_2__["SortService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NodeComponent.prototype, "listItems", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NodeComponent.prototype, "root", void 0);
NodeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-node',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./node.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/node/node.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./node.component.scss */ "./src/app/node/node.component.scss")).default]
    })
], NodeComponent);



/***/ }),

/***/ "./src/app/sort.service.ts":
/*!*********************************!*\
  !*** ./src/app/sort.service.ts ***!
  \*********************************/
/*! exports provided: SortService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortService", function() { return SortService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SortService = class SortService {
    constructor() { }
    sortItems(items) {
        return items.sort((a, b) => {
            if (a.type === 'folder' && b.type === 'file') {
                return -1;
            }
            if (a.type === 'file' && b.type === 'folder') {
                return 1;
            }
            if (a.type === b.type) {
                return this.sortByName(a, b);
            }
        });
    }
    sortByName(a, b) {
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
};
SortService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SortService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/valeriy/Projects/file-system-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map