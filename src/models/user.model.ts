import { Schema, model } from "mongoose";
import { User } from "../interfaces/user.interface.js";

const UserSchema = new Schema<User>({
    email: { type: String, required: true },
    password: { type: String, required: true },
    nombre: String,
    fecha_nacimiento: Date,
    celular: String,
    rol: { type: String, enum: ["admin", "user"], default: "user" },
}, {
    timestamps: true,
    versionKey: false
}
);

const User = model("User", UserSchema);

export default User;