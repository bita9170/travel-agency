// lib/auth.js
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET;

export const authenticateToken = async (req) => {
  const authHeader = req.headers.get("authorization");
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) throw new Error("No token provided");

  return new Promise((resolve, reject) => {
    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) reject(new Error("Invalid token"));
      resolve(user);
    });
  });
};
