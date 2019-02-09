import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AutocompleteComponent} from '../app/autocomplete/autocomplete.component';
import {CheckboxComponent} from '../app/checkbox/checkbox.component';
import {DatepickerComponent} from '../app/datepicker/datepicker.component';
import {FrmfieldComponent} from '../app/frmfield/frmfield.component';
import {MenuComponent} from '../app/menu/menu.component'

let routes: Routes = [];

 routes = [
    { path: 'autocomplete', component: AutocompleteComponent },
    { path: 'checkboxexample', component: CheckboxComponent },
    { path: 'checkboxexample', component: CheckboxComponent },
    { path: 'datepickerexample', component: DatepickerComponent },
    { path: 'fromfieldexample', component: FrmfieldComponent },
    //{ path: '', component: MenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
