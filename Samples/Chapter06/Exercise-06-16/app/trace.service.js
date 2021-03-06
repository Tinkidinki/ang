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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var version_token_1 = require("./version-token");
var TraceService = (function () {
    function TraceService() {
    }
    TraceService.prototype.trace = function (message) {
        console.log(message);
    };
    return TraceService;
}());
TraceService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], TraceService);
exports.TraceService = TraceService;
var AdvancedTraceService = (function () {
    function AdvancedTraceService(version) {
        this.version = version;
    }
    AdvancedTraceService.prototype.trace = function (message) {
        console.log("Info: " + this.version + " - " + message);
    };
    return AdvancedTraceService;
}());
AdvancedTraceService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(version_token_1.VERSION)),
    __metadata("design:paramtypes", [String])
], AdvancedTraceService);
exports.AdvancedTraceService = AdvancedTraceService;
//# sourceMappingURL=trace.service.js.map