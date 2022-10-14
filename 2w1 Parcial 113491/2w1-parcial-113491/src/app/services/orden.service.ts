import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Orden } from '../models/orden';
@Injectable()
export class OrdenService {

  private API_URL : string ='https://6317ca93f6b281877c5d7785.mockapi.io/orden/';

  constructor(private http : HttpClient) { }

  agregar(orden : Orden) : Observable<Orden>{
    return this.http.post<Orden>(this.API_URL,orden);
  }

  eliminar(orden : Orden) : Observable<any>{
    return this.http.delete(this.API_URL+orden.id);
   } 

  obtenerOrdenes() : Observable<Orden[]>{
    return this.http.get<Orden[]>(this.API_URL);
  }

}
