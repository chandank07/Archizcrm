(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/dialog-overview-example-dialog.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/dialog-overview-example-dialog.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Login Error.!</h1>\r\n<div mat-dialog-content>\r\n  <h4 style=\"color: red;\">Invalide Email or Pasword</h4>\r\n  <!-- <p>What's your favorite animal?</p> -->\r\n  <!-- <mat-form-field>\r\n    <input matInput tabindex=\"1\" [(ngModel)]=\"data.animal\">\r\n  </mat-form-field> -->\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button [mat-dialog-close]=\"data.animal\" tabindex=\"2\">Retry</button>\r\n  <!-- <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">No Thanks</button> -->\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"h-100\">\r\n\r\n       <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" fxFlex=\"80\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"60\">\r\n\r\n            <mat-card class=\"p-0 mat-elevation-z24 box\">\r\n                <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"bg-primary box-header\">\r\n                    <button mat-fab color=\"accent\" class=\"mat-elevation-z12\" (click)=\"onSubmit(form.value);\">\r\n                        <mat-icon>exit_to_app</mat-icon>\r\n                    </button>\r\n                    <a mat-button routerLink=\"/register\">Don't have an account? Sign up now!</a>\r\n                </div>\r\n                <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"end center\" class=\"box-content\">\r\n                    <mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"mat-elevation-z12 box-content-inner\">\r\n                        <span class=\"box-content-header\">member login</span>  \r\n                        <mat-form-field class=\"w-100\">\r\n                            <input matInput placeholder=\"Email\" formControlName=\"email\">\r\n                            <mat-error *ngIf=\"form.controls.email.errors?.required\">Email is required</mat-error>\r\n                            <mat-error *ngIf=\"form.controls.email.hasError('invalidEmail')\">Invalid email address</mat-error>\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"w-100\">\r\n                            <input matInput placeholder=\"Password\" formControlName=\"password\">\r\n                            <mat-error *ngIf=\"form.controls.password.errors?.required\">Password is required</mat-error>\r\n                            <mat-error *ngIf=\"form.controls.password.hasError('minlength')\">Password isn't long enough, minimum of 6 characters</mat-error>\r\n                        </mat-form-field> \r\n                    </mat-card>\r\n                    <button mat-raised-button color=\"primary\" class=\"mat-elevation-z12 box-button\" type=\"submit\" *ngIf=\"!Wating_button\">SIGN IN</button>\r\n                    <button mat-raised-button color=\"warn\" class=\"mat-elevation-z12 box-button\"  *ngIf=\"Wating_button\">Waitting..</button>\r\n                </mat-card-content>\r\n            </mat-card>\r\n            \r\n        </form>    \r\n  \r\n  </div>\r\n\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/pages/login/Services/login.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/login/Services/login.service.ts ***!
  \*******************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
        // url ="https://crmarchiz.herokuapp.com/login";
        // url = "https://crmosum.in/api/login/login"
        this.url = "https://newcrmapi.herokuapp.com/api/signin";
    }
    login_crm(userdata) {
        return this.http.post(this.url, userdata);
    }
};
LoginService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], LoginService);



/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent, DialogOverviewExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function() { return DialogOverviewExampleDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme/utils/app-validators */ "./src/app/theme/utils/app-validators.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _Services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Services/login.service */ "./src/app/pages/login/Services/login.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








let LoginComponent = class LoginComponent {
    constructor(appSettings, snackBar, loginservice, fb, dialog, router) {
        this.appSettings = appSettings;
        this.snackBar = snackBar;
        this.loginservice = loginservice;
        this.fb = fb;
        this.dialog = dialog;
        this.router = router;
        this.Wating_button = false;
        this.settings = this.appSettings.settings;
        this.form = this.fb.group({
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_3__["emailValidator"]])],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)])]
        });
    }
    onSubmit(values) {
        this.Wating_button = true;
        if (this.form.valid) {
            let userdata = ({
                email: this.form.value.email,
                password: this.form.value.password,
            });
            // const formData = new FormData();
            // formData.append('email', this.form.value.email);
            // formData.append('password', this.form.value.password);
            this.loginservice.login_crm(userdata).subscribe((res) => {
                this.users = res;
                console.log(this.users);
                if (this.users.token) {
                    localStorage.setItem('Token', this.users.token);
                    if (this.users.status == 200 && this.users.error == false) {
                        let message = "Login Successfull.!";
                        let action = "OK";
                        this.snackBar.open(message, action, {
                            duration: 2000,
                        });
                        this.Wating_button = false;
                        this.router.navigate(['/dashboard']);
                    }
                    else {
                    }
                }
                else {
                    // this.router.navigate(['/error']);
                    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
                        data: { name: this.name, animal: this.animal }
                    });
                    dialogRef.afterClosed().subscribe(result => {
                        console.log('The dialog was closed');
                        this.Wating_button = false;
                        this.animal = result;
                    });
                }
            });
        }
    }
    ngAfterViewInit() {
        this.settings.loadingSpinner = false;
    }
};
LoginComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html")
    }),
    __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
        _Services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], LoginComponent);

let DialogOverviewExampleDialog = class DialogOverviewExampleDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
        // this.Wating_button = false;
    }
};
DialogOverviewExampleDialog = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'dialog-overview-example-dialog',
        template: __webpack_require__(/*! raw-loader!./dialog-overview-example-dialog.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/dialog-overview-example-dialog.html"),
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"])),
    __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"], Object])
], DialogOverviewExampleDialog);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: routes, LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _Services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Services/login.service */ "./src/app/pages/login/Services/login.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








const routes = [
    { path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], pathMatch: 'full' }
];
let LoginModule = class LoginModule {
};
LoginModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ],
        declarations: [_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _login_component__WEBPACK_IMPORTED_MODULE_5__["DialogOverviewExampleDialog"]],
        entryComponents: [
            _login_component__WEBPACK_IMPORTED_MODULE_5__["DialogOverviewExampleDialog"],
        ],
        providers: [_Services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]]
    })
], LoginModule);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map