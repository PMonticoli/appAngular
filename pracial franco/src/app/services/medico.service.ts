import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medico } from '../models/medico.model';

@Injectable({
    providedIn: 'root'
})
export class MedicoService {
    private URL: string =
        'https://6317ca93f6b281877c5d7785.mockapi.io/especialidad/';

    constructor(private http: HttpClient) { }

    obtenerPorEspecialidad(especialidadId: number): Observable<Medico[]> {
        return this.http.get<Medico[]>(this.URL + especialidadId + '/medico');
    }
}
