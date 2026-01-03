import { Request, Response } from "express";
import { ServiceService } from "../services/service.service";

export class ServiceController {
  static async getAll(req: Request, res: Response) {
    const services = await ServiceService.getAll();
    res.json(services);
  }

  static async getById(req: Request, res: Response) {
    const { id } = req.params;
    const service = await ServiceService.getById(id);

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.json(service);
  }

  static async create(req: Request, res: Response) {
    const { name, price, durationMin } = req.body;

    const service = await ServiceService.create({
      name,
      price,
      durationMin,
    });

    res.status(201).json(service);
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;

    const service = await ServiceService.update(id, req.body);

    res.json(service);
  }

  static async remove(req: Request, res: Response) {
    const { id } = req.params;

    await ServiceService.delete(id);
    res.status(204).send();
  }
}
