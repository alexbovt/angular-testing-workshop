import {Component} from '@angular/core';

@Component({
  selector: 'app-is-active-class',
  template: `
    <div data-test="content" [class.active]="isActive && isValid">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, neque?</div>
    <button data-test="toggle-button" (click)="isActive = !isActive">{{isActive ? 'Disable' : 'Enable'}}</button>
  `,
  styles: [`
    .active {
      color: green;
    }
  `]
})
export class IsActiveClassComponent {
  isActive = false;
  isValid = true;
}
