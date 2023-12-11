import { Schema, model } from "mongoose";
const batterySchema = new Schema({
    marca: { type: String, required: true },
    modelo: String,
    capacidadAh: Number,
    voltaje: Number,
    tipoBateria: String,
    ciclosVida: String,
    caracteristicas: String,
    precio: Number,
    imgURL: String,
});
const Battery = model("Battery", batterySchema);
export default Battery;
