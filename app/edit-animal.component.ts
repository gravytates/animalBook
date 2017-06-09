import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'edit-animal',
  template: `
  <br>
  <h4>{{selectedAnimal.name}}'s Details (type-over and submit to edit): </h4>
  <img id="animal-pic" src={{selectedAnimal.image}} alt="Animal Pic">
  <p>
    {{selectedAnimal.name}} is a {{selectedAnimal.gender}} {{selectedAnimal.species}}, currently located in the {{selectedAnimal.location}} portion of the zoo. {{selectedAnimal.name}} is {{selectedAnimal.age}} years old and subsists on a(n) {{selectedAnimal.diet}} diet. There are {{selectedAnimal.caretakers}} care takers, minimum, assigned to {{selectedAnimal.name}}'s well-being. They have informed that {{selectedAnimal.name}}'s likes include {{selectedAnimal.likes}}, and dislikes include {{selectedAnimal.dislikes}}.
  </p>
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
      <option> Tropical Rain Forest </option>
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
