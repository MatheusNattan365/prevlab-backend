import { Request, Response, NextFunction } from "express";
import { Jwt } from "../services/jwt";
export const adminMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
): Response | void => {
  const { authorization } = request.headers;
  if (!authorization) {
    return response.send("Your do not have permission!");
  }
  const decoded = Jwt.chechekJWT(authorization);

  if (!decoded[`_doc`].isAdmin) {
    return response.send("Your do not have permission!");
  }

  next();
};
