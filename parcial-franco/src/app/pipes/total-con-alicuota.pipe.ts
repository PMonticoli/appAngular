import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'totalConAlicuota'
})
export class TotalConAlicuotaPipe implements PipeTransform {
    //Desconozco los valores verdaderos del porcentaje de alicuota
    //Establecí 20 como valor por defecto y 30 como parametro desde el listado
    //a fines de demostrar que es funcional
    private readonly PORCENTAJE_POR_DEFECTO = 20;
    transform(value: number, ...args: any[]): number {
        const porcentaje = args[0] ? args[0] : this.PORCENTAJE_POR_DEFECTO;
        return value * ((porcentaje / 100) + 1);
    }

}
