import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CounterComponent} from './counter.component';
import {By} from '@angular/platform-browser';
import {byDataTest} from '../is-active-class/is-active-class.component.spec';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  const selectors = {
    counter: () => fixture.debugElement.query(By.css(byDataTest('counter'))).nativeElement,
    incrementBtn: () => fixture.debugElement.query(By.css(byDataTest('increment-btn'))).nativeElement,
    decrementBtn: () => fixture.debugElement.query(By.css(byDataTest('decrement-btn'))).nativeElement,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial value as 0', () => {
    expect(component.counter).toBe(0);
  });

  it('should have value = 10', () => {
    const value = 10;
    component.counter = value;
    fixture.detectChanges();
    expect(selectors.counter().textContent).toBe(value.toString());
  });

  it('should increment', () => {
    const value = 10;
    component.counter = value;
    selectors.incrementBtn().click();
    expect(component.counter).toBe(value + 1);
  });

  it('should decrement', () => {
    const value = 11;
    component.counter = value;
    selectors.decrementBtn().click();
    expect(component.counter).toBe(value - 1);
  });

});
