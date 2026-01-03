import { Router } from "express";
import { TimeSlotController } from "../controllers/timeSlot.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { requireRole } from "../middlewares/requireRole.middleware";

const router = Router();

// Público
router.get("/", TimeSlotController.getActive);

// Admin
router.post("/", authMiddleware, requireRole("ADMIN"), TimeSlotController.create);
router.delete("/:id", authMiddleware, requireRole("ADMIN"), TimeSlotController.deactivate);

export default router;
