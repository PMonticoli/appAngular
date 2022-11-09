import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";
import { PersonaService } from "../services/persona.service";
import { map } from 'rxjs/operators';
export class PersonaValidador {
    static nombreValidator(personaService : PersonaService): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
          return personaService
            .nombreExiste(control.value)
            .pipe(
              map((result: boolean) => {
                return result ? { nombreExiste: result } : null;
              })
            );
        };
      }
      static apellidoValidador(personaService : PersonaService): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
          return personaService
            .apellidoExiste(control.value)
            .pipe(
              map((result: boolean) => {
                return result ? { apellidoExiste: result } : null;
              })
            );
        };
      }
}
