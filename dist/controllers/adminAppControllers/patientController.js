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
exports.AdminAppPatientController = void 0;
const Pacients_1 = require("../../database/schemas/Pacients");
const responseHelper_1 = require("../../helpers/responseHelper");
exports.AdminAppPatientController = {
    getPatients: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const allPatients = yield Pacients_1.Pacient.find();
        return response.json(allPatients);
    }),
    getPatient: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const { patient_id } = request.params;
        const patient = yield Pacients_1.Pacient.findOne({ _id: patient_id });
        return response.json(patient);
    }),
    createPatient: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const { fullName, solicitante } = request.body;
        if (!fullName || !solicitante) {
            return responseHelper_1.responseErr(response, "Required fields are missing!");
        }
        try {
            Pacients_1.Pacient.create(Object.assign({}, request.body), (err, done) => {
                if (err) {
                    return responseHelper_1.responseErr(response, "Something goes wrong when the app tried to create a patient.");
                }
                return response.json({ msg: `Patient: ${fullName} was created!` });
            });
        }
        catch (error) {
            responseHelper_1.responseErr(response, "Something goes wrong with patientCreator" + error);
        }
    }),
    updatePatient: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const { patient_id } = request.params;
        if (!request.body) {
            return responseHelper_1.responseErr(response, "Required fields are missing!");
        }
        try {
            Pacients_1.Pacient.findByIdAndUpdate(patient_id, Object.assign({}, request.body), (err, done) => {
                if (err) {
                    return responseHelper_1.responseErr(response, "Something goes wrong when the app tried to update a Patient.");
                }
                return response.json({ msg: `The Patient was updated!` });
            });
        }
        catch (error) {
            responseHelper_1.responseErr(response, "Something goes wrong with patientUpdate" + error);
        }
    }),
    deletePatient: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const { patient_id } = request.params;
        try {
            Pacients_1.Pacient.findByIdAndDelete(patient_id, {}, (err, done) => {
                if (err) {
                    return responseHelper_1.responseErr(response, "Something goes wrong when the app tried to delete a patient.");
                }
                return response.json({ msg: `The patient was deleted!` });
            });
        }
        catch (error) {
            responseHelper_1.responseErr(response, "Something goes wrong with patientUpdate" + error);
        }
    }),
};
