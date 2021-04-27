import { Document, Model, model, Schema } from "mongoose";

export interface LabProps extends Document {
  id: String;
  pacient_id: String;
  exam_id: String;
  solicitante: String;
  allowed: Boolean;
}

const LabSchema = new Schema({
  id: {
    type: String,
  },
  pacient_id: {
    type: String,
  },
  exam_id: {
    type: String,
  },
  solicitante: {
    type: String,
  },
  allowed: {
    type: String,
    default: false,
  },
});

export const Lab: Model<LabProps> = model("Lab", LabSchema);
