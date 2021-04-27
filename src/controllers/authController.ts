import { Request, Response } from "express";
import { User } from "../database/schemas/User";
import { Bcrypt } from "../services/bcrypt";
import { Jwt } from "../services/jwt";

class AuthController {
  static async login(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    if (!email || !password) {
      return response.json({ msg: "Missing required field" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return response.json({ msg: `Email not found!` });
    }
    const result = await Bcrypt.commparePassword(password, user.password);
    if (!result) {
      return response.json({ msg: `Email or Password is wrong` });
    }
    try {
      const token = Jwt.succededLoginTokwt(user);
      response.cookie("userInfo", token, { httpOnly: true });
      response.json({ msg: `User: ${email} logged in` });
    } catch (error) {}
  }
}

export { AuthController };
