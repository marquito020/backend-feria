import InventerModel from "../models/inverter.model.js";
const getAllInverters = async () => {
    return await InventerModel.find();
};
const addInverter = async (inverter) => {
    const newInverter = new InventerModel(inverter);
    return await newInverter.save();
};
const getInverter = async (id) => {
    try {
        const inverterFound = await InventerModel.findById({ _id: id });
        if (!inverterFound)
            return { message: "Inversor no encontrado" };
        return inverterFound;
    }
    catch (error) {
        return { message: "Ocurrio un error en el server" };
    }
};
export default { getAllInverters, addInverter, getInverter };
