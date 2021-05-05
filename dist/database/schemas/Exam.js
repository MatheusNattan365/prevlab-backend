"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exam = void 0;
const mongoose_1 = require("mongoose");
const ExamSchema = new mongoose_1.Schema({
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
exports.Exam = mongoose_1.model("Exam", ExamSchema);
