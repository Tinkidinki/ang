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
var CanDeactivateGuard = (function () {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component) {
        if (component.allowLeave())
            return true;
        var text = component.confirmText() ||
            'Do you want to discard these changes?';
        return new Promise(function (resolve) {
            return resolve(window.confirm(text));
        });
    };
    return CanDeactivateGuard;
}());
CanDeactivateGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], CanDeactivateGuard);
exports.CanDeactivateGuard = CanDeactivateGuard;
//# sourceMappingURL=deactivable.guard.js.map