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
exports.AdminAppLabController = void 0;
const Labs_1 = require("../../database/schemas/Labs");
const responseHelper_1 = require("../../helpers/responseHelper");
const bcrypt_1 = require("../../services/bcrypt");
exports.AdminAppLabController = {
    getLabs: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const allLabs = yield Labs_1.Lab.find();
        return response.json(allLabs);
    }),
    getLab: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const { lab_id } = request.params;
        const lab = yield Labs_1.Lab.findById(lab_id);
        return response.json(lab);
    }),
    createLab: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const { email, password } = request.body;
        if (!email || !password) {
            return responseHelper_1.responseErr(response, "Required fields are missing!");
        }
        const emailAlreadyExists = yield Labs_1.Lab.findOne({ email });
        if (emailAlreadyExists) {
            return responseHelper_1.responseErr(response, "The email already exits in our database!");
        }
        request.body.password = yield bcrypt_1.Bcrypt.hashPassword(password);
        try {
            Labs_1.Lab.create(Object.assign({}, request.body), (err, done) => {
                if (err) {
                    return responseHelper_1.responseErr(response, "Something goes wrong when the app tried to create a new user.");
                }
                return response.json({ msg: `Lab: ${email} was created!` });
            });
        }
        catch (error) {
            responseHelper_1.responseErr(response, "Something goes wrong with labCreator" + error);
        }
    }),
    updateLab: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const { lab_id } = request.params;
        if (!lab_id) {
            return responseHelper_1.responseErr(response, "Required params ar missing");
        }
        try {
            Labs_1.Lab.findByIdAndUpdate(lab_id, Object.assign({}, request.body), (err, done) => {
                if (err) {
                    return responseHelper_1.responseErr(response, "Something goes wrong when the app tried to update a lab.");
                }
                return response.json({ msg: `The lab was updated!` });
            });
        }
        catch (error) {
            responseHelper_1.responseErr(response, "Something goes wrong with labUpdate" + error);
        }
    }),
    deleteLab: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const { lab_id } = request.params;
        try {
            Labs_1.Lab.findByIdAndDelete(lab_id, {}, (err, done) => {
                if (err) {
                    return responseHelper_1.responseErr(response, "Something goes wrong when the app tried to delete a lab.");
                }
                return response.json({ msg: `The lab was deleted!` });
            });
        }
        catch (error) {
            responseHelper_1.responseErr(response, "Something goes wrong with labUpdate" + error);
        }
    }),
};
