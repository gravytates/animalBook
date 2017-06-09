import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12"><h1>AnimalBook</h1></div>
    </div>
    <div class="row">
      <div class="col-md-12"><animal-list [childAnimalList]="masterAnimalList"></animal-list></div>
    </div>
  </div>
`
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal('Arctic Fox', 'Moon', 1, 'Carnivore', 'Polar Bowl', 5, 'Female', 'Cool Shade', 'Loud noises'),
    new Animal('Three Toed Sloth', 'Prince', 4, 'Omnivore', 'Tropical Rain Forest Building', 6, 'Male', 'Laying in sun', 'Non-rope toys'),
    new Animal('Northwest Black Tailed Deer', 'Tinkerbell', 8, 'Herbivore', 'Northern Trail', 2, 'Female', 'Delicate roots and leaves', 'Loud noises'),
    new Animal('African Box Turtle', 'Calvin', 22, 'Omnivore', 'African Savannah', 1, 'Male', 'Sun and grubs', 'Cold')
  ];
}
