import { Request, Response } from "express";
import { Lab } from "../database/schemas/Labs";
import { Bcrypt } from "../services/bcrypt";
import { Jwt } from "../services/jwt";
import { responseErr } from "../helpers/responseHelper";

class AuthController {
  static async login(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    if (!email || !password) {
      return responseErr(response, "Campos obrigatórios");
    }
    const user = await Lab.findOne({ email });

    const result = await Bcrypt.commparePassword(password, user.password);
    if (!user || !result) {
      return responseErr(response, `Email ou senha errados!`);
    }
    try {
      const token = Jwt.succededLoginTokwt(user);
      response.cookie("userInfo", token, { httpOnly: true });
      return response.json({ msg: `User: ${email} logged in`, data: token });
    } catch (error) {}
  }
  static async adminLogin(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { email, password } = request.body;
    if (!email || !password) {
      return responseErr(response, "Campos obrigatórios");
    }
    const user = await Lab.findOne({ email });

    const result = await Bcrypt.commparePassword(password, user.password);
    if (!user || !result) {
      return responseErr(response, `Email ou senha errados!`);
    }
    if (user.isAdmin === false) {
      return responseErr(response, `Você não possui permissão!`);
    }
    try {
      const token = Jwt.succededLoginTokwt(user);
      response.cookie("userInfo", token, { httpOnly: true });
      return response.json({ msg: `User: ${email} logged in`, data: token });
    } catch (error) {}
  }
}

export { AuthController };
