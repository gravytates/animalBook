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
var NewAnimalComponent = (function () {
    function NewAnimalComponent() {
        this.newAnimal = new core_1.EventEmitter();
    }
    NewAnimalComponent.prototype.submitForm = function (species, name, age, diet, location, caretakers, gender, likes, dislikes, image) {
        var newAnimal = new animal_model_1.Animal(species, name, parseInt(age, 10), diet, location, parseInt(caretakers, 10), gender, likes, dislikes, image);
        this.newAnimal.emit(newAnimal);
    };
    return NewAnimalComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], NewAnimalComponent.prototype, "newAnimal", void 0);
NewAnimalComponent = __decorate([
    core_1.Component({
        selector: 'new-animal',
        template: "\n    <h3>Add Animal</h3>\n    <br>\n    <div>\n      <label>Species:</label><br>\n      <input #species><br>\n      <label>Name:</label><br>\n      <input #name><br>\n      <label>Age:</label><br>\n      <input type=\"number\" #age><br>\n      <label>Diet:</label><br>\n      <select class=\"form-control\" #diet>\n        <option> Omnivore </option>\n        <option> Carnivore </option>\n        <option> Herbivore </option>\n      </select><br>\n      <label>Location:</label><br>\n      <select class=\"form-control\" #location>\n        <option> Northern Trail </option>\n        <option> Tropical Rain Forest </option>\n        <option> Tiger Den </option>\n        <option> African Savannah </option>\n        <option> Polar Bowl </option>\n      </select><br>\n      <label>Caretakers:</label><br>\n      <input type=\"number\" #caretakers><br>\n      <label>Gender</label><br>\n      <select class=\"form-control\" #gender>\n        <option [value]=\"Male\"> Male </option>\n        <option [value]=\"Female\"> Female </option>\n      </select><br>\n      <label>Likes</label><br>\n      <textarea class=\"form-control\" rows=\"3\" #likes></textarea><br>\n      <label>Dislikes</label><br>\n      <textarea class=\"form-control\" rows=\"3\" #dislikes></textarea><br>\n      <label>Image url</label><br>\n      <input #image><br>\n    </div>\n    <br>\n    <button class=\"btn btn-default\"(click)=\"submitForm( species.value, name.value, age.value, diet.value, location.value, caretakers.value, gender.value, likes.value, dislikes.value, image.value); species.value=''; name.value=''; age.value=''; caretakers.value=''; likes.value=''; dislikes.value=''; image.value='';\">Add Animal</button>\n\n  "
    })
], NewAnimalComponent);
exports.NewAnimalComponent = NewAnimalComponent;
//# sourceMappingURL=new-animal.component.js.map