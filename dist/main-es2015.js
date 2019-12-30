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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app\" class=\"app\" [dir]=\"(settings.rtl) ? 'rtl' : 'ltr'\"\r\n            [ngClass]=\"settings.theme\" \r\n            [class.fixed-header]=\"settings.fixedHeader\"\r\n            [class.horizontal-menu]=\"settings.menu == 'horizontal'\" \r\n            [class.compact]=\"settings.menuType == 'compact'\" \r\n            [class.mini]=\"settings.menuType == 'mini'\" >\r\n    <router-outlet></router-outlet>\r\n    <div id=\"app-spinner\" [class.hide]=\"!settings.loadingSpinner\"> \r\n        <mat-spinner color=\"primary\"></mat-spinner>  \r\n        <h4>loading...</h4>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/blank/blank.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/blank/blank.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/pages.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/pages.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n    <mat-sidenav *ngIf=\"settings.menu == 'vertical'\" [opened]=\"settings.sidenavIsOpened\" [mode]=\"(settings.sidenavIsPinned) ? 'side' : 'over'\" #sidenav class=\"sidenav mat-elevation-z6\">\r\n        <app-sidenav></app-sidenav>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content id=\"main\" perfectScrollbar [disabled]=\"settings.fixedHeader\" (psScrollY)=\"onPsScrollY($event)\">\r\n        <mat-toolbar color=\"primary\" class=\"flex-p-x\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"w-100\">            \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"center center\">                    \r\n                    <button *ngIf=\"settings.menu == 'vertical'\" mat-icon-button (click)=\"toggleSidenav()\">\r\n                        <mat-icon>menu</mat-icon>\r\n                    </button> \r\n                    <button fxShow=\"false\" fxShow.gt-xs *ngIf=\"settings.menu == 'vertical'\" mat-icon-button (click)=\"settings.sidenavUserBlock = !settings.sidenavUserBlock\">\r\n                        <mat-icon>person</mat-icon>\r\n                    </button> \r\n                    <a *ngIf=\"settings.menu == 'horizontal'\" mat-raised-button color=\"accent\" routerLink=\"/\" (click)=\"closeSubMenus()\" class=\"small-logo\">G</a>\r\n                    <a *ngIf=\"settings.menu == 'horizontal'\" class=\"logo\" routerLink=\"/\" (click)=\"closeSubMenus()\">GRADUS</a>  \r\n                </div>            \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxShow=\"false\" fxShow.gt-xs class=\"search-bar\">\r\n                        <form method=\"get\">\r\n                            <input type=\"text\" placeholder=\"Type to search...\" class=\"mat-elevation-z3\"  [class.show]=\"toggleSearchBar\">\r\n                            <button mat-icon-button (click)=\"toggleSearchBar = !toggleSearchBar\" type=\"button\">\r\n                                <mat-icon>search</mat-icon>\r\n                            </button> \r\n                        </form>\r\n                    </div>                \r\n                    <app-flags-menu fxShow=\"false\" fxShow.gt-sm></app-flags-menu>\r\n                    <app-fullscreen></app-fullscreen> \r\n                    <app-applications fxShow=\"false\" fxShow.gt-sm></app-applications>\r\n                    <app-messages fxShow=\"false\" fxShow.gt-xs></app-messages>\r\n                    <app-user-menu></app-user-menu> \r\n                </div>\r\n            </div>\r\n        </mat-toolbar>\r\n\r\n        <mat-toolbar id=\"horizontal-menu\" color=\"primary\" *ngIf=\"settings.menu == 'horizontal'\" \r\n            class=\"horizontal-menu flex-p-x transition-2\"  \r\n            [class.fixed-top]=\"!settings.fixedHeader\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"w-100\">            \r\n                <app-horizontal-menu [menuParentId]=\"0\"></app-horizontal-menu>\r\n            </div>            \r\n        </mat-toolbar>\r\n\r\n        <div id=\"main-content\" class=\"inner-sidenav-content transition-2\" perfectScrollbar [disabled]=\"!settings.fixedHeader\" (psScrollY)=\"onPsScrollY($event)\"> \r\n            <app-breadcrumb></app-breadcrumb>\r\n            <router-outlet></router-outlet>    \r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"options-icon\" (click)=\"options.toggle()\">\r\n            <mat-icon>settings</mat-icon>\r\n        </div>\r\n\r\n        <div #backToTop fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"back-to-top\" (click)=\"scrollToTop()\">\r\n            <mat-icon>arrow_upward</mat-icon>\r\n        </div>\r\n\r\n    </mat-sidenav-content>\r\n    \r\n    <mat-sidenav #options position=\"end\" class=\"options\">        \r\n       \r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"control mat-elevation-z1\">\r\n            <h2>Settings</h2>\r\n        </div>  \r\n\r\n        <div perfectScrollbar>\r\n\r\n            <div fxLayout=\"column\" class=\"control\">\r\n                <h4>Layout</h4>        \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>Fixed header</span>\r\n                    <mat-slide-toggle [checked]=\"settings.fixedHeader\" (change)=\"settings.fixedHeader = !settings.fixedHeader\" labelPosition=\"before\"></mat-slide-toggle>\r\n                </div>                \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>RTL</span>\r\n                    <mat-slide-toggle [checked]=\"settings.rtl\" (change)=\"settings.rtl = !settings.rtl\" labelPosition=\"before\"></mat-slide-toggle>\r\n                </div>\r\n            </div>\r\n\r\n            <div fxLayout=\"column\" class=\"control\">\r\n                <h4>Choose menu</h4>\r\n                <mat-radio-group [(ngModel)]=\"menuOption\" (change)=\"chooseMenu()\">\r\n                    <mat-radio-button *ngFor=\"let menu of menus\" [value]=\"menu\">{{menu}}</mat-radio-button>\r\n                </mat-radio-group>\r\n            </div>\r\n\r\n            <div fxLayout=\"column\" class=\"control\">\r\n                <h4>Choose menu type</h4>\r\n                <mat-radio-group [(ngModel)]=\"menuTypeOption\" (change)=\"chooseMenuType()\">\r\n                    <mat-radio-button *ngFor=\"let menuType of menuTypes\" [value]=\"menuType\">{{menuType}}</mat-radio-button>\r\n                </mat-radio-group>\r\n            </div>\r\n\r\n            <div fxLayout=\"column\" class=\"control\">\r\n                <h4>Choose theme skin</h4>        \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\"> \r\n                    <div class=\"skin-primary indigo-light\" (click)=\"changeTheme('indigo-light')\"><div class=\"skin-secondary\"></div></div>  \r\n                    <div class=\"skin-primary teal-light\" (click)=\"changeTheme('teal-light')\"><div class=\"skin-secondary\"></div></div>  \r\n                    <div class=\"skin-primary red-light\" (click)=\"changeTheme('red-light')\"><div class=\"skin-secondary\"></div></div>  \r\n                    <div class=\"skin-primary blue-dark\" (click)=\"changeTheme('blue-dark')\"><div class=\"skin-secondary\"></div></div>  \r\n                    <div class=\"skin-primary green-dark\" (click)=\"changeTheme('green-dark')\"><div class=\"skin-secondary\"></div></div>  \r\n                    <div class=\"skin-primary pink-dark\" (click)=\"changeTheme('pink-dark')\"><div class=\"skin-secondary\"></div></div>  \r\n                </div>\r\n            </div>\r\n\r\n            <div fxLayout=\"column\" class=\"control\">\r\n                <h4>Sidenav options</h4>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>Opened sidenav</span>\r\n                    <mat-slide-toggle [checked]=\"settings.sidenavIsOpened\" (change)=\"settings.sidenavIsOpened = !settings.sidenavIsOpened\" labelPosition=\"before\"></mat-slide-toggle>\r\n                </div>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>Pinned sidenav</span>\r\n                    <mat-slide-toggle [checked]=\"settings.sidenavIsPinned\" (change)=\"settings.sidenavIsPinned = !settings.sidenavIsPinned\" labelPosition=\"before\"></mat-slide-toggle>\r\n                </div>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>Sidenav user info</span>\r\n                    <mat-slide-toggle [checked]=\"settings.sidenavUserBlock\" (change)=\"settings.sidenavUserBlock = !settings.sidenavUserBlock\" labelPosition=\"before\"></mat-slide-toggle>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </mat-sidenav>\r\n\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/search/search.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/search/search.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\">\r\n  <div fxFlex class=\"flex-p\"> <h4>Search results...</h4></div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/components/applications/applications.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/components/applications/applications.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button [matMenuTriggerFor]=\"appsMenu\" #appsMenuTrigger=\"matMenuTrigger\">\r\n    <mat-icon>apps</mat-icon>\r\n</button>\r\n<mat-menu #appsMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"toolbar-dropdown-menu applications\">\r\n    <span (mouseleave)=\"appsMenuTrigger.closeMenu()\">\r\n        <mat-toolbar color=\"primary\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"header\">\r\n               Applications \r\n            </div>  \r\n        </mat-toolbar>\r\n        <mat-card>           \r\n            <mat-grid-list cols=\"3\" rowHeight=\"1:1\">\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">person</mat-icon>\r\n                      <span>My account</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">search</mat-icon>\r\n                      <span>Search</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">play_arrow</mat-icon>\r\n                      <span>Player</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">settings</mat-icon>\r\n                      <span>Settings</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">event</mat-icon>\r\n                      <span>Calendar</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">image</mat-icon>\r\n                      <span>Gallery</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                 <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">library_books</mat-icon>\r\n                      <span>Documents</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">mail</mat-icon>\r\n                      <span>Mail</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">place</mat-icon>\r\n                      <span>Maps</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n            </mat-grid-list>\r\n        </mat-card>\r\n    </span>\r\n</mat-menu>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/components/breadcrumb/breadcrumb.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/components/breadcrumb/breadcrumb.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" *ngIf=\"router.url != '/'\">\r\n    <div fxFlex=\"100\" class=\"flex-p\">\r\n        <mat-card fxLayout=\"row\" class=\"breadcrumb\">\r\n            <a *ngIf=\"router.url != '/'\" routerLink=\"/\" class=\"breadcrumb-item\" fxLayout=\"row\" fxLayoutAlign=\"start center\" (click)=\"closeSubMenus()\">\r\n                <mat-icon>home</mat-icon>\r\n                <span class=\"breadcrumb-title\">Home</span>\r\n            </a>\r\n            <div *ngFor=\"let breadcrumb of breadcrumbs; let i = index;\" class=\"breadcrumb-item\" fxLayout=\"row\" fxLayoutAlign=\"start center\">                 \r\n                <a [hidden]=\"i == (breadcrumbs.length - 1)\" [routerLink]=\"[breadcrumb.url]\">{{breadcrumb.name}}</a>   \r\n                <span [hidden]=\"i != (breadcrumbs.length - 1)\" class=\"breadcrumb-title active\">{{breadcrumb.name}}</span>\r\n            </div> \r\n        </mat-card>\r\n    </div> \r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/components/flags-menu/flags-menu.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/components/flags-menu/flags-menu.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button [matMenuTriggerFor]=\"flagsMenu\" #flagsMenuTrigger=\"matMenuTrigger\">\r\n    <mat-icon>flag</mat-icon>\r\n</button>\r\n<!--<button mat-icon-button [matMenuTriggerFor]=\"flagsMenu\" #flagsMenuTrigger=\"matMenuTrigger\">\r\n    <img src=\"assets/img/flags/gb.svg\" width=\"20\" alt=\"english\"> \r\n</button>-->\r\n<mat-menu #flagsMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"toolbar-dropdown-menu flags\">\r\n    <span (mouseleave)=\"flagsMenuTrigger.closeMenu()\">      \r\n        <button mat-menu-item>\r\n            <img src=\"assets/img/flags/gb.svg\" width=\"20\" alt=\"english\"> \r\n            English\r\n        </button>\r\n        <button mat-menu-item>\r\n            <img src=\"assets/img/flags/de.svg\" width=\"20\" alt=\"german\"> \r\n            German\r\n        </button>\r\n        <button mat-menu-item>\r\n            <img src=\"assets/img/flags/fr.svg\" width=\"20\" alt=\"french\"> \r\n            French\r\n        </button>\r\n        <button mat-menu-item>\r\n            <img src=\"assets/img/flags/ru.svg\" width=\"20\" alt=\"russian\"> \r\n            Russian\r\n        </button>\r\n        <button mat-menu-item>\r\n            <img src=\"assets/img/flags/tr.svg\" width=\"20\" alt=\"turkish\"> \r\n            Turkish\r\n        </button>\r\n    </span>\r\n</mat-menu>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [fxLayout]=\"(menuParentId == 0) ? 'row' : 'column'\" fxLayoutAlign=\"start center\">\r\n    <div *ngFor=\"let menu of menuItems\" class=\"horizontal-menu-item w-100\">\r\n        <a *ngIf=\"menu.routerLink && !menu.hasSubMenu\" mat-button \r\n            fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n            [routerLink]=\"[menu.routerLink]\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:true}\"\r\n            [matTooltip]=\"menu.title\" matTooltipPosition=\"above\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n            [id]=\"'horizontal-menu-item-'+menu.id\">\r\n            <mat-icon class=\"horizontal-menu-icon\">{{menu.icon}}</mat-icon>\r\n            <span class=\"horizontal-menu-title\">{{menu.title}}</span>\r\n        </a>\r\n        <a *ngIf=\"menu.href && !menu.subMenu\" mat-button \r\n            fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n            [attr.href]=\"menu.href || ''\" [attr.target]=\"menu.target || ''\"\r\n            [matTooltip]=\"menu.title\" matTooltipPosition=\"above\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n            [id]=\"'horizontal-menu-item-'+menu.id\">\r\n            <mat-icon class=\"horizontal-menu-icon\">{{menu.icon}}</mat-icon>\r\n            <span class=\"horizontal-menu-title\">{{menu.title}}</span>\r\n        </a>\r\n        <a *ngIf=\"menu.hasSubMenu\" mat-button \r\n            fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n            [matTooltip]=\"menu.title\" matTooltipPosition=\"above\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n            [id]=\"'horizontal-menu-item-'+menu.id\">\r\n            <mat-icon class=\"horizontal-menu-icon\">{{menu.icon}}</mat-icon>\r\n            <span class=\"horizontal-menu-title\">{{menu.title}}</span>\r\n        </a>\r\n\r\n        <div *ngIf=\"menu.hasSubMenu\" class=\"horizontal-sub-menu\" [id]=\"'horizontal-sub-menu-'+menu.id\">\r\n            <app-horizontal-menu [menuParentId]=\"menu.id\"></app-horizontal-menu>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/components/menu/vertical-menu/vertical-menu.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/components/menu/vertical-menu/vertical-menu.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let menu of parentMenu\" class=\"menu-item\">\r\n    <a *ngIf=\"menu.routerLink && !menu.hasSubMenu\" mat-button \r\n        fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n        [routerLink]=\"[menu.routerLink]\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:true}\"\r\n        [matTooltip]=\"menu.title\" matTooltipPosition=\"after\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n        (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n        <mat-icon class=\"menu-icon\">{{menu.icon}}</mat-icon>\r\n        <span class=\"menu-title\">{{menu.title}}</span>\r\n    </a>\r\n    <a *ngIf=\"menu.href && !menu.subMenu\" mat-button \r\n        fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n        [attr.href]=\"menu.href || ''\" [attr.target]=\"menu.target || ''\"\r\n        [matTooltip]=\"menu.title\" matTooltipPosition=\"after\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n        (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n        <mat-icon class=\"menu-icon\">{{menu.icon}}</mat-icon>\r\n        <span class=\"menu-title\">{{menu.title}}</span>\r\n    </a>\r\n    <a *ngIf=\"menu.hasSubMenu\" mat-button \r\n        fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n        [matTooltip]=\"menu.title\" matTooltipPosition=\"after\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n        (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n        <mat-icon class=\"menu-icon\">{{menu.icon}}</mat-icon>\r\n        <span class=\"menu-title\">{{menu.title}}</span>\r\n        <mat-icon class=\"menu-expand-icon transition-2\">arrow_drop_down</mat-icon>\r\n    </a>\r\n\r\n    <div *ngIf=\"menu.hasSubMenu\" class=\"sub-menu\" [id]=\"'sub-menu-'+menu.id\">\r\n        <app-vertical-menu [menuItems]=\"menuItems\" [menuParentId]=\"menu.id\"></app-vertical-menu>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/components/messages/messages.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/components/messages/messages.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button [matMenuTriggerFor]=\"messagesMenu\" (click)=\"openMessagesMenu()\">\r\n    <mat-icon>notifications</mat-icon>\r\n</button>\r\n<mat-menu #messagesMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"toolbar-dropdown-menu messages\">\r\n    <!--<span (mouseleave)=\"onMouseLeave()\">-->\r\n        <mat-tab-group backgroundColor=\"primary\" (click)=\"stopClickPropagate($event)\" [selectedIndex]=\"selectedTab\">\r\n            <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                    <mat-icon>message</mat-icon>\r\n                </ng-template>\r\n                <mat-card class=\"content\" perfectScrollbar>\r\n                  <div fxLayout=\"column\" fxLayoutAlign=\"none\">\r\n                      <button mat-button *ngFor=\"let message of messages\">\r\n                          <img src=\"{{ ( message.image || (message.name | profilePicture)) }}\" width=\"50\">   \r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"none\" class=\"w-100\">\r\n                              <div fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n                                  <span class=\"name\">{{message.name}}</span>\r\n                                  <span class=\"info\"><mat-icon>access_time</mat-icon> {{message.time}}</span>\r\n                              </div>\r\n                              <span class=\"text muted-text\">{{message.text}}</span>\r\n                          </div>\r\n                      </button>\r\n                    </div>             \r\n                </mat-card>\r\n            </mat-tab>\r\n            <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                    <mat-icon>description</mat-icon>\r\n                </ng-template>\r\n                <mat-card class=\"content\" perfectScrollbar>\r\n                  <div fxLayout=\"column\" fxLayoutAlign=\"none\">\r\n                      <button mat-button *ngFor=\"let file of files\">\r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"none\" class=\"w-100\">\r\n                              <div fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n                                  <span class=\"name\">{{file.text}}</span>\r\n                                  <span class=\"info\">{{file.size}}</span>\r\n                              </div>\r\n                              <mat-progress-bar\r\n                                  class=\"example-margin\"\r\n                                  [color]=\"file.color\"\r\n                                  mode=\"indeterminate\"\r\n                                  [value]=\"file.value\">\r\n                              </mat-progress-bar>\r\n                          </div>\r\n                      </button>\r\n                    </div>             \r\n                </mat-card>\r\n            </mat-tab>\r\n            <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                    <mat-icon>event</mat-icon>\r\n                </ng-template>\r\n                <mat-card class=\"content\" perfectScrollbar>\r\n                  <div fxLayout=\"column\" fxLayoutAlign=\"none\">\r\n                      <button mat-button *ngFor=\"let meeting of meetings\">  \r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"row-1\">\r\n                              <span class=\"name\">{{meeting.day}}</span>\r\n                              <span class=\"name\">{{meeting.month}}</span>\r\n                          </div>\r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"none\">\r\n                              <span class=\"name\">{{meeting.title}}</span>\r\n                              <span class=\"text muted-text\">{{meeting.text}}</span>\r\n                          </div>\r\n                      </button>\r\n                    </div>             \r\n                </mat-card>\r\n            </mat-tab>\r\n        </mat-tab-group>\r\n    <!--</span>-->\r\n</mat-menu>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/components/sidenav/sidenav.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/components/sidenav/sidenav.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" [fxLayoutAlign]=\"(settings.menuType != 'mini') ? 'space-between center' : 'center center'\" class=\"sidenav-header\">\r\n    <a mat-raised-button color=\"accent\" routerLink=\"/\" (click)=\"closeSubMenus()\" class=\"small-logo\">G</a>\r\n    <a *ngIf=\"settings.menuType == 'default'\" class=\"logo\" routerLink=\"/\" (click)=\"closeSubMenus()\">GRADUS</a> \r\n    <svg *ngIf=\"settings.menuType != 'mini'\" class=\"pin\" (click)=\"settings.sidenavIsPinned = !settings.sidenavIsPinned\">\r\n        <path *ngIf=\"!settings.sidenavIsPinned\" d=\"M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z\" />\r\n        <path *ngIf=\"settings.sidenavIsPinned\" d=\"M2,5.27L3.28,4L20,20.72L18.73,22L12.8,16.07V22H11.2V16H6V14L8,12V11.27L2,5.27M16,12L18,14V16H17.82L8,6.18V4H7V2H17V4H16V12Z\" />\r\n    </svg>  \r\n</mat-toolbar>\r\n\r\n<div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"user-block transition-2\" [class.show]=\"settings.sidenavUserBlock\"> \r\n    <div [fxLayout]=\"(settings.menuType != 'default') ? 'column' : 'row'\" \r\n         [fxLayoutAlign]=\"(settings.menuType != 'default') ? 'center center' : 'space-around center'\" class=\"user-info-wrapper\">\r\n        <img [src]=\"userImage\" alt=\"user-image\">\r\n        <div class=\"user-info\">\r\n            <p class=\"name\">Emilio Verdines</p>\r\n            <p *ngIf=\"settings.menuType == 'default'\" class=\"position\">Web developer <br> <small class=\"muted-text\">Member since May. 2016</small></p>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"settings.menuType != 'mini'\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"w-100 muted-text\">\r\n        <button mat-icon-button><mat-icon>person_outline</mat-icon></button>\r\n        <a mat-icon-button routerLink=\"/mailbox\">\r\n            <mat-icon>mail_outline</mat-icon>\r\n        </a>\r\n        <a mat-icon-button routerLink=\"/login\">\r\n            <mat-icon>power_settings_new</mat-icon>\r\n        </a>\r\n    </div>\r\n</div>\r\n\r\n<perfect-scrollbar class=\"sidenav-menu-outer\" [class.user-block-show]=\"settings.sidenavUserBlock\">\r\n    <div id=\"vertical-menu\">\r\n        <app-vertical-menu [menuItems]=\"menuItems\" [menuParentId]=\"0\"></app-vertical-menu> \r\n    </div>   \r\n</perfect-scrollbar>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/components/user-menu/user-menu.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/components/user-menu/user-menu.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button [matMenuTriggerFor]=\"userMenu\" #userMenuTrigger=\"matMenuTrigger\" >\r\n    <mat-icon>account_circle</mat-icon>\r\n</button>\r\n\r\n<mat-menu #userMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"toolbar-dropdown-menu user-menu\">\r\n    <!--<span (mouseleave)=\"userMenuTrigger.closeMenu()\">-->\r\n        <mat-toolbar color=\"primary\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"user-info\">\r\n                <img [src]=\"userImage\" alt=\"user-image\" width=\"80\" class=\"rounded mat-elevation-z6\">\r\n                <p>Emilio Verdines <br> <small>Web developer</small></p>\r\n            </div>  \r\n        </mat-toolbar>\r\n        <a mat-menu-item routerLink=\"/profile/projects\"> \r\n            <mat-icon>person</mat-icon>\r\n            <span>Profile</span> \r\n        </a>\r\n        <a mat-menu-item routerLink=\"/profile/user-info\"> \r\n            <mat-icon>edit</mat-icon>\r\n            <span>Edit Profile</span> \r\n        </a>\r\n        <a mat-menu-item routerLink=\"settings\"> \r\n            <mat-icon>settings</mat-icon>\r\n            <span>Settings</span> \r\n        </a>\r\n        <a mat-menu-item routerLink=\"/\"> \r\n            <mat-icon>lock</mat-icon>\r\n            <span>Lock screen</span> \r\n        </a>\r\n        <a mat-menu-item routerLink=\"help\"> \r\n            <mat-icon>help</mat-icon>\r\n            <span>Help</span> \r\n        </a>\r\n        <div class=\"divider\"></div>\r\n        <a mat-menu-item routerLink=\"/login\"> \r\n            <mat-icon>power_settings_new</mat-icon>\r\n            <span>Log out</span> \r\n        </a>\r\n    <!--</span>-->\r\n</mat-menu>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n#app-spinner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  background: #fff;\n  z-index: 999999;\n  visibility: visible;\n  opacity: 1;\n  transition: visibility 0.5s, opacity 0.3s linear;\n}\n\n#app-spinner.hide {\n  visibility: hidden;\n  opacity: 0;\n}\n\n#app-spinner h4 {\n  margin-top: 10px;\n  letter-spacing: 0.02em;\n  opacity: 0;\n  text-transform: uppercase;\n  -webkit-animation: loading-text-opacity 2s linear 0s infinite normal;\n  animation: loading-text-opacity 2s linear 0s infinite normal;\n}\n\n@keyframes loading-text-opacity {\n  0% {\n    opacity: 0;\n  }\n  20% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes loading-text-opacity {\n  0% {\n    opacity: 0;\n  }\n  20% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXG91ckNSTS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTtFQUtJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBR0EsZ0RBQUE7QUNDSjs7QURBSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQ0VSOztBREFJO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUdBLG9FQUFBO0VBQ0EsNERBQUE7QUNFUjs7QURFQTtFQUNJO0lBQUssVUFBQTtFQ0VQO0VEREU7SUFBSyxVQUFBO0VDSVA7RURIRTtJQUFLLFVBQUE7RUNNUDtFRExFO0lBQUssVUFBQTtFQ1FQO0FBQ0Y7O0FEREE7RUFDSTtJQUFLLFVBQUE7RUNrQlA7RURqQkU7SUFBSyxVQUFBO0VDb0JQO0VEbkJFO0lBQUssVUFBQTtFQ3NCUDtFRHJCRTtJQUFLLFVBQUE7RUN3QlA7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDowO1xyXG4gICAgcmlnaHQ6MDtcclxuICAgIGJvdHRvbTowO1xyXG59XHJcblxyXG4jYXBwLXNwaW5uZXJ7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHotaW5kZXg6IDk5OTk5OTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuNXMsIG9wYWNpdHkgMC4zcyBsaW5lYXI7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IHZpc2liaWxpdHkgMC41cywgb3BhY2l0eSAwLjNzIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC41cywgb3BhY2l0eSAwLjNzIGxpbmVhcjtcclxuICAgICYuaGlkZXtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgb3BhY2l0eTogMDsgXHJcbiAgICB9XHJcbiAgICBoNHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIC1tb3otYW5pbWF0aW9uOiBsb2FkaW5nLXRleHQtb3BhY2l0eSAycyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xyXG4gICAgICAgIC1vLWFuaW1hdGlvbjogbG9hZGluZy10ZXh0LW9wYWNpdHkgMnMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZGluZy10ZXh0LW9wYWNpdHkgMnMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDtcclxuICAgICAgICBhbmltYXRpb246IGxvYWRpbmctdGV4dC1vcGFjaXR5IDJzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbG9hZGluZy10ZXh0LW9wYWNpdHkge1xyXG4gICAgMCUgIHtvcGFjaXR5OiAwfVxyXG4gICAgMjAlIHtvcGFjaXR5OiAwfVxyXG4gICAgNTAlIHtvcGFjaXR5OiAxfVxyXG4gICAgMTAwJXtvcGFjaXR5OiAwfVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBsb2FkaW5nLXRleHQtb3BhY2l0eSB7XHJcbiAgICAwJSAge29wYWNpdHk6IDB9XHJcbiAgICAyMCUge29wYWNpdHk6IDB9XHJcbiAgICA1MCUge29wYWNpdHk6IDF9XHJcbiAgICAxMDAle29wYWNpdHk6IDB9XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWRpbmctdGV4dC1vcGFjaXR5IHtcclxuICAgIDAlICB7b3BhY2l0eTogMH1cclxuICAgIDIwJSB7b3BhY2l0eTogMH1cclxuICAgIDUwJSB7b3BhY2l0eTogMX1cclxuICAgIDEwMCV7b3BhY2l0eTogMH1cclxufVxyXG5ALW8ta2V5ZnJhbWVzIGxvYWRpbmctdGV4dC1vcGFjaXR5IHtcclxuICAgIDAlICB7b3BhY2l0eTogMH1cclxuICAgIDIwJSB7b3BhY2l0eTogMH1cclxuICAgIDUwJSB7b3BhY2l0eTogMX1cclxuICAgIDEwMCV7b3BhY2l0eTogMH1cclxufVxyXG4iLCIuYXBwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG5cbiNhcHAtc3Bpbm5lciB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjVzLCBvcGFjaXR5IDAuM3MgbGluZWFyO1xuICAtbW96LXRyYW5zaXRpb246IHZpc2liaWxpdHkgMC41cywgb3BhY2l0eSAwLjNzIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjVzLCBvcGFjaXR5IDAuM3MgbGluZWFyO1xufVxuI2FwcC1zcGlubmVyLmhpZGUge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG59XG4jYXBwLXNwaW5uZXIgaDQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICBvcGFjaXR5OiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAtbW96LWFuaW1hdGlvbjogbG9hZGluZy10ZXh0LW9wYWNpdHkgMnMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDtcbiAgLW8tYW5pbWF0aW9uOiBsb2FkaW5nLXRleHQtb3BhY2l0eSAycyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZGluZy10ZXh0LW9wYWNpdHkgMnMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDtcbiAgYW5pbWF0aW9uOiBsb2FkaW5nLXRleHQtb3BhY2l0eSAycyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xufVxuXG5Aa2V5ZnJhbWVzIGxvYWRpbmctdGV4dC1vcGFjaXR5IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMjAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgbG9hZGluZy10ZXh0LW9wYWNpdHkge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAyMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkaW5nLXRleHQtb3BhY2l0eSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDIwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBsb2FkaW5nLXRleHQtb3BhY2l0eSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDIwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let AppComponent = class AppComponent {
    constructor(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() { }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
/* harmony import */ var _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme/utils/custom-overlay-container */ "./src/app/theme/utils/custom-overlay-container.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./theme/pipes/pipes.module */ "./src/app/theme/pipes/pipes.module.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _pages_blank_blank_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/blank/blank.component */ "./src/app/pages/blank/blank.component.ts");
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/search/search.component */ "./src/app/pages/search/search.component.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _theme_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./theme/components/sidenav/sidenav.component */ "./src/app/theme/components/sidenav/sidenav.component.ts");
/* harmony import */ var _theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./theme/components/menu/vertical-menu/vertical-menu.component */ "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.ts");
/* harmony import */ var _theme_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./theme/components/menu/horizontal-menu/horizontal-menu.component */ "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts");
/* harmony import */ var _theme_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./theme/components/breadcrumb/breadcrumb.component */ "./src/app/theme/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _theme_components_flags_menu_flags_menu_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./theme/components/flags-menu/flags-menu.component */ "./src/app/theme/components/flags-menu/flags-menu.component.ts");
/* harmony import */ var _theme_components_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./theme/components/fullscreen/fullscreen.component */ "./src/app/theme/components/fullscreen/fullscreen.component.ts");
/* harmony import */ var _theme_components_applications_applications_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./theme/components/applications/applications.component */ "./src/app/theme/components/applications/applications.component.ts");
/* harmony import */ var _theme_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./theme/components/messages/messages.component */ "./src/app/theme/components/messages/messages.component.ts");
/* harmony import */ var _theme_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./theme/components/user-menu/user-menu.component */ "./src/app/theme/components/user-menu/user-menu.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { AgmCoreModule } from '@agm/core';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    wheelPropagation: true,
    suppressScrollX: true
};









// import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
// import { ErrorComponent } from './pages/errors/error/error.component';











let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"],
            // AgmCoreModule.forRoot({
            //   apiKey: 'AIzaSyAAYi6itRZ0rPgI76O3I83BhhzZHIgMwPg'
            // }), 
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
            angular_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"].forRoot({
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"],
                useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__["adapterFactory"]
            }),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__["PipesModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_11__["routing"]
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
            _pages_pages_component__WEBPACK_IMPORTED_MODULE_13__["PagesComponent"],
            _pages_blank_blank_component__WEBPACK_IMPORTED_MODULE_14__["BlankComponent"],
            _pages_search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"],
            // NotFoundComponent,
            // ErrorComponent,
            _theme_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_17__["SidenavComponent"],
            _theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_18__["VerticalMenuComponent"],
            _theme_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_19__["HorizontalMenuComponent"],
            _theme_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_20__["BreadcrumbComponent"],
            _theme_components_flags_menu_flags_menu_component__WEBPACK_IMPORTED_MODULE_21__["FlagsMenuComponent"],
            _theme_components_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_22__["FullScreenComponent"],
            _theme_components_applications_applications_component__WEBPACK_IMPORTED_MODULE_23__["ApplicationsComponent"],
            _theme_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_24__["MessagesComponent"],
            _theme_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_25__["UserMenuComponent"]
        ],
        entryComponents: [
            _theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_18__["VerticalMenuComponent"]
        ],
        providers: [
            _app_settings__WEBPACK_IMPORTED_MODULE_16__["AppSettings"],
            { provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"], useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
            { provide: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayContainer"], useClass: _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_5__["CustomOverlayContainer"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/search/search.component */ "./src/app/pages/search/search.component.ts");



// import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
// import { ErrorComponent } from './pages/errors/error/error.component';
const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: '',
        component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_1__["PagesComponent"], children: [
            { path: 'dashboard', loadChildren: () => __webpack_require__.e(/*! import() | pages-dashboard-dashboard-module */ "pages-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./pages/dashboard/dashboard.module */ "./src/app/pages/dashboard/dashboard.module.ts")).then(m => m.DashboardModule), data: { breadcrumb: 'Dashboard' } },
            { path: 'users', loadChildren: () => Promise.all(/*! import() | pages-users-users-module */[__webpack_require__.e("default~pages-enquiry-enquiry-module~pages-users-users-module"), __webpack_require__.e("pages-users-users-module")]).then(__webpack_require__.bind(null, /*! ./pages/users/users.module */ "./src/app/pages/users/users.module.ts")).then(m => m.UsersModule), data: { breadcrumb: 'Users' } },
            { path: 'Lead', loadChildren: () => Promise.all(/*! import() | pages-enquiry-enquiry-module */[__webpack_require__.e("default~pages-enquiry-enquiry-module~pages-users-users-module"), __webpack_require__.e("pages-enquiry-enquiry-module")]).then(__webpack_require__.bind(null, /*! ./pages/enquiry/enquiry.module */ "./src/app/pages/enquiry/enquiry.module.ts")).then(m => m.EnquiryModule), data: { breadcrumb: 'Enquiry' } },
            // { path: 'form-controls', loadChildren: () => import('./pages/form-controls/form-controls.module').then(m => m.FormControlsModule), data: { breadcrumb: 'Form Controls' } },
            // { path: 'tables', loadChildren: () => import('./pages/tables/tables.module').then(m => m.TablesModule), data: { breadcrumb: 'Tables' } },
            // { path: 'icons', loadChildren: () => import('./pages/icons/icons.module').then(m => m.IconsModule), data: { breadcrumb: 'Material Icons' } },
            // { path: 'drag-drop', loadChildren: () => import('./pages/drag-drop/drag-drop.module').then(m => m.DragDropModule), data: { breadcrumb: 'Drag & Drop' } },
            // { path: 'schedule', loadChildren: () => import('./pages/schedule/schedule.module').then(m => m.ScheduleModule), data: { breadcrumb: 'Schedule' } },
            // { path: 'mailbox', loadChildren: () => import('./pages/mailbox/mailbox.module').then(m => m.MailboxModule), data: { breadcrumb: 'Mailbox' } },
            // { path: 'chat', loadChildren: () => import('./pages/chat/chat.module').then(m => m.ChatModule), data: { breadcrumb: 'Chat' } },
            // { path: 'maps', loadChildren: () => import('./pages/maps/maps.module').then(m => m.MapsModule), data: { breadcrumb: 'Maps' } },
            // { path: 'charts', loadChildren: () => import('./pages/charts/charts.module').then(m => m.ChartsModule), data: { breadcrumb: 'Charts' } },
            { path: 'dynamic-menu', loadChildren: () => __webpack_require__.e(/*! import() | pages-dynamic-menu-dynamic-menu-module */ "pages-dynamic-menu-dynamic-menu-module").then(__webpack_require__.bind(null, /*! ./pages/dynamic-menu/dynamic-menu.module */ "./src/app/pages/dynamic-menu/dynamic-menu.module.ts")).then(m => m.DynamicMenuModule), data: { breadcrumb: 'Dynamic Menu' } },
            { path: 'profile', loadChildren: () => __webpack_require__.e(/*! import() | pages-profile-profile-module */ "pages-profile-profile-module").then(__webpack_require__.bind(null, /*! ./pages/profile/profile.module */ "./src/app/pages/profile/profile.module.ts")).then(m => m.ProfileModule), data: { breadcrumb: 'Profile' } },
            // { path: 'blank', component: BlankComponent, data: { breadcrumb: 'Blank page' } },
            { path: 'search', component: _pages_search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"], data: { breadcrumb: 'Search' } }
        ]
    },
    // { path: 'landing', loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule) },
    { path: 'login', loadChildren: () => Promise.all(/*! import() | pages-login-login-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-login-login-module")]).then(__webpack_require__.bind(null, /*! ./pages/login/login.module */ "./src/app/pages/login/login.module.ts")).then(m => m.LoginModule) },
    { path: 'register', loadChildren: () => Promise.all(/*! import() | pages-register-register-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-register-register-module")]).then(__webpack_require__.bind(null, /*! ./pages/register/register.module */ "./src/app/pages/register/register.module.ts")).then(m => m.RegisterModule) },
];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
// preloadingStrategy: PreloadAllModules,  // <- uncomment this line for disable lazy load
// useHash: true
});


/***/ }),

/***/ "./src/app/app.settings.model.ts":
/*!***************************************!*\
  !*** ./src/app/app.settings.model.ts ***!
  \***************************************/
/*! exports provided: Settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
class Settings {
    constructor(name, loadingSpinner, fixedHeader, sidenavIsOpened, sidenavIsPinned, sidenavUserBlock, menu, menuType, theme, rtl) {
        this.name = name;
        this.loadingSpinner = loadingSpinner;
        this.fixedHeader = fixedHeader;
        this.sidenavIsOpened = sidenavIsOpened;
        this.sidenavIsPinned = sidenavIsPinned;
        this.sidenavUserBlock = sidenavUserBlock;
        this.menu = menu;
        this.menuType = menuType;
        this.theme = theme;
        this.rtl = rtl;
    }
}


/***/ }),

/***/ "./src/app/app.settings.ts":
/*!*********************************!*\
  !*** ./src/app/app.settings.ts ***!
  \*********************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_settings_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.settings.model */ "./src/app/app.settings.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let AppSettings = class AppSettings {
    constructor() {
        this.settings = new _app_settings_model__WEBPACK_IMPORTED_MODULE_1__["Settings"]('Gradus', //theme name
        true, //loadingSpinner
        true, //fixedHeader
        true, //sidenavIsOpened
        true, //sidenavIsPinned  
        true, //sidenavUserBlock 
        'horizontal', //horizontal , vertical
        'default', //default, compact, mini
        'indigo-light', //indigo-light, teal-light, red-light, blue-dark, green-dark, pink-dark
        false // true = rtl, false = ltr
        );
    }
};
AppSettings = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
], AppSettings);



/***/ }),

/***/ "./src/app/pages/blank/blank.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/blank/blank.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JsYW5rL2JsYW5rLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/blank/blank.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/blank/blank.component.ts ***!
  \************************************************/
/*! exports provided: BlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankComponent", function() { return BlankComponent; });
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

let BlankComponent = class BlankComponent {
    constructor() { }
    ngOnInit() {
    }
};
BlankComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-blank',
        template: __webpack_require__(/*! raw-loader!./blank.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/blank/blank.component.html"),
        styles: [__webpack_require__(/*! ./blank.component.css */ "./src/app/pages/blank/blank.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BlankComponent);



/***/ }),

/***/ "./src/app/pages/pages.component.scss":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav {\n  width: 250px;\n  overflow: hidden;\n  border: none !important;\n}\n\n.horizontal-menu {\n  padding: 0;\n  position: relative;\n  z-index: 9;\n  height: 0;\n}\n\n.horizontal-menu.sticky {\n  height: 0;\n  min-height: 0;\n  overflow: hidden;\n}\n\n.horizontal-menu.sticky.fixed-top {\n  position: fixed;\n  top: 0;\n  height: 56px;\n  overflow: visible;\n}\n\n.inner-sidenav-content {\n  position: absolute;\n  top: 56px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 8px;\n  min-height: calc(100% - (56px + 8px*2));\n}\n\n.options {\n  position: fixed;\n  width: 250px;\n  overflow: hidden;\n}\n\n.options .control {\n  padding: 6px 14px;\n}\n\n.options .control div {\n  padding: 6px 0;\n}\n\n.options .control h4 {\n  border-bottom: 1px solid #ccc;\n  margin: 12px 0 6px 0;\n}\n\n.options .control .skin-primary {\n  width: 32px;\n  height: 32px;\n  padding: 0;\n  overflow: hidden;\n  cursor: pointer;\n}\n\n.options .control .skin-primary .skin-secondary {\n  width: 0;\n  height: 0;\n  padding: 0;\n  border-bottom: 32px solid;\n  border-left: 32px solid transparent;\n}\n\n.options .control .skin-primary.indigo-light {\n  background-color: #3F51B5;\n  border: 1px solid #3F51B5;\n}\n\n.options .control .skin-primary.indigo-light .skin-secondary {\n  border-bottom-color: #ececec;\n}\n\n.options .control .skin-primary.teal-light {\n  background-color: #009688;\n  border: 1px solid #009688;\n}\n\n.options .control .skin-primary.teal-light .skin-secondary {\n  border-bottom-color: #ececec;\n}\n\n.options .control .skin-primary.red-light {\n  background-color: #F44336;\n  border: 1px solid #F44336;\n}\n\n.options .control .skin-primary.red-light .skin-secondary {\n  border-bottom-color: #ececec;\n}\n\n.options .control .skin-primary.blue-dark {\n  background-color: #0277bd;\n  border: 1px solid #0277bd;\n}\n\n.options .control .skin-primary.blue-dark .skin-secondary {\n  border-bottom-color: #262626;\n}\n\n.options .control .skin-primary.green-dark {\n  background-color: #388E3C;\n  border: 1px solid #388E3C;\n}\n\n.options .control .skin-primary.green-dark .skin-secondary {\n  border-bottom-color: #262626;\n}\n\n.options .control .skin-primary.pink-dark {\n  background-color: #D81B60;\n  border: 1px solid #D81B60;\n}\n\n.options .control .skin-primary.pink-dark .skin-secondary {\n  border-bottom-color: #262626;\n}\n\n.options .mat-radio-group {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.options .mat-radio-group .mat-radio-button {\n  margin: 2px 0;\n}\n\n.options .mat-slide-toggle {\n  height: auto;\n}\n\n.options .ps {\n  height: calc(100% - 48px);\n}\n\n.op-image {\n  box-shadow: 0 0 2px #ccc;\n  border: 2px solid;\n  border-color: transparent;\n  cursor: pointer;\n  transition: 0.2s;\n}\n\n.options-icon {\n  position: fixed;\n  top: 110px;\n  right: 0;\n  width: 40px;\n  height: 40px;\n  background: rgba(0, 0, 0, 0.7);\n  color: #fff;\n  cursor: pointer;\n  z-index: 999999;\n}\n\n.options-icon .mat-icon {\n  -webkit-animation: spin 8s linear infinite;\n  animation: spin 8s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.back-to-top {\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  z-index: 999999;\n  right: 20px;\n  bottom: 20px;\n  opacity: 0.5;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.75);\n  border-radius: 4px;\n}\n\n.back-to-top:hover {\n  opacity: 0.9;\n}\n\n.search-bar form input {\n  height: 28px;\n  border: none;\n  padding: 0;\n  border-radius: 15px;\n  outline: none;\n  color: #444;\n  width: 0;\n  overflow: hidden;\n  transition: 0.3s;\n}\n\n.search-bar form input.show {\n  padding: 0 8px;\n  width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvRTpcXG91ckNSTS9zcmNcXGFwcFxccGFnZXNcXHBhZ2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9FOlxcb3VyQ1JNL3NyY1xcYXBwXFx0aGVtZVxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUNFWTtFRERaLGdCQUFBO0VBQ0EsdUJBQUE7QUVESjs7QUZHQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FFQUo7O0FGQ0k7RUFDSSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FFQ1I7O0FGQVE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFlDakJLO0VEa0JMLGlCQUFBO0FFRVo7O0FGR0E7RUFDRSxrQkFBQTtFQUNBLFNDekJlO0VEMEJmLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlDdEJjO0VEdUJkLHVDQUFBO0FFQUY7O0FGR0E7RUFDSSxlQUFBO0VBQ0EsWUNoQ1k7RURpQ1osZ0JBQUE7QUVBSjs7QUZDSTtFQUNJLGlCQUFBO0FFQ1I7O0FGQVE7RUFDSSxjQUFBO0FFRVo7O0FGQVE7RUFDSSw2QkFBQTtFQUNBLG9CQUFBO0FFRVo7O0FGQVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUVFWjs7QUZEWTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUNBQUE7QUVHaEI7O0FGRFk7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FFR2hCOztBRkZnQjtFQUNJLDRCQUFBO0FFSXBCOztBRkRZO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtBRUdoQjs7QUZGZ0I7RUFDSSw0QkFBQTtBRUlwQjs7QUZEWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUVHaEI7O0FGRmdCO0VBQ0ksNEJBQUE7QUVJcEI7O0FGRFk7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FFR2hCOztBRkZnQjtFQUNJLDRCQUFBO0FFSXBCOztBRkRZO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtBRUdoQjs7QUZGZ0I7RUFDSSw0QkFBQTtBRUlwQjs7QUZEWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUVHaEI7O0FGRmdCO0VBQ0ksNEJBQUE7QUVJcEI7O0FGQ0k7RUFDSSxvQkFBQTtFQUNBLHNCQUFBO0FFQ1I7O0FGQVE7RUFDSSxhQUFBO0FFRVo7O0FGQ0k7RUFDSSxZQUFBO0FFQ1I7O0FGQ0k7RUFDSSx5QkFBQTtBRUNSOztBRkVBO0VBQ0ksd0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FFQ0o7O0FGQ0E7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FFRUo7O0FGREk7RUFDSSwwQ0FBQTtFQUVBLGtDQUFBO0FFR1I7O0FGTUE7RUFDSTtJQUNJLGlDQUFBO0VFRU47QUFDRjs7QUZBQTtFQUNJO0lBQ0ksaUNBQUE7WUFBQSx5QkFBQTtFRUVOO0FBQ0Y7O0FGQ0E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0FFQ0o7O0FGQUk7RUFDSSxZQUFBO0FFRVI7O0FGS1E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUVGWjs7QUZHWTtFQUNHLGNBQUE7RUFDQSxZQUFBO0FFRGYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi90aGVtZS9zdHlsZXMvdmFyaWFibGVzXCI7XHJcblxyXG4uc2lkZW5hdntcclxuICAgIHdpZHRoOiAkc2lkZW5hdi13aWR0aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47IFxyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7ICBcclxufVxyXG4uaG9yaXpvbnRhbC1tZW51e1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDk7ICAgIFxyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgJi5zdGlja3l7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAmLmZpeGVkLXRvcHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogJGhvcml6b250YWwtbWVudS1oZWlnaHQ7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmlubmVyLXNpZGVuYXYtY29udGVudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDokdG9vbGJhci1oZWlnaHQ7XHJcbiAgYm90dG9tOjA7XHJcbiAgbGVmdDowO1xyXG4gIHJpZ2h0OjA7ICBcclxuICBwYWRkaW5nOiAkaW5uZXItc2lkZW5hdi1jb250ZW50LXBhZGRpbmc7XHJcbiAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gKCN7JHRvb2xiYXItaGVpZ2h0fSArICN7JGlubmVyLXNpZGVuYXYtY29udGVudC1wYWRkaW5nfSoyKSk7XHJcbn1cclxuXHJcbi5vcHRpb25ze1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6ICRzaWRlbmF2LXdpZHRoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC5jb250cm9se1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCAxNHB4O1xyXG4gICAgICAgIGRpdntcclxuICAgICAgICAgICAgcGFkZGluZzogNnB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg0e1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgICAgbWFyZ2luOiAxMnB4IDAgNnB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5za2luLXByaW1hcnl7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgIFxyXG4gICAgICAgICAgICAuc2tpbi1zZWNvbmRhcnl7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMDsgXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7IFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDMycHggc29saWQ7IFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDMycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5pbmRpZ28tbGlnaHR7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y1MUI1O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzNGNTFCNTtcclxuICAgICAgICAgICAgICAgIC5za2luLXNlY29uZGFyeXtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZWNlY2VjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYudGVhbC1saWdodHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA5Njg4O1xyXG4gICAgICAgICAgICAgICAgLnNraW4tc2Vjb25kYXJ5e1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNlY2VjZWM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5yZWQtbGlnaHR7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjQ0MzM2O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0Y0NDMzNjtcclxuICAgICAgICAgICAgICAgIC5za2luLXNlY29uZGFyeXtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZWNlY2VjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuYmx1ZS1kYXJre1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAyNzdiZDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMjc3YmQ7XHJcbiAgICAgICAgICAgICAgICAuc2tpbi1zZWNvbmRhcnl7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzI2MjYyNjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmdyZWVuLWRhcmt7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg4RTNDO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzM4OEUzQztcclxuICAgICAgICAgICAgICAgIC5za2luLXNlY29uZGFyeXtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMjYyNjI2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYucGluay1kYXJre1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Q4MUI2MDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEODFCNjA7XHJcbiAgICAgICAgICAgICAgICAuc2tpbi1zZWNvbmRhcnl7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzI2MjYyNjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tYXQtcmFkaW8tZ3JvdXB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAubWF0LXJhZGlvLWJ1dHRvbntcclxuICAgICAgICAgICAgbWFyZ2luOiAycHggMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubWF0LXNsaWRlLXRvZ2dsZXtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICAucHN7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0OHB4KTtcclxuICAgIH1cclxufVxyXG4ub3AtaW1hZ2V7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMnB4ICNjY2M7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG59XHJcbi5vcHRpb25zLWljb257XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDExMHB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjcpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB6LWluZGV4OiA5OTk5OTk7XHJcbiAgICAubWF0LWljb257XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gOHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgIC1tb3otYW5pbWF0aW9uOiBzcGluIDhzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICBhbmltYXRpb246IHNwaW4gOHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5ALW1vei1rZXlmcmFtZXMgc3BpbiB7IFxyXG4gICAgMTAwJSB7IFxyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgXHJcbiAgICB9IFxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHsgXHJcbiAgICAxMDAlIHsgXHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyBcclxuICAgIH0gXHJcbn1cclxuQGtleWZyYW1lcyBzcGluIHsgXHJcbiAgICAxMDAlIHsgXHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuLmJhY2stdG8tdG9we1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB6LWluZGV4OiA5OTk5OTk7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIGJvdHRvbTogMjBweDtcclxuICAgIG9wYWNpdHk6IC41O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC43NSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7ICAgIFxyXG4gICAgJjpob3ZlcntcclxuICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG5cclxuLnNlYXJjaC1iYXJ7XHJcbiAgICBmb3Jte1xyXG4gICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6ICM0NDQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgICAgICAmLnNob3d7XHJcbiAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgOHB4O1xyXG4gICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiIsIiRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcblxyXG4kdG9vbGJhci1oZWlnaHQ6IDU2cHg7IFxyXG4kaG9yaXpvbnRhbC1tZW51LWhlaWdodDogJHRvb2xiYXItaGVpZ2h0O1xyXG5cclxuJHNpZGVuYXYtd2lkdGg6IDI1MHB4O1xyXG4kc2lkZW5hdi11c2VyLWJsb2NrLWhlaWdodDogMTU2cHg7XHJcbiRtaW5pLXNpZGVuYXYtdXNlci1ibG9jay1oZWlnaHQ6IDcwcHg7XHJcblxyXG4kZmxleC1kaXN0YW5jZTogOHB4O1xyXG4kaW5uZXItc2lkZW5hdi1jb250ZW50LXBhZGRpbmc6ICRmbGV4LWRpc3RhbmNlO1xyXG5cclxuLy9Mb2dpbiwgUmVnaXN0ZXIsIEVycm9ycyBib3hcclxuJGJveC1oZWlnaHQ6IDE4NnB4O1xyXG4kYm94LXBvc2l0aW9uOiAzNHB4O1xyXG4kcmVnaXN0ZXItYm94LWhlaWdodDogMzAwcHg7IiwiLnNpZGVuYXYge1xuICB3aWR0aDogMjUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaG9yaXpvbnRhbC1tZW51IHtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5O1xuICBoZWlnaHQ6IDA7XG59XG4uaG9yaXpvbnRhbC1tZW51LnN0aWNreSB7XG4gIGhlaWdodDogMDtcbiAgbWluLWhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5ob3Jpem9udGFsLW1lbnUuc3RpY2t5LmZpeGVkLXRvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDU2cHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4uaW5uZXItc2lkZW5hdi1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDU2cHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gKDU2cHggKyA4cHgqMikpO1xufVxuXG4ub3B0aW9ucyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDI1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm9wdGlvbnMgLmNvbnRyb2wge1xuICBwYWRkaW5nOiA2cHggMTRweDtcbn1cbi5vcHRpb25zIC5jb250cm9sIGRpdiB7XG4gIHBhZGRpbmc6IDZweCAwO1xufVxuLm9wdGlvbnMgLmNvbnRyb2wgaDQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgbWFyZ2luOiAxMnB4IDAgNnB4IDA7XG59XG4ub3B0aW9ucyAuY29udHJvbCAuc2tpbi1wcmltYXJ5IHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm9wdGlvbnMgLmNvbnRyb2wgLnNraW4tcHJpbWFyeSAuc2tpbi1zZWNvbmRhcnkge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItYm90dG9tOiAzMnB4IHNvbGlkO1xuICBib3JkZXItbGVmdDogMzJweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5vcHRpb25zIC5jb250cm9sIC5za2luLXByaW1hcnkuaW5kaWdvLWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNGNTFCNTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNGNTFCNTtcbn1cbi5vcHRpb25zIC5jb250cm9sIC5za2luLXByaW1hcnkuaW5kaWdvLWxpZ2h0IC5za2luLXNlY29uZGFyeSB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNlY2VjZWM7XG59XG4ub3B0aW9ucyAuY29udHJvbCAuc2tpbi1wcmltYXJ5LnRlYWwtbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA5Njg4O1xufVxuLm9wdGlvbnMgLmNvbnRyb2wgLnNraW4tcHJpbWFyeS50ZWFsLWxpZ2h0IC5za2luLXNlY29uZGFyeSB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNlY2VjZWM7XG59XG4ub3B0aW9ucyAuY29udHJvbCAuc2tpbi1wcmltYXJ5LnJlZC1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNDQzMzY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGNDQzMzY7XG59XG4ub3B0aW9ucyAuY29udHJvbCAuc2tpbi1wcmltYXJ5LnJlZC1saWdodCAuc2tpbi1zZWNvbmRhcnkge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZWNlY2VjO1xufVxuLm9wdGlvbnMgLmNvbnRyb2wgLnNraW4tcHJpbWFyeS5ibHVlLWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI3N2JkO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDI3N2JkO1xufVxuLm9wdGlvbnMgLmNvbnRyb2wgLnNraW4tcHJpbWFyeS5ibHVlLWRhcmsgLnNraW4tc2Vjb25kYXJ5IHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzI2MjYyNjtcbn1cbi5vcHRpb25zIC5jb250cm9sIC5za2luLXByaW1hcnkuZ3JlZW4tZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODhFM0M7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzODhFM0M7XG59XG4ub3B0aW9ucyAuY29udHJvbCAuc2tpbi1wcmltYXJ5LmdyZWVuLWRhcmsgLnNraW4tc2Vjb25kYXJ5IHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzI2MjYyNjtcbn1cbi5vcHRpb25zIC5jb250cm9sIC5za2luLXByaW1hcnkucGluay1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q4MUI2MDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q4MUI2MDtcbn1cbi5vcHRpb25zIC5jb250cm9sIC5za2luLXByaW1hcnkucGluay1kYXJrIC5za2luLXNlY29uZGFyeSB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMyNjI2MjY7XG59XG4ub3B0aW9ucyAubWF0LXJhZGlvLWdyb3VwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ub3B0aW9ucyAubWF0LXJhZGlvLWdyb3VwIC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luOiAycHggMDtcbn1cbi5vcHRpb25zIC5tYXQtc2xpZGUtdG9nZ2xlIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLm9wdGlvbnMgLnBzIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0OHB4KTtcbn1cblxuLm9wLWltYWdlIHtcbiAgYm94LXNoYWRvdzogMCAwIDJweCAjY2NjO1xuICBib3JkZXI6IDJweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4ub3B0aW9ucy1pY29uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDExMHB4O1xuICByaWdodDogMDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiA5OTk5OTk7XG59XG4ub3B0aW9ucy1pY29uIC5tYXQtaWNvbiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDhzIGxpbmVhciBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IHNwaW4gOHMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb246IHNwaW4gOHMgbGluZWFyIGluZmluaXRlO1xufVxuXG5ALW1vei1rZXlmcmFtZXMgc3BpbiB7XG4gIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi5iYWNrLXRvLXRvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIHJpZ2h0OiAyMHB4O1xuICBib3R0b206IDIwcHg7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5iYWNrLXRvLXRvcDpob3ZlciB7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLnNlYXJjaC1iYXIgZm9ybSBpbnB1dCB7XG4gIGhlaWdodDogMjhweDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogIzQ0NDtcbiAgd2lkdGg6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG4uc2VhcmNoLWJhciBmb3JtIGlucHV0LnNob3cge1xuICBwYWRkaW5nOiAwIDhweDtcbiAgd2lkdGg6IDI1MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/components/menu/menu.service */ "./src/app/theme/components/menu/menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let PagesComponent = class PagesComponent {
    constructor(appSettings, router, menuService) {
        this.appSettings = appSettings;
        this.router = router;
        this.menuService = menuService;
        this.menus = ['vertical', 'horizontal'];
        this.menuTypes = ['default', 'compact', 'mini'];
        this.lastScrollTop = 0;
        this.showBackToTop = false;
        this.toggleSearchBar = false;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        if (window.innerWidth <= 768) {
            this.settings.menu = 'vertical';
            this.settings.sidenavIsOpened = false;
            this.settings.sidenavIsPinned = false;
        }
        this.menuOption = this.settings.menu;
        this.menuTypeOption = this.settings.menuType;
        this.defaultMenu = this.settings.menu;
    }
    ngAfterViewInit() {
        setTimeout(() => { this.settings.loadingSpinner = false; }, 300);
        this.backToTop.nativeElement.style.display = 'none';
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                if (!this.settings.sidenavIsPinned) {
                    this.sidenav.close();
                }
                if (window.innerWidth <= 768) {
                    this.sidenav.close();
                }
            }
        });
        if (this.settings.menu == "vertical")
            this.menuService.expandActiveSubMenu(this.menuService.getVerticalMenuItems());
    }
    chooseMenu() {
        this.settings.menu = this.menuOption;
        this.defaultMenu = this.menuOption;
        this.router.navigate(['/']);
    }
    chooseMenuType() {
        this.settings.menuType = this.menuTypeOption;
    }
    changeTheme(theme) {
        this.settings.theme = theme;
    }
    toggleSidenav() {
        this.sidenav.toggle();
    }
    onPsScrollY(event) {
        (event.target.scrollTop > 300) ? this.backToTop.nativeElement.style.display = 'flex' : this.backToTop.nativeElement.style.display = 'none';
        if (this.settings.menu == 'horizontal') {
            if (this.settings.fixedHeader) {
                var currentScrollTop = (event.target.scrollTop > 56) ? event.target.scrollTop : 0;
                if (currentScrollTop > this.lastScrollTop) {
                    document.querySelector('#horizontal-menu').classList.add('sticky');
                    event.target.classList.add('horizontal-menu-hidden');
                }
                else {
                    document.querySelector('#horizontal-menu').classList.remove('sticky');
                    event.target.classList.remove('horizontal-menu-hidden');
                }
                this.lastScrollTop = currentScrollTop;
            }
            else {
                if (event.target.scrollTop > 56) {
                    document.querySelector('#horizontal-menu').classList.add('sticky');
                    event.target.classList.add('horizontal-menu-hidden');
                }
                else {
                    document.querySelector('#horizontal-menu').classList.remove('sticky');
                    event.target.classList.remove('horizontal-menu-hidden');
                }
            }
        }
    }
    scrollToTop() {
        this.pss.forEach(ps => {
            if (ps.elementRef.nativeElement.id == 'main' || ps.elementRef.nativeElement.id == 'main-content') {
                ps.scrollToTop(0, 250);
            }
        });
    }
    onWindowResize() {
        if (window.innerWidth <= 768) {
            this.settings.sidenavIsOpened = false;
            this.settings.sidenavIsPinned = false;
            this.settings.menu = 'vertical';
        }
        else {
            (this.defaultMenu == 'horizontal') ? this.settings.menu = 'horizontal' : this.settings.menu = 'vertical';
            this.settings.sidenavIsOpened = true;
            this.settings.sidenavIsPinned = true;
        }
    }
    closeSubMenus() {
        let menu = document.querySelector(".sidenav-menu-outer");
        if (menu) {
            for (let i = 0; i < menu.children[0].children.length; i++) {
                let child = menu.children[0].children[i];
                if (child) {
                    if (child.children[0].classList.contains('expanded')) {
                        child.children[0].classList.remove('expanded');
                        child.children[1].classList.remove('show');
                    }
                }
            }
        }
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav', { static: false }),
    __metadata("design:type", Object)
], PagesComponent.prototype, "sidenav", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('backToTop', { static: true }),
    __metadata("design:type", Object)
], PagesComponent.prototype, "backToTop", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarDirective"]),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
], PagesComponent.prototype, "pss", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PagesComponent.prototype, "onWindowResize", null);
PagesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-pages',
        template: __webpack_require__(/*! raw-loader!./pages.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/pages.component.html"),
        providers: [_theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"]],
        styles: [__webpack_require__(/*! ./pages.component.scss */ "./src/app/pages/pages.component.scss")]
    }),
    __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"]])
], PagesComponent);



/***/ }),

/***/ "./src/app/pages/search/search.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/search/search.component.ts ***!
  \**************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
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

let SearchComponent = class SearchComponent {
    constructor() { }
    ngOnInit() {
    }
};
SearchComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-search',
        template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/search/search.component.html")
    }),
    __metadata("design:paramtypes", [])
], SearchComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"]
        ],
        exports: [
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"]
        ],
        declarations: []
    })
], SharedModule);



/***/ }),

/***/ "./src/app/theme/components/applications/applications.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/theme/components/applications/applications.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".applications .mat-toolbar, .applications .mat-toolbar-row {\n  height: 40px !important;\n  min-height: 40px !important;\n}\n.applications .header {\n  width: 250px;\n  font-size: 16px;\n}\n.applications .mat-card {\n  padding: 0;\n}\n.applications .mat-card .mat-button {\n  height: 100%;\n}\n.applications .mat-card .mat-button .mat-button-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9hcHBsaWNhdGlvbnMvRTpcXG91ckNSTS9zcmNcXGFwcFxcdGhlbWVcXGNvbXBvbmVudHNcXGFwcGxpY2F0aW9uc1xcYXBwbGljYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL2FwcGxpY2F0aW9ucy9hcHBsaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSx1QkFBQTtFQUNBLDJCQUFBO0FDQVI7QURFSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDQVI7QURFSTtFQUNJLFVBQUE7QUNBUjtBRENRO0VBQ0ksWUFBQTtBQ0NaO0FEQVk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0VoQiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvYXBwbGljYXRpb25zL2FwcGxpY2F0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHBsaWNhdGlvbnN7XHJcbiAgICAubWF0LXRvb2xiYXIsIC5tYXQtdG9vbGJhci1yb3d7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLWhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmhlYWRlcntcclxuICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1jYXJke1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLm1hdC1idXR0b257XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgLm1hdC1idXR0b24td3JhcHBlcntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5hcHBsaWNhdGlvbnMgLm1hdC10b29sYmFyLCAuYXBwbGljYXRpb25zIC5tYXQtdG9vbGJhci1yb3cge1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogNDBweCAhaW1wb3J0YW50O1xufVxuLmFwcGxpY2F0aW9ucyAuaGVhZGVyIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uYXBwbGljYXRpb25zIC5tYXQtY2FyZCB7XG4gIHBhZGRpbmc6IDA7XG59XG4uYXBwbGljYXRpb25zIC5tYXQtY2FyZCAubWF0LWJ1dHRvbiB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5hcHBsaWNhdGlvbnMgLm1hdC1jYXJkIC5tYXQtYnV0dG9uIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/theme/components/applications/applications.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/components/applications/applications.component.ts ***!
  \*************************************************************************/
/*! exports provided: ApplicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationsComponent", function() { return ApplicationsComponent; });
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

let ApplicationsComponent = class ApplicationsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ApplicationsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-applications',
        template: __webpack_require__(/*! raw-loader!./applications.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/components/applications/applications.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./applications.component.scss */ "./src/app/theme/components/applications/applications.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ApplicationsComponent);



/***/ }),

/***/ "./src/app/theme/components/breadcrumb/breadcrumb.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/theme/components/breadcrumb/breadcrumb.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".breadcrumb {\n  padding: 8px;\n}\n.breadcrumb .mat-icon {\n  font-size: 20px;\n  height: 20px;\n  width: 20px;\n  padding: 0 6px;\n}\n.breadcrumb .breadcrumb-title.active {\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.breadcrumb .breadcrumb-item + .breadcrumb-item:before {\n  display: inline-block;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  content: \"/\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9icmVhZGNydW1iL0U6XFxvdXJDUk0vc3JjXFxhcHBcXHRoZW1lXFxjb21wb25lbnRzXFxicmVhZGNydW1iXFxicmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjtBREFJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0VSO0FEQUk7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0FDRVI7QURBSTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyZWFkY3J1bWJ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAubWF0LWljb257XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDZweDtcclxuICAgIH1cclxuICAgIC5icmVhZGNydW1iLXRpdGxlLmFjdGl2ZXtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICAuYnJlYWRjcnVtYi1pdGVtKy5icmVhZGNydW1iLWl0ZW06YmVmb3Jle1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiL1wiO1xyXG4gICAgfVxyXG59IiwiLmJyZWFkY3J1bWIge1xuICBwYWRkaW5nOiA4cHg7XG59XG4uYnJlYWRjcnVtYiAubWF0LWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIHBhZGRpbmc6IDAgNnB4O1xufVxuLmJyZWFkY3J1bWIgLmJyZWFkY3J1bWItdGl0bGUuYWN0aXZlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5icmVhZGNydW1iIC5icmVhZGNydW1iLWl0ZW0gKyAuYnJlYWRjcnVtYi1pdGVtOmJlZm9yZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgY29udGVudDogXCIvXCI7XG59Il19 */"

/***/ }),

/***/ "./src/app/theme/components/breadcrumb/breadcrumb.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/breadcrumb/breadcrumb.component.ts ***!
  \*********************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let BreadcrumbComponent = class BreadcrumbComponent {
    constructor(appSettings, router, activatedRoute, title) {
        this.appSettings = appSettings;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = title;
        this.breadcrumbs = [];
        this.settings = this.appSettings.settings;
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.breadcrumbs = [];
                this.parseRoute(this.router.routerState.snapshot.root);
                this.pageTitle = "";
                this.breadcrumbs.forEach(breadcrumb => {
                    this.pageTitle += ' > ' + breadcrumb.name;
                });
                this.title.setTitle(this.settings.name + this.pageTitle);
            }
        });
    }
    parseRoute(node) {
        if (node.data['breadcrumb']) {
            if (node.url.length) {
                let urlSegments = [];
                node.pathFromRoot.forEach(routerState => {
                    urlSegments = urlSegments.concat(routerState.url);
                });
                let url = urlSegments.map(urlSegment => {
                    return urlSegment.path;
                }).join('/');
                this.breadcrumbs.push({
                    name: node.data['breadcrumb'],
                    url: '/' + url
                });
            }
        }
        if (node.firstChild) {
            this.parseRoute(node.firstChild);
        }
    }
    closeSubMenus() {
        let menu = document.querySelector(".sidenav-menu-outer");
        if (menu) {
            for (let i = 0; i < menu.children[0].children.length; i++) {
                let child = menu.children[0].children[i];
                if (child) {
                    if (child.children[0].classList.contains('expanded')) {
                        child.children[0].classList.remove('expanded');
                        child.children[1].classList.remove('show');
                    }
                }
            }
        }
    }
};
BreadcrumbComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-breadcrumb',
        template: __webpack_require__(/*! raw-loader!./breadcrumb.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/components/breadcrumb/breadcrumb.component.html"),
        styles: [__webpack_require__(/*! ./breadcrumb.component.scss */ "./src/app/theme/components/breadcrumb/breadcrumb.component.scss")]
    }),
    __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
], BreadcrumbComponent);



/***/ }),

/***/ "./src/app/theme/components/flags-menu/flags-menu.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/theme/components/flags-menu/flags-menu.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flags img {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n.flags .mat-menu-item {\n  height: 36px;\n  line-height: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9mbGFncy1tZW51L0U6XFxvdXJDUk0vc3JjXFxhcHBcXHRoZW1lXFxjb21wb25lbnRzXFxmbGFncy1tZW51XFxmbGFncy1tZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL2ZsYWdzLW1lbnUvZmxhZ3MtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7QUNBUjtBREVJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL2ZsYWdzLW1lbnUvZmxhZ3MtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGFnc3tcclxuICAgIGltZ3tcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1tZW51LWl0ZW17XHJcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgfVxyXG59IiwiLmZsYWdzIGltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLmZsYWdzIC5tYXQtbWVudS1pdGVtIHtcbiAgaGVpZ2h0OiAzNnB4O1xuICBsaW5lLWhlaWdodDogMzZweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/theme/components/flags-menu/flags-menu.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/flags-menu/flags-menu.component.ts ***!
  \*********************************************************************/
/*! exports provided: FlagsMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlagsMenuComponent", function() { return FlagsMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let FlagsMenuComponent = class FlagsMenuComponent {
    constructor(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
    }
};
FlagsMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-flags-menu',
        template: __webpack_require__(/*! raw-loader!./flags-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/components/flags-menu/flags-menu.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./flags-menu.component.scss */ "./src/app/theme/components/flags-menu/flags-menu.component.scss")]
    }),
    __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]])
], FlagsMenuComponent);



/***/ }),

/***/ "./src/app/theme/components/fullscreen/fullscreen.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/fullscreen/fullscreen.component.ts ***!
  \*********************************************************************/
/*! exports provided: FullScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullScreenComponent", function() { return FullScreenComponent; });
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

let FullScreenComponent = class FullScreenComponent {
    constructor() {
        this.toggle = false;
    }
    requestFullscreen(elem) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
        else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        }
        else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
        else {
            console.log('Fullscreen API is not supported.');
        }
    }
    ;
    exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        else {
            console.log('Fullscreen API is not supported.');
        }
    }
    ;
    getFullscreen() {
        if (this.expand) {
            this.requestFullscreen(document.documentElement);
        }
        if (this.compress) {
            this.exitFullscreen();
        }
    }
    onFullScreenChange() {
        let fullscreenElement = document.fullscreenElement || document.mozFullScreenElement ||
            document.webkitFullscreenElement || document.msFullscreenElement;
        if (fullscreenElement != null) {
            this.toggle = true;
        }
        else {
            this.toggle = false;
        }
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('expand', { static: false }),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
], FullScreenComponent.prototype, "expand", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('compress', { static: false }),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
], FullScreenComponent.prototype, "compress", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FullScreenComponent.prototype, "getFullscreen", null);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FullScreenComponent.prototype, "onFullScreenChange", null);
FullScreenComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-fullscreen',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        template: `
    <button mat-icon-button class="full-screen">
        <mat-icon *ngIf="!toggle" #expand>fullscreen</mat-icon>
        <mat-icon *ngIf="toggle" #compress>fullscreen_exit</mat-icon>
    </button> 
  `
    })
], FullScreenComponent);



/***/ }),

/***/ "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".horizontal-menu-item {\n  position: relative;\n}\n.horizontal-menu-item .mat-button {\n  height: 56px;\n  font-weight: 400;\n}\n.horizontal-menu-item .horizontal-menu-icon {\n  margin-right: 5px;\n}\n.horizontal-menu-item .horizontal-sub-menu {\n  position: absolute;\n  width: 190px;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.25s ease-out;\n}\n.horizontal-menu-item .horizontal-sub-menu .mat-button {\n  width: 100%;\n  height: 36px;\n}\n.horizontal-menu-item:hover > .horizontal-sub-menu {\n  max-height: 500px;\n  overflow: visible;\n}\n.horizontal-sub-menu .horizontal-sub-menu {\n  left: 100%;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZW51L2hvcml6b250YWwtbWVudS9FOlxcb3VyQ1JNL3NyY1xcYXBwXFx0aGVtZVxcY29tcG9uZW50c1xcbWVudVxcaG9yaXpvbnRhbC1tZW51XFxob3Jpem9udGFsLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvbWVudS9ob3Jpem9udGFsLW1lbnUvaG9yaXpvbnRhbC1tZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL21lbnUvaG9yaXpvbnRhbC1tZW51L0U6XFxvdXJDUk0vc3JjXFxhcHBcXHRoZW1lXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0FDQUo7QURDSTtFQUNJLFlFRlM7RUZHVCxnQkFBQTtBQ0NSO0FEQ0k7RUFDSSxpQkFBQTtBQ0NSO0FEQ0k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFHQSxxQ0FBQTtBQ0NSO0FEQVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0VaO0FERUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0o7QURDQTtFQUNJLFVBQUE7RUFDQSxNQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL21lbnUvaG9yaXpvbnRhbC1tZW51L2hvcml6b250YWwtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzXCI7XHJcbi5ob3Jpem9udGFsLW1lbnUtaXRlbXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5tYXQtYnV0dG9ue1xyXG4gICAgICAgIGhlaWdodDogJGhvcml6b250YWwtbWVudS1oZWlnaHQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICAgIC5ob3Jpem9udGFsLW1lbnUtaWNvbntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxuICAgIC5ob3Jpem9udGFsLXN1Yi1tZW51e1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTkwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDsgIFxyXG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDsgIFxyXG4gICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7ICAgIFxyXG4gICAgICAgIC5tYXQtYnV0dG9ue1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4OyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmhvcml6b250YWwtbWVudS1pdGVtOmhvdmVyID4gLmhvcml6b250YWwtc3ViLW1lbnV7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcbi5ob3Jpem9udGFsLXN1Yi1tZW51IC5ob3Jpem9udGFsLXN1Yi1tZW51e1xyXG4gICAgbGVmdDogMTAwJTtcclxuICAgIHRvcDogMDtcclxufSIsIi5ob3Jpem9udGFsLW1lbnUtaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ob3Jpem9udGFsLW1lbnUtaXRlbSAubWF0LWJ1dHRvbiB7XG4gIGhlaWdodDogNTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5ob3Jpem9udGFsLW1lbnUtaXRlbSAuaG9yaXpvbnRhbC1tZW51LWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5ob3Jpem9udGFsLW1lbnUtaXRlbSAuaG9yaXpvbnRhbC1zdWItbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE5MHB4O1xuICBtYXgtaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDtcbn1cbi5ob3Jpem9udGFsLW1lbnUtaXRlbSAuaG9yaXpvbnRhbC1zdWItbWVudSAubWF0LWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM2cHg7XG59XG5cbi5ob3Jpem9udGFsLW1lbnUtaXRlbTpob3ZlciA+IC5ob3Jpem9udGFsLXN1Yi1tZW51IHtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4uaG9yaXpvbnRhbC1zdWItbWVudSAuaG9yaXpvbnRhbC1zdWItbWVudSB7XG4gIGxlZnQ6IDEwMCU7XG4gIHRvcDogMDtcbn0iLCIkZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5cclxuJHRvb2xiYXItaGVpZ2h0OiA1NnB4OyBcclxuJGhvcml6b250YWwtbWVudS1oZWlnaHQ6ICR0b29sYmFyLWhlaWdodDtcclxuXHJcbiRzaWRlbmF2LXdpZHRoOiAyNTBweDtcclxuJHNpZGVuYXYtdXNlci1ibG9jay1oZWlnaHQ6IDE1NnB4O1xyXG4kbWluaS1zaWRlbmF2LXVzZXItYmxvY2staGVpZ2h0OiA3MHB4O1xyXG5cclxuJGZsZXgtZGlzdGFuY2U6IDhweDtcclxuJGlubmVyLXNpZGVuYXYtY29udGVudC1wYWRkaW5nOiAkZmxleC1kaXN0YW5jZTtcclxuXHJcbi8vTG9naW4sIFJlZ2lzdGVyLCBFcnJvcnMgYm94XHJcbiRib3gtaGVpZ2h0OiAxODZweDtcclxuJGJveC1wb3NpdGlvbjogMzRweDtcclxuJHJlZ2lzdGVyLWJveC1oZWlnaHQ6IDMwMHB4OyJdfQ== */"

/***/ }),

/***/ "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts ***!
  \************************************************************************************/
/*! exports provided: HorizontalMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalMenuComponent", function() { return HorizontalMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu.service */ "./src/app/theme/components/menu/menu.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let HorizontalMenuComponent = class HorizontalMenuComponent {
    constructor(appSettings, menuService, router) {
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.router = router;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.menuItems = this.menuService.getHorizontalMenuItems();
        this.menuItems = this.menuItems.filter(item => item.parentId == this.menuParentId);
    }
    ngAfterViewInit() {
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                if (this.settings.fixedHeader) {
                    let mainContent = document.getElementById('main-content');
                    if (mainContent) {
                        mainContent.scrollTop = 0;
                    }
                }
                else {
                    document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
                }
            }
        });
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('menuParentId'),
    __metadata("design:type", Object)
], HorizontalMenuComponent.prototype, "menuParentId", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"], { static: false }),
    __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"])
], HorizontalMenuComponent.prototype, "trigger", void 0);
HorizontalMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-horizontal-menu',
        template: __webpack_require__(/*! raw-loader!./horizontal-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        providers: [_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]],
        styles: [__webpack_require__(/*! ./horizontal-menu.component.scss */ "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.scss")]
    }),
    __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], HorizontalMenuComponent);



/***/ }),

/***/ "./src/app/theme/components/menu/menu.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/theme/components/menu/menu.model.ts ***!
  \*****************************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
class Menu {
    constructor(id, title, routerLink, href, icon, target, hasSubMenu, parentId) {
        this.id = id;
        this.title = title;
        this.routerLink = routerLink;
        this.href = href;
        this.icon = icon;
        this.target = target;
        this.hasSubMenu = hasSubMenu;
        this.parentId = parentId;
    }
}


/***/ }),

/***/ "./src/app/theme/components/menu/menu.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/theme/components/menu/menu.service.ts ***!
  \*******************************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/app/theme/components/menu/menu.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let MenuService = class MenuService {
    constructor(location, router) {
        this.location = location;
        this.router = router;
    }
    getVerticalMenuItems() {
        return _menu__WEBPACK_IMPORTED_MODULE_3__["verticalMenuItems"];
    }
    getHorizontalMenuItems() {
        return _menu__WEBPACK_IMPORTED_MODULE_3__["horizontalMenuItems"];
    }
    expandActiveSubMenu(menu) {
        let url = this.location.path();
        let routerLink = url; // url.substring(1, url.length);
        let activeMenuItem = menu.filter(item => item.routerLink === routerLink);
        if (activeMenuItem[0]) {
            let menuItem = activeMenuItem[0];
            while (menuItem.parentId != 0) {
                let parentMenuItem = menu.filter(item => item.id == menuItem.parentId)[0];
                menuItem = parentMenuItem;
                this.toggleMenuItem(menuItem.id);
            }
        }
    }
    toggleMenuItem(menuId) {
        let menuItem = document.getElementById('menu-item-' + menuId);
        let subMenu = document.getElementById('sub-menu-' + menuId);
        if (subMenu) {
            if (subMenu.classList.contains('show')) {
                subMenu.classList.remove('show');
                menuItem.classList.remove('expanded');
            }
            else {
                subMenu.classList.add('show');
                menuItem.classList.add('expanded');
            }
        }
    }
    closeOtherSubMenus(menu, menuId) {
        let currentMenuItem = menu.filter(item => item.id == menuId)[0];
        if (currentMenuItem.parentId == 0 && !currentMenuItem.target) {
            menu.forEach(item => {
                if (item.id != menuId) {
                    let subMenu = document.getElementById('sub-menu-' + item.id);
                    let menuItem = document.getElementById('menu-item-' + item.id);
                    if (subMenu) {
                        if (subMenu.classList.contains('show')) {
                            subMenu.classList.remove('show');
                            menuItem.classList.remove('expanded');
                        }
                    }
                }
            });
        }
    }
};
MenuService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], MenuService);



/***/ }),

/***/ "./src/app/theme/components/menu/menu.ts":
/*!***********************************************!*\
  !*** ./src/app/theme/components/menu/menu.ts ***!
  \***********************************************/
/*! exports provided: verticalMenuItems, horizontalMenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verticalMenuItems", function() { return verticalMenuItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "horizontalMenuItems", function() { return horizontalMenuItems; });
/* harmony import */ var _menu_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.model */ "./src/app/theme/components/menu/menu.model.ts");

const verticalMenuItems = [
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](1, 'Dashboard', '/dashboard', null, 'dashboard', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](2, 'Users', '/users', null, 'supervisor_account', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](3, 'Lead Management', null, null, 'library_books', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](4, 'enquiry', '/lied/enquiry', null, 'computer', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](5, 'Client', '/ui/buttons', null, 'computer', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](6, 'Lead', '/ui/buttons', null, 'computer', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](7, 'Task', '/ui/buttons', null, 'computer', null, false, 3),
    // new Menu (3, 'UI Features', null, null, 'computer', null, true, 0),   
    // new Menu (4, 'Buttons', '/ui/buttons', null, 'keyboard', null, false, 3),  
    // new Menu (5, 'Cards', '/ui/cards', null, 'card_membership', null, false, 3), 
    // new Menu (6, 'Lists', '/ui/lists', null, 'list', null, false, 3), 
    // new Menu (7, 'Grids', '/ui/grids', null, 'grid_on', null, false, 3), 
    // new Menu (8, 'Tabs', '/ui/tabs', null, 'tab', null, false, 3), 
    // new Menu (9, 'Expansion Panel', '/ui/expansion-panel', null, 'dns', null, false, 3),
    // new Menu (10, 'Chips', '/ui/chips', null, 'label', null, false, 3),
    // new Menu (11, 'Progress', '/ui/progress', null, 'data_usage', null, false, 3), 
    // new Menu (12, 'Dialog', '/ui/dialog', null, 'open_in_new', null, false, 3), 
    // new Menu (13, 'Tooltip', '/ui/tooltip', null, 'chat_bubble', null, false, 3), 
    // new Menu (14, 'Snackbar', '/ui/snack-bar', null, 'sms', null, false, 3), 
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](15, 'Dynamic Menu', '/dynamic-menu', null, 'format_list_bulleted', null, false, 0),
    // new Menu (16, 'Mailbox', '/mailbox', null, 'email', null, false, 0),
    // new Menu (17, 'Chat', '/chat', null, 'chat', null, false, 0),
    // new Menu (20, 'Form Controls', null, null, 'dvr', null, true, 0), 
    // new Menu (21, 'Autocomplete', '/form-controls/autocomplete', null, 'short_text', null, false, 20), 
    // new Menu (22, 'Checkbox', '/form-controls/checkbox', null, 'check_box', null, false, 20), 
    // new Menu (23, 'Datepicker', '/form-controls/datepicker', null, 'today', null, false, 20), 
    // new Menu (24, 'Form field', '/form-controls/form-field', null, 'view_stream', null, false, 20), 
    // new Menu (25, 'Input', '/form-controls/input', null, 'input', null, false, 20), 
    // new Menu (26, 'Radio button', '/form-controls/radio-button', null, 'radio_button_checked', null, false, 20), 
    // new Menu (27, 'Select', '/form-controls/select', null, 'playlist_add_check', null, false, 20), 
    // new Menu (28, 'Slider', '/form-controls/slider', null, 'tune', null, false, 20), 
    // new Menu (29, 'Slide toggle', '/form-controls/slide-toggle', null, 'star_half', null, false, 20), 
    // new Menu (30, 'Tables', null, null, 'view_module', null, true, 0),
    // new Menu (31, 'Basic', '/tables/basic', null, 'view_column', null, false, 30), 
    // new Menu (32, 'Paging', '/tables/paging', null, 'last_page', null, false, 30), 
    // new Menu (33, 'Sorting', '/tables/sorting', null, 'sort', null, false, 30),
    // new Menu (34, 'Filtering', '/tables/filtering', null, 'format_line_spacing', null, false, 30),
    // new Menu (35, 'Selecting', '/tables/selecting', null, 'playlist_add_check', null, false, 30),
    // new Menu (36, 'NGX DataTable', '/tables/ngx-table', null, 'view_array', null, false, 30), 
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](40, 'Pages', null, null, 'library_books', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](43, 'Login', '/login', null, 'exit_to_app', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](44, 'Register', '/register', null, 'person_add', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](45, 'Blank', '/blank', null, 'check_box_outline_blank', null, false, 40),
    // new Menu (46, 'Page Not Found', '/pagenotfound', null, 'error_outline', null, false, 40),
    // new Menu (47, 'Error', '/error', null, 'warning', null, false, 40),
    // new Menu (48, 'Landing', '/landing', null, 'filter', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](49, 'Profile', null, null, 'person', null, true, 40),
];
const horizontalMenuItems = [
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](1, 'Dashboard', '/dashboard', null, 'dashboard', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](2, 'Users', '/users', null, 'supervisor_account', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](3, 'Lead Management', null, null, 'dns', null, true, 0),
    // new Menu (4, 'enquiry', '/enquiry/enquiry', null, 'computer', null, false, 3), 
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](4, 'enquiry', '/Lead/enquiry/', null, 'contact_support', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](5, 'Client', '/change', null, 'perm_identity', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](6, 'Lead', '/enquiry12', null, 'swap_horiz', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](7, 'Task', '/ui/buttons', null, 'list_alt', null, false, 3),
    // new Menu (3, 'UI Features', null, null, 'computer', null, true, 0),   
    // new Menu (4, 'Buttons', '/ui/buttons', null, 'keyboard', null, false, 3),  
    // new Menu (5, 'Cards', '/ui/cards', null, 'card_membership', null, false, 3), 
    // new Menu (6, 'Lists', '/ui/lists', null, 'list', null, false, 3), 
    // new Menu (7, 'Grids', '/ui/grids', null, 'grid_on', null, false, 3), 
    // new Menu (8, 'Tabs', '/ui/tabs', null, 'tab', null, false, 3), 
    // new Menu (9, 'Expansion Panel', '/ui/expansion-panel', null, 'dns', null, false, 3), 
    // new Menu (10, 'Chips', '/ui/chips', null, 'label', null, false, 3),
    // new Menu (11, 'Progress', '/ui/progress', null, 'data_usage', null, false, 3), 
    // new Menu (12, 'Dialog', '/ui/dialog', null, 'open_in_new', null, false, 3), 
    // new Menu (13, 'Tooltip', '/ui/tooltip', null, 'chat_bubble', null, false, 3), 
    // new Menu (14, 'Snackbar', '/ui/snack-bar', null, 'sms', null, false, 3),
    // new Menu (16, 'Mailbox', '/mailbox', null, 'email', null, false, 40), 
    // new Menu (17, 'Chat', '/chat', null, 'chat', null, false, 40), 
    // new Menu (20, 'Form Controls', null, null, 'dvr', null, true, 0), 
    // new Menu (21, 'Autocomplete', '/form-controls/autocomplete', null, 'short_text', null, false, 20), 
    // new Menu (22, 'Checkbox', '/form-controls/checkbox', null, 'check_box', null, false, 20), 
    // new Menu (23, 'Datepicker', '/form-controls/datepicker', null, 'today', null, false, 20), 
    // new Menu (24, 'Form field', '/form-controls/form-field', null, 'view_stream', null, false, 20), 
    // new Menu (25, 'Input', '/form-controls/input', null, 'input', null, false, 20), 
    // new Menu (26, 'Radio button', '/form-controls/radio-button', null, 'radio_button_checked', null, false, 20), 
    // new Menu (27, 'Select', '/form-controls/select', null, 'playlist_add_check', null, false, 20), 
    // new Menu (28, 'Slider', '/form-controls/slider', null, 'tune', null, false, 20), 
    // new Menu (29, 'Slide toggle', '/form-controls/slide-toggle', null, 'star_half', null, false, 20),    
    // new Menu (30, 'Tables', null, null, 'view_module', null, true, 0),
    // new Menu (31, 'Basic', '/tables/basic', null, 'view_column', null, false, 30), 
    // new Menu (32, 'Paging', '/tables/paging', null, 'last_page', null, false, 30), 
    // new Menu (33, 'Sorting', '/tables/sorting', null, 'sort', null, false, 30),
    // new Menu (34, 'Filtering', '/tables/filtering', null, 'format_line_spacing', null, false, 30),
    // new Menu (35, 'Selecting', '/tables/selecting', null, 'playlist_add_check', null, false, 30),
    // new Menu (36, 'NGX DataTable', '/tables/ngx-table', null, 'view_array', null, false, 30), 
    // new Menu (70, 'Charts', null, null, 'multiline_chart', null, true, 0),
    // new Menu (71, 'Bar Charts', '/charts/bar', null, 'insert_chart', null, false, 70),
    // new Menu (72, 'Pie Charts', '/charts/pie', null, 'pie_chart', null, false, 70),
    // new Menu (73, 'Line Charts', '/charts/line', null, 'show_chart', null, false, 70),
    // new Menu (74, 'Bubble Charts', '/charts/bubble', null, 'bubble_chart', null, false, 70), 
    // new Menu (66, 'Maps', null, null, 'map', null, true, 70),
    // new Menu (67, 'Google Maps', '/maps/googlemaps', null, 'location_on', null, false, 66),
    // new Menu (68, 'Leaflet Maps', '/maps/leafletmaps', null, 'my_location', null, false, 66),
    // new Menu (81, 'Drag & Drop', '/drag-drop', null, 'mouse', null, false, 3), 
    // new Menu (85, 'Material Icons', '/icons', null, 'insert_emoticon', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](40, 'Pages', null, null, 'library_books', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](43, 'Login', '/login', null, 'exit_to_app', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](44, 'Register', '/register', null, 'person_add', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](45, 'Blank', '/blank', null, 'check_box_outline_blank', null, false, 40),
    // new Menu (46, 'Page Not Found', '/pagenotfound', null, 'error_outline', null, false, 40),
    // new Menu (47, 'Error', '/error', null, 'warning', null, false, 40),
    // new Menu (48, 'Landing', '/landing', null, 'filter', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](49, 'Profile', null, null, 'person', null, true, 40),
];


/***/ }),

/***/ "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/theme/components/menu/vertical-menu/vertical-menu.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-icon {\n  margin-right: 12px;\n}\n\n.menu-expand-icon {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.menu-item .mat-button {\n  padding: 0;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  width: 100%;\n  font-weight: 400;\n}\n\n.menu-item .mat-button.expanded .menu-expand-icon {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n\n.menu-item .mat-button-wrapper {\n  padding-left: 16px;\n}\n\n.sub-menu {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.25s ease-out;\n}\n\n.sub-menu .sub-menu .mat-button {\n  padding-left: 40px;\n}\n\n.sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 60px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 80px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 100px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 120px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 140px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 160px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 180px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 200px;\n}\n\n.sub-menu .mat-button {\n  padding-left: 20px;\n}\n\n.sub-menu.show {\n  max-height: 500px;\n  transition: max-height 0.25s ease-in;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZW51L3ZlcnRpY2FsLW1lbnUvRTpcXG91ckNSTS9zcmNcXGFwcFxcdGhlbWVcXGNvbXBvbmVudHNcXG1lbnVcXHZlcnRpY2FsLW1lbnVcXHZlcnRpY2FsLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvbWVudS92ZXJ0aWNhbC1tZW51L3ZlcnRpY2FsLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvbWVudS92ZXJ0aWNhbC1tZW51L0U6XFxvdXJDUk0vc3JjXFxhcHBcXHRoZW1lXFxzdHlsZXNcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFBO0FDREo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDQUo7O0FESUk7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0RSOztBREdZO0VBQ0ksaUNBQUE7RUFFQSx5QkFBQTtBQ0RoQjs7QURNSTtFQUNJLGtCQUFBO0FDSlI7O0FEUUE7RUFFSSxhQUFBO0VBQ0EsZ0JBQUE7RUFHQSxxQ0FBQTtBQ05KOztBQzVCUTtFQUtRLGtCQUFBO0FEMEJoQjs7QUMvQlE7RUFLUSxrQkFBQTtBRDZCaEI7O0FDbENRO0VBS1Esa0JBQUE7QURnQ2hCOztBQ3JDUTtFQUtRLG1CQUFBO0FEbUNoQjs7QUN4Q1E7RUFLUSxtQkFBQTtBRHNDaEI7O0FDM0NRO0VBS1EsbUJBQUE7QUR5Q2hCOztBQzlDUTtFQUtRLG1CQUFBO0FENENoQjs7QUNqRFE7RUFLUSxtQkFBQTtBRCtDaEI7O0FDcERRO0VBS1EsbUJBQUE7QURrRGhCOztBRHBCSTtFQUNJLGtCQUFBO0FDc0JSOztBRHBCSTtFQUNJLGlCQUFBO0VBR0Esb0NBQUE7QUNzQlIiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL21lbnUvdmVydGljYWwtbWVudS92ZXJ0aWNhbC1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9taXhpbnNcIjtcclxuXHJcbi5tZW51LWljb257XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbn1cclxuLm1lbnUtZXhwYW5kLWljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRvcDogMTBweDtcclxufVxyXG5cclxuLm1lbnUtaXRlbXtcclxuICAgIC5tYXQtYnV0dG9ue1xyXG4gICAgICAgIHBhZGRpbmc6IDA7ICAgIFxyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDNweDsgXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAmLmV4cGFuZGVke1xyXG4gICAgICAgICAgICAubWVudS1leHBhbmQtaWNvbntcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgLm1hdC1idXR0b24td3JhcHBlcntcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG4uc3ViLW1lbnV7XHJcbiAgICBAaW5jbHVkZSBtZW51LWxldmVsLXBhZGRpbmcoJ2x0cicpO1xyXG4gICAgbWF4LWhlaWdodDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7ICBcclxuICAgIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDsgIFxyXG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDsgICAgXHJcbiAgICAubWF0LWJ1dHRvbntcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7ICAgICAgXHJcbiAgICB9IFxyXG4gICAgJi5zaG93e1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLWluO1xyXG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLWluO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcclxuICAgIH0gICAgXHJcbn0iLCIubWVudS1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuXG4ubWVudS1leHBhbmQtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbn1cblxuLm1lbnUtaXRlbSAubWF0LWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDA7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLm1lbnUtaXRlbSAubWF0LWJ1dHRvbi5leHBhbmRlZCAubWVudS1leHBhbmQtaWNvbiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuLm1lbnUtaXRlbSAubWF0LWJ1dHRvbi13cmFwcGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuXG4uc3ViLW1lbnUge1xuICBtYXgtaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDtcbn1cbi5zdWItbWVudSAuc3ViLW1lbnUgLm1hdC1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG59XG4uc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAubWF0LWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogNjBweDtcbn1cbi5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAubWF0LWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogODBweDtcbn1cbi5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLm1hdC1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xufVxuLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLm1hdC1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDEyMHB4O1xufVxuLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5tYXQtYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiAxNDBweDtcbn1cbi5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLm1hdC1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDE2MHB4O1xufVxuLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLm1hdC1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDE4MHB4O1xufVxuLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5tYXQtYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiAyMDBweDtcbn1cbi5zdWItbWVudSAubWF0LWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5zdWItbWVudS5zaG93IHtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLWluO1xuICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLWluO1xufSIsIkBtaXhpbiBtZW51LWxldmVsLXBhZGRpbmcoJGRpcmVjdGlvbil7XHJcbiAgICAkZWxlbTogJyc7XHJcbiAgICBAZm9yICRpIGZyb20gMiB0aHJvdWdoIDEwIHtcclxuICAgICAgICAkZWxlbTogaWYoJGkgPT0gMiwgXCIuc3ViLW1lbnVcIiwgc2VsZWN0b3ItbmVzdCgkZWxlbSwgXCIuc3ViLW1lbnVcIikpOyAgICAgIFxyXG4gICAgICAgICN7JGVsZW0gKyAnIC5tYXQtYnV0dG9uJ30geyBcclxuICAgICAgICAgICAgQGlmICRkaXJlY3Rpb24gPT0gXCJydGxcIiB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4ICogJGk7IFxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBAZWxzZXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweCAqICRpOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/theme/components/menu/vertical-menu/vertical-menu.component.ts ***!
  \********************************************************************************/
/*! exports provided: VerticalMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalMenuComponent", function() { return VerticalMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu.service */ "./src/app/theme/components/menu/menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let VerticalMenuComponent = class VerticalMenuComponent {
    constructor(appSettings, menuService, router) {
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.router = router;
        this.onClickMenuItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.parentMenu = this.menuItems.filter(item => item.parentId == this.menuParentId);
    }
    ngAfterViewInit() {
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                if (this.settings.fixedHeader) {
                    let mainContent = document.getElementById('main-content');
                    if (mainContent) {
                        mainContent.scrollTop = 0;
                    }
                }
                else {
                    document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
                }
            }
        });
    }
    onClick(menuId) {
        this.menuService.toggleMenuItem(menuId);
        this.menuService.closeOtherSubMenus(this.menuItems, menuId);
        this.onClickMenuItem.emit(menuId);
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('menuItems'),
    __metadata("design:type", Object)
], VerticalMenuComponent.prototype, "menuItems", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('menuParentId'),
    __metadata("design:type", Object)
], VerticalMenuComponent.prototype, "menuParentId", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
], VerticalMenuComponent.prototype, "onClickMenuItem", void 0);
VerticalMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-vertical-menu',
        template: __webpack_require__(/*! raw-loader!./vertical-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/components/menu/vertical-menu/vertical-menu.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        providers: [_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]],
        styles: [__webpack_require__(/*! ./vertical-menu.component.scss */ "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.scss")]
    }),
    __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], VerticalMenuComponent);



/***/ }),

/***/ "./src/app/theme/components/messages/messages.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/messages/messages.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".messages .mat-tab-label {\n  min-width: 93.3px;\n  height: 40px;\n}\n.messages .content {\n  padding: 0;\n  height: 250px;\n}\n.messages img {\n  margin-right: 8px;\n  border-radius: 4px;\n}\n.messages span.name {\n  text-transform: capitalize;\n  font-size: 13px;\n  line-height: 22px;\n}\n.messages span.info {\n  font-size: 12px;\n  opacity: 0.8;\n  line-height: 22px;\n}\n.messages span.text {\n  font-size: 11px;\n  line-height: 14px;\n  white-space: initial;\n  text-align: left;\n}\n.messages .mat-button {\n  padding: 8px;\n}\n.messages .mat-button .mat-button-wrapper {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n}\n.messages .mat-button .mat-icon {\n  height: 16px;\n  font-size: 12px;\n  width: 12px;\n  vertical-align: middle;\n}\n.messages .row-1 {\n  box-shadow: 0 0 5px #ccc;\n  border-radius: 4px;\n  padding: 2px 13px;\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZXNzYWdlcy9FOlxcb3VyQ1JNL3NyY1xcYXBwXFx0aGVtZVxcY29tcG9uZW50c1xcbWVzc2FnZXNcXG1lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FDQVI7QURFSTtFQUNJLFVBQUE7RUFDQSxhQUFBO0FDQVI7QURFSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNBUjtBREVJO0VBQ0ksMEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNBUjtBREVJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0FSO0FERUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDQVI7QURFSTtFQUNJLFlBQUE7QUNBUjtBRENRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNDWjtBRENRO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNDWjtBREVJO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZXN7XHJcbiAgICAubWF0LXRhYi1sYWJlbHtcclxuICAgICAgICBtaW4td2lkdGg6IDkzLjNweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGVudHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICB9XHJcbiAgICBpbWd7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG4gICAgc3Bhbi5uYW1le1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIH1cclxuICAgIHNwYW4uaW5mb3tcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgfVxyXG4gICAgc3Bhbi50ZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogaW5pdGlhbDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfSAgXHJcbiAgICAubWF0LWJ1dHRvbntcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgLm1hdC1idXR0b24td3JhcHBlcntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYXQtaWNvbntcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yb3ctMXtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgNXB4ICNjY2M7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDJweCAxM3B4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgfVxyXG59IiwiLm1lc3NhZ2VzIC5tYXQtdGFiLWxhYmVsIHtcbiAgbWluLXdpZHRoOiA5My4zcHg7XG4gIGhlaWdodDogNDBweDtcbn1cbi5tZXNzYWdlcyAuY29udGVudCB7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMjUwcHg7XG59XG4ubWVzc2FnZXMgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5tZXNzYWdlcyBzcGFuLm5hbWUge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbn1cbi5tZXNzYWdlcyBzcGFuLmluZm8ge1xuICBmb250LXNpemU6IDEycHg7XG4gIG9wYWNpdHk6IDAuODtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG4ubWVzc2FnZXMgc3Bhbi50ZXh0IHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgd2hpdGUtc3BhY2U6IGluaXRpYWw7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubWVzc2FnZXMgLm1hdC1idXR0b24ge1xuICBwYWRkaW5nOiA4cHg7XG59XG4ubWVzc2FnZXMgLm1hdC1idXR0b24gLm1hdC1idXR0b24td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLm1lc3NhZ2VzIC5tYXQtYnV0dG9uIC5tYXQtaWNvbiB7XG4gIGhlaWdodDogMTZweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aWR0aDogMTJweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5tZXNzYWdlcyAucm93LTEge1xuICBib3gtc2hhZG93OiAwIDAgNXB4ICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMnB4IDEzcHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/theme/components/messages/messages.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/messages/messages.component.ts ***!
  \*****************************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages.service */ "./src/app/theme/components/messages/messages.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let MessagesComponent = class MessagesComponent {
    constructor(messagesService) {
        this.messagesService = messagesService;
        this.selectedTab = 1;
        this.messages = messagesService.getMessages();
        this.files = messagesService.getFiles();
        this.meetings = messagesService.getMeetings();
    }
    ngOnInit() {
    }
    openMessagesMenu() {
        this.trigger.openMenu();
        this.selectedTab = 0;
    }
    onMouseLeave() {
        this.trigger.closeMenu();
    }
    stopClickPropagate(event) {
        event.stopPropagation();
        event.preventDefault();
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"], { static: true }),
    __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"])
], MessagesComponent.prototype, "trigger", void 0);
MessagesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-messages',
        template: __webpack_require__(/*! raw-loader!./messages.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/components/messages/messages.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        providers: [_messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]],
        styles: [__webpack_require__(/*! ./messages.component.scss */ "./src/app/theme/components/messages/messages.component.scss")]
    }),
    __metadata("design:paramtypes", [_messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]])
], MessagesComponent);



/***/ }),

/***/ "./src/app/theme/components/messages/messages.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/components/messages/messages.service.ts ***!
  \***************************************************************/
/*! exports provided: MessagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesService", function() { return MessagesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let MessagesService = class MessagesService {
    constructor() {
        this.messages = [
            {
                name: 'ashley',
                text: 'After you get up and running, you can place Font Awesome icons just about...',
                time: '1 min ago'
            },
            {
                name: 'michael',
                text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
                time: '2 hrs ago'
            },
            {
                name: 'julia',
                text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',
                time: '10 hrs ago'
            },
            {
                name: 'bruno',
                text: 'Explore your passions and discover new ones by getting involved. Stretch your...',
                time: '1 day ago'
            },
            {
                name: 'tereza',
                text: 'Get to know who we are - from the inside out. From our history and culture, to the...',
                time: '1 day ago'
            },
            {
                name: 'adam',
                text: 'Need some support to reach your goals? Apply for scholarships across...',
                time: '2 days ago'
            },
            {
                name: 'michael',
                text: 'Wrap the dropdown\'s trigger and the dropdown menu within .dropdown, or...',
                time: '1 week ago'
            }
        ];
        this.files = [
            {
                text: 'gradus.zip',
                size: '~6.2 MB',
                value: '47',
                color: 'primary'
            },
            {
                text: 'documentation.pdf',
                size: '~14.6 MB',
                value: '33',
                color: 'accent'
            },
            {
                text: 'wallpaper.jpg',
                size: '~558 KB',
                value: '60',
                color: 'warn'
            },
            {
                text: 'letter.doc',
                size: '~57 KB',
                value: '80',
                color: 'primary'
            },
            {
                text: 'azimuth.zip',
                size: '~10.2 MB',
                value: '55',
                color: 'warn'
            },
            {
                text: 'contacts.xlsx',
                size: '~96 KB',
                value: '75',
                color: 'accent'
            }
        ];
        this.meetings = [
            {
                day: '09',
                month: 'May',
                title: 'Meeting with Bruno',
                text: 'Fusce ut condimentum velit, quis egestas eros. Quisque sed condimentum neque.',
                color: 'danger'
            },
            {
                day: '15',
                month: 'May',
                title: 'Training course',
                text: 'Fusce arcu tortor, tempor aliquam augue vel, consectetur vehicula lectus.',
                color: 'primary'
            },
            {
                day: '12',
                month: 'June',
                title: 'Dinner with Ashley',
                text: 'Curabitur rhoncus facilisis augue sed fringilla.',
                color: 'info'
            },
            {
                day: '14',
                month: 'June',
                title: 'Sport time',
                text: 'Vivamus tristique enim eros, ac ultricies sem ultrices vitae.',
                color: 'warning'
            },
            {
                day: '29',
                month: 'July',
                title: 'Birthday of Julia',
                text: 'Nam porttitor justo nec elit efficitur vestibulum.',
                color: 'success'
            }
        ];
    }
    getMessages() {
        return this.messages;
    }
    getFiles() {
        return this.files;
    }
    getMeetings() {
        return this.meetings;
    }
};
MessagesService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
], MessagesService);



/***/ }),

/***/ "./src/app/theme/components/sidenav/sidenav.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/sidenav/sidenav.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pin {\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n  fill: currentColor;\n}\n\n.sidenav-header {\n  padding: 0 10px !important;\n}\n\n.user-block {\n  height: 0;\n  position: relative;\n  z-index: 1;\n  overflow: hidden;\n}\n\n.user-block img {\n  width: 80px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 50%;\n}\n\n.user-block .user-info-wrapper {\n  padding: 0 6px;\n  margin: 6px 0;\n  width: 100%;\n}\n\n.user-block .user-info-wrapper .user-info {\n  text-align: center;\n}\n\n.user-block .user-info-wrapper .user-info .name {\n  font-size: 15px;\n}\n\n.user-block .user-info-wrapper .user-info .position {\n  font-size: 13px;\n}\n\n.user-block.show {\n  height: 156px;\n}\n\n.sidenav-menu-outer .ps {\n  height: calc(100% - 56px);\n}\n\n.sidenav-menu-outer.user-block-show .ps {\n  height: calc(100% - 212px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9zaWRlbmF2L0U6XFxvdXJDUk0vc3JjXFxhcHBcXHRoZW1lXFxjb21wb25lbnRzXFxzaWRlbmF2XFxzaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9zaWRlbmF2L0U6XFxvdXJDUk0vc3JjXFxhcHBcXHRoZW1lXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDSSwwQkFBQTtBQ0RKOztBRElBO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDREo7O0FERUk7RUFDSSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQ0FSOztBREVJO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDQVI7O0FEQ1E7RUFDSSxrQkFBQTtBQ0NaOztBREFZO0VBQ0ksZUFBQTtBQ0VoQjs7QURBWTtFQUNJLGVBQUE7QUNFaEI7O0FERUk7RUFDSSxhRWhDb0I7QURnQzVCOztBREtJO0VBQ0kseUJBQUE7QUNGUjs7QURLUTtFQUNJLDBCQUFBO0FDSFoiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvdmFyaWFibGVzXCI7XHJcblxyXG4ucGlue1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmaWxsOiBjdXJyZW50Q29sb3I7XHJcbn1cclxuXHJcbi5zaWRlbmF2LWhlYWRlcntcclxuICAgIHBhZGRpbmc6IDAgMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udXNlci1ibG9ja3tcclxuICAgIGhlaWdodDogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgIFxyXG4gICAgei1pbmRleDogMTsgXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAgXHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7IFxyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7ICAgICAgIFxyXG4gICAgfVxyXG4gICAgLnVzZXItaW5mby13cmFwcGVye1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNnB4O1xyXG4gICAgICAgIG1hcmdpbjogNnB4IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLnVzZXItaW5mb3tcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAubmFtZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wb3NpdGlvbntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbiAgICAmLnNob3d7XHJcbiAgICAgICAgaGVpZ2h0OiAkc2lkZW5hdi11c2VyLWJsb2NrLWhlaWdodDtcclxuICAgIH0gICAgICBcclxufSBcclxuXHJcbi5zaWRlbmF2LW1lbnUtb3V0ZXJ7XHJcbiAgICAucHN7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAjeyR0b29sYmFyLWhlaWdodH0pOyBcclxuICAgIH0gICAgICAgXHJcbiAgICAmLnVzZXItYmxvY2stc2hvd3tcclxuICAgICAgICAucHN7ICAgICAgICBcclxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAjeyR0b29sYmFyLWhlaWdodCArICRzaWRlbmF2LXVzZXItYmxvY2staGVpZ2h0fSk7IFxyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbn0iLCIucGluIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG5cbi5zaWRlbmF2LWhlYWRlciB7XG4gIHBhZGRpbmc6IDAgMTBweCAhaW1wb3J0YW50O1xufVxuXG4udXNlci1ibG9jayB7XG4gIGhlaWdodDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnVzZXItYmxvY2sgaW1nIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnVzZXItYmxvY2sgLnVzZXItaW5mby13cmFwcGVyIHtcbiAgcGFkZGluZzogMCA2cHg7XG4gIG1hcmdpbjogNnB4IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnVzZXItYmxvY2sgLnVzZXItaW5mby13cmFwcGVyIC51c2VyLWluZm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udXNlci1ibG9jayAudXNlci1pbmZvLXdyYXBwZXIgLnVzZXItaW5mbyAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi51c2VyLWJsb2NrIC51c2VyLWluZm8td3JhcHBlciAudXNlci1pbmZvIC5wb3NpdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi51c2VyLWJsb2NrLnNob3cge1xuICBoZWlnaHQ6IDE1NnB4O1xufVxuXG4uc2lkZW5hdi1tZW51LW91dGVyIC5wcyB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNTZweCk7XG59XG4uc2lkZW5hdi1tZW51LW91dGVyLnVzZXItYmxvY2stc2hvdyAucHMge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIxMnB4KTtcbn0iLCIkZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5cclxuJHRvb2xiYXItaGVpZ2h0OiA1NnB4OyBcclxuJGhvcml6b250YWwtbWVudS1oZWlnaHQ6ICR0b29sYmFyLWhlaWdodDtcclxuXHJcbiRzaWRlbmF2LXdpZHRoOiAyNTBweDtcclxuJHNpZGVuYXYtdXNlci1ibG9jay1oZWlnaHQ6IDE1NnB4O1xyXG4kbWluaS1zaWRlbmF2LXVzZXItYmxvY2staGVpZ2h0OiA3MHB4O1xyXG5cclxuJGZsZXgtZGlzdGFuY2U6IDhweDtcclxuJGlubmVyLXNpZGVuYXYtY29udGVudC1wYWRkaW5nOiAkZmxleC1kaXN0YW5jZTtcclxuXHJcbi8vTG9naW4sIFJlZ2lzdGVyLCBFcnJvcnMgYm94XHJcbiRib3gtaGVpZ2h0OiAxODZweDtcclxuJGJveC1wb3NpdGlvbjogMzRweDtcclxuJHJlZ2lzdGVyLWJveC1oZWlnaHQ6IDMwMHB4OyJdfQ== */"

/***/ }),

/***/ "./src/app/theme/components/sidenav/sidenav.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/components/sidenav/sidenav.component.ts ***!
  \***************************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _menu_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu.service */ "./src/app/theme/components/menu/menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let SidenavComponent = class SidenavComponent {
    constructor(appSettings, menuService) {
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.userImage = '../assets/img/users/user.jpg';
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.menuItems = this.menuService.getVerticalMenuItems();
    }
    closeSubMenus() {
        let menu = document.getElementById("vertical-menu");
        if (menu) {
            for (let i = 0; i < menu.children[0].children.length; i++) {
                let child = menu.children[0].children[i];
                if (child) {
                    if (child.children[0].classList.contains('expanded')) {
                        child.children[0].classList.remove('expanded');
                        child.children[1].classList.remove('show');
                    }
                }
            }
        }
    }
};
SidenavComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-sidenav',
        template: __webpack_require__(/*! raw-loader!./sidenav.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/components/sidenav/sidenav.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        providers: [_menu_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]],
        styles: [__webpack_require__(/*! ./sidenav.component.scss */ "./src/app/theme/components/sidenav/sidenav.component.scss")]
    }),
    __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"], _menu_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]])
], SidenavComponent);



/***/ }),

/***/ "./src/app/theme/components/user-menu/user-menu.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/user-menu/user-menu.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-menu .mat-toolbar, .user-menu .mat-toolbar-row {\n  height: 100px !important;\n}\n.user-menu .user-info {\n  width: 230px;\n}\n.user-menu .user-info p {\n  font-size: 16px;\n  line-height: 22px;\n  text-align: center;\n}\n.user-menu .mat-menu-item {\n  height: 36px;\n  line-height: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy91c2VyLW1lbnUvRTpcXG91ckNSTS9zcmNcXGFwcFxcdGhlbWVcXGNvbXBvbmVudHNcXHVzZXItbWVudVxcdXNlci1tZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL3VzZXItbWVudS91c2VyLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSx3QkFBQTtBQ0FSO0FERUk7RUFDSSxZQUFBO0FDQVI7QURDUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ1o7QURFSTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy91c2VyLW1lbnUvdXNlci1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItbWVudXtcclxuICAgIC5tYXQtdG9vbGJhciwgLm1hdC10b29sYmFyLXJvd3tcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAudXNlci1pbmZve1xyXG4gICAgICAgIHdpZHRoOiAyMzBweDtcclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1hdC1tZW51LWl0ZW17XHJcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgfVxyXG59IiwiLnVzZXItbWVudSAubWF0LXRvb2xiYXIsIC51c2VyLW1lbnUgLm1hdC10b29sYmFyLXJvdyB7XG4gIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbn1cbi51c2VyLW1lbnUgLnVzZXItaW5mbyB7XG4gIHdpZHRoOiAyMzBweDtcbn1cbi51c2VyLW1lbnUgLnVzZXItaW5mbyBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnVzZXItbWVudSAubWF0LW1lbnUtaXRlbSB7XG4gIGhlaWdodDogMzZweDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/theme/components/user-menu/user-menu.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/user-menu/user-menu.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMenuComponent", function() { return UserMenuComponent; });
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

let UserMenuComponent = class UserMenuComponent {
    constructor() {
        this.userImage = '../assets/img/users/user.jpg';
    }
    ngOnInit() {
    }
};
UserMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-user-menu',
        template: __webpack_require__(/*! raw-loader!./user-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/components/user-menu/user-menu.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./user-menu.component.scss */ "./src/app/theme/components/user-menu/user-menu.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], UserMenuComponent);



/***/ }),

/***/ "./src/app/theme/pipes/pagination/pagination.pipe.ts":
/*!***********************************************************!*\
  !*** ./src/app/theme/pipes/pagination/pagination.pipe.ts ***!
  \***********************************************************/
/*! exports provided: PaginationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationPipe", function() { return PaginationPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let PaginationPipe = class PaginationPipe {
    transform(data, args) {
        if (!args) {
            args = {
                pageIndex: 0,
                pageSize: 6,
                length: data.length
            };
        }
        return this.paginate(data, args.pageSize, args.pageIndex);
    }
    paginate(array, page_size, page_number) {
        return array.slice(page_number * page_size, (page_number + 1) * page_size);
    }
};
PaginationPipe = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'pagination'
    })
], PaginationPipe);



/***/ }),

/***/ "./src/app/theme/pipes/pipes.module.ts":
/*!*********************************************!*\
  !*** ./src/app/theme/pipes/pipes.module.ts ***!
  \*********************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _pagination_pagination_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination/pagination.pipe */ "./src/app/theme/pipes/pagination/pagination.pipe.ts");
/* harmony import */ var _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profilePicture/profilePicture.pipe */ "./src/app/theme/pipes/profilePicture/profilePicture.pipe.ts");
/* harmony import */ var _search_chat_person_search_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search/chat-person-search.pipe */ "./src/app/theme/pipes/search/chat-person-search.pipe.ts");
/* harmony import */ var _search_user_search_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search/user-search.pipe */ "./src/app/theme/pipes/search/user-search.pipe.ts");
/* harmony import */ var _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./truncate/truncate.pipe */ "./src/app/theme/pipes/truncate/truncate.pipe.ts");
/* harmony import */ var _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search/mail-search.pipe */ "./src/app/theme/pipes/search/mail-search.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let PipesModule = class PipesModule {
};
PipesModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ],
        declarations: [
            _pagination_pagination_pipe__WEBPACK_IMPORTED_MODULE_2__["PaginationPipe"],
            _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_3__["ProfilePicturePipe"],
            _search_chat_person_search_pipe__WEBPACK_IMPORTED_MODULE_4__["ChatPersonSearchPipe"],
            _search_user_search_pipe__WEBPACK_IMPORTED_MODULE_5__["UserSearchPipe"],
            _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_6__["TruncatePipe"],
            _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_7__["MailSearchPipe"]
        ],
        exports: [
            _pagination_pagination_pipe__WEBPACK_IMPORTED_MODULE_2__["PaginationPipe"],
            _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_3__["ProfilePicturePipe"],
            _search_chat_person_search_pipe__WEBPACK_IMPORTED_MODULE_4__["ChatPersonSearchPipe"],
            _search_user_search_pipe__WEBPACK_IMPORTED_MODULE_5__["UserSearchPipe"],
            _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_6__["TruncatePipe"],
            _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_7__["MailSearchPipe"]
        ]
    })
], PipesModule);



/***/ }),

/***/ "./src/app/theme/pipes/profilePicture/profilePicture.pipe.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/pipes/profilePicture/profilePicture.pipe.ts ***!
  \*******************************************************************/
/*! exports provided: ProfilePicturePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePicturePipe", function() { return ProfilePicturePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let ProfilePicturePipe = class ProfilePicturePipe {
    transform(input, ext = 'jpg') {
        return '../assets/img/profile/' + input + '.' + ext;
    }
};
ProfilePicturePipe = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'profilePicture' })
], ProfilePicturePipe);



/***/ }),

/***/ "./src/app/theme/pipes/search/chat-person-search.pipe.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/pipes/search/chat-person-search.pipe.ts ***!
  \***************************************************************/
/*! exports provided: ChatPersonSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPersonSearchPipe", function() { return ChatPersonSearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let ChatPersonSearchPipe = class ChatPersonSearchPipe {
    transform(value, args) {
        let searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(message => {
                if (message.author) {
                    return message.author.search(searchText) !== -1;
                }
            });
        }
    }
};
ChatPersonSearchPipe = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'ChatPersonSearchPipe' })
], ChatPersonSearchPipe);



/***/ }),

/***/ "./src/app/theme/pipes/search/mail-search.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/theme/pipes/search/mail-search.pipe.ts ***!
  \********************************************************/
/*! exports provided: MailSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailSearchPipe", function() { return MailSearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let MailSearchPipe = class MailSearchPipe {
    transform(value, args) {
        let searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(mail => {
                if (mail.sender || mail.subject) {
                    if (mail.sender.search(searchText) !== -1 || mail.subject.search(searchText) !== -1) {
                        return true;
                    }
                }
            });
        }
    }
};
MailSearchPipe = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'MailSearch'
    })
], MailSearchPipe);



/***/ }),

/***/ "./src/app/theme/pipes/search/user-search.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/theme/pipes/search/user-search.pipe.ts ***!
  \********************************************************/
/*! exports provided: UserSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSearchPipe", function() { return UserSearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let UserSearchPipe = class UserSearchPipe {
    transform(value, args) {
        let searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(user => {
                if (user.profile.name) {
                    return user.profile.name.search(searchText) !== -1;
                }
                else {
                    return user.username.search(searchText) !== -1;
                }
            });
        }
    }
};
UserSearchPipe = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'UserSearchPipe', pure: false })
], UserSearchPipe);



/***/ }),

/***/ "./src/app/theme/pipes/truncate/truncate.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/theme/pipes/truncate/truncate.pipe.ts ***!
  \*******************************************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let TruncatePipe = class TruncatePipe {
    transform(value, args) {
        let limit = args > 0 ? parseInt(args) : 10;
        return value.length > limit ? value.substring(0, limit) + '...' : value;
    }
};
TruncatePipe = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'truncate'
    })
], TruncatePipe);



/***/ }),

/***/ "./src/app/theme/utils/custom-overlay-container.ts":
/*!*********************************************************!*\
  !*** ./src/app/theme/utils/custom-overlay-container.ts ***!
  \*********************************************************/
/*! exports provided: CustomOverlayContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomOverlayContainer", function() { return CustomOverlayContainer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let CustomOverlayContainer = class CustomOverlayContainer extends _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayContainer"] {
    _createContainer() {
        let container = document.createElement('div');
        container.classList.add('cdk-overlay-container');
        document.getElementById('app').appendChild(container);
        this._containerElement = container;
    }
};
CustomOverlayContainer = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
], CustomOverlayContainer);



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\ourCRM\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map