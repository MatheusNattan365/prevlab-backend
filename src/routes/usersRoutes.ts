import { Router } from "express";
import { User } from "../database/schemas/User";
import { UserController } from "../controllers/userController";
const usersRoutes = Router();

usersRoutes.get("/all", UserController.getAllUsers);
usersRoutes.post("/newuser", UserController.postNewUser);

export { usersRoutes };
