import { Request, Response, Router } from "express";
const appRoutes = Router();

appRoutes.get("/", (request: Request, response: Response): void => {
  response.send("App Route");
});
export { appRoutes };
