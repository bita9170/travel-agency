// app/api/saveLocations/route.ts
import { NextRequest } from "next/server";
import {
  createSaveLocation,
  getSaveLocations,
} from "@/lib/controllers/saveLocationController";

export async function POST(req: NextRequest) {
  console.log("POST /api/saveLocations");
  return createSaveLocation(req);
}

export async function GET(req: NextRequest) {
  console.log("GET /api/saveLocations");
  return getSaveLocations(req);
}
