import { Request, Response } from "express";
import { Lab } from "../../database/schemas/Labs";

export const AdminAppLabController = {
  getLabs: async (request: Request, response: Response): Promise<Response> => {
    const allLabs = await Lab.find();
    return response.json(allLabs);
  },
  createLab: async (
    request: Request,
    response: Response
  ): Promise<Response> => {
    const { name, cnpj, phone } = request.body;
    if (!name || !cnpj) {
      return response.send("Required fields are missing!");
    }

    try {
      Lab.create({ ...request.body }, (err: Error, done) => {
        if (err) {
          return response.json({
            msg:
              "Something goes wrong when the app tried to create a new user.",
          });
        }
        return response.json({ msg: `Lab: ${name} was created!` });
      });
    } catch (error) {
      console.log("Something goes wrong with labCreator" + error);
    }
  },
  updateLab: async (
    request: Request,
    response: Response
  ): Promise<Response> => {
    const { name, cnpj, phone } = request.body;
    const { lab_id } = request.params;
    console.log(lab_id);
    if (!name && !cnpj) {
      return response.send("Required fields are missing!");
    }

    try {
      Lab.findByIdAndUpdate(lab_id, { ...request.body }, (err: Error, done) => {
        if (err) {
          return response.json({
            msg: "Something goes wrong when the app tried to update a lab.",
          });
        }
        return response.json({ msg: `The lab was updated!` });
      });
    } catch (error) {
      console.log("Something goes wrong with labUpdate" + error);
    }
  },
  deleteLab: async (request: Request, response: Response): Promise<void> => {
    const { lab_id } = request.params;
    try {
      Lab.findByIdAndDelete(lab_id, {}, (err: Error, done) => {
        if (err) {
          return response.json({
            msg: "Something goes wrong when the app tried to delete a lab.",
          });
        }
        return response.json({ msg: `The lab was deleted!` });
      });
    } catch (error) {
      console.log("Something goes wrong with labUpdate" + error);
    }
  },
};
