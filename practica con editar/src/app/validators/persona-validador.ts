import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { map, Observable } from "rxjs";
import { PersonaService } from "../services/persona.service";

export class ValidadorPersona {
    static nombreValidador(servicioPersona : PersonaService) : AsyncValidatorFn {
        return (control : AbstractControl) : Observable<ValidationErrors | null> =>{
            return servicioPersona.nombreExiste(control.value).pipe(
                map((result : boolean)=> result ? {nameAlReadyExists : result} : null)
            )
        }
    }

    static apellidoValidador(servicioPersona : PersonaService) : AsyncValidatorFn {
        return (control : AbstractControl) : Observable<ValidationErrors | null> =>{
            return servicioPersona.apellidoExiste(control.value).pipe(
                map((result : boolean)=> result ? {lastNameAlReadyExists : result} : null)
            )
        }
    }
}