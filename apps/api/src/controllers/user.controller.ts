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
}
