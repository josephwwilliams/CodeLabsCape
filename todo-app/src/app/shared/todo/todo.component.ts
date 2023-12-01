import { Component, Input } from '@angular/core';
import { Todo, TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input() todo!: Todo;

  constructor(private todoService: TodoService) {}

  remove() {
    this.todoService.remove(this.todo);
  }

  complete() {
    this.todoService.markAsComplete(this.todo);
  }
}
