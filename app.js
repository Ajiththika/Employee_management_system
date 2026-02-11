import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5008;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Employee Management API Running" });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});