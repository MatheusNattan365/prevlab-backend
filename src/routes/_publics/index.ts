import { Router, Response, Request } from "express";
import { authRoutes } from "./authRoutes";
const publicRoutes = Router();

publicRoutes.use("/auth", authRoutes);

publicRoutes.get("/", (request: Request, response: Response): void => {
  response.send("Public Routes");
});

export { publicRoutes };
