"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAppExamController = void 0;
const Exam_1 = require("../../database/schemas/Exam");
const responseHelper_1 = require("../../helpers/responseHelper");
exports.AdminAppExamController = {
    getExams: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const allExams = yield Exam_1.Exam.find();
        return response.json(allExams);
    }),
    getExam: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const { exam_id } = request.params;
        const exam = yield Exam_1.Exam.findOne({ patient_id: exam_id });
        return response.json(exam);
    }),
    createExam: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const { patient_id, collectDate, conclusao } = request.body;
        if (!patient_id || !collectDate || !conclusao) {
            return responseHelper_1.responseErr(response, "Required fields are missing!");
        }
        try {
            Exam_1.Exam.create(Object.assign({}, request.body), (err, done) => {
                if (err) {
                    return responseHelper_1.responseErr(response, "Something goes wrong when the app tried to create a exam.");
                }
                return response.json({ msg: `An Exam was created!` });
            });
        }
        catch (error) {
            responseHelper_1.responseErr(response, "Something goes wrong with examCreator" + error);
        }
    }),
    updateExam: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const { exam_id } = request.params;
        console.log(exam_id);
        if (!request.body) {
            return responseHelper_1.responseErr(response, "Required fields are missing!");
        }
        try {
            Exam_1.Exam.findByIdAndUpdate(exam_id, Object.assign({}, request.body), (err, done) => {
                if (err) {
                    return responseHelper_1.responseErr(response, "Something goes wrong when the app tried to update a Exam.");
                }
                return response.json({ msg: `The Exam was updated!` });
            });
        }
        catch (error) {
            responseHelper_1.responseErr(response, "Something goes wrong with ExamUpdate" + error);
        }
    }),
    deleteExam: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const { exam_id } = request.params;
        try {
            Exam_1.Exam.findByIdAndDelete(exam_id, {}, (err, done) => {
                if (err) {
                    return responseHelper_1.responseErr(response, "Something goes wrong when the app tried to delete a exam.");
                }
                return response.json({ msg: `The exam was deleted!` });
            });
        }
        catch (error) {
            responseHelper_1.responseErr(response, "Something goes wrong with examDeleter" + error);
        }
    }),
};
