import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgradecimientosComponent } from './shared/agradecimientos/agradecimientos.component';
import { BibliografiaComponent } from './shared/bibliografia/bibliografia.component';
import { BienvenidaComponent } from './shared/bienvenida/bienvenida.component';
import { CarruselComponent } from './shared/carrusel/carrusel.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { GlosarioComponent } from './shared/glosario/glosario.component';
import { ObjetivoComponent } from './shared/objetivo/objetivo.component';
import { AlgebraicasComponent } from './shared/Unidades/Unidad1/algebraicas/algebraicas.component';
import { CambioVariableComponent } from './shared/Unidades/Unidad1/cambio-variable/cambio-variable.component';
import { ConstanteIntegracionComponent } from './shared/Unidades/Unidad1/constante-integracion/constante-integracion.component';
import { DiferencialFuncionComponent } from './shared/Unidades/Unidad1/diferencial-funcion/diferencial-funcion.component';
import { ExpLogaritmosComponent } from './shared/Unidades/Unidad1/exp-logaritmos/exp-logaritmos.component';
import { TrigonometricasInversasComponent } from './shared/Unidades/Unidad1/trigonometricas-inversas/trigonometricas-inversas.component';
import { FraccionesParcialesComponent } from './shared/Unidades/Unidad2/fracciones-parciales/fracciones-parciales.component';
import { IntegracionPartesComponent } from './shared/Unidades/Unidad2/integracion-partes/integracion-partes.component';
import { UsoDidacticoComponent } from './shared/uso-didactico/uso-didactico.component';
import { PotenciasTrigonometricasComponent } from './shared/Unidades/Unidad2/potencias-trigonometricas/potencias-trigonometricas.component';
import { SustitucionTrigonometricasComponent } from './shared/Unidades/Unidad2/sustitucion-trigonometricas/sustitucion-trigonometricas.component';
import { VolumenDeRevolucionComponent } from './shared/Unidades/Unidad3/volumen-de-revolucion/volumen-de-revolucion.component';
import { AreaEntreCurvaComponent } from './shared/Unidades/Unidad3/area-entre-curva/area-entre-curva.component';
import { AreaBajoCurvaComponent } from './shared/Unidades/Unidad3/area-bajo-curva/area-bajo-curva.component';
import { IntegralDefinidaComponent } from './shared/Unidades/Unidad3/integral-definida/integral-definida.component';

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

   /* Unidades 1*/
  {
    path:'diferencialfuncion',
    component: DiferencialFuncionComponent
  },
  {
    path:'algebraicas',
    component: AlgebraicasComponent
  },
  {
    path:'constanteIntegracion',
    component: ConstanteIntegracionComponent
  },
  {
    path:'expLogaritmicas',
    component: ExpLogaritmosComponent
  },
  {
    path:'cambioVariable',
    component: CambioVariableComponent
  },
  {
    path:'trigonometricasInversas',
    component: TrigonometricasInversasComponent
  },
    /* Unidades 2*/
  {
    path:'integracionxPartes',
    component: IntegracionPartesComponent
  },
  {
    path:'potenciasTrigonometricas',
    component: PotenciasTrigonometricasComponent
  },
  {
    path:'sustitucionTrigonometricas',
    component: SustitucionTrigonometricasComponent
  },
  {
    path:'fraccionesParciales',
    component: FraccionesParcialesComponent
  },
  /* Unidad 3 */
  {
    path:'integralDefinida',
    component: IntegralDefinidaComponent
  },
  {
    path:'areaBajoLaCurva',
    component: AreaBajoCurvaComponent
  },
  {
    path:'areaEntreCurvas',
    component: AreaEntreCurvaComponent
  },
  {
    path:'volumeneDeRevolucion',
    component: VolumenDeRevolucionComponent
  },
  {
    path:'**',
    redirectTo: 'bienvenida',
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
