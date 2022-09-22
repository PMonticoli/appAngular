import { Component, OnInit ,ViewChild,Output,EventEmitter} from '@angular/core';
import { Persona } from '../models/persona';
import { PersonaService } from '../services/persona.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-persona-alta',
  templateUrl: './persona-alta.component.html',
  styleUrls: ['./persona-alta.component.css']
})
export class PersonaAltaComponent implements OnInit {
  persona : Persona;
  @ViewChild('personaForm') formulario : NgForm;
  @Output() onConfirmar = new EventEmitter();
  @Output() onCancelar = new EventEmitter();
  @Output() onEditar = new EventEmitter();
  isEdit : boolean = false;
  
  constructor(private servicioPersona : PersonaService, private activatedRoute : ActivatedRoute, private router : Router) { }



  ngOnInit(): void {
    this.persona= new Persona();
    this.cargar();
  }


  guardar(){
    if(this.formulario.valid){
      this.servicioPersona.agregar(this.persona).subscribe({
        next : () =>{
          this.onConfirmar.emit();
          alert('Registro la persona correctamente');
        },
        error : () =>{
          alert('Error al guardar');
        }
      })
    }
  }

  editar(){
    this.servicioPersona.modificar(this.persona).subscribe({
      next : () =>{
        alert('Edito la persona correctamente');
        this.router.navigate(['persona-lista']);
      },
      error : () =>{
        alert ('Error al editar');
      }
    })
  }

  cancelar(){
    this.onCancelar.emit();
  }

  cargar () : void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id = e['id'];
        if(id){
          this.isEdit=true;
          this.servicioPersona.getPersona(id).subscribe(
            es => this.persona=es
        )}else{
          this.isEdit=false;
        }
      }
    )
  }
}
