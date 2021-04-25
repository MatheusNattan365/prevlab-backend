import { Router, Request, Response } from "express";
import { adminRoutes } from "./admin/adminRoutes";
import { appRoutes } from "./application/appRoutes";

const privateRoutes = Router();

privateRoutes.use("/admin", adminRoutes);
privateRoutes.use("/app", appRoutes);

privateRoutes.get("/", (request: Request, response: Response): void => {
  response.send("Private Routes");
});

export { privateRoutes };
