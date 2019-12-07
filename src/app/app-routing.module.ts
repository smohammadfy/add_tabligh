import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddUserComponent} from './add-user/add-user.component';
import {AddTokenComponent} from './add-token/add-token.component';

const routes: Routes = [
  { path: 'adduser', component: AddUserComponent},
  { path: 'addtoken', component: AddTokenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
