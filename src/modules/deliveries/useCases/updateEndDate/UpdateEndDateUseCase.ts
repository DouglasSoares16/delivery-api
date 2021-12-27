import { prisma } from "../../../../database/prismaClient";
import { IUpdateEndDateDTO } from "./IUpdateEndDateDTO";

class UpdateEndDateUseCase {
  async execute({ delivery_id, deliveryman_id }: IUpdateEndDateDTO) {
    const result = await prisma.deliveries.updateMany({
      where: {
        id: delivery_id,
        deliveryman_id,
      },
      data: {
        end_at: new Date(),
      },
    });

    return result;
  }
}

export { UpdateEndDateUseCase };
