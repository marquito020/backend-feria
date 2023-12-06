import { Request, Response } from "express";
import Inverter from "../services/inventer.service.js";

const getInverter = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const inventerFound = await Inverter.getInverter(id);

        if ("message" in inventerFound) {
            return res.status(400).json(inventerFound);
        }

        return res.status(200).json(inventerFound);
    } catch (error) {
        return res.status(500).json({ message: "Ocurrio un error en el server" });
    }
};

const getAllInverters = async (req: Request, res: Response) => {
    try {
        const inventers = await Inverter.getAllInverters();
        return res.status(200).json(inventers);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Ocurrio un error en el server" });
    }
}

const addInverter = async (req: Request, res: Response) => {
    try {
        const inventer = req.body;
        const newInventer = await Inverter.addInverter(inventer);
        return res.status(200).json(newInventer);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Ocurrio un error en el server" });
    }
};

export default { getInverter, getAllInverters, addInverter };

