import { Document, Model, model, Schema } from "mongoose";

export interface ExamProps extends Document {
  id: String;
  pacient_id: String;
  collectDate: Date;
  avaliacaoDaAmostra?: String;
  celulaNaoEpiteliais?: String;
  descamacaoDominante?: String;
  alteracoesCelulares?: String;
  celulasMetaplasicas?: String;
  celulasEndocervicais?: String;
  celulasEndometriais?: String;
  floraVaginal?: String;
  citolise?: String;
  conclusao: String;
  observacoes?: String;
}

const ExamSchema = new Schema({
  id: { type: String },
  pacient_id: {
    type: String,
  },
  collectDate: {
    type: Date,
  },
  avaliacaoDaAmostra: {
    type: String,
  },
  celulaNaoEpiteliais: {
    type: String,
  },
  descamacaoDominante: {
    type: String,
  },
  alteracoesCelulares: {
    type: String,
  },
  celulasMetaplasicas: {
    type: String,
  },
  celulasEndocervicais: {
    type: String,
  },
  celulasEndometriais: {
    type: String,
  },
  floraVaginal: {
    type: String,
  },
  citolise: {
    type: String,
  },
  conclusao: {
    type: String,
  },
  observacoes: {
    type: String,
  },
});

export const Exam: Model<ExamProps> = model("Exam", ExamSchema);
