import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DoneTodoComponent} from './done-todo.component';
import {By} from '@angular/platform-browser';
import {byDataTest} from '../../is-active-class/is-active-class.component.spec';
import {Todo} from '../done-todo-host.component';

describe('DoneTodoComponent', () => {
  let component: DoneTodoComponent;
  let fixture: ComponentFixture<DoneTodoComponent>;

  const selectors = {
    todo: () => fixture.debugElement.query(By.css(byDataTest('todo'))).nativeElement
  };

  const mocks = {
    doneTodo: new Todo('Done', true),
    todo: new Todo('Nie Done', false),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoneTodoComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have done class', () => {
    component.todo = mocks.doneTodo;
    fixture.detectChanges();
    expect(selectors.todo()).toHaveClass('done');
  });

  it('should have done class', () => {
    component.todo = mocks.todo;
    fixture.detectChanges();
    expect(selectors.todo()).not.toHaveClass('done');
  });


  it('should render title', () => {
    component.todo = mocks.todo;
    fixture.detectChanges();
    expect(selectors.todo().textContent).toEqual(mocks.todo.title);
  });


  it('should emit todo', () => {
    const spy = jasmine.createSpy();

    component.todo = mocks.todo;
    component.todoClicked.subscribe(spy);
    selectors.todo().click();

    expect(spy).toHaveBeenCalledWith(mocks.todo);
  });

});
