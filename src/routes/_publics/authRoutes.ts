import { Router } from "express";
import { AuthController } from "../../controllers/authController";
const authRoutes = Router();

authRoutes.post("/login", AuthController.login);

export { authRoutes };
