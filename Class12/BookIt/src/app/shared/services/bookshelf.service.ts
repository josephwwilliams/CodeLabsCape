import { EventEmitter, Injectable } from '@angular/core';
import { Book } from '../book/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookshelfService {
  bookSelected = new EventEmitter<Book>();
  bookListChanged = new EventEmitter<Book[]>();

  private myBooks: Book[] = [
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
      'Cat In Hat',
      'Dr. Seuss',
      'Fantasy',
      'https://target.scene7.com/is/image/Target/GUEST_0a53bc0b-ac19-4cf3-bbf5-24a8f46e755a'
    ),
  ];

  getBook(idx: number) {
    return this.myBooks.slice()[idx];
  }

  getBooks() {
    return this.myBooks.slice();
  }

  saveBook(book: Book) {
    this.myBooks.push(book);
    this.bookListChanged.emit(this.myBooks.slice());
  }

  removeBook(idx: number) {
    if (idx !== -1) {
      this.myBooks.splice(idx, 1);
      this.bookListChanged.emit(this.myBooks.slice());
    }
  }
}
