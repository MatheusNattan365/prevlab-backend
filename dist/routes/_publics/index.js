"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicRoutes = void 0;
const express_1 = require("express");
const authRoutes_1 = require("./authRoutes");
const appRoutes_1 = require("./appRoutes");
const userIsLoggedInMiddleware_1 = require("../../middlewares/userIsLoggedInMiddleware");
const publicRoutes = express_1.Router();
exports.publicRoutes = publicRoutes;
publicRoutes.use("/auth", authRoutes_1.authRoutes);
publicRoutes.use(userIsLoggedInMiddleware_1.userIsLoggedInMiddleware);
publicRoutes.use("/app", appRoutes_1.userAppRoutes);
publicRoutes.get("/", (request, response) => {
    response.send("Public Routes");
});
