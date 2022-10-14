import { Component, OnInit, Input ,Output,EventEmitter, ViewChild} from '@angular/core';
import { Orden } from 'src/app/models/orden';
import { OrdenService } from 'src/app/services/orden.service';
import { Subscription } from 'rxjs';
import { Marca } from 'src/app/models/marca';
import { MarcaService } from 'src/app/services/marca.service';
import { ActivatedRoute ,Router} from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-alta-orden',
  templateUrl: './alta-orden.component.html',
  styleUrls: ['./alta-orden.component.css']
})
export class AltaOrdenComponent implements OnInit {
  @Input() orden : Orden;
  listadoMarcas : Marca[];
  @ViewChild('formOrden') formulario : NgForm;
  @Output() onConfirmar = new EventEmitter();
  constructor(private servicioOrden : OrdenService, 
    private servicioMarca : MarcaService, 
    private router : Router,
    private activatedRoute : ActivatedRoute) { }
  private subscription = new Subscription();
  ngOnInit(): void {
    this.orden= new Orden();
    this.obtenerMarcas();
  }

  guardar(){
    if(this.formulario.valid){
      this.subscription.add(
        this.servicioOrden.agregar(this.orden).subscribe({
          next : () =>{
            this.onConfirmar.emit();
            alert('Registro la orden correctamente');
            this.router.navigate(['/lista-orden']);
          },
          error : ()=>{
            alert('Error al registrar');
          }
        })
      )
    }else{
      alert('Error al guardar, revise y complete todos los campos!')
    }
  }

  cambioCheck(x: boolean){
    this.orden.activo = x;
  }
  obtenerMarcas(){
    this.subscription.add(
      this.servicioMarca.obtenerMarcas().subscribe({
        next : (listado : Marca[]) =>{
          this.listadoMarcas=listado;
        },
        error : () =>{
          alert('Error al obtener marcas');
        }
      })
    )
  }
}
