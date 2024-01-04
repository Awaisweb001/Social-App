import Express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/mongoose.js";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";

dotenv.config();

const app = Express();
const PORT = process.env.PORT || 8000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON requests
app.use(Express.json());

// User routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api", commentRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
