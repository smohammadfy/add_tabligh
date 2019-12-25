import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddUserComponent} from './add-user/add-user.component';
import {AddTokenComponent} from './add-token/add-token.component';
import {FailedDiagramComponent} from './failed-diagram/failed-diagram.component';



const routes: Routes = [
  { path: 'adduser', component: AddUserComponent},
  { path: 'addtoken', component: AddTokenComponent},
  { path: 'fd', component: FailedDiagramComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
