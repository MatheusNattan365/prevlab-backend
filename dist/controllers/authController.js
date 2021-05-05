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
exports.AuthController = void 0;
const Labs_1 = require("../database/schemas/Labs");
const bcrypt_1 = require("../services/bcrypt");
const jwt_1 = require("../services/jwt");
const responseHelper_1 = require("../helpers/responseHelper");
class AuthController {
    static login(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = request.body;
            if (!email || !password) {
                return responseHelper_1.responseErr(response, "Campos obrigatórios");
            }
            const user = yield Labs_1.Lab.findOne({ email });
            const result = yield bcrypt_1.Bcrypt.commparePassword(password, user.password);
            if (!user || !result) {
                return responseHelper_1.responseErr(response, `Email ou senha errados!`);
            }
            try {
                const token = jwt_1.Jwt.succededLoginTokwt(user);
                response.cookie("userInfo", token, { httpOnly: true });
                return response.json({ msg: `User: ${email} logged in`, data: token });
            }
            catch (error) { }
        });
    }
    static adminLogin(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = request.body;
            if (!email || !password) {
                return responseHelper_1.responseErr(response, "Campos obrigatórios");
            }
            const user = yield Labs_1.Lab.findOne({ email });
            const result = yield bcrypt_1.Bcrypt.commparePassword(password, user.password);
            if (!user || !result) {
                return responseHelper_1.responseErr(response, `Email ou senha errados!`);
            }
            if (user.isAdmin === false) {
                return responseHelper_1.responseErr(response, `Você não possui permissão!`);
            }
            try {
                const token = jwt_1.Jwt.succededLoginTokwt(user);
                response.cookie("userInfo", token, { httpOnly: true });
                return response.json({ msg: `User: ${email} logged in`, data: token });
            }
            catch (error) { }
        });
    }
}
exports.AuthController = AuthController;
