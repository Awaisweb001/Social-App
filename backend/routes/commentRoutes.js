import express from 'express';
import { createComment } from '../controllers/commentController.js';
import { authenticateUser } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/posts/:postId/comments', authenticateUser, createComment);

export default router;
