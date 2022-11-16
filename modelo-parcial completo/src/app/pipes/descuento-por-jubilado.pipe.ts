import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descuentoPorJubilado'
})
export class DescuentoPorJubiladoPipe implements PipeTransform {
  private DESCUENTO_POR_DEFECTO = 10;
  transform(valorInicial: number, args: number): any {
    if(args>65){
      this.DESCUENTO_POR_DEFECTO;
    }else{
      this.DESCUENTO_POR_DEFECTO=0;
    }
    const resultado = valorInicial - ((this.DESCUENTO_POR_DEFECTO/100) * valorInicial)
    return resultado;
  }

}
