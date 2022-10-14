import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenedorOrdenComponent } from './ordenes/contenedor-orden/contenedor-orden.component';
import { AltaOrdenComponent } from './ordenes/alta-orden/alta-orden.component';
import { ListaOrdenComponent } from './ordenes/lista-orden/lista-orden.component';
import { HeaderComponent } from './ordenes/header/header.component';
import { HomeComponent } from './ordenes/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrdenService } from './services/orden.service';
import { MarcaService } from './services/marca.service';
import { BajaOrdenComponent } from './ordenes/baja-orden/baja-orden.component';

@NgModule({
  declarations: [
    AppComponent,
    ContenedorOrdenComponent,
    AltaOrdenComponent,
    ListaOrdenComponent,
    HeaderComponent,
    HomeComponent,
    BajaOrdenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [OrdenService,MarcaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
