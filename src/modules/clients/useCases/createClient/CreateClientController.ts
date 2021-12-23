import { Request, Response } from "express";

import { CreateClientUseCase } from "./CreateClientUseCase";

class CreateClientController {
  async handle(request: Request, response: Response) {
    const createClientUseCase = new CreateClientUseCase();

    const { username, password } = request.body;

    const client = await createClientUseCase.execute({
      username,
      password,
    });

    return response.status(201).json(client);
  }
}

export { CreateClientController };
