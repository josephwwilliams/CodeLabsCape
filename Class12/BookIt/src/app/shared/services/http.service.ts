import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookshelfService } from './bookshelf.service';
import { Book } from '../book/book.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private databaseURL: string =
    'https://book-it-c3453-default-rtdb.firebaseio.com/books.json';

  constructor(
    private http: HttpClient,
    private bookshelfService: BookshelfService
  ) {}

  saveBooksToFirebase() {
    const books = this.bookshelfService.getBooks();

    this.http.put(this.databaseURL, books).subscribe((res) => {
      console.log(res);
    });
  }

  fetchBooksFromFirebase() {
    return this.http.get(this.databaseURL).subscribe((res: Book[] | []) => {
      this.bookshelfService.setBooks(res);
    });
  }
}
