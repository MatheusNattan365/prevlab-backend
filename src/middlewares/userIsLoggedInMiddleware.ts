import { Request, Response, NextFunction } from "express";
import { Jwt } from "../services/jwt";
export const userIsLoggedInMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
): Response | NextFunction => {
  const { userInfo } = request.cookies;
  if (!userInfo) {
    return response.send("Your section expires, please relogin!");
  }

  const decoded = Jwt.chechekJWT(userInfo);

  if (!decoded[`_doc`].email) {
    return response.send("Your section expires, please relogin!");
  }

  next();
};
