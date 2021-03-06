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
var HnDirective = (function () {
    function HnDirective(element) {
        this.element = element;
    }
    HnDirective.prototype.ngOnInit = function () {
        this.level = parseInt(this.element.nativeElement.nodeName.substring(1));
        this.text = this.element.nativeElement.textContent;
        console.log(this.element.nativeElement.nodeName + " " + this.text);
    };
    return HnDirective;
}());
HnDirective = __decorate([
    core_1.Directive({
        selector: 'h1, h2, h3, h4, h5, h6'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], HnDirective);
exports.HnDirective = HnDirective;
//# sourceMappingURL=hn.directive.js.map