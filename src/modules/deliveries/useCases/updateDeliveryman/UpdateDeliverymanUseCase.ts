import { prisma } from "../../../../database/prismaClient";
import { IUpdateDeliverymanDTO } from "./IUpdateDeliverymanDTO";

class UpdateDeliverymanUseCase {
  async execute({ delivery_id, deliveryman_id }: IUpdateDeliverymanDTO) {
    const delivery = await prisma.deliveries.update({
      where: {
        id: delivery_id,
      },
      data: {
        deliveryman_id,
      },
    });

    return delivery;
  }
}

export { UpdateDeliverymanUseCase };
