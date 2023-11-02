import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../book/book.model';

@Pipe({
  name: 'sort',
})
export class FilterPipe implements PipeTransform {
  transform(books: Book[], filter: string) {
    books.sort((a: Book, b: Book) => {
      if (a[filter] < b[filter]) {
        return -1;
      } else if (a[filter] > b[filter]) {
        return 1;
      } else {
        return 0;
      }
    });
    return books;
  }
}
