import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { create, getMyAppointments, getAll, cancel } from "../controllers/appointment.controller";
import { requireRole } from "../middlewares/requireRole.middleware";

const router = Router();

router.post("/", authMiddleware, create);

router.get("/me", authMiddleware, getMyAppointments);

router.get("/", authMiddleware, requireRole("ADMIN"), getAll);

router.patch("/:id/cancel", authMiddleware, cancel);

export default router;
