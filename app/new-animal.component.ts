import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <h3>Add Animal</h3>
    <hr>
    <div>
      <label>Species:</label><br>
      <input #species><br>
      <label>Name:</label><br>
      <input #name><br>
      <label>Age:</label><br>
      <input type="number" #age><br>
      <label>Diet:</label><br>
      <select class="form-control" #diet>
        <option> Omnivore </option>
        <option> Carnivore </option>
        <option> Herbivore </option>
      </select><br>
      <label>Location:</label><br>
      <select class="form-control" #location>
        <option> Northern Trail </option>
        <option> Tropical Rain Forest Building </option>
        <option> Tiger Den </option>
        <option> African Savannah </option>
        <option> Polar Bowl </option>
      </select><br>
      <label>Caretakers:</label><br>
      <input type="number" #caretakers><br>
      <label>Gender</label><br>
      <select class="form-control" #gender>
        <option [value]="Male"> Male </option>
        <option [value]="Female"> Female </option>
      </select><br>
      <label>Likes</label><br>
      <textarea class="form-control" rows="3" #likes></textarea><br>
      <label>Dislikes</label><br>
      <textarea class="form-control" rows="3" #dislikes></textarea><br>
      <label>Image url</label><br>
      <input #image><br>
    </div>
    <button class="btn btn-default"(click)="submitForm( species.value, name.value, age.value, diet.value, location.value, caretakers.value, gender.value, likes.value, dislikes.value, image.value); species.value=''; name.value=''; age.value=''; caretakers.value=''; likes.value=''; dislikes.value=''; image.value='';">Add Animal</button>

  `
})

export class NewAnimalComponent {
  @Output() newAnimal = new EventEmitter();

  submitForm(species: string, name: string, age: string, diet: string, location: string, caretakers: string, gender: string, likes: string, dislikes: string, image: string) {
    var newAnimal: Animal = new Animal(species, name, parseInt(age,10), diet, location, parseInt(caretakers,10), gender, likes, dislikes, image);
    this.newAnimal.emit(newAnimal);
  }
}
