import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// MongoDB connection URI from environment variables
const uri = process.env.MONGODB_URI;

// Connect to MongoDB using Mongoose
export const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
};
