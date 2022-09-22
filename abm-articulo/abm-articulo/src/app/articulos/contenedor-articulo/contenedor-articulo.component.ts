import { Component, OnDestroy} from '@angular/core';
import { ArticuloService } from 'src/app/services/articulo.service';
import { Subscription } from 'rxjs';
import { Articulo } from 'src/app/models/articulo';
@Component({
  selector: 'app-contenedor-articulo',
  templateUrl: './contenedor-articulo.component.html',
  styleUrls: ['./contenedor-articulo.component.css']
})
export class ContenedorArticuloComponent implements OnDestroy {
   listadoArticulos : Articulo[];
  constructor(private servicioArticulo : ArticuloService) { }
  private subscription = new Subscription();
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  actualizarListado(){
    this.subscription.add(
      this.servicioArticulo.obtenerListado().subscribe({
        next : (listado : Articulo[]) =>{
          this.listadoArticulos=listado;
        },
        error : () =>{
          alert('Error al actualizar listado');
        }
      })
    )
  }

}
