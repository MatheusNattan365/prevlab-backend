import { Router } from "express";
import { AdminAppPatientController } from "../../../../../controllers/adminAppControllers/patientController";
const patientsRoutes = Router();

patientsRoutes.get("/all", AdminAppPatientController.getPatients);
patientsRoutes.get("/all/:patient_id", AdminAppPatientController.getPatient);
patientsRoutes.post("/newpatient", AdminAppPatientController.createPatient);
patientsRoutes.post("/allowblack", AdminAppPatientController.updatePatient);
patientsRoutes.put(
  "/:patient_id/updatepatient",
  AdminAppPatientController.updatePatient
);
patientsRoutes.delete(
  "/:patient_id/deletepatient",
  AdminAppPatientController.deletePatient
);

export { patientsRoutes };
