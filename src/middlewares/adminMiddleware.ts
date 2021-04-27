import { Request, Response, NextFunction } from "express";
import { Jwt } from "../services/jwt";
export const adminMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
): Response | void => {
  const { userInfo } = request.cookies;
  if (!userInfo) {
    return response.send("Your do not have permission!");
  }
  const decoded = Jwt.chechekJWT(userInfo);

  if (!decoded[`_doc`].isAdmin) {
    return response.send("Your do not have permission!");
  }

  next();
};
