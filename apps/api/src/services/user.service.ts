import { prisma } from "../lib/prisma";
import { Role } from "@prisma/client";
import {
  BadRequestError,
  ForbiddenError,
  NotFoundError,
  ConflictError,
  InternalServerError,
} from "../errors";

export class UserService {
  static async deleteUser(
    requester: { id: string; role: Role },
    targetUserId: string
  ) {
    if (!targetUserId) {
      throw new BadRequestError("User id is required");
    }

    // 🔐 Permisos
    if (requester.role !== Role.ADMIN && requester.id !== targetUserId) {
      throw new ForbiddenError("Not authorized");
    }

    try {
      const user = await prisma.user.findUnique({
        where: { id: targetUserId },
      });

      if (!user || !user.isActive) {
        throw new NotFoundError("User not found");
      }

      return await prisma.user.update({
        where: { id: targetUserId },
        data: { isActive: false },
        select: {
          id: true,
          fullName: true,
          email: true,
          role: true,
          isActive: true,
        },
      });
    } catch (error) {
      if (error instanceof Error) throw error;
      throw new InternalServerError("Failed to delete user");
    }
  }

  static async getMe(userId: string) {
    if (!userId) {
      throw new BadRequestError("User id is required");
    }

    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          fullName: true,
          email: true,
          role: true,
          createdAt: true,
          isActive: true,
        },
      });

      if (!user || !user.isActive) {
        throw new NotFoundError("User not found");
      }

      return user;
    } catch (error) {
      if (error instanceof Error) throw error;
      throw new InternalServerError("Failed to fetch user");
    }
  }

  static async updateMe(
    userId: string,
    data: { fullName?: string; email?: string }
  ) {
    if (!userId) {
      throw new BadRequestError("User id is required");
    }

    if (!data.fullName && !data.email) {
      throw new BadRequestError("No data to update");
    }

    try {
      // 🔒 Email duplicado
      if (data.email) {
        const exists = await prisma.user.findUnique({
          where: { email: data.email },
        });

        if (exists && exists.id !== userId) {
          throw new ConflictError("Email already in use");
        }
      }

      const user = await prisma.user.update({
        where: { id: userId },
        data,
        select: {
          id: true,
          fullName: true,
          email: true,
          role: true,
        },
      });

      return user;
    } catch (error) {
      if (error instanceof Error) throw error;
      throw new InternalServerError("Failed to update user");
    }
  }
}
