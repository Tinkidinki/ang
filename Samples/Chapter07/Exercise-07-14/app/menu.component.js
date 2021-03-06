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
var core_2 = require("@angular/core");
var menu_section_component_1 = require("./menu-section.component");
var MenuComponent = (function () {
    function MenuComponent() {
    }
    return MenuComponent;
}());
__decorate([
    core_2.ContentChildren(menu_section_component_1.MenuSectionComponent),
    __metadata("design:type", core_2.QueryList)
], MenuComponent.prototype, "sections", void 0);
MenuComponent = __decorate([
    core_1.Component({
        selector: 'yw-menu',
        template: "\n    <div>\n      <menu-section *ngFor=\"let section of sections\" \n        [title]=\"section.title\">\n        <menu-item *ngFor=\"let item of section.items\" \n          [title]=\"item.title\">\n        </menu-item>\n      </menu-section>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map