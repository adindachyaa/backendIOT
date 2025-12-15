import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Atlas Connected");
  } catch (err) {
    console.error("MongoDB connection FAILED");
    throw err; // ⬅️ WAJIB
  }
};

export default connectDB;
