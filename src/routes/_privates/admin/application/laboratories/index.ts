import { Router } from "express";
import { AdminAppLabController } from "../../../../../controllers/adminAppControllers/labController";
const laboratoriesRoutes = Router();
laboratoriesRoutes.get("/labs", AdminAppLabController.getLabs);
laboratoriesRoutes.get("/labs/:lab_id", AdminAppLabController.getLab);
laboratoriesRoutes.post("/newlab", AdminAppLabController.createLab);
laboratoriesRoutes.put("/:lab_id/updatelab", AdminAppLabController.updateLab);
laboratoriesRoutes.delete(
  "/:lab_id/deletelab",
  AdminAppLabController.deleteLab
);

export { laboratoriesRoutes };
