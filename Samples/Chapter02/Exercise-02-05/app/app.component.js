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
// You either give a path to the template or the template itself.
// Notice how the template is in ticks.
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.sites = dive_site_1.DiveSite.FavoriteSites.slice(0);
        this.currentView = 'list';
    }
    AppComponent.prototype.navigateTo = function (view) {
        this.currentView = view;
    };
    // Think of navigate to, as actually navigating.
    // Don't worry about internals.
    AppComponent.prototype.startAdd = function () {
        // function(s) {return s.id;}
        // function(p,c) {return p < c ? c : p; }
        this.newSiteId = this.sites.map(function (s) { return s.id; }).reduce(function (p, c) { return p < c ? c : p; }) + 1;
        // why are they going overboard, 
        // don't lists have a length function?
        this.navigateTo('add');
    };
    // The template never worries about the id.
    AppComponent.prototype.siteAdded = function (newSiteName) {
        this.sites.push({ id: this.newSiteId, name: newSiteName });
        this.navigateTo('list');
    };
    AppComponent.prototype.startEdit = function (site) {
        this.currentSite = { id: site.id, name: site.name };
        this.navigateTo('edit');
    };
    AppComponent.prototype.siteSaved = function (site) {
        var oldSite = this.sites.filter(function (s) { return s.id == site.id; })[0];
        if (oldSite) {
            oldSite.name = site.name;
        }
        this.navigateTo('list');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'yw-app',
            templateUrl: 'app/app.template.html'
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map