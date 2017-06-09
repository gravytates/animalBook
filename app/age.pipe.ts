import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: 'age',
  pure: false
})

export class AgePipe implements PipeTransform {
  transform(input: Animal[], filterCondition){
    var output: Animal[] = [];
    switch(filterCondition){
      case "youngAnimals":
        return input.filter(function(animal){
          return animal.age < 3;
        });
      case "matureAnimals":
        return input.filter(function(animal){
          return animal.age >= 3;
        });
      case "omnivores":
        return input.filter(function(animal){
          return animal.diet === "Omnivore";
        });
      case "carnivores":
        return input.filter(function(animal){
          return animal.diet === "Carnivore";
        });
      case "herbivores":
        return input.filter(function(animal){
          return animal.diet === "Herbivore";
        });
      case "any-meat-eaters":
        return input.filter(function(animal){
          return animal.diet === "Omnivore" || animal.diet === "Carnivore";
        });
      default:
        return input;
    }
  }
}
