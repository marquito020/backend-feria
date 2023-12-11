import Battery from "../services/battery.service.js";
const getBattery = async (req, res) => {
    try {
        const { id } = req.params;
        const batteryFound = await Battery.getBattery(id);
        if ("message" in batteryFound) {
            return res.status(400).json(batteryFound);
        }
        return res.status(200).json(batteryFound);
    }
    catch (error) {
        return res.status(500).json({ message: "Ocurrio un error en el server" });
    }
};
const getAllBatteries = async (req, res) => {
    try {
        const batteries = await Battery.getAllBatteries();
        return res.status(200).json(batteries);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Ocurrio un error en el server" });
    }
};
const addBattery = async (req, res) => {
    try {
        const battery = req.body;
        const newBattery = await Battery.addBattery(battery);
        return res.status(200).json(newBattery);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Ocurrio un error en el server" });
    }
};
export default { getBattery, getAllBatteries, addBattery };
