import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';


@Component({
  selector: 'app-baja-persona',
  templateUrl: './baja-persona.component.html',
  styleUrls: ['./baja-persona.component.css']
})
export class BajaPersonaComponent implements  OnDestroy {

  @Input() persona : Persona;
  @Output() onEliminado = new EventEmitter();
  constructor(private personaService : PersonaService) { }

  private subscription = new Subscription();

  ngOnDestroy() : void {
    this.subscription.unsubscribe();
  }

  eliminarPersona(){
    this.subscription.add(
      this.personaService.eliminar(this.persona).subscribe({
        next : () =>{
          this.onEliminado.emit();
          alert('Elimino la persona con id'+' '+ this.persona.id+' ' +'correctamente');
        },
        error : () =>{
          alert('Error al eliminar');
        }
      })
    )
  }


}
