import { Request, Response, Router } from "express";
import { AdminController } from "../../../controllers/adminController";
import { adminMiddleware } from "../../../middlewares/adminMiddleware";
import { adminAppRoutes } from "./applicaiton";
const adminRoutes = Router();

adminRoutes.use(adminMiddleware);

adminRoutes.get("/", (request: Request, response: Response) =>
  response.send("Admin Routes")
);
adminRoutes.use("/app", adminAppRoutes);

adminRoutes.get("/all-users", AdminController.getAllUsers);
adminRoutes.patch("/updatetoadmin", AdminController.updateUserRole);

export { adminRoutes };
