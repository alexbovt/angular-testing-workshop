import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CounterComponent} from './counter/counter.component';
import { FilterPipeComponent } from './filter-pipe-component/filter-pipe.component';
import { ServiceTestComponent } from './service-test/service-test.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FilterPipe } from './filter-pipe-component/filter-pipe/filter.pipe';
import { TodoComponent } from './todo/todo.component';
import { SearchReactiveComponent } from './search-reactive/search-reactive.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    FilterPipeComponent,
    ServiceTestComponent,
    FilterPipe,
    TodoComponent,
    SearchReactiveComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
