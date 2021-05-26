import { Component } from '@angular/core';

@Component({
  selector: 'app-add-user',
  template: `
    <input type="text" [(ngModel)]="name" >
    <button (click)="addUser()">Add</button>
  `,

})
export class AddUserComponent  {

  name: string = ''


  addUser():  void {

  }
}
