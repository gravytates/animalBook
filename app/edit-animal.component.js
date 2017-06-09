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
var animal_model_1 = require("./animal.model");
var EditAnimalComponent = (function () {
    function EditAnimalComponent() {
        this.finishedEditingSender = new core_1.EventEmitter();
    }
    EditAnimalComponent.prototype.finishedEditing = function () {
        this.finishedEditingSender.emit();
    };
    return EditAnimalComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", animal_model_1.Animal)
], EditAnimalComponent.prototype, "selectedAnimal", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EditAnimalComponent.prototype, "finishedEditingSender", void 0);
EditAnimalComponent = __decorate([
    core_1.Component({
        selector: 'edit-animal',
        template: "\n  <br>\n  <h4>{{selectedAnimal.name}}'s Details (type-over and submit to edit): </h4>\n  <img id=\"animal-pic\" src={{selectedAnimal.image}} alt=\"Animal Pic\">\n  <p>\n    {{selectedAnimal.name}} is a {{selectedAnimal.gender}} {{selectedAnimal.species}}, currently located in the {{selectedAnimal.location}} portion of the zoo. {{selectedAnimal.name}} is {{selectedAnimal.age}} years old and subsists on a(n) {{selectedAnimal.diet}} diet. There are {{selectedAnimal.caretakers}} care takers, minimum, assigned to {{selectedAnimal.name}}'s well-being. They have informed that {{selectedAnimal.name}}'s likes include {{selectedAnimal.likes}}, and dislikes include {{selectedAnimal.dislikes}}.\n  </p>\n  <div>\n    <label>Species:</label><br>\n    <input [(ngModel)]=\"selectedAnimal.species\"><br>\n    <label>Name:</label><br>\n    <input [(ngModel)]=\"selectedAnimal.name\"><br>\n    <label>Age:</label><br>\n    <input type=\"number\" [(ngModel)]=\"selectedAnimal.age\"><br>\n    <label>Diet:</label><br>\n    <select class=\"form-control\" [(ngModel)]=\"selectedAnimal.diet\">\n      <option> Omnivore </option>\n      <option> Carnivore </option>\n      <option> Herbivore </option>\n    </select><br>\n    <label>Location:</label><br>\n    <select class=\"form-control\" [(ngModel)]=\"selectedAnimal.location\">\n      <option> Northern Trail </option>\n      <option> Tropical Rain Forest </option>\n      <option> Tiger Den </option>\n      <option> African Savannah </option>\n      <option> Polar Bowl </option>\n    </select><br>\n    <label>Caretakers:</label><br>\n    <input type=\"number\" [(ngModel)]=\"selectedAnimal.caretakers\"><br>\n    <label>Gender</label><br>\n    <select class=\"form-control\" [(ngModel)]=\"selectedAnimal.gender\">\n      <option> Male </option>\n      <option> Female </option>\n    </select><br>\n    <label>Likes</label><br>\n    <textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"selectedAnimal.likes\"></textarea><br>\n    <label>Dislikes</label><br>\n    <textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"selectedAnimal.dislikes\"></textarea>\n    <label>Image url</label><br>\n    <input [(ngModel)]=\"selectedAnimal.image\">\n  </div>\n  <br>\n  <button class=\"btn btn-default\" (click)=\"finishedEditing()\">Done</button>\n  "
    })
], EditAnimalComponent);
exports.EditAnimalComponent = EditAnimalComponent;
//# sourceMappingURL=edit-animal.component.js.map