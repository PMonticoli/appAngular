import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {
  @Input() persona : Persona;
  constructor(private servicioPersona : PersonaService) { }

  ngOnInit(): void {
  }

}
