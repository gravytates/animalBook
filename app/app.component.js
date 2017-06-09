"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animal_model_1 = require("./animal.model");
var AppComponent = (function () {
    function AppComponent() {
        this.masterAnimalList = [
            new animal_model_1.Animal('Arctic Fox', 'Moon', 2, 'Carnivore', 'Polar Bowl', 5, 'Female', 'cool Shade', 'loud noises', 'https://s-media-cache-ak0.pinimg.com/736x/e8/1d/d6/e81dd6de06ac330c027afaf6ba2addf4.jpg'),
            new animal_model_1.Animal('Three Toed Sloth', 'Prince', 4, 'Omnivore', 'Tropical Rain Forest', 6, 'Male', 'laying in sun', 'non-rope toys', 'http://i0.kym-cdn.com/entries/icons/facebook/000/012/538/slothy.jpg'),
            new animal_model_1.Animal('Northwest Black Tailed Deer', 'Tinkerbell', 8, 'Herbivore', 'Northern Trail', 2, 'Female', 'delicate roots and leaves', 'loud noises', 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Formosan_sika_deer.jpg'),
            new animal_model_1.Animal('African Box Turtle', 'Calvin', 22, 'Omnivore', 'African Savannah', 1, 'Male', 'the sun and grubs', 'cold', 'http://www.photomazza.com/IMG/jpg_Lo_Psammobates_tentorius_e_una_splendida_testuggine_del_Sud_Africa_c_Giuseppe_Mazza.jpg'),
            new animal_model_1.Animal('Bengal Tiger', 'Hobbes', 1, 'Carnivore', 'Tiger Den', 10, 'Male', 'playing with his food and momma', 'being scolded by his momma', 'https://s-media-cache-ak0.pinimg.com/736x/e8/0c/c8/e80cc82982d9fd3e1736988eb4acdd4e.jpg'),
            new animal_model_1.Animal('Bengal Tiger', 'Suzy', 8, 'Carnivore', 'Tiger Den', 10, 'Female', 'laying in the sun', 'having to scold Hobbes', 'https://cdn.theatlantic.com/assets/media/img/upload/wire/2013/12/23/AP110728069003/square.jpg?1474646053')
        ];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: "\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"jumbotron\">\n        <div class=\"col-md-4\">\n          <h1 id=\"animalBook\">AnimalBook</h1>\n        </div>\n        <div class=\"col-md-4\">\n        </div>\n        <div class=\"col-md-4\">\n          <master [childAnimalList]=\"masterAnimalList\"></master>\n        </div>\n      </div>\n    </div>\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-md-12\"><animal-list [childAnimalList]=\"masterAnimalList\"></animal-list></div>\n    </div>\n  </div>\n  <footer class=\"footer\">\n    <div class=\"container\">\n      <a id=\"github\" href=\"https://github.com/gravytates\" target=\"_blank\">follow grady</a>\n    </div>\n  </footer>\n"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map