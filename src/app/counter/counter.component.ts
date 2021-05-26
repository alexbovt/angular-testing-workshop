import {Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="decrement()">-</button>
    <div class="counter">{{counter}}</div>
    <button (click)="increment()">+</button>
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
