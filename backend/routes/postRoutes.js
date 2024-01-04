import express from "express";
import {
  createPost,
  getPosts,
  deletePost,
} from "../controllers/postcontroller.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/create-post", authenticateUser, createPost);

// Delete Post
router.delete("/:postId", authenticateUser, deletePost);

// GET all posts
router.get("/AllPosts", getPosts);

export default router;
