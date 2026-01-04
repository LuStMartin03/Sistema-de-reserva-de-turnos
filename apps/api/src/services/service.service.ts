import { prisma } from "../lib/prisma";
import {
  BadRequestError,
  NotFoundError,
  InternalServerError,
} from "../errors";

export class ServiceService {
  static async getAll() {
    try {
      return await prisma.service.findMany({
        where: { isActive: true },
        orderBy: { name: "asc" },
      });
    } catch {
      throw new InternalServerError("Failed to fetch services");
    }
  }

  static async getById(id: string) {
    if (!id) {
      throw new BadRequestError("Service id is required");
    }

    try {
      const service = await prisma.service.findUnique({
        where: { id },
      });

      if (!service || !service.isActive) {
        throw new NotFoundError("Service not found");
      }

      return service;
    } catch (error) {
      if (error instanceof Error) throw error;
      throw new InternalServerError("Failed to fetch service");
    }
  }

  static async create(data: {
    name: string;
    price: number;
    durationMin: number;
  }) {
    const { name, price, durationMin } = data;

    if (!name || price <= 0 || durationMin <= 0) {
      throw new BadRequestError("Invalid service data");
    }

    try {
      return await prisma.service.create({
        data: {
          name,
          price,
          durationMin,
          isActive: true,
        },
      });
    } catch {
      throw new InternalServerError("Failed to create service");
    }
  }

  static async update(
    id: string,
    data: {
      name?: string;
      price?: number;
      durationMin?: number;
      isActive?: boolean;
    }
  ) {
    if (!id) {
      throw new BadRequestError("Service id is required");
    }

    if (
      data.price !== undefined && data.price <= 0 ||
      data.durationMin !== undefined && data.durationMin <= 0
    ) {
      throw new BadRequestError("Invalid service data");
    }

    try {
      const exists = await prisma.service.findUnique({
        where: { id },
      });

      if (!exists) {
        throw new NotFoundError("Service not found");
      }

      return await prisma.service.update({
        where: { id },
        data,
      });
    } catch (error) {
      if (error instanceof Error) throw error;
      throw new InternalServerError("Failed to update service");
    }
  }

  static async delete(id: string) {
    if (!id) {
      throw new BadRequestError("Service id is required");
    }

    try {
      const exists = await prisma.service.findUnique({
        where: { id },
      });

      if (!exists || !exists.isActive) {
        throw new NotFoundError("Service not found");
      }

      return await prisma.service.update({
        where: { id },
        data: { isActive: false },
      });
    } catch (error) {
      if (error instanceof Error) throw error;
      throw new InternalServerError("Failed to delete service");
    }
  }
}
