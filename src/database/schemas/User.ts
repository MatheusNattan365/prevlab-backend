import { Document, Model, model, Schema } from "mongoose";

interface UserProps extends Document {
  name: string;
  email: string;
  isAdmin: boolean;
  convenios: string[];
}

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
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
});

const User: Model<UserProps> = model("User", UserSchema);

export { User };
