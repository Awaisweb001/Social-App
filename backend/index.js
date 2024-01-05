import Express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./db/mongoose.js";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import FriendRoutes from "./routes/friendRoutes.js";

dotenv.config();

const app = Express();
const PORT = process.env.PORT || 8000;

// Connect to MongoDB
connectDB();

// Middlewears
app.use(cors());
app.use(Express.json());

// User routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api", commentRoutes);
app.use("/api", FriendRoutes);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
