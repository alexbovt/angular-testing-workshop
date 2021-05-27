import {Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button data-test="decrement-btn" (click)="decrement()">-</button>
    <div data-test="counter" class="counter">{{counter}}</div>
    <button data-test="increment-btn" (click)="increment()">+</button>
  `,
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  counter = 0;

  decrement(): void {
    this.counter--;
  }

  increment(): void {
    this.counter++;
  }
}
