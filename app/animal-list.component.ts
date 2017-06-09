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
      <div *ngFor='let currentAnimal of childAnimalList'>
        <p (click)="editAnimal(currentAnimal)">{{currentAnimal.name}}, Species: {{currentAnimal.species}}, Age: {{currentAnimal.age}}</p>
      </div>
    </div>
    <div class="col-md-4">
      <h3>Edit Animal</h3>
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
}
