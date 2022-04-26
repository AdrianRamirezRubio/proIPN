import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditosComponent } from './creditos/creditos.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'creditos',
        component: CreditosComponent
      }/* ,
      {
        path:'registro',
        component: RegistroComponent
      },
      {
        path:'**',
        redirectTo: 'login'
      } */
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
