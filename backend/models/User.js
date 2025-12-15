import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["mahasiswa", "dosen"], default: "mahasiswa" },
  minor: Number, // beacon minor mahasiswa
});

export default mongoose.model("User", UserSchema);
