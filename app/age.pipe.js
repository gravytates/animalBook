"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AgePipe = (function () {
    function AgePipe() {
    }
    AgePipe.prototype.transform = function (input, filterCondition) {
        var output = [];
        switch (filterCondition) {
            case "youngAnimals":
                return input.filter(function (animal) {
                    return animal.age < 3;
                });
            case "matureAnimals":
                return input.filter(function (animal) {
                    return animal.age >= 3;
                });
            case "omnivores":
                return input.filter(function (animal) {
                    return animal.diet === "Omnivore";
                });
            case "carnivores":
                return input.filter(function (animal) {
                    return animal.diet === "Carnivore";
                });
            case "herbivores":
                return input.filter(function (animal) {
                    return animal.diet === "Herbivore";
                });
            case "any-meat-eaters":
                return input.filter(function (animal) {
                    return animal.diet === "Omnivore" || animal.diet === "Carnivore";
                });
            default:
                return input;
        }
    };
    return AgePipe;
}());
AgePipe = __decorate([
    core_1.Pipe({
        name: 'age',
        pure: false
    })
], AgePipe);
exports.AgePipe = AgePipe;
//# sourceMappingURL=age.pipe.js.map