import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.delete("/:id", authMiddleware, UserController.delete);
router.get("/me", authMiddleware, UserController.getMe);
router.put("/me", authMiddleware, UserController.updateMe);

export default router;
