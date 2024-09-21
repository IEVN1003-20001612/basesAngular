import { Component } from '@angular/core';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrl: './cine.component.css'
})
  export class CineComponent {
    nombre: string = '';
    cantidadBoletos: number = 0;
    usaCineco: boolean = false;
    totalAPagar: number = 0;
  
    calcularPrecio() {
      const precioBoleto = 60;
      let descuento = 0;
  
      if (this.cantidadBoletos > 5) {
        descuento = 0.15;
      } else if (this.cantidadBoletos >= 3) {
        descuento = 0.10;
      }
  
      let totalSinDescuento = this.cantidadBoletos * precioBoleto;
      let totalConDescuento = totalSinDescuento * (1 - descuento);
  
      if (this.usaCineco) {
        totalConDescuento *= 0.90;
      }
  
      this.totalAPagar = totalConDescuento;
    }
  }

