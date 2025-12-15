import mongoose from "mongoose";

const AttendanceSchema = new mongoose.Schema({
  esp_id: String,
  mac: String,
  minor: Number,
  major: Number,
  rssi: Number,
  uuid: String,
  status: String,
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model("Attendance", AttendanceSchema);
