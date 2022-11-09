import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ClienteService } from '../services/cliente.service';

export class ClienteValidator {
  static nombreValidator(clienteService: ClienteService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return clienteService
        .checkIfNameExists(control.value)
        .pipe(
          map((result: boolean) => {
            return result ? { nameAlreadyExists: result } : null;
          })
        );
    };
  }
  static numeroValidator(clienteService: ClienteService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return clienteService
        .checkIfPhoneExists(control.value)
        .pipe(
          map((result: boolean) => {
            return result ? { phoneAlreadyExists: result } : null;
          })
        );
    };
  }
}