import { Router } from "express";
import { publicRoutes } from "./_publics";
import { privateRoutes } from "./_privates";
import { loggerMiddleware } from "../middlewares/loggerMiddleware";
const routes = Router();

routes.use(loggerMiddleware); // All Routes

routes.use("/public", publicRoutes);
routes.use("/private", privateRoutes);

export { routes };
