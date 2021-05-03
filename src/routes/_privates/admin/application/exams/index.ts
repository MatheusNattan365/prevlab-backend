import { Router } from "express";
import { AdminAppExamController } from "../../../../../controllers/adminAppControllers/examController";
const examsRoutes = Router();

examsRoutes.get("/all", AdminAppExamController.getExams);
examsRoutes.get("/all/:exam_id", AdminAppExamController.getExam);
examsRoutes.post("/newexam", AdminAppExamController.createExam);
examsRoutes.put("/:exam_id/updateexam", AdminAppExamController.updateExam);
examsRoutes.delete("/:exam_id/deleteexam", AdminAppExamController.deleteExam);

export { examsRoutes };
