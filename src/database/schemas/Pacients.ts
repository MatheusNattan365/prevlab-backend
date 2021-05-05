import { Document, Model, model, Schema } from "mongoose";

export interface PacientProps extends Document {
  fullName: string;
  age?: number;
  bornDate?: Date;
  solicitante: string;
  allowedDate?: Date;
  convenios?: string[];
}

const PacientSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  bornDate: {
    type: Date,
  },
  solicitante: {
    type: String,
    required: true,
  },

  allowedDate: {
    type: Date,
  },
  convenio: {
    type: [String],
  },
});

export const Pacient: Model<PacientProps> = model("Pacient", PacientSchema);
