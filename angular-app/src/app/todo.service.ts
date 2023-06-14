import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [...Array(10)].map((_, index) => ({
    title: `Todo ${10 - index}`,
    completed: false,
  }));

  createTodo(newTodo: Todo) {
    this.todos = [newTodo, ...this.todos];
  }

  deleteTodo(title: string) {
    this.todos = this.todos.filter(todo => todo.title !== title);
  }

  completeTodo(title: string) {
    this.todos = this.todos.map(todo => {
      if (todo.title === title) {
        return {
          ...todo,
          completed: true,
        };
      }
      return todo;
    });
  }
}
