"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// From what I understand, a decorator works for the
// whole file you use.
// Like this pipe decorator specifies characteristics
// of this whole file.
// implements equivalent to inherits
//Here, the pipe decorator assigns metadata to the ContentFilterPipe class.
// We know now, that the class is a pipe, and its name is contentFilter.
var ContentFilterPipe = /** @class */ (function () {
    function ContentFilterPipe() {
    }
    ContentFilterPipe.prototype.transform = function (value, searchFor) {
        if (!searchFor)
            return value;
        searchFor = searchFor.toLowerCase();
        return value.filter(function (dive) {
            return dive.site.toLowerCase().indexOf(searchFor) >= 0 ||
                dive.location.toLowerCase().indexOf(searchFor) >= 0 ||
                dive.depth.toString().indexOf(searchFor) >= 0 ||
                dive.time.toString().indexOf(searchFor) >= 0;
        });
    };
    ContentFilterPipe = __decorate([
        core_1.Pipe({ name: 'contentFilter' })
    ], ContentFilterPipe);
    return ContentFilterPipe;
}());
exports.ContentFilterPipe = ContentFilterPipe;
//# sourceMappingURL=content-filter.pipe.js.map