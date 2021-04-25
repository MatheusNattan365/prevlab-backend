import { Router } from "express";
import { AdminController } from "../../../controllers/adminController";
const adminRoutes = Router();

adminRoutes.get("/all-users", AdminController.getAllUsers);

export { adminRoutes };
