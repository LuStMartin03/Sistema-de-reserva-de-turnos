import { PrismaClient, Role } from "@prisma/client";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt";

const prisma = new PrismaClient();

export class AuthService {
  static async register(
    fullName: string,
    email: string,
    password: string
  ) {
    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) throw new Error("Email already in use");

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
        role: Role.CLIENT,
      },
    });

    const token = generateToken({
      id: user.id,
      role: user.role,
    });

    return { user, token };
  }

  static async login(email: string, password: string) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw new Error("Invalid credentials");

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Error("Invalid credentials");

    const token = generateToken({
      id: user.id,
      role: user.role,
    });
    
    const { password: _, ...safeUser } = user;

    return {
    user: safeUser,
    token,
    };

  }
}
