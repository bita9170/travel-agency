// api/someProtectedRoute.ts
import { NextApiResponse } from "next";
import { authenticateToken } from "../../lib/auth";
import connectMongoDB from "../../lib/mongodb";
import User from "../../lib/model/User";
import { NextRequest } from "next/server";

export default async function handler(req: NextRequest, res: NextApiResponse) {
  try {
    const user = await authenticateToken(req);
    await connectMongoDB();
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error: any) {
    res.status(401).json({ error: error.message });
  }
}
