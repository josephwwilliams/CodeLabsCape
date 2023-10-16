import { Component } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';
import { BookshelfService } from 'src/app/shared/services/bookshelf.service';
import { LibraryService } from 'src/app/shared/services/library.service';

@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.css'],
})
export class BookResultsComponent {
  allBooks: Book[] = [];

  constructor(
    private libraryService: LibraryService,
    private bookshelfService: BookshelfService
  ) {}

  ngOnInit() {
    this.allBooks = this.libraryService.getBooks();
  }

  onSaveBook(book: Book) {
    this.bookshelfService.saveBook(book);
  }
}
