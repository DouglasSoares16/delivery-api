import { prisma } from "../../../../database/prismaClient";

class FindAllDeliveriesUseCase {
  async execute(client_id: string) {
    const deliveries = await prisma.clients.findMany({
      where: {
        id: client_id,
      },
      select: {
        Deliveries: true,
        id: true,
        username: true,
      },
    });

    return deliveries;
  }
}

export { FindAllDeliveriesUseCase };
