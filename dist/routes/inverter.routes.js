import { Router } from "express";
import InverterController from "../controllers/inverter.controller.js";
const router = Router();
router.get("/inverters/:id", InverterController.getInverter);
router.get("/inverters", InverterController.getAllInverters);
router.post("/inverters", InverterController.addInverter);
export default router;
