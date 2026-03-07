import mongoose from "mongoose";
require("dotenv").config();

const mongoUrl = process.env.MONGODB_URL ?? "";

mongoose.connect(mongoUrl, {
  dbName: process.env.DB_NAME,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

export { db };
