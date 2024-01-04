import { verifyToken } from "../utils/jwtUtils.js";

export const authenticateUser = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = await verifyToken(token);
    req.userId = decoded.userId;
    req.isAdmin = decoded.isAdmin;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
