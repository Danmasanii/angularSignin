import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'na'
})
export class NaPipe implements PipeTransform {

  transform(value: unknown, param?: string): unknown {
    debugger;
    if (value != '' && value !== undefined && value !== null) {
      return value;
    } else {
      console.log(param);
      if (param !== undefined) {
        return param;
      } else {
        return '--';
      }
    }
   
  }

}
