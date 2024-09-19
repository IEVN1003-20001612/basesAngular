import { Component } from '@angular/core';
import { IProducto } from '../producto';

@Component({
  selector: 'app-produt-list',
  templateUrl: './produt-list.component.html',
  styleUrl: './produt-list.component.css'
})
export class ProdutListComponent {
title="Saludo de variables"

imageWidth:number=50;
imageMargin:number=2;
muestraImg:boolean=true;
listFilter:string='';

showImage():void{
  this.muestraImg=!this.muestraImg;
}

productos:IProducto []= [
  { 
    "productoID":1,
    "Modelo":'Sentra',
    "Descripcion":"4 puertas familiar",
    "Year":"febrero 3 2022",
    "Precio":20000,
    "Marca":"NISSAN",
    "Color":"Morado",
    "imagenUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN5KPNPdlYxa7jEBhYE68M7l3UOYEwO5C8rzfQ3m_ccONhN9gbwZ-Gn-DhNFKxAMyLdnc&usqp=CAU" 
  },
  {
    "productoID":2,
    "Modelo":'A4',
    "Descripcion":"2 Puertas",
    "Year":"Marzo 3 2022",
    "Precio":30000,
    "Marca":"AUDI",
    "Color":"Blanco",
    "imagenUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGn--Nso6OdOT0Fhs-9rAE0nffiO2A9Kz58STGIWVUUlw3OlWICROSxw_HidLX06csSHM&usqp=CAU" 
  },
  {
    "productoID":3,
    "Modelo":'RIO',
    "Descripcion":"4 Puertas familiar",
    "Year":"Agosto 3 2022",
    "Precio":60000,
    "Marca":"KIA",
    "Color":"Azul",
    "imagenUrl":"https://img.remediosdigitales.com/ee96cd/kia-rio-2021-mexico-precio_/1366_2000.jpg" 
  } 
]

}
