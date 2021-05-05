"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminMiddleware = void 0;
const jwt_1 = require("../services/jwt");
const responseHelper_1 = require("../helpers/responseHelper");
const adminMiddleware = (request, response, next) => {
    const { authorization } = request.headers;
    if (!authorization) {
        return responseHelper_1.middlewareResponseErr(response, "Your do not have permission!");
    }
    const decoded = jwt_1.Jwt.chechekJWT(authorization);
    if (!decoded[`_doc`].isAdmin) {
        return responseHelper_1.middlewareResponseErr(response, "Your do not have permission!");
    }
    next();
};
exports.adminMiddleware = adminMiddleware;
