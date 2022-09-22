import { Component, OnInit,Input } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';

@Component({
  selector: 'app-editar-articulo',
  templateUrl: './editar-articulo.component.html',
  styleUrls: ['./editar-articulo.component.css']
})
export class EditarArticuloComponent implements OnInit {
  @Input() articulo : Articulo;
  constructor() { }

  ngOnInit(): void {
  }

}
