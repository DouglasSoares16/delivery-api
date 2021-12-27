import { Request, Response } from "express";

import { UpdateEndDateUseCase } from "./UpdateEndDateUseCase";

class UpdateEndDateController {
  async handle(request: Request, response: Response) {
    const updateEndDateUseCase = new UpdateEndDateUseCase();

    const { deliveryman_id } = request;

    const { delivery_id } = request.params;

    const result = await updateEndDateUseCase.execute({
      delivery_id,
      deliveryman_id,
    });

    return response.json(result);
  }
}

export { UpdateEndDateController };
