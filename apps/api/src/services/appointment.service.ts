import { prisma } from "../lib/prisma";

export class AppointmentService {
  static create(data: {
    userId: string;
    serviceId: string;
    date: Date;
  }) {
    return prisma.appointment.create({
      data,
      include: {
        service: true,
      },
    });
  }
}
