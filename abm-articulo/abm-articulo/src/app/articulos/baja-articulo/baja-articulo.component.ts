import { Component, OnDestroy,EventEmitter ,Output,Input} from '@angular/core';
import { ArticuloService } from 'src/app/services/articulo.service';
import{ Subscription } from 'rxjs';
import { Articulo } from 'src/app/models/articulo';
@Component({
  selector: 'app-baja-articulo',
  templateUrl: './baja-articulo.component.html',
  styleUrls: ['./baja-articulo.component.css']
})
export class BajaArticuloComponent implements OnDestroy {
  @Input() articulo : Articulo;
  @Output() onEliminado = new EventEmitter();
  constructor(private servicioArticulo : ArticuloService) { }
  private subscription = new Subscription();

  ngOnDestroy() : void {
    this.subscription.unsubscribe();
  }

  eliminarArticulo(){
    this.subscription.add(
      this.servicioArticulo.eliminar(this.articulo).subscribe({
        next : () =>{
          this.onEliminado.emit();
          alert('Elimino el articulo con id'+' '+ this.articulo.id+' ' +'correctamente');
        },
        error : () =>{
          alert('Error al eliminar');
        }
      })
    )
  }

}
