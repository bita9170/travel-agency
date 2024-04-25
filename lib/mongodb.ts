import mongoose from "mongoose";

const connectMongoDB = () => {
  try {
    const mongoURI = process.env.MONGODB_URI;
    if (!mongoURI) {
      throw new Error("MongoDB URI not found in environment variables.");
    }
    mongoose.connect(mongoURI);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.error(error);
  }
};

export default connectMongoDB;
