import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticuloService } from './services/articulo.service';
import { AltaArticuloComponent } from './articulos/alta-articulo/alta-articulo.component';
import { ListaArticuloComponent } from './articulos/lista-articulo/lista-articulo.component';
import { HomeComponent } from './articulos/home/home.component';
import { HeaderComponent } from './articulos/header/header.component';
import { ContenedorArticuloComponent } from './articulos/contenedor-articulo/contenedor-articulo.component';
import { BajaArticuloComponent } from './articulos/baja-articulo/baja-articulo.component';
import { EditarArticuloComponent } from './articulos/editar-articulo/editar-articulo.component';
import { CategoriaService } from './services/categoria.service';

@NgModule({
  declarations: [
    AppComponent,
    AltaArticuloComponent,
    ListaArticuloComponent,
    HomeComponent,
    HeaderComponent,
    ContenedorArticuloComponent,
    BajaArticuloComponent,
    EditarArticuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ArticuloService,CategoriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
