import { Request, Response } from "express";

import { AuthenticateDeliverymanUseCase } from "./AuthenticateDeliverymanUseCase";

class AuthenticateDeliverymanController {
  async handle(request: Request, response: Response) {
    const authenticateDeliverymanUseCase = new AuthenticateDeliverymanUseCase();

    const { username, password } = request.body;

    const token = await authenticateDeliverymanUseCase.execute({
      username,
      password,
    });

    return response.json(token);
  }
}

export { AuthenticateDeliverymanController };
