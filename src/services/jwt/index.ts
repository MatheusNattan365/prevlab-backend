import jwt from "jsonwebtoken";
import { UserProps } from "../../database/schemas/User";

export class Jwt {
  static succededLoginTokwt(obj: UserProps): string {
    return jwt.sign({ ...obj }, process.env.NODE_ENV_JWT_PRIVATE_KEY, {
      expiresIn: "10s",
    });
  }
  static decodeUser(token: string): boolean {
    const isValid = jwt.verify(token, process.env.NODE_ENV_JWT_PRIVATE_KEY);
    if (!isValid) return false;
    return true;
  }
}
