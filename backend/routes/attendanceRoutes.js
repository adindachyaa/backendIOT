import express from "express";
import {
  getAllAttendance,
  getAttendanceByMinor,
} from "../controllers/attendanceController.js";

const router = express.Router();

router.get("/", getAllAttendance);
router.get("/:minor", getAttendanceByMinor);

export default router;
