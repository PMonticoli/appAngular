import { Ciudad } from "./ciudad";
import { Pais } from "./pais";

export class Persona {
    id: string;
    nombre: string;
    apellido: string;
    edad: number;
    fecha : Date;
    precio : number;
    paisId: string;
    pais: Pais;
    ciudadId : string;
    ciudad : Ciudad;
}
