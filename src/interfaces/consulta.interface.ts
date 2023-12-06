export interface Consulta {
    _id?: string;
    idUser: string;
    idPanel: string;
    idBattery: string;
    idInverter: string;
    consumoAnual?: number;
    cantidadPaneles?: number;
    cantidadBaterias?: number;
    cantidadInversores?: number;
    precioTotal?: number;
    ahorroPorcentual?: number;
    tiempoRecuperacion?: number;
    fechaConsulta?: Date;
}