"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Jwt {
    static succededLoginTokwt(obj) {
        return jsonwebtoken_1.default.sign(Object.assign({}, obj), process.env.NODE_ENV_JWT_PRIVATE_KEY, {
            expiresIn: "24h",
        });
    }
    static chechekJWT(token) {
        const decode = jsonwebtoken_1.default.verify(token, process.env.NODE_ENV_JWT_PRIVATE_KEY);
        return decode;
    }
}
exports.Jwt = Jwt;
