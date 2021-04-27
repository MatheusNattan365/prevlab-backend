import { NextFunction, Request, Response } from "express";

export const loggerMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
): void => {
  console.log(`${request.method} ${request.path}`);
  next();
};
