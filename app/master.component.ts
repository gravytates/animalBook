import { Component, Input } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'master',
  template: `
    <p>where animals roar</p>
    <h5>Total Minimum Caretakers Required: <span [class]="totalCareTakers(childAnimalList)">{{caretakers}}</span></h5>
    <h5>Average Age of all Animals: <span [class]="averageAge(childAnimalList)">{{totalAverageAge}}</span></h5>

  `
})

export class MasterComponent {
  @Input() childAnimalList: Animal[];

  caretakers = null;
  totalAverageAge = null;

  totalCareTakers(childAnimalList){
    var subcarer: number = 0;
    for(var animal of childAnimalList){
      subcarer += animal.caretakers;
    };
    this.caretakers = subcarer;
    return this.caretakers;
  }

  averageAge(childAnimalList){
    var n: number  = childAnimalList.length;
    var totalAge: number = 0;
    for(var animal of childAnimalList){
      totalAge += animal.age;
    };
    this.totalAverageAge = (totalAge / n);
    return this.totalAverageAge;
  }





}
