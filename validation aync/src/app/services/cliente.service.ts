import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cliente } from '../models/cliente';
@Injectable()
export class ClienteService {
  private API_URL : string = 'https://633e34abc235b0e575206cbf.mockapi.io/api/clientes/';
  constructor(private http : HttpClient) { }

  agregar(cliente : Cliente) : Observable<Cliente>{
    return this.http.post<Cliente>(this.API_URL,cliente);
  }

  eliminar (id : number) : Observable<any>{
    return this.http.delete(this.API_URL+id)
  }
  obtenerClientes() : Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.API_URL);
  }

  checkIfNameExists(value: string): Observable<boolean> {
    return this.http.get<Cliente[]>(this.API_URL).pipe(
      map(z => z.some((cliente) => cliente.nombre === value)),
    );
  }


  checkIfPhoneExists(value: number): Observable<boolean> {
    return this.http.get<Cliente[]>(this.API_URL).pipe(
      map(z => z.some((a) => a.telefono == value)),
    );
  }

  
}
