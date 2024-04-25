// pages/api/someProtectedRoute.js
import { NextApiRequest, NextApiResponse } from "next";
import { authenticateToken } from "../../lib/auth";
import connectMongoDB from "../../lib/mongodb";
import User from "../../lib/model/User";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const user = await authenticateToken(req);
    await connectMongoDB();
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}
