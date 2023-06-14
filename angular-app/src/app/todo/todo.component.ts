import { Component, Input } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input() todo!: Todo;

  constructor(private todoService: TodoService) {}

  handleCompleteClick() {
    this.todoService.completeTodo(this.todo.title);
  }

  handleDeleteClick() {
    this.todoService.deleteTodo(this.todo.title);
  }
}
