import { Schema, model } from "mongoose";
import { Inverter } from "../interfaces/inverter.interface";

const inverterSchema = new Schema<Inverter>({
    marca: { type: String, required: true },
    modelo: String,
    potenciaNominalW: Number,
    potenciaPicoW: Number,
    entrada: String,
    caracteristicas: String,
    salida: String,
    precio: Number,
    imgURL: String
});

const Inverter = model("Inverter", inverterSchema);

export default Inverter;