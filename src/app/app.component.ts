import {Component} from '@angular/core';
import {routes} from './app-routing.module';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <span>Angular Testing Workshop</span>
    </mat-toolbar>

    <mat-drawer-container>
      <mat-drawer mode="side" opened>

        <mat-action-list>
          <mat-list-item *ngFor="let link of links" [routerLink]="[link.path]">{{ link.path | titlecase }}</mat-list-item>
        </mat-action-list>

      </mat-drawer>
      <mat-drawer-content>
        <router-outlet></router-outlet>
      </mat-drawer-content>
    </mat-drawer-container>


  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  readonly links = routes;
}
