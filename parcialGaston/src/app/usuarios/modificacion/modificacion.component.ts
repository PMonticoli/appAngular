import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Perfil } from 'src/app/models/perfil';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-modificacion',
  templateUrl: './modificacion.component.html',
  styleUrls: ['./modificacion.component.css']
})
export class ModificacionComponent implements OnInit, OnDestroy {
  formulario : FormGroup;
  perfil : Perfil;

  private suscripcion = new Subscription();

  constructor(private usuarioService: UsuarioService,
              private router : Router,
              private formBuilder : FormBuilder,
              private activatedRoute : ActivatedRoute) { }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      id:[''],
      nombre:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      telefono:[''],
      direccion:['',Validators.required],
    });

    this.cargarPerfil();

  }

  cargarPerfil(){
    this.activatedRoute.params.subscribe({
      next:(params)=> {
        const id = params ['id'];
        this.usuarioService.obtenerPerfil(id).subscribe({
          next:(perfilRecibido : Perfil) => {
            this.perfil = perfilRecibido;
            this.formulario.patchValue(this.perfil);
          },
          error:()=>{
            alert('No se recibio el perfil');
          }
        })

      }
    })
  }

  guardarEdicion(){
    if(this.formulario.invalid){
      return;
    }else{
      this.perfil = this.formulario.value;
      this.suscripcion.add(
        this.usuarioService.modificarPerfil(this.perfil).subscribe({
          next:()=>{
            this.router.navigate(['perfil/ver']);
          },
          error:()=>{
            alert('No modifico');
          }
        })
      )
    }
  }

  cancelar(){
    this.router.navigate(['perfil/ver']);
  }

}
