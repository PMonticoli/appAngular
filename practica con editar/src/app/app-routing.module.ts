import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaPersonaComponent } from './components/alta-persona/alta-persona.component';
import { ListadoPersonaComponent } from './components/listado-persona/listado-persona.component';

const routes: Routes = [
  {path : '', pathMatch: 'full', redirectTo: 'listado-persona'},
  {path : 'alta-persona', component : AltaPersonaComponent},
  {path : 'alta-persona/:id', component : AltaPersonaComponent},
  {path : 'listado-persona', component : ListadoPersonaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
