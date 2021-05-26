import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CounterComponent} from './counter/counter.component';
import {FilterPipeComponent} from './filter-pipe-component/filter-pipe.component';
import {SearchReactiveComponent} from './search-reactive/search-reactive.component';
import {HighlightHostComponent} from './highlight-host/highlight-host.component';
import {DoneTodoHostComponent} from './done-todo-host/done-todo-host.component';
import {AddTodoHostComponent} from './add-todo-host/add-todo-host.component';
import {HttpSerivceComponent} from './http-serivce/http-serivce.component';
import {IsActiveClassComponent} from './is-active-class/is-active-class.component';

export const routes: Routes = [
  {path: 'is-active', component: IsActiveClassComponent},
  {path: 'counter', component: CounterComponent},
  {path: 'done-todo', component: DoneTodoHostComponent},
  {path: 'add-todo', component: AddTodoHostComponent},
  {path: 'highlight-directive', component: HighlightHostComponent},
  {path: 'user-filter-pipe', component: FilterPipeComponent},
  {path: 'reactive-search', component: SearchReactiveComponent},
  {path: 'http-service', component: HttpSerivceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
