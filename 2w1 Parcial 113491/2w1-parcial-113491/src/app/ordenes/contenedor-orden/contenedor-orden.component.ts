import { Component, OnInit } from '@angular/core';
import { OrdenService } from 'src/app/services/orden.service';
import {Subscription} from 'rxjs';
import { Orden } from 'src/app/models/orden';
@Component({
  selector: 'app-contenedor-orden',
  templateUrl: './contenedor-orden.component.html',
  styleUrls: ['./contenedor-orden.component.css']
})
export class ContenedorOrdenComponent implements OnInit {
  listadoOrdenes : Orden[];
  constructor(private servicioOrden : OrdenService) { }
  private subscription = new Subscription();
  ngOnInit(): void {
    this.actualizarListado();
  }

  actualizarListado(){
    this.subscription.add(
      this.servicioOrden.obtenerOrdenes().subscribe({
        next : (listado : Orden[]) =>{
          this.listadoOrdenes=listado;
          alert('Actualizo la lista correctamente');
        },
        error : () =>{
          alert('Error al actualizar lista');
        }
      })
    )
  }
}
