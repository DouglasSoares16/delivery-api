import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { prisma } from "../../../../database/prismaClient";
import { IAuthenticateUserDTO } from "../../dtos/IAuthenticateUserDTO";
import { AuthenticateUserError } from "../../errors/AuthenticateUserError";

class AuthenticateClientUseCase {
  async execute({ password, username }: IAuthenticateUserDTO) {
    const clientExists = await prisma.clients.findFirst({
      where: {
        username,
      },
    });

    if (!clientExists) {
      throw new AuthenticateUserError.EmailOrPasswordIncorrect();
    }

    const passwordMatch = await compare(password, clientExists.password);

    if (!passwordMatch) {
      throw new AuthenticateUserError.EmailOrPasswordIncorrect();
    }

    const token = sign(
      {
        username,
      },
      "kbfgksdfeqwpoipzxesa",
      {
        subject: clientExists.id,
        expiresIn: "1d",
      }
    );

    return token;
  }
}

export { AuthenticateClientUseCase };
