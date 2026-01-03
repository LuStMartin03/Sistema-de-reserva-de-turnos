import { prisma } from "../lib/prisma";


export class AppointmentService {
  static async create(data: {
  userId: string;
  serviceId: string;
  timeSlotId: string;
  date: Date;
}) {
    const { userId, serviceId, timeSlotId, date } = data;

    const now = new Date();

    // Pasado
    if (date <= now) {
      throw new Error("Appointment cannot be in the past");
    }

    // Mismo día
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const appointmentDay = new Date(date);
    appointmentDay.setHours(0, 0, 0, 0);

    if (appointmentDay.getTime() === today.getTime()) {
      throw new Error("Appointment cannot be today");
    }

    // Obtener servicio
    const service = await prisma.service.findUnique({
      where: { id: serviceId },
    });

    if (!service) {
      throw new Error("Service not found");
    }
  
    // Horario activo
    const slot = await prisma.timeSlot.findUnique({
    where: { id: timeSlotId },
    });

    if (!slot || !slot.isActive) {
    throw new Error("Horario no disponible");
    }

    // Otro turno no ocupa ese horario
    const exists = await prisma.appointment.findFirst({
    where: {
        date: appointmentDay,
        timeSlotId,
        status: "ACTIVE",
    },
    });

    if (exists) {
        throw new Error("This time slot is already booked");
    }

    // Crear turno
    return prisma.appointment.create({
    data: {
        userId,
        serviceId,
        timeSlotId,
        date: appointmentDay,
    },
    include: {
        service: true,
        timeSlot: true,
    },
    });

  }

  static getMine(userId: string) {
    return prisma.appointment.findMany({
      where: { userId },
      include: { service: true },
      orderBy: { date: "asc" },
    });
  }

  static getAll() {
  return prisma.appointment.findMany({
    include: {
      service: true,
      user: {
        select: {
          id: true,
          fullName: true,
          email: true,
        },
      },
    },
    orderBy: {
      date: "asc",
    },
  });
}
static async cancel(
  appointmentId: string,
  user: { id: string; role: string }
) {
  const appointment = await prisma.appointment.findUnique({
    where: { id: appointmentId },
  });

  if (!appointment) {
    throw new Error("Appointment not found");
  }

  // ya cancelado
  if (appointment.status === "CANCELLED") {
    throw new Error("Appointment already cancelled");
  }

  // turno pasado
  if (appointment.date < new Date()) {
    throw new Error("Cannot cancel past appointments");
  }

  // USER solo puede cancelar el suyo
  if (user.role !== "ADMIN" && appointment.userId !== user.id) {
    throw new Error("You cannot cancel this appointment");
  }

  return prisma.appointment.update({
    where: { id: appointmentId },
    data: {
      status: "CANCELLED",
    },
    include: {
      service: true,
    },
  });
}

}
