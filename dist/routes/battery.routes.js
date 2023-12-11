import { Router } from "express";
import BatteryController from "../controllers/battery.controller.js";
const router = Router();
router.get("/batteries/:id", BatteryController.getBattery);
router.get("/batteries", BatteryController.getAllBatteries);
router.post("/batteries", BatteryController.addBattery);
export default router;
