import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { map, Observable } from "rxjs";
import { PersonaService } from "src/app/services/persona.service";

export class PersonaValidador{
    static nombreValidador(servicioPersona : PersonaService) : AsyncValidatorFn{
        return (control : AbstractControl) : Observable<ValidationErrors | null> =>{
            return servicioPersona.existeNombre(control.value).pipe(
                map((result : boolean)=> result? {nameAlReadyExists : true} : null)
            )
        }
    }

    static fechaValidador(servicioPersona : PersonaService) : AsyncValidatorFn{
        return (control : AbstractControl) : Observable<ValidationErrors | null> =>{
            return servicioPersona.existenMasDeTresFechas(control.value).pipe(
                map((result : boolean) => result ? {fechaExiste : true} : null)
            )
        }
    }
}