(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/profile.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\">\n  <div fxFlex=\"100\" fxFlex.sm=\"35\" fxFlex.md=\"30\" fxFlex.lg=\"25\" class=\"flex-p\">\n    <mat-card>\n      <img mat-card-image src=\"assets/img/users/user-orig.jpg\" alt=\"Photo 1\">\n      <mat-card-content>\n          <h2 class=\"text-center\">Emilio Verdines</h2>\n          <h3 class=\"text-center primary-color\">Web Developer</h3>\n          <h4 class=\"muted-text py-1\">About:</h4>\n          <p class=\"text-justify\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n          <div fxLayoutAlign=\"end center\">\n              <a href=\"javascript:void(0);\" mat-stroked-button color=\"primary\">\n                  More <mat-icon>arrow_right_alt</mat-icon>\n              </a> \n          </div>          \n      </mat-card-content>\n      <mat-divider></mat-divider>\n      <div class=\"py-1\">\n        <div fxLayoutAlign=\"space-between center\">\n          <div>Followers:</div>\n          <strong class=\"d-inline-block\">675</strong>\n        </div>\n        <div fxLayoutAlign=\"space-between center\" class=\"mt-2\">\n          <div>Following:</div>\n          <strong class=\"d-inline-block\">428</strong>\n        </div>\n        <div fxLayoutAlign=\"space-between center\" class=\"mt-2\">\n          <div>Projects:</div>\n          <strong class=\"d-inline-block\">27</strong>\n        </div>\n      </div>      \n      <mat-divider></mat-divider>\n\n      <mat-card-actions  class=\"text-center py-1\"> \n          <button mat-mini-fab color=\"primary\" class=\"m-1\">\n            <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\n                <path d=\"M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z\" />\n            </svg>\n          </button>\n          <button mat-mini-fab color=\"primary\" class=\"m-1\">\n            <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\n                <path d=\"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z\" />\n            </svg>\n          </button>\n          <button mat-mini-fab color=\"primary\" class=\"m-1\">\n            <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\n                <path d=\"M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z\" />\n            </svg>\n          </button>\n          <button mat-mini-fab color=\"primary\" class=\"m-1\">\n            <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\n                <path d=\"M23,11H21V9H19V11H17V13H19V15H21V13H23M8,11V13.4H12C11.8,14.4 10.8,16.4 8,16.4C5.6,16.4 3.7,14.4 3.7,12C3.7,9.6 5.6,7.6 8,7.6C9.4,7.6 10.3,8.2 10.8,8.7L12.7,6.9C11.5,5.7 9.9,5 8,5C4.1,5 1,8.1 1,12C1,15.9 4.1,19 8,19C12,19 14.7,16.2 14.7,12.2C14.7,11.7 14.7,11.4 14.6,11H8Z\" />\n            </svg>\n          </button>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n  <div fxFlex=\"100\" fxFlex.sm=\"65\" fxFlex.md=\"70\" fxFlex.lg=\"75\" class=\"flex-p\">\n      <router-outlet></router-outlet>    \n  </div> \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/projects/projects.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/projects/projects.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" class=\"projects-wrapper\">\n  <div *ngFor=\"let project of projects\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"flex-p\">\n      <mat-card>\n        <img mat-card-image [src]=\"project.image\" alt=\"\">\n        <mat-card-content>\n          <h2 class=\"text-center\">{{project.name}}</h2>\n          <p class=\"text-justify mt-2\">{{project.desc}}</p>\n        </mat-card-content>\n        <mat-divider></mat-divider>\n        <mat-card-actions fxLayoutAlign=\"space-between center\">\n          <div fxLayoutAlign=\"start center\">  \n            <button mat-icon-button><mat-icon class=\"muted-text\">share</mat-icon></button>\n            <button mat-icon-button><mat-icon class=\"muted-text\">favorite</mat-icon></button> \n            <span class=\"followers\">{{project.followers}}</span>          \n          </div>\n          <div>\n            <a href=\"javascript:void(0);\" mat-button  class=\"muted-text\">\n              Live Preview <mat-icon>insert_photo</mat-icon>\n            </a>\n          </div>          \n        </mat-card-actions>\n      </mat-card>\n  </div>\n</div> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/user-info/user-info.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/user-info/user-info.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">  \n    <div class=\"bg-primary text-center py-1\">       \n        <h2>Edit your data:</h2> \n    </div> \n    \n    <form [formGroup]=\"personalForm\" (ngSubmit)=\"onSubmit(personalForm.value)\" fxLayout=\"row wrap\" class=\"user-form p-1\">\n\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"20\" fxFlex.sm=\"50\" class=\"p-1\">\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Salutation</mat-label> \n                <mat-select placeholder=\"Select salutation\" formControlName=\"salutation\">\n                    <mat-option *ngFor=\"let salutation of salutations\" [value]=\"salutation\">\n                        {{salutation.name}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n        </div>\n\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"40\" fxFlex.sm=\"50\" class=\"p-1\">\n            <mat-form-field appearance=\"outline\">\n                <mat-label>First Name</mat-label>\n                <input matInput autocomplete=\"off\" placeholder=\"First Name\" formControlName=\"firstname\" type=\"text\">\n                <mat-error *ngIf=\"personalForm.controls.firstname.errors?.required\">First Name is required</mat-error>                \n            </mat-form-field> \n        </div>\n\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"40\" fxFlex.sm=\"50\" class=\"p-1\">\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Last Name</mat-label>\n                <input matInput autocomplete=\"off\" placeholder=\"Last Name\" formControlName=\"lastname\" type=\"text\">\n                <mat-error *ngIf=\"personalForm.controls.lastname.errors?.required\">Last Name is required</mat-error>                  \n            </mat-form-field> \n        </div>\n\n\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-1\">\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Gender</mat-label> \n                <mat-select placeholder=\"Select gender\" formControlName=\"gender\">\n                    <mat-option *ngFor=\"let gender of genders\" [value]=\"gender\">\n                        {{gender.name}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n        </div>\n\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-1\">\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Contact email</mat-label>\n                <input matInput autocomplete=\"off\" placeholder=\"Email\" formControlName=\"email\" type=\"text\"> \n                <mat-error *ngIf=\"personalForm.controls.email.errors?.required\">Email is required</mat-error>                 \n            </mat-form-field> \n        </div>\n\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-1\">\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Phone</mat-label>\n                <input matInput autocomplete=\"off\" placeholder=\"Phone\" formControlName=\"phone\" type=\"text\"> \n                <mat-error *ngIf=\"personalForm.controls.phone.errors?.required\">Phone is required</mat-error>                 \n            </mat-form-field> \n        </div>\n\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"20\" fxFlex.sm=\"50\" class=\"p-1\">\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Zip Code</mat-label>\n                <input matInput autocomplete=\"off\" placeholder=\"Zip Code\" formControlName=\"zipcode\" type=\"text\"> \n                <mat-error *ngIf=\"personalForm.controls.zipcode.errors?.required\">Zip Code is required</mat-error>                 \n            </mat-form-field> \n        </div>\n\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"40\" fxFlex.sm=\"50\" class=\"p-1\">\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Country</mat-label> \n                <mat-select placeholder=\"Select country\" formControlName=\"country\">\n                    <mat-option *ngFor=\"let country of countries\" [value]=\"country\">\n                        {{country.name}}\n                    </mat-option>\n                </mat-select>\n                <mat-error *ngIf=\"personalForm.controls.country.errors?.required\">Country is required</mat-error>\n            </mat-form-field>\n        </div>\n\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"40\" fxFlex.sm=\"50\" class=\"p-1\">\n            <mat-form-field appearance=\"outline\">\n                <mat-label>State</mat-label> \n                <mat-select placeholder=\"Select state\" formControlName=\"state\">\n                    <mat-option *ngFor=\"let state of states\" [value]=\"state\">\n                        {{state.name}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n        </div>\n\n        <div fxFlex=\"100\" class=\"p-1\">\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Address</mat-label> \n                <textarea matInput placeholder=\"Enter address\" formControlName=\"address\"></textarea> \n            </mat-form-field>\n        </div>\n\n        <div fxFlex=\"100\" class=\"p-1 text-center\">\n            <button mat-raised-button color=\"primary\" class=\"uppercase mx-1\" type=\"submit\">Update</button>             \n        </div>\n\n    </form> \n   \n</mat-card>\n "

/***/ }),

/***/ "./src/app/pages/profile/profile.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/profile/profile.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ProfileComponent = class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProfileComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/pages/profile/profile.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProfileComponent);



/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: routes, ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/pages/profile/projects/projects.component.ts");
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-info/user-info.component */ "./src/app/pages/profile/user-info/user-info.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








const routes = [
    {
        path: '',
        component: _profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
        children: [
            { path: '', redirectTo: 'projects', pathMatch: 'full' },
            { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"], data: { breadcrumb: 'Projects' } },
            { path: 'user-info', component: _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_7__["UserInfoComponent"], data: { breadcrumb: 'User Information' } }
        ]
    }
];
let ProfileModule = class ProfileModule {
};
ProfileModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [
            _profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
            _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"],
            _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_7__["UserInfoComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ]
    })
], ProfileModule);



/***/ }),

/***/ "./src/app/pages/profile/projects/projects.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/profile/projects/projects.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".projects-wrapper {\n  margin: -8px;\n}\n.projects-wrapper .followers {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9qZWN0cy9FOlxcb3VyQ1JNL3NyY1xcYXBwXFxwYWdlc1xccHJvZmlsZVxccHJvamVjdHNcXHByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKO0FEQUk7RUFDSSxlQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3RzLXdyYXBwZXJ7XHJcbiAgICBtYXJnaW46IC04cHg7XHJcbiAgICAuZm9sbG93ZXJze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxufSIsIi5wcm9qZWN0cy13cmFwcGVyIHtcbiAgbWFyZ2luOiAtOHB4O1xufVxuLnByb2plY3RzLXdyYXBwZXIgLmZvbGxvd2VycyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/profile/projects/projects.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/profile/projects/projects.component.ts ***!
  \**************************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ProjectsComponent = class ProjectsComponent {
    constructor() {
        this.projects = [
            { image: 'assets/img/projects/1.jpg', name: 'Project Name 1', desc: "Some quick example text to build on the card title and make up the bulk of the card's content.", followers: 10 },
            { image: 'assets/img/projects/2.jpg', name: 'Project Name 2', desc: "Some quick example text to build on the card title and make up the bulk of the card's content.", followers: 28 },
            { image: 'assets/img/projects/3.jpg', name: 'Project Name 3', desc: "Some quick example text to build on the card title and make up the bulk of the card's content.", followers: 15 },
            { image: 'assets/img/projects/4.jpg', name: 'Project Name 4', desc: "Some quick example text to build on the card title and make up the bulk of the card's content.", followers: 43 }
        ];
    }
    ngOnInit() {
    }
};
ProjectsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-projects',
        template: __webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/projects/projects.component.html"),
        styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/pages/profile/projects/projects.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProjectsComponent);



/***/ }),

/***/ "./src/app/pages/profile/user-info/user-info.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/profile/user-info/user-info.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-form .mat-form-field {\n  width: 100%;\n  margin-bottom: -1.34375em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS91c2VyLWluZm8vRTpcXG91ckNSTS9zcmNcXGFwcFxccGFnZXNcXHByb2ZpbGVcXHVzZXItaW5mb1xcdXNlci1pbmZvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9maWxlL3VzZXItaW5mby91c2VyLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvdXNlci1pbmZvL3VzZXItaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLWZvcm0gLm1hdC1mb3JtLWZpZWxke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMS4zNDM3NWVtO1xyXG59IiwiLnVzZXItZm9ybSAubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogLTEuMzQzNzVlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/profile/user-info/user-info.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/profile/user-info/user-info.component.ts ***!
  \****************************************************************/
/*! exports provided: UserInfoComponent, emailValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailValidator", function() { return emailValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let UserInfoComponent = class UserInfoComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.salutations = [
            { id: 1, name: 'Mr' },
            { id: 2, name: 'Mrs' }
        ];
        this.genders = [
            { id: 1, name: 'Male' },
            { id: 2, name: 'Female' }
        ];
        this.countries = [
            { id: 1, name: 'USA' },
            { id: 2, name: 'Canada' },
            { id: 3, name: 'Mexico' },
            { id: 4, name: 'UK' },
            { id: 5, name: 'France' },
            { id: 6, name: 'Italy' }
        ];
        this.states = [
            { id: 1, name: 'Arkansas' },
            { id: 2, name: 'Texas' },
            { id: 3, name: 'California' },
            { id: 4, name: 'Florida' },
            { id: 5, name: 'Other' }
        ];
    }
    ngOnInit() {
        this.personalForm = this.formBuilder.group({
            'salutation': [''],
            'firstname': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'lastname': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'gender': [''],
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, emailValidator])],
            'phone': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'zipcode': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'country': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'state': [''],
            'address': ['']
        });
    }
    onSubmit(values) {
        if (this.personalForm.valid) {
            // this.router.navigate(['pages/dashboard']);
        }
    }
};
UserInfoComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-user-info',
        template: __webpack_require__(/*! raw-loader!./user-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/user-info/user-info.component.html"),
        styles: [__webpack_require__(/*! ./user-info.component.scss */ "./src/app/pages/profile/user-info/user-info.component.scss")]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
], UserInfoComponent);

function emailValidator(control) {
    var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    if (control.value && !emailRegexp.test(control.value)) {
        return { invalidEmail: true };
    }
}


/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module-es2015.js.map