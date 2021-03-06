import { hash } from "bcryptjs";

import { prisma } from "../../../../database/prismaClient";
import { CreateClientError } from "./CreateClientError";
import { ICreateClientDTO } from "./ICreateClientDTO";

class CreateClientUseCase {
  async execute({ username, password }: ICreateClientDTO) {
    const clientExists = await prisma.clients.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive",
        },
      },
    });

    if (clientExists) {
      throw new CreateClientError.ClientAlreadyExists();
    }

    const passwordHash = await hash(password, 10);

    const client = await prisma.clients.create({
      data: {
        username,
        password: passwordHash,
      },
    });

    return client;
  }
}

export { CreateClientUseCase };
