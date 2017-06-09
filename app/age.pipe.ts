import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: 'age',
  pure: false
})

export class AgePipe implements PipeTransform {
  transform(input: Animal[], desiredAge){
      var output: Animal[] = [];
      if(desiredAge === "youngAnimals") {
      for (var i = 0; i < input.length; i++){
        if (input[i].age < 3){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredAge === "matureAnimals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age >= 3) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredAge === "omnivores"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].diet === "Omnivore") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredAge === "carnivores"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].diet === "Carnivore") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredAge === "herbivores"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].diet === "Herbivore") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredAge === "any-meat-eaters"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].diet === "Carnivore" || input[i].diet === "Omnivore") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
