import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TestimonialComponent } from './shared/testimonial/testimonial.component';
import { TeamComponent } from './shared/team/team.component';
import { CursosComponent } from './shared/cursos/cursos.component';
import { CategoriasComponent } from './shared/categorias/categorias.component';
import { AboutComponent } from './shared/about/about.component';
import { ServicessComponent } from './shared/servicess/servicess.component';
import { CarruselComponent } from './shared/carrusel/carrusel.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AgradecimientosComponent } from './shared/agradecimientos/agradecimientos.component';
import { BibliografiaComponent } from './shared/bibliografia/bibliografia.component';
import { UsoDidacticoComponent } from './shared/uso-didactico/uso-didactico.component';
import { GlosarioComponent } from './shared/glosario/glosario.component';
import { BienvenidaComponent } from './shared/bienvenida/bienvenida.component';
import { ObjetivoComponent } from './shared/objetivo/objetivo.component';

import { MathjaxModule } from 'mathjax-angular';
import { DiferencialFuncionComponent } from './shared/Unidades/Unidad1/diferencial-funcion/diferencial-funcion.component';
import { AlgebraicasComponent } from './shared/Unidades/Unidad1/algebraicas/algebraicas.component';
import { ConstanteIntegracionComponent } from './shared/Unidades/Unidad1/constante-integracion/constante-integracion.component';
import { ExpLogaritmosComponent } from './shared/Unidades/Unidad1/exp-logaritmos/exp-logaritmos.component';
import { CambioVariableComponent } from './shared/Unidades/Unidad1/cambio-variable/cambio-variable.component';
import { TrigonometricasInversasComponent } from './shared/Unidades/Unidad1/trigonometricas-inversas/trigonometricas-inversas.component';
import { IntegracionPartesComponent } from './shared/Unidades/Unidad2/integracion-partes/integracion-partes.component';
import { PotenciasTrigonometricasComponent } from './shared/Unidades/Unidad2/potencias-trigonometricas/potencias-trigonometricas.component';
import { SustitucionTrigonometricasComponent } from './shared/Unidades/Unidad2/sustitucion-trigonometricas/sustitucion-trigonometricas.component';
import { FraccionesParcialesComponent } from './shared/Unidades/Unidad2/fracciones-parciales/fracciones-parciales.component';
import { IntegralDefinidaComponent } from './shared/Unidades/Unidad3/integral-definida/integral-definida.component';
import { AreaBajoCurvaComponent } from './shared/Unidades/Unidad3/area-bajo-curva/area-bajo-curva.component';
import { AreaEntreCurvaComponent } from './shared/Unidades/Unidad3/area-entre-curva/area-entre-curva.component';
import { VolumenDeRevolucionComponent } from './shared/Unidades/Unidad3/volumen-de-revolucion/volumen-de-revolucion.component';
import { ModalComponent } from './shared/Modal/modal/modal.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    SidebarComponent,
    FooterComponent,
    TestimonialComponent,
    TeamComponent,
    CursosComponent,
    CategoriasComponent,
    AboutComponent,
    ServicessComponent,
    CarruselComponent,
    NavbarComponent,
    AgradecimientosComponent,
    BibliografiaComponent,
    UsoDidacticoComponent,
    GlosarioComponent,
    BienvenidaComponent,
    ObjetivoComponent,
    DiferencialFuncionComponent,
    AlgebraicasComponent,
    ConstanteIntegracionComponent,
    ExpLogaritmosComponent,
    CambioVariableComponent,
    TrigonometricasInversasComponent,
    IntegracionPartesComponent,
    PotenciasTrigonometricasComponent,
    SustitucionTrigonometricasComponent,
    FraccionesParcialesComponent,
    IntegralDefinidaComponent,
    AreaBajoCurvaComponent,
    AreaEntreCurvaComponent,
    VolumenDeRevolucionComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MathjaxModule.forRoot(/*Optional Config*/),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
