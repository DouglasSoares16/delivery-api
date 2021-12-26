import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../shared/errors/AppError";

interface IPayload {
  sub: string;
}

export function ensureAuthenticateDeliveryman(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    throw new AppError("Token Missing");
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(
      token,
      "ae839f43eb9aff28fea572636a126a7d"
    ) as IPayload;

    request.deliveryman_id = sub;

    return next();
  } catch (err) {
    throw new AppError("Invalid Token!");
  }
}
