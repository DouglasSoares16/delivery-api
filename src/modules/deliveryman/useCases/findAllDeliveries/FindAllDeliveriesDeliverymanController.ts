import { Request, Response } from "express";

import { FindAllDeliveriesDeliverymanUseCase } from "./FindAllDeliveriesDeliverymanUseCase";

class FindAllDeliveriesDeliverymanController {
  async handle(request: Request, response: Response) {
    const findAllDeliveriesDeliverymanUseCase =
      new FindAllDeliveriesDeliverymanUseCase();

    const { deliveryman_id } = request;

    const deliveries = await findAllDeliveriesDeliverymanUseCase.execute(
      deliveryman_id
    );

    return response.json(deliveries);
  }
}

export { FindAllDeliveriesDeliverymanController };
