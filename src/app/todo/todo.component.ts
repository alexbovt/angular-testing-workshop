import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

interface Todo {
  title: string;
  isImportant: boolean;
  createdAt: Date;
}

@Component({
  selector: 'app-todo',
  template: `
    <form [formGroup]="todoForm" (ngSubmit)="addTodo()">
      <input type="text" formControlName="title">
      <input type="checkbox" formControlName="important">

      <input type="submit">
    </form>

    <div class="todo-list">

      <ng-container *ngIf="todos.length">
        <span> Todo list </span>

        <ul>
          <li *ngFor="let todo of todos"> {{ todo.title }}</li>
        </ul>
      </ng-container>

    </div>
  `,
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];

  todoForm = new FormGroup({
    title: new FormControl('', Validators.required),
    important: new FormControl(false),
  });

  ngOnInit(): void {
  }

  addTodo(): void {
    this.todos.push({title: 'Simple title', isImportant: true, createdAt: new Date()});
  }

}
