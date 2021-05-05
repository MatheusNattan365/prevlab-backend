import { Document, Model, model, Schema } from "mongoose";

export interface LabProps extends Document {
  email: string;
  password?: string;
  cnpj?: string;
  phone?: string;
  isAdmin?: boolean;
  convenios?: string;
}

const LabSchema = new Schema({
  cnpj: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    default: "12345678",
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  convenio: {
    type: String,
  },
});

export const Lab: Model<LabProps> = model("Lab", LabSchema);
