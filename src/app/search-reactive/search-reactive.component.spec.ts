import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchReactiveComponent } from './search-reactive.component';

describe('SearchReactiveComponent', () => {
  let component: SearchReactiveComponent;
  let fixture: ComponentFixture<SearchReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
