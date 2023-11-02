import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from './hero.model';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipe implements PipeTransform {
  transform(heroes: Hero[], filterSearch: string) {
    if (!filterSearch) {
      return heroes;
    }

    if (heroes.length < 1) {
      return [];
    }
    filterSearch = filterSearch.toLocaleLowerCase();

    return heroes.filter((hero) => {
      return hero.name.toLocaleLowerCase().includes(filterSearch);
    });
  }
}
