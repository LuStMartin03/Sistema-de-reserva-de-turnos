import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export class UserController {
  static async delete(req: Request, res: Response) {
    if (!req.user) {
        return res.status(401).json({ message: "No autenticado" });
    }

    const requester = req.user;
    const targetUserId = req.params.id;

    await UserService.deleteUser(requester, targetUserId);

    res.json({ message: "Cuenta desactivada" });
    }
    static async  getMe(req: Request, res: Response) {
      if (!req.user) {
        return res.status(401).json({ message: "No autenticado" });
      }
      const user = await UserService.getMe(req.user.id);
      res.json(user);
    }

    static async  updateMe(req: Request, res: Response) {
      const { fullName, email } = req.body;
      if (!req.user) {
        return res.status(401).json({ message: "No autenticado" });
      }
      const user = await UserService.updateMe(req.user.id, { fullName, email });
      res.json(user);
    }
}

