// app/api/saveLocations/[id]/route.ts
import { NextRequest } from "next/server";
import {
  getSaveLocationById,
  updateSaveLocation,
  deleteSaveLocation,
} from "@/lib/controllers/saveLocationController";

export async function GET(req: NextRequest) {
  console.log("GET / api/saveLocations/[id]called");
  return getSaveLocationById(req);
}

export async function PUT(req: NextRequest) {
  console.log("PUT / api/saveLocations/[id]called");
  return updateSaveLocation(req);
}

export async function DELETE(req: NextRequest) {
  console.log("DELETE / api/saveLocations/[id]called");
  return deleteSaveLocation(req);
}
