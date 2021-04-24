import { Request, Response } from "express";
import { User } from "../database/schemas/User";

class UserController {
  static async getAllUsers(request: Request, response: Response) {
    const allUsers = await User.find();
    response.json(allUsers);
  }
  static async postNewUser(request: Request, response: Response) {
    User.create({ ...request.body }, (err, user) => {
      if (err) return response.send(err);
      response.json(user);
    });
  }
}

export { UserController };
