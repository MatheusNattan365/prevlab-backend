import { Request, Response } from "express";
import { Pacient } from "../../database/schemas/Pacients";
import { responseErr } from "../../helpers/responseHelper";

export const AdminAppPatientController = {
  getPatients: async (
    request: Request,
    response: Response
  ): Promise<Response> => {
    const allPatients = await Pacient.find();
    return response.json(allPatients);
  },
  getPatient: async (
    request: Request,
    response: Response
  ): Promise<Response> => {
    const { patient_id } = request.params;
    const patient = await Pacient.findOne({ _id: patient_id });
    return response.json(patient);
  },
  createPatient: async (
    request: Request,
    response: Response
  ): Promise<Response> => {
    const { fullName, solicitante } = request.body;
    if (!fullName || !solicitante) {
      return responseErr(response, "Required fields are missing!");
    }

    try {
      Pacient.create({ ...request.body }, (err: Error, done) => {
        if (err) {
          return responseErr(
            response,
            "Something goes wrong when the app tried to create a patient."
          );
        }
        return response.json({ msg: `Patient: ${fullName} was created!` });
      });
    } catch (error) {
      responseErr(response, "Something goes wrong with patientCreator" + error);
    }
  },
  updatePatient: async (
    request: Request,
    response: Response
  ): Promise<Response> => {
    const { patient_id } = request.params;
    if (!request.body) {
      return responseErr(response, "Required fields are missing!");
    }

    try {
      Pacient.findByIdAndUpdate(
        patient_id,
        { ...request.body },
        (err: Error, done) => {
          if (err) {
            return responseErr(
              response,
              "Something goes wrong when the app tried to update a Patient."
            );
          }
          return response.json({ msg: `The Patient was updated!` });
        }
      );
    } catch (error) {
      responseErr(response, "Something goes wrong with patientUpdate" + error);
    }
  },
  deletePatient: async (
    request: Request,
    response: Response
  ): Promise<void> => {
    const { patient_id } = request.params;
    try {
      Pacient.findByIdAndDelete(patient_id, {}, (err: Error, done) => {
        if (err) {
          return responseErr(
            response,
            "Something goes wrong when the app tried to delete a patient."
          );
        }
        return response.json({ msg: `The patient was deleted!` });
      });
    } catch (error) {
      responseErr(response, "Something goes wrong with patientUpdate" + error);
    }
  },
};
