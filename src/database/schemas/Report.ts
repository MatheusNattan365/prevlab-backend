import { Document, Model, model, Schema } from "mongoose";

export interface ReportProps extends Document {
  id: String;
  pacient_id: String;
  exam_id: String;
}

const ReportSchema = new Schema({
  id: {
    type: String,
  },
  pacient_id: {
    type: String,
  },
  exam_id: {
    type: String,
  },
});

export const Lab: Model<ReportProps> = model("Report", ReportSchema);
