import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  pure: false
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], filter: any): any {
    console.log('Filter', filter);
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(item => item.Year === filter);
  }
}
