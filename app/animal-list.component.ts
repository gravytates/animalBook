import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <h3>do it work</h3>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];

}
