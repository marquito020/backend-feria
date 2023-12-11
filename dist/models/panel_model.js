import { Schema, model } from "mongoose";
const panelSchema = new Schema({
    marca: { type: String, required: true },
    modelo: String,
    potenciaMaximaW: Number,
    tamanoCelda: {
        largo: Number,
        ancho: Number,
    },
    numeroCeldas: Number,
    tamanoModulo: {
        largo: Number,
        ancho: Number,
        espesor: Number,
    },
    pesoPieza: Number,
    tensionMaxima: Number,
    corrienteMaxima: Number,
    voltajeCircuitoAbierto: Number,
    corrienteCortocircuito: Number,
    precio: Number,
    imgURL: String,
});
const Panel = model("Panel", panelSchema);
export default Panel;
