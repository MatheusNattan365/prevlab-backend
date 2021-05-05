import { Request, Response, Router } from "express";
import { UserAppController } from "../../controllers/userAppControllers/appController";

const userAppRoutes = Router();

userAppRoutes.get("/", (request: Request, response: Response) =>
  response.send("User application Routes" + request.query.id)
);

userAppRoutes.get("/alloweds", UserAppController.getAllowedPatients);
userAppRoutes.get("/exam", UserAppController.getExam);

export { userAppRoutes };
