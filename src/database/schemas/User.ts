import { Document, Model, model, Schema } from "mongoose";

export interface UserProps extends Document {
  name?: String;
  email: String;
  password: String;
  isAdmin?: Boolean;
  convenios?: String[];
  allowedDate?: Date;
}

const UserSchema = new Schema({
  name: {
    type: String,
    default: "User",
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  convenios: {
    type: [String],
  },
  allowedDate: {
    type: Date,
  },
});

export const User: Model<UserProps> = model("User", UserSchema);
