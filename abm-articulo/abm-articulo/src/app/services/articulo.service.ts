import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Articulo } from '../models/articulo';
import { Observable } from 'rxjs';
@Injectable()
export class ArticuloService {
  private API_URL : string= 'https://6317ca93f6b281877c5d7785.mockapi.io/articulo/';
  private listado : Articulo[];
  constructor(private http : HttpClient) {
    this.listado = [];
   }

   agregar(articulo : Articulo) : Observable<Articulo>{
    return this.http.post<Articulo>(this.API_URL,articulo);
   }

   eliminar(articulo : Articulo) : Observable<any>{
    return this.http.delete(this.API_URL+articulo.id);
   } 

   obtenerListado(): Observable<Articulo[]>{
    return this.http.get<Articulo[]>(this.API_URL);
   }

   modificar(articulo : Articulo) : Observable<Articulo>{
    return this.http.put<Articulo>(this.API_URL+articulo.id,articulo);
   }
   
   getArticulo(id: number) : Observable<Articulo>{
    return this.http.get<Articulo>(this.API_URL+ id);
   }
   
}
