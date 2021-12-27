import { Request, Response } from "express";

import { UpdateDeliverymanUseCase } from "./UpdateDeliverymanUseCase";

class UpdateDeliverymanController {
  async handle(request: Request, response: Response) {
    const updateDeliverymanUseCase = new UpdateDeliverymanUseCase();

    const { delivery_id } = request.params;

    const { deliveryman_id } = request;

    const delivery = await updateDeliverymanUseCase.execute({
      delivery_id,
      deliveryman_id,
    });

    return response.json(delivery);
  }
}

export { UpdateDeliverymanController };
