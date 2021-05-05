import { Request, Response, Router } from "express";
import { adminMiddleware } from "../../../middlewares/adminMiddleware";
import { adminAppRoutes } from "./application";
const adminRoutes = Router();

adminRoutes.use(adminMiddleware);

adminRoutes.get("/", (request: Request, response: Response) =>
  response.send("Admin Routes")
);
adminRoutes.use("/app", adminAppRoutes);

export { adminRoutes };
