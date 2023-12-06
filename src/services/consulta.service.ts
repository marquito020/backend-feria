import ConsultaModel from "../models/consulta.model.js";
import { Consulta } from "../interfaces/consulta.interface.js";
import PanelModel from "../models/panel_model.js";
import BatteryModel from "../models/battery.model.js";
import InverterModel from "../models/inverter.model.js";

const getAllConsultas = async () => {
    return await ConsultaModel.find();
}

const addConsulta = async (consulta: Consulta) => {
    const idPanel = consulta.idPanel;
    const idBattery = consulta.idBattery;
    const idInverter = consulta.idInverter;
    const consumoAnual = consulta.consumoAnual;

    const consumoMensual = consumoAnual! / 12;

    const PanelFound = await PanelModel.findById({ _id: idPanel });
    const BatteryFound = await BatteryModel.findById({ _id: idBattery });
    const InverterFound = await InverterModel.findById({ _id: idInverter });

    const cantidadPaneles = Math.ceil(consumoAnual! / PanelFound!.potenciaMaximaW);
    const potenciaNecesaria = consumoMensual / BatteryFound!.voltaje;
    const cantidadBaterias = Math.ceil(potenciaNecesaria / BatteryFound!.capacidadAh);
    const potenciaTotalPaneles = cantidadPaneles * PanelFound!.potenciaMaximaW;
    const cantidadInversores = Math.ceil(potenciaTotalPaneles / InverterFound!.potenciaNominalW);

    const precioTotal = cantidadPaneles * PanelFound!.precio + cantidadBaterias * BatteryFound!.precio + cantidadInversores * InverterFound!.precio;

    const precioConsumoMensual = consumoMensual * 0.5;
    const consumoHr = (consumoMensual / 30) / 12;
    const ahorroPotencial = (7 * (precioConsumoMensual) + (5 * (8 * (consumoHr * 0.5))) - 5 * (4 * (consumoHr * 0.5)))
    const tiempoRecuperacion = precioTotal / ahorroPotencial;

    const newConsulta = new ConsultaModel({
        idUser: consulta.idUser,
        idPanel: consulta.idPanel,
        idInverter: consulta.idInverter,
        idBattery: consulta.idBattery,
        consumoAnual: consulta.consumoAnual,
        cantidadPaneles: cantidadPaneles,
        cantidadInversores: cantidadInversores,
        cantidadBaterias: cantidadBaterias,
        precioTotal: precioTotal,
        ahorroPorcentual: ahorroPotencial,
        tiempoRecuperacion: tiempoRecuperacion,
        fechaConsulta: consulta.fechaConsulta,
    });

    return await newConsulta.save();
}

const getConsulta = async (id: string) => {
    try {
        const userId = id;
        /* const consultaFound = await ConsultaModel.findById({ _id: id }); */
        const consultaFound = await ConsultaModel.find({ idUser: userId });
        if (!consultaFound) return { message: "Consulta no encontrada" };
        return consultaFound;
    } catch (error) {
        return { message: "Ocurrio un error en el server" };
    }
}

export default { getAllConsultas, addConsulta, getConsulta };
