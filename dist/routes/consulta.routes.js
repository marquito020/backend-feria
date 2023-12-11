import { Router } from "express";
import consultaController from "../controllers/consulta.controller.js";
const router = Router();
router.get("/consultas/:id", consultaController.getConsulta);
router.get("/consultas", consultaController.getAllConsultas);
router.post("/consultas", consultaController.addConsulta);
export default router;
