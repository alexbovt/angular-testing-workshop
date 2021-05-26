import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-todo',
  template: `
    <input [(ngModel)]="title">
    <button (click)="addTodo.emit(title)">Add</button>
  `
})
export class AddTodoComponent {

  title = '';

  @Output() addTodo = new EventEmitter<string>();
}
