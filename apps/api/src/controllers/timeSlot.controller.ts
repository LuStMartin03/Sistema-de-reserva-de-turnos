import { Request, Response } from "express";
import { TimeSlotService } from "../services/timeSlot.service";

export class TimeSlotController {
  static async create(req: Request, res: Response) {
    const { time } = req.body;

    if (!time) {
      return res.status(400).json({ message: "Time is required" });
    }

    const slot = await TimeSlotService.create(time);
    res.status(201).json(slot);
  }

  static async getActive(_req: Request, res: Response) {
    const slots = await TimeSlotService.getActive();
    res.json(slots);
  }

  static async deactivate(req: Request, res: Response) {
    const { id } = req.params;

    const slot = await TimeSlotService.delete(id);
    res.json(slot);
  }
}
