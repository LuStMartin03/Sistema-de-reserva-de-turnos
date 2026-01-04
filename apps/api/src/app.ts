import express from "express";
import cors from "cors";

import appointmentRoutes from "./routes/appointment.routes";
import timeSlotRoutes from "./routes/timeSlot.routes";
import serviceRoutes from "./routes/service.routes";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(cors());
app.use(express.json());


app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/services", serviceRoutes);
app.use("/time-slots", timeSlotRoutes);
app.use("/appointments", appointmentRoutes);

export default app;
app.use(errorHandler);
