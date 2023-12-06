import { Schema, model } from "mongoose";
import { Battery } from "../interfaces/battery.interface";
const batterySchema = new Schema<Battery>({
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
