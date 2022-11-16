import { Especialidad } from "./especialidad.model";

export interface Atencion {
    id: string;
    paciente: string;
    documento: number;
    especialidadId: string;
    subEspecialidadId: string;
    costo: number;
    fecha: Date;
    medicoId: string;
    especialidad: Especialidad;
}
