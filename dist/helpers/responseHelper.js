"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middlewareResponseErr = exports.responseErr = void 0;
const responseErr = (response, msg) => {
    return response.json({
        error: 1,
        msg,
    });
};
exports.responseErr = responseErr;
const middlewareResponseErr = (response, msg) => {
    return response.json({
        error: 2,
        msg,
    });
};
exports.middlewareResponseErr = middlewareResponseErr;
