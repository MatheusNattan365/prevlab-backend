import mongoose from "mongoose";
require("dotenv").config();

const uri = process.env.MONGODB_URL
  .replace("<MONGO_USER>", process.env.MONGO_USER)
  .replace("<MONGO_PASS>", process.env.MONGO_PASS);
if (!uri) {
  throw new Error("MONGODB_URL is not defined in .env");
}
mongoose.connect(uri, {
  dbName: process.env.DB_NAME,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

export { db };
