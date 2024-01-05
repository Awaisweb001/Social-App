import User from "../models/usermodel.js";

// Send friend request
export const sendFriendRequest = async (req, res) => {
  try {
    const { receiverId } = req.body;
    const senderId = req.userId;

    // Find the receiver user
    const receiver = await User.findById(receiverId);
    if (!receiver) {
      return res.status(404).json({ message: "Receiver user not found" });
    }

    // Find the sender user
    const sender = await User.findById(senderId);
    if (!sender) {
      return res.status(404).json({ message: "Sender user not found" });
    }

    // Check if the sender is already friends with the receiver
    if (sender.friends.includes(receiverId)) {
      return res
        .status(400)
        .json({ message: "You are already friends with this user" });
    }

    // Check if friend request already exists
    const existingRequest = receiver.friendRequests.find(
      (request) => request.sender.toString() === senderId
    );
    if (existingRequest) {
      return res.status(400).json({ message: "Friend request already sent" });
    }

    // Add friend request to the receiver's friendRequests array
    receiver.friendRequests.push({ sender: senderId });
    await receiver.save();

    res.status(200).json({ message: "Friend request sent successfully" });
  } catch (error) {
    res.status(400).json({
      message: "Error sending friend request",
      error: error.message,
    });
  }
};

// Accept friend request

// Accept friend request
export const acceptFriendRequest = async (req, res) => {
  try {
    const senderId = req.params.senderId;
    const receiverId = req.userId;

    // Find the receiver user
    const receiver = await User.findById(receiverId);
    if (!receiver) {
      return res.status(404).json({ message: "Receiver user not found" });
    }

    // Find the sender user
    const sender = await User.findById(senderId);
    if (!sender) {
      return res.status(404).json({ message: "Sender user not found" });
    }

    // Check if the receiver is already friends with the sender
    if (receiver.friends.includes(senderId)) {
      return res
        .status(400)
        .json({ message: "You are already friends with this user" });
    }

    // Update friend request status
    const request = receiver.friendRequests.find(
      (request) => request.sender.toString() === senderId
    );
    if (!request) {
      return res.status(404).json({ message: "Friend request not found" });
    }
    request.status = "accepted";
    await receiver.save();

    // Add each user to the other's friends list
    receiver.friends.push(senderId);
    await receiver.save();

    sender.friends.push(receiverId);
    await sender.save();

    res.status(200).json({ message: "Friend request accepted successfully" });
  } catch (error) {
    res.status(400).json({
      message: "Error accepting friend request",
      error: error.message,
    });
  }
};
