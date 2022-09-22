import { Component, OnInit,OnDestroy,Output,EventEmitter } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';
import { Subscription } from 'rxjs';
import {  ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Categoria } from 'src/app/models/categoria';
@Component({
  selector: 'app-alta-articulo',
  templateUrl: './alta-articulo.component.html',
  styleUrls: ['./alta-articulo.component.css']
})
export class AltaArticuloComponent implements OnInit,OnDestroy {
  articulo : Articulo;
  listadoCategorias : Categoria[];
  isEdit : boolean = false;
  @Output() onConfirmar= new EventEmitter();
  private subscription= new Subscription();
  constructor(private servicioArticulo : ArticuloService,private activatedRoute : ActivatedRoute,private router : Router,private servicioCategoria : CategoriaService) { }

  ngOnInit(): void {
    this.articulo= new Articulo();
    this.obtenerCategorias();
    this.cargar();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  guardar(){
    this.subscription.add(
      this.servicioArticulo.agregar(this.articulo).subscribe({
        next : () =>{
          this.onConfirmar.emit();
          alert('Registro el artículo correctamente');
          this.router.navigate(['lista-articulo']);
        },
        error : () =>{
          alert('Error al guardar artículo');
        }
      })
    )
  }

  obtenerCategorias(){
    this.subscription.add(
      this.servicioCategoria.obtenerListadoCategorias().subscribe({
        next : (listado : Categoria[]) =>{
          this.listadoCategorias=listado;
        },
        error : () =>{
          alert('Error al obtener categorias');
        }
      })
    )
  }

  editar(){
    this.servicioArticulo.modificar(this.articulo).subscribe({
      next : () =>{
        alert('Edito el artículo correctamente');
        this.router.navigate(['lista-articulo']);
      },
      error : () =>{
        alert ('Error al editar');
      }
    })
  }

  
  cargar () : void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id = e['id'];
        if(id){
          this.isEdit=true;
          this.servicioArticulo.getArticulo(id).subscribe(
            es => this.articulo=es
        )}else{
          this.isEdit=false;
        }
      }
    )
  }


}
