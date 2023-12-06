import BatteryModel from "../models/battery.model.js";
import { Battery } from "../interfaces/battery.interface.js";

const getAllBatteries = async () => {
    return await BatteryModel.find();
}

const addBattery = async (battery: Battery) => {
    const newBattery = new BatteryModel(battery);
    return await newBattery.save();
}

const getBattery = async (id: string) => {
    try {
        const batteryFound = await BatteryModel.findById({ _id: id });
        if (!batteryFound) return { message: "Bateria no encontrada" };
        return batteryFound;
    } catch (error) {
        return { message: "Ocurrio un error en el server" };
    }
}

export default { getAllBatteries, addBattery, getBattery };