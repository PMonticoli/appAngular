import { Component, OnDestroy,Output,EventEmitter,Input } from '@angular/core';
import { OrdenService } from 'src/app/services/orden.service';
import { Subscription} from 'rxjs';
import { Orden } from 'src/app/models/orden';
@Component({
  selector: 'app-baja-orden',
  templateUrl: './baja-orden.component.html',
  styleUrls: ['./baja-orden.component.css']
})
export class BajaOrdenComponent implements OnDestroy {
  @Output () onEliminado = new EventEmitter();
  @Input() orden : Orden;
  constructor(private servicioOrden : OrdenService) { }
  private subscription = new Subscription();
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  eliminarOrden(){
    this.subscription.add(
      this.servicioOrden.eliminar(this.orden).subscribe({
        next : () =>{
          alert('Elimino la orden con id'+' '+ this.orden.id+' ' +'correctamente');
          this.onEliminado.emit();
        },
        error : () =>{
          alert('Error al eleiminar');
        }
      })
    )
  }
  
}
