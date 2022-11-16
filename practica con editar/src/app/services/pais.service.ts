import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../models/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private API_URL : string = 'https://636c46a7ad62451f9fc6d36f.mockapi.io/pais';
  constructor(private http : HttpClient) { }

  obtenerPaises() : Observable<Pais[]>{
    return this.http.get<Pais[]>(this.API_URL);
  }
}
