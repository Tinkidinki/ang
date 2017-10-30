"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dive_site_1 = require("./dive-site");
// The selector has to be defined in the same module as the component.
// We bound app.component, which contained the template, to the same module as this.
var SiteListComponent = /** @class */ (function () {
    function SiteListComponent() {
        this.sites = dive_site_1.DiveSite.FavoriteSites;
    }
    SiteListComponent = __decorate([
        core_1.Component({
            selector: 'site-list-view',
            templateUrl: 'app/site-list.template.html'
        })
    ], SiteListComponent);
    return SiteListComponent;
}());
exports.SiteListComponent = SiteListComponent;
//# sourceMappingURL=site-list.component.js.map