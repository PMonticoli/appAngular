import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { HomeComponent } from './home/home.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';

const routes: Routes = [
  {path: 'home' ,component:HomeComponent},
  {path: 'alta-cliente',component: AltaClienteComponent},
  {path: '',pathMatch:'full',component:HomeComponent},
  {path : 'lista-cliente', component: ListaClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
