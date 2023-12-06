export interface Panel {
    _id?: string;
    marca: string;
    modelo: string;
    potenciaMaximaW: number;
    tamanoCelda: {
        largo: number;
        ancho: number;
    };
    numeroCeldas: number;
    tamanoModulo: {
        largo: number;
        ancho: number;
        espesor: number;
    };
    pesoPieza: number;
    tensionMaxima: number;
    corrienteMaxima: number;
    voltajeCircuitoAbierto: number;
    corrienteCortocircuito: number;
    precio: number;
    imgURL: string;
}