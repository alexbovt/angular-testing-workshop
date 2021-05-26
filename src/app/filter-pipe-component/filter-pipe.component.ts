import {Component} from '@angular/core';

@Component({
  selector: 'app-pipe-test',
  template: `
    <input [(ngModel)]="nameToFilter"/>
    <ul>
      <li *ngFor="let name of names | filter: nameToFilter">{{name}}</li>
    </ul>
  `,
})
export class FilterPipeComponent {

  nameToFilter = '';

  readonly names = [
    'James',
    'Robert',
    'John',
    'Baron',
    'Rajan',
    'Sanya',
    'Laibah',
    'Bodhi',
    'Mamie',
    'Yannis',
    'Diesel',
    'Evelyn',
    'Rajan',
    'Alexia',
    'Jeanette',
    'Lily',
    'Amir',
    'Jan',
    'Idrees'
  ];
}
