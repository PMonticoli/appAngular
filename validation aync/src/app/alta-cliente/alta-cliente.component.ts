import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Cliente } from '../models/cliente';
import { Router } from '@angular/router';
import { ClienteValidator } from '../validators/cliente-validator';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {

  constructor(
    private servicioCliente : ClienteService, 
    private formBuilder : FormBuilder
    ) { }
  formulario : FormGroup;
  cliente : Cliente;

  private subscription = new Subscription();
  ngOnInit(): void {
    this.formulario= this.formBuilder.group({
      id : [,Validators.required],
      telefono: [
        null,
        [Validators.minLength(3), Validators.required],
        [ClienteValidator.numeroValidator(this.servicioCliente)],
      ],
      nombre: [
        null,
        [Validators.minLength(3), Validators.required],
        [ClienteValidator.nombreValidator(this.servicioCliente)],
      ],
      saldoDeudor : [,Validators.required],
      limiteFiado : [,Validators.required],
      idDespacho : [,Validators.required]
    })
  }


  get controlNombre(): FormControl {
    return this.formulario.controls['nombre'] as FormControl;
  }
  get controlId(): FormControl {
    return this.formulario.controls['id'] as FormControl;
  }

  get controlTelefono(): FormControl {
    return this.formulario.controls['telefono'] as FormControl;
  }

  get controlSaldo(): FormControl {
    return this.formulario.controls['saldoDeudor'] as FormControl;
  }

  guardar(){
    if(this.formulario.valid){
      this.cliente=this.formulario.value;
      this.subscription.add(
        this.servicioCliente.agregar(this.cliente).subscribe({
          next : () =>{
            alert('Guardo cliente correctamente');

          },
          error : () =>{
            alert('Error al guardar cliente')
          }
        })
      )
    }else{
      alert('Error al registrar el cliente, revise e intente nuevamente')
    }
  }

}
