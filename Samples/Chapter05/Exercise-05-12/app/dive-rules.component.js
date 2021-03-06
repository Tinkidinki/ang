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
var yw_day_directive_1 = require("./yw-day.directive");
var yw_night_directive_1 = require("./yw-night.directive");
var DiveRulesComponent = (function () {
    function DiveRulesComponent() {
        this.diveType = 'day';
    }
    DiveRulesComponent.prototype.toggleDiveType = function () {
        if (this.diveType == 'day') {
            this.diveType = 'night';
        }
        else {
            this.diveType = 'day';
        }
    };
    return DiveRulesComponent;
}());
DiveRulesComponent = __decorate([
    core_1.Component({
        selector: 'yw-instructions',
        templateUrl: 'app/dive-rules.template.html',
        directives: [yw_day_directive_1.DayDirective, yw_night_directive_1.NightDirective]
    }),
    __metadata("design:paramtypes", [])
], DiveRulesComponent);
exports.DiveRulesComponent = DiveRulesComponent;
//# sourceMappingURL=dive-rules.component.js.map