import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { create, getMine, getAll, cancel } from "../controllers/appointment.controller";
import { requireRole } from "../middlewares/requireRole.middleware";

const router = Router();

router.post("/", authMiddleware, create);

router.get("/me", authMiddleware, getMine);

router.get("/", authMiddleware, requireRole("ADMIN"), getAll);

router.patch("/:id/cancel", authMiddleware, cancel);

export default router;
