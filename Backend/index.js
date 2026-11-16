
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookroute from "./route/book.route.js";
import userroute from "./route/user.route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODB_URI;

// Check environment variable
console.log("MongoDB URI configured:", Boolean(URI));

// Define routes
app.use("/book", bookroute);
app.use("/user", userroute);

// Connect to MongoDB before starting server
async function startServer() {
  try {
    if (!URI) {
      throw new Error("MONGODB_URI is missing in environment variables");
    }

    await mongoose.connect(URI);

    console.log("Connected to MongoDB successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
}

startServer();
