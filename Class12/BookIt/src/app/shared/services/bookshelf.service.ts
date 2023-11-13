import { EventEmitter, Injectable } from '@angular/core';
import { Book } from '../book/book.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookshelfService {
  bookSelected = new Subject<Book>();
  bookListChanged = new Subject<Book[]>();

  bookAdded = new Subject<Book>();

  private myBooks: Book[] = [];

  getBook(idx: number) {
    return this.myBooks.slice()[idx];
  }

  getBooks() {
    return this.myBooks.slice();
  }

  saveBook(book: Book) {
    this.myBooks.push(book);
    this.bookListChanged.next(this.myBooks.slice());
    this.bookAdded.next(book);
  }

  removeBook(idx: number) {
    if (idx !== -1) {
      this.myBooks.splice(idx, 1);
      this.bookListChanged.next(this.myBooks.slice());
    }
  }

  updateBook(idx: number, udpatedBook: Book) {
    this.myBooks[idx] = udpatedBook;
    this.bookListChanged.next(this.myBooks.slice());
  }

  setBooks(books: Book[] | []) {
    console.log(books);
    this.myBooks = books || [];

    this.bookListChanged.next(this.myBooks.slice());
  }
}
