import { prisma } from "../../../../database/prismaClient";
import { ICreateDeliveryDTO } from "./ICreateDeliveryDTO";

class CreateDeliveryUseCase {
  async execute({ client_id, item_name }: ICreateDeliveryDTO) {
    const delivery = await prisma.deliveries.create({
      data: {
        item_name,
        client_id,
      },
    });

    return delivery;
  }
}

export { CreateDeliveryUseCase };
