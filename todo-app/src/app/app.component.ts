import { Component } from '@angular/core';
import { TodoService } from './shared/services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-app';

  todos = this.todoService.todos;
  completedTodos = this.todoService.completedTodos;

  constructor(private todoService: TodoService) {}
}
