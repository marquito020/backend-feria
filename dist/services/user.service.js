import UserModel from "../models/user.model.js";
import { encrypt } from "../utils/bcrypt.utils.js";
const getUser = async (id) => {
    try {
        const userFound = await UserModel.findById({ _id: id });
        if (!userFound)
            return { message: "Usuario no encontrado" };
        return userFound;
    }
    catch (error) {
        return { message: "Ocurrio un error en el server" };
    }
};
const getAllUsers = async () => {
    return await UserModel.find();
};
const addUser = async (user) => {
    const password = user.password;
    user.password = await encrypt(password);
    const newUser = new UserModel(user);
    return await newUser.save();
};
export default { getUser, getAllUsers, addUser };
