import { Ciudad } from "./ciudad";
import { Pais } from "./pais";

export class Persona {
    id : string;
    nombre : string;
    apellido : string;
    edad : number;
    pais : Pais;
    paisId : string;
    ciudad : Ciudad;
    ciudadId : string;
}
