import { PrismaClient, Role } from "@prisma/client";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt";
import {
  BadRequestError,
  ConflictError,
  UnauthorizedError,
  InternalServerError,
} from "../errors";

const prisma = new PrismaClient();

export class AuthService {
  static async register(
    fullName: string,
    email: string,
    password: string
  ) {
    if (!fullName || !email || !password) {
      throw new BadRequestError("Missing required fields");
    }

    try {
      // 🔒 Email duplicado
      const exists = await prisma.user.findUnique({
        where: { email },
      });

      if (exists) {
        throw new ConflictError("Email already in use");
      }

      // 🔐 Hash de password
      let hashedPassword: string;
      try {
        hashedPassword = await bcrypt.hash(password, 10);
      } catch {
        throw new InternalServerError("Failed to hash password");
      }

      // 👤 Crear usuario
      const user = await prisma.user.create({
        data: {
          fullName,
          email,
          password: hashedPassword,
          role: Role.CLIENT,
        },
      });

      // 🔑 Generar token
      let token: string;
      try {
        token = generateToken({
          id: user.id,
          role: user.role,
        });
      } catch {
        throw new InternalServerError("Failed to generate token");
      }

      const { password: _, ...safeUser } = user;

      return { user: safeUser, token };
    } catch (error) {
      if (error instanceof Error) throw error;
      throw new InternalServerError("Failed to register user");
    }
  }

  static async login(email: string, password: string) {
    if (!email || !password) {
      throw new BadRequestError("Email and password are required");
    }

    try {
      const user = await prisma.user.findUnique({
        where: { email },
      });

      // ❌ Usuario inexistente
      if (!user) {
        throw new UnauthorizedError("Invalid credentials");
      }

      // 🔐 Password incorrecta
      let valid: boolean;
      try {
        valid = await bcrypt.compare(password, user.password);
      } catch {
        throw new InternalServerError("Failed to validate credentials");
      }

      if (!valid) {
        throw new UnauthorizedError("Invalid credentials");
      }

      // 🔑 Token
      let token: string;
      try {
        token = generateToken({
          id: user.id,
          role: user.role,
        });
      } catch {
        throw new InternalServerError("Failed to generate token");
      }

      const { password: _, ...safeUser } = user;

      return {
        user: safeUser,
        token,
      };
    } catch (error) {
      if (error instanceof Error) throw error;
      throw new InternalServerError("Failed to login");
    }
  }
}
