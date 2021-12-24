import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { prisma } from "../../../../database/prismaClient";
import { IAuthenticateUserDTO } from "../../dtos/IAuthenticateUserDTO";
import { AuthenticateUserError } from "../../errors/AuthenticateUserError";

class AuthenticateDeliverymanUseCase {
  async execute({ password, username }: IAuthenticateUserDTO) {
    const deliverymanExists = await prisma.deliveryman.findFirst({
      where: {
        username,
      },
    });

    if (!deliverymanExists) {
      throw new AuthenticateUserError.UsernameOrPasswordIncorrect();
    }

    const passwordMatch = await compare(password, deliverymanExists.password);

    if (!passwordMatch) {
      throw new AuthenticateUserError.UsernameOrPasswordIncorrect();
    }

    const token = sign(
      {
        username,
      },
      "kbfgksdfeqwpoipzxesa",
      {
        subject: deliverymanExists.id,
        expiresIn: "1d",
      }
    );

    return token;
  }
}

export { AuthenticateDeliverymanUseCase };
