import { Request, Response } from "express";
import { AppointmentService } from "../services/appointment.service";

export async function create(req: Request, res: Response) {
  try {
    const user = (req as any).user;

    const { serviceId, date } = req.body;

    if (!serviceId || !date) {
      return res.status(400).json({ message: "Missing data" });
    }

    const appointment = await AppointmentService.create({
      userId: user.id,
      serviceId,
      date: new Date(date),
    });

    res.status(201).json(appointment);
  } catch (error) {
  console.error(error);
  res.status(500).json({
    message: "Error creating appointment",
    error: String(error),
  });
}
}
