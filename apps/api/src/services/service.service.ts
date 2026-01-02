import { prisma } from "../lib/prisma";

export class ServiceService {
  static getAll() {
    return prisma.service.findMany({
      where: { isActive: true },
      orderBy: { name: "asc" },
    });
  }

  static getById(id: string) {
    return prisma.service.findUnique({
      where: { id },
    });
  }

  static create(data: {
    name: string;
    price: number;
    durationMin: number;
  }) {
    return prisma.service.create({
      data,
    });
  }

  static update(
    id: string,
    data: {
      name?: string;
      price?: number;
      durationMin?: number;
      isActive?: boolean;
    }
  ) {
    return prisma.service.update({
      where: { id },
      data,
    });
  }

  static delete(id: string) {
    return prisma.service.update({
      where: { id },
      data: { isActive: false }, // soft delete
    });
  }
}
