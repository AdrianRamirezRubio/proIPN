import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cambio-variable',
  templateUrl: './cambio-variable.component.html',
  styles: [
  ]
})
export class CambioVariableComponent implements OnInit {
  htmlOneAsString = `
  
  Polilibro Calculo Integral

  Unidad 1- Cambio de variable
  
  ACTIVIDAD 5 Alumno____________________________________Grupo_______
  
  <ul>
      <li>
      1.-    <img class="img-fluid"  src="assets/actividades/actividad5_archivos/image004.png" />
      </li>
      <li>
      2.- <img class="img-fluid"  src="assets/actividades/actividad5_archivos/image006.png" />
      </li>

      <li>
      3.- <img class="img-fluid"  src="assets/actividades/actividad5_archivos/image008.png" />
      </li>

      <li>
      4.- <img class="img-fluid"  src="assets/actividades/actividad5_archivos/image010.png" />
      </li>

      <li>
      5.- <img class="img-fluid"  src="assets/actividades/actividad5_archivos/image012.png" />
      </li>


      <li>
      6.- <img class="img-fluid"  src="assets/actividades/actividad5_archivos/image014.png" />
      </li>

      <li>
      7.- <img class="img-fluid"  src="assets/actividades/actividad5_archivos/image016.png" />
      </li>

      <li>
      8.- <img class="img-fluid"  src="assets/actividades/actividad5_archivos/image018.png" />
      </li>
      <li>
      9.- <img class="img-fluid"  src="assets/actividades/actividad5_archivos/image020.png" />
      </li>
      <li>
      10.- <img class="img-fluid"  src="assets/actividades/actividad5_archivos/image022.png" />
      </li>
      <li>
      11.- <img class="img-fluid"  src="assets/actividades/actividad5_archivos/image024.png" />
      </li>
      <li>
      12.- <img class="img-fluid"  src="assets/actividades/actividad5_archivos/image026.png" />
      </li>
      <li>
      13.- <img class="img-fluid"  src="assets/actividades/actividad5_archivos/image028.png" />
      </li>
      <li>
      14.- <img class="img-fluid"  src="assets/actividades/actividad5_archivos/image030.png" />
      </li>


  </ul>
  `;
  constructor() { }

  ngOnInit(): void {
  }

}
