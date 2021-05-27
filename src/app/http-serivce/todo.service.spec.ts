import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {Post, TodoService} from './todo.service';

describe('TodoService with HttpTestingController', () => {
  let service: TodoService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TodoService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllTitles()', done => {
    service.getAllTitles().subscribe(posts => {
      expect(posts).toEqual(['Post1', 'Post2']);
      done();
    });
    const req = httpTestingController.expectOne(r => {
      return r.url === 'https://jsonplaceholder.typicode.com/posts';
    });
    expect(req.request.method).toBe('GET');
    req.flush([
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

  it('create()', done => {
    const post: Post = {title: 'New Post', body: 'New post body', userId: 1};
    service.create(post).subscribe(newPost => {
      expect(newPost).toEqual(post);
      done();
    });
    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/posts');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toBe(JSON.stringify(post));
    req.flush(post);
  });

  it('getById()', done => {
    const id = 1;
    service.getById(id).subscribe(postById => {
      expect(postById.userId).toBe(id);
      done();
    });
    const req = httpTestingController.expectOne(`https://jsonplaceholder.typicode.com/posts/${id}`);
    expect(req.request.method).toBe('GET');
    req.flush({title: 'New Post', body: 'New post body', userId: id});
  });
});
