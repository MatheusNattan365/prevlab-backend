import { Request, Response } from "express";
import { User } from "../database/schemas/User";

class AdminController {
  static async getAllUsers(
    request: Request,
    response: Response
  ): Promise<Response> {
    const allUsers = await User.find();
    return response.json(allUsers);
  }
}

export { AdminController };
