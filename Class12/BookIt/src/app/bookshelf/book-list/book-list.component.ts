import { Component, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/shared/book/book.model';
import { BookshelfService } from 'src/app/shared/services/bookshelf.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  myBooks: Book[] = [];
  sortSwitcher = true;
  sortField: string = 'author';

  constructor(
    private bookshelfService: BookshelfService,
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.myBooks = this.bookshelfService.getBooks();
    this.bookshelfService.bookListChanged.subscribe(() => {
      this.myBooks = this.bookshelfService.getBooks();
    });
  }

  onNewBook() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onRemoveBook(idx: number) {
    this.bookshelfService.removeBook(idx);
  }

  onSort() {
    this.sortSwitcher = !this.sortSwitcher;

    if (this.sortSwitcher) {
      this.sortField = 'author';
    } else {
      this.sortField = 'title';
    }
  }
}
