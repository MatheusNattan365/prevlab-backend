import { Document, Model, model, Schema } from "mongoose";

export interface ExamProps extends Document {
  patient_id: string;
  collectDate: Date;
  avaliacaoDaAmostra?: string;
  celulaNaoEpiteliais?: string;
  descamacaoDominante?: string;
  alteracoesCelulares?: string;
  celulasMetaplasicas?: string;
  celulasEndocervicais?: string;
  celulasEndometriais?: string;
  floraVaginal?: string;
  agentesEspecificos?: string;
  citolise?: string;
  conclusao: string;
  observacoes?: string;
}

const ExamSchema = new Schema({
  patient_id: { type: String },
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
  agentesEspecificos: {
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
