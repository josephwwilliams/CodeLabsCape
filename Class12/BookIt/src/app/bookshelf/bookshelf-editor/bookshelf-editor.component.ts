import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Book } from 'src/app/shared/book/book.model';
import { BookshelfService } from 'src/app/shared/services/bookshelf.service';

@Component({
  selector: 'app-bookshelf-editor',
  templateUrl: './bookshelf-editor.component.html',
  styleUrls: ['./bookshelf-editor.component.css'],
})
export class BookshelfEditorComponent {
  idx: number;
  isEditMode: boolean = false;

  editForm: FormGroup = this.fb.group({
    title: [null, Validators.required],
    author: [null, Validators.required],
    genre: ['mystery', Validators.required],
    coverImagePath: [null, Validators.required],
  });

  constructor(
    private router: ActivatedRoute,
    private fb: FormBuilder,
    private bookshelfService: BookshelfService
  ) {}

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      this.idx = +params['id'];
      this.isEditMode = params['id'] != null;
      const book = this.bookshelfService.getBook(this.idx);
      this.editForm.patchValue({
        title: book.title,
        author: book.author,
        coverImagePath: book.coverImagePath,
        genre: book.genre,
      });
    });
  }

  invalidControl(control: string) {
    return (
      this.editForm.get(control)?.invalid && this.editForm.get(control).touched
    );
  }

  onSubmit() {
    if (this.editForm.invalid) return;

    const editedBook = this.editForm.value;

    this.bookshelfService.updateBook(this.idx, editedBook);
  }
}
