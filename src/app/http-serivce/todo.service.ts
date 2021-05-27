import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

export interface Post {
  title: string;
  body: string;
  userId: number;
}

@Injectable()
export class TodoService {

  private readonly url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private readonly httpClient: HttpClient) {
  }

  getById(id: number): Observable<Post> {
    return this.httpClient.get<Post>(`${this.url}/${id}`);
  }

  getAll(): Observable<string[]> {
    return this.httpClient.get<Post[]>(this.url).pipe(
      map(posts => posts.map(x => x.title))
    );
  }

  create(post: Post): Observable<Post> {
    return this.httpClient.post<Post>(this.url, JSON.stringify(post));
  }
}
