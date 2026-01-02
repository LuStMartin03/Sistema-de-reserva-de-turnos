import { Router } from "express";
import { ServiceController } from "../controllers/service.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { requireRole } from "../middlewares/requireRole.middleware";

const router = Router();

router.get("/", ServiceController.getAll);
router.get("/:id", ServiceController.getById);

router.post(
  "/",
  authMiddleware,
  requireRole("ADMIN"),
  ServiceController.create
);

router.put("/:id", ServiceController.update);
router.delete("/:id", ServiceController.remove);

export default router;
