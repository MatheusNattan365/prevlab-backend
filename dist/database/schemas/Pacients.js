"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pacient = void 0;
const mongoose_1 = require("mongoose");
const PacientSchema = new mongoose_1.Schema({
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
exports.Pacient = mongoose_1.model("Pacient", PacientSchema);
