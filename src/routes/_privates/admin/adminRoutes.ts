import { Router } from "express";
import { AdminController } from "../../../controllers/adminController";
const adminRoutes = Router();

adminRoutes.get("/all-users", AdminController.getAllUsers);

adminRoutes.post("/createnewuser", AdminController.createNewUser);

export { adminRoutes };
