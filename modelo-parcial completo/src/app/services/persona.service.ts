import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';

import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private API_URL: string =
  'https://636c46a7ad62451f9fc6d36f.mockapi.io/persona/';

  constructor(private http: HttpClient) {}

  obtenerListado(): Observable<Persona[]> {
    const result = this.http.get<Persona[]>(this.API_URL);
    return result;
  }

  eliminar(persona: Persona): Observable<any> {
    return this.http.delete(this.API_URL + persona.id);
  }

  agregar(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.API_URL, persona);
  }

  modificar(persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(this.API_URL + persona.id, persona);
  }

  existeNombre (valor: string) : Observable<boolean>{
    return this.http.get<Persona[]>(this.API_URL).pipe(
      map(x=> x.some((persona)=> persona.nombre == valor))
    )
  }

  existenMasDeTresFechas(valor : Date) : Observable<boolean>{
    return this.http.get<Persona[]>(this.API_URL).pipe(
      map(
        (arr : Persona[])=>
        (arr.filter((persona : Persona)=> persona.fecha == valor).length>3)
      )
    )
  }
}
