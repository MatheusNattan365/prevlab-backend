"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userIsLoggedInMiddleware = void 0;
const jwt_1 = require("../services/jwt");
const responseHelper_1 = require("../helpers/responseHelper");
const userIsLoggedInMiddleware = (request, response, next) => {
    const { authorization } = request.headers;
    if (!authorization) {
        return responseHelper_1.middlewareResponseErr(response, "Your section expires, please relogin!");
    }
    const decoded = jwt_1.Jwt.chechekJWT(authorization);
    if (!decoded[`_doc`].email) {
        return responseHelper_1.middlewareResponseErr(response, "Your section expires, please relogin!");
    }
    response.locals.user = decoded[`_doc`];
    next();
};
exports.userIsLoggedInMiddleware = userIsLoggedInMiddleware;
