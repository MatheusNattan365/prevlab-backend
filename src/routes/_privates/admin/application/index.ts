import { Request, Response, Router } from "express";
import { laboratoriesRoutes } from "../application/laboratories";
import { patientsRoutes } from "../application/patients";
import { examsRoutes } from "../application/exams";
import { usersRoutes } from "../application/users";
const adminAppRoutes = Router();

adminAppRoutes.get("/", (request: Request, response: Response) =>
  response.send("Admin application Routes")
);

adminAppRoutes.use("/laboratories", laboratoriesRoutes);
adminAppRoutes.use("/patients", patientsRoutes);
adminAppRoutes.use("/exams", examsRoutes);
adminAppRoutes.use("/users", usersRoutes);

export { adminAppRoutes };
