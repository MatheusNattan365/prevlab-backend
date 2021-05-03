import { Document, Model, model, Schema } from "mongoose";

export interface ExamProps extends Document {
  pacient_id: string;
  collectDate: Date;
  avaliacaoDaAmostra?: string;
  celulaNaoEpiteliais?: string;
  descamacaoDominante?: string;
  alteracoesCelulares?: string;
  celulasMetaplasicas?: string;
  celulasEndocervicais?: string;
  celulasEndometriais?: string;
  floraVaginal?: string;
  citolise?: string;
  conclusao: string;
  observacoes?: string;
}

const ExamSchema = new Schema({
  pacient_id: { type: String },
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
