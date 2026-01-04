import { prisma } from "../lib/prisma";
import {
  BadRequestError,
  ConflictError,
  NotFoundError,
  InternalServerError,
} from "../errors";

export class TimeSlotService {
  static async create(time: string) {
    if (!time) {
      throw new BadRequestError("Time is required");
    }

    try {
      // 🔒 Evitar horarios duplicados
      const exists = await prisma.timeSlot.findFirst({
        where: { time },
      });

      if (exists) {
        throw new ConflictError("Time slot already exists");
      }

      return await prisma.timeSlot.create({
        data: {
          time,
          isActive: true,
        },
      });
    } catch (error) {
      if (error instanceof Error) throw error;
      throw new InternalServerError("Failed to create time slot");
    }
  }

  static async getActive() {
    try {
      return await prisma.timeSlot.findMany({
        where: { isActive: true },
        orderBy: { time: "asc" },
      });
    } catch {
      throw new InternalServerError("Failed to fetch time slots");
    }
  }

  static async delete(id: string) {
    if (!id) {
      throw new BadRequestError("Time slot id is required");
    }

    try {
      const exists = await prisma.timeSlot.findUnique({
        where: { id },
      });

      if (!exists || !exists.isActive) {
        throw new NotFoundError("Time slot not found");
      }

      return await prisma.timeSlot.update({
        where: { id },
        data: { isActive: false },
      });
    } catch (error) {
      if (error instanceof Error) throw error;
      throw new InternalServerError("Failed to delete time slot");
    }
  }
}
