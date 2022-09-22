import { Component, OnDestroy } from '@angular/core';
import { PersonaService } from '../services/persona.service';
import { Persona } from '../models/persona';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-persona-contenedor',
  templateUrl: './persona-contenedor.component.html',
  styleUrls: ['./persona-contenedor.component.css']
})
export class PersonaContenedorComponent implements OnDestroy {
  formularioVisible : boolean =false;
  listadoPersonas : Persona []=[];

  constructor(private servicioPersona : PersonaService) { }

  private subscription = new Subscription();

  ngOnDestroy() : void {
    this.subscription.unsubscribe();
  }

  actualizarListado(){
    this.subscription.add(
      this.servicioPersona.obtenerListado().subscribe({
        next : (listado : Persona[])=>{
          this.listadoPersonas=listado;
        },
        error : ()=>{
          alert('Error al actualizar listado');
        }
      })
    )
  }


}
