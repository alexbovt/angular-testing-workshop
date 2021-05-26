import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly items = ['foo', 'bar', 'baz', 'foobar', 'foobaz', 'fizzbazz']

  search(term: string): Observable<string[]>{
    const result = this.items.filter(x => x.startsWith(term));
    return of(result)
  }
}
