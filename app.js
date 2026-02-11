import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import employeeRoutes from "./Routes/employeeRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5008;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/employees", employeeRoutes);

// Root route
app.get("/", (req, res) => {
  res.json({ message: "Employee Management API Running" });
});

// MongoDB Connection
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });