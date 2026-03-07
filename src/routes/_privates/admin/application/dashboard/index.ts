import { Router } from "express";
import { AdminAppDashboardController } from "../../../../../controllers/adminAppControllers/dashboardController";

const dashboardRoutes = Router();

dashboardRoutes.get("/stats", AdminAppDashboardController.getStats);

export { dashboardRoutes };
