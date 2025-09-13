import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'days'
})
export class DaysPipe implements PipeTransform {

  transform(value: Date): string {
    let installDate = new Date(value).setUTCHours(0,0,0,0);
    let currentDate = new Date().setUTCHours(0,0,0,0);
    let daysRem = installDate - currentDate;
    console.log('install date - ', installDate);
    console.log('current date - ', currentDate);
    console.log('daysRem - ', daysRem);
    daysRem = daysRem/(3600*24*1000);
    console.log('daysRem - ', daysRem);
    return 'Number of days remaining wrt current date is '+daysRem;
  }

}
