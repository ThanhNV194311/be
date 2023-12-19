import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectDB() {
  const url =
    "mongodb+srv://tthanhh102001:aCbodM7SVH8THuv1@cluster0.c3tixrd.mongodb.net/";
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
}

export default connectDB;
