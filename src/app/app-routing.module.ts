import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AutocompleteComponent} from '../app/autocomplete/autocomplete.component'

let routes: Routes = [];

 routes = [
    { path: 'autocomplete', component: AutocompleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
