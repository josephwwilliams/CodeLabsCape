import { Component } from '@angular/core';
import { Book } from '../shared/book/book.model';
import { BookshelfService } from '../shared/services/bookshelf.service';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css'],
})
export class BookshelfComponent {
  selectedBook: Book;

  constructor(private bookshelfService: BookshelfService) {}

  ngOnInit() {
    this.bookshelfService.bookSelected.subscribe((book: Book) => {
      this.selectedBook = book;
    });
  }
}
