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
var ActionableDirective = (function () {
    function ActionableDirective(element) {
        this.element = element;
    }
    ActionableDirective.prototype.onMouseEnter = function () {
        this.setAppearance('#aaaaaa', 'pointer');
    };
    ActionableDirective.prototype.onMouseLeave = function () {
        this.setAppearance(null, null);
    };
    ActionableDirective.prototype.setAppearance = function (color, cursor) {
        var style = this.element.nativeElement.style;
        style.backgroundColor = color;
        style.cursor = cursor;
    };
    return ActionableDirective;
}());
__decorate([
    core_1.HostListener('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ActionableDirective.prototype, "onMouseEnter", null);
__decorate([
    core_1.HostListener('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ActionableDirective.prototype, "onMouseLeave", null);
ActionableDirective = __decorate([
    core_1.Directive({
        selector: '[ywActionable]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], ActionableDirective);
exports.ActionableDirective = ActionableDirective;
//# sourceMappingURL=actionable.directive.js.map