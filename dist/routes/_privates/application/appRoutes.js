"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = void 0;
const express_1 = require("express");
const appRoutes = express_1.Router();
exports.appRoutes = appRoutes;
appRoutes.get("/", (request, response) => {
    response.send("App Route");
});
