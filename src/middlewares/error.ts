import { Request, Response, NextFunction } from "express";

import { AppError } from "../shared/errors/AppError";

export default (
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }

  return response.status(500).json({
    message: `Internal Server Error - ${err.message}`,
  });
};
