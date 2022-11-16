import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alicuota'
})
export class AlicuotaPipe implements PipeTransform {
  private readonly PORCENTAJE_POR_DEFECTO = 21;
  transform(valor: number, ...args: number[]): any {
    const porcentaje = args[0] ? args[0] : this.PORCENTAJE_POR_DEFECTO;
    return valor * ((porcentaje / 100) +1);
  }

    



}
