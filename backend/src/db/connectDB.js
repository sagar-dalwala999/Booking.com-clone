import mongoose from "mongoose";
import { DB_NAME } from "../utils/constant.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log("MongoDB connected", conn.connection.host);
  } catch (error) {
    console.log("MongoDB connection error : ", error);
    process.exit(1);
  }
};

export default connectDB;
