import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

export class AuthController {
  static async register(req: Request, res: Response) {
    try {
      const { fullName, email, password } = req.body;
      const data = await AuthService.register(fullName, email, password);
      res.status(201).json(data);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const data = await AuthService.login(email, password);
      console.log("JWT_SECRET LOGIN:", process.env.JWT_SECRET);
      res.json(data);
    } catch (error: any) {
      res.status(401).json({ message: error.message });
    }
  }
}
