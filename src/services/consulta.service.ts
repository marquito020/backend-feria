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

    console.log("Consumo anual: " + consumoAnual);
    const consumoMensual = consumoAnual! / 12;
    console.log("Consumo mensual: " + consumoMensual);

    const PanelFound = await PanelModel.findById({ _id: idPanel });
    const BatteryFound = await BatteryModel.findById({ _id: idBattery });
    const InverterFound = await InverterModel.findById({ _id: idInverter });

    const cantidadPaneles = Math.ceil(((consumoAnual! / 12) / 30) / PanelFound!.potenciaMaximaW);
    console.log("Cantidad de paneles: " + cantidadPaneles);
    const potenciaNecesaria = consumoMensual / BatteryFound!.voltaje;
    console.log("Potencia necesaria: " + potenciaNecesaria);
    const cantidadBaterias = Math.ceil((potenciaNecesaria / BatteryFound!.capacidadAh) / BatteryFound!.capacidadAh);
    console.log("Cantidad de baterias: " + cantidadBaterias);
    const potenciaTotalPaneles = cantidadPaneles * PanelFound!.potenciaMaximaW;
    console.log("Potencia total de paneles: " + potenciaTotalPaneles);
    const cantidadInversores = Math.ceil(potenciaTotalPaneles / InverterFound!.potenciaNominalW);
    console.log("Cantidad de inversores: " + cantidadInversores);

    const precioTotal = cantidadPaneles * PanelFound!.precio + cantidadBaterias * BatteryFound!.precio + cantidadInversores * InverterFound!.precio;
    console.log("Precio total: " + precioTotal);

    const precioConsumoMensual = consumoMensual * 0.5;
    console.log("Precio consumo mensual: " + precioConsumoMensual);
    const consumoHr = ((consumoAnual! / 12) / 30) / 12;
    console.log("Consumo por hora: " + consumoHr);
    const ahorroPotencial = Math.ceil(7 * (precioConsumoMensual) + (5 * (30 * (8 * (consumoHr * 0.5)))) - 5 * (30 * (4 * (consumoHr * 0.5))))
    console.log("Calculo de ahorro potencial_1: ", (5 * (30 * (8 * (consumoHr * 0.5)))));
    console.log("Calculo de ahorro potencial_2: ", (5 * (30 * (4 * (consumoHr * 0.5)))));
    console.log("Calculo de ahorro potencial_3: ", (7 * (precioConsumoMensual)));
    console.log("Ahorro potencial: " + ahorroPotencial);
    const tiempoRecuperacion = (ahorroPotencial / precioTotal).toFixed(2);
    console.log("Tiempo de recuperacion: " + tiempoRecuperacion);

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
