import mqtt from "mqtt";
import Attendance from "../models/Attendance.js";

const MQTT_BROKER = "mqtt://10.42.163.19:1883";
const TOPIC = "attendance/scan";

const client = mqtt.connect(MQTT_BROKER);

client.on("connect", () => {
  console.log("MQTT Connected");
  client.subscribe(TOPIC);
});

client.on("message", async (topic, message) => {
  try {
    const data = JSON.parse(message.toString());

    console.log("MQTT DATA:", data);

    await Attendance.create({
      mac: data.mac,
      minor: data.minor,
      major: data.major,
      rssi: data.rssi,
      uuid: data.uuid,
      status: data.status,
    });

    console.log("Attendance saved to DB");
  } catch (err) {
    console.error("MQTT ERROR:", err.message);
  }
});

export default client;
