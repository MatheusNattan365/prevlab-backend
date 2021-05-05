import { Response } from "express";

export const responseErr = (response: Response, msg: String): Response => {
  return response.json({
    error: 1,
    msg,
  });
};
export const middlewareResponseErr = (
  response: Response,
  msg: String
): Response => {
  return response.json({
    error: 2,
    msg,
  });
};
