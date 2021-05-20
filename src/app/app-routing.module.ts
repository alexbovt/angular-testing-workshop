import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CounterComponent} from './counter/counter.component';
import {FilterPipeComponent} from './filter-pipe-component/filter-pipe.component';
import {TodoComponent} from './todo/todo.component';

export const routes: Routes = [
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
