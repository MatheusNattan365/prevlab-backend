import { Request, Response, NextFunction } from "express";
import { Jwt } from "../services/jwt";
import { middlewareResponseErr } from "../helpers/responseHelper";
export const userIsLoggedInMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
): Response | NextFunction => {
  const { authorization } = request.headers;
  if (!authorization) {
    return middlewareResponseErr(
      response,
      "Your section expires, please relogin!"
    );
  }

  const decoded = Jwt.chechekJWT(authorization);

  if (!decoded[`_doc`].email) {
    return middlewareResponseErr(
      response,
      "Your section expires, please relogin!"
    );
  }
  response.locals.user = decoded[`_doc`];
  next();
};
