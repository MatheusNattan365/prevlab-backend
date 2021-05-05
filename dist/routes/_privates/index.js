"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.privateRoutes = void 0;
const express_1 = require("express");
const adminRoutes_1 = require("./admin/adminRoutes");
const appRoutes_1 = require("./application/appRoutes");
const userIsLoggedInMiddleware_1 = require("../../middlewares/userIsLoggedInMiddleware");
const privateRoutes = express_1.Router();
exports.privateRoutes = privateRoutes;
privateRoutes.use(userIsLoggedInMiddleware_1.userIsLoggedInMiddleware);
privateRoutes.use("/admin", adminRoutes_1.adminRoutes);
privateRoutes.use("/app", appRoutes_1.appRoutes);
privateRoutes.get("/", (request, response) => {
    response.send("Private Routes");
});
