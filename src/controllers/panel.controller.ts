import { Request, Response } from "express";
import Panel from "../services/panel.service.js";

const getPanel = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const panelFound = await Panel.getPanel(id);

        if ("message" in panelFound) {
            return res.status(400).json(panelFound);
        }

        return res.status(200).json(panelFound);
    } catch (error) {
        return res.status(500).json({ message: "Ocurrio un error en el server" });
    }
};

const getAllPanels = async (req: Request, res: Response) => {
    try {
        const panels = await Panel.getAllPanels();
        return res.status(200).json(panels);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Ocurrio un error en el server" });
    }
}

const addPanel = async (req: Request, res: Response) => {
    try {
        const panel = req.body;
        const newPanel = await Panel.addPanel(panel);
        return res.status(200).json(newPanel);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Ocurrio un error en el server" });
    }
};

export default { getPanel, getAllPanels, addPanel };