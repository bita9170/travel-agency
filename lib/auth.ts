// lib/auth.ts
import jwt from "jsonwebtoken";

import { NextRequest } from "next/server";

const SECRET_KEY: any = process.env.JWT_SECRET;

export const authenticateToken = async (req: NextRequest) => {
  const authHeader = req.headers.get("authorization");
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) throw new Error("No token provided");

  return new Promise((resolve, reject) => {
    jwt.verify(token, SECRET_KEY, (err: any, user: any) => {
      if (err) reject(new Error("Invalid token"));
      resolve(user);
    });
  });
};
