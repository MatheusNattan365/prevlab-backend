import express from "express";
import { db } from "./database";
import { routes } from "./routes";
require("dotenv").config();
const app = express();

const PORT = process.env.NODE_ENV_PORT || 3000;
app.use(express.json());

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Database connected!"));
app.use(routes);

app.listen(PORT, () => console.log(`Server run on PORT: ${PORT}`));
