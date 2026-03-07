import { Request, Response, Router } from "express";
import { dashboardRoutes } from "../application/dashboard";
import { laboratoriesRoutes } from "../application/laboratories";
import { patientsRoutes } from "../application/patients";
import { examsRoutes } from "../application/exams";
import { usersRoutes } from "../application/users";
const adminAppRoutes = Router();

adminAppRoutes.get("/", (request: Request, response: Response) =>
  response.send("Admin application Routes")
);

adminAppRoutes.use("/dashboard", dashboardRoutes);
adminAppRoutes.use("/laboratories", laboratoriesRoutes);
adminAppRoutes.use("/patients", patientsRoutes);
adminAppRoutes.use("/exams", examsRoutes);
adminAppRoutes.use("/users", usersRoutes);

export { adminAppRoutes };
