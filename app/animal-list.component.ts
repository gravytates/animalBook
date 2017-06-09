import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `

  <div class="row">
    <div class="col-md-4">
      <new-animal (newAnimal)="newAnimal($event)"></new-animal>
    </div>
    <div class="col-md-4">
      <h3>Animal List</h3>
      <hr>

      <select class="form-control" (change)="onChange($event.target.value)">
        <option value="allAnimals" selected="selected">All Animals</option>
        <option value="youngAnimals">Animals under 2 years old</option>
        <option value="matureAnimals">Animals 2 years or older</option>
      </select>
      <hr>

      <div *ngFor='let currentAnimal of childAnimalList | age:filterAge'>
        <p (click)="editAnimal(currentAnimal)"><b>{{currentAnimal.name}}, {{currentAnimal.species}}</b>, Age: <b>{{currentAnimal.age}}</b></p>
      </div>
    </div>
    <div class="col-md-4">
      <h3>Animal Details/Edit</h3>
      <hr>
      <div *ngIf="selectedAnimal">
        <edit-animal [selectedAnimal]="selectedAnimal" (finishedEditingSender)="finishedEditing()"></edit-animal>
      </div>
    </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() newAnimalSender = new EventEmitter();
  selectedAnimal = null;



  newAnimal(newAnimal){
    this.childAnimalList.push(newAnimal);
    this.newAnimalSender.emit(this.childAnimalList);
  }

  editAnimal(currentAnimal){
    this.selectedAnimal = currentAnimal;
  }

  finishedEditing(){
    this.selectedAnimal = null;
  }

  filterAge: string = "allAnimals";

  onChange(menuOption) {
    this.filterAge = menuOption;
  }
}
