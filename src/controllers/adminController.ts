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
  static async createNewUser(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { email, password } = request.body;
    if (!email || !password) {
      return response.json({ msg: "Missing required field" });
    }

    const emailAlreadyExists = await User.findOne({ email });
    if (emailAlreadyExists) {
      return response.json({ msg: "The email already exits in our database!" });
    }

    try {
      request.body.password = await Bcrypt.hashPassword(password);
      User.create({ ...request.body }, (err: Error, done) => {
        if (err) {
          return response.json({
            msg:
              "Something goes wrong when the app tried to create a new user.",
          });
        }
      });
      return response.json({ msg: `User: ${request.body.email} was created!` });
    } catch (error) {
      console.log("Something goes wrong with userCreator" + error);
    }
  }
}

export { AdminController };
