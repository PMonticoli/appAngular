import { Component,OnDestroy,EventEmitter,Output,Input } from '@angular/core';
import { PersonaService } from '../services/persona.service';
import { Subscription } from 'rxjs';
import { Persona } from '../models/persona';
@Component({
  selector: 'app-persona-baja',
  templateUrl: './persona-baja.component.html',
  styleUrls: ['./persona-baja.component.css']
})
export class PersonaBajaComponent implements OnDestroy {

  constructor(private servicioPersona : PersonaService) { }
  @Input() persona : Persona ;
  @Output() onEliminado = new EventEmitter();
  private subscription = new Subscription();
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  eliminarPersona(){
    this.subscription.add(
      this.servicioPersona.eliminar(this.persona).subscribe({
        next : () =>{
          this.onEliminado.emit();
        },
        error : () => {
          alert('Error al eliminar');
        }
      })
    )
  }
}
