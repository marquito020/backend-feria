import BatteryModel from "../models/battery.model.js";
const getAllBatteries = async () => {
    return await BatteryModel.find();
};
const addBattery = async (battery) => {
    const newBattery = new BatteryModel(battery);
    return await newBattery.save();
};
const getBattery = async (id) => {
    try {
        const batteryFound = await BatteryModel.findById({ _id: id });
        if (!batteryFound)
            return { message: "Bateria no encontrada" };
        return batteryFound;
    }
    catch (error) {
        return { message: "Ocurrio un error en el server" };
    }
};
export default { getAllBatteries, addBattery, getBattery };
