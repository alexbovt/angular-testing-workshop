import {Component} from '@angular/core';
import {Post, TodoService} from './todo.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-http-serivce',
  template: `
    <button (click)="fetchAll()">Fetch All</button>

    <ul>
      <li *ngFor="let post of posts$ | async">{{ post.title }}</li>
    </ul>
  `
})
export class HttpSerivceComponent {

  posts$ = new Subject<Post[]>();

  constructor(private readonly todoService: TodoService) {
  }


  fetchAll(): void {
    this.todoService.getAll().subscribe(posts => this.posts$.next(posts));
  }
}
