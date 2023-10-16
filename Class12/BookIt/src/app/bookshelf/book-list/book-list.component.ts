import { Component, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';
import { BookshelfService } from 'src/app/shared/services/bookshelf.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  myBooks: Book[] = [];

  constructor(private bookshelfService: BookshelfService) {}

  ngOnInit() {
    this.myBooks = this.bookshelfService.getBooks();
    this.bookshelfService.bookListChanged.subscribe(() => {
      this.myBooks = this.bookshelfService.getBooks();
    });
  }

  onRemoveBook(idx: number) {
    this.bookshelfService.removeBook(idx);
  }
}
