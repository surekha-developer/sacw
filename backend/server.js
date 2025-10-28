


import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoute.js";

dotenv.config();

const app = express();

// ✅ Middlewares
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"], // allow both dev ports
    methods: ["GET", "POST"],
  })
);

// ✅ MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1); // stop the server if DB fails
  }
};

connectDB();
//test route
app.get("/", (req, res) => {
  res.send("🚀 Backend is working properly!");
});


// ✅ Routes
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5007;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
