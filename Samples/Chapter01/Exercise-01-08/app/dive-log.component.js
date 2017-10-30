"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dive_log_entry_1 = require("./dive-log-entry");
var DiveLogComponent = /** @class */ (function () {
    function DiveLogComponent() {
        this.dives = [];
        this._index = 0;
        this._stockDives = dive_log_entry_1.DiveLogEntry.StockDives;
    }
    DiveLogComponent.prototype.enableAdd = function () {
        return this._index < this._stockDives.length;
    };
    DiveLogComponent.prototype.addDive = function () {
        if (this.enableAdd()) {
            this.dives.push(this._stockDives[this._index++]);
        }
    };
    DiveLogComponent.prototype.clearDives = function () {
        this.dives = [];
        this._index = 0;
    };
    DiveLogComponent = __decorate([
        core_1.Component({
            selector: 'divelog',
            templateUrl: 'app/dive-log.template.html'
        })
    ], DiveLogComponent);
    return DiveLogComponent;
}());
exports.DiveLogComponent = DiveLogComponent;
//# sourceMappingURL=dive-log.component.js.map