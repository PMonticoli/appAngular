import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Marca } from '../models/marca';
import { Observable } from 'rxjs';
@Injectable()
export class MarcaService {
  listadoMarcas : Marca[];
  private API_URL : string='https://6317ca93f6b281877c5d7785.mockapi.io/marca/';
  constructor(private http : HttpClient) {
    this.listadoMarcas=[];
   }

   obtenerMarcas(): Observable<Marca[]>{
    return this.http.get<Marca[]>(this.API_URL);
   }

}
