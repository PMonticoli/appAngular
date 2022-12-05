import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModificacionComponent } from './usuarios/modificacion/modificacion.component';
import { VistaPerfilComponent } from './usuarios/vista-perfil/vista-perfil.component';

const routes: Routes = [
  { path: 'perfil/ver', component: VistaPerfilComponent },
  { path: 'modificar/:id', component: ModificacionComponent },
  { path: '', redirectTo: 'perfil/ver', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
