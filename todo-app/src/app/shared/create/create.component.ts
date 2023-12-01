import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  createForm: FormGroup = this.formBuilder.group({
    todo: new FormControl(null, [Validators.required]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService
  ) {}

  onSubmit() {
    if (this.createForm.invalid) return;

    const formValue = this.createForm.value;

    const todo = {
      chore: formValue.todo,
      completed: false,
    };

    this.todoService.create(todo);
    this.createForm.reset();
  }
}
