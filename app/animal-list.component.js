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
var AnimalListComponent = (function () {
    function AnimalListComponent() {
        this.newAnimalSender = new core_1.EventEmitter();
        this.selectedAnimal = null;
        this.filterBy = "allAnimals";
    }
    AnimalListComponent.prototype.newAnimal = function (newAnimal) {
        this.childAnimalList.push(newAnimal);
        this.newAnimalSender.emit(this.childAnimalList);
    };
    AnimalListComponent.prototype.editAnimal = function (currentAnimal) {
        this.selectedAnimal = currentAnimal;
    };
    AnimalListComponent.prototype.finishedEditing = function () {
        this.selectedAnimal = null;
    };
    AnimalListComponent.prototype.onChange = function (menuOption) {
        this.filterBy = menuOption;
    };
    return AnimalListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AnimalListComponent.prototype, "childAnimalList", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AnimalListComponent.prototype, "newAnimalSender", void 0);
AnimalListComponent = __decorate([
    core_1.Component({
        selector: 'animal-list',
        template: "\n\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <new-animal (newAnimal)=\"newAnimal($event)\"></new-animal>\n      </div>\n      <div class=\"col-md-4\">\n        <h3>Animal List</h3>\n        <br>\n\n        <select class=\"form-control\" (change)=\"onChange($event.target.value)\">\n          <option value=\"allAnimals\" selected=\"selected\">All Animals</option>\n          <option value=\"youngAnimals\">Animals under 3 years old</option>\n          <option value=\"matureAnimals\">Animals 3 years or older</option>\n          <option value=\"omnivores\">Omnivores</option>\n          <option value=\"carnivores\">Carnivores</option>\n          <option value=\"herbivores\">Herbivores</option>\n          <option value=\"any-meat-eaters\">All meat eaters</option>\n        </select>\n        <hr>\n\n        <div *ngFor='let currentAnimal of childAnimalList | age:filterBy'>\n          <p class=\"animal-list\" (click)=\"editAnimal(currentAnimal)\"><b>{{currentAnimal.name}}, {{currentAnimal.species}}</b>, Age: <b>{{currentAnimal.age}}</b></p>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <h3>Animal Details & Edit</h3>\n\n        <div *ngIf=\"selectedAnimal\">\n          <edit-animal [selectedAnimal]=\"selectedAnimal\" (finishedEditingSender)=\"finishedEditing()\"></edit-animal>\n        </div>\n      </div>\n    </div>\n  "
    })
], AnimalListComponent);
exports.AnimalListComponent = AnimalListComponent;
//# sourceMappingURL=animal-list.component.js.map