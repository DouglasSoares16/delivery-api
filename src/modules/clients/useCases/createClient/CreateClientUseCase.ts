import { hash } from "bcryptjs";

import { prisma } from "../../../../database/prismaClient";

interface ICreateClientDTO {
  username: string;
  password: string;
}

class CreateClientUseCase {
  async execute({ username, password }: ICreateClientDTO) {
    const clientExists = await prisma.clients.findFirst({
      where: {
        username: {
          mode: "insensitive",
        },
      },
    });

    if (clientExists) {
      throw new Error("Client Already Exists!");
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