import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prepUpper'
})
export class PrepUpperPipe implements PipeTransform {

  transform(value: String): unknown {
    let word = value.split(' ');
    let preps = ['Of', 'The', 'In'];
    for(var i=0; i<word.length; i++){
      if (preps.includes(word[i])){
        word[i] = word[i].toLowerCase();
      }
    }
    return word.join(' ');
  }

}
