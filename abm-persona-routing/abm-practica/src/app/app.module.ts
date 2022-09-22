import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonaContenedorComponent } from './persona-contenedor/persona-contenedor.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PersonaAltaComponent } from './persona-alta/persona-alta.component';
import { PersonaListaComponent } from './persona-lista/persona-lista.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonaService } from './services/persona.service';
import { HttpClientModule } from '@angular/common/http';
import { PersonaBajaComponent } from './persona-baja/persona-baja.component';
import { EditarPersonaComponent } from './editar-persona/editar-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaContenedorComponent,
    HeaderComponent,
    HomeComponent,
    PersonaAltaComponent,
    PersonaListaComponent,
    PersonaBajaComponent,
    EditarPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
