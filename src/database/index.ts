import mongoose from "mongoose";
require("dotenv").config();

const mongoUser = process.env.MONGO_USER ?? "";
const mongoPass = process.env.MONGO_PASS ?? "";
const rawUrl = process.env.MONGODB_URL ?? "";
const uri = rawUrl
  .replace(/<MONGO_USER>|MONGO_USER/g, encodeURIComponent(mongoUser))
  .replace(/<MONGO_PASS>|MONGO_PASS/g, encodeURIComponent(mongoPass));
if (!rawUrl || !mongoUser || !mongoPass) {
  throw new Error(
    "MongoDB config missing: set MONGODB_URL, MONGO_USER and MONGO_PASS in environment"
  );
}
mongoose.connect(uri, {
  dbName: process.env.DB_NAME,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

export { db };
