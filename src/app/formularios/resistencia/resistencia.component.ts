import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface ResultadoTolerancia {
  tolerancia: number;
  banda1: string;
  banda2: string;
  banda3: string;
  estiloBanda1: string;
  estiloBanda2: string;
  estiloBanda3: string;
  coloresTolerancia: string;
  valor: number;
  valorMax: number;
  valorMin: number;
}

@Component({
  selector: 'app-resistencia',
  templateUrl: './resistencia.component.html',
  styleUrls: ['./resistencia.component.css']
})
export class ResistenciaComponent {
  formulario!: FormGroup;

  resultado: ResultadoTolerancia | null = null;

  constructor() { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      banda1: new FormControl('', Validators.required),
      banda2: new FormControl('', Validators.required),
      banda3: new FormControl('', Validators.required),
      tolerancia: new FormControl('', Validators.required),
    });
  }

  generaTolerancia(): void {
    const colores: { [key: number]: string } = {
      0: 'Negro',
      1: 'Marrón', // Cambiado de 'Café' a 'Marrón'
      2: 'Rojo',
      3: 'Naranja',
      4: 'Amarillo',
      5: 'Verde',
      6: 'Azul',
      7: 'Violeta',
      8: 'Gris',
      9: 'Blanco'
    };

    const coloresTolerancia: { [key: string]: string } = {
      'oro': '#FFD700',
      'plata': '#C0C0C0'
    };

    const coloresBanda3: { [key: number]: string } = {
      1: 'Negro',
      10: 'Marrón', // Cambiado de 'Café' a 'Marrón'
      100: 'Rojo',
      1000: 'Naranja',
      10000: 'Amarillo',
      100000: 'Verde',
      1000000: 'Azul',
      10000000: 'Violeta',
      100000000: 'Gris',
      1000000000: 'Blanco'
    };

    const coloresBackground: { [key: number]: string } = {
      0: '#000000',  // Negro
      1: '#6F4E37',  // Marrón (Café)
      2: '#FF0000',  // Rojo
      3: '#FFA500',  // Naranja
      4: '#FFFF00',  // Amarillo
      5: '#008000',  // Verde
      6: '#0000FF',  // Azul
      7: '#8A2BE2',  // Violeta
      8: '#808080',  // Gris
      9: '#FFFFFF'   // Blanco
    };

    const coloresBackground2: { [key: number]: string } = {
      1: '#000000',       // Negro
      10: '#6F4E37',      // Marrón (Café)
      100: '#FF0000',     // Rojo
      1000: '#FFA500',    // Naranja
      10000: '#FFFF00',   // Amarillo
      100000: '#008000',  // Verde
      1000000: '#0000FF', // Azul
      10000000: '#8A2BE2',// Violeta
      100000000: '#808080',// Gris
      1000000000: '#FFFFFF'// Blanco
    };

    let toleranciaFinal = 0;
    let toleranciaFinalMin = 0;
    let banda1 = this.formulario.get('banda1')?.value;
    let banda2 = this.formulario.get('banda2')?.value;
    let banda3 = this.formulario.get('banda3')?.value;
    let tolerancia = this.formulario.get('tolerancia')?.value;
    let realizaCalculo = banda1 + banda2;
    let ohm = parseInt(realizaCalculo) * parseInt(banda3);
    
    if (tolerancia == 'oro') {
      toleranciaFinal = ohm + (ohm * 0.05);
      toleranciaFinalMin = ohm - (ohm * 0.05);
      this.resultado = {
        tolerancia: tolerancia,
        banda1: colores[banda1],
        banda2: colores[banda2],
        banda3: coloresBanda3[banda3],
        estiloBanda1: coloresBackground[banda1],
        estiloBanda2: coloresBackground[banda2],
        estiloBanda3: coloresBackground2[banda3],
        coloresTolerancia: coloresTolerancia[tolerancia],
        valor: ohm,
        valorMax: toleranciaFinal,
        valorMin: toleranciaFinalMin
      };

    } else if (tolerancia == 'plata') {
      toleranciaFinal = ohm + (ohm * 0.10);
      toleranciaFinalMin = ohm - (ohm * 0.10);
      this.resultado = {
        tolerancia: tolerancia,
        banda1: colores[banda1],
        banda2: colores[banda2],
        banda3: coloresBanda3[banda3],
        estiloBanda1: coloresBackground[banda1],
        estiloBanda2: coloresBackground[banda2],
        estiloBanda3: coloresBackground2[banda3],
        coloresTolerancia: coloresTolerancia[tolerancia],
        valor: ohm,
        valorMax: toleranciaFinal,
        valorMin: toleranciaFinalMin
      };
    }

    console.log('Banda1', banda1);
    console.log('Banda2', banda2);
    console.log('RealizaCalculo', realizaCalculo);
    console.log('ohm', ohm);
    console.log('Tolerancia', toleranciaFinal);
    console.log('Resultado', this.resultado);
    console.log('Colores', colores[banda1]);
  }
}
