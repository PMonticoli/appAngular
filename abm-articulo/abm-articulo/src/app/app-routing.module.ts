import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaArticuloComponent } from './articulos/alta-articulo/alta-articulo.component';
import { HomeComponent } from './articulos/home/home.component';
import { ListaArticuloComponent } from './articulos/lista-articulo/lista-articulo.component';

const routes: Routes = [
  {path : 'home',component: HomeComponent},
  {path : 'alta-articulo', component: AltaArticuloComponent},
  {path : 'lista-articulo',component: ListaArticuloComponent},
  {path : 'alta-articulo/:id',component: AltaArticuloComponent},
  {path : '', redirectTo: 'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
