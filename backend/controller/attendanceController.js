import Attendance from "../models/Attendance.js";
import User from "../models/User.js";

export const getAllAttendance = async (req, res) => {
  const data = await Attendance.find().sort({ timestamp: -1 });
  res.json(data);
};

export const getAttendanceByMinor = async (req, res) => {
  const { minor } = req.params;
  const data = await Attendance.find({ minor });
  res.json(data);
};
