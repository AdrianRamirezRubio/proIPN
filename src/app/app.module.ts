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
    ObjetivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
