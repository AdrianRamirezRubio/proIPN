import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgradecimientosComponent } from './shared/agradecimientos/agradecimientos.component';
import { BibliografiaComponent } from './shared/bibliografia/bibliografia.component';
import { BienvenidaComponent } from './shared/bienvenida/bienvenida.component';
import { CarruselComponent } from './shared/carrusel/carrusel.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { GlosarioComponent } from './shared/glosario/glosario.component';
import { ObjetivoComponent } from './shared/objetivo/objetivo.component';
import { UsoDidacticoComponent } from './shared/uso-didactico/uso-didactico.component';

const routes: Routes = [
 /*  {
    path:'',
    pathMatch:'full'
    
  }, */
  {
    path:'pages',
    loadChildren:() => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path:'carrusel',
    component: CarruselComponent
  },
  {
    path:'agradecimientos',
    component: AgradecimientosComponent
  },
  {
    path:'bibliografia',
    component: BibliografiaComponent
  },
  {
    path:'usoDidactico',
    component: UsoDidacticoComponent
  },
  {
    path:'glosario',
    component: GlosarioComponent
  },
  {
    path:'bienvenida',
    component: BienvenidaComponent
  },
  {
    path:'objetivo',
    component: ObjetivoComponent
  },
  {
    path:'404',
    component: ErrorPageComponent
  },
  {
    path:'**',
    redirectTo: 'creditos',
    
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
