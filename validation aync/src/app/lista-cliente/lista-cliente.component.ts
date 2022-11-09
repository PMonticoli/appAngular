import { Component, OnDestroy, Input ,OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../services/cliente.service';
@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnDestroy,OnInit {
  @Input() listado : Cliente[];
  private subscription = new Subscription();
  constructor(private servicioCliente : ClienteService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() : void{
    this.actualizarListado();
  }

  actualizarListado(){
    this.subscription.add(
      this.servicioCliente.obtenerClientes().subscribe({
        next : (listado : Cliente[])=>{
          this.listado=listado;
        },
        error : ()=>{
          alert('Error al actualizar lista');
        }
      })
    )
  }
}
