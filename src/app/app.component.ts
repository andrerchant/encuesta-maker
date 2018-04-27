import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'encuesta';
  encuestaName:string = "Elige tu titulo";

  campos: any = [ ]

  contador: any = {
      texto:0, casilla:0, opciones:0
  }

  addTexto(){
    // this.encuestaName = "Texto";
    var r_texto = prompt("¿Cuál es el título de tu campo?");
    if (r_texto) {
      this.campos.push({tipo: "texto", texto:r_texto});
      this.contador.texto++;
    }
  }
  addCasillas(){
    var r_casillas = prompt("¿Cuál es el título de tu campo?");
    if (r_casillas) {
      this.campos.push({tipo: "casilla", texto:r_casillas});
      this.contador.casilla++;
    }
  }
  addDesplegable(){
    var r_dropdown = prompt("¿Cuál es el título de tu campo?");
    if (r_dropdown) {
      this.campos.push({tipo: "opciones", texto:r_dropdown});
      this.contador.opciones++;
    }
  }
}
