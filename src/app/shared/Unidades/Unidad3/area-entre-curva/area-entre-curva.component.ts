import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-entre-curva',
  templateUrl: './area-entre-curva.component.html',
  styles: [
  ]
})
export class AreaEntreCurvaComponent implements OnInit {
  htmlOneAsString = `
  
  Polilibro Calculo Integral

  Unidad 3- Área entre curvas
  
  ACTIVIDAD 1 Alumno____________________________________Grupo_______
  
  <ul>
      <li>
      1.-Hallar area entre la parabola    <img class="img-fluid"  src="assets/actividades/actividad11_archivos/image004.png" />
      y la recta  <img class="img-fluid"  src="assets/actividades/actividad11_archivos/image006.png" />
      </li>
      <li>
      2.-Hallar el area limitada por la curva <img class="img-fluid"  src="assets/actividades/actividad11_archivos/image010.png" />
      y la recta <img class="img-fluid"  src="assets/actividades/actividad11_archivos/image012.png" />
      <img class="img-fluid"  src="assets/actividades/actividad11_archivos/image014.png" />
      </li>

      <li>
      3.- Calcular el area limitada entre las curvas:<img class="img-fluid"  src="assets/actividades/actividad11_archivos/image016.png" /> y=x
      </li>

      <li>
      4.- Hallar el area limitada por la curva:<img class="img-fluid"  src="assets/actividades/actividad11_archivos/image018.png" /> y
      <img class="img-fluid"  src="assets/actividades/actividad11_archivos/image020.png" />
      </li>

      <li>
      5.- Hallar el area entre la curva <img class="img-fluid"  src="assets/actividades/actividad11_archivos/image024.png" /> y la recta
      <img class="img-fluid"  src="assets/actividades/actividad11_archivos/image012.png" />
      </li>


      <li>
      6.- Hallar el area limitada por las funciones: <img class="img-fluid"  src="assets/actividades/actividad11_archivos/image028.png" /> y
      <img class="img-fluid"  src="assets/actividades/actividad11_archivos/image030.png" />
      </li>

      <li>
      7.- Calcular el area de la región comprendida por la grafica de: <img class="img-fluid"  src="assets/actividades/actividad11_archivos/image032.png" />
      Con el eje de las x, a=0, b=4
      </li>

      <li>
      8.- Hallar el area limitada por la parabola<img class="img-fluid"  src="assets/actividades/actividad11_archivos/image034.png" />  y la línea y=x
      </li>

  </ul>
  `;
  constructor() { }

  ngOnInit(): void {
  }

}
