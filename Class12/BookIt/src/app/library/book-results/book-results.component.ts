import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { Book } from 'src/app/shared/book/book.model';
import { BookshelfService } from 'src/app/shared/services/bookshelf.service';
import { LibraryService } from 'src/app/shared/services/library.service';

@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.css'],
})
export class BookResultsComponent {
  allBooks = this.libraryService.bookListChanged.pipe(
    tap((data) => console.log('BOOKRESULTS: ', data))
  );

  constructor(
    private libraryService: LibraryService,
    private bookshelfService: BookshelfService
  ) {}

  onSaveBook(book: Book) {
    this.bookshelfService.saveBook(book);
  }
}
