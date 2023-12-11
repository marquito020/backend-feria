import { Schema, model } from "mongoose";
const consultaSchema = new Schema({
    idUser: { type: String, required: true },
    idPanel: { type: String, required: true },
    idInverter: { type: String, required: true },
    idBattery: { type: String, required: true },
    consumoAnual: Number,
    cantidadPaneles: Number,
    cantidadInversores: Number,
    cantidadBaterias: Number,
    precioTotal: Number,
    ahorroPorcentual: Number,
    tiempoRecuperacion: Number,
    fechaConsulta: { type: Date, required: true },
});
const Consulta = model("Consulta", consultaSchema);
export default Consulta;
