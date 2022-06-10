import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fracciones-parciales',
  templateUrl: './fracciones-parciales.component.html',
  styles: [
  ]
})
export class FraccionesParcialesComponent implements OnInit {
  htmlOneAsString = `
  
  Polilibro Calculo Integral

  Unidad 2- Por fracciones parciales
  
  ACTIVIDAD 1 Alumno____________________________________Grupo_______
  
  <ul>
      <li>
      1.-    <img class="img-fluid"  src="assets/actividades/actividad9_archivos/image004.png" />
      </li>
      <li>
      2.- <img class="img-fluid"  src="assets/actividades/actividad9_archivos/image006.png" />
      </li>

      <li>
      3.- <img class="img-fluid"  src="assets/actividades/actividad9_archivos/image008.png" />
      </li>

      <li>
      4.- <img class="img-fluid"  src="assets/actividades/actividad9_archivos/image010.png" />
      </li>

      <li>
      5.- <img class="img-fluid"  src="assets/actividades/actividad9_archivos/image012.png" />
      </li>


      <li>
      6.- <img class="img-fluid"  src="assets/actividades/actividad9_archivos/image014.png" />
      </li>

      <li>
      7.- <img class="img-fluid"  src="assets/actividades/actividad9_archivos/image016.png" />
      </li>

      <li>
      8.- <img class="img-fluid"  src="assets/actividades/actividad9_archivos/image018.png" />
      </li>
      <li>
      9.- <img class="img-fluid"  src="assets/actividades/actividad9_archivos/image020.png" />
      </li>
      <li>
      10.- <img class="img-fluid"  src="assets/actividades/actividad9_archivos/image022.png" />
      </li>

  </ul>
  `;
  constructor() { }

  ngOnInit(): void {
  }

}
