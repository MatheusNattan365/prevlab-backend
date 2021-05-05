"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const database_1 = require("./database");
const routes_1 = require("./routes");
const dotenv_1 = require("dotenv");
const app = express_1.default();
const PORT = process.env.PORT || 3333;
database_1.db.on("error", console.error.bind(console, "connection error:"));
database_1.db.once("open", () => console.log("Database connected!"));
(function expressConfig() {
    dotenv_1.config();
    app.use(cookie_parser_1.default());
    app.use(cors_1.default());
    app.use(express_1.default.json());
    app.use(body_parser_1.default.urlencoded({ extended: false }));
    app.use(body_parser_1.default.json());
    app.use("/api", routes_1.routes);
})();
app.listen(PORT, () => console.log(`Server run on PORT: ${PORT}`));
