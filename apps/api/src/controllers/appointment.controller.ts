import { Request, Response } from "express";
import { AppointmentService } from "../services/appointment.service";

export async function create(req: Request, res: Response) {
  try {
    const userId = (req as any).user.id;
    const { serviceId, date, timeSlotId } = req.body;

    const appointment = await AppointmentService.create({
      userId,
      serviceId,
      timeSlotId,
      date: new Date(date),
    });

    res.status(201).json(appointment);
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
}

export async function getAll(req: Request, res: Response) {
  try {
    const appointments = await AppointmentService.getAll();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching appointments",
    });
  }
}


export async function getMine(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;

      const appointments = await AppointmentService.getMine(userId);

      res.json(appointments);
    } catch (error) {
      res.status(500).json({ message: "Error fetching appointments" });
    }
  }

export async function cancel(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const user = (req as any).user;

    const appointment = await AppointmentService.cancel(id, user);
    res.json(appointment);
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
}