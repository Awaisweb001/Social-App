import express from "express";
import {
  createComment,
  createReply,
} from "../controllers/commentController.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";

const router = express.Router();


// Create Comment Route

router.post("/posts/:postId/comments", authenticateUser, createComment);

// Create Reply on Comment Route

router.post("/comments/:commentId/replies", authenticateUser, createReply);

export default router;
