"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// So component decorator tells what
// part of the html page is controlled by 
// what template.
// here anything labelled divelog is controlled 
// by the divelog template.
var DiveLogComponent = /** @class */ (function () {
    function DiveLogComponent() {
        this.dives = [
            {
                site: 'Powai',
                location: 'Mumbai',
                depth: 4,
                time: 23
            },
            {
                site: 'Jog falls',
                location: 'Karnataka',
                depth: 7,
                time: 35
            },
            {
                site: 'ValleyLand',
                location: 'MountainHill',
                depth: 45,
                time: 5
            }
        ];
    }
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
//# sourceMappingURL=dive-log.component.js.map