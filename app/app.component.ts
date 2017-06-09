import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container-fluid">
    <div class="row">
      <div class="jumbotron">
        <div class="col-md-6">
          <h1>AnimalBook</h1>
        </div>
        <div class="col-md-6">
          <master [childAnimalList]="masterAnimalList"></master>
        </div>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-md-12"><animal-list [childAnimalList]="masterAnimalList"></animal-list></div>
    </div>
  </div>
`
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal('Arctic Fox', 'Moon', 2, 'Carnivore', 'Polar Bowl', 5, 'Female', 'Cool Shade', 'Loud noises', 'https://s-media-cache-ak0.pinimg.com/736x/e8/1d/d6/e81dd6de06ac330c027afaf6ba2addf4.jpg'),
    new Animal('Three Toed Sloth', 'Prince', 4, 'Omnivore', 'Tropical Rain Forest Building', 6, 'Male', 'Laying in sun', 'Non-rope toys', 'http://i0.kym-cdn.com/entries/icons/facebook/000/012/538/slothy.jpg'),
    new Animal('Northwest Black Tailed Deer', 'Tinkerbell', 8, 'Herbivore', 'Northern Trail', 2, 'Female', 'Delicate roots and leaves', 'Loud noises', 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Formosan_sika_deer.jpg'),
    new Animal('African Box Turtle', 'Calvin', 22, 'Omnivore', 'African Savannah', 1, 'Male', 'Sun and grubs', 'Cold', 'http://www.photomazza.com/IMG/jpg_Lo_Psammobates_tentorius_e_una_splendida_testuggine_del_Sud_Africa_c_Giuseppe_Mazza.jpg'),
    new Animal('Bengal Tiger', 'Freddy', 1, 'Carnivore', 'Tiger Den', 10, 'Male', 'Playing with his food and momma', 'Being scolded by his momma', 'https://s-media-cache-ak0.pinimg.com/736x/e8/0c/c8/e80cc82982d9fd3e1736988eb4acdd4e.jpg'),
    new Animal('Bengal Tiger', 'Suzy', 8, 'Carnivore', 'Tiger Den', 10, 'Female', 'Laying in the sun', 'Having to scold Freddy', 'https://cdn.theatlantic.com/assets/media/img/upload/wire/2013/12/23/AP110728069003/square.jpg?1474646053')
  ];
}
