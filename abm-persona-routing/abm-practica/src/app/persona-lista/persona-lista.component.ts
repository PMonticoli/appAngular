import { Component, OnInit,Input,OnDestroy } from '@angular/core';
import { PersonaService } from '../services/persona.service';
import { Persona } from '../models/persona';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-persona-lista',
  templateUrl: './persona-lista.component.html',
  styleUrls: ['./persona-lista.component.css']
})
export class PersonaListaComponent implements OnInit,OnDestroy {
  @Input() listado: Persona[];

  private subscription = new Subscription();
  constructor(private servicioPersona : PersonaService) { }

  ngOnInit(): void {
    this.actualizarListado();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  actualizarListado() {
    this.subscription.add(
      this.servicioPersona.obtenerListado().subscribe({
        next: (listado: Persona[]) => {
          //exito
          this.listado = listado;
        },
        error: () => {
          // error
          alert('error');
        },
      })
    );
  }

  
  
}
