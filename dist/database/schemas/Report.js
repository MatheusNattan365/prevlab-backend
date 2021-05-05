"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lab = void 0;
const mongoose_1 = require("mongoose");
const ReportSchema = new mongoose_1.Schema({
    pacient_id: {
        type: String,
    },
    exam_id: {
        type: String,
    },
});
exports.Lab = mongoose_1.model("Report", ReportSchema);
