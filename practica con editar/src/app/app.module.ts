import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaPersonaComponent } from './components/alta-persona/alta-persona.component';
import { ListadoPersonaComponent } from './components/listado-persona/listado-persona.component';
import { HttpClientModule } from '@angular/common/http';
import { BajaPersonaComponent } from './components/baja-persona/baja-persona.component';
import { EsMayorPipe } from './pipes/es-mayor.pipe';
@NgModule({
  declarations: [
    AppComponent,
    AltaPersonaComponent,
    ListadoPersonaComponent,
    BajaPersonaComponent,
    EsMayorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
