import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { map, Observable } from "rxjs";
import { AtencionService } from "../services/atencion.service";

export class AtencionValidator {
    static existenMasDeTresConFecha(servicio: AtencionService): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
            return servicio.existenMasDeTresPorFecha(control.value).pipe(
                map((resultado: boolean) => resultado ? { existenMasDeTresConFecha: true } : null)
            )
        }
    }
}