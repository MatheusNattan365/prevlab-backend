import { Request, Response, NextFunction } from "express";
import { Jwt } from "../services/jwt";
export const decodeJwtMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
): void => {
  const { userInfo } = request.cookies;
  const result = Jwt.decodeUser(userInfo);

  if (!result) throw new Error("Your section expires, please relogin!");

  next();
};
