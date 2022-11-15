import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pais } from 'src/app/models/pais';
import { Persona } from 'src/app/models/persona';
import { PaisService } from 'src/app/services/pais.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-listado-persona',
  templateUrl: './listado-persona.component.html',
  styleUrls: ['./listado-persona.component.css']
})
export class ListadoPersonaComponent implements OnInit, OnDestroy {
  @Input() listado : Persona[];
  @Output() onEliminado = new EventEmitter();
  private subscription = new Subscription();
  constructor(private servicioPersona : PersonaService,private servicioPais :PaisService) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.actualizarListado();
  }

  actualizarListado() {
    this.subscription.add(
      this.servicioPais.obtenerPaises().subscribe({
        next: (paises: Pais[]) => {
          this.servicioPersona.obtenerTodas().subscribe({
            next: (listado: Persona[]) => {
              listado.forEach((persona) => {
                const indice = paises.findIndex((x) => x.id === persona.paisId);
                persona.pais = paises[indice];
              });

              this.listado = listado;
            },
            error: () => {
              alert('error');
            },
          });
        },
        error: () => {
          alert('error');
        },
      })
    );
  }
}
