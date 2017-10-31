"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var site_management_service_1 = require("./site-management.service");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.currentView = 'list';
    }
    AppComponent.prototype.navigateTo = function (view) {
        this.currentView = view;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'yw-app',
            templateUrl: 'app/app.template.html',
            providers: [site_management_service_1.SiteManagementService]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map