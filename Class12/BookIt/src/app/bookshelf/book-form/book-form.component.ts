import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent {
  formSubmitted = false;

  bookForm: FormGroup = this.fb.group({
    title: [null, Validators.required],
    author: [null, Validators.required],
    genre: ['mystery', Validators.required],
    coverImagePath: [null, Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (!this.bookForm.valid) {
      return;
    }

    this.formSubmitted = true;

    setTimeout(() => {
      this.formSubmitted = false;
      this.bookForm.reset();
      this.bookForm.patchValue({
        genre: 'mystery',
      });
    }, 2000);
  }

  invalidControl(control: string) {
    return (
      this.bookForm.get(control)?.invalid && this.bookForm.get(control).touched
    );
  }
}
