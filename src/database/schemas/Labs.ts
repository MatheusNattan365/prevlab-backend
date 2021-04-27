import { Document, Model, model, Schema } from "mongoose";

export interface LabProps extends Document {
  name: String;
}

const LabSchema = new Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
    default: "User",
  },
});

export const Lab: Model<LabProps> = model("Lab", LabSchema);
