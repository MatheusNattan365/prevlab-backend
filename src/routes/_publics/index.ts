import { Router, Response, Request } from "express";
import { authRoutes } from "./authRoutes";
import { userAppRoutes } from "./appRoutes";
import { userIsLoggedInMiddleware } from "../../middlewares/userIsLoggedInMiddleware";
const publicRoutes = Router();
publicRoutes.use("/auth", authRoutes);

publicRoutes.use(userIsLoggedInMiddleware);
publicRoutes.use("/app", userAppRoutes);

publicRoutes.get("/", (request: Request, response: Response): void => {
  response.send("Public Routes");
});

export { publicRoutes };
