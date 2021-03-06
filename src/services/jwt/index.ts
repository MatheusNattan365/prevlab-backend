import jwt from "jsonwebtoken";
import { LabProps } from "../../database/schemas/Labs";

export class Jwt {
  static succededLoginTokwt(obj: LabProps): string {
    return jwt.sign({ ...obj }, process.env.NODE_ENV_JWT_PRIVATE_KEY, {
      expiresIn: "24h",
    });
  }
  static chechekJWT(token: string): string | object {
    const decode = jwt.verify(token, process.env.NODE_ENV_JWT_PRIVATE_KEY);
    return decode;
  }
}
