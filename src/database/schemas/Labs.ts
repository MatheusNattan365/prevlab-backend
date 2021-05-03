import { Document, Model, model, Schema } from "mongoose";

export interface LabProps extends Document {
  name: string;
  cnpj?: string;
  phone?: string;
}

const LabSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  cnpj: {
    type: String,
  },
  phone: {
    type: String,
  },
});

export const Lab: Model<LabProps> = model("Lab", LabSchema);
