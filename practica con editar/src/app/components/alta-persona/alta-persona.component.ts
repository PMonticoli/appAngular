import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ciudad } from 'src/app/models/ciudad';
import { Pais } from 'src/app/models/pais';
import { Persona } from 'src/app/models/persona';
import { CiudadService } from 'src/app/services/ciudad.service';
import { PaisService } from 'src/app/services/pais.service';
import { PersonaService } from 'src/app/services/persona.service';
import { ValidadorPersona } from 'src/app/validators/persona-validador';

@Component({
  selector: 'app-alta-persona',
  templateUrl: './alta-persona.component.html',
  styleUrls: ['./alta-persona.component.css']
})
export class AltaPersonaComponent implements OnInit {
  formulario : FormGroup;
  persona : Persona;
  paises : Pais [];
  ciudades : Ciudad[];
  isEdit : boolean = false;
  private subscription = new Subscription();
  constructor(private servicioPersona : PersonaService,
              private formBuilder : FormBuilder,
              private servicioPais : PaisService,
              private servicioCiudad : CiudadService,
              private router : Router,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombre : [null,
      [Validators.required],
      [ValidadorPersona.nombreValidador(this.servicioPersona)]
      ],
      apellido : [null,
        [Validators.required],
        [ValidadorPersona.apellidoValidador(this.servicioPersona)]
        ],
      edad : [,Validators.required],
      paisId : [,Validators.required],
      ciudadId : [,Validators.required],
    })

    this.cargarCboPais();
    this.cargar();
    
    this.formulario.controls['paisId'].valueChanges.subscribe(x=>{
      this.subscription.add(
        this.servicioCiudad.obtenerCiudadesPorPais(x).subscribe({
          next : (r : Ciudad[]) =>{
            this.ciudades=r;
          },
          error :(e) =>{
            console.error(e);
          }
        })
      )
    })
  }

  private cargarCboPais() : void {
    this.subscription.add(
      this.servicioPais.obtenerPaises().subscribe({
        next : (res : Pais[]) =>{
          this.paises= res;
        },
        error : (e) =>{
          console.error(e);
        }
      })
    )
  }
  guardar () {
    if(this.formulario.valid){
      this.subscription.add(
        this.servicioPersona.agregar(this.formulario.value).subscribe({
          next : (r : Persona) =>{
            this.router.navigate(['/listado-persona']);
          },
          error : (e) =>{
            console.error(e);
          }
        })
      )
    }else{
      alert('Error al registrar persona, revise e intente nuevamente')
    }
  }

  get controlNombre (): FormControl{
    return this.formulario.controls['nombre'] as FormControl;
  }

  get controlApellido (): FormControl{
    return this.formulario.controls['apellido'] as FormControl;
  }

  get controlEdad (): FormControl{
    return this.formulario.controls['edad'] as FormControl;
  }

  get controlPais (): FormControl{
    return this.formulario.controls['paisId'] as FormControl;
  }



  editar(){
    let body = this.formulario.value as Persona;
    body.id=this.persona.id;
    this.subscription.add(
      this.servicioPersona.modificar(body).subscribe({
        next : () =>{
            alert('Edito la persona correctamente');
            this.router.navigate(['/listado-persona']);
          
        },
        error: (e) => { 
          console.error(e);
          alert('Error al editar persona')
        }
      })
    )
  }
  
  //DOS FORMAS DISTINTAS DE HACER METODO CARGAR FORM PARA EDICION

  // private cargar () : void{
  //   const id = this.activatedRoute.snapshot.params['id'];
  //   this.subscription.add(
  //     this.servicioPersona.getPersonaById(id).subscribe({
  //         next: (respuesta) => {
  //             this.persona = respuesta as Persona;
  //             this.formulario.patchValue(this.persona);
  //         },
  //         error: () => alert('Error al obtener la atención'),
  //     })
  // );
  // }
  cargar () : void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id = e['id'];
        if(id){
          this.isEdit=true;
        
          this.servicioPersona.getPersonaById(id).subscribe(
            es => {
              this.persona= es;
              this.formulario.patchValue(this.persona)
            }

        )}else{
          this.isEdit=false;
        }
      }
    )
  }

}
