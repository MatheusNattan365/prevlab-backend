import { Request, Response } from "express";
import { User } from "../database/schemas/User";
import { Bcrypt } from "../services/bcrypt";
class AdminController {
  static async getAllUsers(
    request: Request,
    response: Response
  ): Promise<Response> {
    const allUsers = await User.find();
    return response.json(allUsers);
  }
  static async updateUserRole(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { email, isAdmin } = request.body;

    try {
      const result = await User.findOneAndUpdate({ email }, { isAdmin });

      return response.json({ msg: `User acquire admin permission!` });
    } catch (error) {
      console.log("Something goes wrong with userCreator" + error);
    }
  }
}

export { AdminController };
