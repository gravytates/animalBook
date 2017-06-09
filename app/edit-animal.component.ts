import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'edit-animal',
  template: `
  <h4>{{selectedAnimal.name}}'s Details (type-over and submit to edit): </h4>
  <img id="animal-pic" src={{selectedAnimal.image}} alt="Animal Pic">
  <div>
    <label>Species:</label><br>
    <input [(ngModel)]="selectedAnimal.species"><br>
    <label>Name:</label><br>
    <input [(ngModel)]="selectedAnimal.name"><br>
    <label>Age:</label><br>
    <input type="number" [(ngModel)]="selectedAnimal.age"><br>
    <label>Diet:</label><br>
    <select class="form-control" [(ngModel)]="selectedAnimal.diet">
      <option> Omnivore </option>
      <option> Carnivore </option>
      <option> Herbivore </option>
    </select><br>
    <label>Location:</label><br>
    <select class="form-control" [(ngModel)]="selectedAnimal.location">
      <option> Northern Trail </option>
      <option> Tropical Rain Forest Building </option>
      <option> Tiger Den </option>
      <option> African Savannah </option>
      <option> Polar Bowl </option>
    </select><br>
    <label>Caretakers:</label><br>
    <input type="number" [(ngModel)]="selectedAnimal.caretakers"><br>
    <label>Gender</label><br>
    <select class="form-control" [(ngModel)]="selectedAnimal.gender">
      <option> Male </option>
      <option> Female </option>
    </select><br>
    <label>Likes</label><br>
    <textarea class="form-control" rows="3" [(ngModel)]="selectedAnimal.likes"></textarea><br>
    <label>Dislikes</label><br>
    <textarea class="form-control" rows="3" [(ngModel)]="selectedAnimal.dislikes"></textarea>
    <label>Image url</label><br>
    <input [(ngModel)]="selectedAnimal.image">
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
