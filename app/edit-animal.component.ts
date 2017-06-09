import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'edit-animal',
  template: `
  <div>
    <label>Species:</label><br>
    <input [(ngModel)]="selectedAnimal.species"><br>
    <label>Name:</label><br>
    <input [(ngModel)]="selectedAnimal.name"><br>
    <label>Age:</label><br>
    <input type="number" [(ngModel)]="selectedAnimal.age"><br>
    <label>Diet:</label><br>
    <select [(ngModel)]="selectedAnimal.diet">
      <option> Omnivore </option>
      <option> Carnivore </option>
      <option> Herbivore </option>
    </select><br>
    <label>Location:</label><br>
    <select [(ngModel)]="selectedAnimal.location">
      <option> Northern Trail </option>
      <option> Tropical Rain Forest Building </option>
      <option> Tiger Den </option>
      <option> African Savannah </option>
      <option> Polar Bowl </option>
    </select><br>
    <label>Caretakers:</label><br>
    <input type="number" [(ngModel)]="selectedAnimal.caretakers"><br>
    <label>Gender</label><br>
    <select [(ngModel)]="selectedAnimal.gender">
      <option [value]="Male"> Male </option>
      <option [value]="Female"> Female </option>
    </select><br>
    <label>Likes</label><br>
    <input [(ngModel)]="selectedAnimal.likes"><br>
    <label>Dislikes</label><br>
    <input [(ngModel)]="selectedAnimal.dislikes"><br>
  </div>
  <br>
  <button class="btn btn-default" (click)="finishedEditing()">Done</button>
  `
})

export class EditAnimalComponent {
  @Input() selectedAnimal: Animal;
  @Output() finishedEditingSender = new EventEmitter();

  finishedEditing(){
  this.finishedEditingSender.emit();
}

}
