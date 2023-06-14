import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css'],
})
export class NewTodoComponent {
  newTitle = '';

  constructor(private todoService: TodoService) {}

  handleTitleChange(title: string) {
    this.newTitle = title;
  }

  handleAddClick() {
    this.todoService.createTodo({
      title: this.newTitle,
      completed: false,
    });
    this.newTitle = '';
  }
}
