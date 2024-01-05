import express from "express";
import {
  sendFriendRequest,
  acceptFriendRequest,
} from "../controllers/friendController.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/send-friend-request", authenticateUser, sendFriendRequest);

router.put(
  "/accept-friend-request/:senderId",
  authenticateUser,
  acceptFriendRequest
);

export default router;
