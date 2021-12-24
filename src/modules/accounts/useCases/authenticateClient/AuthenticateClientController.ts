import { Request, Response } from "express";

import { AuthenticateClientUseCase } from "./AuthenticateClientUseCase";

class AuthenticateClientController {
  async handle(request: Request, response: Response) {
    const authenticateClientUseCase = new AuthenticateClientUseCase();

    const { username, password } = request.body;

    const token = await authenticateClientUseCase.execute({
      username,
      password,
    });

    return response.json(token);
  }
}

export { AuthenticateClientController };
