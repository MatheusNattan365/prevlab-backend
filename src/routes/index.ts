import { Router } from "express";
import { usersRoutes } from "./usersRoutes";
import { loggerMiddleware } from "../middlewares/loggerMiddleware";
const routes = Router();

routes.use(loggerMiddleware); // All Routes

routes.use("/users", usersRoutes);

export { routes };
