import { Pipe, PipeTransform } from '@angular/core';
import { CarModel } from '../models/car-model';
import { CarsModel } from '../models/cars-model';

@Pipe({
  name: 'searchFilter',
  pure: false
})
export class SearchPipe implements PipeTransform {
  transform(items: CarModel[], filter: number): CarModel[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(item => item.Year === filter);
  }
}
