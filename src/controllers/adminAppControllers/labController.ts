import { Request, Response } from "express";
import { Lab } from "../../database/schemas/Labs";
import { responseErr } from "../../helpers/responseHelper";
import { Bcrypt } from "../../services/bcrypt";
export const AdminAppLabController = {
  getLabs: async (request: Request, response: Response): Promise<Response> => {
    const allLabs = await Lab.find();
    return response.json(allLabs);
  },
  getLab: async (request: Request, response: Response): Promise<Response> => {
    const { lab_id } = request.params;
    const lab = await Lab.findById(lab_id);
    return response.json(lab);
  },
  createLab: async (
    request: Request,
    response: Response
  ): Promise<Response> => {
    const { email, password } = request.body;
    if (!email || !password) {
      return responseErr(response, "Required fields are missing!");
    }
    const emailAlreadyExists = await Lab.findOne({ email });
    if (emailAlreadyExists) {
      return responseErr(response, "The email already exits in our database!");
    }
    request.body.password = await Bcrypt.hashPassword(password);
    try {
      Lab.create({ ...request.body }, (err: Error, done) => {
        if (err) {
          return responseErr(
            response,
            "Something goes wrong when the app tried to create a new user."
          );
        }
        return response.json({ msg: `Lab: ${email} was created!` });
      });
    } catch (error) {
      responseErr(response, "Something goes wrong with labCreator" + error);
    }
  },
  updateLab: async (
    request: Request,
    response: Response
  ): Promise<Response> => {
    const { lab_id } = request.params;
    if (!lab_id) {
      return responseErr(response, "Required params ar missing");
    }
    try {
      Lab.findByIdAndUpdate(lab_id, { ...request.body }, (err: Error, done) => {
        if (err) {
          return responseErr(
            response,
            "Something goes wrong when the app tried to update a lab."
          );
        }
        return response.json({ msg: `The lab was updated!` });
      });
    } catch (error) {
      responseErr(response, "Something goes wrong with labUpdate" + error);
    }
  },
  deleteLab: async (request: Request, response: Response): Promise<void> => {
    const { lab_id } = request.params;
    try {
      Lab.findByIdAndDelete(lab_id, {}, (err: Error, done) => {
        if (err) {
          return responseErr(
            response,
            "Something goes wrong when the app tried to delete a lab."
          );
        }
        return response.json({ msg: `The lab was deleted!` });
      });
    } catch (error) {
      responseErr(response, "Something goes wrong with labUpdate" + error);
    }
  },
};
