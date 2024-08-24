
export interface Materia {
    id: number;
    nombre: string;
    modulo: number;
    anio: number;
    horasSemanales: number;
    horasTotales: number;
    correlativasRegular: number[];
    correlativasAprobada: number[];
    estado: string,
    notaFinal: number;
}
