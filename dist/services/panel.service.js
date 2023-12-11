import PanelModel from "../models/panel_model.js";
const getAllPanels = async () => {
    return await PanelModel.find();
};
const addPanel = async (panel) => {
    const newPanel = new PanelModel(panel);
    return await newPanel.save();
};
const getPanel = async (id) => {
    try {
        const panelFound = await PanelModel.findById({ _id: id });
        if (!panelFound)
            return { message: "Panel no encontrado" };
        return panelFound;
    }
    catch (error) {
        return { message: "Ocurrio un error en el server" };
    }
};
export default { getAllPanels, addPanel, getPanel };
