import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListadoComponent } from './atenciones/listado/listado.component';
import { ModificarComponent } from './atenciones/modificar/modificar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TotalConAlicuotaPipe } from './pipes/total-con-alicuota.pipe';

@NgModule({
    declarations: [
        AppComponent,
        ListadoComponent,
        ModificarComponent,
        TotalConAlicuotaPipe
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
