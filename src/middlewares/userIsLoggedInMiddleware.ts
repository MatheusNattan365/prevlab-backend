import { Request, Response, NextFunction } from "express";
import { Jwt } from "../services/jwt";
export const userIsLoggedInMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
): Response | NextFunction => {
  const { authorization } = request.headers;
  if (!authorization) {
    return response.send("Your section expires, please relogin!");
  }

  const decoded = Jwt.chechekJWT(authorization);

  if (!decoded[`_doc`].email) {
    return response.send("Your section expires, please relogin!");
  }

  next();
};
