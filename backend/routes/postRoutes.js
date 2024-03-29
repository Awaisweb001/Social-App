import express from "express";
import {
  createPost,
  getPosts,
  deletePost,
  likePost,
  updatePost,
} from "../controllers/postcontroller.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/create-post", authenticateUser, createPost);

// Delete Post
router.delete("/:postId", authenticateUser, deletePost);

// GET all posts
router.get("/AllPosts", getPosts);

// Like on Post

router.post("/:postId/like", authenticateUser, likePost);

// Update Post

router.put("/:postId", authenticateUser, updatePost);

export default router;
