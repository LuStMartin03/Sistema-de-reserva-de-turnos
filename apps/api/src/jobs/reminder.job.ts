import cron from "node-cron";
import { prisma } from "../lib/prisma";
import { sendMail } from "../utils/mailer";

function startOfDay(date: Date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

function endOfDay(date: Date) {
  const d = new Date(date);
  d.setHours(23, 59, 59, 999);
  return d;
}

export function startReminderJob() {
  cron.schedule("0 * * * *", async () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const appointments = await prisma.appointment.findMany({
      where: {
        date: {
          gte: startOfDay(tomorrow),
          lt: endOfDay(tomorrow),
        },
        status: "ACTIVE",
        reminderSent: false,
      },
      include: {
        user: true,
        service: true,
      },
    });

    for (const a of appointments) {
      await sendMail(
        a.user.email,
        "Recordatorio de turno",
        `Recordá que mañana tenés tu turno de ${a.service.name}`
      );

      await prisma.appointment.update({
        where: { id: a.id },
        data: { reminderSent: true },
      });
    }
  });
}
