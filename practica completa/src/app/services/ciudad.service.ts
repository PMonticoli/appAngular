import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ciudad } from '../models/ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  private API_URL : string = 'https://636c46a7ad62451f9fc6d36f.mockapi.io/pais/';
  constructor(private http : HttpClient) { }

  obtenerCiudadesPorPais(idPais : number) : Observable<Ciudad[]>{
    return this.http.get<Ciudad[]>(this.API_URL + idPais + '/ciudad');
  }
}
