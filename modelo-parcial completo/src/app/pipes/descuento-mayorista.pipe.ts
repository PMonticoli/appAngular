import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descuentoMayorista'
})
export class DescuentoMayoristaPipe implements PipeTransform {
  private DESCUENTO_POR_DEFECTO = 10;
  transform(valorInicial: number, args: number): any {
    if(args>=2000){
      this.DESCUENTO_POR_DEFECTO;
    }else{
      this.DESCUENTO_POR_DEFECTO=0;
    }
    const resultado = valorInicial - ((this.DESCUENTO_POR_DEFECTO/100) * valorInicial)
    return resultado;
  }

}
