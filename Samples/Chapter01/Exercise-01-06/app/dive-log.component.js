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
// So component decorator tells what
// part of the html page is controlled by 
// what template.
// here anything labelled divelog is controlled 
// by the divelog template.
var DiveLogComponent = /** @class */ (function () {
    function DiveLogComponent() {
        // Dives and stock dives are arrays of dictionaries.
        this.dives = [];
        this._index = 0;
        this._stockDives = dive_log_entry_1.DiveLogEntry.StockDives;
    }
    // Criteria for adding a dive
    DiveLogComponent.prototype.enableAdd = function () {
        return this._index < this._stockDives.length;
    };
    DiveLogComponent.prototype.addDive = function () {
        if (this.enableAdd()) {
            this.dives.push(this._stockDives[this._index++]);
            // Remember this trick from cpro?
            // pushing to the next index and updating at the same time.
            // Also, I just need to change the array for the display to change!
            // How cool is that?
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
        // And here is the data you give the template.
    ], DiveLogComponent);
    return DiveLogComponent;
}());
exports.DiveLogComponent = DiveLogComponent;
//this is a dive component object, that contains 
//an array of dives, an index of the dives, etc.
// the object also contains methods.
//typescript objects are actually class instances, thank gods for that.
//# sourceMappingURL=dive-log.component.js.map