import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkcasing'
})
export class CheckcasingPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
