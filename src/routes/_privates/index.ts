import { Router, Request, Response } from "express";
import { adminRoutes } from "./admin/adminRoutes";
import { appRoutes } from "./application/appRoutes";
import { decodeJwtMiddleware } from "../../middlewares/decodeJwtMiddleware";
const privateRoutes = Router();

privateRoutes.use(decodeJwtMiddleware);

privateRoutes.use("/admin", adminRoutes);
privateRoutes.use("/app", appRoutes);

privateRoutes.get("/", (request: Request, response: Response): void => {
  response.send("Private Routes");
});

export { privateRoutes };
