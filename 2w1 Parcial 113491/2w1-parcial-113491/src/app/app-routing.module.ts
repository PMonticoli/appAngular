import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaOrdenComponent } from './ordenes/alta-orden/alta-orden.component';
import { HomeComponent } from './ordenes/home/home.component';
import { ListaOrdenComponent } from './ordenes/lista-orden/lista-orden.component';

const routes: Routes = [
  {path : 'home' , component: HomeComponent},
  { path : 'alta-orden', component: AltaOrdenComponent},
  { path : 'lista-orden' , component : ListaOrdenComponent},
  { path: '' ,redirectTo: 'home',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
