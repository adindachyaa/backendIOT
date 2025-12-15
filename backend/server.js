import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "./src/mqtt/mqttClient.js";

import connectDB from "./src/config/db.js";
import espRoutes from "./src/routes/espRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";
import attendanceRoutes from "./src/routes/attendanceRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/esp", espRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/attendance", attendanceRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
