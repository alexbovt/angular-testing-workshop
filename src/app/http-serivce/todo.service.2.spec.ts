import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import {Post, TodoService} from './todo.service';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

describe('TodoService with custom HttpClient', () => {
  let service: TodoService;
  let httpClient: HttpClient;

  const mocks = {
    getResponse: new Subject<any>(),
    postResponse: new Subject<any>(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodoService,
        {
          provide: HttpClient, useValue: {
            get: jasmine.createSpy().and.returnValue(mocks.getResponse),
            post: jasmine.createSpy().and.returnValue(mocks.postResponse)
          }
        }
      ],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TodoService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAll()', done => {
    service.getAll().subscribe(posts => {
      expect(posts).toEqual(['Post1', 'Post2']);
      done();
    });

    expect(httpClient.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts');
    mocks.getResponse.next([
      {
        title: 'Post1',
        body: 'Body1',
        userId: 1,
      },
      {
        title: 'Post2',
        body: 'Body2',
        userId: 2,
      }
    ]);
  });

  it('getById()', done => {
    const id = 1;
    service.getById(id).subscribe(postById => {
      expect(postById.userId).toBe(id);
      done();
    });
    expect(httpClient.get).toHaveBeenCalledWith(`https://jsonplaceholder.typicode.com/posts/${id}`);
    mocks.getResponse.next({title: 'New Post', body: 'New post body', userId: id});
  });

  it('create()', done => {
    const post: Post = {title: 'New Post', body: 'New post body', userId: 1};
    service.create(post).subscribe(newPost => {
      expect(newPost).toEqual(post);
      done();
    });
    expect(httpClient.post).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts', JSON.stringify(post));
    mocks.postResponse.next(post);
  });
});
