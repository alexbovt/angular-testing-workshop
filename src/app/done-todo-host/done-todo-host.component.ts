import {Component} from '@angular/core';

export class Todo {
  constructor(
    public title: string,
    public isDone = false,
  ) {
  }
}

@Component({
  selector: 'app-done-todo-host',
  template: `
    <app-done-todo
      *ngFor="let todo of todos"
      [todo]="todo"
      (todoClicked)="onTodoClicked(todo)"
    >
    </app-done-todo>
  `
})
export class DoneTodoHostComponent {

  readonly todos: Todo[] = [
    new Todo('Foo', true),
    new Todo('Bar'),
    new Todo('Baz'),
  ];

  onTodoClicked(todo: Todo): void {
    console.log(todo);
  }
}
