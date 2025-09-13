import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {
//pipetransform is an interface that ensures logic of pipe is written in transform method
  transform(value: unknown, ...args: unknown[]): unknown {
    console.log("value - ", value);
    console.log("${value} - ", '${value}');
    console.log("args - ", args);
    //....VariableName ==> Rest parameter ==> It is an array that can take 0 or more arguments
    if (args[0] == 'Male'){
      return "Mr." +  value;
    }else if (args[0] == 'Female'){
      return "Miss." + value;
    } else {
      return "Invalid gender";
    }
  }

}
