import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

export interface Todo {
  chore: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos$ = new BehaviorSubject<Todo[]>([]);

  get todos() {
    return this.todos$.pipe(
      map((todos) => todos.filter((todo) => !todo.completed))
    );
  }

  get completedTodos() {
    return this.todos$.pipe(
      map((todos) => todos.filter((todo) => todo.completed))
    );
  }

  create(todo: Todo) {
    this.todos$.next([...this.todos$.value, todo]);
  }

  markAsComplete(todo: Todo) {
    const currentTodos = this.todos$.getValue();
    const updatedTodos = currentTodos.map((_todo) => {
      if (_todo.chore === todo.chore) {
        return { ..._todo, completed: true };
      }
      return _todo;
    });

    this.todos$.next(updatedTodos);
  }

  remove(todo: Todo) {
    const currentTodos = this.todos$.getValue();

    this.todos$.next(
      currentTodos.filter((currentTodo) => currentTodo.chore !== todo.chore)
    );
  }
}
