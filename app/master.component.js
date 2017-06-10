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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MasterComponent = (function () {
    function MasterComponent() {
        this.caretakers = null;
        this.totalAverageAge = null;
    }
    MasterComponent.prototype.totalCareTakers = function (childAnimalList) {
        var subcarer = 0;
        for (var _i = 0, childAnimalList_1 = childAnimalList; _i < childAnimalList_1.length; _i++) {
            var animal = childAnimalList_1[_i];
            subcarer += animal.caretakers;
        }
        ;
        this.caretakers = subcarer;
        return this.caretakers;
    };
    MasterComponent.prototype.averageAge = function (childAnimalList) {
        var n = childAnimalList.length;
        var totalAge = 0;
        for (var _i = 0, childAnimalList_2 = childAnimalList; _i < childAnimalList_2.length; _i++) {
            var animal = childAnimalList_2[_i];
            totalAge += animal.age;
        }
        ;
        this.totalAverageAge = (totalAge / n).toPrecision(3);
        return this.totalAverageAge;
    };
    return MasterComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], MasterComponent.prototype, "childAnimalList", void 0);
MasterComponent = __decorate([
    core_1.Component({
        selector: 'master',
        template: "\n    <p>where animals roar</p>\n    <h5>Total Minimum Caretakers Required: <span [class]=\"totalCareTakers(childAnimalList)\">{{caretakers}}</span></h5>\n    <h5>Average Age of all Animals: <span [class]=\"averageAge(childAnimalList)\">{{totalAverageAge}}</span></h5>\n\n  "
    })
], MasterComponent);
exports.MasterComponent = MasterComponent;
//# sourceMappingURL=master.component.js.map