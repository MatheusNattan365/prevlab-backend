import { Request, Response, Router } from "express";
import { AdminAppController } from "../../../../controllers/adminAppController";
const adminAppRoutes = Router();

adminAppRoutes.get("/", (request: Request, response: Response) =>
  response.send("Admin application Routes")
);
adminAppRoutes.get("/labs", AdminAppController.AdminAppLabController.getLabs);
adminAppRoutes.post(
  "/newlab",
  AdminAppController.AdminAppLabController.createLab
);
adminAppRoutes.put(
  "/:lab_id/updatelab",
  AdminAppController.AdminAppLabController.updateLab
);
adminAppRoutes.delete(
  "/:lab_id/deletelab",
  AdminAppController.AdminAppLabController.deleteLab
);

export { adminAppRoutes };
