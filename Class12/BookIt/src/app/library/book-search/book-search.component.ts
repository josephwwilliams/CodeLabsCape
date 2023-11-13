import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LibraryService } from 'src/app/shared/services/library.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css'],
})
export class BookSearchComponent {
  searchForm = this.fb.group({
    search: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private libraryService: LibraryService
  ) {}

  onSubmit() {
    if (this.searchForm.invalid) return;
    const searchValue = this.searchForm.get('search').value;
    this.libraryService.onFetchBooks(searchValue);
  }
}
