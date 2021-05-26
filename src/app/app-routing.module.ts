import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';

import {CounterComponent} from './counter/counter.component';
import {FilterPipeComponent} from './filter-pipe-component/filter-pipe.component';
import { SearchReactiveComponent } from './search-reactive/search-reactive.component';
import {TodoComponent} from './todo/todo.component';

export const routes: Routes = [
  {path: 'add-user', component: AddUserComponent},
  {path: 'serach', component: SearchReactiveComponent},
  {path: 'counter', component: CounterComponent},
  {path: 'filter-pipe', component: FilterPipeComponent},
  {path: 'todo', component: TodoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
