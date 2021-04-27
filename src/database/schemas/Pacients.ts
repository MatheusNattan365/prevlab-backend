import { Document, Model, model, Schema } from "mongoose";

export interface PacientProps extends Document {
  id: String;
  fullName?: String;
  age?: Number;
  birthDate?: Date;
  solicitante: String;
  convenios?: String[];
}

const PacientSchema = new Schema({
  id: {
    type: String,
  },
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
