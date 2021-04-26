import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { db } from "./database";
import { routes } from "./routes";
// require("dotenv").config();
import { config as dotenvConfig } from "dotenv";
const app = express();
const PORT = process.env.NODE_ENV_PORT || 3000;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Database connected!"));

(function expressConfig() {
  dotenvConfig();
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(cors());
  app.use("/api", routes);
})();

app.listen(PORT, () => console.log(`Server run on PORT: ${PORT}`));
