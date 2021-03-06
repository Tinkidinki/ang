"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var site_list_component_1 = require("./site-list.component");
var add_site_component_1 = require("./add-site.component");
var edit_site_component_1 = require("./edit-site.component");
var delete_site_component_1 = require("./delete-site.component");
var site_management_service_1 = require("./site-management.service");
var SitesModule = (function () {
    function SitesModule() {
    }
    return SitesModule;
}());
SitesModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule,
        ],
        declarations: [
            site_list_component_1.SiteListComponent,
            add_site_component_1.AddSiteComponent,
            edit_site_component_1.EditSiteComponent,
            delete_site_component_1.DeleteSiteComponent
        ],
        providers: [site_management_service_1.SiteManagementService]
    }),
    __metadata("design:paramtypes", [])
], SitesModule);
exports.SitesModule = SitesModule;
//# sourceMappingURL=sites.module.js.map