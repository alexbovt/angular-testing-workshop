import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneTodoHostComponent } from './done-todo-host.component';

describe('DoneTodoHostComponent', () => {
  let component: DoneTodoHostComponent;
  let fixture: ComponentFixture<DoneTodoHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoneTodoHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneTodoHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
