import { randomBytes } from "crypto";
import { Request, Response } from "express";
import { Pacient } from "../../database/schemas/Pacients";
import { responseErr } from "../../helpers/responseHelper";

export const AdminAppPatientController = {
  getPatients: async (
    request: Request,
    response: Response
  ): Promise<Response> => {
    const page = Math.max(1, parseInt(request.query.page as string) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(request.query.limit as string) || 30));
    const search = (request.query.search as string)?.trim();
    const sortBy = (request.query.sortBy as string) || "updatedAt";
    const sortOrder = (request.query.sortOrder as string) === "asc" ? 1 : -1;

    const query: Record<string, unknown> = {};
    if (search) {
      query.$or = [
        { fullName: { $regex: search, $options: "i" } },
        { solicitante: { $regex: search, $options: "i" } },
        { convenio: { $regex: search, $options: "i" } },
      ];
    }

    const sortObj: Record<string, 1 | -1> = { [sortBy]: sortOrder };

    const [patients, totalCount] = await Promise.all([
      Pacient.find(query).sort(sortObj).skip((page - 1) * limit).limit(limit).lean(),
      Pacient.countDocuments(query),
    ]);

    const totalPages = Math.ceil(totalCount / limit) || 1;

    return response.json({
      data: patients,
      pagination: {
        page,
        limit,
        totalCount,
        totalPages,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
    });
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

    console.log("[Cadastro Paciente] Início da requisição", {
      fullName: fullName ?? "(não informado)",
      solicitante: solicitante ?? "(não informado)",
    });

    if (!fullName || !solicitante) {
      console.warn("[Cadastro Paciente] Campos obrigatórios ausentes", {
        fullName: !!fullName,
        solicitante: !!solicitante,
      });
      return responseErr(response, "Required fields are missing!");
    }

    try {
      const publicToken = randomBytes(16).toString("hex");
      const patientData = { ...request.body, publicToken };
      Pacient.create(patientData, (err: Error, done) => {
        if (err) {
          console.error("[Cadastro Paciente] Erro ao criar paciente", {
            fullName,
            solicitante,
            error: err.message,
          });
          return responseErr(
            response,
            "Something goes wrong when the app tried to create a patient."
          );
        }
        const patientId = done?._id?.toString?.() ?? "(id não disponível)";
        console.log("[Cadastro Paciente] Paciente criado com sucesso", {
          patientId,
          publicToken,
          fullName,
          solicitante,
        });
        return response.json({ msg: `Patient: ${fullName} was created!` });
      });
    } catch (error) {
      console.error("[Cadastro Paciente] Exceção ao criar paciente", {
        fullName,
        solicitante,
        error: error instanceof Error ? error.message : String(error),
      });
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
