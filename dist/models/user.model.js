import { Schema, model } from "mongoose";
const UserSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    nombre: String,
    fecha_nacimiento: Date,
    celular: String,
    rol: { type: String, enum: ["admin", "user"], default: "user" },
}, {
    timestamps: true,
    versionKey: false
});
const User = model("User", UserSchema);
export default User;
