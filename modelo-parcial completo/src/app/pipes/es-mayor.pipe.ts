import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'esMayor'
})
export class EsMayorPipe implements PipeTransform {
  private readonly EDAD_POR_DEFECTO = 18;
  transform(valor: number, ...args: number[]): any {
    const limite = args[0] ? args[0] : this.EDAD_POR_DEFECTO;
    const resultado = valor >= limite ? "SI" : "NO";
    return resultado;
  }

}
