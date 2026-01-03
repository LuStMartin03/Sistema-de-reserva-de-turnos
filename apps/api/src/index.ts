import "dotenv/config";
import app from "./app";
import { startReminderJob } from "./jobs/reminder.job";

const PORT = process.env.PORT || 3001;
startReminderJob();

app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}`);
});
