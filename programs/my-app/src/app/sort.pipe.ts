import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: string[], args?: string): any {
    
    if (args === 'prodName') {
      console.log('value.sort - ', value.sort);
      return value.sort();
    } else if (args === 'price') {
      return value.sort();
    }
  }

}
