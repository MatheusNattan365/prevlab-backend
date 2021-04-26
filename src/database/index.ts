import mongoose from "mongoose";
require("dotenv").config();
mongoose.connect(process.env.NODE_ENV_MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

export { db };
