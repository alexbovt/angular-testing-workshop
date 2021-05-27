import {Component} from '@angular/core';
import {TodoService} from './todo.service';

@Component({
  selector: 'app-http-serivce',
  template: `
    <button (click)="fetchAll()">Fetch All</button>

    <ul>
      <li *ngFor="let post of posts">{{ post.title }}</li>
    </ul>
  `
})
export class HttpSerivceComponent {

  posts = [];

  constructor(private readonly todoService: TodoService) {
  }


  fetchAll(): void {
    this.todoService.getAllTitles().subscribe(posts => {
      this.posts = posts;
    });
  }
}
