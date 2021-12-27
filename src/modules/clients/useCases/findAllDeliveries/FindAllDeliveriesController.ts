import { Request, Response } from "express";

import { FindAllDeliveriesUseCase } from "./FindAllDeliveriesUseCase";

class FindAllDeliveriesController {
  async handle(request: Request, response: Response) {
    const findAllDeliveriesUseCase = new FindAllDeliveriesUseCase();

    const { client_id } = request;

    const deliveries = await findAllDeliveriesUseCase.execute(client_id);

    return response.json(deliveries);
  }
}

export { FindAllDeliveriesController };
