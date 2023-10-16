import { EventEmitter, Injectable } from '@angular/core';
import { Book } from '../book/book.model';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  bookListChanged = new EventEmitter<Book[]>();

  private allBooks: Book[] = [
    new Book(
      'Harry Potter',
      'JKR',
      'Fantasy',
      'https://cdn.vox-cdn.com/thumbor/Gi91EGDL8Szz67xGWFO0jTGy1ec=/0x0:1920x1080/1200x800/filters:focal(755x89:1061x395)/cdn.vox-cdn.com/uploads/chorus_image/image/72144783/harrypotter.0.jpg'
    ),
    new Book(
      'Hatchet',
      'Gary Paulsen',
      'Young Adult',
      'https://m.media-amazon.com/images/I/61OmABKejnL._AC_UF1000,1000_QL80_.jpg'
    ),
    new Book(
      'In The Land of Giants',
      'Muggsy Bogues',
      'Bio',
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1387709307i/1306855.jpg'
    ),
  ];

  getBooks() {
    return this.allBooks.slice();
  }
}
