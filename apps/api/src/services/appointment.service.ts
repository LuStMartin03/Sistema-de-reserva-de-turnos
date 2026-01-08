import app from "../app";
import {
  BadRequestError,
  ConflictError,
  ForbiddenError,
  NotFoundError,
  InternalServerError,
} from "../errors";
import { prisma } from "../lib/prisma";
import { sendMail } from "../utils/mailer";

export class AppointmentService {
  static async create(data: {
    userId: string;
    serviceId: string;
    timeSlotId: string;
    date: Date;
  }) {
    const { userId, serviceId, timeSlotId, date } = data;

    // 🗓 Normalizar fecha (SOLO día, sin hora)
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const appointmentDay = new Date(date);
    appointmentDay.setHours(0, 0, 0, 0);

    // ❌ No pasado ni hoy
    if (appointmentDay <= today) {
      throw new BadRequestError("Appointment must be in the future");
    }

    try {
      // 🔍 Servicio existente
      const service = await prisma.service.findUnique({
        where: { id: serviceId },
      });

      if (!service || !service.isActive) {
        throw new NotFoundError("Service not found");
      }

      // 🔍 Horario válido y activo
      const timeSlot = await prisma.timeSlot.findUnique({
        where: { id: timeSlotId },
      });

      if (!timeSlot || !timeSlot.isActive) {
        throw new BadRequestError("Time slot not available");
      }

      // 🔒 Horario ya ocupado ese día
      const slotTaken = await prisma.appointment.findFirst({
        where: {
          date: appointmentDay,
          timeSlotId,
          status: "ACTIVE",
        },
      });

      if (slotTaken) {
        throw new ConflictError("This time slot is already booked");
      }

      // 🔒 Usuario con turno activo
      const activeAppointment = await prisma.appointment.findFirst({
        where: {
          userId,
          status: "ACTIVE",
        },
      });

      if (activeAppointment) {
        throw new ConflictError("You already have an active appointment");
      }

      // ✅ CREAR TURNO
      const appointment = await prisma.appointment.create({
        data: {
          userId,
          serviceId,
          timeSlotId,
          date: appointmentDay,
          status: "ACTIVE",
        },
        select: {
          id: true,
          date: true,
          status: true,
          service: {
            select: {
              id: true,
              name: true,
              price: true,
              durationMin: true,
            },
          },
          timeSlot: {
            select: {
              id: true,
              time: true,
            },
          },
          user: {
            select: {
              email: true,
            },
          },
        },
      });

      // 📧 Envío de mail
      try {
        await sendMail(
          appointment.user.email,
          "Turno confirmado",
          `Tu turno para ${appointment.service.name} fue registrado correctamente`
        );
      } catch {
        throw new InternalServerError("Failed to send confirmation email");
      }

      // 🔥 No devolver email al front
      const { user, ...response } = appointment;

      return response;
    } catch (error) {
      if (error instanceof Error) throw error;
      throw new InternalServerError("Failed to create appointment");
    }
  }


  static async getMine(userId: string) {
    try {
      return await prisma.appointment.findMany({
        where: { userId },
        include: { service: true },
        orderBy: { date: "asc" },
      });
    } catch {
      throw new InternalServerError("Failed to fetch appointments");
    }
  }

  static async getAll() {
    try {
      return await prisma.appointment.findMany({
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
        orderBy: { date: "asc" },
      });
    } catch {
      throw new InternalServerError("Failed to fetch appointments");
    }
  }

  static async cancel(
    appointmentId: string,
    user: { id: string; role: string }
  ) {
    try {
      const appointment = await prisma.appointment.findUnique({
        where: { id: appointmentId },
        include: {
          user: true,
          service: true,
        },
      });

      if (!appointment) {
        throw new NotFoundError("Appointment not found");
      }

      // ❌ Ya cancelado
      if (appointment.status === "CANCELLED") {
        throw new BadRequestError("Appointment already cancelled");
      }

      // ❌ Turno pasado
      if (appointment.date < new Date()) {
        throw new BadRequestError("Cannot cancel past appointments");
      }

      // 🔐 Permisos
      if (user.role !== "ADMIN" && appointment.userId !== user.id) {
        throw new ForbiddenError("You cannot cancel this appointment");
      }

      // 📧 Mail
      try {
        await sendMail(
          appointment.user.email,
          "Turno cancelado",
          "Tu turno fue cancelado correctamente"
        );
      } catch {
        throw new InternalServerError("Failed to send cancellation email");
      }

      await prisma.appointment.update({
        where: { id: appointmentId },
        data: { status: "CANCELLED" },
      });

      return appointment;
    } catch (error) {
      if (error instanceof Error) throw error;
      throw new InternalServerError("Failed to cancel appointment");
    }
  }

  static async getMyAppointments(
    userId: string,
    filters: { future?: boolean; past?: boolean }
  ) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let whereCondition: any = { userId };

    if (filters.future) {
      whereCondition = {
        userId,
        status: "ACTIVE",
        date: { gt: today },
      };
    }

    if (filters.past) {
      whereCondition = {
        userId,
        OR: [
          { date: { lt: today } },
          { status: "CANCELLED" },
        ],
      };
    }

    return prisma.appointment.findMany({
      where: whereCondition,
      orderBy: { date: "asc" },
      select: {
        id: true,
        date: true,
        status: true,
        service: {
          select: {
            name: true,
            price: true,
            durationMin: true,
          },
        },
        timeSlot: {
          select: {
            time: true,
          },
        },
      },
    });
  }
}
