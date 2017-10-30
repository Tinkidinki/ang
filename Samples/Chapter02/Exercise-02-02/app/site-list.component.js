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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// The selector has to be defined in the same module as the component.
// We bound app.component, which contained the template, to the same module as this.
var SiteListComponent = /** @class */ (function () {
    function SiteListComponent() {
        this.onAdd = new core_1.EventEmitter();
    }
    SiteListComponent.prototype.add = function () {
        this.onAdd.emit(null);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], SiteListComponent.prototype, "sites", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], SiteListComponent.prototype, "onAdd", void 0);
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