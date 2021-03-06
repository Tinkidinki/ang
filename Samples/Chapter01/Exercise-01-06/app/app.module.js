"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var dive_log_component_1 = require("./dive-log.component");
var content_filter_pipe_1 = require("./content-filter.pipe");
// Looks like Ngmodule packs all these classes into a module.
// The classes are in the arrays of the fields of the json objects.
// NEW REALIZATION: a decorator assigns metadata to the class
// defined just below it.
// "decorates" the class with metadata, if you will.
// I'm guessing this means that AppModule class is a module.
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [
                dive_log_component_1.DiveLogComponent,
                content_filter_pipe_1.ContentFilterPipe
            ],
            bootstrap: [dive_log_component_1.DiveLogComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
// All the other classes have to go into the declaration in the app module.
//# sourceMappingURL=app.module.js.map