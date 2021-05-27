import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {SearchService} from './search.service';

@Component({
  selector: 'app-search-reactive',
  template: `
    <input data-test="input" type="text" [formControl]="termCtrl"/>
    <hr>

    <ul data-test="ul" *ngIf="results$ | async as results">
      <li data-test="li" *ngFor="let item of results">{{ item }}</li>
    </ul>
  `
})
export class SearchReactiveComponent implements OnInit {

  termCtrl = new FormControl('');
  results$: Observable<string[]>;

  constructor(private readonly searchService: SearchService) {
  }

  ngOnInit(): void {
    this.results$ = this.termCtrl.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(1_000),
      switchMap(term => this.searchService.search(term))
    );
  }
}
