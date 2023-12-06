import { Request, Response } from "express";
import Consulta from "../services/consulta.service.js";

const getConsulta = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const consultaFound = await Consulta.getConsulta(id);

        if ("message" in consultaFound) {
            return res.status(400).json(consultaFound);
        }

        return res.status(200).json(consultaFound);
    }

    catch (error) {
        return res.status(500).json({ message: "Ocurrio un error en el server" });
    }

}

const getAllConsultas = async (req: Request, res: Response) => {
    try {
        const consultas = await Consulta.getAllConsultas();
        return res.status(200).json(consultas);
    }

    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Ocurrio un error en el server" });
    }

}

const addConsulta = async (req: Request, res: Response) => {
    try {
        const consulta = req.body;
        console.log("addConsulta", consulta);
        const newConsulta = await Consulta.addConsulta(consulta);
        return res.status(200).json(newConsulta);
    }

    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Ocurrio un error en el server" });
    }

};

export default { getConsulta, getAllConsultas, addConsulta };