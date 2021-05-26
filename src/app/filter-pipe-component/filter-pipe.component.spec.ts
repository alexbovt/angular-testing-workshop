import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPipeComponent } from './filter-pipe.component';
import {FilterPipe} from './filter-pipe/filter.pipe';

describe('FilterPipeComponent', () => {
  let component: FilterPipeComponent;
  let fixture: ComponentFixture<FilterPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterPipeComponent, FilterPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
