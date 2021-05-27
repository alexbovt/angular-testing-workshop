import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from '../done-todo-host.component';

@Component({
  selector: 'app-done-todo',
  template: `
    <div data-test="todo" [class.done]="todo?.isDone" (click)="todoClicked.emit(todo)">{{todo?.title}}</div>
  `,
  styles: [`
    .done {
      text-decoration: line-through;
    }
  `],
})
export class DoneTodoComponent {

  @Input() todo: Todo | undefined;

  @Output() todoClicked = new EventEmitter<Todo>();
}
