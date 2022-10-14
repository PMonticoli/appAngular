import { Component, OnDestroy,Input } from '@angular/core';
import { Orden } from 'src/app/models/orden';
import { OrdenService } from 'src/app/services/orden.service';
import { Subscription} from 'rxjs';
@Component({
  selector: 'app-lista-orden',
  templateUrl: './lista-orden.component.html',
  styleUrls: ['./lista-orden.component.css']
})
export class ListaOrdenComponent implements OnDestroy {
  @Input() listado : Orden[];
  private subscription = new Subscription
  constructor(private servicioOrden : OrdenService) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
  ngOnInit() : void{
    this.actualizarListado();
  }

  actualizarListado(){
    this.subscription.add(
      this.servicioOrden.obtenerOrdenes().subscribe({
        next : (listado : Orden[])=>{
          this.listado=listado;
        },
        error : ()=>{
          alert('Error al actualizar lista');
        }
      })
    )
  }
}
