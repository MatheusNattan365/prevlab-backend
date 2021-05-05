"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerMiddleware = void 0;
const loggerMiddleware = (request, response, next) => {
    console.log(`${request.method} ${request.path}`);
    next();
};
exports.loggerMiddleware = loggerMiddleware;
