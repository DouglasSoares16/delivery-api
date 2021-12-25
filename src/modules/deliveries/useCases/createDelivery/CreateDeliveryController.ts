import { Request, Response } from "express";

import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";

class CreateDeliveryController {
  async handle(request: Request, response: Response) {
    const createDeliveryUseCase = new CreateDeliveryUseCase();

    const { client_id, item_name } = request.body;

    const delivery = await createDeliveryUseCase.execute({
      client_id,
      item_name,
    });

    return response.status(201).json(delivery);
  }
}

export { CreateDeliveryController };
