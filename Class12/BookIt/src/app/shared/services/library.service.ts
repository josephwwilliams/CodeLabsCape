import { EventEmitter, Injectable } from '@angular/core';
import { Book } from '../book/book.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  bookListChanged = new EventEmitter<Book[]>();

  constructor(private http: HttpClient) {}

  private allBooks: Book[] = [];

  getBooks() {
    return this.allBooks.slice();
  }

  onFetchBooks(searchInput: string) {
    const formattedSearch = searchInput
      .replaceAll(' ', '+')
      .toLocaleLowerCase();

    this.http
      .get(`http://openlibrary.org/search.json?q=${formattedSearch}`)
      .subscribe((data) => {
        this.allBooks = [];

        this.saveBooks(data);
      });
  }

  saveBooks(books) {
    books.docs.map((book) => {
      const { title, author_name, first_publish_year, isbn } = book;
      const newBook = new Book(
        title,
        author_name ? author_name[0] : '',
        '',
        'https://tse2.mm.bing.net/th?id=OIP.I6LGwie40Vw4K8gmV52MKwHaLc&pid=Api&P=0&w=300&h=300',
        0,
        first_publish_year,
        isbn ? isbn[0] : ''
      );

      console.log('new: ', newBook);
      this.allBooks.push(newBook);
    });
    console.log(this.allBooks);

    this.bookListChanged.next(this.allBooks.slice());
  }
}
