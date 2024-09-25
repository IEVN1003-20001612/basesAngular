import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutListComponent } from './product/produt-list/produt-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductoFilterPipe } from './product/producto-filter.pipe';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';
import { Ejemplo1Component } from './formularios/ejemplo1/ejemplo1.component';
import { CineComponent } from './formularios/cine/cine.component';
import { ResistenciaComponent } from './formularios/resistencia/resistencia.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutListComponent,
    ProductoFilterPipe,
    OperasBasComponent,
    Ejemplo1Component,
    CineComponent,
    ResistenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
