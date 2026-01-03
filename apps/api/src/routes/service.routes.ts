import { Router } from "express";
import { ServiceController } from "../controllers/service.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { requireRole } from "../middlewares/requireRole.middleware";

const router = Router();

router.get("/", ServiceController.getAll);
router.get("/:id", ServiceController.getById);

router.post("/", authMiddleware, requireRole("ADMIN"), ServiceController.create);
router.put("/:id", authMiddleware, requireRole("ADMIN"), ServiceController.update);
router.delete("/:id", authMiddleware, requireRole("ADMIN"), ServiceController.remove);

export default router;
