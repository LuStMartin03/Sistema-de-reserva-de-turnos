import { prisma } from "../lib/prisma";
import { Role } from "@prisma/client";

export class UserService {
    static async deleteUser(requester: {
    id: string;
    role: Role;
    }, targetUserId: string) {
    if (requester.role !== "ADMIN" && requester.id !== targetUserId) {
        throw new Error("Not authorized");
    }

    return prisma.user.update({
        where: { id: targetUserId },
        data: { isActive: false },
    });
    }
}