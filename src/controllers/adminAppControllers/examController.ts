import { Request, Response } from "express";
import { Exam } from "../../database/schemas/Exam";

export const AdminAppExamController = {
  getExams: async (request: Request, response: Response): Promise<Response> => {
    const allExams = await Exam.find();
    return response.json(allExams);
  },
  getExam: async (request: Request, response: Response): Promise<Response> => {
    const { exam_id } = request.params;
    const exam = await Exam.findById(exam_id);
    return response.json(exam);
  },
  createExam: async (
    request: Request,
    response: Response
  ): Promise<Response> => {
    const { pacient_id, collectDate, conclusao } = request.body;
    if (!pacient_id || !collectDate || !conclusao) {
      return response.send("Required fields are missing!");
    }

    try {
      Exam.create({ ...request.body }, (err: Error, done) => {
        if (err) {
          return response.json({
            msg: "Something goes wrong when the app tried to create a exam.",
          });
        }
        return response.json({ msg: `An Exam was created!` });
      });
    } catch (error) {
      console.log("Something goes wrong with examCreator" + error);
    }
  },
  updateExam: async (
    request: Request,
    response: Response
  ): Promise<Response> => {
    const { exam_id } = request.params;
    if (!request.body) {
      return response.send("Required fields are missing!");
    }

    try {
      Exam.findByIdAndUpdate(
        exam_id,
        { ...request.body },
        (err: Error, done) => {
          if (err) {
            return response.json({
              msg: "Something goes wrong when the app tried to update a Exam.",
            });
          }
          return response.json({ msg: `The Exam was updated!` });
        }
      );
    } catch (error) {
      console.log("Something goes wrong with ExamUpdate" + error);
    }
  },
  deleteExam: async (request: Request, response: Response): Promise<void> => {
    const { exam_id } = request.params;
    try {
      Exam.findByIdAndDelete(exam_id, {}, (err: Error, done) => {
        if (err) {
          return response.json({
            msg: "Something goes wrong when the app tried to delete a exam.",
          });
        }
        return response.json({ msg: `The exam was deleted!` });
      });
    } catch (error) {
      console.log("Something goes wrong with examDeleter" + error);
    }
  },
};
