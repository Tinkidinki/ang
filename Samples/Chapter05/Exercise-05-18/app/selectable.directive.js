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
var core_2 = require("@angular/core");
var SelectableDirective = (function () {
    function SelectableDirective(element) {
        this.element = element;
        this.onSelectionChanged = new core_2.EventEmitter();
        this.isSelected = false;
        this.childSpan = document.createElement('span');
        element.nativeElement.appendChild(this.childSpan);
    }
    SelectableDirective.prototype.selected = function () { return this.isSelected; };
    SelectableDirective.prototype.extraPadding = function () { return 4; };
    SelectableDirective.prototype.onMouseEnter = function () {
        this.setAppearance(this.hoverColor, 'pointer');
    };
    SelectableDirective.prototype.onMouseLeave = function () {
        this.setAppearance(null, null);
    };
    SelectableDirective.prototype.onClick = function () {
        this.isSelected = !this.isSelected;
        this.onSelectionChanged.emit(this.itemId + ":" + this.isSelected);
        this.childSpan.textContent = this.isSelected ? "(!) " : "";
    };
    SelectableDirective.prototype.setAppearance = function (color, cursor) {
        var style = this.element.nativeElement.style;
        style.backgroundColor = color;
        style.cursor = cursor;
    };
    return SelectableDirective;
}());
SelectableDirective = __decorate([
    core_1.Directive({
        selector: '[ywSelectable]',
        inputs: [
            'hoverColor: ywSelectable',
            'itemId: ywId'
        ],
        outputs: ['onSelectionChanged'],
        host: {
            '[class.selected]': 'selected()',
            '[style.padding.px]': 'extraPadding()',
            '(mouseenter)': 'onMouseEnter()',
            '(mouseleave)': 'onMouseLeave()',
            '(click)': 'onClick()'
        }
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], SelectableDirective);
exports.SelectableDirective = SelectableDirective;
//# sourceMappingURL=selectable.directive.js.map