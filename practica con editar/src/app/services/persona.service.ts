import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private API_URL : string = 'https://636c46a7ad62451f9fc6d36f.mockapi.io/persona/';
  constructor(private http  : HttpClient) { }

  agregar (persona : Persona) : Observable<Persona> {
     return this.http.post<Persona>(this.API_URL,persona)
  }
  obtenerTodas () : Observable<Persona[]> {
    return this.http.get<Persona[]>(this.API_URL)
 }

 modificar(persona : Persona) : Observable<Persona>{
  return this.http.put<Persona>(this.API_URL + persona.id, persona)
 }
 getPersonaById (id : number) : Observable<Persona> {
  return this.http.get<Persona>(this.API_URL + id)
}

eliminar(persona: Persona): Observable<any> {
  return this.http.delete(this.API_URL + persona.id);
}

nombreExiste(valor : string) : Observable<boolean>{
  return this.http.get<Persona[]>(this.API_URL).pipe(
    map(x => x.some((persona)=> persona.nombre == valor))
  )
}

apellidoExiste (valor :string ): Observable<boolean> {
  return this.http.get<Persona[]>(this.API_URL).pipe(
    map(x=> x.some((persona)=> persona.apellido== valor))
  )
}


}
