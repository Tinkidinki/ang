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
var GameComponent = (function () {
    function GameComponent() {
        this.tokens = 4;
        this.collected = 0;
        this.divers = ["Bob", "Cecile", "Jake"];
    }
    GameComponent.prototype.getMe = function () {
        return this;
    };
    GameComponent.prototype.tokenFound = function (newTokens) {
        this.collected += newTokens;
    };
    return GameComponent;
}());
GameComponent = __decorate([
    core_1.Component({
        selector: 'yw-game',
        templateUrl: 'app/game.template.html'
    }),
    __metadata("design:paramtypes", [])
], GameComponent);
exports.GameComponent = GameComponent;
//# sourceMappingURL=game.component.js.map