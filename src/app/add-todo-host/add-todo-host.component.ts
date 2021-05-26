import {Component} from '@angular/core';

@Component({
  selector: 'app-add-todo-host',
  template: `
    <app-add-todo (addTodo)="todos.push($event)"></app-add-todo>
    <hr>
    <ul>
      <li *ngFor="let todo of todos">{{todo}}</li>
    </ul>
  `
})
export class AddTodoHostComponent {

  readonly todos = [];
}
