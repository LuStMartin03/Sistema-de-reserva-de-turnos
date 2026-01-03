import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { create } from "../controllers/appointment.controller";

const router = Router();

router.post("/", authMiddleware, create);


export default router;
