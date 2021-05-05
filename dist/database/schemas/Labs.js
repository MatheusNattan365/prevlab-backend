"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lab = void 0;
const mongoose_1 = require("mongoose");
const LabSchema = new mongoose_1.Schema({
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
exports.Lab = mongoose_1.model("Lab", LabSchema);
