// app/api/saveLocations/user/[userId]/route.ts
// The endpoint /api/saveLocations/user/[userId] clearly indicates that it fetches saved locations for a specific user.
import { NextRequest } from "next/server";
import { getSaveLocationsByUserId } from "@/lib/controllers/saveLocationController";

export async function GET(req: NextRequest) {
  return getSaveLocationsByUserId(req);
}
