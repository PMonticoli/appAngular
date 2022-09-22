import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria';
import { Observable } from 'rxjs';
@Injectable()
export class CategoriaService {
  private URL_API : string = 'https://6317ca93f6b281877c5d7785.mockapi.io/categoria/';
  private listadoCategorias : Categoria [];
  constructor(private http : HttpClient) { 
    this.listadoCategorias=[];
  }


  obtenerListadoCategorias(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.URL_API);
  }
}
