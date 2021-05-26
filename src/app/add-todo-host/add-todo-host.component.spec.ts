import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoHostComponent } from './add-todo-host.component';

describe('AddTodoHostComponent', () => {
  let component: AddTodoHostComponent;
  let fixture: ComponentFixture<AddTodoHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTodoHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
