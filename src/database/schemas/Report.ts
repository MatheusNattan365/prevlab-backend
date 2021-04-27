import { Document, Model, model, Schema } from "mongoose";

export interface ReportProps extends Document {
  pacient_id: string;
  exam_id: string;
}

const ReportSchema = new Schema({
  pacient_id: {
    type: String,
  },
  exam_id: {
    type: String,
  },
});

export const Lab: Model<ReportProps> = model("Report", ReportSchema);
