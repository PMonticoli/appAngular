import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descuento'
})
export class DescuentoPipe implements PipeTransform {
  private readonly DESCUENTO_POR_DEFECTO = 5;
  transform(valor: number, ...args: number[]): any {
    const descuento = args[0] ? args[0] : this.DESCUENTO_POR_DEFECTO;
    return valor - ((descuento/100) * valor);
  } 

}
