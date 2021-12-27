import { hash } from "bcryptjs";

import { prisma } from "../../../../database/prismaClient";
import { CreateDeliverymanError } from "./CreateDeliverymanError";
import { ICreateDeliverymanDTO } from "./ICreateDeliverymanDTO";

class CreateDeliverymanUseCase {
  async execute({ username, password }: ICreateDeliverymanDTO) {
    const deliverymanExists = await prisma.deliveryman.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive",
        },
      },
    });

    if (deliverymanExists) {
      throw new CreateDeliverymanError.DeliverymanAlreadyExists();
    }

    const passwordHash = await hash(password, 10);

    const deliveryman = await prisma.deliveryman.create({
      data: {
        username,
        password: passwordHash,
      },
    });

    return deliveryman;
  }
}

export { CreateDeliverymanUseCase };
