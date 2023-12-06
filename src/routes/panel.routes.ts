import { Router } from "express";
import PanelController from "../controllers/panel.controller.js";

const router = Router();

router.get("/panels/:id", PanelController.getPanel);
router.get("/panels", PanelController.getAllPanels);
router.post("/panels", PanelController.addPanel);

export default router;