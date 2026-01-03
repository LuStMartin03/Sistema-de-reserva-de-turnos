import { prisma } from "../lib/prisma";

export class TimeSlotService {
  static async  create(time: string) {
    return prisma.timeSlot.create({
      data: {
        time,
      },
    });
  }

  static async  getActive() {
    return prisma.timeSlot.findMany({
      where: { isActive: true },
      orderBy: { time: "asc" },
    });
  }

  static async  delete(id: string) {
    return prisma.timeSlot.update({
      where: { id },
      data: { isActive: false },
    });
  }
}
