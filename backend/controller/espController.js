import Attendance from "../models/Attendance.js";

export const receiveScan = async (req, res) => {
  try {
    const { mac, minor, major, rssi, uuid, status } = req.body;

    const data = await Attendance.create({
      mac,
      minor,
      major,
      rssi,
      uuid,
      status,
    });

    res.json({ msg: "Attendance saved", data });
  } catch (err) {
    res.status(500).json({ err });
  }
};
