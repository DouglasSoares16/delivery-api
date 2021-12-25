import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../shared/errors/AppError";

interface IPayload {
  sub: string;
}

export function ensureAuthenticateClient(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    throw new AppError("Token missing!", 401);
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, "kbfgksdfeqwpoipzxesa") as IPayload;

    request.client_id = sub;

    return next();
  } catch (err) {
    throw new AppError("Invalid Token!", 401);
  }
}
