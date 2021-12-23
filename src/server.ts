import "express-async-errors";

import express from "express";

import { routes } from "./routes";
import { AppError } from "./shared/errors/AppError";

const app = express();

app.use(express.json());
app.use(routes);

app.use(
  (
    err: Error,
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      message: `Internal Server Error - ${err.message}`,
    });
  }
);

app.listen(5500, () => console.log("Server is running ;)"));
