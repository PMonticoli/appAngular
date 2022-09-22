import { RouterModule ,Routes} from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PersonaAltaComponent } from "./persona-alta/persona-alta.component";
import { PersonaListaComponent } from "./persona-lista/persona-lista.component";
import { NgModule } from '@angular/core';
const routes : Routes =[
    {path: 'persona-alta', component: PersonaAltaComponent},
    {path : 'persona-lista', component: PersonaListaComponent},
    {path : 'home', component: HomeComponent},
    {path : 'persona-alta/:id',component: PersonaAltaComponent},
    {path : '', redirectTo:'home', pathMatch:'full'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })


export class  AppRoutingModule{}