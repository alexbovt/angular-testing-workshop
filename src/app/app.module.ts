import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CounterComponent} from './counter/counter.component';
import {FilterPipeComponent} from './filter-pipe-component/filter-pipe.component';
import {FilterPipe} from './filter-pipe-component/filter-pipe/filter.pipe';
import {SearchReactiveComponent} from './search-reactive/search-reactive.component';
import {HighlightHostComponent} from './highlight-host/highlight-host.component';
import {HighlightDirective} from './highlight-host/highlight.directive';
import {AddTodoHostComponent} from './add-todo-host/add-todo-host.component';
import {DoneTodoHostComponent} from './done-todo-host/done-todo-host.component';
import {DoneTodoComponent} from './done-todo-host/done-todo/done-todo.component';
import {AddTodoComponent} from './add-todo-host/add-todo/add-todo.component';
import {HttpSerivceComponent} from './http-serivce/http-serivce.component';
import {TodoService} from './http-serivce/todo.service';
import { IsActiveClassComponent } from './is-active-class/is-active-class.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    FilterPipeComponent,
    FilterPipe,
    SearchReactiveComponent,
    HighlightHostComponent,
    HighlightDirective,
    AddTodoHostComponent,
    DoneTodoHostComponent,
    DoneTodoComponent,
    AddTodoComponent,
    HttpSerivceComponent,
    IsActiveClassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
