import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from './book.model';
import { BookshelfService } from '../services/bookshelf.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  @Input() book: Book;

  constructor(private bookshelfService: BookshelfService) {}

  onBookSelected() {
    this.bookshelfService.bookSelected.emit(this.book);
  }
}
