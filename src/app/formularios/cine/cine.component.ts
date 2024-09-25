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
    cantidadCompradores: number = 1;
    totalBoletos: number = 0;
    mensajeError: string = '';  
  
    calcularPrecio() {
      const precioBoleto = 12;
      let descuento = 0;
  
      
      if (this.cantidadBoletos > 7 && this.cantidadCompradores === 1) {
        this.mensajeError = 'No puedes comprar más de 7 boletos por persona';
        this.totalAPagar = 0;  
        return;  
      } else if (this.cantidadBoletos > (this.cantidadCompradores * 7)) {
        this.mensajeError = 'No puedes comprar más de 7 boletos por persona';
        this.totalAPagar = 0;  
        return;  
      } else {
        this.mensajeError = ''; 
      }
  
     
      if (this.cantidadBoletos > 5) {
        descuento = 0.15;
      } else if (this.cantidadBoletos >= 3) {
        descuento = 0.10; 
      } else if (this.cantidadBoletos > 0 && this.cantidadBoletos < 3) {
        descuento = 0.05; 
      }
  
  
      let totalSinDescuento = this.cantidadBoletos * precioBoleto;
      let totalConDescuento = totalSinDescuento * (1 - descuento);
  

      if (this.usaCineco) {
        totalConDescuento *= 0.90; 
      }
  

      this.totalBoletos = this.cantidadBoletos; 
      this.totalAPagar = totalConDescuento; 
    }
  }
  