import { Component, OnInit,Input } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-lista-articulo',
  templateUrl: './lista-articulo.component.html',
  styleUrls: ['./lista-articulo.component.css']
})
export class ListaArticuloComponent implements OnInit {
  @Input() listado : Articulo[];
  constructor(private servicioArticulo : ArticuloService) { }
  private subscription = new Subscription();
  ngOnInit(): void {
    this.actualizarListado();
  }
  actualizarListado(){
    this.subscription.add(
      this.servicioArticulo.obtenerListado().subscribe({
        next : (listado : Articulo[]) =>{
          this.listado=listado;
        },
        error : () =>{
          alert('Error al actualizar listado');
        }
      })
    )
  }
}
