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
var ItemComponent = (function () {
    function ItemComponent() {
    }
    return ItemComponent;
}());
ItemComponent = __decorate([
    core_1.Component({
        selector: 'yw-item',
        template: "\n    <div class=\"container-fluid\">\n      <h4>Item {{name}}</h4>\n    </div>\n  ",
        styles: ["\n    div {\n      background-color: #ffff40;\n      padding: 8px;\n    }\n  "],
        inputs: ['name']
    }),
    __metadata("design:paramtypes", [])
], ItemComponent);
exports.ItemComponent = ItemComponent;
//# sourceMappingURL=item.component.js.map