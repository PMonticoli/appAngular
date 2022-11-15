import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'esMayor'
})
export class EsMayorPipe implements PipeTransform {
  private readonly VALOR_POR_DEFECTO = 18;
  transform(valor: number, ...args: any[]): any {
    const limite = args[0] ? args[0] : this.VALOR_POR_DEFECTO;
    const resultado = valor > limite ? "SI" : "NO";
    return resultado;
  }

}
