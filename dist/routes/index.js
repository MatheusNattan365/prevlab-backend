"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const _publics_1 = require("./_publics");
const _privates_1 = require("./_privates");
const loggerMiddleware_1 = require("../middlewares/loggerMiddleware");
const routes = express_1.Router();
exports.routes = routes;
routes.use(loggerMiddleware_1.loggerMiddleware); // All Routes
routes.use("/public", _publics_1.publicRoutes);
routes.use("/private", _privates_1.privateRoutes);
