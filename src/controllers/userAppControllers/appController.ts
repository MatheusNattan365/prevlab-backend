import { Request, Response, request } from "express";
import { Pacient } from "../../database/schemas/Pacients";
import { Exam } from "../../database/schemas/Exam";
import { responseErr } from "../../helpers/responseHelper";

export const UserAppController = {
  getAllowedPatients: async (
    request: Request,
    response: Response
  ): Promise<Response> => {
    const { convenio } = response.locals.user;

    if (!convenio) {
      return responseErr(response, "Convenio não selecionando");
    }
    try {
      const convenioPacients = await Pacient.find({ convenio });
      const allowedPacients = convenioPacients.filter(
        (el) => el.allowedDate !== null
      );
      return response.json(allowedPacients);
    } catch (error) {
      return responseErr(response, "Algo de errado com os pacientes liberados");
    }
  },
  getExam: async (request: Request, response: Response): Promise<Response> => {
    const { _id } = request.query;

    if (!_id) {
      return responseErr(response, "Convenio não selecionando");
    }
    try {
      const patientExam = await Exam.findOne({ patient_id: _id.toString() });
      if (!patientExam) {
        responseErr(response, "Nenhum exame cadastrado para esse paciente");
      }
      return response.json(patientExam);
    } catch (error) {
      return responseErr(response, "Algo de errado com os pacientes liberados");
    }
  },
};
