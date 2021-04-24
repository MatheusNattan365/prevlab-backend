import { Request, Response } from "express";

const loggerMiddleware = (request: Request, response: Response, next) => {
  console.log(`${request.method} ${request.path}`);
  next();
};

export { loggerMiddleware };
