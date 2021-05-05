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
exports.UserAppController = void 0;
const Pacients_1 = require("../../database/schemas/Pacients");
const Exam_1 = require("../../database/schemas/Exam");
const responseHelper_1 = require("../../helpers/responseHelper");
exports.UserAppController = {
    getAllowedPatients: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const { convenio } = response.locals.user;
        if (!convenio) {
            return responseHelper_1.responseErr(response, "Convenio não selecionando");
        }
        try {
            const convenioPacients = yield Pacients_1.Pacient.find({ convenio });
            const allowedPacients = convenioPacients.filter((el) => el.allowedDate !== null);
            return response.json(allowedPacients);
        }
        catch (error) {
            return responseHelper_1.responseErr(response, "Algo de errado com os pacientes liberados");
        }
    }),
    getExam: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const { _id } = request.query;
        if (!_id) {
            return responseHelper_1.responseErr(response, "Convenio não selecionando");
        }
        try {
            const patientExam = yield Exam_1.Exam.findOne({ patient_id: _id.toString() });
            if (!patientExam) {
                responseHelper_1.responseErr(response, "Nenhum exame cadastrado para esse paciente");
            }
            return response.json(patientExam);
        }
        catch (error) {
            return responseHelper_1.responseErr(response, "Algo de errado com os pacientes liberados");
        }
    }),
};
