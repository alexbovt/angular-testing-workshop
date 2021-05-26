import {Component} from '@angular/core';

@Component({
  selector: 'app-is-active-class',
  template: `
    <div [class.active]="isActive">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, neque?</div>
    <button (click)="isActive = !isActive">{{isActive ? 'Disable' : 'Enable'}}</button>
  `,
  styles: [`
    .active {
      color: green;
    }
  `]
})
export class IsActiveClassComponent {
  isActive = false;
}
