import { Router } from "express";
import UserController from "../controllers/user.controller.js";
const router = Router();
router.get("/users/:id", UserController.getUser);
router.get("/users", UserController.getAllUsers);
router.post("/users", UserController.addUser);
export default router;
