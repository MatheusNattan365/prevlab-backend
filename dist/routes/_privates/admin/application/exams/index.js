"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.examsRoutes = void 0;
const express_1 = require("express");
const examController_1 = require("../../../../../controllers/adminAppControllers/examController");
const examsRoutes = express_1.Router();
exports.examsRoutes = examsRoutes;
examsRoutes.get("/all", examController_1.AdminAppExamController.getExams);
examsRoutes.get("/all/:exam_id", examController_1.AdminAppExamController.getExam);
examsRoutes.post("/newexam", examController_1.AdminAppExamController.createExam);
examsRoutes.put("/:exam_id/updateexam", examController_1.AdminAppExamController.updateExam);
examsRoutes.delete("/:exam_id/deleteexam", examController_1.AdminAppExamController.deleteExam);
