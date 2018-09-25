import { Pipe, PipeTransform } from '@angular/core';
import { Prestation } from '../models/prestation';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: Prestation, args?: any): any {
    console.log(args);
    if (value) {
         if (args) {
            return value.total_TTC(args);
        }
        return value.total_HT();
    }
    return '';

  }

}
