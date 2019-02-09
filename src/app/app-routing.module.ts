import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AutocompleteComponent} from '../app/autocomplete/autocomplete.component'
import {CheckboxComponent} from '../app/checkbox/checkbox.component'
import {MenuComponent} from '../app/menu/menu.component'

let routes: Routes = [];

 routes = [
    { path: 'autocomplete', component: AutocompleteComponent },
    { path: 'checkboxexample', component: CheckboxComponent },
    //{ path: '', component: MenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
