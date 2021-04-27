import { Document, Model, model, Schema } from "mongoose";

export interface PacientProps extends Document {
  fullName?: string;
  age?: number;
  birthDate?: Date;
  solicitante: string;
  convenios?: string[];
}

const PacientSchema = new Schema({
  fullName: {
    type: String,
    default: "User",
  },
  age: {
    type: Number,
  },
  birthDate: {
    type: Date,
  },
  solicitante: {
    type: String,
    required: true,
  },
  convenios: {
    type: [String],
  },
});

export const Pacient: Model<PacientProps> = model("Pacient", PacientSchema);
