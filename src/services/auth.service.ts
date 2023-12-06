import { Auth } from "../interfaces/auth.interface.js";
import UserModel from "../models/user.model.js";
import { verify } from "../utils/bcrypt.utils.js";
import { generateToken } from "../utils/jwt.utils.js";

const login = async ({ email, password }: Auth) => {
    const userFound = await UserModel.findOne({ email });
    if (!userFound) return { message: "Usuario no encontrado" };

    const isMatch = await verify(password, userFound.password);
    if (!isMatch) return { message: "Contraseña incorrecta" };

    const token = generateToken(userFound);

    return {
        "_id": userFound._id,
        "email": userFound.email,
        "token": token,
        "nombre": userFound.nombre,
        "fecha_nacimiento": userFound.fecha_nacimiento,
        "celular": userFound.celular,
        "rol": userFound.rol
    };
}

export default { login };
