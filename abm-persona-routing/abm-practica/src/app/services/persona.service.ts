import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class PersonaService {

  private API_URL: string = 'https://6317ca93f6b281877c5d7785.mockapi.io/persona/';
  private listado : Persona [];

  constructor(private http : HttpClient) {
    this.listado=[];
   }

   agregar(persona: Persona) : Observable<Persona>{
    return this.http.post<Persona>(this.API_URL,persona);
   }

   eliminar(persona : Persona) : Observable<any>{
    return this.http.delete<Persona>(this.API_URL+persona.id);
   }

   obtenerListado() : Observable<Persona[]> {
    const result = this.http.get<Persona[]>(this.API_URL);
    return result;
   }

   modificar(persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(this.API_URL + persona.id, persona);
  }

   getPersona(id: number) : Observable<Persona>{
    return this.http.get<Persona>(this.API_URL+ id);
   }
  
}
